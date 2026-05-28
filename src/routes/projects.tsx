import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-villa.jpg";
import interior from "@/assets/interior-1.jpg";
import construction from "@/assets/construction-1.jpg";
import p1 from "@/assets/property-1.jpg";
import p3 from "@/assets/property-3.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

const completed = [
  { name: "Vasanth Greens", year: 2019, units: 120, type: "Township", img: hero, location: "Malumichampatti, Coimbatore" },
  { name: "Azure Heights", year: 2021, units: 24, type: "Villa Cluster", img: p1, location: "Chettipalayam Road, Coimbatore" },
  { name: "Lumière Villas", year: 2022, units: 12, type: "Bungalows", img: p3, location: "Pollachi Road, Coimbatore" },
  { name: "TGP Icon", year: 2023, units: 48, type: "Skyhomes", img: interior, location: "Avinashi Road, Coimbatore" },
];

const stats = [
  { v: 86, s: "+", l: "Villas Delivered" },
  { v: 320, s: "+", l: "Acres Developed" },
  { v: 1240, s: "+", l: "Happy Families" },
  { v: 100, s: "%", l: "On-Time Handover" },
];

function Projects() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="DELIVERED & STANDING"
            title={<>Sixteen years, one <em className="italic gradient-text">portfolio.</em></>}
            subtitle="A walk through the projects that have shaped our reputation — and the families that now call them home."
          />
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl grid grid-cols-2 md:grid-cols-4 gap-5">
          {stats.map((st) => (
            <div key={st.l} className="glass-light rounded-2xl p-6 text-center shadow-luxe">
              <div className="font-display text-5xl gradient-text"><Counter to={st.v} suffix={st.s} /></div>
              <div className="font-cinema text-[10px] mt-2 text-muted-foreground">{st.l.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Before/After */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="VASANTH GREENS · 2019" title={<>Before & <em className="italic gradient-text">after.</em></>} subtitle="From bare land to a 50-acre gated community in 18 months." />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-luxe group">
              <img src={construction} alt="Before" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="absolute top-4 left-4 glass-dark text-white font-cinema text-[10px] px-3 py-1.5 rounded-full">BEFORE · MAY 2018</div>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-luxe group">
              <img src={hero} alt="After" className="w-full aspect-[4/3] object-cover" loading="lazy" />
              <div className="absolute top-4 left-4 gradient-royal text-white font-cinema text-[10px] px-3 py-1.5 rounded-full">AFTER · NOV 2019</div>
            </div>
          </div>
        </div>
      </section>

      {/* Project cards */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="OUR PORTFOLIO" title={<>Selected <em className="italic gradient-text">works.</em></>} />
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            {completed.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative overflow-hidden rounded-2xl shadow-luxe"
              >
                <img src={c.img} alt={c.name} loading="lazy" className="w-full aspect-[16/10] object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.08_0.05_265)]/95 via-[oklch(0.08_0.05_265)]/30 to-transparent" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
                  <div className="font-cinema text-[10px] text-white/70">{c.type.toUpperCase()} · {c.year}</div>
                  <h3 className="font-display text-4xl mt-2">{c.name}</h3>
                  <div className="text-sm text-white/80 mt-1">{c.location} · {c.units} units</div>
                  <div className="mt-4 inline-flex items-center gap-2 text-xs font-cinema opacity-0 group-hover:opacity-100 transition-opacity">VIEW STORY <ArrowRight size={14} /></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress timeline */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading center eyebrow="CONSTRUCTION TIMELINE" title={<>How a TGP project <em className="italic gradient-text">comes alive.</em></>} />
          <div className="mt-14 grid md:grid-cols-4 gap-6">
            {[
              ["Land & Approvals", "Month 0–3"],
              ["Infrastructure", "Month 3–9"],
              ["Construction", "Month 9–18"],
              ["Handover", "Month 18–20"],
            ].map(([t, d], i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-light rounded-2xl p-6"
              >
                <div className="font-cinema text-xs text-primary">PHASE 0{i + 1}</div>
                <div className="font-display text-2xl mt-2">{t}</div>
                <div className="text-sm text-muted-foreground mt-1">{d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
