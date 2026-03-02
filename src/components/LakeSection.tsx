import lakeImg from "@/assets/dock.webp";
import deckLakeImg from "@/assets/deck-lake.webp";

const LakeSection = () => (
  <section id="lake" className="relative bg-surface-pine">
    {/* Full-bleed hero photo */}
    <div className="relative h-[80vh] overflow-hidden mx-6 rounded-2xl">
      <img src={lakeImg} alt="Dock on Big Long Lake" className="w-full h-full object-cover" loading="lazy" width={1280} height={849} />
      <div className="absolute inset-0 bg-gradient-to-t from-surface-pine via-black/30 to-transparent rounded-2xl" />
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
          Big Long Lake is an all-sports lake in LaGrange County, Indiana — roughly
          300 acres of clean water surrounded by woods and old lake houses. Swimming,
          boating, fishing, kayaking, paddleboarding — it's all fair game.
        </p>
        <p>
          In the mornings the lake is glass. Bring your coffee down to the dock
          and watch the mist burn off. By afternoon the kids are jumping off
          the dock, tubes are getting pulled, and someone's always fishing off
          the end.
        </p>
        <p>
          Bass, bluegill, and crappie keep the anglers busy. The lake is deep
          enough for tubing and skiing but small enough that you can kayak the
          whole shoreline before lunch.
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
