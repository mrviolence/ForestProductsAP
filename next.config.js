/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
    unoptimized: false,
  },
  swcMinify: true,
};

module.exports = nextConfig;
