import { Clock } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";

const ICON_BASE =
  "https://media.base44.com/images/public/6a5255ae151d27a36fddeb7b";

const services = [
  {
    name: "Root Touch Up",
    price: "$65",
    duration: "135 min",
    banner: `${ICON_BASE}/407f946fa_1.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-58e3acc1-3272-43f3-ad27-338f71f28669",
    description:
      "Seamless root coverage that blends your new growth into your existing color for a fresh, polished look.",
  },
  {
    name: "Highlight",
    price: "$130",
    duration: "300 min",
    banner: `${ICON_BASE}/a1aa2ebee_2.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-f1262cf2-c140-49a6-adaa-1bb76e4a8a2c",
    description:
      "Add dimension to your hair with expertly applied highlights and lowlights, enhancing your natural color and creating a sun-kissed effect.",
  },
  {
    name: "Men's Haircut",
    price: "$35",
    duration: "45 min",
    banner: `${ICON_BASE}/6b5f74653_3.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-58632fad-6886-4088-b558-7ca47728e8cd",
    description:
      "Precision haircut tailored for men, finished with styling to achieve your desired look, from classic to modern.",
  },
  {
    name: "Children's Haircut",
    price: "$25",
    duration: "30 min",
    banner: `${ICON_BASE}/8f4a297bb_4.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-a1dae390-afb6-4593-9ef6-61807aae0fde",
    description:
      "Fun and friendly haircut experience for children, ensuring comfort and a great style for your little ones.",
  },
  {
    name: "Color Correction Service",
    price: "$150",
    duration: "120 min",
    banner: `${ICON_BASE}/9af783d2b_5.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-c821e272-1abc-4706-9e52-c63fe0e3024e",
    description:
      "Professional service to fix unwanted hair color results, restoring your hair to a vibrant and appealing shade.",
  },
  {
    name: "Women's Haircut",
    price: "$45",
    duration: "90 min",
    banner: `${ICON_BASE}/c4f55c91a_6.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-51772c03-38fd-450f-bb0b-4fd82b9c421c",
    description:
      "A custom cut sculpted to your face shape and texture, finished with a full wash and style.",
  },
  {
    name: "Lowlight",
    price: "$120",
    duration: "240 min",
    banner: `${ICON_BASE}/5f58480aa_7.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-2e60269c-8c07-43c8-a36b-f3e9b3d68e36",
    description:
      "Depth-rich lowlights woven through your hair to add richness, contrast, and natural-looking dimension.",
  },
  {
    name: "Wash & Style",
    price: "$30",
    duration: "60 min",
    banner: `${ICON_BASE}/23ad0b8c8_generated_image.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-55ac9a76-6fe9-4b53-acd6-277867712efb",
    description:
      "A refreshing wash and blowout that leaves your hair clean, volumized, and camera-ready.",
  },
  {
    name: "Condition Treatment",
    price: "$40",
    duration: "90 min",
    banner: `${ICON_BASE}/655adf34b_generated_image.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-9bb5698a-4715-4461-b068-c181c254495f",
    description:
      "A deep-conditioning treatment that restores moisture, softness, and shine to tired or stressed hair.",
  },
  {
    name: "All Over Color",
    price: "$90",
    duration: "120 min",
    banner: `${ICON_BASE}/80f809602_generated_image.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-7c522a8f-05ce-4f5f-b241-d820bdd7abcf",
    description:
      "A full single-process color application from root to tip for a rich, uniform, head-turning shade.",
  },
  {
    name: "Highlight & Lowlight",
    price: "$150",
    duration: "300 min",
    banner: `${ICON_BASE}/282dd4e20_generated_image.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-8d899f2f-60f8-4689-80a8-686e15cf4016",
    description:
      "The best of both worlds — highlights and lowlights woven together for maximum depth, dimension, and movement.",
  },
  {
    name: "Face Framing Blonding",
    price: "$75",
    duration: "210 min",
    banner: `${ICON_BASE}/4849c6460_generated_image.png`,
    bookingUrl:
      "https://kyiadalton.glossgenius.com/book?service_token=1000f-2a700c60-66a6-493e-a2bd-94bd747eb8b5",
    description:
      "Bright, face-framing lightening around the hairline that illuminates your features and adds a sunlit glow.",
  },
];

export default function Services() {
  const handleBook = (url) => {
    window.open(url || siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
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
              <div className="relative h-full bg-white rounded-3xl border border-peony/30 transition-all duration-500 hover:border-terra hover:shadow-2xl hover:shadow-terra/10 hover:-translate-y-1.5 overflow-hidden flex flex-col">
                {/* Teal accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 z-10 bg-terra scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                {/* Banner image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden">
                  <img
                    src={service.banner}
                    alt={service.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col flex-1">
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
                    onClick={() => handleBook(service.bookingUrl)}
                    className="font-label text-[10px] tracking-[0.2em] uppercase text-umber/50 group-hover:text-terra transition-colors duration-300 cursor-pointer font-semibold min-h-[48px] flex items-center w-full border-t border-peony/20 pt-4 mt-auto"
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