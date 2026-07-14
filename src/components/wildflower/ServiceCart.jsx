import { Check, X, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ServiceCart({ selected, services, onRemove, onBook, onClear }) {
  const totalPrice = selected.reduce((sum, s) => sum + parseInt(s.price.replace(/[^0-9]/g, ""), 10), 0);
  const totalMinutes = selected.reduce((sum, s) => sum + parseInt(s.duration.replace(/[^0-9]/g, ""), 10), 0);
  const hours = Math.floor(totalMinutes / 60);
  const mins = totalMinutes % 60;
  const timeLabel = hours > 0 ? `${hours}h${mins > 0 ? ` ${mins}m` : ""}` : `${mins}m`;

  return (
    <AnimatePresence>
      {selected.length > 0 && (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4 md:pb-6 pointer-events-none"
        >
          <div className="max-w-3xl mx-auto pointer-events-auto bg-umber rounded-3xl shadow-2xl shadow-umber/30 border border-terra/30 overflow-hidden">
            <div className="flex items-center justify-between px-5 pt-4 pb-2">
              <span className="font-label text-[10px] tracking-[0.2em] uppercase text-terra font-semibold">
                Your Selection ({selected.length})
              </span>
              <button
                onClick={onClear}
                className="font-label text-[10px] tracking-[0.15em] uppercase text-silk/50 hover:text-silk transition-colors cursor-pointer font-semibold"
              >
                Clear
              </button>
            </div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 px-5 pb-5 pt-2">
              {/* Selected chips */}
              <div className="flex-1 flex flex-wrap gap-2 max-h-24 md:max-h-20 overflow-y-auto">
                {selected.map((s) => (
                  <span
                    key={s.name}
                    className="inline-flex items-center gap-1.5 bg-silk/10 border border-silk/15 rounded-full pl-3 pr-1.5 py-1"
                  >
                    <span className="font-body text-xs text-silk/80">{s.name}</span>
                    <button
                      onClick={() => onRemove(s)}
                      className="w-5 h-5 rounded-full bg-silk/10 hover:bg-terra flex items-center justify-center text-silk/60 hover:text-silk transition-colors cursor-pointer"
                      aria-label={`Remove ${s.name}`}
                    >
                      <X size={11} strokeWidth={2.5} />
                    </button>
                  </span>
                ))}
              </div>

              {/* Totals + book */}
              <div className="flex items-center justify-between md:justify-end gap-4 md:gap-6 md:border-l md:border-silk/15 md:pl-6">
                <div className="text-left md:text-right">
                  <p className="font-label text-[9px] tracking-[0.2em] uppercase text-silk/50">
                    Total
                  </p>
                  <p className="font-display text-2xl text-silk leading-none">
                    ${totalPrice}
                  </p>
                  <p className="font-body text-[11px] text-silk/50 mt-0.5">
                    {timeLabel}
                  </p>
                </div>
                <button
                  onClick={onBook}
                  className="bg-terra text-silk font-label text-[11px] tracking-[0.2em] uppercase font-semibold rounded-full px-6 py-4 hover:bg-terra/90 transition-colors cursor-pointer flex items-center gap-2 min-h-[52px]"
                >
                  <Calendar size={14} strokeWidth={2} />
                  Book Selected
                </button>
              </div>
            </div>
            <p className="px-5 pb-3 font-body text-[11px] text-silk/45 italic text-center">
              Opens your first service in GlossGenius — add the rest once you're inside.
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}