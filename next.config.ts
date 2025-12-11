import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,   // <<< ADD THIS
  },
};

export default nextConfig;
