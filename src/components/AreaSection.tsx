import { IceCreamCone, Tractor, TreePine } from "lucide-react";

const highlights = [
  {
    icon: Tractor,
    title: "Farm Stands",
    desc: "Fresh sweet corn and tomatoes all summer long. The kind you drive past and have to stop for.",
  },
  {
    icon: IceCreamCone,
    title: "Local Ice Cream",
    desc: "The good kind. After-dinner drives with sticky fingers and no napkins.",
  },
  {
    icon: TreePine,
    title: "Small-Town Rhythm",
    desc: "Wolcottville moves slow. That's the whole point. Quiet roads, friendly waves, nowhere to rush to.",
  },
];

const AreaSection = () => (
  <section id="area" className="py-20 sm:py-28 px-4 bg-muted/50 linen-texture">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary text-center mb-4">
        The Area
      </h2>
      <p className="font-body text-foreground/60 text-center mb-14 text-base sm:text-lg">
        Things to do around camp.
      </p>

      <div className="space-y-8">
        {highlights.map((h) => (
          <div key={h.title} className="flex items-start gap-5">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-background border border-border flex items-center justify-center">
              <h.icon size={22} strokeWidth={1.5} className="text-secondary" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-primary mb-1">
                {h.title}
              </h3>
              <p className="font-body text-foreground/70 text-sm sm:text-base leading-relaxed">
                {h.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AreaSection;
