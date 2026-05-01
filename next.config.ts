import type { NextConfig } from "next";

const repoBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  ...(repoBasePath
    ? {
        basePath: repoBasePath,
        assetPrefix: repoBasePath,
      }
    : {}),
};

export default nextConfig;
