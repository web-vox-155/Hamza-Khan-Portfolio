"use client";

import { motion } from "framer-motion";

type TextRevealProps = {
  lines: string[];
  className?: string;
  delay?: number;
};

export default function TextReveal({
  lines,
  className = "",
  delay = 0,
}: TextRevealProps) {
  return (
    <div className={className} style={{ perspective: "800px" }}>
      {lines.map((line, index) => (
        <div key={line + index} className="overflow-hidden">
          <motion.span
            className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-100 to-zinc-400"
            initial={{ y: "110%", opacity: 0, rotateX: 45, filter: "blur(12px)" }}
            animate={{ y: "0%", opacity: 1, rotateX: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.9,
              delay: delay + index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ transformOrigin: "bottom" }}
          >
            {line}
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
              style={{ mixBlendMode: "overlay" }}
              initial={{ x: "-120%" }}
              animate={{ x: "120%" }}
              transition={{
                duration: 1.4,
                delay: delay + index * 0.12 + 0.4,
                ease: "easeInOut",
              }}
            />
          </motion.span>
        </div>
      ))}
    </div>
  );
}
