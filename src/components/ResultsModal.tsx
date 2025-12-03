import { Trophy, Target, Clock } from "lucide-react";
import { translations, Language } from "../locales/translations";

interface ResultsModalProps {
  wpm: number;
  accuracy: number;
  onClose: () => void;
  onRetry: () => void;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
  language?: Language;
}

export function ResultsModal({ wpm, accuracy, onClose, onRetry, theme = "default", language = "English" }: ResultsModalProps) {
  const t = translations[language];
  
  const getColors = () => {
    if (theme === "paper") {
      return {
        bg: "bg-white",
        overlay: "bg-black/30",
        text: "text-[#1a2332]",
        textDim: "text-[#6b7280]",
        accent: "text-[#1a2332]",
        button: "bg-[#1a2332] text-[#f5f3ed] hover:bg-[#2d3748]",
        buttonSecondary: "bg-white text-[#1a2332] border border-[#d1d5db] hover:bg-[#f9fafb]",
      };
    }
    
    if (theme === "soft") {
      return {
        bg: "bg-white/90 glass",
        overlay: "bg-black/20",
        text: "text-[#1e293b]",
        textDim: "text-[#64748b]",
        accent: "text-[#b794f6]",
        button: "bg-[#b794f6] text-white hover:bg-[#a585e6] glass",
        buttonSecondary: "bg-white/40 text-[#1e293b] glass hover:bg-white/60",
      };
    }
    
    if (theme === "cyberpunk") {
      return {
        bg: "bg-[#1a1a24] border border-[#00ffff]/30",
        overlay: "bg-black/60",
        text: "text-[#00ffff]",
        textDim: "text-[#8b8b9f]",
        accent: "text-[#00ffff]",
        button: "bg-[#00ffff] text-[#0a0a0f] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]",
        buttonSecondary: "bg-[#0f0f1a] text-[#00ffff] border border-[#00ffff]/30 hover:bg-[#1a1a24]",
      };
    }
    
    return {
      bg: "bg-[#323437]",
      overlay: "bg-black/50",
      text: "text-white",
      textDim: "text-[#8a8a8a]",
      accent: "text-[#00d4ff]",
      button: "bg-[#00d4ff] text-[#1e1e1e] hover:bg-[#00bce6]",
      buttonSecondary: "bg-[#656669] text-[#e5e4dc] hover:bg-[#757779]",
    };
  };

  const colors = getColors();

  return (
    <div className={`fixed inset-0 ${colors.overlay} flex items-center justify-center z-50 p-4`}>
      <div className={`${colors.bg} rounded-2xl p-8 max-w-md w-full shadow-2xl`}>
        <div className="text-center mb-8">
          <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${colors.accent}`}>
            <Trophy className="w-8 h-8" />
          </div>
          <h2 className={`mb-2 ${colors.text}`}>{t.testComplete}</h2>
          <p className={`text-[14px] ${colors.textDim}`}>{t.resultsDesc}</p>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${colors.accent}`}>
              <Clock className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className={`text-[12px] ${colors.textDim}`}>{t.wordsPerMinute}</p>
              <p className={`${colors.text}`}>{wpm} WPM</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-lg ${colors.accent}`}>
              <Target className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <p className={`text-[12px] ${colors.textDim}`}>{t.accuracy}</p>
              <p className={`${colors.text}`}>{accuracy}%</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <button
            onClick={onRetry}
            className={`flex-1 px-6 py-3 rounded-lg transition-all ${colors.button}`}
          >
            {t.tryAgain}
          </button>
          <button
            onClick={onClose}
            className={`flex-1 px-6 py-3 rounded-lg transition-all ${colors.buttonSecondary}`}
          >
            {t.backToHome}
          </button>
        </div>
      </div>
    </div>
  );
}