import type { FutureEntry } from "./types";

// Forward-looking content. Anything not officially confirmed by Activision
// is explicitly labeled "rumored" and phrased with appropriate hedging.
// Summarized from public industry reporting; not copied from any single
// source, and deliberately non-specific about individual leakers/outlets.

export const futureEntries: FutureEntry[] = [
  {
    id: "cod-2026",
    title: "Call of Duty: Modern Warfare 4",
    expectedWindow: "October 23, 2026",
    status: "confirmed",
    studio: "Infinity Ward",
    summary:
      "Officially announced in May 2026, Infinity Ward's next entry returns to the rebooted Modern Warfare continuity with a from-the-ground-up engine overhaul and a harder reset than any recent annual release.",
    details: [
      "The campaign follows Captain Price operating outside Task Force 141's usual channels on a personal hunt for Makarov, set against a full-scale conflict on the Korean Peninsula alongside missions in New York, Paris, and Mumbai.",
      "Infinity Ward has described the release as a technological and creative reset: a rebuilt engine, current-gen-only support (no PS4 or Xbox One versions), and no carried-over operator skins, blueprints, or other cosmetics from prior titles.",
      "Confirmed for PlayStation 5, Xbox Series X|S, PC, and Nintendo Switch 2 — it will not be available on Xbox Game Pass at launch.",
    ],
  },
  {
    id: "cod-2027",
    title: "Call of Duty 2027 (working title)",
    expectedWindow: "2027 (unconfirmed)",
    status: "rumored",
    studio: "Sledgehammer Games (widely reported, not officially confirmed)",
    summary:
      "With Infinity Ward confirmed on 2026's release, reporting consistently points to Sledgehammer Games leading a new sub-franchise the following year, disconnected from both Modern Warfare and Black Ops.",
    details: [
      "Reports describe an entirely new cast and setting apart from the franchise's existing sub-series. Rumors about the time period have shifted over time — earlier leaks suggested the late 1990s to early 2000s, but more recent reporting favors a modern-day setting instead.",
      "Rumored design goals include continuing the omnidirectional movement system introduced in Black Ops 6, a heavier emphasis on grounded, martial-arts-inspired melee combat with no jetpacks, and — notably — no Zombies mode, with Modern Warfare III's cooperative ‘Get High’ mode rumored as a possible substitute.",
      "None of this has been officially confirmed by Activision or Sledgehammer Games; treat it as early, unverified industry speculation subject to change before any official reveal.",
    ],
  },
  {
    id: "live-service-continuation",
    title: "Ongoing: Warzone, Mobile & Black Ops 7 live service",
    expectedWindow: "Ongoing",
    status: "confirmed",
    summary:
      "Independent of the next mainline release, Activision has confirmed continued seasonal support for its current live-service titles.",
    details: [
      "Call of Duty: Warzone, Call of Duty: Mobile, and Warzone Mobile all continue to receive seasonal map, mode, and balance updates on their existing schedules.",
      "Black Ops 7, as the current mainline release, continues to receive content seasons following its November 2025 launch, in line with the franchise's established post-launch support pattern — running alongside the lead-up to Modern Warfare 4.",
    ],
  },
];
