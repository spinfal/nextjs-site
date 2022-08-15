/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['cdn.spin.rip', 'cdn.discordapp.com', 'i.scdn.co']
  },
  basePath: 'my-site'
}

module.exports = nextConfig
