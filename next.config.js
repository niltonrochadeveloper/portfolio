/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  distDir: "out",
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    API_URL: "https://project-api-ix4dw.ondigitalocean.app",
    AUTH_SECRET: "$dikndINQpp!lchmodSync",
    AUTH_URL: "http://localhost:3000/api/auth",
  },
};

module.exports = nextConfig;
