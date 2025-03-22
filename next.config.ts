import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  basePath: isProd ? "/portfolio" : "",
  assetPrefix: isProd ? "/portfolio" : "",
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "portfolio" : "",
  },
};

export default nextConfig;
