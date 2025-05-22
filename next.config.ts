import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "azure-elaborate-narwhal-225.mypinata.cloud",
        pathname: "/ipfs/**",
      },
    ],
  },
};

export default nextConfig;
