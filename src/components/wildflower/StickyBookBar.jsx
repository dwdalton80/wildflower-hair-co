import { motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

/**
 * Sticky bottom booking bar — mobile only.
 * Appears after scrolling past the hero, hidden when the Contact section is in view.
 */
export default function StickyBookBar() {
  const handleClick = () => {
    window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      onClick={handleClick}
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-terra text-silk py-4 px-6 shadow-[0_-4px_20px_rgba(0,0,0,0.15)] flex items-center justify-center gap-2 cursor-pointer"
    >
      <span className="font-label text-sm tracking-[0.15em] uppercase font-semibold">
        Book Now
      </span>
      <span className="text-lg leading-none">→</span>
    </motion.button>
  );
}