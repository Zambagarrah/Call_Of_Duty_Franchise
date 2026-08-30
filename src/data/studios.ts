import type { Studio } from "./types";

// Original editorial summaries written for this archive, based on publicly
// reported studio history and roles.

export const studios: Studio[] = [
  {
    slug: "infinity-ward",
    name: "Infinity Ward",
    founded: 2002,
    headquarters: "Woodland Hills, California",
    role: "lead",
    roleLabel: "Founding & lead studio",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "Formed by a group of developers who had just finished Medal of Honor: Allied Assault, Infinity Ward created the original Call of Duty and has remained one of the series' two primary lead studios ever since.",
      "The studio is responsible for both incarnations of Modern Warfare — the 2007 original that reshaped the shooter genre, and the 2019 reboot that established the current live-service era alongside Warzone.",
    ],
    notableGameSlugs: [
      "call-of-duty",
      "call-of-duty-2",
      "modern-warfare",
      "modern-warfare-2",
      "ghosts",
      "infinite-warfare",
      "modern-warfare-2019",
      "modern-warfare-ii-2022",
    ],
  },
  {
    slug: "treyarch",
    name: "Treyarch",
    founded: 1996,
    headquarters: "Santa Monica, California",
    role: "lead",
    roleLabel: "Lead studio, Black Ops",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "Originally an independent studio acquired by Activision in 2001, Treyarch joined the Call of Duty rotation with Call of Duty 3 and has led development of every Black Ops title since introducing the sub-series in 2010.",
      "The studio is also closely associated with Zombies, having grown the co-op mode from a bonus feature in World at War into an elaborate, ongoing storyline spanning more than a decade of releases.",
    ],
    notableGameSlugs: [
      "call-of-duty-3",
      "world-at-war",
      "black-ops",
      "black-ops-2",
      "black-ops-3",
      "black-ops-4",
      "black-ops-cold-war",
      "black-ops-6",
      "black-ops-7",
    ],
  },
  {
    slug: "sledgehammer-games",
    name: "Sledgehammer Games",
    founded: 2009,
    headquarters: "Foster City, California",
    role: "lead",
    roleLabel: "Lead studio",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "Founded in 2009 by industry veterans Glen Schofield and Michael Condrey, Sledgehammer was initially brought in to co-develop Modern Warfare 3 after Infinity Ward's leadership departed mid-project.",
      "It was promoted to full lead-studio status with 2014's Advanced Warfare, and has since alternated lead duties on WWII, Vanguard, and Modern Warfare III, most often taking on the series' WWII and near-future outings.",
    ],
    notableGameSlugs: ["modern-warfare-3", "advanced-warfare", "wwii", "vanguard", "modern-warfare-iii-2023"],
  },
  {
    slug: "raven-software",
    name: "Raven Software",
    founded: 1990,
    headquarters: "Middleton, Wisconsin",
    role: "support",
    roleLabel: "Core support studio & Warzone lead",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "One of the industry's oldest studios, Raven has worked on Call of Duty since the Modern Warfare 3 era and has grown into the franchise's largest and most central support studio, contributing engineering, campaigns, and live operations.",
      "Since 2020 it has served as lead developer on Warzone, managing the free-to-play battle royale's seasons, balancing, and technical infrastructure independently of that year's premium release.",
    ],
    notableGameSlugs: ["modern-warfare-3", "modern-warfare-remastered", "warzone", "black-ops-cold-war", "black-ops-6", "black-ops-7"],
  },
  {
    slug: "high-moon-studios",
    name: "High Moon Studios",
    founded: 2001,
    headquarters: "Carlsbad, California",
    role: "support",
    roleLabel: "Support studio",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "Originally known for its Transformers licensed games, High Moon Studios shifted entirely to supporting Call of Duty in the mid-2010s and has since worked on weapons, maps, UI, and technical systems across numerous mainline entries.",
      "It regularly partners with whichever studio is leading a given year's release, contributing to titles including Black Ops III, WWII, and the current Modern Warfare and Black Ops entries.",
    ],
    notableGameSlugs: ["black-ops-3", "wwii", "modern-warfare-2019", "black-ops-6"],
  },
  {
    slug: "beenox",
    name: "Beenox",
    founded: 2000,
    headquarters: "Quebec City, Canada",
    role: "support",
    roleLabel: "Support studio",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "Beenox spent its earlier years working on licensed games (including several Spider-Man titles) before shifting toward Call of Duty support work around the mid-2010s.",
      "The studio focuses on cross-platform porting, PC optimization, UI, and post-launch content, and contributed to the Modern Warfare 2 Campaign Remastered project as well as ongoing seasonal support for recent titles.",
    ],
    notableGameSlugs: ["modern-warfare-2-campaign-remastered", "black-ops-4", "black-ops-cold-war"],
  },
  {
    slug: "demonware",
    name: "Demonware",
    founded: 2003,
    headquarters: "Dublin, Ireland (with additional Canadian studios)",
    role: "infrastructure",
    roleLabel: "Online infrastructure studio",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "Acquired by Activision in 2007, Demonware builds and operates the backend systems every online Call of Duty release depends on: matchmaking, anti-cheat, save data, and server infrastructure.",
      "Its work is largely invisible to players by design, but it underpins the online experience for every mainline release, Warzone, and Call of Duty: Mobile simultaneously.",
    ],
    notableGameSlugs: ["warzone", "call-of-duty-mobile"],
  },
  {
    slug: "timi-studio-group",
    name: "TiMi Studio Group",
    founded: 2008,
    headquarters: "Shenzhen, China",
    role: "mobile",
    roleLabel: "Mobile lead studio",
    parent: "Tencent Games",
    description: [
      "Tencent's TiMi Studio Group is one of the largest game development organizations in the world, known for high-volume live-service mobile titles across multiple genres.",
      "It partnered with Activision to build Call of Duty: Mobile from the ground up, and continues to operate the game's seasonal content, events, and esports scene today.",
    ],
    notableGameSlugs: ["call-of-duty-mobile"],
  },
  {
    slug: "digital-legends-solid-state",
    name: "Digital Legends & Solid State Studios",
    founded: 2003,
    headquarters: "Barcelona, Spain",
    role: "mobile",
    roleLabel: "Mobile support studios",
    parent: "Activision (Microsoft Gaming)",
    description: [
      "Digital Legends, a Barcelona-based studio with a long history in mobile game development, was acquired by Activision and rebranded as Solid State Studios to focus on bringing console-fidelity Call of Duty experiences to phones.",
      "The studio led development of Warzone Mobile, aiming for closer parity with the console and PC battle royale experience than earlier mobile spin-offs had achieved.",
    ],
    notableGameSlugs: ["warzone-mobile"],
  },
];

export function getStudioBySlug(slug: string): Studio | undefined {
  return studios.find((studio) => studio.slug === slug);
}
