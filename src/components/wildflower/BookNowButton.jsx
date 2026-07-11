import { motion, useMotionValue } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const variants = {
  solid: "bg-terra text-silk hover:bg-terra/90 shadow-lg shadow-terra/30",
  light: "bg-silk text-terra hover:bg-silk/90 shadow-lg shadow-black/10",
  dark: "bg-umber text-silk hover:bg-umber/90",
  outline: "border-2 border-terra text-terra hover:bg-terra hover:text-silk",
  ghost: "text-terra hover:bg-terra/10",
};

/**
 * Modern pill CTA — clean, bold, with optional magnetic cursor-follow.
 */
export default function BookNowButton({
  children = "Book Now",
  className = "",
  variant = "solid",
  magnetic = false,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (!magnetic) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.2);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = () => {
    window.open(siteConfig.bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={magnetic ? { x, y } : {}}
      whileHover={{ scale: magnetic ? 1.05 : 1.03 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-label font-semibold tracking-[0.15em] uppercase rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra/40 focus-visible:ring-offset-2 focus-visible:ring-offset-silk min-h-[48px] min-w-[48px] cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}