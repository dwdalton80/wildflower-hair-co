import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-24 md:py-32 bg-silk scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 md:mb-20">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-10 h-px bg-terra" />
            <span className="font-label text-[11px] tracking-[0.25em] uppercase text-terra font-semibold">
              Reviews
            </span>
          </div>
          <h2 className="font-display text-4xl md:text-6xl text-umber leading-tight">
            Kind <span className="italic text-terra">words.</span>
          </h2>
        </div>

        {testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl italic text-umber/40">
              Reviews blooming soon
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-3xl p-8 border border-peony/30 hover:border-terra/40 hover:shadow-xl hover:shadow-terra/5 transition-all duration-300"
              >
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating || 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="text-terra fill-terra"
                    />
                  ))}
                </div>
                <p className="font-body text-umber/80 text-lg leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-peony/20">
                  <div className="w-11 h-11 rounded-full bg-terra/10 flex items-center justify-center">
                    <span className="font-display text-xl italic text-terra">
                      {t.client_name?.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-label text-sm tracking-[0.1em] uppercase text-umber font-semibold">
                      {t.client_name}
                    </p>
                    {t.service && (
                      <p className="font-body text-xs text-terra mt-0.5">
                        {t.service}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}