import lakeImg from "@/assets/dock.webp";
import deckLakeImg from "@/assets/deck-lake.webp";

const LakeSection = () => (
  <section id="lake" className="relative">
    {/* Full-bleed hero photo */}
    <div className="relative h-[80vh] overflow-hidden">
      <img src={lakeImg} alt="Dock on Big Long Lake" className="w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white text-center">
          The Lake
        </h2>
      </div>
    </div>

    {/* Text on dark */}
    <div className="max-w-2xl mx-auto px-6 py-20 sm:py-28 text-center">
      <div className="space-y-5 font-body text-foreground/70 text-base sm:text-lg leading-relaxed">
        <p>
          Big Long Lake is an all-sports lake — swimming, boating, fishing,
          kayaking. In the mornings it's glass. By afternoon, the kids are off
          the dock.
        </p>
        <p>
          Summer evenings are the best part. The water goes still, the sky
          turns gold, and everyone ends up sitting at the end of the dock
          doing nothing in particular.
        </p>
      </div>
    </div>
  </section>
);

export default LakeSection;
