import {
  Leaf,
  Calendar,
  MapPin,
  Ruler,
  Droplet,
  Package,
  type LucideProps,
  type LucideIcon,
} from "lucide-react";
import type { PresetIconName, IngredientIcon } from "@/types/ingredient";

const PRESET_ICONS: Record<PresetIconName, LucideIcon> = {
  Leaf,
  Calendar,
  MapPin,
  Ruler,
  Droplet,
  Package,
};

interface DetailRowProps {
  icon: IngredientIcon;
  label: string;
  value: string;
  iconColor?: string;
}

function resolveIcon(icon: IngredientIcon): LucideIcon {
  if (typeof icon === "string") {
    return PRESET_ICONS[icon as PresetIconName] ?? Leaf;
  }
  return icon;
}

export default function DetailRow({ icon, label, value, iconColor  }: DetailRowProps) {
  const Icon = resolveIcon(icon);

  return (
    <div>
      <div className="flex items-center gap-4 py-4">
        <Icon
          size={22}
          strokeWidth={1.5}
          style={{ color: iconColor ?? "var(--color-brand-green-mid)", flexShrink: 0 }}
        />
        <span
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "var(--text-md)",
            width: "8rem",
            flexShrink: 0,
          }}
        >
          {label}
        </span>
        <span
          style={{
            color: "var(--color-text-primary)",
            fontSize: "var(--text-md)",
            fontWeight: 500,
          }}
        >
          {value}
        </span>
      </div>
      <div style={{ height: "1px", backgroundColor: "var(--color-border)" }} />
    </div>
  );
}