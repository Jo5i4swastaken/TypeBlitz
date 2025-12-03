import { Palette, Globe } from "lucide-react";
import { Logo } from "./Logo";
import { useState } from "react";
import { translations, Language } from "../locales/translations";

interface HeaderProps {
  onLanguageChange: (lang: string) => void;
  onThemeChange: (theme: "default" | "cyberpunk" | "paper" | "soft") => void;
  currentTheme: "default" | "cyberpunk" | "paper" | "soft";
  currentLanguage: Language;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
}

export function Header({ onLanguageChange, onThemeChange, currentTheme, currentLanguage, theme = "default" }: HeaderProps) {
  const [showLanguages, setShowLanguages] = useState(false);
  const [showThemes, setShowThemes] = useState(false);
  const t = translations[currentLanguage];

  const languages = ["English", "Spanish", "French", "German", "Portuguese"];
  
  const themes = [
    { id: "default" as const, name: t.darkMode, desc: t.darkModeDesc },
    { id: "cyberpunk" as const, name: t.cyberpunk, desc: t.cyberpunkDesc },
    { id: "paper" as const, name: t.paperInk, desc: t.paperInkDesc },
    { id: "soft" as const, name: t.softFocus, desc: t.softFocusDesc },
  ];

  const getColors = () => {
    if (theme === "paper") {
      return {
        bg: "bg-white border-b border-[#e5e7eb]",
        text: "text-[#1a2332]",
        icon: "text-[#6b7280] hover:text-[#1a2332]",
        dropdown: "bg-white border border-[#e5e7eb] text-[#1a2332]",
      };
    }
    
    if (theme === "soft") {
      return {
        bg: "bg-white/30 glass border-b border-white/20",
        text: "text-[#1e293b]",
        icon: "text-[#64748b] hover:text-[#1e293b]",
        dropdown: "bg-white/90 glass border border-white/40 text-[#1e293b]",
      };
    }
    
    if (theme === "cyberpunk") {
      return {
        bg: "bg-[#0f0f1a] border-b border-[#00ffff]/20",
        text: "text-[#00ffff]",
        icon: "text-[#8b8b9f] hover:text-[#00ffff]",
        dropdown: "bg-[#1a1a24] border border-[#00ffff]/30 text-[#00ffff]",
      };
    }
    
    return {
      bg: "bg-[#323437] border-b border-[#656669]/30",
      text: "text-white",
      icon: "text-[#8a8a8a] hover:text-[#e5e4dc]",
      dropdown: "bg-[#323437] border border-[#656669] text-[#e5e4dc]",
    };
  };

  const colors = getColors();

  const handleLanguageSelect = (lang: string) => {
    setShowLanguages(false);
    onLanguageChange(lang);
  };
  
  const handleThemeSelect = (themeId: "default" | "cyberpunk" | "paper" | "soft") => {
    onThemeChange(themeId);
    setShowThemes(false);
  };

  return (
    <div className={`w-full ${colors.bg} px-8 py-6`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className={colors.text}>
          <Logo theme={theme} />
        </div>
        <div className="flex items-center gap-4">
          <div className="relative">
            <button
              onClick={() => setShowLanguages(!showLanguages)}
              className={`p-2 rounded-lg transition-colors ${colors.icon}`}
            >
              <Globe className="w-5 h-5" />
            </button>
            {showLanguages && (
              <div className={`absolute right-0 mt-2 py-2 rounded-lg shadow-lg w-40 z-10 ${colors.dropdown}`}>
                {languages.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => handleLanguageSelect(lang)}
                    className={`w-full px-4 py-2 text-left text-[12px] hover:opacity-70 transition-opacity ${
                      currentLanguage === lang ? "font-bold" : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              onClick={() => setShowThemes(!showThemes)}
              className={`p-2 rounded-lg transition-colors ${colors.icon}`}
            >
              <Palette className="w-5 h-5" />
            </button>
            {showThemes && (
              <div className={`absolute right-0 mt-2 py-2 rounded-lg shadow-lg w-64 z-10 ${colors.dropdown}`}>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => handleThemeSelect(t.id)}
                    className={`w-full px-4 py-3 text-left hover:opacity-70 transition-opacity ${
                      currentTheme === t.id ? "font-bold" : ""
                    }`}
                  >
                    <div className="text-[14px]">{t.name}</div>
                    <div className="text-[10px] opacity-60">{t.desc}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}