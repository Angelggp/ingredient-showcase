"use client";

import { motion } from "framer-motion";

interface LeafShapeProps {
  className?: string;
  color?: string;
  size?: number;
  rotate?: number;
  delay?: number;
  duration?: number;
  floatY?: number;
}

export default function LeafShape({
  className = "",
  color = "#4A7C3F",
  size = 120,
  rotate = 0,
  delay = 0,
  duration = 5,
  floatY = 18,
}: LeafShapeProps) {
  return (
    <motion.div
      className={`absolute pointer-events-none select-none ${className}`}
      animate={{
        y: [0, -floatY, 0],
        rotate: [rotate, rotate + 6, rotate],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* forma de hoja con clip-path oval + nervadura central */}
        <path
          d="M60 10 
             C90 10, 112 35, 112 65 
             C112 92, 88 112, 60 112 
             C32 112, 8 92, 8 65 
             C8 35, 30 10, 60 10 Z"
          fill={color}
          opacity={0.85}
        />
        {/* nervadura central */}
        <path
          d="M60 15 C58 45, 57 75, 60 110"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity={0.35}
          fill="none"
        />
        {/* nervaduras laterales */}
        <path
          d="M60 40 C48 38, 30 42, 20 52"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.25}
          fill="none"
        />
        <path
          d="M60 55 C72 52, 88 55, 98 64"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.25}
          fill="none"
        />
        <path
          d="M60 70 C50 67, 34 70, 24 78"
          stroke="white"
          strokeWidth="1"
          strokeLinecap="round"
          opacity={0.2}
          fill="none"
        />
      </svg>
    </motion.div>
  );
}