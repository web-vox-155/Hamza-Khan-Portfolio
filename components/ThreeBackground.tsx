"use client";

import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useState } from "react";

/**
 * Lazy load the particle creature to avoid blocking the main thread.
 * WebGL initialization is deferred until after the initial render.
 */
const ParticleCreature = dynamic(
  () => import("./ParticleCreature"),
  {
    ssr: false,
    loading: () => null,
  }
);

/**
 * Wraps the 3D particle creature in a full-screen Canvas.
 * Positioned at z-[1] so it sits between the background (z-0)
 * and the page content (z-10). Uses pointer-events-none so it
 * doesn't interfere with page interactions.
 *
 * Performance optimizations:
 * - Dynamic import for code splitting
 * - Low DPR cap (1.5) for better performance
 * - No antialiasing (not needed for particle effects)
 * - high-performance power preference
 * - Smaller frame budget via frameloop="demand" on inactive tabs
 */
export default function ThreeBackground() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointerFine = window.matchMedia("(pointer: fine)");

    const update = () => {
      setEnabled(!reducedMotion.matches && pointerFine.matches);
    };

    update();
    reducedMotion.addEventListener("change", update);
    pointerFine.addEventListener("change", update);

    return () => {
      reducedMotion.removeEventListener("change", update);
      pointerFine.removeEventListener("change", update);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[1] pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 50, near: 0.1, far: 20 }}
        dpr={[1, 1.25]}
        gl={{
          antialias: false,
          alpha: true,
          powerPreference: "low-power",
          stencil: false,
          depth: true,
        }}
        style={{ background: "transparent" }}
        frameloop="demand"
      >
        <Suspense fallback={null}>
          <ParticleCreature />
        </Suspense>
      </Canvas>
    </div>
  );
}