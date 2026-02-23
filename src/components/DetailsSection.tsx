import { Users, BedDouble, Bath, CalendarDays } from "lucide-react";

const stats = [
  { icon: Users, label: "Sleeps", value: "12" },
  { icon: BedDouble, label: "Bedrooms", value: "4" },
  { icon: Bath, label: "Baths", value: "2" },
  { icon: CalendarDays, label: "Minimum Stay", value: "2 nights" },
];

const DetailsSection = () => (
  <section id="details" className="py-20 sm:py-28 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary text-center mb-14">
        Stay Details
      </h2>

      {/* Merit badge stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-card border-2 border-secondary/30 rounded-sm p-5 sm:p-6 text-center"
          >
            <s.icon size={28} strokeWidth={1.5} className="mx-auto mb-3 text-secondary" />
            <div className="font-display text-2xl font-bold text-primary">{s.value}</div>
            <div className="font-body text-xs uppercase tracking-wider text-foreground/50 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* Camp rules card */}
      <div className="bg-card border border-border rounded-sm p-6 sm:p-8 max-w-lg mx-auto text-center">
        <h3 className="font-display text-lg font-semibold text-primary mb-3">
          A Few House Notes
        </h3>
        <ul className="font-body text-foreground/70 text-sm sm:text-base space-y-2">
          <li>Family-friendly. Always.</li>
          <li>No large party groups.</li>
          <li>Treat it like your grandparents' place.</li>
          <li>Leave it better than you found it.</li>
        </ul>
      </div>
    </div>
  </section>
);

export default DetailsSection;
