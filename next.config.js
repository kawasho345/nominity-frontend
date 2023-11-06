/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["lh3.googleusercontent.com"],
        remotePatterns: [
            {
              protocol: 'http',
              hostname: 'localhost',
            },
            {
              protocol: "https",
              hostname: "firebasestorage.googleapis.com",
            },
            {
              protocol: "https",
              hostname: "imgfp.hotp.jp"
            }
        ],
    }
}

module.exports = nextConfig
