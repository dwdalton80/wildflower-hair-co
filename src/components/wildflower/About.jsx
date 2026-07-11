import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function About({ aboutImage }) {
  return (
    <section
      id="about"
      className="py-24 md:py-40 bg-silk scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative order-2 md:order-1"
        >
          <div className="relative aspect-[4/5] overflow-hidden rounded-[4px_120px_4px_120px] shadow-xl shadow-terra/10">
            <img
              src={aboutImage}
              alt="Kyia — Wildflower Hair Co."
              className="w-full h-full object-cover"
            />
          </div>
          {/* Signature element */}
          <div className="absolute -bottom-6 -right-6 md:-right-12 bg-silk px-8 py-6 rounded-[120px_4px_120px_4px] shadow-lg">
            <p className="font-display text-3xl italic text-terra">Kyia</p>
            <p className="font-label text-[9px] tracking-[0.2em] uppercase text-umber/40 mt-1">
              Founder &amp; Stylist
            </p>
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="order-1 md:order-2"
        >
          <span className="font-label text-[11px] tracking-[0.3em] uppercase text-terra">
            Trust &amp; Origin
          </span>
          <h2 className="font-display text-4xl md:text-5xl italic text-umber mt-4 mb-8">
            Where passion
            <br />
            takes root
          </h2>
          <div className="font-body text-umber/70 text-lg leading-relaxed space-y-5">
            <p>
              Like a wildflower finding its place in the sun, Kyia discovered
              her calling in the art of hair. As a newly licensed cosmetologist,
              she brings fresh eyes and an intentional touch to every chair she
              sits behind.
            </p>
            <p>
              Under the name{" "}
              <span className="font-display italic text-terra">
                Wildflower Hair Co.
              </span>
              , she blends botanical inspiration with meticulous technique —
              believing that the most beautiful transformations grow naturally,
              never forced.
            </p>
            <p>
              Now bringing her craft to {siteConfig.salonName}, Kyia invites you
              to experience hair care that feels less like an appointment and
              more like a ritual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}