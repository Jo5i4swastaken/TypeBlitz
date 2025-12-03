import { useState, useEffect, useRef } from "react";

interface TypingAreaProps {
  text: string;
  isActive: boolean;
  onComplete: (wpm: number, accuracy: number) => void;
  timeLimit: number;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
}

export function TypingArea({ text, isActive, onComplete, timeLimit, theme = "default" }: TypingAreaProps) {
  const [input, setInput] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [errors, setErrors] = useState<number[]>([]);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState(timeLimit);
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

  useEffect(() => {
    if (!isActive || !startTime) return;

    const timer = setInterval(() => {
      const elapsed = Math.floor((Date.now() - startTime) / 1000);
      const remaining = timeLimit - elapsed;

      if (remaining <= 0) {
        clearInterval(timer);
        calculateResults();
      } else {
        setTimeRemaining(remaining);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [isActive, startTime, timeLimit]);

  const calculateResults = () => {
    const timeInMinutes = timeLimit / 60;
    const wordsTyped = input.trim().split(/\s+/).length;
    const wpm = Math.round(wordsTyped / timeInMinutes);
    const accuracy = Math.round(((text.length - errors.length) / text.length) * 100);
    onComplete(wpm, accuracy);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
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
    <div className="flex flex-col items-center justify-center gap-12 w-full max-w-4xl mx-auto px-8">
      {isActive && (
        <div
          className={`${
            theme === "paper"
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
          className="absolute inset-0 opacity-0 cursor-default"
          disabled={!isActive}
        />
      </div>
    </div>
  );
}
