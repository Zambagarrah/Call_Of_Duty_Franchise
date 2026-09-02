import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { Container } from "@/components/Container";
import { ImageBand } from "@/components/ImageBand";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "History",
  description:
    "How Call of Duty grew from a single WWII shooter into one of the biggest franchises in entertainment — its studios, its reinventions, and its business history.",
};

interface Era {
  number: string;
  years: string;
  title: string;
  paragraphs: string[];
}

const ERAS: Era[] = [
  {
    number: "01",
    years: "2003 – 2006",
    title: "Origins: the WWII years",
    paragraphs: [
      "Call of Duty began in 2003 as the debut project of Infinity Ward, a studio formed largely by developers who had just shipped Medal of Honor: Allied Assault. Rather than compete head-on in an already crowded WWII shooter market, they leaned into large scripted set-pieces and AI-controlled squadmates who fought beside the player — a deliberate move away from the lone-wolf hero fantasy common at the time.",
      "The original game's success led Activision to expand the series quickly: an expansion pack (United Offensive), a console-exclusive spin-off from newly formed Spark Unlimited (Finest Hour), and, critically, an invitation for another studio — Treyarch — to build console-focused entries. Treyarch's Call of Duty 3 in 2006 marked its promotion to full mainline co-developer, establishing the two-studio structure that still anchors the franchise today.",
    ],
  },
  {
    number: "02",
    years: "2007 – 2011",
    title: "The Modern Warfare shift",
    paragraphs: [
      "After three consecutive WWII releases, Infinity Ward made a bet that reshaped the entire genre: Call of Duty 4: Modern Warfare moved the series into a fictional contemporary conflict, and paired it with a multiplayer progression system — perks, create-a-class loadouts, and killstreak rewards — that became the template nearly every competitive shooter would follow for the next decade.",
      "Modern Warfare 2 (2009) turned that formula into a genuine cultural moment, breaking entertainment sales records while its ‘No Russian’ mission ignited a public debate about violence and player agency in games. Behind the scenes, though, the era ended in turmoil: in 2010, Infinity Ward's founding leadership departed amid a very public contract dispute with Activision. Newly formed Sledgehammer Games and longtime collaborator Raven Software stepped in to help finish Modern Warfare 3, establishing the multi-studio annual rotation — Infinity Ward, Treyarch, and eventually Sledgehammer — that has defined the franchise's release cadence ever since.",
    ],
  },
  {
    number: "03",
    years: "2008 – 2015",
    title: "Black Ops, Zombies, and peak popularity",
    paragraphs: [
      "Treyarch's contributions to the franchise grew far beyond WWII spin-offs during this stretch. World at War (2008) quietly introduced a co-op 'Nazi Zombies' bonus mode that would go on to become one of the series' most beloved and enduring features. Two years later, Black Ops (2010) launched what became the franchise's other major sub-series identity, pairing a Cold War covert-operations story with the same killstreak-driven multiplayer that had made Modern Warfare a phenomenon.",
      "Black Ops II (2012) pushed further, becoming the series' first title with a genuinely branching campaign and multiple endings, while also being one of the first mainline entries to imagine a speculative near future. This period represented the commercial peak of the traditional, boxed, annual-release model — several entries in a row rank among the best-selling entertainment products of their respective years, not just the best-selling games.",
    ],
  },
  {
    number: "04",
    years: "2014 – 2018",
    title: "Future fatigue and the return to roots",
    paragraphs: [
      "Chasing new ways to differentiate each annual release, the franchise leaned hard into speculative settings: Advanced Warfare (2014) introduced exosuit-powered movement, Black Ops III (2015) imagined cybernetically augmented soldiers in 2065, and Infinite Warfare (2016) sent the series into full zero-gravity space combat. Each pushed traversal and setting further from the franchise's grounded origins — and each generation drew a more divided response from long-time fans.",
      "Sensing the shift, Activision bundled a complete remaster of the original Modern Warfare with Infinite Warfare, a tacit acknowledgment of how much appetite remained for the series' roots. Sledgehammer Games answered that demand directly with WWII (2017), stripping out wall-running and boost-jumping in favor of grounded, historical combat. Treyarch's Black Ops 4 (2018) then broke format again in a different direction, dropping the traditional single-player campaign entirely to focus on multiplayer, Zombies, and the franchise's first full battle royale mode, Blackout — arriving right as that genre was reshaping the entire industry.",
    ],
  },
  {
    number: "05",
    years: "2019 – present",
    title: "The live-service reinvention",
    paragraphs: [
      "Infinity Ward's 2019 Modern Warfare reboot rebuilt the engine and netcode from scratch, and that technical foundation became the basis for Warzone a few months later — a free-to-play battle royale sharing progression with the year's premium release. Warzone dramatically widened the franchise's audience beyond people willing to buy a full-priced game each year, a strategy mirrored by Call of Duty: Mobile's simultaneous rise as one of the biggest mobile launches in gaming history.",
      "Since then, the annual cadence has continued — Black Ops Cold War, Vanguard, Modern Warfare II, Modern Warfare III, Black Ops 6, and Black Ops 7 — but wrapped in an increasingly unified live-service ecosystem: shared progression, cross-platform play, and seasonal content spanning console, PC, and mobile simultaneously. Black Ops 6 marked another inflection point in 2024 as the first Call of Duty available on Xbox Game Pass from day one, a direct result of the corporate history below.",
    ],
  },
  {
    number: "06",
    years: "2008 – 2023",
    title: "Corporate history: from Activision to Microsoft Gaming",
    paragraphs: [
      "Call of Duty's business history is inseparable from its creative one. Activision merged with Vivendi Games — Blizzard Entertainment's parent company — in 2008 to form Activision Blizzard, the publicly traded publisher that owned the franchise for the next fifteen years. That same period saw Activision acquire and integrate several key support studios, including Raven Software, Beenox, and High Moon Studios, gradually building the multi-studio production model the franchise now relies on every year.",
      "In January 2022, Microsoft announced a landmark deal to acquire Activision Blizzard outright. After nearly two years of regulatory review across multiple countries — the largest such review in games-industry history — the acquisition closed in October 2023, folding Call of Duty into Microsoft Gaming alongside the Xbox first-party portfolio. Day-one availability on Xbox Game Pass followed almost immediately, beginning with Black Ops 6 in 2024.",
    ],
  },
  {
    number: "07",
    years: "2013 – present",
    title: "Esports: from LAN circuits to city franchises",
    paragraphs: [
      "Competitive Call of Duty grew from grassroots LAN tournaments into an official, Activision-run circuit over the course of the 2010s. The Call of Duty World League launched in 2015 as the franchise's first year-round global competitive structure, standardizing rulesets and building a path from open events to a world championship.",
      "In 2020, Activision relaunched competitive play again as the Call of Duty League, adopting the city-based team franchise model pioneered by the Overwatch League — organizations now represent metropolitan markets rather than competing under sponsor-only brands, with a Call of Duty Mobile World Championship running in parallel for the mobile competitive scene.",
    ],
  },
];

