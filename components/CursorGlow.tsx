"use client";

import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { useEffect } from "react";

/**
 * Custom cursor glow effect with two elements:
 * - A small dot that follows the cursor instantly
 * - A larger ring that follows with lag (spring physics)
 *
 * Optimized with:
 * - Lighter spring physics for reduced CPU usage
 * - Passive event listener
 * - Touch device detection via CSS media query
 */
export default function CursorGlow() {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const lagX = useSpring(x, { stiffness: 100, damping: 25, mass: 0.3 });
  const lagY = useSpring(y, { stiffness: 100, damping: 25, mass: 0.3 });

  useEffect(() => {
    if (reduceMotion || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduceMotion, x, y]);

  if (reduceMotion) {
    return null;
  }

  return (
    <>
      <motion.div
        className="cursor-glow-dot pointer-events-none fixed z-10 h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ left: x, top: y, translateX: "-4px", translateY: "-4px" }}
      />
      <motion.div
        className="cursor-glow-ring pointer-events-none fixed z-0 h-[200px] w-[200px] rounded-full bg-white/10 blur-[80px] hide-on-coarse"
        style={{ left: lagX, top: lagY, translateX: "-100px", translateY: "-100px" }}
      />
    </>
  );
}