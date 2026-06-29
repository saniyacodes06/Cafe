import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.31.198'],
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
