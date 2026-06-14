import type { Ingredient } from "@/types/ingredient";

export const INGREDIENTS: Ingredient[] = [
  {
    id: 1,
    category: "01. Cítrico",
    categoryColor: "var(--color-brand-green-mid)",
    iconColor: "var(--color-brand-green-mid)",
    name: "Limón",
    bgColor: "var(--color-bg-lemon)",
    image: "/ingredients/lemon1.jpg",
    imageAlt: "Limones frescos cortados mostrando su interior",
    details: [
      { icon: "Leaf",     label: "Origen",      value: "España" },
      { icon: "Calendar", label: "Temporada",    value: "Todo el año" },
      { icon: "MapPin",   label: "Variedad",     value: "Fino" },
      { icon: "Ruler",    label: "Calibre",      value: "48 - 58 mm" },
      { icon: "Droplet",    label: "Sabor",        value: "Ácido y refrescante" },
      { icon: "Package",  label: "Presentación", value: "Caja 10 kg" },
    ],
  },
  {
    id: 2,
    category: "02. Hortaliza",
    categoryColor: "var(--color-brand-red)",
    iconColor: "var(--color-brand-red)",
    name: "Tomate",
    bgColor: "var(--color-bg-tomato)",
    image: "/ingredients/tomate1.jpg",
    imageAlt: "Tomates rama frescos con tallo verde",
    details: [
      { icon: "Leaf",     label: "Origen",      value: "España" },
      { icon: "Calendar", label: "Temporada",    value: "Primavera - Otoño" },
      { icon: "MapPin",   label: "Variedad",     value: "Rama" },
      { icon: "Ruler",    label: "Calibre",      value: "57 - 67 mm" },
      { icon: "Droplet",    label: "Sabor",        value: "Dulce y jugoso" },
      { icon: "Package",  label: "Presentación", value: "Caja 6 kg" },
    ],
  },
];