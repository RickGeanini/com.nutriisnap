/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        CLIENT_UUID: process.env.CLIENT_UUID,
    },
};

module.exports = nextConfig;
