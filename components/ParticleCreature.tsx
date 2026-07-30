"use client";

import { useRef, useMemo, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Deterministic seeded PRNG (pseudo-random number generator).
 * Ensures particle data is pure/idempotent across renders.
 */
function createRng(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
}

/**
 * Creates a shared PointsMaterial with the given config to avoid
 * creating multiple material instances.
 */
function createParticleMaterial(config: Partial<THREE.PointsMaterialParameters>) {
  return new THREE.PointsMaterial({
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    sizeAttenuation: true,
    ...config,
  });
}

/**
 * A 3D particle creature made of glowing dots.
 * Uses a torus knot geometry for the body with wing-like structures.
 * Optimized for performance with:
 * - Reduced particle counts
 * - Shared materials
 * - Efficient animation loop
 * - Fixed-size buffer attributes to avoid GC pressure
 */
export default function ParticleCreature() {
  const pointsRef = useRef<THREE.Points>(null);
  const auraRef = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const startTimeRef = useRef(0);

  // Initialize start time in effect to avoid impure function call during render
  useEffect(() => {
    startTimeRef.current = performance.now();
  }, []);

  // Stable material instances - created once via useMemo for JSX rendering
  const bodyMaterial = useMemo<THREE.PointsMaterial>(
    () =>
      createParticleMaterial({
        size: 0.04,
        vertexColors: true,
        opacity: 0.85,
      }),
    []
  );
  const auraMaterial = useMemo<THREE.PointsMaterial>(
    () =>
      createParticleMaterial({
        size: 0.15,
        vertexColors: true,
        opacity: 0.3,
      }),
    []
  );

  // ── Generate particle data ──────────────────────────────────────────
  const { positions, colors, sizes, auraPositions, auraColors, auraSizes } =
    useMemo(() => {
      const rand = createRng(42);
      const MAIN_COUNT = 4000; // Reduced from 6000
      const AURA_COUNT = 1500; // Reduced from 2500

      const pos = new Float32Array(MAIN_COUNT * 3);
      const col = new Float32Array(MAIN_COUNT * 3);
      const siz = new Float32Array(MAIN_COUNT);

      const aPos = new Float32Array(AURA_COUNT * 3);
      const aCol = new Float32Array(AURA_COUNT * 3);
      const aSiz = new Float32Array(AURA_COUNT);

      // ── Body: torus knot ─────────────────────────────────────────
      const knotGeo = new THREE.TorusKnotGeometry(1.25, 0.35, 160, 24); // Reduced segments from 200 to 160
      const knotPos = knotGeo.attributes.position.array;
      const knotCount = knotPos.length / 3;

      const bodyParticles = Math.floor(MAIN_COUNT * 0.65);
      for (let i = 0; i < bodyParticles; i++) {
        const idx = Math.floor(rand() * knotCount) * 3;
        const scatter = 0.06;

        const px = knotPos[idx] + (rand() - 0.5) * scatter;
        const py = knotPos[idx + 1] + (rand() - 0.5) * scatter;
        const pz = knotPos[idx + 2] + (rand() - 0.5) * scatter;

        pos[i * 3] = px;
        pos[i * 3 + 1] = py;
        pos[i * 3 + 2] = pz;

        // Color: cyan → purple → magenta gradient based on position
        const dist = Math.sqrt(px * px + py * py + pz * pz) / 1.5;
        const hue = 0.55 + dist * 0.25 + Math.sin(py * 2) * 0.05;
        const color = new THREE.Color().setHSL(hue % 1, 0.85, 0.5 + dist * 0.2);
        col[i * 3] = color.r;
        col[i * 3 + 1] = color.g;
        col[i * 3 + 2] = color.b;

        siz[i] = 0.025 + rand() * 0.045;
      }

      // ── Wings: curved surfaces extending from body ────────────────
      const wingParticles = MAIN_COUNT - bodyParticles;
      for (let i = 0; i < wingParticles; i++) {
        const idx = bodyParticles + i;
        const side = rand() > 0.5 ? 1 : -1;
        const t = rand();
        const wingSpan = 2.0;
        const wingCurve = Math.sin(t * Math.PI) * 0.9;

        const px = side * t * wingSpan;
        const py = wingCurve * (1 - t * 0.4) + (rand() - 0.5) * 0.04;
        const pz = (t - 0.5) * 1.4 + (rand() - 0.5) * 0.04;

        pos[idx * 3] = px;
        pos[idx * 3 + 1] = py;
        pos[idx * 3 + 2] = pz;

        // Ethereal wing colors: translucent teal/purple
        const hue = 0.65 + t * 0.2 + (rand() - 0.5) * 0.1;
        const color = new THREE.Color().setHSL(hue % 1, 0.7, 0.4 + t * 0.3);
        col[idx * 3] = color.r;
        col[idx * 3 + 1] = color.g;
        col[idx * 3 + 2] = color.b;

        siz[idx] = 0.015 + rand() * 0.025;
      }

      knotGeo.dispose();

      // ── Aura/nebula: larger, diffuse particles around creature ──
      for (let i = 0; i < AURA_COUNT; i++) {
        const theta = rand() * Math.PI * 2;
        const phi = Math.acos(2 * rand() - 1);
        const radius = 1.8 + rand() * 1.5;

        aPos[i * 3] = Math.sin(phi) * Math.cos(theta) * radius;
        aPos[i * 3 + 1] = Math.sin(phi) * Math.sin(theta) * radius * 0.6;
        aPos[i * 3 + 2] = Math.cos(phi) * radius * 0.4;

        // Subtle glow colors
        const hue = 0.55 + rand() * 0.3;
        const color = new THREE.Color().setHSL(hue % 1, 0.5, 0.3 + rand() * 0.2);
        aCol[i * 3] = color.r;
        aCol[i * 3 + 1] = color.g;
        aCol[i * 3 + 2] = color.b;

        aSiz[i] = 0.08 + rand() * 0.2;
      }

      return {
        positions: pos,
        colors: col,
        sizes: siz,
        auraPositions: aPos,
        auraColors: aCol,
        auraSizes: aSiz,
      };
    }, []);

  // ── Animation loop ──────────────────────────────────────────────────
  useFrame(() => {
    if (!pointsRef.current || !auraRef.current) return;

    // Use performance.now() instead of state.clock.elapsedTime
    // to avoid the THREE.Clock deprecation warning
    const t = (performance.now() - startTimeRef.current) / 1000;

    // Main creature rotation
    pointsRef.current.rotation.y = t * 0.12;
    pointsRef.current.rotation.x = Math.sin(t * 0.035) * 0.08;
    pointsRef.current.rotation.z = Math.cos(t * 0.05) * 0.04;

    // Mouse parallax (subtle)
    pointsRef.current.rotation.y += mouse.x * 0.012;
    pointsRef.current.rotation.x += mouse.y * 0.006;

    // Gentle floating
    pointsRef.current.position.y = Math.sin(t * 0.15) * 0.12;
    pointsRef.current.position.x = Math.sin(t * 0.08) * 0.05;

    // Breathing scale pulse
    const breathe = 1 + Math.sin(t * 0.2) * 0.02;
    pointsRef.current.scale.setScalar(breathe);

    // Aura rotates opposite direction, slower
    auraRef.current.rotation.y = -t * 0.06;
    auraRef.current.rotation.x = Math.sin(t * 0.02) * 0.05;
    auraRef.current.position.y = Math.sin(t * 0.1 + 1) * 0.08;
    auraRef.current.position.x = Math.sin(t * 0.05 + 2) * 0.03;

    // Aura pulsing opacity - access via the points material
    if (auraRef.current.material instanceof THREE.PointsMaterial) {
      auraRef.current.material.opacity = 0.25 + Math.sin(t * 0.15) * 0.08;
    }

    // Main creature pulsing opacity
    if (pointsRef.current.material instanceof THREE.PointsMaterial) {
      pointsRef.current.material.opacity = 0.75 + Math.sin(t * 0.1) * 0.1;
    }
  });

  return (
    <group>
      {/* ── Main creature body ── */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[colors, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[sizes, 1]}
          />
        </bufferGeometry>
        <primitive object={bodyMaterial} attach="material" />
      </points>

      {/* ── Aura/nebula glow ── */}
      <points ref={auraRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[auraPositions, 3]}
          />
          <bufferAttribute
            attach="attributes-color"
            args={[auraColors, 3]}
          />
          <bufferAttribute
            attach="attributes-size"
            args={[auraSizes, 1]}
          />
        </bufferGeometry>
        <primitive object={auraMaterial} attach="material" />
      </points>
    </group>
  );
}