/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  /* Environment Variables */
  env: {
    NOTION_API_KEY: process.env.NOTION_API_KEY,
    NOTION_DATABASE_ID: process.env.NOTION_DATABASE_ID,
  },
};

module.exports = nextConfig;
