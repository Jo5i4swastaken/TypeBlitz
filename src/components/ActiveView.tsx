import { RefreshCw, SkipForward } from "lucide-react";
import { Logo } from "./Logo";
import { TypingArea } from "./TypingArea";
import { translations, Language } from "../locales/translations";

interface ActiveViewProps {
  text: string;
  timeLimit: number;
  onComplete: (wpm: number, accuracy: number) => void;
  onRepeat: () => void;
  onNext: () => void;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
  language?: Language;
}

export function ActiveView({ text, timeLimit, onComplete, onRepeat, onNext, theme = "default", language = "English" }: ActiveViewProps) {
  const t = translations[language];
  
  const getBgColor = () => {
    if (theme === "paper") return "bg-[#f5f3ed]";
    if (theme === "soft") return "bg-gradient-to-br from-[#e8f0f7] via-[#f0e8f7] to-[#e8f7f0]";
    if (theme === "cyberpunk") return "bg-[#0a0a0f]";
    return "bg-[#1e1e1e]";
  };

  const getTextColor = () => {
    if (theme === "paper") return "text-[#1a2332]";
    if (theme === "soft") return "text-[#1e293b]";
    if (theme === "cyberpunk") return "text-[#00ffff]";
    return "text-white";
  };

  const getButtonColor = () => {
    if (theme === "paper") return "text-[#6b7280] hover:text-[#1a2332]";
    if (theme === "soft") return "text-[#94a3b8] hover:text-[#b794f6]";
    if (theme === "cyberpunk") return "text-[#8b8b9f] hover:text-[#00ffff]";
    return "text-[#8a8a8a] hover:text-[#00d4ff]";
  };

  return (
    <div className={`min-h-screen ${getBgColor()} flex flex-col`}>
      <div className="p-8">
        <div className={getTextColor()}>
          <Logo theme={theme} />
        </div>
      </div>
      <div className="flex-1 flex items-center justify-center">
        <TypingArea text={text} isActive={true} onComplete={onComplete} timeLimit={timeLimit} theme={theme} />
      </div>
      <div className="p-8 flex items-center justify-center gap-6">
        <button
          onClick={onRepeat}
          className={`flex items-center gap-2 transition-colors ${getButtonColor()}`}
        >
          <RefreshCw className="w-5 h-5" />
          <span className="text-[12px]">{t.repeat}</span>
        </button>
        <button
          onClick={onNext}
          className={`flex items-center gap-2 transition-colors ${getButtonColor()}`}
        >
          <SkipForward className="w-5 h-5" />
          <span className="text-[12px]">{t.next}</span>
        </button>
      </div>
    </div>
  );
}