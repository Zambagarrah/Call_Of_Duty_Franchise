# The Archive — An Unofficial Call of Duty Franchise Reference

A fan-made reference site covering the history, games, development studios, and
future of the Call of Duty franchise. Built with Next.js, TypeScript, and
Tailwind CSS.

This project is **not affiliated with, endorsed by, or sponsored by Activision
Publishing, Inc., Microsoft, or any of their subsidiary studios**. Call of Duty
and all related titles, characters, and logos are trademarks of their
respective owners. It exists purely as an independent, non-commercial,
informational/educational fan project — see the in-app footer for the full
disclaimer.

## Features

- **Games catalog** — 37 entries spanning 2003–2025 (mainline titles,
  expansions, remasters, spin-offs, mobile releases, and Warzone), each with
  its own detail page, searchable and filterable by series/type and sortable
  by year.
- **Timeline** — a chronological, filterable feed of releases plus notable
  studio, business, esports, and technology milestones.
- **Studios** — profiles of the developers behind the franchise, from lead
  studios (Infinity Ward, Treyarch, Sledgehammer Games) to support,
  infrastructure, and mobile studios.
- **History** — a long-form narrative walking through the franchise's eras,
  from its 2003 WWII origins to the current live-service period.
- **Future** — confirmed live-service plans alongside clearly labeled,
  unconfirmed industry rumors about upcoming titles.
- **Subtle motion** — scroll-triggered reveals, a pointer-tracked 3D card tilt,
  and parallax image bands, all dependency-free and disabled under
  `prefers-reduced-motion`.
- **SEO & sharing** — a generated sitemap, `robots.txt`, PWA manifest, custom
  favicon/app icons, and a generated Open Graph/Twitter card image.

No copyrighted box art, screenshots, or official logos are used. Background
photography is free-license stock imagery (Pexels and Openverse), depicting
generic military/tactical scenes rather than any Call of Duty artwork — see
the in-app footer for full credits.

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

Other useful scripts:

```bash
npm run build   # production build
npm run start   # run the production build
npm run lint    # lint the codebase
```

## Tech Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS](https://tailwindcss.com) v4
- [lucide-react](https://lucide.dev) for icons

## Project Structure

- `src/data/` — the site's content layer (games, studios, timeline events,
  future/rumor entries) and shared types.
- `src/components/` — shared UI components, including the interactive
  games/timeline explorers.
- `src/app/` — App Router pages and layouts.
