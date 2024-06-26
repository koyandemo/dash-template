/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'stg-api.shre.cactusminds.com' },
      {
        protocol: 'https',
        hostname: 'dash.popl.co',
      },
      { protocol: 'https', hostname: 'images.pexels.com' },
    ],
  },
};

export default nextConfig;
