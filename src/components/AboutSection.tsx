import houseImg from "@/assets/houses-from-lake.webp";
import backyardImg from "@/assets/backyard.webp";

const AboutSection = () => (
  <section id="about" className="py-24 sm:py-32 bg-surface-warm">
    {/* Photo strip — edge-to-edge feel */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-6 mb-20 max-w-6xl mx-auto">
      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
        <img src={houseImg} alt="The Farmhouse from the lake" className="w-full h-full object-cover" loading="lazy" />
      </div>
      <div className="aspect-[4/3] overflow-hidden rounded-2xl">
        <img src={backyardImg} alt="Backyard and deck" className="w-full h-full object-cover" loading="lazy" />
      </div>
    </div>

    {/* Text — clean, centered on dark */}
    <div className="max-w-2xl mx-auto px-6 text-center">
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2b2520] mb-8">
        About the Home
      </h2>
      <div className="space-y-5 font-body text-[#2b2520]/70 text-base sm:text-lg leading-relaxed">
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
  </section>
);

export default AboutSection;
