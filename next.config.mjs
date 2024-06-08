/** @type {import('next').NextConfig} */

import { withContentlayer } from "next-contentlayer";

const nextConfig = {
  basePath: "/personal-portfolio",
  output: "export", // this is for github actions deployment, if working with vps remove so that your server can run node
  reactStrictMode: true,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default withContentlayer({ ...nextConfig });
