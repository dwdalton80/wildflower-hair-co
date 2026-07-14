import { Scissors, Palette, Leaf, Clock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  {
    name: "Cuts",
    description:
      "Bespoke cuts sculpted to your face shape, texture, and vibe. Every snip is intentional.",
    Icon: Scissors,
    items: [
      { label: "Women's Haircut", price: "$45", duration: "90 min" },
      { label: "Men's Haircut", price: "$35", duration: "45 min" },
      { label: "Children's Haircut", price: "$25", duration: "30 min" },
    ],
  },
  {
    name: "Color",
    description:
      "Highlights, lowlights, root touch-ups, and bold transformations that grow out beautifully.",
    Icon: Palette,
    items: [
      { label: "Root Touch Up", price: "$65", duration: "135 min" },
      { label: "Highlight", price: "$130", duration: "5 hrs" },
      { label: "Lowlight", price: "$120", duration: "4 hrs" },
      { label: "Highlight & Lowlight", price: "$150", duration: "5 hrs" },
      { label: "All Over Color", price: "$90", duration: "2 hrs" },
      { label: "Face Framing Blonding", price: "$75", duration: "3.5 hrs" },
      { label: "Color Correction", price: "$150", duration: "2 hrs" },
    ],
  },
  {
    name: "Style & Care",
    description:
      "Wash-and-style refreshes and conditioning treatments for hair that glows with health.",
    Icon: Leaf,
    items: [
      { label: "Wash & Style", price: "$30", duration: "60 min" },
      { label: "Condition Treatment", price: "$40", duration: "90 min" },
    ],
  },
];

export default function Services() {
  const handleBook = () => {
    window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-gradient-to-b from-silk via-silk to-[#EFE9E1] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-terra" />
            <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
              The Menu
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-umber leading-tight max-w-2xl">
            What she does, <span className="italic text-terra">wildly well.</span>
          </h2>
          <p className="font-body text-umber/60 mt-4 max-w-xl text-base">
            Pricing varies based on hair length, density, and complexity. Your
            final quote is confirmed at consultation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group flex-shrink-0">
              <div className="relative h-full bg-white rounded-3xl p-8 border border-peony/30 transition-all duration-500 hover:border-terra hover:shadow-2xl hover:shadow-terra/10 hover:-translate-y-1.5 overflow-hidden flex flex-col">
                {/* Teal accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 rounded-2xl bg-terra/10 flex items-center justify-center mb-6 group-hover:bg-terra transition-all duration-500">
                  <service.Icon
                    className="text-terra group-hover:text-silk transition-colors duration-500"
                    size={26}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-umber mb-2">
                  {service.name}
                </h3>
                <p className="font-body text-umber/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Service breakdown */}
                <div className="mt-auto space-y-3 mb-6">
                  {service.items.map((item, i) => (
                    <div
                      key={i}
                      className="border-b border-peony/20 pb-3 last:border-0 last:pb-0"
                    >
                      <div className="flex items-start justify-between gap-2">
                        <p className="font-body text-sm text-umber/80 leading-tight">
                          {item.label}
                        </p>
                        <span className="font-label text-sm tracking-[0.05em] text-terra font-semibold whitespace-nowrap">
                          {item.price}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock
                          className="text-umber/40"
                          size={11}
                          strokeWidth={1.5}
                        />
                        <span className="font-body text-[11px] text-umber/50">
                          {item.duration}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBook}
                  className="font-label text-[10px] tracking-[0.2em] uppercase text-umber/50 group-hover:text-terra transition-colors duration-300 cursor-pointer font-semibold min-h-[48px] flex items-center w-full border-t border-peony/20 pt-4"
                >
                  Book →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}