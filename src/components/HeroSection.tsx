const HeroSection = () => {
  const scrollToInquire = () => {
    document.querySelector("#inquire")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center justify-center wave-divider">
      {/* Warm placeholder background */}
      <div className="absolute inset-0 bg-gradient-to-b from-camp-honey/30 via-camp-amber/20 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-camp-amber/10 to-camp-honey/10" />

      <div className="relative z-10 text-center px-4 py-24 max-w-3xl mx-auto">
        <p className="font-body text-sm tracking-[0.3em] uppercase text-secondary mb-6">
          Wolcottville, Indiana
        </p>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary leading-tight mb-6">
          The Farmhouse at
          <br />
          Big Long Lake
        </h1>
        <p className="font-display text-xl sm:text-2xl text-secondary italic mb-10">
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
