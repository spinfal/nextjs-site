/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['projects.spin.rip', 'discord.com', 'cdn.discordapp.com', 'i.scdn.co', 'gogocdn.net']
  },
  async rewrites() {
    return [
      {
        source: "/arc-sw.js",
        destination: "https://arc.io/arc-sw.js",
      },
    ];
  }
};

module.exports = nextConfig;
