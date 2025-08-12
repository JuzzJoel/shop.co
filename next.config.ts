/** @type {import('next').NextConfig} */
const nextConfig: import("next").NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "miro.medium.com",
      },
    ],
  },
  allowedDevOrigins: ["http://192.168.0.174:3001"],
};

module.exports = nextConfig;
