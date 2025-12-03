import { X, Mail, MessageSquare, User } from "lucide-react";
import { useState } from "react";
import { translations, Language } from "../locales/translations";
import { CheckCircle } from "lucide-react";

interface ContactModalProps {
  onClose: () => void;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
  language?: Language;
}

export function ContactModal({ onClose, theme = "default", language = "English" }: ContactModalProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);

  const getColors = () => {
    if (theme === "paper") {
      return {
        bg: "bg-[#f5f3ed]",
        card: "bg-white border-2 border-[#1a2332]",
        text: "text-[#1a2332]",
        textDim: "text-[#6b7280]",
        input: "bg-white border border-[#d1d5db] text-[#1a2332] focus:border-[#1a2332] focus:outline-none",
        button: "bg-[#1a2332] text-[#f5f3ed] hover:bg-[#2d3748]",
        buttonSecondary: "bg-transparent border border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-[#f5f3ed]",
        accent: "bg-[#1a2332]/10 text-[#1a2332]",
        info: "bg-[#f9fafb] border border-[#e5e7eb]",
      };
    }

    if (theme === "soft") {
      return {
        bg: "bg-gradient-to-br from-[#fef3f8] via-[#f0f4ff] to-[#f3f0ff]",
        card: "bg-white/60 glass border border-white/40 backdrop-blur-xl shadow-xl",
        text: "text-[#1e293b]",
        textDim: "text-[#64748b]",
        input: "bg-white/40 glass border border-white/20 text-[#1e293b] focus:border-[#b794f6] focus:outline-none",
        button: "bg-[#b794f6] text-white glass hover:bg-[#a585e6]",
        buttonSecondary: "bg-white/40 glass border border-white/40 text-[#1e293b] hover:bg-white/60",
        accent: "bg-[#b794f6]/20 text-[#b794f6]",
        info: "bg-white/40 glass border border-white/20",
      };
    }

    if (theme === "cyberpunk") {
      return {
        bg: "bg-[#0a0a0f]",
        card: "bg-[#1a1a24] border-2 border-[#00ffff]",
        text: "text-[#00ffff]",
        textDim: "text-[#8b8b9f]",
        input: "bg-[#0f0f1a] border border-[#00ffff]/30 text-[#00ffff] focus:border-[#00ffff] focus:outline-none focus:shadow-[0_0_10px_rgba(0,255,255,0.3)]",
        button: "bg-[#00ffff] text-[#0a0a0f] hover:shadow-[0_0_20px_rgba(0,255,255,0.6)]",
        buttonSecondary: "bg-transparent border border-[#00ffff] text-[#00ffff] hover:bg-[#00ffff] hover:text-[#0a0a0f]",
        accent: "bg-[#00ffff]/20 text-[#00ffff]",
        info: "bg-[#0f0f1a] border border-[#00ffff]/20",
      };
    }

    return {
      bg: "bg-[#1e1e1e]",
      card: "bg-[#323437] border border-[#656669]",
      text: "text-[#e5e4dc]",
      textDim: "text-[#8a8a8a]",
      input: "bg-[#656669] border border-[#656669] text-[#e5e4dc] focus:border-[#00d4ff] focus:outline-none",
      button: "bg-[#00d4ff] text-[#1e1e1e] hover:bg-[#00bce6]",
      buttonSecondary: "bg-transparent border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#1e1e1e]",
      accent: "bg-[#00d4ff]/20 text-[#00d4ff]",
      info: "bg-[#2a2a2d] border border-[#656669]",
    };
  };

  const colors = getColors();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Show success message
    setIsSent(true);
  };

  const handleClose = () => {
    setFormData({ name: "", email: "", message: "" });
    setIsSent(false);
    onClose();
  };

  // Success message view
  if (isSent) {
    return (
      <div className={`fixed inset-0 ${colors.bg} bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4`}>
        <div className={`${colors.card} rounded-xl p-8 max-w-md w-full`}>
          <div className="flex flex-col items-center text-center">
            <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full mb-6 ${colors.accent}`}>
              <CheckCircle className="w-10 h-10" />
            </div>
            <h2 className={`mb-4 ${colors.text}`}>{t.messageSent}</h2>
            <p className={`text-[14px] mb-8 ${colors.textDim}`}>
              {t.messageSentDesc}
            </p>
            <button
              onClick={handleClose}
              className={`w-full px-6 py-3 rounded-lg transition-all text-[14px] ${colors.button}`}
            >
              {t.closeButton}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 ${colors.bg} bg-opacity-80 backdrop-blur-sm flex items-center justify-center z-50 p-4`}>
      <div className={`${colors.card} rounded-xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto`}>
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className={`mb-2 ${colors.text}`}>{t.contactUs}</h2>
            <p className={`text-[14px] ${colors.textDim}`}>{t.contactDesc}</p>
          </div>
          <button
            onClick={handleClose}
            className={`p-2 rounded-lg hover:opacity-70 transition-opacity ${colors.textDim}`}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <h3 className={`mb-4 ${colors.text}`}>{t.sendMessage}</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className={`block text-[12px] mb-2 ${colors.textDim}`}>
                  {t.yourName}
                </label>
                <div className="relative">
                  <User className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${colors.textDim}`} />
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.namePlaceholder}
                    required
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-[14px] ${colors.input}`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-[12px] mb-2 ${colors.textDim}`}>
                  {t.yourEmail}
                </label>
                <div className="relative">
                  <Mail className={`absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 ${colors.textDim}`} />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.emailPlaceholder}
                    required
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-[14px] ${colors.input}`}
                  />
                </div>
              </div>

              <div>
                <label className={`block text-[12px] mb-2 ${colors.textDim}`}>
                  {t.yourMessage}
                </label>
                <div className="relative">
                  <MessageSquare className={`absolute left-3 top-3 w-4 h-4 ${colors.textDim}`} />
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.messagePlaceholder}
                    required
                    rows={4}
                    className={`w-full pl-10 pr-4 py-2.5 rounded-lg text-[14px] resize-none ${colors.input}`}
                  />
                </div>
              </div>

              <button
                type="submit"
                className={`w-full px-6 py-3 rounded-lg transition-all text-[14px] ${colors.button}`}
              >
                {t.sendButton}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className={`mb-4 ${colors.text}`}>{t.contactInfo}</h3>
            <div className={`${colors.info} rounded-lg p-6 space-y-4`}>
              <div>
                <p className={`text-[12px] mb-1 ${colors.textDim}`}>{t.email}</p>
                <p className={`text-[14px] ${colors.text}`}>support@typeblitz.com</p>
              </div>
              
              <div className="border-t border-current opacity-20" />
              
              <div>
                <p className={`text-[12px] mb-1 ${colors.textDim}`}>{t.followUs}</p>
                <div className="flex flex-col gap-2 mt-2">
                  <a
                    href="https://github.com/Jo5i4swastaken/TypeBlitz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-[14px] hover:opacity-70 transition-opacity ${colors.text}`}
                  >
                    GitHub: @Jo5i4swastaken/TypeBlitz
                  </a>
                </div>
              </div>

              <div className="border-t border-current opacity-20" />

              <div>
                <p className={`text-[12px] mb-2 ${colors.textDim}`}>{t.responseTime}</p>
                <p className={`text-[14px] ${colors.text}`}>{t.responseTimeDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}