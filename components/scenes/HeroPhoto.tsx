"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import portraitSrc from "../../public/hamza-portrait-fixed.webp";

/**
 * Hero portrait with photo enhancement and floating animation.
 * - CSS filters improve clarity, contrast, and skin tone
 * - Gentle floating animation for a polished look
 * - Radial mask creates a soft vignette edge
 */
export default function HeroPhoto() {
  return (
    <motion.div
      className="pointer-events-none absolute right-[2%] top-[30px] z-0 h-[300px] w-[220px] sm:right-[4%] sm:h-[340px] sm:w-[250px]"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Gentle floating animation */}
      <motion.div
        className="h-full w-full"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={portraitSrc}
          alt="Hamza Khan"
          className="h-full w-full object-contain object-top drop-shadow-[0_10px_40px_rgba(0,0,0,0.5)]"
          style={{
            // Photo enhancement filters for clarity and a softer, cleaner finish
            filter:
              "brightness(1.06) contrast(1.12) saturate(1.03) blur(0.15px)",
          }}
          priority
          quality={85}
          sizes="(max-width: 640px) 220px, 250px"
        />
      </motion.div>
    </motion.div>
  );
}