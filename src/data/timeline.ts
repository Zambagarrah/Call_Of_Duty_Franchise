import type { TimelineEvent } from "./types";

// Curated franchise milestones — mainline releases plus the business,
// studio, and esports events that shaped the series. Original summaries.

export const timeline: TimelineEvent[] = [
  {
    id: "treyarch-acquired",
    year: 2001,
    title: "Activision acquires Treyarch",
    category: "studio",
    description:
      "Activision brought the independent Treyarch Invention in-house, setting up the studio that would later co-lead the numbered series and, eventually, create Black Ops.",
  },
  {
    id: "release-cod1",
    year: 2003,
    date: "October 29, 2003",
    title: "Call of Duty launches",
    category: "release",
    description:
      "Infinity Ward's debut WWII shooter establishes the franchise's cinematic, squad-based approach to war games.",
    relatedGameSlug: "call-of-duty",
  },
  {
    id: "release-cod2",
    year: 2005,
    date: "October 25, 2005",
    title: "Call of Duty 2 arrives with the Xbox 360",
    category: "release",
    description:
      "A launch title for Microsoft's new console, introducing regenerating health and reaching a far larger console audience.",
    relatedGameSlug: "call-of-duty-2",
  },
  {
    id: "release-cod3",
    year: 2006,
    date: "November 7, 2006",
    title: "Treyarch joins the numbered series",
    category: "release",
    description:
      "Call of Duty 3 marks Treyarch's first mainline entry, beginning the two-studio structure that still defines the franchise.",
    relatedGameSlug: "call-of-duty-3",
  },
  {
    id: "release-mw1",
    year: 2007,
    date: "November 5, 2007",
    title: "Modern Warfare redefines the franchise",
    category: "release",
    description:
      "Call of Duty 4 abandons WWII for a contemporary setting and introduces the perk-and-killstreak progression that shaped a generation of shooters.",
    relatedGameSlug: "modern-warfare",
  },
  {
    id: "zombies-debut",
    year: 2008,
    date: "November 11, 2008",
    title: "Zombies mode debuts",
    category: "technology",
    description:
      "World at War quietly introduces a co-op survival bonus mode that would grow into one of the franchise's most beloved, enduring features.",
    relatedGameSlug: "world-at-war",
  },
  {
    id: "activision-blizzard-merger",
    year: 2008,
    date: "July 2008",
    title: "Activision Blizzard is formed",
    category: "business",
    description:
      "Activision merges with Vivendi Games, Blizzard Entertainment's parent company, creating the publisher that would own Call of Duty for the next 15 years.",
  },
  {
    id: "release-mw2",
    year: 2009,
    date: "November 10, 2009",
    title: "Modern Warfare 2 breaks sales records",
    category: "release",
    description:
      "The sequel becomes one of the best-selling entertainment products of its generation, while its 'No Russian' mission sparks a public debate about violence in games.",
    relatedGameSlug: "modern-warfare-2",
  },
  {
    id: "infinity-ward-founders-exit",
    year: 2010,
    date: "March 2010",
    title: "Infinity Ward's founders depart",
    category: "business",
    description:
      "Studio co-founders Jason West and Vince Zampella leave Activision amid a public contract dispute, reshaping Infinity Ward's leadership and prompting Sledgehammer Games and Raven Software to step into larger roles on the next release.",
  },
  {
    id: "release-blackops",
    year: 2010,
    date: "November 9, 2010",
    title: "Black Ops launches a new sub-series",
    category: "release",
    description:
      "Treyarch's Cold War thriller becomes a cultural phenomenon and establishes Black Ops as its own enduring identity within the franchise.",
    relatedGameSlug: "black-ops",
  },
  {
    id: "release-mw3",
    year: 2011,
    date: "November 8, 2011",
    title: "A three-studio Modern Warfare finale",
    category: "release",
    description:
      "Modern Warfare 3 closes the original trilogy and is the first title built jointly by Infinity Ward, Sledgehammer Games, and Raven Software.",
    relatedGameSlug: "modern-warfare-3",
  },
  {
    id: "release-blackops2",
    year: 2012,
    date: "November 13, 2012",
    title: "Black Ops II branches the story",
    category: "release",
    description:
      "The series' first branching campaign lets player choices decide the ending, while its near-future setting previews the franchise's coming sci-fi turn.",
    relatedGameSlug: "black-ops-2",
  },
  {
    id: "release-ghosts",
    year: 2013,
    date: "November 5, 2013",
    title: "Ghosts launches on new hardware",
    category: "release",
    description:
      "A new engine debuts alongside the PlayStation 4 and Xbox One, pushing the series' scale and fidelity into a new console generation.",
    relatedGameSlug: "ghosts",
  },
  {
    id: "release-aw",
    year: 2014,
    date: "November 4, 2014",
    title: "Exosuits arrive with Advanced Warfare",
    category: "release",
    description:
      "Sledgehammer Games' first turn as lead studio introduces vertical, exosuit-powered movement and a starring performance from Kevin Spacey.",
    relatedGameSlug: "advanced-warfare",
  },
  {
    id: "release-bo3",
    year: 2015,
    date: "November 6, 2015",
    title: "Black Ops III bets on co-op and speculative futurism",
    category: "release",
    description:
      "Treyarch builds its first campaign around 4-player co-op from the start, set in a cybernetically augmented 2065.",
    relatedGameSlug: "black-ops-3",
  },
  {
    id: "cwl-launch",
    year: 2015,
    title: "Call of Duty World League launches",
    category: "esports",
    description:
      "Activision establishes its first global, year-round competitive circuit, laying the groundwork for the franchise-based league that would follow.",
  },
  {
    id: "release-iw",
    year: 2016,
    date: "November 4, 2016",
    title: "Infinite Warfare goes to space",
    category: "release",
    description:
      "The series' most overt science-fiction setting ships bundled with a full remaster of the original Modern Warfare, acknowledging fans' appetite for the classics.",
    relatedGameSlug: "infinite-warfare",
  },
  {
    id: "release-wwii",
    year: 2017,
    date: "November 3, 2017",
    title: "WWII brings the series back to its roots",
    category: "release",
    description:
      "Responding to fatigue with future-war settings, Sledgehammer Games returns the franchise to grounded, boots-on-the-ground World War II combat.",
    relatedGameSlug: "wwii",
  },
  {
    id: "release-bo4",
    year: 2018,
    date: "October 12, 2018",
    title: "Black Ops 4 drops the campaign, adds battle royale",
    category: "release",
    description:
      "For the first time a mainline entry ships without a traditional single-player campaign, redirecting effort into Blackout, the franchise's first battle royale mode.",
    relatedGameSlug: "black-ops-4",
  },
  {
    id: "release-codm",
    year: 2019,
    date: "October 1, 2019",
    title: "Call of Duty: Mobile reaches a new audience",
    category: "release",
    description:
      "Built by Tencent's TiMi Studio Group, the free-to-play mobile release becomes one of the biggest mobile launches in gaming history.",
    relatedGameSlug: "call-of-duty-mobile",
  },
  {
    id: "release-mw2019",
    year: 2019,
    date: "October 25, 2019",
    title: "Modern Warfare is rebooted",
    category: "release",
    description:
      "Infinity Ward rebuilds the Modern Warfare name and engine from the ground up, laying the technical foundation for Warzone a few months later.",
    relatedGameSlug: "modern-warfare-2019",
  },
  {
    id: "cdl-launch",
    year: 2020,
    title: "Call of Duty League begins its first season",
    category: "esports",
    description:
      "Activision relaunches competitive Call of Duty around a city-based team franchise model, following the pattern set by the Overwatch League.",
  },
  {
    id: "release-warzone",
    year: 2020,
    date: "March 10, 2020",
    title: "Warzone launches free-to-play",
    category: "release",
    description:
      "A large-scale, free battle royale sharing progression with that year's premium release dramatically widens the franchise's active player base.",
    relatedGameSlug: "warzone",
  },
  {
    id: "release-coldwar",
    year: 2020,
    date: "November 13, 2020",
    title: "Black Ops Cold War reunites the original cast",
    category: "release",
    description:
      "A direct sequel to 2010's Black Ops launches alongside the PlayStation 5 and Xbox Series X/S, tightly integrated with Warzone.",
    relatedGameSlug: "black-ops-cold-war",
  },
  {
    id: "release-vanguard",
    year: 2021,
    date: "November 5, 2021",
    title: "Vanguard tours every WWII theater",
    category: "release",
    description:
      "Sledgehammer Games returns to World War II with a multinational squad whose backstories span the Pacific, Eastern Front, North Africa, and Western Europe.",
    relatedGameSlug: "vanguard",
  },
  {
    id: "microsoft-deal-announced",
    year: 2022,
    date: "January 2022",
    title: "Microsoft announces plans to acquire Activision Blizzard",
    category: "business",
    description:
      "Microsoft reveals a landmark deal to bring Call of Duty's publisher into Xbox Game Studios, kicking off nearly two years of global regulatory review.",
  },
  {
    id: "release-mw2-2022",
    year: 2022,
    date: "October 28, 2022",
    title: "Modern Warfare II relaunches Warzone",
    category: "release",
    description:
      "Infinity Ward's sequel arrives alongside a full relaunch of Warzone with a new map and mechanics, rebranded 'Warzone 2.0.'",
    relatedGameSlug: "modern-warfare-ii-2022",
  },
  {
    id: "microsoft-deal-closes",
    year: 2023,
    date: "October 2023",
    title: "Microsoft completes its Activision Blizzard acquisition",
    category: "business",
    description:
      "After a lengthy regulatory process across multiple countries, Call of Duty officially becomes part of Microsoft Gaming, ending Activision's three-decade run as an independent public company.",
  },
  {
    id: "release-mw3-2023",
    year: 2023,
    date: "November 10, 2023",
    title: "Modern Warfare III remasters a fan favorite",
    category: "release",
    description:
      "Sledgehammer Games rebuilds sixteen classic maps from 2009's Modern Warfare 2 for the current engine, leaning into nostalgia for the franchise's peak era.",
    relatedGameSlug: "modern-warfare-iii-2023",
  },
  {
    id: "release-bo6",
    year: 2024,
    date: "October 25, 2024",
    title: "Black Ops 6 debuts day-one on Game Pass",
    category: "release",
    description:
      "The first mainline Call of Duty available on Xbox Game Pass at launch, introducing omnidirectional movement and the return of round-based Zombies.",
    relatedGameSlug: "black-ops-6",
  },
  {
    id: "release-bo7",
    year: 2025,
    date: "November 14, 2025",
    title: "Black Ops 7 expands the conspiracy — and Zombies",
    category: "release",
    description:
      "David Mason's story continues in 2035, alongside the franchise's largest round-based Zombies offering yet and a new large-scale Endgame mode.",
    relatedGameSlug: "black-ops-7",
  },
];

export function getTimelineSorted(): TimelineEvent[] {
  return [...timeline].sort((a, b) => {
    if (a.year !== b.year) return a.year - b.year;
    return a.title.localeCompare(b.title);
  });
}
