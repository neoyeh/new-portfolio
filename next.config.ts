import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  basePath: '/new-portfolio',
  assetPrefix: '/new-portfolio/',
};

export default nextConfig;
