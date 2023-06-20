// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
const { i18n } = require("./next-i18next.config");
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n,
  // async rewrites() {
  //   return [
  //     {
  //       source: "/users/:id",
  //       destination: "/users/profile",
  //     },
  //   ]
  // },
}

module.exports = nextConfig;