"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [lagPosition, setLagPosition] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      const x = e.clientX;
      const y = e.clientY;
      setPosition({ x, y });
      setLagPosition((prev) => ({
        x: prev.x + (x - prev.x) * 0.15,
        y: prev.y + (y - prev.y) * 0.15,
      }));
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-glow-dot pointer-events-none fixed z-10 h-2 w-2 rounded-full bg-white mix-blend-difference"
        style={{ left: position.x - 4, top: position.y - 4 }}
      />
      <div
        className="cursor-glow-ring pointer-events-none fixed z-0 h-[200px] w-[200px] rounded-full bg-white/10 blur-[80px] hide-on-coarse"
        style={{ left: lagPosition.x - 100, top: lagPosition.y - 100 }}
      />
    </>
  );
}
