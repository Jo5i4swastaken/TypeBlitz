import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { TimeSelector } from "./TimeSelector";
import { TypingArea } from "./TypingArea";
import { translations, Language } from "../locales/translations";

interface HomeViewProps {
  difficulty: string;
  mode: string;
  selectedTime: number;
  text: string;
  onDifficultyChange: (value: string) => void;
  onModeChange: (value: string) => void;
  onTimeChange: (time: number) => void;
  onLanguageChange: (lang: string) => void;
  onThemeChange: (theme: "default" | "cyberpunk" | "paper" | "soft") => void;
  currentTheme: "default" | "cyberpunk" | "paper" | "soft";
  currentLanguage: Language;
  onStartTest: () => void;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
}

export function HomeView({
  difficulty,
  mode,
  selectedTime,
  text,
  onDifficultyChange,
  onModeChange,
  onTimeChange,
  onLanguageChange,
  onThemeChange,
  currentTheme,
  currentLanguage,
  onStartTest,
  theme = "default",
}: HomeViewProps) {
  const t = translations[currentLanguage];
  
  const getBgColor = () => {
    if (theme === "paper") return "bg-[#f5f3ed]";
    if (theme === "soft") return "bg-gradient-to-br from-[#e8f0f7] via-[#f0e8f7] to-[#e8f7f0]";
    if (theme === "cyberpunk") return "bg-[#0a0a0f]";
    return "bg-[#1e1e1e]";
  };

  return (
    <div className={`min-h-screen ${getBgColor()} flex flex-col`}>
      <Header onLanguageChange={onLanguageChange} onThemeChange={onThemeChange} currentTheme={currentTheme} currentLanguage={currentLanguage} theme={theme} />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          difficulty={difficulty}
          mode={mode}
          onDifficultyChange={onDifficultyChange}
          onModeChange={onModeChange}
          theme={theme}
          language={currentLanguage}
        />
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex flex-col items-center justify-center gap-12 p-12">
            <TimeSelector selectedTime={selectedTime} onTimeChange={onTimeChange} theme={theme} />
            <div className="w-full max-w-4xl text-center">
              <p
                className={`mono leading-relaxed ${
                  theme === "paper"
                    ? "text-[#6b7280]"
                    : theme === "soft"
                    ? "text-[#64748b]"
                    : theme === "cyberpunk"
                    ? "text-[#4a4a5c]"
                    : "text-[#8a8a8a]"
                }`}
              >
                {text}
              </p>
              <div className="mt-8">
                <button
                  onClick={onStartTest}
                  className={`px-8 py-3 rounded-lg transition-all hover:scale-105 ${
                    theme === "paper"
                      ? "bg-[#1a2332] text-[#f5f3ed] hover:bg-[#2d3748]"
                      : theme === "soft"
                      ? "bg-[#b794f6] text-white glass hover:bg-[#a585e6]"
                      : theme === "cyberpunk"
                      ? "bg-[#00ffff] text-[#0a0a0f] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]"
                      : "bg-[#00d4ff] text-[#1e1e1e] hover:bg-[#00bce6]"
                  }`}
                >
                  {t.startTest}
                </button>
              </div>
            </div>
          </div>
          <Footer theme={theme} language={currentLanguage} />
        </div>
      </div>
    </div>
  );
}