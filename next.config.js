/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ForestProductsAP',
  images: {
    domains: ['images.unsplash.com', 'picsum.photos'],
    unoptimized: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
