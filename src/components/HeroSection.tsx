import heroImg from "@/assets/deck-view.webp";

const HeroSection = () => (
  <section id="hero" className="relative h-screen flex items-center justify-center">
    <div className="absolute inset-4 sm:inset-6 rounded-3xl overflow-hidden">
      <img src={heroImg} alt="Big Long Lake vacation rental deck view in Wolcottville, Indiana" className="w-full h-full object-cover" loading="eager" width={1280} height={853} />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
      <p className="font-body text-xs tracking-[0.4em] uppercase text-white/60 mb-8">
        Wolcottville, Indiana
      </p>
      <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.95] mb-6">
        The Farmhouse at
        <br />
        Big Long Lake
      </h1>
      <p className="font-body text-base sm:text-lg text-white/80 max-w-2xl mx-auto mb-4">
        A lakefront vacation rental on Big Long Lake — 4 bedrooms, a private dock,
        and room for 12 in the heart of Indiana&rsquo;s Amish country.
      </p>
      <p className="font-display text-xl sm:text-2xl text-white/80 italic">
        A place to gather.
      </p>
    </div>
  </section>
);

export default HeroSection;
