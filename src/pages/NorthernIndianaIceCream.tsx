import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  SHOPS,
  SHOP_COUNTS,
  TOTAL_SHOPS,
  TRAIL_STOPS,
  DISTANCE_LABELS,
} from "@/data/ice-cream";
// The whole photo set was shot in autumn, so nothing here claims summer.
import heroImg from "@/assets/deck-lake.webp";
import backyardImg from "@/assets/backyard.webp";
import lakeYardImg from "@/assets/lake-yard.webp";

const COUNTIES = [
  {
    name: "LaGrange",
    shops: SHOP_COUNTS.LaGrange,
    blurb:
      "Amish country, and the densest cluster of the lot. Shipshewana alone supports five places to get something frozen, and the county has the shop nearest the house.",
  },
  {
    name: "Steuben",
    shops: SHOP_COUNTS.Steuben,
    blurb:
      "The only county here with an official, signposted ice cream trail — eight stops, promoted by the tourism bureau, spread from Pokagon State Park to the Michigan line.",
  },
  {
    name: "Noble",
    shops: SHOP_COUNTS.Noble,
    blurb:
      "Thin on the ground but well placed: one beside Sylvan Lake, one on Albion's main street after Chain O'Lakes, one drive-in at Ligonier.",
  },
  {
    name: "Kosciusko",
    shops: SHOP_COUNTS.Kosciusko,
    blurb:
      "The furthest afield, and the most town-flavoured — North Webster's two, the Village at Winona, and frozen custard in Warsaw.",
  },
] as const;

const PICKS = [
  {
    heading: "Best after a day on the water",
    shop: "Cowlick's Ice Cream Shoppe, Wolcottville",
    why: "Thirty-plus hand-dipped flavours a few minutes from the dock, and it does subs and hot pretzels — so on the evenings nobody wants to cook, it quietly becomes dinner.",
  },
  {
    heading: "Best ice cream, full stop",
    shop: "Vanilla Bean Creamery, Shipshewana",
    why: "Made in small batches from scratch, around thirty flavours deep. The four-scoop flight exists because choosing is genuinely hard.",
  },
  {
    heading: "Best for a proper outing",
    shop: "The Steuben County Ice Cream Trail",
    why: "Eight stops across one county, already mapped by the tourism bureau. Pick three, drive the lakes between them, and you have built a whole afternoon out of dessert.",
  },
  {
    heading: "Best with restless children",
    shop: "The Backyard Creamery & Mini Golf, Angola",
    why: "Hand-dipped ice cream with eighteen holes attached. Solves the evening rather than just the pudding.",
  },
  {
    heading: "Best for the nostalgia",
    shop: "Zesto, Angola",
    why: "Soft serve from a guarded recipe, out of a retro roadside building on SR 127. This is the one that tastes like the summers you are trying to hand down.",
  },
  {
    heading: "Best if someone can't have dairy",
    shop: "Scoops, Angola",
    why: "Non-dairy and gluten-free options alongside the hard scoop, on seven acres beside the Pokagon bike trail. The stop that does not leave anyone holding a napkin.",
  },
] as const;

