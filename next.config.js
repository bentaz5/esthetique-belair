/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    // unoptimized: true, // Désactivé pour bénéficier de l'optimisation automatique
  },
}

module.exports = nextConfig 