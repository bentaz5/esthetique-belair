/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force la redirection vers le domaine sans www pour éviter le "duplicate content"
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.esthetique-belair.fr' }],
        destination: 'https://esthetique-belair.fr/:path*',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig