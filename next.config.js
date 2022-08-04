// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

const { redirect } = require("next/dist/server/api-utils");

// module.exports = nextConfig

module.exports = {
  reactStricMode: true,
  env: {
    customKey : 'customValue',
  },
  basePath: '/dist',
  compress: true,
  async redirect(){
    return[
      {
        source: '/',
        destination: '/',
        permanent: true,

      }
    ]
  }
}