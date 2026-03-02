import { useState } from "react";

const faqs = [
  {
    q: "How do I book The Farmhouse at Big Long Lake?",
    a: "Send us an inquiry through the form on this page with your preferred dates and group size. We'll get back to you within 24 hours to confirm availability and share pricing details.",
  },
  {
    q: "How many guests can the property accommodate?",
    a: "The Farmhouse sleeps up to 12 guests across four bedrooms — two bunk rooms, a kids room with twin beds, and a main bedroom. There are two full bathrooms.",
  },
  {
    q: "Is Big Long Lake good for swimming and boating?",
    a: "Big Long Lake is an all-sports lake in LaGrange County, Indiana. Swimming, boating, tubing, water skiing, fishing, kayaking, and paddleboarding are all popular. The lake is roughly 300 acres with clean water and a mix of sandy and natural shoreline.",
  },
  {
    q: "What is the minimum stay requirement?",
    a: "We require a two-night minimum stay. During peak summer weekends and holidays, longer minimum stays may apply.",
  },
  {
    q: "Are pets allowed?",
    a: "No, we do not allow pets at the property. This helps us keep the home clean and comfortable for guests with allergies.",
  },
  {
    q: "What's nearby the property?",
    a: "Wolcottville is in the heart of Indiana's Amish country. Shipshewana and its famous flea market are about 15 minutes away. You'll find farm stands, local ice cream shops, and Pigeon River Fish & Wildlife Area nearby. Chain O'Lakes State Park is roughly 30 minutes south.",
  },
  {
    q: "What amenities are included?",
    a: "The Farmhouse comes with a full kitchen, dining table that seats 12, a living room with board games, central air conditioning, washer and dryer, free parking, a charcoal grill, a spacious deck with lake views, a lakefront yard with a firepit, and your own private dock on Big Long Lake.",
  },
  {
    q: "When is the best time to visit Big Long Lake?",
    a: "Summer (June through August) is peak season — warm water, long days, and the best weather for lake activities. Early fall is beautiful and quieter, with fewer boats on the water and the trees starting to turn. Late spring weekends are great for fishing and kayaking before the summer crowds arrive.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 sm:py-32 px-6 border-t border-border/50 bg-surface-warm">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#2b2520] text-center mb-16">
          Common Questions
        </h2>

        <dl className="space-y-0 divide-y divide-[#2b2520]/10">
          {faqs.map((faq, i) => (
            <div key={i}>
              <dt>
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  aria-expanded={openIndex === i}
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-[#2b2520]">
                    {faq.q}
                  </span>
                  <span
                    className="flex-shrink-0 font-body text-[#2b2520]/40 text-xl leading-none transition-transform duration-200"
                    style={{ transform: openIndex === i ? "rotate(45deg)" : "none" }}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
              </dt>
              {openIndex === i && (
                <dd className="pb-5 font-body text-[#2b2520]/60 text-base leading-relaxed">
                  {faq.a}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default FAQSection;
