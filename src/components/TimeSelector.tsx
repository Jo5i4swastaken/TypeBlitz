import { Clock } from "lucide-react";

interface TimeSelectorProps {
  selectedTime: number;
  onTimeChange: (time: number) => void;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
}

export function TimeSelector({ selectedTime, onTimeChange, theme = "default" }: TimeSelectorProps) {
  const times = [15, 30, 60, 120];

  const getColors = () => {
    if (theme === "paper") {
      return {
        button: (active: boolean) =>
          active
            ? "bg-[#1a2332] text-[#f5f3ed]"
            : "bg-white text-[#1a2332] border border-[#d1d5db]",
      };
    }
    
    if (theme === "soft") {
      return {
        button: (active: boolean) =>
          active
            ? "bg-[#b794f6] text-white glass"
            : "bg-white/40 text-[#4b5563] glass",
      };
    }
    
    if (theme === "cyberpunk") {
      return {
        button: (active: boolean) =>
          active
            ? "bg-[#00ffff] text-[#0a0a0f] shadow-[0_0_10px_rgba(0,255,255,0.5)]"
            : "bg-[#1a1a24] text-[#00ffff] border border-[#00ffff]/30",
      };
    }
    
    return {
      button: (active: boolean) =>
        active
          ? "bg-[#00d4ff] text-[#1e1e1e]"
          : "bg-[#656669] text-[#e5e4dc]",
    };
  };

  const colors = getColors();

  return (
    <div className="flex items-center gap-4">
      <Clock className="w-5 h-5 opacity-50" />
      <div className="flex items-center gap-2">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => onTimeChange(time)}
            className={`px-4 py-2 rounded text-[12px] transition-all hover:opacity-80 ${colors.button(
              selectedTime === time
            )}`}
          >
            {time}s
          </button>
        ))}
      </div>
    </div>
  );
}
