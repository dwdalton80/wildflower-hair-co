import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ShadowLeaf from "./ShadowLeaf";
import HeroBrandSlide from "./HeroBrandSlide";
import FallSpecialSlide from "./FallSpecialSlide";

const SLIDE_COUNT = 2;
const INTERVAL = 7000;

export default function Hero({ heroImage }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((i) => (i + 1) % SLIDE_COUNT),
      INTERVAL
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden bg-gradient-to-br from-silk via-[#F5F1EB] to-[#EFE9E1]"
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

      <div className="relative z-10 w-full flex flex-col items-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            {index === 0 ? (
              <HeroBrandSlide heroImage={heroImage} />
            ) : (
              <FallSpecialSlide />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Rotation controls */}
        <div className="flex items-center justify-center gap-3 mt-12">
          {Array.from({ length: SLIDE_COUNT }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                i === index ? "w-8 bg-terra" : "w-2 bg-terra/30 hover:bg-terra/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}