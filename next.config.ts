import type { NextConfig } from "next";

// The Vercel deployment (callofdutyfranchise.vercel.app) keeps the default
// server-capable build. The GitHub Pages workflow sets GITHUB_PAGES=true and
// supplies PAGES_BASE_PATH (via actions/configure-pages), which is the only
// path that needs a static export: GitHub Pages can't run Next.js's image
// optimization server or dynamic route handlers.
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  ...(isGithubPagesBuild && {
    output: "export",
    basePath: process.env.PAGES_BASE_PATH || "",
    images: { unoptimized: true },
  }),
};

export default nextConfig;
