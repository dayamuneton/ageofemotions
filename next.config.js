/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
   swcMinify: true,
   async rewrites() {
      return [
         {
            source: "/signup",
            destination: "/parte1",
         },
      ];
   },
};

module.exports = nextConfig;
