import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LAKES, PUBLIC_LAKE_COUNTS, TOTAL_PUBLIC_LAKES } from "@/data/lakes";
import lakeImg from "@/assets/houses-from-lake.webp";
import dockImg from "@/assets/dock.webp";
import deckLakeImg from "@/assets/deck-lake.webp";

const COUNTIES = [
  {
    name: "Steuben",
    lakes: PUBLIC_LAKE_COUNTS.Steuben,
    seat: "Angola",
    known: "The busiest lake country in the state, and home to Pokagon State Park on Lake James.",
  },
  {
    name: "Kosciusko",
    lakes: PUBLIC_LAKE_COUNTS.Kosciusko,
    seat: "Warsaw",
    known: "Holds both Indiana's largest natural lake (Wawasee) and its deepest (Tippecanoe).",
  },
  {
    name: "LaGrange",
    lakes: PUBLIC_LAKE_COUNTS.LaGrange,
    seat: "LaGrange",
    known: "Quieter water, Amish farm country, and two of the DNR's 15 best panfishing lakes.",
  },
  {
    name: "Noble",
    lakes: PUBLIC_LAKE_COUNTS.Noble,
    seat: "Albion",
    known: "Chain O'Lakes State Park — nine connected lakes, electric motors only.",
  },
] as const;

const PICKS = [
  {
    heading: "Best for a first visit",
    lake: "Lake James, Steuben County",
    why: "Pokagon State Park puts a beach, trails, a saddle barn and a boat launch in one place, so you are not gambling on access. Big enough to feel like a proper lake holiday.",
  },
  {
    heading: "Best for panfishing",
    lake: "Big Long Lake, LaGrange County",
    why: "One of only fifteen lakes on the Indiana DNR's statewide best-panfishing list, and the one it credits with some of the best bluegill fishing in northeastern Indiana.",
  },
  {
    heading: "Best for paddling",
    lake: "Chain O'Lakes State Park, Noble County",
    why: "Nine connected lakes with electric motors only. No wake, no jet skis, and a genuine point-to-point route rather than laps of one basin.",
  },
  {
    heading: "Best for big-water boating",
    lake: "Lake Wawasee, Kosciusko County",
    why: "Three thousand acres, a channel system and room for sailboats. The closest Indiana gets to a Great Lakes summer town.",
  },
  {
    heading: "Best for quiet",
    lake: "Olin Lake, LaGrange County",
    why: "The only lake here you have to walk to. Its entire shoreline is a protected nature preserve — no cottages, no docks, no engines.",
  },
  {
    heading: "Best for a rainy day",
    lake: "Shipshewana, LaGrange County",
    why: "The lake is good, but the draw is the town: the Midwest's largest outdoor flea market runs Tuesdays and Wednesdays from May through September.",
  },
] as const;

const FAQS = [
  {
    q: "How many lakes are in northern Indiana?",
    a: "The Natural Resources Commission's official listing of public freshwater lakes records 239 across the four core lake counties alone — 76 in Steuben, 64 in Kosciusko, 52 in LaGrange and 47 in Noble. Those are lakes the public has a legal right to use; the total number of lakes, including private ones, is higher.",
  },
  {
    q: "Why does northeast Indiana have so many lakes?",
    a: "They are glacial. Retreating ice sheets left behind kettle holes and moraine dams across the northern third of the state, which is why the lakes cluster where they do. The Indiana DNR notes that eighteen counties in northern Indiana contain natural lakes, but Kosciusko, LaGrange, Noble and Steuben hold nearly 70% of the total surface acreage between them.",
  },
  {
    q: "What is the largest lake in Indiana?",
    a: "Lake Wawasee in Kosciusko County, at 3,006 acres, is the largest natural lake wholly within the state. Some reservoirs in southern Indiana, such as Patoka Lake at roughly 8,800 acres, are larger but are man-made.",
  },
  {
    q: "What is the deepest lake in Indiana?",
    a: "Lake Tippecanoe in Kosciusko County, with a maximum depth of 122 feet and an average depth of 37 feet.",
  },
  {
    q: "When is the best time to visit the northern Indiana lakes?",
    a: "Late June through August is peak season — warm water, full marinas and every festival running. September is the quiet favourite: the water is still swimmable, the boat traffic drops away and the Amish farm stands are at their best. Winter brings ice fishing on the shallower lakes.",
  },
  {
    q: "Can you swim in the northern Indiana lakes?",
    a: "Yes. Several have public beaches, including Pokagon State Park on Lake James, Chain O'Lakes State Park, Bixler Lake in Kendallville and Webster Lake. Many of the natural lakes are spring-fed with clear water and gently sloping sandy shorelines.",
  },
] as const;

