import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["10.148.5.64"],
  turbopack: {
    root: path.join(__dirname),
  },
};

export default nextConfig;

