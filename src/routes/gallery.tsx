import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import hero from "@/assets/hero-villa.jpg";
import interior from "@/assets/interior-1.jpg";
import construction from "@/assets/construction-1.jpg";
import p1 from "@/assets/property-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/gallery")({
  component: Gallery,
});

type Cat = "All" | "Villas" | "Plots" | "Construction" | "Interiors" | "Client Homes";
const items: { src: string; cat: Exclude<Cat, "All">; span?: string }[] = [
  { src: hero, cat: "Villas", span: "md:col-span-2 md:row-span-2" },
  { src: interior, cat: "Interiors" },
  { src: p2, cat: "Plots" },
  { src: construction, cat: "Construction" },
  { src: p1, cat: "Villas", span: "md:row-span-2" },
  { src: p3, cat: "Client Homes" },
  { src: interior, cat: "Interiors", span: "md:col-span-2" },
  { src: p2, cat: "Plots" },
  { src: hero, cat: "Villas" },
  { src: construction, cat: "Construction", span: "md:col-span-2" },
  { src: p3, cat: "Client Homes" },
  { src: p1, cat: "Villas" },
];

const cats: Cat[] = ["All", "Villas", "Plots", "Construction", "Interiors", "Client Homes"];

function Gallery() {
  const [cat, setCat] = useState<Cat>("All");
  const [lightbox, setLightbox] = useState<string | null>(null);

  const list = cat === "All" ? items : items.filter((i) => i.cat === cat);

  return (
    <>
      <section className="pt-36 pb-12 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="VISUAL JOURNAL"
            title={<>The <em className="italic gradient-text">image archive.</em></>}
            subtitle="Moments captured across our villas, plots, construction sites, and the homes our clients have made their own."
          />
          <div className="mt-10 flex flex-wrap gap-2">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`px-5 py-2.5 rounded-full text-xs font-cinema transition-all ${
                  cat === c ? "gradient-royal text-white shadow-glow" : "glass-light text-foreground hover:bg-secondary"
                }`}
              >
                {c.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.div layout className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-4">
            <AnimatePresence>
              {list.map((it, i) => (
                <motion.button
                  key={it.src + i + cat}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: i * 0.04 }}
                  onClick={() => setLightbox(it.src)}
                  className={`group relative overflow-hidden rounded-2xl ${it.span || ""}`}
                >
                  <img src={it.src} alt={it.cat} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 text-white font-cinema text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">{it.cat.toUpperCase()}</div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[60] bg-[oklch(0.06_0.04_265)]/95 grid place-items-center p-6"
          >
            <button onClick={() => setLightbox(null)} className="absolute top-6 right-6 text-white" aria-label="Close">
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              src={lightbox}
              alt="Full"
              className="max-w-[90vw] max-h-[88vh] rounded-2xl shadow-luxe"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
