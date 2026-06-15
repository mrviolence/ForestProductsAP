/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ForestProductsAP',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    unoptimized: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
