/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config"); // Import i18n configuration

const nextConfig = {
  reactStrictMode: true,
  env: {
    // You can add any environment variables here if needed
  },
  i18n, // Include i18n configuration
  webpack: (config: { resolve: { fallback: any } }, { isServer }: any) => {
    if (!isServer) {
      // Prevent 'fs' module from being bundled in the client-side code
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
