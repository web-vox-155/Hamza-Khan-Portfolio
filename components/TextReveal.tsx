"use client";

import { motion } from "framer-motion";
import { type ReactNode } from "react";

type TextRevealProps = {
  text: string;
  className?: string;
  delay?: number;
};

export default function TextReveal({
  text,
  className = "",
  delay = 0,
}: TextRevealProps) {
  const lines = text.split("\n").filter(Boolean);

  return (
    <div className={className}>
      {lines.map((line, index) => (
        <div key={line + index} className="overflow-hidden">
          <motion.span
            className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400"
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.85,
              ease: "easeOut",
              delay: delay + index * 0.08,
            }}
          >
            {line}
          </motion.span>
        </div>
      ))}
    </div>
  );
}
