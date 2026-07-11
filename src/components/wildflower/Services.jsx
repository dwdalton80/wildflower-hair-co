import { Scissors, Palette, Sparkles, Leaf } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  {
    name: "Precision Cuts",
    description:
      "Bespoke cuts sculpted to your face shape, texture, and vibe. Every snip is intentional.",
    priceRange: "$65+",
    Icon: Scissors,
  },
  {
    name: "Living Color",
    description:
      "Balayage, dimensional highlights, and bold transformations that grow out beautifully.",
    priceRange: "$120+",
    Icon: Palette,
  },
  {
    name: "Editorial Styling",
    description:
      "Blowouts, updos, and occasion styling that turn heads and hold all day.",
    priceRange: "$55+",
    Icon: Sparkles,
  },
  {
    name: "Restorative Care",
    description:
      "Deep conditioning, bond-building, and gloss treatments for hair that glows with health.",
    priceRange: "$45+",
    Icon: Leaf,
  },
];

export default function Services() {
  const handleBook = () => {
    window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-silk scroll-mt-20 overflow-hidden"
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
            What she does, <span className="italic text-terra">beautifully.</span>
          </h2>
        </div>

        {/* Filmstrip on mobile → grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center"
            >
              <div className="relative h-full bg-white rounded-3xl p-8 md:p-9 border border-peony/30 transition-all duration-500 hover:border-terra hover:shadow-2xl hover:shadow-terra/10 hover:-translate-y-1.5 overflow-hidden">
                {/* Teal accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="w-14 h-14 rounded-2xl bg-terra/10 flex items-center justify-center mb-6 group-hover:bg-terra transition-all duration-500">
                  <service.Icon
                    className="text-terra group-hover:text-silk transition-colors duration-500"
                    size={26}
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="font-display text-2xl md:text-3xl text-umber mb-3">
                  {service.name}
                </h3>
                <p className="font-body text-umber/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-peony/20">
                  <span className="font-label text-sm tracking-[0.1em] uppercase text-terra font-semibold">
                    {service.priceRange}
                  </span>
                  <button
                    onClick={handleBook}
                    className="font-label text-[10px] tracking-[0.2em] uppercase text-umber/50 group-hover:text-terra transition-colors duration-300 cursor-pointer font-semibold min-h-[48px] flex items-center"
                  >
                    Book →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}