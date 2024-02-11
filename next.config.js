/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: true,
    reactStrictMode: true,
    distDir: 'out',
    output: 'export',
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
