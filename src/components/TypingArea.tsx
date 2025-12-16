import { useState, useEffect, useRef } from "react";

interface TypingAreaProps {
  text: string;
  isActive: boolean;
  onComplete: (wpm: number, accuracy: number) => void;
  onNext: () => void;
  timeLimit: number;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
  minSpeed: number | null;
  minAccuracy: number | null;
  difficulty: string;
}

/**
 * TypingArea Component
 * 
 * The core component for the typing test. It handles:
 * - Capturing user input and comparing it with the target text
 * - Calculating real-time WPM and Accuracy
 * - Enforcing difficulty rules (Expert: no backspace, Master: fail on error)
 * - Auto-advancing to the next text chunk
 * - Displaying visual warnings for low speed/accuracy
 */
export function TypingArea({
  text,
  isActive,
  onComplete,
  onNext,
  timeLimit,
  theme = "default",
  minSpeed,
  minAccuracy,
  difficulty
}: TypingAreaProps) {
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
  const [warningActive, setWarningActive] = useState(false);

  // Stats history for previous chunks
  const [history, setHistory] = useState<{
    words: number;
    errors: number;
    chars: number;
  }>({ words: 0, errors: 0, chars: 0 });

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isActive && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isActive]);

  useEffect(() => {
    if (isActive && !startTime) {
      setStartTime(Date.now());
    }
  }, [isActive, startTime]);

  // Reset input when text changes (auto-advance)
  useEffect(() => {
    setInput("");
    setCurrentIndex(0);
    setErrors([]);
  }, [text]);

  useEffect(() => {
    if (!isActive || !startTime) return;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startTime) / 1000);
      const remaining = timeLimit - elapsed;

      // Check minimums
      if (elapsed > 5) { // Only check after 5 seconds
        const timeInMinutes = elapsed / 60;

        // Calculate current totals including history
        const currentWords = input.trim().split(/\s+/).length;
        const totalWords = history.words + (input.trim() ? currentWords : 0);

        const currentWpm = timeInMinutes > 0 ? Math.round(totalWords / timeInMinutes) : 0;

        const totalChars = history.chars + input.length;
        const totalErrors = history.errors + errors.length;
        const currentAccuracy = totalChars > 0
          ? Math.round(((totalChars - totalErrors) / totalChars) * 100)
          : 100;

        let shouldWarn = false;
        if (minSpeed && currentWpm < minSpeed) shouldWarn = true;
        if (minAccuracy && currentAccuracy < minAccuracy) shouldWarn = true;

        setWarningActive(shouldWarn);
      }

      if (remaining <= 0) {
        clearInterval(timer);
        calculateResults();
      } else {
        setTimeRemaining(remaining);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isActive, startTime, timeLimit, input, errors, minSpeed, minAccuracy, history]);

  const calculateResults = () => {
    const timeInMinutes = timeLimit / 60;

    // Current chunk stats
    const currentWords = input.trim().split(/\s+/).length;
    const totalWords = history.words + (input.trim() ? currentWords : 0);

    const wpm = Math.round(totalWords / timeInMinutes);

    // Actually for accuracy: (total_correct_chars / total_chars) * 100
    // History stores total chars typed and total errors
    const finalTotalChars = history.chars + input.length;
    const finalTotalErrors = history.errors + errors.length;

    const accuracy = finalTotalChars > 0
      ? Math.round(((finalTotalChars - finalTotalErrors) / finalTotalChars) * 100)
      : 100;

    onComplete(wpm, accuracy);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (difficulty === "expert" && e.key === "Backspace") {
      e.preventDefault();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    // Master mode check: if error, end test immediately
    if (difficulty === "master") {
      if (value.length > input.length) {
        const lastCharIndex = value.length - 1;
        if (value[lastCharIndex] !== text[lastCharIndex]) {
          onComplete(0, 0);
          return;
        }
      }
    }

    // Check for auto-advance
    if (value.length === text.length) {
      // Accumulate stats
      const wordsInChunk = value.trim().split(/\s+/).length;
      const errorsInChunk = [];
      for (let i = 0; i < value.length; i++) {
        if (value[i] !== text[i]) errorsInChunk.push(i);
      }

      setHistory(prev => ({
        words: prev.words + wordsInChunk,
        errors: prev.errors + errorsInChunk.length,
        chars: prev.chars + value.length
      }));

      // Trigger next text
      onNext();
      return;
    }

    setInput(value);

    const newErrors: number[] = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] !== text[i]) {
        newErrors.push(i);
      }
    }
    setErrors(newErrors);
    setCurrentIndex(value.length);
  };

  const getCharacterColor = (index: number) => {
    if (index < currentIndex) {
      if (errors.includes(index)) {
        if (theme === "paper") return "text-[#dc2626]";
        if (theme === "soft") return "text-[#f43f5e]";
        if (theme === "cyberpunk") return "text-[#ff006e]";
        return "text-[#ff3366]";
      }
      if (theme === "paper") return "text-[#059669]";
      if (theme === "soft") return "text-[#10b981]";
      if (theme === "cyberpunk") return "text-[#00ff9f]";
      return "text-[#00ff88]";
    }
    if (index === currentIndex) {
      if (theme === "paper") return "text-[#1a2332] bg-[#1a2332]/20";
      if (theme === "soft") return "text-[#1e293b] bg-[#b794f6]/30";
      if (theme === "cyberpunk") return "text-[#00ffff] bg-[#00ffff]/20";
      return "text-white bg-[#00d4ff]/30";
    }
    if (theme === "paper") return "text-[#6b7280]";
    if (theme === "soft") return "text-[#94a3b8]";
    if (theme === "cyberpunk") return "text-[#4a4a5c]";
    return "text-[#8a8a8a]";
  };

  const getCursorColor = () => {
    if (theme === "paper") return "border-[#1a2332]";
    if (theme === "soft") return "border-[#b794f6]";
    if (theme === "cyberpunk") return "border-[#00ffff]";
    return "border-[#00d4ff]";
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl mx-auto px-8 relative">
      {isActive && (
        <div className="flex flex-col items-center gap-2">
          {warningActive && (
            <div className="text-red-500 font-bold animate-blink-red text-sm tracking-widest">
              SPEED/ACCURACY LOW!
            </div>
          )}
          <div
            className={`${theme === "paper"
              ? "text-[#1a2332]"
              : theme === "soft"
                ? "text-[#b794f6]"
                : theme === "cyberpunk"
                  ? "text-[#00ffff]"
                  : "text-[#00d4ff]"
              }`}
          >
            {formatTime(timeRemaining)}
          </div>
        </div>
      )}

      <div className="relative w-full">
        <p className="font-mono text-center leading-relaxed whitespace-pre-wrap">
          {text.split("").map((char, index) => (
            <span key={index} className={`${getCharacterColor(index)} transition-colors relative`}>
              {char}
              {index === currentIndex && (
                <span
                  className={`absolute left-0 top-0 h-full w-[2px] ${getCursorColor()} cursor-blink`}
                />
              )}
            </span>
          ))}
        </p>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 opacity-0 cursor-default"
          disabled={!isActive}
        />
      </div>
    </div>
  );
}
