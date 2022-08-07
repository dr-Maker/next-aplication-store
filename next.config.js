/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['placeimg.com','api.lorem.space'],
  },
};

// const { redirect } = require("next/dist/server/api-utils");

module.exports = nextConfig;

// module.exports = {
//   reactStricMode: true,
//   images: {
//     domains: ['placeimg.com','api.lorem.space'],
//   },

  // env: {
  //   customKey : 'customValue',
  // },
  // basePath: '/dist',
  // compress: true,
  // async redirect(){
  //   return[
  //     {
  //       source: '/',
  //       destination: '/',
  //       permanent: true,

  //     }
  //   ]
  // }
//}