import heroImg from "@/assets/deck-view.webp";

const HeroSection = () => {
  const scrollToInquire = () => {
    document.querySelector("#inquire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center wave-divider">
      {/* Real photo background */}
      <div className="absolute inset-0">
        <img src={heroImg} alt="View of Big Long Lake from the deck" className="w-full h-full object-cover" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-camp-amber/40 via-camp-amber/20 to-background/90" />
      </div>

      <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-primary-foreground/80 mb-6">
          Wolcottville, Indiana
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 drop-shadow-lg">
          The Farmhouse at
          <br />
          Big Long Lake
        </h1>
        <p className="font-display text-xl sm:text-2xl text-primary-foreground/90 italic mb-10 drop-shadow">
          A place to gather.
        </p>
        <button
          onClick={scrollToInquire}
          className="inline-block bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wide uppercase px-8 py-4 rounded-md hover:bg-primary/90 transition-colors shadow-md"
        >
          Inquire About Your Stay
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
