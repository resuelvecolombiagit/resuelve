/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "https://resuelvecolombiagit.github.io/resuelve/",
  },
};

module.exports = nextConfig;
