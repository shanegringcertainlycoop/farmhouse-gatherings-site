const highlights = [
  {
    title: "Shipshewana & Amish Country",
    desc: "Just 15 minutes away. The Shipshewana Flea Market runs every Tuesday and Wednesday from May through September — over 700 vendors across 40 acres. Grab a pie from an Amish bakery on the way home.",
  },
  {
    title: "Farm Stands & Local Eats",
    desc: "Fresh sweet corn and tomatoes from roadside stands all summer long. LaGrange County is farm country, and the produce shows up everywhere — front yards, gravel pull-offs, hand-painted signs you can't miss.",
  },
  {
    title: "Small-Town Rhythm",
    desc: "Wolcottville moves slow. That's the whole point. Quiet roads, friendly waves, nowhere to rush to. It's the kind of place where the ice cream shop is a 5-minute drive and the biggest decision is what flavor.",
  },
  {
    title: "Outdoor Adventures",
    desc: "Pigeon River Fish & Wildlife Area is a short drive east — great for hiking and birdwatching. Mongo is a few minutes down the road. Chain O'Lakes State Park is about 30 minutes south for anyone who wants a day trip.",
  },
];

const AreaSection = () => (
  <section id="area" className="py-24 sm:py-32 px-6 border-t border-border/50 bg-surface-warm">
    <div className="max-w-2xl mx-auto">
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2b2520] text-center mb-6">
        The Area
      </h2>
      <p className="font-body text-[#2b2520]/50 text-base sm:text-lg text-center mb-16">
        Wolcottville sits in the heart of LaGrange County, Indiana — Amish country, lake country, and about as far from a highway as you can get.
      </p>

      <div className="space-y-12">
        {highlights.map((h) => (
          <div key={h.title} className="text-center">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#2b2520] mb-3">
              {h.title}
            </h3>
            <p className="font-body text-[#2b2520]/60 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
              {h.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreaSection;
