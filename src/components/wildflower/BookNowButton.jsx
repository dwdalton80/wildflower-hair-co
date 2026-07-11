import { motion, useMotionValue } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const variants = {
  solid: "bg-terra text-silk hover:bg-terra/90 shadow-lg shadow-terra/20",
  light: "bg-silk text-terra hover:bg-silk/90 shadow-lg shadow-black/20",
  outline: "border border-terra/40 text-terra hover:bg-terra/5",
  ghost: "text-terra hover:bg-terra/5",
};

/**
 * "Floating Petal" CTA — organic-shaped booking button.
 * Supports an optional magnetic cursor-follow effect for the hero.
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
    x.set((e.clientX - rect.left - rect.width / 2) * 0.15);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.15);
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
      whileHover={{ scale: magnetic ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.97 }}
      className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 text-xs font-label font-medium tracking-[0.2em] uppercase rounded-[100px_4px_100px_4px] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terra/40 focus-visible:ring-offset-2 focus-visible:ring-offset-silk min-h-[48px] min-w-[48px] cursor-pointer ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </motion.button>
  );
}