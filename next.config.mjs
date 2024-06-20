/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dash.popl.co',
      },
    ],
  },
};

export default nextConfig;
