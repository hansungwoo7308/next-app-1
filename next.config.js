/** @type {import('next').NextConfig} */

// const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  // async rewrites() {
  //   return [
  //     {
  //       source: '/api/:path*',
  //       destination: `http://localhost:3000/:path*`,
  //     },
  //   ];
  // },

  // async headers() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       headers: [
  //         {
  //           key: "Access-Control-Allow-origin",
  //           value: "*",
  //         },
  //         {
  //           key: "Access-Control-Allow-Credentials",
  //           value: "true",
  //         },
  //       ],
  //     },
  //   ];
  // },

  images: {
    domains: [
      "via.placeholder.com",
      "jsonplaceholder.typicode.com",
      "picsum.photos",
      "source.unsplash.com",
      "cdn.pixabay.com",
    ],
    // remotePatterns: [
    //   {
    //     protocol: "https",
    //     hostname: "jsonplaceholder.typicode.com",
    //     // port: '',
    //     // pathname: '/account123/**',
    //   },
    // ],
    // formats: ["image/webp"],
  },
  reactStrictMode: false,
  swcMinify: true,
  // webpack: (config) => {
  //   config.plugins.push(new env());
  //   return config;
  // },
};
// assetPrefix: isDev
//   ? '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css" integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A==" crossorigin="anonymous" referrerpolicy="no-referrer" />'
//   : undefined,
// assetPrefix:
//   "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css",

module.exports = nextConfig;
