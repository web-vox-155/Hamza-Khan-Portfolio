"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type MouseEvent, type ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  href?: string;
  type?: "button" | "submit" | "reset";
};

export default function MagneticButton({
  children,
  className = "",
  onClick,
  href,
  type = "button",
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const handleMouseMove = (event: MouseEvent<HTMLButtonElement>) => {
    const { left, top, width, height } = event.currentTarget.getBoundingClientRect();
    const deltaX = event.clientX - (left + width / 2);
    const deltaY = event.clientY - (top + height / 2);
    const maxDistance = 50;
    x.set(Math.max(Math.min(deltaX, maxDistance), -maxDistance));
    y.set(Math.max(Math.min(deltaY, maxDistance), -maxDistance));
  };

  const resetMotion = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (href) {
      // client-side navigation to anchor or url
      window.location.assign(href);
      return;
    }

    if (onClick) onClick(e);
  };

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={resetMotion}
      style={{ x: springX, y: springY }}
      className={`rounded-2xl border border-zinc-700 bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-white/10 transition hover:scale-[1.02] hover:border-zinc-500 ${className}`}
    >
      {children}
    </motion.button>
  );
}
