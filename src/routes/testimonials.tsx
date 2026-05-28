import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Play, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";
import hero from "@/assets/hero-villa.jpg";
import interior from "@/assets/interior-1.jpg";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
});

const featured = [
  { name: "Arvind Krishnan", role: "MD, Vasya Tech", quote: "TGP delivered far beyond what they promised. The home feels like a private museum — quiet, considered, eternal." },
  { name: "Dr. Lakshmi Iyer", role: "Senior Consultant, Apollo", quote: "From the first conversation to the handover, every detail was anticipated. This is what luxury actually means." },
  { name: "Karthik Subramanian", role: "Founder, Mosaic Capital", quote: "I've invested in three TGP projects. Each appreciated, each is a joy to visit. They've earned my trust three times over." },
];

const reviews = [
  { name: "Meera Raghavan", role: "Architect", text: "The level of finish detail is genuinely rare in this market." },
  { name: "Vikram Shenoy", role: "Surgeon", text: "Bought a plot in Vasanth Greens in 2018 — value has nearly tripled." },
  { name: "Anitha & Suresh", role: "Owners", text: "Felt like family. Felt like home. Still does — three years on." },
  { name: "Rohan Patel", role: "NRI Buyer", text: "Managed our entire purchase remotely from Singapore. Faultless." },
  { name: "Devika Nair", role: "Owner", text: "The pre-handover walkthrough was theatre. The keys were the encore." },
  { name: "Captain Suresh Babu", role: "Veteran", text: "Twenty years of moving homes. TGP is the one that stuck." },
];

function Testimonials() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % featured.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <section className="pt-36 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="VOICES OF TGP"
            title={<>The most honest <em className="italic gradient-text">measure</em> of our work.</>}
            subtitle="What our owners say — in their words, on their terms."
          />
        </div>
      </section>

      {/* Featured rotating */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-5xl">
          <div className="relative glass-light rounded-3xl p-10 md:p-16 shadow-luxe overflow-hidden min-h-[360px]">
            <Quote className="absolute top-6 right-6 text-primary/20" size={80} />
            <AnimatePresence mode="wait">
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex gap-1 text-[oklch(0.85_0.16_85)] mb-6">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={16} fill="currentColor" />)}
                </div>
                <p className="font-display text-3xl md:text-4xl leading-snug text-balance">"{featured[i].quote}"</p>
                <div className="mt-8 border-t border-border pt-5">
                  <div className="font-cinema text-sm">{featured[i].name}</div>
                  <div className="text-xs text-muted-foreground mt-1">{featured[i].role}</div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 right-10 flex gap-2">
              {featured.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className={`h-1.5 rounded-full transition-all ${k === i ? "w-8 bg-primary" : "w-3 bg-border"}`} aria-label={`Slide ${k + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Video testimonials */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="ON CAMERA" title={<>Video <em className="italic gradient-text">testimonials.</em></>} />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[hero, interior, hero].map((img, k) => (
              <div key={k} className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-luxe group cursor-pointer">
                <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.05_265)]/90 via-transparent to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="w-16 h-16 rounded-full glass grid place-items-center text-white group-hover:scale-110 transition-transform">
                    <Play size={20} fill="currentColor" className="ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-5 inset-x-5 text-white">
                  <div className="font-display text-xl">The Krishnan Family</div>
                  <div className="font-cinema text-[10px] text-white/70 mt-1">AZURE HEIGHTS · 2 MIN</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="px-6 lg:px-8 pb-28 bg-secondary/40 py-24">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="MORE VOICES" title={<>From owners <em className="italic gradient-text">across the years.</em></>} />
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, k) => (
              <motion.div
                key={r.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: k * 0.06 }}
                className="glass-light rounded-2xl p-6 shadow-luxe"
              >
                <div className="flex gap-1 text-[oklch(0.85_0.16_85)] mb-3">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={12} fill="currentColor" />)}
                </div>
                <p className="text-muted-foreground italic">"{r.text}"</p>
                <div className="mt-5 border-t border-border pt-3">
                  <div className="font-cinema text-xs">{r.name}</div>
                  <div className="text-[11px] text-muted-foreground mt-0.5">{r.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
