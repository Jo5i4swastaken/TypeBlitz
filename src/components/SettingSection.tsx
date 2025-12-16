import { ReactNode } from "react";


interface SettingSectionProps {
  title: string;
  description: string;
  children: ReactNode;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
}

export function SettingSection({ title, description, children, theme = "default" }: SettingSectionProps) {
  const getTextColors = () => {
    if (theme === "paper") {
      return {
        title: "text-[#1a2332]",
        description: "text-[#6b7280]",
      };
    }
    
    if (theme === "soft") {
      return {
        title: "text-[#1e293b]",
        description: "text-[#64748b]",
      };
    }
    
    if (theme === "cyberpunk") {
      return {
        title: "text-[#00ffff]",
        description: "text-[#8b8b9f]",
      };
    }
    
    return {
      title: "text-[#e5e4dc]",
      description: "text-[#8a8a8a]",
    };
  };

  const colors = getTextColors();

  return (
    <div className="flex flex-col gap-4 w-full">
      <p className={`font-medium text-[10px] ${colors.title}`}>{title}</p>
      <p className={`font-light text-[10px] ${colors.description}`}>{description}</p>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}
