import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight, Calendar, Play, Sparkles, Star } from "lucide-react";
import hero from "@/assets/hero-villa.jpg";
import interior from "@/assets/interior-1.jpg";
import construction from "@/assets/construction-1.jpg";
import founder from "@/assets/founder.jpg";
import { PROPERTIES } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading, Eyebrow } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  component: Home,
});

const stats = [
  { value: 1240, suffix: "+", label: "Happy Families" },
  { value: 320, suffix: "+", label: "Acres Developed" },
  { value: 86, suffix: "", label: "Premium Villas" },
  { value: 18, suffix: " Yrs", label: "Crafted Legacy" },
];

const services = [
  { title: "Villas Buying & Selling", desc: "Curating premium residential villas and luxury homes across Coimbatore." },
  { title: "Quality Construction", desc: "High-quality residential and commercial construction built to last." },
  { title: "Real Estate Brokerage", desc: "Professional land promotion and brokerage in growth corridors." },
  { title: "2D & 3D Designing", desc: "Cinematic 3D walkthroughs and custom architectural layouts." },
];

const testimonials = [
  { name: "Arvind Krishnan", role: "Managing Director, Vasya Tech", quote: "TGP delivered far beyond what they promised. The home feels like a private museum — quiet, considered, eternal." },
  { name: "Dr. Lakshmi Iyer", role: "Senior Consultant, Apollo", quote: "From the first conversation to the handover, every detail was anticipated. This is what luxury actually means." },
  { name: "Karthik Subramanian", role: "Founder, Mosaic Capital", quote: "I have invested in three of their projects. Each has appreciated beyond my expectations, and each is a joy to visit." },
];

