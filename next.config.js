/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "raw.githubusercontent.com"],
  },
};

module.exports = nextConfig;
