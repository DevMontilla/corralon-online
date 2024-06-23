/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "arcencohogareasy.vtexassets.com",
        
      },
    ],
  },
};

export default nextConfig;
