import type { MetadataRoute } from "next";
import { SITE_DESCRIPTION, SITE_NAME, withBasePath } from "@/lib/site";

// Required for static export (GitHub Pages) — this route reads no request data.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: SITE_NAME,
    short_name: SITE_NAME,
    description: SITE_DESCRIPTION,
    start_url: withBasePath("/"),
    display: "standalone",
    background_color: "#0a0b08",
    theme_color: "#0a0b08",
    icons: [
      {
        src: withBasePath("/icon.png"),
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: withBasePath("/apple-icon.png"),
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
