/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["techcrunch.com"],
    formats: ["image/avif", "image/webp"],
  },
};

module.exports = nextConfig;
