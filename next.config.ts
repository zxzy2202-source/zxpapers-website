import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // output: "export" removed — admin backend requires server-side API routes (NextAuth, Prisma)
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
