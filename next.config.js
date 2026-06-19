/** @type {import('next').NextConfig} */

// basePath is ONLY needed on GitHub Pages (where the repo name is the URL prefix).
// When building locally (npm run build + npm start), no basePath is needed.
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig = {
  // Always export a static /out folder so `npm start` (npx serve out) works.
  output: 'export',

  // Only prefix asset URLs with /ForestProductsAP on the real GitHub Pages deployment.
  ...(isGitHubPages && { basePath: '/ForestProductsAP' }),

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