const byCounty = (county: string) => LAKES.filter((l) => l.county === county);

const NorthernIndianaLakes = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-4 sm:inset-6 rounded-3xl overflow-hidden">
          <img
            src={lakeImg}
            alt="Cottages along a northern Indiana lake shoreline at Big Long Lake"
            className="w-full h-full object-cover"
            loading="eager"
            width={1280}
            height={849}
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-white/60 mb-6">
            LaGrange · Steuben · Noble · Kosciusko Counties
          </p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[0.95]">
            Northern Indiana Lakes
          </h1>
          <p className="font-body text-white/70 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            A complete guide to Indiana&rsquo;s lake country — 239 public lakes across
            four counties, and how to choose the right one.
          </p>
        </div>
      </section>

      {/* Lede + the headline stat */}
      <section className="py-20 sm:py-28 px-6 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 font-body text-[#2b2520]/75 text-base sm:text-lg leading-relaxed">
            <p>
              Most people picture Indiana as flat farm country. The northeast corner
              is something else entirely: a dense scatter of glacial lakes packed
              into four adjoining counties, close enough together that you can fish a
              different one every morning for a week without driving more than half
              an hour.
            </p>
            <p>
              The concentration is not folklore. In its State Wildlife Action Plan,
              the Indiana Department of Natural Resources notes that eighteen
              counties in northern Indiana contain natural lakes &mdash; but that{" "}
              <strong className="text-[#2b2520]">
                Kosciusko, LaGrange, Noble and Steuben counties contain nearly 70% of
                the total surface acreage
              </strong>{" "}
              between them. Four counties out of ninety-two hold most of the state&rsquo;s
              natural lake water.
            </p>
            <p>
              This guide covers those four counties: which lakes are public, which
              are worth the drive, and which one suits the trip you actually want.
            </p>
          </div>

          {/* Stat band */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
            {[
              { n: TOTAL_PUBLIC_LAKES, l: "public lakes", s: "across four counties" },
              { n: "70%", l: "of state acreage", s: "of natural lake water" },
              { n: "5 of 15", l: "best panfishing", s: "DNR statewide list" },
              { n: "3,006", l: "acres", s: "Indiana's largest lake" },
            ].map((s) => (
              <div
                key={s.l}
                className="text-center border-t-2 border-secondary/40 pt-4"
              >
                <p className="font-display text-3xl sm:text-4xl font-bold text-[#2b2520]">
                  {s.n}
                </p>
                <p className="font-body text-xs uppercase tracking-[0.15em] text-[#2b2520]/60 mt-2">
                  {s.l}
                </p>
                <p className="font-body text-xs text-[#2b2520]/40 mt-1">{s.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why the lakes are here */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why the lakes are all in one corner
          </h2>
          <div className="space-y-5 font-body text-foreground/70 text-base sm:text-lg leading-relaxed">
            <p>
              They are glacial. As the last ice sheets retreated, buried blocks of
              ice melted out and left behind kettle holes; moraines dammed the
              drainage. The result is a band of natural lakes across the top of the
              state, deepest and most numerous where the ice sat longest.
            </p>
            <p>
              That geology explains the character of the water. The deeper lakes
              &mdash; Tippecanoe at 122 feet, Wawasee at 81 &mdash; are spring-fed,
              cold at depth and unusually clear. The shallower ones warm quickly and
              grow dense weed beds, which is exactly why they produce the bluegill the
              region is known for. Neither is better; they are different trips.
            </p>
            <p>
              It also explains why the lakes come in chains. Where meltwater linked
              one kettle to the next, you get connected water: the Barbee chain in
              Kosciusko County, the Indian Lakes in LaGrange, the nine linked lakes
              inside Chain O&rsquo;Lakes State Park.
            </p>
          </div>
        </div>
      </section>

      {/* County table */}
      <section className="py-20 sm:py-28 px-6 bg-surface-cool">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The four counties at a glance
          </h2>
          <p className="font-body text-foreground/50 mb-10">
            Public lake counts tallied from the Natural Resources Commission&rsquo;s
            official listing of public freshwater lakes.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse font-body">
              <thead>
                <tr className="border-b border-border/50 text-left">
                  <th className="py-3 pr-4 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
                    County
                  </th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
                    Public lakes
                  </th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
                    County seat
                  </th>
                  <th className="py-3 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
                    Known for
                  </th>
                </tr>
              </thead>
              <tbody>
                {COUNTIES.map((c) => (
                  <tr key={c.name} className="border-b border-border/30 align-top">
                    <td className="py-4 pr-4 font-semibold text-foreground">
                      {c.name}
                    </td>
                    <td className="py-4 pr-4 text-secondary font-semibold">
                      {c.lakes}
                    </td>
                    <td className="py-4 pr-4 text-foreground/60">{c.seat}</td>
                    <td className="py-4 text-foreground/60 text-sm">{c.known}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Lake by lake */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The lakes, county by county
          </h2>
          <p className="font-body text-foreground/50 mb-14 max-w-2xl">
            Acreage and depth figures come from the Indiana DNR and the Lilly Center
            for Lakes &amp; Streams at Grace College. Lakes marked{" "}
            <span className="text-secondary font-semibold">DNR top 15</span> appear on
            the state&rsquo;s official list of the fifteen best panfishing lakes in
            Indiana.
          </p>

          {COUNTIES.map((c) => (
            <div key={c.name} className="mb-16 last:mb-0">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {c.name} County
              </h3>
              <p className="font-body text-sm text-foreground/40 mb-8">
                {c.lakes} public freshwater lakes
              </p>
              <div className="space-y-8">
                {byCounty(c.name).map((l) => (
                  <div
                    key={l.name}
                    className="border-l-2 border-secondary/30 pl-6"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {l.name}
                      </h4>
                      {l.acres && (
                        <span className="font-body text-sm text-foreground/40">
                          {l.acres.toLocaleString()} acres
                        </span>
                      )}
                      {l.maxDepthFt && (
                        <span className="font-body text-sm text-foreground/40">
                          · {l.maxDepthFt} ft deep
                        </span>
                      )}
                      {l.dnrPanfish && (
                        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-secondary border border-secondary/40 rounded-sm px-2 py-0.5">
                          DNR top 15
                        </span>
                      )}
                    </div>
                    <p className="font-body text-foreground/65 leading-relaxed">
                      {l.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Photo band */}
      <section className="px-6 bg-surface-warm">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-6xl mx-auto py-20">
          {[
            { img: dockImg, alt: "Private dock on Big Long Lake in LaGrange County, Indiana" },
            { img: deckLakeImg, alt: "Deck overlooking a northern Indiana lake at sunset" },
          ].map((p) => (
            <div key={p.alt} className="aspect-[4/3] overflow-hidden rounded-2xl">
              <img
                src={p.img}
                alt={p.alt}
                className="w-full h-full object-cover"
                loading="lazy"
                width={1280}
                height={960}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Which lake for which trip */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14">
            Which lake for which trip
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {PICKS.map((p) => (
              <div key={p.heading}>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                  {p.heading}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {p.lake}
                </h3>
                <p className="font-body text-foreground/65 leading-relaxed">
                  {p.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning */}
      <section className="py-20 sm:py-28 px-6 bg-surface-cool">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Planning a lake trip
          </h2>
          <div className="space-y-8 font-body text-foreground/70 text-base sm:text-lg leading-relaxed">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                When to come
              </h3>
              <p>
                Peak season runs late June through August, when the water is warm and
                every marina, beach and festival is open. September is the local
                favourite &mdash; still swimmable, far fewer boats, and the farm
                stands at their peak. October brings colour to the state parks. On the
                shallower lakes, ice fishing carries through the winter.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Public access
              </h3>
              <p>
                Being on the Natural Resources Commission&rsquo;s public freshwater
                lakes list means the public has a legal right to use the water &mdash;
                but, as the listing itself notes, it does not convey the right to cross
                private property to reach it. Use a DNR public access site, a state
                park, or stay somewhere with its own frontage. The DNR&rsquo;s
                Where&nbsp;to&nbsp;Fish map is the authoritative source for launch
                locations.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                What else is here
              </h3>
              <p>
                LaGrange County sits in one of the largest Amish communities in the
                country, which shapes the whole experience: horse-drawn buggies on the
                county roads, front-yard produce stands, and the Shipshewana flea
                market on Tuesdays and Wednesdays through the summer. Pokagon State
                Park has a toboggan run that draws people from three states in winter.
                Fort Wayne, with an airport and a well-regarded zoo, is the nearest
                city. And there is a great deal of ice cream &mdash; enough that we
                mapped it in a{" "}
                <a
                  href="/northern-indiana-ice-cream"
                  className="text-secondary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary transition-colors"
                >
                  separate guide to the region&rsquo;s scoop shops
                </a>
                , including Steuben County&rsquo;s official eight-stop ice cream
                trail.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Getting here
              </h3>
              <p>
                The region sits within a few hours&rsquo; drive of Chicago,
                Indianapolis, Detroit and Columbus, which is much of why it fills up
                each summer. I&#8209;69 runs north to south through Steuben and Noble
                counties; the Indiana Toll Road clips the top of LaGrange County.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-12">
            Common questions
          </h2>
          <div className="space-y-10">
            {FAQS.map((f) => (
              <div key={f.q}>
                <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                  {f.q}
                </h3>
                <p className="font-body text-foreground/65 leading-relaxed">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources — the reason to trust the numbers */}
      <section className="py-16 px-6 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-lg font-semibold text-[#2b2520] mb-4">
            Sources
          </h2>
          <ul className="font-body text-sm text-[#2b2520]/55 space-y-2 leading-relaxed">
            <li>
              Indiana DNR, State Wildlife Action Plan &mdash; Natural Lakes Habitat
              Summary (county share of natural lake acreage)
            </li>
            <li>
              Natural Resources Commission Information Bulletin #61, Listing of Public
              Freshwater Lakes (public lake counts by county)
            </li>
            <li>
              Indiana DNR Division of Fish &amp; Wildlife, 15 Best Indiana Panfishing
              Lakes (fishery descriptions and acreage for Big Long, Shipshewana, Clear,
              Sylvan and Skinner lakes)
            </li>
            <li>
              Lilly Center for Lakes &amp; Streams, Grace College (acreage, maximum and
              average depth for Kosciusko County lakes)
            </li>
            <li>
              Indiana DNR Division of Nature Preserves, Olin Lake Nature Preserve
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-6 bg-surface-pine text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Stay on one of them
          </h2>
          <p className="font-body text-white/60 text-base sm:text-lg mb-8">
            The Farmhouse sits on the shoreline of Big Long Lake in LaGrange County
            &mdash; four bedrooms, sleeps 12, private dock. Read the{" "}
            <a
              href="/big-long-lake"
              className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white transition-colors"
            >
              Big Long Lake guide
            </a>{" "}
            or ask us about dates.
          </p>
          <a
            href="/#inquire"
            className="inline-block bg-secondary text-secondary-foreground font-body font-semibold text-sm tracking-wide uppercase px-8 py-3 rounded-sm hover:bg-secondary/90 transition-colors"
          >
            Check the Big Long Lake Rental
          </a>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default NorthernIndianaLakes;
