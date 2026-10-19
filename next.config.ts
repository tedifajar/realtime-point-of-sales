import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  devIndicators: false,
  images: {
    domains: ["https://kcproznyfskbfaemzlqd.supabase.co"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "kcproznyfskbfaemzlqd.supabase.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