const FAQS = [
  {
    q: "Where is the closest ice cream to Big Long Lake?",
    a: "Cowlick's Ice Cream Shoppe on W 700 S in Wolcottville is the nearest, a few minutes from the lake, with more than 30 hand-dipped flavours plus soft serve, shakes and sundaes. Lickity Splitz in Rome City, just over the Noble County line near Sylvan Lake, is the other close one — it also does specialty coffee and has a drive-through.",
  },
  {
    q: "Is there an ice cream trail in northern Indiana?",
    a: "Yes. The Steuben County Tourism Bureau runs an official Ice Cream Trail of eight stops around Angola, Fremont, Orland, Hamilton and Pokagon State Park. It is the only formal trail in the region — the shops in LaGrange, Noble and Kosciusko counties are not part of it, which is why this guide maps all four counties together.",
  },
  {
    q: "What is the best ice cream in Shipshewana?",
    a: "Vanilla Bean Creamery, at the four-way stop beside the Blue Gate, makes around 30 flavours in small batches from scratch and is the one locals send you to. Shipshewana also has Mom's Ice Cream near the flea market grounds, soft serve and homemade Amish root beer at the Wana Cup, a vintage soda fountain at the Blue Gate Garden Inn, and ice cream alongside the bakery case at Shawna Rae's.",
  },
  {
    q: "Are the ice cream shops open year-round?",
    a: "Most are not. The majority of these are seasonal, running from spring through early autumn, and several are windows or stands with no indoor seating at all. Shoulder-season hours change often and small shops do not always post them. Between roughly Memorial Day and Labor Day you can turn up; outside it, ring ahead or check the shop's Facebook page, which is usually more current than its website.",
  },
  {
    q: "Where can I find dairy-free or gluten-free ice cream in the area?",
    a: "Scoops in Angola carries non-dairy and gluten-free options, Skoops in North Webster has dairy-free and sugar-free, and Cowabunga Creamery in Albion offers both gluten-free and dairy-free. Those three are the reliable choices if someone in the group cannot have the standard scoop.",
  },
  {
    q: "Is the ice cream in Amish country actually Amish-made?",
    a: "Some of it. In LaGrange County several of these are Amish- or Mennonite-owned family businesses, and the frozen custard and root beer you find around Shipshewana are genuinely local. But plenty of shops here scoop excellent ice cream made elsewhere — Hudsonville, Ashby's, Velvet, Wisconsin's Chocolate Shoppe, Glacier. Made-on-site and worth-eating are different questions, and this guide flags which is which.",
  },
] as const;

const byCounty = (county: string) => SHOPS.filter((s) => s.county === county);

