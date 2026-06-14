import type { LucideIcon } from "lucide-react";

export type PresetIconName =
  | "Leaf"
  | "Calendar"
  | "MapPin"
  | "Ruler"
  | "Droplet"
  | "Package";

export type IngredientIcon = PresetIconName | LucideIcon;

export interface IngredientDetail {
  icon: IngredientIcon;
  label: string;
  value: string;
}

export interface Ingredient {
  id: number;
  category: string;
  categoryColor: string;
  iconColor: string;
  name: string;
  bgColor: string;
  details: IngredientDetail[];
  image: string;
  imageAlt: string;
}