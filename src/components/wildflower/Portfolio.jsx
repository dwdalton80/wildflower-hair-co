import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { base44 } from "@/api/base44Client";

export default function Portfolio() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState(null);
  const [revealing, setRevealing] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await base44.entities.PortfolioImage.list(
          "display_order",
          50
        );
        setImages(data);
      } catch (e) {
        console.error("Failed to load portfolio:", e);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  return (
    <section
      id="portfolio"
      className="py-24 md:py-40 bg-silk scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <span className="font-label text-[11px] tracking-[0.3em] uppercase text-terra">
            The Gallery
          </span>
          <h2 className="font-display text-4xl md:text-6xl italic text-umber mt-4">
            Living Portfolio
          </h2>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="w-8 h-8 border-2 border-peony border-t-terra rounded-full animate-spin" />
          </div>
        ) : images.length === 0 ? (
          <div className="text-center py-20">
            <p className="font-display text-2xl italic text-umber/40">
              Portfolio coming soon
            </p>
            <p className="font-body text-umber/40 mt-2 text-sm">
              Kyia is curating her best work.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px] md:auto-rows-[250px]">
            {images.map((img, idx) => {
              const spans = [
                "row-span-2",
                "",
                "",
                "row-span-2",
                "",
                "col-span-2",
                "",
                "",
              ];
              const spanClass = spans[idx % spans.length];
              return (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.06 }}
                  className={`cursor-pointer group ${spanClass}`}
                  onClick={() => setSelected(img)}
                >
                  <div className="relative overflow-hidden rounded-[80px_4px_80px_4px] w-full h-full">
                    <img
                      src={img.image_url}
                      alt={img.caption || "Portfolio image"}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {img.caption && (
                      <div className="absolute inset-0 bg-gradient-to-t from-umber/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-5">
                        <p className="font-display text-lg italic text-silk">
                          {img.caption}
                        </p>
                      </div>
                    )}
                    {img.before_image_url && (
                      <div className="absolute bottom-3 right-3 bg-silk/80 backdrop-blur-sm rounded-full px-3 py-1">
                        <span className="font-label text-[8px] tracking-[0.2em] uppercase text-terra">
                          Before &amp; After
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>

      {/* Lightbox with "Reveal" interaction */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-umber/80 backdrop-blur-md p-4 md:p-8"
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-6 right-6 text-silk/80 hover:text-silk p-2 min-h-[48px] min-w-[48px] flex items-center justify-center"
            >
              <X size={28} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-[85%] max-h-[80vh]"
            >
              <img
                src={
                  revealing && selected.before_image_url
                    ? selected.before_image_url
                    : selected.image_url
                }
                alt={selected.caption || "Portfolio image"}
                className="max-w-full max-h-[80vh] object-contain rounded-[120px_4px_120px_4px]"
                onMouseDown={() =>
                  selected.before_image_url && setRevealing(true)
                }
                onMouseUp={() => setRevealing(false)}
                onMouseLeave={() => setRevealing(false)}
                onTouchStart={() =>
                  selected.before_image_url && setRevealing(true)
                }
                onTouchEnd={() => setRevealing(false)}
              />
              {selected.before_image_url && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-silk/90 backdrop-blur-sm rounded-full px-4 py-2">
                  <span className="font-label text-[10px] tracking-[0.2em] uppercase text-terra">
                    {revealing ? "Before" : "Hold to see Before"}
                  </span>
                </div>
              )}
              {selected.caption && (
                <p className="font-display text-lg italic text-silk/80 text-center mt-4">
                  {selected.caption}
                </p>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}