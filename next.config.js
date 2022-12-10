/** @type {import('next').NextConfig} */

// const isDev = process.env.NODE_ENV === "development";

const nextConfig = {
  // async headers() {
  //   return [
  //     {
  //       source: "/register",
  //       // source: "/about",
  //       headers: [
  //         {
  //           key: "x-custom-header",
  //           value: "my custom header value",
  //         },
  //         {
  //           key: "x-another-custom-header",
  //           value: "my other custom header value",
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
