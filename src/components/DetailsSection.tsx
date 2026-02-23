const stats = [
  { label: "Sleeps", value: "12" },
  { label: "Bedrooms", value: "4" },
  { label: "Baths", value: "2" },
  { label: "Min Stay", value: "2 nights" },
];

const DetailsSection = () => (
  <section id="details" className="py-24 sm:py-32 px-6 border-t border-border/50">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground text-center mb-16">
        Stay Details
      </h2>

      {/* Stats — large serif numbers */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12 mb-20">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-display text-4xl sm:text-5xl font-bold text-secondary mb-2">{s.value}</div>
            <div className="font-body text-xs uppercase tracking-[0.2em] text-foreground/40">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      {/* House rules — simple list */}
      <div className="max-w-md mx-auto text-center">
        <h3 className="font-display text-xl font-semibold text-foreground mb-6">
          A Few House Notes
        </h3>
        <ul className="font-body text-foreground/50 text-base space-y-3">
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
