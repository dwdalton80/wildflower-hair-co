import { Scissors, Palette, Sparkles, Leaf } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  {
    name: "Precision Cuts",
    description:
      "Bespoke cuts sculpted to your face shape, hair texture, and lifestyle. Every snip is intentional.",
    priceRange: "$65+",
    Icon: Scissors,
  },
  {
    name: "Living Color",
    description:
      "Balayage, dimensional highlights, and full-color transformations that grow out beautifully.",
    priceRange: "$120+",
    Icon: Palette,
  },
  {
    name: "Editorial Styling",
    description:
      "Blowouts, updos, and occasion styling that turn heads and hold all day long.",
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
      className="relative py-24 md:py-40 bg-gradient-to-b from-silk via-silk to-[#eff5f7] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-24">
          <span className="font-label text-[11px] tracking-[0.3em] uppercase text-terra">
            The Menu
          </span>
          <h2 className="font-display text-4xl md:text-6xl italic text-umber mt-4">
            A Curation of Craft
          </h2>
          <p className="font-body text-umber/60 mt-6 max-w-xl mx-auto text-lg leading-relaxed">
            Each service is a bespoke experience, rooted in intention and crafted
            with botanical care.
          </p>
        </div>

        {/* Filmstrip on mobile → grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group flex-shrink-0 w-[85vw] sm:w-[320px] md:w-auto snap-center"
            >
              <div className="relative h-full bg-white/60 backdrop-blur-sm rounded-[120px_4px_120px_4px] p-8 md:p-10 border border-peony/20 transition-all duration-500 hover:border-terra/30 hover:shadow-xl hover:shadow-terra/5 hover:-translate-y-1">
                <div className="w-14 h-14 rounded-full bg-peony/20 flex items-center justify-center mb-6">
                  <service.Icon className="text-terra" size={24} strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl italic text-umber mb-3">
                  {service.name}
                </h3>
                <p className="font-body text-umber/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-peony/15">
                  <span className="font-label text-xs tracking-[0.15em] uppercase text-moss">
                    {service.priceRange}
                  </span>
                  <button
                    onClick={handleBook}
                    className="font-label text-[10px] tracking-[0.2em] uppercase text-terra opacity-50 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer hover:underline min-h-[48px] flex items-center"
                  >
                    Book This Look →
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