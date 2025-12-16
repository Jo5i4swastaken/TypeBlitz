import { SettingSection } from "./SettingSection";
import { SettingButton } from "./SettingButton";
import { translations, Language } from "../locales/translations";

interface SidebarProps {
  difficulty: string;
  mode: string;
  onDifficultyChange: (value: string) => void;
  onModeChange: (value: string) => void;
  theme?: "default" | "cyberpunk" | "paper" | "soft";
  language?: Language;
  minSpeed: number | null;
  minAccuracy: number | null;
  onMinSpeedChange: (value: number | null) => void;
  onMinAccuracyChange: (value: number | null) => void;
}

export function Sidebar({
  difficulty,
  mode,
  onDifficultyChange,
  onModeChange,
  theme = "default",
  language = "English",
  minSpeed,
  minAccuracy,
  onMinSpeedChange,
  onMinAccuracyChange
}: SidebarProps) {
  const t = translations[language];

  const getBgColor = () => {
    if (theme === "paper") return "bg-white border-r border-[#e5e7eb]";
    if (theme === "soft") return "bg-white/30 glass border-r border-white/20";
    if (theme === "cyberpunk") return "bg-[#0f0f1a] border-r border-[#00ffff]/20";
    return "bg-[#323437] border-r border-[#656669]/30";
  };

  const getDifficultyDesc = () => {
    if (difficulty === "expert") return t.expertDesc;
    if (difficulty === "master") return t.masterDesc;
    return t.normalDesc;
  };

  return (
    <div className={`w-64 h-full ${getBgColor()} overflow-y-auto p-8`}>
      <div className="flex flex-col gap-8">
        <SettingSection
          title={t.difficulty}
          description={getDifficultyDesc()}
          theme={theme}
        >
          <SettingButton
            label={t.normal}
            active={difficulty === "normal"}
            onClick={() => onDifficultyChange("normal")}
            theme={theme}
          />
          <SettingButton
            label={t.expert}
            active={difficulty === "expert"}
            onClick={() => onDifficultyChange("expert")}
            theme={theme}
            color="purple"
          />
          <SettingButton
            label={t.master}
            active={difficulty === "master"}
            onClick={() => onDifficultyChange("master")}
            theme={theme}
            color="red"
          />
        </SettingSection>

        <div className="border-t border-dashed opacity-30" />

        <SettingSection
          title={t.minSpeed}
          description={t.minSpeedDesc}
          theme={theme}
        >
          <input
            type="number"
            value={minSpeed || ""}
            onChange={(e) => {
              const val = e.target.value ? parseInt(e.target.value) : null;
              onMinSpeedChange(val);
            }}
            placeholder={t.wpmPlaceholder}
            className={`w-20 px-3 py-1.5 rounded text-[10px] ${theme === "paper"
              ? "bg-white border border-[#d1d5db] text-[#1a2332]"
              : theme === "soft"
                ? "bg-white/40 glass border border-white/20 text-[#1e293b]"
                : theme === "cyberpunk"
                  ? "bg-[#1a1a24] border border-[#00ffff]/30 text-[#00ffff]"
                  : "bg-[#656669] border border-[#656669] text-[#e5e4dc]"
              }`}
          />
        </SettingSection>

        <div className="border-t border-dashed opacity-30" />

        <SettingSection
          title={t.accuracyLimit}
          description={t.accuracyLimitDesc}
          theme={theme}
        >
          <input
            type="number"
            value={minAccuracy || ""}
            onChange={(e) => {
              const val = e.target.value ? parseInt(e.target.value) : null;
              onMinAccuracyChange(val);
            }}
            placeholder={t.accuracyPlaceholder}
            className={`w-24 px-3 py-1.5 rounded text-[10px] ${theme === "paper"
              ? "bg-white border border-[#d1d5db] text-[#1a2332]"
              : theme === "soft"
                ? "bg-white/40 glass border border-white/20 text-[#1e293b]"
                : theme === "cyberpunk"
                  ? "bg-[#1a1a24] border border-[#00ffff]/30 text-[#00ffff]"
                  : "bg-[#656669] border border-[#656669] text-[#e5e4dc]"
              }`}
          />
        </SettingSection>
      </div>
    </div>
  );
}