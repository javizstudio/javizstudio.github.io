import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  // basePath: 'https://javizstudio.github.io',
  // assetPrefix: 'https://javizstudio.github.io'
};

export default nextConfig;
