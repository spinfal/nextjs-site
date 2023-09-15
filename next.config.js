/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['projects.spin.rip', 'discord.com', 'cdn.discordapp.com', 'i.scdn.co', 'gogocdn.net']
  },
};

module.exports = nextConfig;
