import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

export default function About({ aboutImage }) {
  return (
    <section
      id="about"
      className="py-24 md:py-32 bg-gradient-to-b from-silk to-[#F0EBE3] scroll-mt-20 overflow-hidden"
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
          <div className="relative aspect-[4/5] overflow-hidden rounded-[120px_4px_4px_4px] shadow-xl shadow-terra/15">
            <img
              src={aboutImage}
              alt="Kyia — Wildflower Hair Co."
              className="w-full h-full object-cover"
            />
          </div>
          {/* Floating teal badge */}
          <div className="absolute -bottom-5 -right-3 md:-right-8 bg-terra text-silk px-7 py-5 rounded-full shadow-xl shadow-terra/30">
            <p className="font-display text-3xl italic leading-none">Kyia</p>
            <p className="font-label text-[9px] tracking-[0.2em] uppercase text-silk/80 mt-1.5">
              Stylist &amp; Founder
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
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-terra" />
            <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
              Meet Kyia
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-umber leading-tight mb-8">
            Rooted in grace.
            <br />
            <span className="italic text-terra">Blooming in beauty.</span>
          </h2>
          <div className="font-body text-umber/70 text-lg leading-relaxed space-y-5">
            <p>
              Like a wildflower finding its place in the sun, Kyia discovered
              her calling in the art of hair. Rooted in grace and blooming in
              beauty, she brings an intentional touch to every chair she sits
              behind.
            </p>
            <p>
              Under the name{" "}
              <span className="font-display italic text-terra font-medium">
                Wildflower Hair Co.
              </span>
              , she specializes in blondes, brunettes, and dimensional color —
              believing the best transformations grow naturally, never forced.
            </p>
            <p>
              Your hair, but wilder. Kyia invites you to experience hair care
              that feels less like an appointment and more like a ritual.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}