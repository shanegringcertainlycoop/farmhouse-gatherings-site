import houseImg from "@/assets/houses-from-lake.webp";
import backyardImg from "@/assets/backyard.webp";

const AboutSection = () => (
  <section id="about" className="py-20 sm:py-28 px-4">
    <div className="max-w-5xl mx-auto">
      {/* Photo strip */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border">
          <img src={houseImg} alt="The Farmhouse from the lake" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="aspect-[4/3] rounded-sm overflow-hidden border border-border">
          <img src={backyardImg} alt="Backyard and deck" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Postcard-style card */}
      <div className="bg-card border border-border rounded-sm p-8 sm:p-12 shadow-sm relative max-w-2xl mx-auto">
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary/60 shadow-sm" />

        <h2 className="font-display text-3xl sm:text-4xl font-bold text-primary mb-6 text-center">
          About the Home
        </h2>
        <div className="space-y-4 font-body text-foreground/80 text-base sm:text-lg leading-relaxed text-center">
          <p>
            The Farmhouse is one of the oldest properties on Big Long Lake. It's been gently
            updated over the years but never lost what makes it feel like home.
          </p>
          <p>
            The bones are the same. The screen door still slams. The dock still
            catches the evening light. It's clean, comfortable, and unhurried —
            a place that feels like it's always been part of the lake.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
