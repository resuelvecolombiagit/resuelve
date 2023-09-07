/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://resuelvecolombiagit.github.io/",
  },
  basePath: "/resuelve",
  assetPrefix: "/resuelve",
};

module.exports = nextConfig;
