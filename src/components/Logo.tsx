import { Zap } from "lucide-react";

interface LogoProps {
  theme?: "default" | "cyberpunk" | "paper" | "soft";
}

export function Logo({ theme = "default" }: LogoProps) {
  const colors = {
    default: { bg: "#00d4ff", text: "text-white" },
    cyberpunk: { bg: "#00ffff", text: "text-[#0a0a0f]" },
    paper: { bg: "#1a2332", text: "text-[#f5f3ed]" },
    soft: { bg: "#b794f6", text: "text-white" },
  };

  const color = colors[theme];

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center w-10 h-10 rounded-lg" style={{ backgroundColor: color.bg }}>
        <Zap className={`w-6 h-6 ${color.text}`} fill="currentColor" />
      </div>
      <span className="font-bold">TypeBlitz</span>
    </div>
  );
}
