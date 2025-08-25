/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // For static export
  distDir: ".Next", // Force output directory to match Render's expectation
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
