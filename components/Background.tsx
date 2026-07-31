"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Animated background with ambient light orbs that flow with scroll.
 * Features:
 * - Orbs that drift and morph based on scroll position (flowing effect)
 * - Mouse parallax for subtle interactivity
 * - Reduced opacity for clear text readability
 * - Smooth gradient transitions between color themes
 * - Edge glow walls that pulse with scroll
 */
export default function Background() {
  const reduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 30, damping: 25, mass: 0.5 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 25, mass: 0.5 });

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const sync = () => setIsMobile(media.matches);
    sync();
    media.addEventListener("change", sync);

    return () => media.removeEventListener("change", sync);
  }, []);

  // Scroll-based animation
  const { scrollYProgress } = useScroll();
  const scrollSmooth = useSpring(scrollYProgress, { stiffness: 50, damping: 30, mass: 0.8 });

  // Orb transforms based on scroll + mouse - creates flowing/sliding effect
  const orb1X = useTransform(springX, [-1, 1], [-40, 40]);
  const orb1Y = useTransform(springY, [-1, 1], [-30, 30]);
  const orb1ScrollX = useTransform(scrollSmooth, [0, 1], [0, 80]);
  const orb1ScrollY = useTransform(scrollSmooth, [0, 1], [0, -120]);

  const orb2X = useTransform(springX, [-1, 1], [50, -50]);
  const orb2Y = useTransform(springY, [-1, 1], [35, -35]);
  const orb2ScrollX = useTransform(scrollSmooth, [0, 1], [0, -100]);
  const orb2ScrollY = useTransform(scrollSmooth, [0, 1], [0, -80]);

  const orb3X = useTransform(springX, [-1, 1], [-30, 30]);
  const orb3Y = useTransform(springY, [-1, 1], [40, -40]);
  const orb3ScrollX = useTransform(scrollSmooth, [0, 1], [0, 60]);
  const orb3ScrollY = useTransform(scrollSmooth, [0, 1], [0, -160]);

  // Opacity shifts with scroll - keeps text readable
  const orb1Opacity = useTransform(scrollSmooth, [0, 0.5, 1], [0.20, 0.15, 0.18]);
  const orb2Opacity = useTransform(scrollSmooth, [0, 0.5, 1], [0.18, 0.22, 0.14]);
  const orb3Opacity = useTransform(scrollSmooth, [0, 0.5, 1], [0.15, 0.12, 0.20]);

  // Scale pulse with scroll
  const orb1Scale = useTransform(scrollSmooth, [0, 0.5, 1], [1, 1.15, 0.9]);
  const orb2Scale = useTransform(scrollSmooth, [0, 0.5, 1], [1, 0.9, 1.1]);
  const orb3Scale = useTransform(scrollSmooth, [0, 0.5, 1], [1, 1.1, 1.2]);

  // Edge glow pulsing with scroll
  const edgeGlowOpacity = useTransform(scrollSmooth, [0, 0.3, 0.7, 1], [0.5, 0.3, 0.6, 0.4]);
  const overlayOpacity = useTransform(scrollSmooth, [0, 0.2, 0.8, 1], [0, 0.08, 0.08, 0]);

  useEffect(() => {
    if (reduceMotion || isMobile || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    }

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY, reduceMotion, isMobile]);

  if (reduceMotion || isMobile) {
    return (
      <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(129,92,246,0.16),transparent_28%),radial-gradient(circle_at_80%_10%,rgba(34,211,238,0.12),transparent_24%),radial-gradient(circle_at_10%_90%,rgba(217,70,239,0.12),transparent_30%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,#050505_92%)]" />
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      {/* Orb 1 - Purple/Cyan */}
      <motion.div
        className="absolute left-[-10%] top-[-10%] h-[700px] w-[700px] rounded-full"
        style={{
          x: orb1X,
          y: orb1Y,
          translateX: orb1ScrollX,
          translateY: orb1ScrollY,
          scale: orb1Scale,
          opacity: orb1Opacity,
          background: "radial-gradient(circle, rgba(129,92,246,0.35) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      {/* Orb 2 - Cyan/Teal */}
      <motion.div
        className="absolute right-[-10%] top-[5%] h-[650px] w-[650px] rounded-full"
        style={{
          x: orb2X,
          y: orb2Y,
          translateX: orb2ScrollX,
          translateY: orb2ScrollY,
          scale: orb2Scale,
          opacity: orb2Opacity,
          background: "radial-gradient(circle, rgba(34,211,238,0.30) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
      {/* Orb 3 - Pink/Purple */}
      <motion.div
        className="absolute bottom-[-15%] left-[10%] h-[750px] w-[750px] rounded-full"
        style={{
          x: orb3X,
          y: orb3Y,
          translateX: orb3ScrollX,
          translateY: orb3ScrollY,
          scale: orb3Scale,
          opacity: orb3Opacity,
          background: "radial-gradient(circle, rgba(217,70,239,0.28) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />

      {/* Sliding gradient overlay - fades in/out with scroll */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: overlayOpacity,
          background: "linear-gradient(180deg, transparent 0%, rgba(129,92,246,0.06) 30%, rgba(34,211,238,0.04) 60%, transparent 100%)",
        }}
      />

      {/* Side edge lines — pulsing with scroll */}
      <motion.div
        className="absolute inset-y-0 left-0 w-32"
        style={{
          opacity: edgeGlowOpacity,
          background: "linear-gradient(to right, rgba(139,92,246,0.5), rgba(34,211,238,0.15) 50%, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 left-0 w-px h-full"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(139,92,246,0.6) 20%, rgba(34,211,238,0.6) 50%, rgba(217,70,239,0.6) 80%, transparent)",
        }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-32"
        style={{
          opacity: edgeGlowOpacity,
          background: "linear-gradient(to left, rgba(217,70,239,0.5), rgba(52,211,153,0.15) 50%, transparent)",
        }}
      />
      <div
        className="absolute inset-y-0 right-0 w-px h-full"
        style={{
          background: "linear-gradient(to bottom, transparent, rgba(217,70,239,0.6) 20%, rgba(52,211,153,0.6) 50%, rgba(139,92,246,0.6) 80%, transparent)",
        }}
      />

      {/* Subtle dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Vignette overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,#050505_92%)]" />
    </div>
  );
}