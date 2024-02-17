/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "sajjad.me",
      },
      {
        protocol: "https",
        hostname: "websolutionmaster.com",
      },
    ],
  },
};

export default nextConfig;