const NorthernIndianaIceCream = () => (
  <>
    <Navbar />
    <main>
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-4 sm:inset-6 rounded-3xl overflow-hidden">
          <img
            src={heroImg}
            alt="View across Big Long Lake from the deck at The Farmhouse, Wolcottville, LaGrange County, Indiana"
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
            Northern Indiana Ice Cream
          </h1>
          <p className="font-body text-white/70 text-lg sm:text-xl mt-6 max-w-2xl mx-auto">
            {TOTAL_SHOPS} places to get a cone across Indiana&rsquo;s lake country
            &mdash; including an official eight-stop trail, and the one five minutes
            from our dock.
          </p>
        </div>
      </section>

      {/* Lede + the headline stat */}
      <section className="py-20 sm:py-28 px-6 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5 font-body text-[#2b2520]/75 text-base sm:text-lg leading-relaxed">
            <p>
              Ice cream is not incidental to a summer up here. It is the thing that
              gets everyone out of the water and into the car at six o&rsquo;clock,
              the reward at the end of a hot afternoon, and &mdash; on the evenings
              when nobody can face cooking &mdash; dinner, more or less.
            </p>
            <p>
              Northeast Indiana is unusually well supplied. Three things stack up
              here at once:{" "}
              <strong className="text-[#2b2520]">
                dairy farm country, one of the largest Amish communities in the
                United States, and a lake tourism season
              </strong>{" "}
              that fills these counties every summer. The result is a scoop window in
              almost every village, and one county that has made a signposted trail
              out of it.
            </p>
            <p>
              This guide maps {TOTAL_SHOPS} of them across the same four counties as
              our{" "}
              <a
                href="/northern-indiana-lakes"
                className="text-secondary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary transition-colors"
              >
                northern Indiana lakes guide
              </a>{" "}
              &mdash; sorted by how far they are from the water, because that is how
              the decision actually gets made.
            </p>
          </div>

          {/* Stat band */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-14">
            {[
              { n: TOTAL_SHOPS, l: "shops mapped", s: "across four counties" },
              { n: TRAIL_STOPS, l: "stops", s: "on Steuben's official trail" },
              { n: "5", l: "in Shipshewana", s: "alone" },
              { n: "May–Sept", l: "peak season", s: "most are seasonal" },
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

      {/* Why there is so much of it */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Why there is so much ice cream up here
          </h2>
          <div className="space-y-5 font-body text-foreground/70 text-base sm:text-lg leading-relaxed">
            <p>
              Start with the dairy. These are working farm counties, and some of what
              gets scooped here has not travelled far &mdash; the shop in Rome City
              takes its dairy from Kuehnert Dairy Farm, an hour south. Frozen custard
              and homemade root beer turn up on menus around Shipshewana because they
              have always been made here, not because someone decided they were
              retro.
            </p>
            <p>
              Then the Amish community. LaGrange County sits inside one of the largest
              settlements in the country, and a great many of these shops are
              family-owned in the most literal sense: bought by one family from
              another, run by the people whose name is on the window. Cowlick&rsquo;s
              was Brenda&rsquo;s until 2024. Lickity Splitz exists because a daughter
              built the business her late father had been talking about.
            </p>
            <p>
              And then the lakes. Two hundred and thirty-nine public lakes across four
              counties pull in a summer population several times the size of the
              resident one, all of it arriving hot and leaving at dusk. Steuben County
              worked out that this was worth organising, and its tourism bureau now
              runs a formal eight-stop ice cream trail. Nobody else has done the
              same, which is why the other three counties take some finding.
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
            Counts are of the shops listed in this guide, not of every freezer in the
            region &mdash; we only list places we can actually put on a map.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse font-body">
              <thead>
                <tr className="border-b border-border/50 text-left">
                  <th className="py-3 pr-4 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
                    County
                  </th>
                  <th className="py-3 pr-4 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
                    Shops
                  </th>
                  <th className="py-3 text-xs uppercase tracking-[0.15em] text-foreground/40 font-medium">
                    What it is like
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
                      {c.shops}
                    </td>
                    <td className="py-4 text-foreground/60 text-sm">{c.blurb}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* The shops */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            The shops, county by county
          </h2>
          <p className="font-body text-foreground/50 mb-14 max-w-2xl">
            Distances are measured from The Farmhouse on Big Long Lake. Stops marked{" "}
            <span className="text-secondary font-semibold">Ice Cream Trail</span> are
            on the Steuben County Tourism Bureau&rsquo;s official trail. Most of these
            are seasonal &mdash; see{" "}
            <a
              href="#before-you-drive"
              className="text-secondary underline decoration-secondary/40 underline-offset-4 hover:decoration-secondary transition-colors"
            >
              before you drive out
            </a>
            .
          </p>

          {COUNTIES.map((c) => (
            <div key={c.name} className="mb-16 last:mb-0">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
                {c.name} County
              </h3>
              <p className="font-body text-sm text-foreground/40 mb-8">
                {c.shops} {c.shops === 1 ? "shop" : "shops"}
              </p>
              <div className="space-y-8">
                {byCounty(c.name).map((s) => (
                  <div
                    key={s.name}
                    className="border-l-2 border-secondary/30 pl-6"
                  >
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                      <h4 className="font-display text-xl font-semibold text-foreground">
                        {s.name}
                      </h4>
                      <span className="font-body text-sm text-foreground/40">
                        {s.town}
                      </span>
                      {s.address && (
                        <span className="font-body text-sm text-foreground/40">
                          · {s.address}
                        </span>
                      )}
                      {s.trail && (
                        <span className="font-body text-[10px] uppercase tracking-[0.15em] text-secondary border border-secondary/40 rounded-sm px-2 py-0.5">
                          Ice Cream Trail
                        </span>
                      )}
                    </div>
                    <p className="font-body text-[11px] uppercase tracking-[0.15em] text-foreground/35 mb-2">
                      {DISTANCE_LABELS[s.distance]}
                    </p>
                    <p className="font-body text-foreground/65 leading-relaxed">
                      {s.note}
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
            {
              img: backyardImg,
              alt: "Backyard and lawn at The Farmhouse on Big Long Lake, Wolcottville Indiana",
            },
            {
              img: lakeYardImg,
              alt: "Lawn running down to the shoreline and dock at Big Long Lake",
            },
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

      {/* Which stop for which trip */}
      <section className="py-20 sm:py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-14">
            Which stop for which evening
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-10">
            {PICKS.map((p) => (
              <div key={p.heading}>
                <p className="font-body text-xs uppercase tracking-[0.2em] text-secondary mb-2">
                  {p.heading}
                </p>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {p.shop}
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
      <section
        id="before-you-drive"
        className="py-20 sm:py-28 px-6 bg-surface-cool scroll-mt-20"
      >
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-8">
            Before you drive out
          </h2>
          <div className="space-y-8 font-body text-foreground/70 text-base sm:text-lg leading-relaxed">
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Check the hours first
              </h3>
              <p>
                This is the one piece of advice that matters. Most of these are
                seasonal, several are walk-up windows with no indoor room at all, and
                shoulder-season hours move around. Facebook is almost always more
                current than a shop&rsquo;s website &mdash; small operations post
                &ldquo;closing early, storm coming&rdquo; there and nowhere else.
                Deliberately, this page carries no opening times: printed hours rot,
                and a guide that sends you to a dark window is worse than no guide.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Take cash
              </h3>
              <p>
                Cards are widely accepted now, but the smaller stands &mdash;
                especially the seasonal windows and the ones on the flea market
                grounds &mdash; are still happier with cash, and a few are cash only.
                It costs nothing to have twenty dollars in the car.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Sundays in Amish country
              </h3>
              <p>
                A number of businesses across LaGrange County close on Sundays, and
                Shipshewana in particular is much quieter than the rest of the week.
                Not all of them &mdash; several ice cream shops do open Sunday
                afternoons &mdash; but do not build a Sunday afternoon around a drive
                to Shipshewana without checking, and do not expect the flea market.
              </p>
            </div>
            <div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                Make it a loop, not an errand
              </h3>
              <p>
                The pleasure here is the driving. Chain O&rsquo;Lakes and then
                Cowabunga in Albion; the Pokagon beach and then the caf&eacute; at the
                Potawatomi Inn without moving the car; the Shipshewana flea market on
                a Tuesday and then Vanilla Bean on the way home. Pair each stop with
                the water nearest it and an ice cream run becomes the afternoon rather
                than an interruption to it.
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

      {/* Sources */}
      <section className="py-16 px-6 bg-surface-warm">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-lg font-semibold text-[#2b2520] mb-4">
            Sources
          </h2>
          <ul className="font-body text-sm text-[#2b2520]/55 space-y-2 leading-relaxed">
            <li>
              Steuben County Tourism Bureau, Ice Cream Trail (the eight official
              stops)
            </li>
            <li>
              Visit Indiana, &ldquo;Take an Ice Cream Road Trip IN Steuben
              County&rdquo; (2026)
            </li>
            <li>
              Visit Shipshewana, &ldquo;Cool off in the Heart of Amish Country&rdquo;
              (LaGrange County shops)
            </li>
            <li>
              Visit Kosciusko County, Ice Cream Shops directory (North Webster,
              Winona Lake and Warsaw)
            </li>
            <li>
              Local reporting for openings and ownership: InkFreeNews (Skoops), WANE
              15 and 21Alive News (Lickity Splitz), Towne Post Lakes Region
              (Cowlick&rsquo;s)
            </li>
            <li className="pt-2 text-[#2b2520]/45">
              Two location errors circulate widely and are corrected here: Lickity
              Splitz is in Rome City, not Wolcottville, and Cowabunga Creamery is in
              Albion, not Kendallville.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 sm:py-24 px-6 bg-surface-pine text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-4">
            Five minutes from the first stop
          </h2>
          <p className="font-body text-white/60 text-base sm:text-lg mb-8">
            The Farmhouse sits on the shoreline of Big Long Lake in LaGrange County
            &mdash; four bedrooms, sleeps 12, private dock, and Cowlick&rsquo;s just
            up the road. Read the{" "}
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

export default NorthernIndianaIceCream;
