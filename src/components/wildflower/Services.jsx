import { Clock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const services = [
  {
    name: "Root Touch Up",
    price: "$65",
    duration: "135 min",
    description:
      "Seamless root coverage that blends your new growth into your existing color for a fresh, polished look.",
  },
  {
    name: "Highlight",
    price: "$130",
    duration: "300 min",
    description:
      "Add dimension to your hair with expertly applied highlights and lowlights, enhancing your natural color and creating a sun-kissed effect.",
  },
  {
    name: "Men's Haircut",
    price: "$35",
    duration: "45 min",
    description:
      "Precision haircut tailored for men, finished with styling to achieve your desired look, from classic to modern.",
  },
  {
    name: "Children's Haircut",
    price: "$25",
    duration: "30 min",
    description:
      "Fun and friendly haircut experience for children, ensuring comfort and a great style for your little ones.",
  },
  {
    name: "Color Correction Service",
    price: "$150",
    duration: "120 min",
    description:
      "Professional service to fix unwanted hair color results, restoring your hair to a vibrant and appealing shade.",
  },
  {
    name: "Women's Haircut",
    price: "$45",
    duration: "90 min",
    description:
      "A custom cut sculpted to your face shape and texture, finished with a full wash and style.",
  },
  {
    name: "Lowlight",
    price: "$120",
    duration: "240 min",
    description:
      "Depth-rich lowlights woven through your hair to add richness, contrast, and natural-looking dimension.",
  },
  {
    name: "Wash & Style",
    price: "$30",
    duration: "60 min",
    description:
      "A refreshing wash and blowout that leaves your hair clean, volumized, and camera-ready.",
  },
  {
    name: "Condition Treatment",
    price: "$40",
    duration: "90 min",
    description:
      "A deep-conditioning treatment that restores moisture, softness, and shine to tired or stressed hair.",
  },
  {
    name: "All Over Color",
    price: "$90",
    duration: "120 min",
    description:
      "A full single-process color application from root to tip for a rich, uniform, head-turning shade.",
  },
  {
    name: "Highlight & Lowlight",
    price: "$150",
    duration: "300 min",
    description:
      "The best of both worlds — highlights and lowlights woven together for maximum depth, dimension, and movement.",
  },
  {
    name: "Face Framing Blonding",
    price: "$75",
    duration: "210 min",
    description:
      "Bright, face-framing lightening around the hairline that illuminates your features and adds a sunlit glow.",
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
            Every service is tailored to your hair. Book directly through
            GlossGenius — prices and times are listed exactly as offered.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="group flex-shrink-0">
              <div className="relative h-full bg-white rounded-3xl p-8 border border-peony/30 transition-all duration-500 hover:border-terra hover:shadow-2xl hover:shadow-terra/10 hover:-translate-y-1.5 overflow-hidden flex flex-col">
                {/* Teal accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-display text-2xl md:text-3xl text-umber leading-tight">
                    {service.name}
                  </h3>
                  <span className="font-label text-lg tracking-[0.05em] text-terra font-semibold whitespace-nowrap mt-1">
                    {service.price}
                  </span>
                </div>

                <div className="flex items-center gap-1 mb-4">
                  <Clock
                    className="text-umber/40"
                    size={12}
                    strokeWidth={1.5}
                  />
                  <span className="font-body text-[11px] text-umber/50 tracking-wide">
                    {service.duration}
                  </span>
                </div>

                <p className="font-body text-umber/60 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                <button
                  onClick={handleBook}
                  className="font-label text-[10px] tracking-[0.2em] uppercase text-umber/50 group-hover:text-terra transition-colors duration-300 cursor-pointer font-semibold min-h-[48px] flex items-center w-full border-t border-peony/20 pt-4 mt-auto"
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