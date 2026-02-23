import lakeImg from "@/assets/dock.webp";

const LakeSection = () => (
  <section id="lake" className="py-20 sm:py-28 px-4">
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
      <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border">
        <img src={lakeImg} alt="Dock on Big Long Lake" className="w-full h-full object-cover" loading="lazy" />
      </div>

      <div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-6">
          The Lake
        </h2>
        <div className="space-y-4 font-body text-foreground/80 text-base sm:text-lg leading-relaxed">
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
    </div>
  </section>
);

export default LakeSection;
