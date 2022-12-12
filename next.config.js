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
   i18n: {
      locales: ["es"],
      defaultLocale: "es",
   },
};

module.exports = nextConfig;
