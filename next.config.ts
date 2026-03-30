import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  distDir: "dist",
  basePath: "/Alexander-the-Great",
  assetPrefix: "/Alexander-the-Great",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
