import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
experimental:{
  viewTransition: true,
},
  eslint: {
    ignoreDuringBuilds: true,
  }
};

export default nextConfig;
