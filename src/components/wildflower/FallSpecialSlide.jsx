import { motion } from "framer-motion";
import BookNowButton from "./BookNowButton";

const FALL_IMAGE =
  "https://media.base44.com/images/public/6a5255ae151d27a36fddeb7b/7bdfb80f2_CodexImageSep10202606_52_42PM.png";

export default function FallSpecialSlide() {
  return (
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-8 md:gap-12 items-center w-full">
      {/* Text */}
      <div className="md:col-span-7 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6 bg-terra/12 px-4 py-2 rounded-full"
        >
          <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
            Limited Time • September & October
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-script text-6xl md:text-8xl text-terra leading-[0.95] mb-5"
        >
          Fall Special
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mb-5"
        >
          <p className="font-display text-5xl md:text-7xl text-umber font-semibold leading-none">
            20% Off
          </p>
          <p className="font-label text-sm tracking-[0.25em] uppercase text-umber/70 font-semibold mt-2">
            Any Hair Service
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex items-center gap-3 mb-6 justify-center md:justify-start"
        >
          <span className="font-label text-[11px] tracking-[0.2em] uppercase text-umber/60 font-semibold">
            Use Code
          </span>
          <span
            className="font-label text-sm tracking-[0.15em] uppercase text-silk font-bold px-5 py-2 rounded-full"
            style={{ backgroundColor: "#b34a2e" }}
          >
            Fall2026
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="font-display text-xl md:text-2xl italic text-umber/80 mb-8 max-w-lg mx-auto md:mx-0"
        >
          Thoughtful color. Healthy hair. Effortless confidence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <BookNowButton magnetic variant="solid" className="px-10 py-5 text-sm">
            Book Now →
          </BookNowButton>
          <span className="font-label text-[11px] tracking-[0.2em] uppercase text-umber/55 font-semibold">
            Durant, OK
          </span>
        </motion.div>
      </div>

      {/* Flyer image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="md:col-span-5 relative"
      >
        <div className="relative aspect-[3/4] overflow-hidden rounded-[4px_4px_4px_120px] shadow-2xl shadow-terra/20">
          <img
            src={FALL_IMAGE}
            alt="Fall Special — 20% off any hair service at Wildflower Hair Co."
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute -bottom-5 -left-3 md:-left-8 bg-terra text-silk px-6 py-4 rounded-full shadow-xl shadow-terra/30"
        >
          <p className="font-display text-2xl italic leading-none">20% Off</p>
        </motion.div>
      </motion.div>
    </div>
  );
}