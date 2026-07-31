"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeInProps = {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
};

const directionOffsets = {
  up: { x: 0, y: 60 },
  down: { x: 0, y: -60 },
  left: { x: 60, y: 0 },
  right: { x: -60, y: 0 },
};

export default function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: FadeInProps) {
  const offset = directionOffsets[direction];

  return (
    <motion.div
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.45,
        delay: delay * 0.65,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}