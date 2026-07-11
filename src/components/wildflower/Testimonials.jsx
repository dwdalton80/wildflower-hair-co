import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await base44.entities.Testimonial.list(
          "display_order",
          50
        );
        setTestimonials(data);
      } catch (e) {
        console.error("Failed to load testimonials:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section
      id="reviews"
      className="py-24 md:py-40 bg-gradient-to-b from-silk to-[#f5fafb] scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-label text-[11px] tracking-[0.3em] uppercase text-terra">
            Kind Words
          </span>
          <h2 className="font-display text-4xl md:text-6xl italic text-umber mt-4">
            Rooted in Trust
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-peony border-t-terra rounded-full animate-spin" />
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl italic text-umber/40">
              Reviews blooming soon
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {testimonials.map((t, idx) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1 }}
                className="relative"
              >
                <Quote
                  className="absolute -top-4 -left-2 text-peony/30"
                  size={48}
                  strokeWidth={1}
                />
                <div className="pl-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating || 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={14}
                        className="text-terra fill-terra"
                      />
                    ))}
                  </div>
                  <p className="font-display text-xl md:text-2xl italic text-umber/80 leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-peony/30 flex items-center justify-center">
                      <span className="font-display text-lg italic text-terra">
                        {t.client_name?.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-label text-xs tracking-[0.15em] uppercase text-umber">
                        {t.client_name}
                      </p>
                      {t.service && (
                        <p className="font-body text-xs text-umber/50 mt-0.5">
                          {t.service}
                        </p>
                      )}
                    </div>
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