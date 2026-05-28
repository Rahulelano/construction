import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Award, Compass, Eye, Heart, ShieldCheck, Sparkles } from "lucide-react";
import founder from "@/assets/founder.jpg";
import hero from "@/assets/hero-villa.jpg";
import interior from "@/assets/interior-1.jpg";
import construction from "@/assets/construction-1.jpg";
import { SectionHeading } from "@/components/SectionHeading";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/about")({
  component: About,
});

const timeline = [
  { year: "2008", title: "The Beginning", text: "Founded in Coimbatore with a single mission: redefine premium living and building standards." },
  { year: "2012", title: "First Layout", text: "Launched Vasanth Greens — a premium DTCP-approved gated community." },
  { year: "2016", title: "100 Villas", text: "Crossed the hundred-villa milestone across three corridors." },
  { year: "2020", title: "Excellence Awards", text: "Recognized at the South India Architecture Excellence Awards." },
  { year: "2024", title: "The Design Era", text: "Integrated design studio offering 2D & 3D elevations and custom layout development." },
];

const team = [
  { name: "R. Venkataraman", role: "Founder & CEO", img: founder },
  { name: "Architect Priya Menon", role: "Design Director", img: interior },
  { name: "Arjun Reddy", role: "Head of Construction", img: construction },
  { name: "Suresh Kumar", role: "Client Experience", img: hero },
];

const whyUs = [
  { icon: ShieldCheck, title: "RERA & DTCP Certified", desc: "Every project, every paper — fully compliant." },
  { icon: Compass, title: "Master-Planned", desc: "Communities designed for a hundred-year horizon." },
  { icon: Sparkles, title: "Bespoke Craft", desc: "Architect-designed, hand-finished, never templated." },
  { icon: Heart, title: "Family Run", desc: "Three generations of trust, one signature standard." },
];

function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70svh] flex items-end overflow-hidden">
        <img src={hero} alt="TGP property" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-[oklch(0.1_0.06_265)]/65" />
        <div className="absolute inset-0 gradient-cinema" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pb-24 pt-40 text-white">
          <div className="font-cinema text-[11px] tracking-[0.3em] text-white/70">ABOUT · TGP BUILDERS & DEVELOPERS</div>
          <h1 className="font-imperial text-5xl md:text-8xl mt-6 leading-[0.95] max-w-4xl text-balance">
            A studio shaping
            <br /> the geometry of living.
          </h1>
          <p className="mt-6 max-w-2xl text-white/80 text-lg">
            We design, build, and deliver high-quality properties and layouts in Coimbatore — with a commitment to excellence and a legacy of trust.
          </p>
        </div>
      </section>

      {/* STORY / MISSION / VISION */}
      <section className="py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-8">
          {[
            { icon: Eye, title: "Our Vision", text: "To be South India's most trusted name in premium real estate — where every project becomes a landmark of taste, integrity, and longevity." },
            { icon: Heart, title: "Our Mission", text: "To craft spaces that hold a family's story for generations — through thoughtful design, uncompromised material, and lasting care." },
            { icon: Award, title: "Our Promise", text: "Every signature on every document is a promise. Every key handed over is a relationship beginning, not ending." },
          ].map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="glass-light rounded-2xl p-8 shadow-luxe"
            >
              <c.icon className="text-primary" size={26} />
              <h3 className="font-display text-3xl mt-5">{c.title}</h3>
              <p className="text-muted-foreground mt-3 leading-relaxed">{c.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-28 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading center eyebrow="OUR JOURNEY" title={<>Sixteen years, <em className="italic gradient-text">one signature.</em></>} variant="display" />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
            <div className="space-y-12">
              {timeline.map((t, i) => (
                <motion.div
                  key={t.year}
                  initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7 }}
                  className={`relative grid md:grid-cols-2 gap-6 items-center ${i % 2 ? "md:[&>:first-child]:order-2" : ""}`}
                >
                  <div className={i % 2 ? "md:text-left md:pl-12" : "md:text-right md:pr-12"}>
                    <div className="font-display text-6xl gradient-text">{t.year}</div>
                    <h3 className="font-cinema text-sm mt-2">{t.title}</h3>
                  </div>
                  <div className={i % 2 ? "md:pr-12 md:text-right" : "md:pl-12"}>
                    <p className="text-muted-foreground">{t.text}</p>
                  </div>
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full gradient-royal shadow-glow" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CEO */}
      <section className="py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-2 relative">
            <img src={founder} alt="Founder" className="rounded-2xl shadow-luxe w-full" />
            <div className="absolute -bottom-6 -right-6 glass-light rounded-2xl p-5 shadow-luxe">
              <div className="font-cinema text-[10px] text-muted-foreground">FOUNDER & MD</div>
              <div className="font-display text-2xl mt-1">TGP Advisory</div>
            </div>
          </div>
          <div className="lg:col-span-3">
            <SectionHeading
              eyebrow="A LETTER FROM OUR FOUNDER"
              title={<>"We don't sell <em className="italic gradient-text">property.</em> We deliver permanence."</>}
            />
            <p className="mt-6 text-muted-foreground leading-relaxed">
              When we began TGP Builders & Developers, the brief was simple — we build with pride. That promise governs every drawing, every layout development, and every brick we lay. Welcome to TGP.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6">
              {[[1240, "+ Families"], [320, " Acres"], [18, " Years"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl gradient-text"><Counter to={n as number} /></div>
                  <div className="text-xs text-muted-foreground mt-1">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-28 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading center eyebrow="THE STUDIO" title={<>People behind the <em className="italic gradient-text">portfolio.</em></>} />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m, i) => (
              <motion.div
                key={m.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.7 }}
                className="group relative overflow-hidden rounded-2xl bg-card shadow-luxe"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img src={m.img} alt={m.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.1_0.06_265)]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <div className="font-display text-xl">{m.name}</div>
                  <div className="font-cinema text-[10px] text-white/70 mt-1">{m.role.toUpperCase()}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="py-28 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading center eyebrow="WHY TGP" title={<>Built on <em className="italic gradient-text">four</em> non-negotiables.</>} />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whyUs.map((w, i) => (
              <motion.div
                key={w.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl p-7 glass-light shadow-luxe hover-glow"
              >
                <w.icon className="text-primary" size={26} />
                <h3 className="font-display text-2xl mt-5">{w.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{w.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-7xl text-center py-24 rounded-3xl gradient-royal text-white relative overflow-hidden">
          <div className="absolute inset-0 noise" />
          <h2 className="font-display text-5xl md:text-7xl font-light px-6">Begin a conversation.</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-primary px-8 py-4 text-sm font-cinema">SCHEDULE A MEETING</Link>
        </div>
      </section>
    </>
  );
}
