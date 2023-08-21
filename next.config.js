/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "job-task-server.onrender.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
