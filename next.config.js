/** @type {import('next').NextConfig} */
const nextConfig = {
   // reactStrictMode: true,
   swcMinify: true,
   images: {
      remotePatterns: [
         {
            protocol: "https",
            hostname: "**.googleusercontent.com",
         },
         {
            protocol: "https",
            hostname: "**.googleapis.com",
         },
      ],
   },
   async rewrites() {
      return [
         {
            source: "/signup",
            destination: "/parte1",
         },
         {
            source: "/historia",
            destination: "/camiseta",
         },
      ];
   },
   i18n: {
      locales: ["es"],
      defaultLocale: "es",
   },
};

module.exports = nextConfig;
