import { Github, Mail, Coffee } from "lucide-react";
import { translations, Language } from "../locales/translations";
import { useState } from "react";
import { ContactModal } from "./ContactModal";

interface FooterProps {
  theme?: "default" | "cyberpunk" | "paper" | "soft";
  language?: Language;
}

export function Footer({ theme = "default", language = "English" }: FooterProps) {
  const t = translations[language];
  const [showContactModal, setShowContactModal] = useState(false);
  
  const getColors = () => {
    if (theme === "paper") {
      return {
        bg: "bg-white border-t border-[#e5e7eb]",
        text: "text-[#6b7280] hover:text-[#1a2332]",
        button: "bg-[#1a2332] text-[#f5f3ed] hover:bg-[#2d3748]",
      };
    }
    
    if (theme === "soft") {
      return {
        bg: "bg-white/30 glass border-t border-white/20",
        text: "text-[#64748b] hover:text-[#1e293b]",
        button: "bg-[#b794f6] text-white hover:bg-[#a585e6] glass",
      };
    }
    
    if (theme === "cyberpunk") {
      return {
        bg: "bg-[#0f0f1a] border-t border-[#00ffff]/20",
        text: "text-[#8b8b9f] hover:text-[#00ffff]",
        button: "bg-[#00ffff] text-[#0a0a0f] hover:shadow-[0_0_15px_rgba(0,255,255,0.6)]",
      };
    }
    
    return {
      bg: "bg-[#323437] border-t border-[#656669]/30",
      text: "text-[#8a8a8a] hover:text-[#e5e4dc]",
      button: "bg-[#00d4ff] text-[#1e1e1e] hover:bg-[#00bce6]",
    };
  };

  const colors = getColors();

  return (
    <>
      <div className={`w-full ${colors.bg} p-6`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <button 
              onClick={() => setShowContactModal(true)}
              className={`flex items-center gap-2 text-[12px] transition-colors ${colors.text}`}
            >
              <Mail className="w-4 h-4" />
              {t.contact}
            </button>
            <a 
              href="https://github.com/Jo5i4swastaken/TypeBlitz" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center gap-2 text-[12px] transition-colors ${colors.text}`}
            >
              <Github className="w-4 h-4" />
              {t.github}
            </a>
          </div>
        </div>
      </div>
      
      {showContactModal && (
        <ContactModal 
          onClose={() => setShowContactModal(false)} 
          theme={theme}
          language={language}
        />
      )}
    </>
  );
}