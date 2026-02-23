const highlights = [
  {
    title: "Farm Stands",
    desc: "Fresh sweet corn and tomatoes all summer long. The kind you drive past and have to stop for.",
  },
  {
    title: "Local Ice Cream",
    desc: "The good kind. After-dinner drives with sticky fingers and no napkins.",
  },
  {
    title: "Small-Town Rhythm",
    desc: "Wolcottville moves slow. That's the whole point. Quiet roads, friendly waves, nowhere to rush to.",
  },
];

const AreaSection = () => (
  <section id="area" className="py-24 sm:py-32 px-6 border-t border-border/50">
    <div className="max-w-2xl mx-auto">
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground text-center mb-16">
        The Area
      </h2>

      <div className="space-y-12">
        {highlights.map((h) => (
          <div key={h.title} className="text-center">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-foreground mb-3">
              {h.title}
            </h3>
            <p className="font-body text-foreground/50 text-base sm:text-lg leading-relaxed max-w-md mx-auto">
              {h.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreaSection;
