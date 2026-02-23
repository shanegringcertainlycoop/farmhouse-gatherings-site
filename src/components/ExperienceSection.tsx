import { BedDouble, UtensilsCrossed, Sofa, Ship, PanelTop, Flame } from "lucide-react";

const features = [
  {
    icon: BedDouble,
    title: "Bunk Rooms",
    desc: "Cousins piled in. Flashlights after dark.",
  },
  {
    icon: UtensilsCrossed,
    title: "Big Dining Table",
    desc: "Room for everyone. Pass the corn.",
  },
  {
    icon: Sofa,
    title: "Cozy Living Space",
    desc: "Board games. Rainy afternoons. Extra blankets.",
  },
  {
    icon: Ship,
    title: "Dock Access",
    desc: "Jump in. Paddle out. Watch the sunset.",
  },
  {
    icon: PanelTop,
    title: "Screened Porch",
    desc: "Morning coffee. Evening breeze. No bugs.",
  },
  {
    icon: Flame,
    title: "Firepit",
    desc: "S'mores. Stories. Stars overhead.",
  },
];

const ExperienceSection = () => (
  <section id="experience" className="py-20 sm:py-28 px-4 bg-muted/50 linen-texture">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary text-center mb-4">
        The Experience
      </h2>
      <p className="font-body text-foreground/60 text-center mb-14 text-base sm:text-lg">
        Everything you need. Nothing you don't.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {features.map((f) => (
          <div
            key={f.title}
            className="bg-background border border-border rounded-sm p-6 sm:p-8 text-center hover:shadow-md transition-shadow"
          >
            <f.icon
              size={36}
              strokeWidth={1.5}
              className="mx-auto mb-4 text-secondary"
              style={{ strokeLinecap: "round", strokeLinejoin: "round" }}
            />
            <h3 className="font-display text-lg font-semibold text-primary mb-2">
              {f.title}
            </h3>
            <p className="font-body text-foreground/70 text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ExperienceSection;
