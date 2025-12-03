interface SettingButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
  color?: "default" | "purple" | "red";
}

export function SettingButton({ label, active = false, onClick, theme = "default", color = "default" }: SettingButtonProps) {
  const getStyles = () => {
    // Special colors for difficulty levels
    if (active && color === "purple") {
      if (theme === "paper") {
        return "bg-[#7c3aed] text-white";
      }
      if (theme === "soft") {
        return "bg-[#f97316] text-white glass";
      }
      if (theme === "cyberpunk") {
        return "bg-[#a855f7] text-white shadow-[0_0_10px_rgba(168,85,247,0.5)]";
      }
      return "bg-[#7c3aed] text-white";
    }
    
    if (active && color === "red") {
      if (theme === "paper") {
        return "bg-[#dc2626] text-white";
      }
      if (theme === "soft") {
        return "bg-[#ef4444] text-white glass";
      }
      if (theme === "cyberpunk") {
        return "bg-[#ff006e] text-white shadow-[0_0_10px_rgba(255,0,110,0.5)]";
      }
      return "bg-[#dc2626] text-white";
    }
    
    if (theme === "paper") {
      return active
        ? "bg-[#1a2332] text-[#f5f3ed]"
        : "bg-white text-[#1a2332] border border-[#d1d5db]";
    }
    
    if (theme === "soft") {
      return active
        ? "bg-[#b794f6] text-white glass"
        : "bg-white/40 text-[#4b5563] glass";
    }
    
    if (theme === "cyberpunk") {
      return active
        ? "bg-[#00ffff] text-[#0a0a0f] shadow-[0_0_10px_rgba(0,255,255,0.5)]"
        : "bg-[#1a1a24] text-[#00ffff] border border-[#00ffff]/30";
    }
    
    return active
      ? "bg-white text-[#323437]"
      : "bg-[#656669] text-[#e5e4dc]";
  };

  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded text-[10px] transition-all hover:opacity-80 ${getStyles()}`}
    >
      {label}
    </button>
  );
}