export default function HistoryPage() {
  return (
    <div>
      <PageHero
        eyebrow="A 20+ year campaign"
        title="The History"
        description="How a single squad-based WWII shooter grew into one of the biggest entertainment franchises in the world — and the studios, reinventions, and corporate changes that got it here."
        image="/images/hero-history.jpg"
        imagePosition="center 30%"
      />

      <Container className="py-12 sm:py-16">
        <div className="flex flex-col">
          {ERAS.slice(0, 3).map((era, index) => renderEra(era, index))}
        </div>
      </Container>

      <ImageBand
        image="/images/band-history.jpg"
        imagePosition="center 35%"
        eyebrow="Two decades of records"
        quote="From a single WWII shooter to a live-service ecosystem spanning consoles, PC, and mobile."
      />

      <Container className="py-12 sm:py-16">
        <div className="flex flex-col">
          {ERAS.slice(3).map((era, index) => renderEra(era, index + 3))}
        </div>

        <div className="mt-4 flex flex-col items-start gap-3 border-t border-border-subtle pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted">
            Want to see where the story goes next, including unconfirmed industry rumors?
          </p>
          <Link
            href="/future"
            className="clip-tag inline-flex items-center gap-2 border border-accent bg-accent px-4 py-2 font-mono text-xs font-semibold tracking-wide text-background uppercase hover:bg-accent-strong"
          >
            See what&apos;s next
          </Link>
        </div>
      </Container>
    </div>
  );
}

function renderEra(era: Era, index: number) {
  return (
    <section
      key={era.number}
      className={
        index % 2 === 1
          ? "border-y border-border-subtle bg-background-elevated py-10 sm:py-12"
          : "py-10 sm:py-12"
      }
    >
      <Reveal className="grid grid-cols-1 gap-6 lg:grid-cols-[auto_1fr]">
        <div className="flex items-start gap-4 lg:w-48 lg:flex-col lg:gap-1">
          <span className="font-display text-4xl font-bold text-accent/30">{era.number}</span>
          <div>
            <p className="font-mono text-xs font-semibold tracking-widest text-accent uppercase">
              {era.years}
            </p>
          </div>
        </div>
        <div className="max-w-3xl">
          <h2 className="font-display text-2xl font-semibold tracking-wide text-foreground uppercase sm:text-3xl">
            {era.title}
          </h2>
          <div className="mt-4 flex flex-col gap-4">
            {era.paragraphs.map((p, i) => (
              <p key={i} className="leading-relaxed text-muted">
                {p}
              </p>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
