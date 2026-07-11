import { motion } from "framer-motion";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Decorative botanical silhouette that slowly drifts/rotates in the background.
 * Purely ornamental — pointer-events disabled, low opacity.
 */
export default function ShadowLeaf({
  className = "",
  color = "#D0E8EF",
  opacity = 0.05,
  duration = 180,
  style = {},
}) {
  return (
    <div
      className={`pointer-events-none absolute overflow-hidden ${className}`}
      style={style}
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 200 300"
        className="w-full h-full"
        style={{ color }}
        initial={{ rotate: 0 }}
        animate={prefersReducedMotion ? {} : { rotate: 360 }}
        transition={
          prefersReducedMotion
            ? {}
            : { duration, repeat: Infinity, ease: "linear" }
        }
      >
        <path
          d="M100 10 C 130 30, 160 70, 155 130 C 150 180, 130 230, 100 280 C 70 230, 50 180, 45 130 C 40 70, 70 30, 100 10 Z"
          fill="currentColor"
          opacity={opacity}
        />
      </motion.svg>
    </div>
  );
}