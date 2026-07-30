"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

/**
 * Scroll progress indicator bar at the top of the page.
 * Optimized with lighter spring physics.
 */
export default function ScrollProgress() {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 80, damping: 30 });

  if (reduceMotion) {
    return null;
  }

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-[9999] h-[2px] origin-left bg-white"
      style={{ scaleX }}
    />
  );
}