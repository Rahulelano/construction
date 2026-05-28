import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import hero from "@/assets/hero-villa.jpg";
import interior from "@/assets/interior-1.jpg";
import construction from "@/assets/construction-1.jpg";
import p2 from "@/assets/property-2.jpg";
import p3 from "@/assets/property-3.jpg";
import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/blog")({
  component: Blog,
});

const cats = ["All", "Market", "Design", "Investment", "Construction"] as const;

const posts = [
  { slug: "1", title: "Why Malumichampatti is the next Saravanampatti — a five-year forecast", cat: "Market", img: hero, date: "May 12, 2026", read: "8 min", featured: true, excerpt: "The infrastructure pipeline along Chettipalayam Road is poised to mirror what we saw in Saravanampatti. Here's why the numbers stack up." },
  { slug: "2", title: "Inside a TGP villa: the materials we obsess over", cat: "Design", img: interior, date: "May 4, 2026", read: "6 min" },
  { slug: "3", title: "Buying a plot? Here's the legal checklist every NRI needs", cat: "Investment", img: p2, date: "Apr 28, 2026", read: "5 min" },
  { slug: "4", title: "Behind the scenes of Lumière Villas — a construction story", cat: "Construction", img: construction, date: "Apr 21, 2026", read: "9 min" },
  { slug: "5", title: "Designing for the climate: passive cooling in Coimbatore homes", cat: "Design", img: p3, date: "Apr 14, 2026", read: "7 min" },
  { slug: "6", title: "The art of the gated community — lessons from Vasanth Greens", cat: "Market", img: hero, date: "Apr 7, 2026", read: "6 min" },
];

function Blog() {
  const [cat, setCat] = useState<(typeof cats)[number]>("All");
  const featured = posts.find((p) => p.featured)!;
  const rest = posts.filter((p) => !p.featured).filter((p) => cat === "All" || p.cat === cat);

  return (
    <>
      <section className="pt-36 pb-12 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="THE TGP JOURNAL"
            title={<>Insights from the <em className="italic gradient-text">studio.</em></>}
            subtitle="Market analysis, design essays, and the stories behind the spaces we build."
          />
        </div>
      </section>

      {/* Featured */}
      <section className="px-6 lg:px-8 pb-16">
        <div className="mx-auto max-w-7xl">
          <Link to="/blog" className="group grid lg:grid-cols-2 gap-8 items-center rounded-3xl bg-card shadow-luxe overflow-hidden hover-glow">
            <div className="aspect-[4/3] overflow-hidden">
              <img src={featured.img} alt={featured.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            </div>
            <div className="p-8 md:p-12">
              <div className="font-cinema text-[10px] text-primary">FEATURED · {featured.cat.toUpperCase()}</div>
              <h2 className="font-display text-4xl md:text-5xl mt-4 leading-tight">{featured.title}</h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
              <div className="mt-6 flex items-center gap-5 text-xs text-muted-foreground">
                <span className="flex items-center gap-2"><Calendar size={12} /> {featured.date}</span>
                <span className="flex items-center gap-2"><Clock size={12} /> {featured.read}</span>
              </div>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-cinema text-primary group-hover:gap-3 transition-all">READ ESSAY <ArrowRight size={14} /></div>
            </div>
          </Link>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 lg:px-8 pb-10">
        <div className="mx-auto max-w-7xl flex flex-wrap gap-2">
          {cats.map((c) => (
            <button key={c} onClick={() => setCat(c)} className={`px-5 py-2.5 rounded-full text-xs font-cinema transition-all ${cat === c ? "gradient-royal text-white shadow-glow" : "glass-light hover:bg-secondary"}`}>{c.toUpperCase()}</button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {rest.map((p, i) => (
            <motion.article
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="group rounded-2xl bg-card shadow-luxe overflow-hidden hover-glow"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              </div>
              <div className="p-6">
                <div className="font-cinema text-[10px] text-primary">{p.cat.toUpperCase()}</div>
                <h3 className="font-display text-2xl mt-3 leading-tight">{p.title}</h3>
                <div className="mt-4 flex items-center gap-4 text-[11px] text-muted-foreground">
                  <span>{p.date}</span><span>·</span><span>{p.read} read</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
}
