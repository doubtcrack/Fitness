/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "i.ytimg.com"],
  },
};

module.exports = nextConfig;
