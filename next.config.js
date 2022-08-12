/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.spin.rip', 'cdn.discordapp.com', 'i.scdn.co'],
  }
}

module.exports = nextConfig
