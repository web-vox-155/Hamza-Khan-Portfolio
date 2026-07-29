"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Background() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 40, damping: 20, mass: 1 });
  const springY = useSpring(mouseY, { stiffness: 40, damping: 20, mass: 1 });

  const orb1X = useTransform(springX, [-1, 1], [-30, 30]);
  const orb1Y = useTransform(springY, [-1, 1], [-20, 20]);
  const orb2X = useTransform(springX, [-1, 1], [40, -40]);
  const orb2Y = useTransform(springY, [-1, 1], [25, -25]);
  const orb3X = useTransform(springX, [-1, 1], [-20, 20]);
  const orb3Y = useTransform(springY, [-1, 1], [30, -30]);
  const gridX = useTransform(springX, [-1, 1], [10, -10]);
  const gridY = useTransform(springY, [-1, 1], [10, -10]);

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
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(99,102,241,0.10),transparent_55%)]" />

      {/* Slow-drifting large orb - purple */}
      <motion.div
        className="absolute left-[-15%] top-[-15%] h-[620px] w-[620px] rounded-full bg-indigo-500/10 blur-[130px]"
        style={{ x: orb1X, y: orb1Y }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow-drifting large orb - cyan */}
      <motion.div
        className="absolute right-[-15%] top-[15%] h-[560px] w-[560px] rounded-full bg-sky-400/10 blur-[130px]"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Slow-drifting large orb - violet, lower */}
      <motion.div
        className="absolute bottom-[-20%] left-[20%] h-[680px] w-[680px] rounded-full bg-violet-500/10 blur-[150px]"
        style={{ x: orb3X, y: orb3Y }}
        animate={{ scale: [1, 1.06, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Perspective grid floor - the "3D" depth cue */}
      <motion.div
        className="absolute inset-x-0 bottom-0 h-[60vh] opacity-[0.15]"
        style={{
          x: gridX,
          y: gridY,
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          transform: "perspective(500px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      {/* Fine dot texture, subtle */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Vignette to keep focus centered */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_40%,#050505_95%)]" />
    </div>
  );
}
