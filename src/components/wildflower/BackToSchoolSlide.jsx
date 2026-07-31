import { motion } from "framer-motion";
import { Sparkles, Smile, Phone } from "lucide-react";
import BookNowButton from "./BookNowButton";
import { siteConfig } from "@/lib/siteConfig";

const FLYER_IMAGE =
  "https://media.base44.com/images/public/6a5255ae151d27a36fddeb7b/e4662a5c3_D534C87F-90EB-4D1F-8531-AFAD0DBE9329.png";

export default function BackToSchoolSlide() {
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
          <Sparkles className="text-terra" size={14} />
          <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
            Limited Time Offer
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-[6.5rem] text-umber leading-[0.9] mb-5"
          style={{ letterSpacing: "-0.03em" }}
        >
          Back to School
          <br />
          <span className="italic text-terra">Special</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="font-body text-umber/70 text-base md:text-lg leading-relaxed mb-7 max-w-xl mx-auto md:mx-0"
        >
          Start the school year feeling fresh! Whether it's the first day of
          kindergarten or senior year, I've got you covered — teachers included!
        </motion.p>

        {/* Offers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 mb-6 justify-center md:justify-start"
        >
          <div className="border-2 border-terra/40 rounded-2xl p-5 bg-white/60 text-center sm:text-left sm:min-w-[200px]">
            <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
              <Sparkles className="text-terra" size={14} />
              <span className="font-label text-[10px] tracking-[0.18em] uppercase text-umber/70 font-semibold">
                Wash • Haircut • Style
              </span>
            </div>
            <div className="flex items-baseline gap-2 justify-center sm:justify-start">
              <span className="font-display text-4xl text-terra font-semibold">
                $15
              </span>
              <span className="font-body text-xs text-umber/50">
                reg. $25–$45
              </span>
            </div>
          </div>
          <div className="border-2 border-terra/40 rounded-2xl p-5 bg-white/60 text-center sm:text-left sm:min-w-[200px]">
            <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
              <Smile className="text-terra" size={14} />
              <span className="font-label text-[10px] tracking-[0.18em] uppercase text-umber/70 font-semibold">
                Kids 12 & Under
              </span>
            </div>
            <span className="font-display text-4xl text-terra font-semibold">
              $10
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="font-body text-xs text-umber/55 italic mb-7 max-w-md mx-auto md:mx-0"
        >
          Wanting color? DM me and we can talk price — it'll be discounted. Ages
          13 & up!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <BookNowButton magnetic variant="solid" className="px-10 py-5 text-sm">
            Book Your Spot
          </BookNowButton>
          <a
            href={`tel:${siteConfig.phone.replace(/[^0-9]/g, "")}`}
            className="inline-flex items-center gap-2 font-label text-xs tracking-[0.2em] uppercase text-umber/70 hover:text-terra transition-colors px-4 py-5 font-semibold"
          >
            <Phone size={14} className="text-terra" /> Call or Text{" "}
            {siteConfig.phone}
          </a>
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
            src={FLYER_IMAGE}
            alt="Back to School Special at Wildflower Hair Co."
            className="w-full h-full object-contain bg-silk"
          />
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute -bottom-5 -left-3 md:-left-8 bg-terra text-silk px-6 py-4 rounded-full shadow-xl shadow-terra/30"
        >
          <p className="font-display text-2xl italic leading-none">
            Limited Time
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}