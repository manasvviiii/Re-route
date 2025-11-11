import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.telegraphindia.com",
      },
      {
        protocol: "https",
        hostname: "tse1.mm.bing.net",
      },
      {
        protocol: "https",
        hostname: "static.toiimg.com", // ✅ Added TOI image host
      },
    ],
  },
};

export default nextConfig;
