import type { MetadataRoute } from "next";
import { games } from "@/data/games";
import { studios } from "@/data/studios";
import { SITE_URL } from "@/lib/site";

// Required for static export (GitHub Pages) — this route reads no request data.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/history`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/games`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/timeline`, changeFrequency: "weekly", priority: 0.8 },
    { url: `${SITE_URL}/studios`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/future`, changeFrequency: "weekly", priority: 0.8 },
  ];

  const gameRoutes: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${SITE_URL}/games/${game.slug}`,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const studioRoutes: MetadataRoute.Sitemap = studios.map((studio) => ({
    url: `${SITE_URL}/studios/${studio.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [...staticRoutes, ...gameRoutes, ...studioRoutes];
}
