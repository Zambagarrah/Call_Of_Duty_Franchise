// The GitHub Pages workflow builds with GITHUB_PAGES=true so metadata,
// the sitemap, and Open Graph tags point at the Pages URL instead of Vercel.
export const SITE_URL =
  process.env.GITHUB_PAGES === "true"
    ? "https://zambagarrah.github.io/Call_Of_Duty_Franchise"
    : "https://callofdutyfranchise.vercel.app";
export const SITE_NAME = "The Archive";
export const SITE_TITLE = "The Archive — An Unofficial Call of Duty Franchise Reference";
export const SITE_DESCRIPTION =
  "An unofficial, fan-made reference covering the history, games, studios, and future of the Call of Duty franchise.";

// Mirrors next.config.ts's basePath. next/link and next/router apply
// basePath to internal hrefs automatically, but next/image and any
// hand-authored root-relative URLs (manifest icons, etc.) do not — those
// need this prefix added manually. See:
// https://nextjs.org/docs/app/api-reference/config/next-config-js/basePath
export const BASE_PATH =
  process.env.GITHUB_PAGES === "true" ? process.env.PAGES_BASE_PATH || "" : "";

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
