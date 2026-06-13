"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import DetailRow from "./DetailRow";
import type { Ingredient } from "@/types/ingredient";

interface IngredientCardProps {
  ingredient: Ingredient;
  index: number;
}

export default function IngredientCard({ ingredient, index }: IngredientCardProps) {
  const isEven = index % 2 === 0;

  return (
    <motion.section
      aria-label={`Ingrediente: ${ingredient.name}`}
      className="relative overflow-hidden"
      style={{
        backgroundColor: ingredient.bgColor,
        paddingBlock: "var(--spacing-section)",
      }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
    >
      {/* imagen de fondo con opacidad */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <Image
          src={ingredient.image}
          alt={ingredient.imageAlt}
          fill
          className="object-cover object-center"
          style={{ opacity: 0.25 }}
          sizes="100vw"
        />
      </div>

      {/* contenido */}
      <div className="container-base relative z-10">
        <div
          className={`flex flex-col gap-10 md:flex-row md:items-center ${
            isEven ? "" : "md:flex-row-reverse"
          }`}
        >
          {/* texto + detalles */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: isEven ? -32 : 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            {/* categoría */}
            <p
              className="section-label mb-3"
              style={{ color: ingredient.categoryColor }}
            >
              {ingredient.category}
            </p>

            {/* nombre */}
            <h2
              className="ingredient-title mb-8"
              style={{ fontSize: "var(--text-3xl)" }}
            >
              {ingredient.name}
            </h2>

            {/* filas de detalles */}
            <div className="max-w-sm">
              {ingredient.details.map((detail) => (
                <DetailRow
                  key={detail.label}
                  icon={detail.icon}
                  label={detail.label}
                  value={detail.value}
                />
              ))}
            </div>
          </motion.div>

          {/* imagen decorativa lado */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div
              className="relative w-full max-w-xs md:max-w-sm aspect-square rounded-full overflow-hidden"
              style={{ opacity: 0.9 }}
            >
              <Image
                src={ingredient.image}
                alt={ingredient.imageAlt}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}