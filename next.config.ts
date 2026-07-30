import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16: Turbopack is now stable and used by default
  // The `turbopack` config is at the top level (not experimental)
  allowedDevOrigins: ["10.148.5.64"],

  // Enable Turbopack filesystem caching for faster dev restart times
  experimental: {
    turbopackFileSystemCacheForDev: false,
  },

  // Enable React Compiler for automatic memoization
  // Disabled during development to improve compilation speed
  reactCompiler: process.env.NODE_ENV === 'production',

  // Hide dev indicators in production
  devIndicators: false,
};

export default nextConfig;