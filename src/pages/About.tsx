import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import houseImg from "@/assets/house-exterior.webp";

const About = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero banner */}
        <section className="relative h-[60vh] flex items-center justify-center">
          <div className="absolute inset-4 sm:inset-6 rounded-3xl overflow-hidden">
            <img
              src={houseImg}
              alt="The Farmhouse at Big Long Lake exterior"
              className="w-full h-full object-cover"
              loading="eager"
              width={1280}
              height={853}
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
          <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[0.95]">
              Our Family
            </h1>
          </div>
        </section>

        {/* Family introduction */}
        <section className="py-24 sm:py-32 bg-surface-warm">
          <div className="max-w-2xl mx-auto px-6">
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2b2520] text-center mb-12">
              The Gring Family
            </h2>

            {/* Placeholder for family photo */}
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[#2b2520]/10 flex items-center justify-center mb-12 max-w-md mx-auto">
              <p className="font-body text-[#2b2520]/30 text-sm uppercase tracking-[0.2em]">
                Family photo
              </p>
            </div>

            <div className="space-y-5 font-body text-[#2b2520]/70 text-base sm:text-lg leading-relaxed text-center">
              <p>
                We're Laura, Shane, Kyle, and Scott — and we've been the owners
                of The Farmhouse at Big Long Lake since 2018.
              </p>
              <p>
                When we first found this place, we knew it was something special.
                One of the oldest homes on Big Long Lake, tucked into a quiet
                stretch of shoreline in Wolcottville, Indiana. The kind of house
                that feels like it's been waiting for big families and long weekends.
              </p>
              <p>
                We've put a lot of love into updating it over the years — new
                kitchen, comfortable beds, a deck you never want to leave — but
                we've kept the character that makes it feel like a real lake house
                and not a rental. The screen door still slams. The dock still
                catches the sunset.
              </p>
              <p>
                For us, this place is about slowing down and being together.
                Morning coffee on the deck, afternoons on the water, evenings
                around the firepit. We hope it gives your family the same thing
                it gives ours.
              </p>
            </div>
          </div>
        </section>

        {/* CTA back to inquiry */}
        <section className="py-20 sm:py-24 px-6 bg-surface-cool text-center">
          <div className="max-w-xl mx-auto">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Come stay with us
            </h2>
            <p className="font-body text-foreground/50 text-base sm:text-lg mb-8">
              We'd love to share this place with your family.
            </p>
            <a
              href="/#inquire"
              className="inline-block bg-secondary text-secondary-foreground font-body font-semibold text-sm tracking-wide uppercase px-8 py-3 rounded-sm hover:bg-secondary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default About;
