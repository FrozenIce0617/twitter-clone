/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["help.twitter.com", "cdn.cms-twdigitalassets.com"],
  },
};

module.exports = nextConfig;
