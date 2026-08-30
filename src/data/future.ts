import type { FutureEntry } from "./types";

// Forward-looking content. Anything not officially confirmed by Activision
// is explicitly labeled "rumored" and phrased with appropriate hedging.
// Summarized from public industry reporting; not copied from any single
// source, and deliberately non-specific about individual leakers/outlets.

export const futureEntries: FutureEntry[] = [
  {
    id: "cod-2026",
    title: "Call of Duty 2026 (working title)",
    expectedWindow: "Late 2026 (unconfirmed)",
    status: "rumored",
    studio: "Infinity Ward (widely reported, not officially confirmed)",
    summary:
      "Industry reporting points to Infinity Ward leading the next annual release, with persistent rumors that it continues the rebooted Modern Warfare storyline.",
    details: [
      "Multiple industry reports and leaks converge on Infinity Ward as the lead studio for 2026, though Activision has not made an official announcement as of this writing.",
      "The most consistent rumor is that the project continues the post-2019 Modern Warfare reboot continuity, potentially working toward a conclusion for Captain Price's current arc, though some reports leave open the possibility of a different setting entirely.",
      "As with any unreleased title, plans can and do change significantly before an official reveal — treat specifics as speculative until Activision confirms them.",
    ],
  },
  {
    id: "cod-2027",
    title: "Call of Duty 2027 (working title)",
    expectedWindow: "2027 (unconfirmed)",
    status: "rumored",
    studio: "Sledgehammer Games (widely reported, not officially confirmed)",
    summary:
      "Leaks suggest Sledgehammer Games' next project may break from both Modern Warfare and Black Ops entirely, launching a new sub-franchise set around the late 1990s to early 2000s.",
    details: [
      "Reports describe a new cast and setting disconnected from the franchise's existing sub-series, a departure from the Modern Warfare / Black Ops alternation that has defined the last several years.",
      "Rumored design goals include an emphasis on grounded movement and melee combat, a return of class-building systems reminiscent of older titles, and — notably — the omission of a Zombies mode for the first time in years.",
      "None of this has been officially confirmed by Activision or Sledgehammer Games; treat it as early, unverified industry speculation subject to change.",
    ],
  },
  {
    id: "live-service-continuation",
    title: "Ongoing: Warzone, Mobile & Black Ops 7 live service",
    expectedWindow: "Ongoing",
    status: "confirmed",
    summary:
      "Independent of any new mainline release, Activision has confirmed continued seasonal support for its current live-service titles.",
    details: [
      "Call of Duty: Warzone, Call of Duty: Mobile, and Warzone Mobile all continue to receive seasonal map, mode, and balance updates on their existing schedules.",
      "Black Ops 7, as the current mainline release, is expected to receive multiple content seasons following its November 2025 launch, in line with the franchise's established post-launch support pattern.",
    ],
  },
];
