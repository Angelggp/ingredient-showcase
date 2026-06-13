"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import HeroCarousel from "./HeroCarousel";
import LeafShape from "./LeafShape";
import { HERO_CONTENT } from "@/constants/hero";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // parallax suave en las hojas al hacer scroll
  const leafY1 = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const leafY2 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const leafY3 = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
      aria-label="Hero — Ingredientes que inspiran">
      {/* carrusel de fondo */}
      <HeroCarousel />

      {/* hojas decorativas con parallax */}
      <motion.div
        style={{ y: leafY1 }}
        className="absolute inset-0 pointer-events-none">
        <LeafShape
          className="top-[-2rem] left-[-1.5rem]"
          color="#2D5A27"
          size={180}
          rotate={-25}
          delay={0}
          duration={6}
          floatY={20}
        />
      </motion.div>

      <motion.div
        style={{ y: leafY2 }}
        className="absolute inset-0 pointer-events-none">
        <LeafShape
          className="top-[10%] right-[-2rem]"
          color="#4A7C3F"
          size={140}
          rotate={40}
          delay={1.2}
          duration={5}
          floatY={15}
        />
      </motion.div>

      <motion.div
        style={{ y: leafY3 }}
        className="absolute inset-0 pointer-events-none">
        <LeafShape
          className="bottom-[15%] left-[5%]"
          color="#3A6B34"
          size={100}
          rotate={15}
          delay={0.6}
          duration={7}
          floatY={12}
        />
      </motion.div>

      {/* contenido central */}
      <div className="container-base relative z-10 text-center flex flex-col items-center">
        <motion.p
          className="section-label"
          style={{ color: "var(--color-text-secondary)", marginBottom: "1rem" }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}>
          Naturaleza · Calidad · Sabor
        </motion.p>

        <motion.h1
          className="ingredient-title"
          style={{ fontSize: "var(--text-4xl)", marginBottom: "2rem" }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}>
          {HERO_CONTENT.title}
          <br />
          <span style={{ color: "var(--color-brand-green)" }}>
            {HERO_CONTENT.titleLine2.slice(0, -1)}
          </span>
          <span style={{ color: "var(--color-brand-green-mid)" }}>.</span>
        </motion.h1>

        <motion.p
          style={{
            color: "var(--color-text-secondary)",
            fontSize: "var(--text-md)",
            maxWidth: "400px",
            lineHeight: "1.7",
            marginBottom: "2.5rem"
          }}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}>
          {HERO_CONTENT.subtitle}
        </motion.p>

        <motion.button
          onClick={scrollToContent}
          aria-label="Ver ingredientes"
          className="flex items-center justify-center rounded-full transition-transform duration-200 hover:scale-110"
          style={{
            width: "44px",
            height: "44px",
            border: "1.5px solid var(--color-brand-green)",
            color: "var(--color-brand-green)"
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}>
          <ChevronDown size={20} />
        </motion.button>
      </div>
    </section>
  );
}
