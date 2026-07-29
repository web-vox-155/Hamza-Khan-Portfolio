"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1 });

  const orb1X = useTransform(springX, [-1, 1], [-40, 40]);
  const orb1Y = useTransform(springY, [-1, 1], [-30, 30]);
  const orb2X = useTransform(springX, [-1, 1], [50, -50]);
  const orb2Y = useTransform(springY, [-1, 1], [35, -35]);
  const orb3X = useTransform(springX, [-1, 1], [-30, 30]);
  const orb3Y = useTransform(springY, [-1, 1], [40, -40]);
  const orb4X = useTransform(springX, [-1, 1], [25, -25]);
  const orb4Y = useTransform(springY, [-1, 1], [-25, 25]);
  const gridX = useTransform(springX, [-1, 1], [12, -12]);
  const gridY = useTransform(springY, [-1, 1], [12, -12]);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(139,92,246,0.18),transparent_55%)]" />

      {/* Vivid indigo/violet orb - top left */}
      <motion.div
        className="absolute left-[-15%] top-[-15%] h-[640px] w-[640px] rounded-full bg-indigo-500/30 blur-[110px]"
        style={{ x: orb1X, y: orb1Y }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Vivid cyan orb - top right */}
      <motion.div
        className="absolute right-[-15%] top-[10%] h-[580px] w-[580px] rounded-full bg-cyan-400/28 blur-[110px]"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Vivid magenta/pink orb - bottom left */}
      <motion.div
        className="absolute bottom-[-20%] left-[15%] h-[700px] w-[700px] rounded-full bg-fuchsia-500/24 blur-[130px]"
        style={{ x: orb3X, y: orb3Y }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.95, 0.6] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Vivid emerald orb - bottom right, smaller accent */}
      <motion.div
        className="absolute bottom-[5%] right-[10%] h-[420px] w-[420px] rounded-full bg-emerald-400/22 blur-[100px]"
        style={{ x: orb4X, y: orb4Y }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Perspective grid floor - brighter now */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[60vh] opacity-[0.22]"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.7) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_35%,#050505_92%)]" />
    </div>
  );
}
