/** @type {import('next').NextConfig} */

// With the custom domain forestfutures.net, GitHub Pages serves the site at
// the domain root — no basePath prefix is needed.
const nextConfig = {
  // Always export a static /out folder so `npm start` (npx serve out) works.
  output: 'export',

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
