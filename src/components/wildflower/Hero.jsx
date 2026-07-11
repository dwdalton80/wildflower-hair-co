import { motion } from "framer-motion";
import BookNowButton from "./BookNowButton";
import ShadowLeaf from "./ShadowLeaf";

export default function Hero({ heroImage }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden bg-gradient-to-br from-silk via-[#F5F1EB] to-[#EFE9E1]"
    >
      <ShadowLeaf
        className="w-[500px] h-[700px] -top-32 -left-40"
        color="#2E97B5"
        opacity={0.04}
        duration={200}
      />
      <ShadowLeaf
        className="w-[400px] h-[500px] -bottom-20 -right-20"
        color="#D0E8EF"
        opacity={0.1}
        duration={160}
      />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-center relative z-10 w-full">
        {/* Text */}
        <div className="md:col-span-7 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8"
          >
            <span className="w-10 h-px bg-terra" />
            <span className="font-script text-lg text-terra leading-none">
              Wildflower Hair Co. by Kyia
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="font-display text-6xl md:text-8xl lg:text-[7.5rem] text-umber leading-[0.88] mb-6"
            style={{ letterSpacing: "-0.03em" }}
          >
            Your hair,
            <br />
            <span className="italic text-terra">but wilder.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-2xl md:text-3xl italic text-umber/80 leading-relaxed mb-4"
          >
            Rooted in grace. Blooming in beauty.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="flex items-center gap-3 mb-10 justify-center md:justify-start"
          >
            <span className="font-label text-[11px] tracking-[0.2em] uppercase text-umber/60 font-semibold">
              Blondes
            </span>
            <span className="text-terra text-xs">•</span>
            <span className="font-label text-[11px] tracking-[0.2em] uppercase text-umber/60 font-semibold">
              Brunettes
            </span>
            <span className="text-terra text-xs">•</span>
            <span className="font-label text-[11px] tracking-[0.2em] uppercase text-umber/60 font-semibold">
              Dimension
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
          >
            <BookNowButton magnetic variant="solid" className="px-10 py-5 text-sm">
              Book Your Spot
            </BookNowButton>
            <button
              onClick={() =>
                document
                  .querySelector("#portfolio")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="font-label text-xs tracking-[0.2em] uppercase text-umber/60 hover:text-terra transition-colors cursor-pointer px-4 py-5 font-semibold"
            >
              See the Work →
            </button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[3/4] overflow-hidden rounded-[4px_4px_4px_120px] shadow-2xl shadow-terra/20">
            <img
              src={heroImage}
              alt="Wildflower Hair Co. — Kyia"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-umber/25 to-transparent" />
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="absolute -bottom-5 -left-3 md:-left-8 bg-terra text-silk px-6 py-4 rounded-full shadow-xl shadow-terra/30"
          >
            <p className="font-display text-2xl italic leading-none">By Kyia</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}