const galleryGrid = [hero, interior, construction, founder];

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100svh] flex items-end overflow-hidden">
        <img
          src={hero}
          alt="TGP luxury villa at blue hour"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-[oklch(0.1_0.06_265)]/55" />
        <div className="absolute inset-0 gradient-cinema" />
        <div className="absolute inset-0 noise" />

        {/* floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {Array.from({ length: 18 }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: [-20, -200], opacity: [0, 0.6, 0] }}
              transition={{ duration: 8 + Math.random() * 6, repeat: Infinity, delay: i * 0.4 }}
              className="absolute h-1 w-1 rounded-full bg-white/70"
              style={{ left: `${Math.random() * 100}%`, bottom: `${Math.random() * 30}%` }}
            />
          ))}
        </div>

        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-8 pb-24 pt-40 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="font-cinema text-[11px] tracking-[0.3em] text-white/70 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-white/40" />
            EST · 2008 · COIMBATORE · INDIA
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="font-display font-light text-[44px] sm:text-[72px] md:text-[110px] leading-[0.95] mt-6 max-w-5xl text-balance"
          >
            Building <em className="italic text-white/90">premium</em> spaces
            <br className="hidden sm:block" /> for future living.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-6 max-w-xl text-white/80 text-base md:text-lg"
          >
            A curation of cinematic villas, premium DTCP layout plots, and quality construction services across Coimbatore's most coveted corridors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/properties"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-primary px-7 py-3.5 text-sm font-cinema shadow-luxe hover:bg-white/95 transition-all"
            >
              EXPLORE PROPERTIES
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full glass text-white px-7 py-3.5 text-sm font-cinema hover:bg-white/15 transition-all"
            >
              <Calendar size={16} /> BOOK SITE VISIT
            </Link>
          </motion.div>

          {/* floating stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1 }}
            className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl"
          >
            {stats.map((s) => (
              <div key={s.label} className="glass rounded-2xl px-5 py-5 text-white">
                <div className="font-display text-4xl md:text-5xl font-light">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="font-cinema text-[10px] mt-2 text-white/70">{s.label.toUpperCase()}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <button className="absolute right-6 top-1/2 -translate-y-1/2 hidden xl:grid place-items-center w-16 h-16 rounded-full glass text-white animate-float" aria-label="Play video">
          <Play size={20} className="ml-1" fill="currentColor" />
        </button>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading
              eyebrow="CURRENT COLLECTION"
              title={<>Properties of <em className="italic gradient-text">consequence.</em></>}
              subtitle="A handpicked portfolio of villas, plots and bungalows — each a distinct expression of place, light, and craft."
            />
            <Link to="/properties" className="inline-flex items-center gap-2 text-sm font-cinema text-primary hover:gap-3 transition-all">
              VIEW ALL <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {PROPERTIES.slice(0, 3).map((p, i) => <PropertyCard key={p.id} p={p} i={i} />)}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="py-28 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative">
            <div className="grid grid-cols-6 grid-rows-6 gap-3 h-[560px]">
              <img src={interior} alt="Interior" loading="lazy" className="col-span-4 row-span-4 rounded-2xl object-cover w-full h-full shadow-luxe" />
              <img src={construction} alt="Construction" loading="lazy" className="col-span-2 row-span-3 col-start-5 rounded-2xl object-cover w-full h-full shadow-luxe" />
              <img src={hero} alt="Villa" loading="lazy" className="col-span-3 row-span-2 row-start-5 rounded-2xl object-cover w-full h-full shadow-luxe" />
              <img src={founder} alt="Founder" loading="lazy" className="col-span-3 row-span-2 row-start-5 col-start-4 rounded-2xl object-cover w-full h-full shadow-luxe" />
            </div>
            <div className="absolute -bottom-8 -right-4 glass-light rounded-2xl p-6 shadow-luxe hidden md:block">
              <div className="font-display text-5xl gradient-text"><Counter to={18} /></div>
              <div className="font-cinema text-[10px] mt-1 text-muted-foreground">YEARS · CRAFTED LEGACY</div>
            </div>
          </div>
          <div>
            <SectionHeading
              eyebrow="THE TGP STORY"
              title={<>A legacy built <em className="italic gradient-text">with pride.</em></>}
              subtitle="Since 2008, TGP Builders & Developers has been shaping the way Coimbatore experiences premium living — through quality construction, building materials, layout planning, and an obsession with detail that borders on devotion."
            />
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                ["RERA & DTCP", "Every project compliant"],
                ["18+ Years", "Of craft and care"],
                ["1240+", "Families served"],
                ["320 Acres", "Of land developed"],
              ].map(([k, v]) => (
                <div key={k} className="glass-light rounded-xl p-4">
                  <div className="font-cinema text-xs text-primary">{k}</div>
                  <div className="text-sm text-muted-foreground mt-1">{v}</div>
                </div>
              ))}
            </div>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-cinema text-primary hover:gap-3 transition-all">
              READ OUR STORY <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-28 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="WHAT WE DO"
            title={<>A vertically integrated <em className="italic gradient-text">studio of living.</em></>}
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="group relative rounded-2xl p-7 bg-card shadow-luxe hover-glow overflow-hidden"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Sparkles className="text-primary" size={22} />
                <h3 className="font-display text-2xl mt-5">{s.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-28 px-6 lg:px-8 bg-[oklch(0.1_0.06_265)] text-white relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="VOICES OF TGP"
            title={<span className="gradient-text-silver">What our clients say.</span>}
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.7 }}
                className="glass rounded-2xl p-7"
              >
                <div className="flex gap-1 mb-4 text-[oklch(0.85_0.16_85)]">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} size={14} fill="currentColor" />)}
                </div>
                <p className="font-display text-xl leading-snug text-white/90">"{t.quote}"</p>
                <div className="mt-6 border-t border-white/15 pt-4">
                  <div className="font-cinema text-xs">{t.name}</div>
                  <div className="text-[11px] text-white/60 mt-0.5">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* MINI GALLERY */}
      <section className="py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <SectionHeading eyebrow="VISUAL JOURNAL" title={<>Moments from the <em className="italic gradient-text">field.</em></>} />
            <Link to="/gallery" className="inline-flex items-center gap-2 text-sm font-cinema text-primary">VIEW GALLERY <ArrowRight size={16} /></Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryGrid.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className={`relative overflow-hidden rounded-2xl group ${i === 0 ? "md:row-span-2 aspect-square md:aspect-auto" : "aspect-square"}`}
              >
                <img src={src} alt="Gallery" loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl gradient-royal p-12 md:p-20 text-white shadow-luxe">
          <div className="absolute inset-0 noise" />
          <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Eyebrow><span className="text-white/70">YOUR NEXT CHAPTER</span></Eyebrow>
              <h2 className="font-display text-5xl md:text-7xl font-light leading-[0.95] text-balance">
                Let's design the home <em className="italic">you deserve.</em>
              </h2>
            </div>
            <div className="md:text-right">
              <p className="text-white/80 text-lg max-w-md md:ml-auto">
                Schedule a private consultation with our advisory team. We'll curate properties matched to your aspiration.
              </p>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-primary px-8 py-4 text-sm font-cinema shadow-luxe hover:scale-105 transition-transform">
                BOOK PRIVATE TOUR <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
