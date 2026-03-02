import bunkImg from "@/assets/bunk-room.webp";
import kidsRoomImg from "@/assets/kids-room.webp";
import diningImg from "@/assets/dining-room.webp";
import livingImg from "@/assets/living-room.webp";
import kitchenImg from "@/assets/kitchen.webp";
import livingWideImg from "@/assets/living-room-wide.webp";

const blocks = [
  { img: diningImg, alt: "Dining table with lake views", title: "Big Dining Table", desc: "Room for everyone. Pass the corn." },
  { img: livingImg, alt: "Warm living room", title: "Cozy Living Space", desc: "Board games. Rainy afternoons. Extra blankets." },
  { img: kitchenImg, alt: "Kitchen", title: "Full Kitchen", desc: "Morning coffee. Big breakfasts. Late-night snacks." },
];

const gallery = [
  { img: bunkImg, alt: "Bunk room with nautical decor", caption: "Bunk Rooms" },
  { img: kidsRoomImg, alt: "Kids room with twin beds", caption: "Kids Room" },
  { img: livingWideImg, alt: "Open living and dining area", caption: "Living Area" },
];

const ExperienceSection = () => (
  <section id="experience" className="py-24 sm:py-32 bg-surface-cool">
    <div className="max-w-2xl mx-auto px-6 text-center mb-16">
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-foreground mb-4">
        The Experience
      </h2>
      <p className="font-body text-foreground/50 text-base sm:text-lg">
        Everything you need. Nothing you don't.
      </p>
    </div>

    {/* Large photo blocks with overlay text */}
    <div className="space-y-4 px-6 max-w-6xl mx-auto">
      {blocks.map((b) => (
        <div key={b.title} className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl group">
          <img src={b.img} alt={b.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={849} />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors rounded-2xl" />
          <div className="absolute inset-0 flex items-end p-6 sm:p-10">
            <div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">{b.title}</h3>
              <p className="font-body text-white/70 text-sm sm:text-base">{b.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    {/* Tight gallery grid */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4 px-6 max-w-6xl mx-auto">
      {gallery.map((g) => (
        <div key={g.caption} className="relative aspect-[4/3] overflow-hidden rounded-xl group">
          <img src={g.img} alt={g.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" width={1280} height={849} />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors rounded-xl" />
          <div className="absolute bottom-0 left-0 p-4">
            <p className="font-display text-sm sm:text-base font-semibold text-white">{g.caption}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default ExperienceSection;
