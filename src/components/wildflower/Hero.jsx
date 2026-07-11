import { motion } from "framer-motion";
import BookNowButton from "./BookNowButton";
import ShadowLeaf from "./ShadowLeaf";
import { siteConfig } from "@/lib/siteConfig";

export default function Hero({ heroImage }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-gradient-to-br from-silk via-[#faf5f0] to-[#f5f0eb]"
    >
      {/* Decorative shadow leaves */}
      <ShadowLeaf
        className="w-[400px] h-[600px] -top-20 -left-32"
        color="#D8B4A0"
        opacity={0.05}
        duration={180}
      />
      <ShadowLeaf
        className="w-[300px] h-[450px] bottom-0 right-10"
        color="#9E6B55"
        opacity={0.04}
        duration={140}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-5 gap-8 md:gap-16 items-center relative z-10 w-full">
        {/* Text — 40% */}
        <div className="md:col-span-2 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-label text-[11px] tracking-[0.3em] uppercase text-terra inline-block mb-6"
          >
            {siteConfig.brandName} &mdash; {siteConfig.stylistName}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-display text-5xl md:text-7xl lg:text-8xl italic text-umber leading-[0.95] mb-6"
            style={{ letterSpacing: "-0.02em" }}
          >
            The Art
            <br />
            of Growth
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="font-body text-umber/60 text-lg leading-relaxed mb-10 max-w-md mx-auto md:mx-0"
          >
            {siteConfig.subTagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            <BookNowButton
              magnetic
              variant="solid"
              className="px-10 py-5 text-sm"
            >
              Secure Your Transformation
            </BookNowButton>
          </motion.div>
        </div>

        {/* Image — 60% */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="md:col-span-3 relative"
        >
          <div className="relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[120px_4px_120px_4px] shadow-2xl shadow-terra/10">
            <img
              src={heroImage}
              alt="Wildflower Hair Co. — golden hour hair"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-umber/10 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}