import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Home, Hammer, Compass, Package, FileSignature, CheckSquare, Landmark, Layout } from "lucide-react";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/services")({
  component: Services,
});

const services = [
  { icon: Home, title: "Villas Buying & Selling", desc: "Curating premium residential villas and luxury homes for buying and selling across Coimbatore." },
  { icon: Hammer, title: "Construction", desc: "High-quality residential and commercial construction executed with premium standards and strict timelines." },
  { icon: Compass, title: "Real Estate", desc: "Professional land promotion and brokerage services along Coimbatore's fastest growing corridors." },
  { icon: Package, title: "Building Materials", desc: "Sourcing and supply of top-tier construction and structural building materials for durable edifices." },
  { icon: FileSignature, title: "Building Approval", desc: "Seamless handling of building plan approvals, licenses, and local body compliance documentation." },
  { icon: CheckSquare, title: "DTCP Approval", desc: "Expert master-planning and securing DTCP approvals for residential and commercial layouts." },
  { icon: Landmark, title: "Bank Loan", desc: "Hassle-free facilitation of home loans and plot funding through leading bank partnerships." },
  { icon: Layout, title: "2D & 3D Designing", desc: "State-of-the-art structural layouts, elevation designs, and cinematic 3D interior/exterior walkthroughs." },
];

const process = [
  { step: "01", title: "Discovery", text: "We listen — to your aspirations, your timelines, your numbers." },
  { step: "02", title: "Curation", text: "We hand-pick three to five properties matched precisely to your brief." },
  { step: "03", title: "Site Tour", text: "Private, chauffeured site visits at your convenience." },
  { step: "04", title: "Documentation", text: "Fully managed — from booking to registration." },
  { step: "05", title: "Handover & Care", text: "Our service relationship begins the day you receive the keys." },
];

const faqs = [
  { q: "Are all your projects RERA and DTCP approved?", a: "Yes. Every TGP project is fully compliant — we share documents upfront and walk you through every clearance." },
  { q: "Do you offer financing assistance?", a: "We partner with leading banks (HDFC, SBI, ICICI, Axis) and arrange pre-approved home loans for shortlisted clients." },
  { q: "Can I customize my villa's interiors?", a: "Absolutely. Our design studio offers three curation tiers and full bespoke options for every villa." },
  { q: "Do you work with NRI buyers?", a: "Yes — we have dedicated NRI relationship managers and handle PoA, remittance, and remote documentation end-to-end." },
];

function Services() {
  return (
    <>
      <section className="pt-36 pb-20 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-50" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            center
            eyebrow="WHAT WE DO"
            title={<>A vertically integrated <em className="italic gradient-text">studio of living.</em></>}
            subtitle="From land to landmark — every step of the real estate journey, under one signature."
          />
        </div>
      </section>

      <section className="pb-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.7 }}
              className="group relative rounded-2xl p-8 bg-card border border-border shadow-luxe overflow-hidden hover-glow"
            >
              <div className="absolute inset-px rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:via-transparent group-hover:to-primary/10 transition-all" />
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" style={{ mask: "linear-gradient(white,white) content-box, linear-gradient(white,white)", maskComposite: "exclude", padding: 1 }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl gradient-royal grid place-items-center text-white shadow-glow">
                  <s.icon size={22} />
                </div>
                <h3 className="font-display text-3xl mt-6">{s.title}</h3>
                <p className="text-muted-foreground mt-3 leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading center eyebrow="THE TGP PROCESS" title={<>Five steps. <em className="italic gradient-text">One promise.</em></>} />
          <div className="mt-14 grid lg:grid-cols-5 gap-5">
            {process.map((p, i) => (
              <motion.div
                key={p.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-light rounded-2xl p-6 shadow-luxe"
              >
                <div className="font-cinema text-xs text-primary">{p.step}</div>
                <h3 className="font-display text-2xl mt-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{p.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <SectionHeading center eyebrow="QUESTIONS" title={<>Frequently <em className="italic gradient-text">asked.</em></>} />
          <div className="mt-12 space-y-3">
            {faqs.map((f) => <Faq key={f.q} {...f} />)}
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-7xl text-center py-20 rounded-3xl gradient-royal text-white relative overflow-hidden">
          <div className="absolute inset-0 noise" />
          <h2 className="font-display text-5xl md:text-6xl font-light px-6">Ready to build a legacy?</h2>
          <Link to="/contact" className="mt-8 inline-flex items-center gap-3 rounded-full bg-white text-primary px-8 py-4 text-sm font-cinema">TALK TO OUR ADVISORY TEAM</Link>
        </div>
      </section>
    </>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full p-5 flex items-center justify-between text-left">
        <span className="font-display text-lg">{q}</span>
        <ChevronDown size={18} className={`transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>
      </motion.div>
    </div>
  );
}
