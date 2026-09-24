import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Hostinger shared hosting: HTML/CSS/JS estático (sin Node en prod).
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
