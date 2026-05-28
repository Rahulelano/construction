import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, BadgeCheck, Download, MapPin, Maximize2, MessageCircle, Phone, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { getProperty, PROPERTIES } from "@/lib/properties";
import { SectionHeading } from "@/components/SectionHeading";
import { PropertyCard } from "@/components/PropertyCard";

export const Route = createFileRoute("/properties/$id")({
  loader: ({ params }) => {
    const p = getProperty(params.id);
    if (!p) throw notFound();
    return { property: p };
  },
  component: PropertyDetail,
});

function PropertyDetail() {
  const { property: p } = Route.useLoaderData() as { property: import("@/lib/properties").Property };
  const [active, setActive] = useState(0);
  const others = PROPERTIES.filter((x) => x.id !== p.id).slice(0, 3);

  return (
    <>
      {/* Cinematic gallery hero */}
      <section className="relative min-h-[88svh] flex items-end overflow-hidden">
        <img src={p.gallery[active]} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700" />
        <div className="absolute inset-0 bg-[oklch(0.08_0.05_265)]/50" />
        <div className="absolute inset-0 gradient-cinema" />

        <Link to="/properties" className="absolute top-28 left-6 lg:left-8 inline-flex items-center gap-2 text-white/80 hover:text-white text-xs font-cinema">
          <ArrowLeft size={14} /> ALL PROPERTIES
        </Link>

        <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-8 pb-12 pt-40 text-white">
          <div className="flex gap-2 mb-5">
            <span className="glass text-white text-[10px] font-cinema px-3 py-1.5 rounded-full">{p.status}</span>
            <span className="glass text-white text-[10px] font-cinema px-3 py-1.5 rounded-full flex items-center gap-1"><BadgeCheck size={12} /> {p.approval}</span>
            <span className="glass text-white text-[10px] font-cinema px-3 py-1.5 rounded-full">{p.type}</span>
          </div>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="font-display text-5xl md:text-8xl font-light leading-[0.95] max-w-4xl text-balance">
            {p.name}
          </motion.h1>
          <p className="mt-5 max-w-2xl text-white/85 text-lg">{p.tagline}</p>

          <div className="mt-8 flex flex-wrap gap-6 text-sm">
            <div className="flex items-center gap-2"><MapPin size={14} /> {p.location}</div>
            <div className="flex items-center gap-2"><Maximize2 size={14} /> {p.size}</div>
            <div className="font-display text-2xl gradient-text-silver">{p.price}</div>
          </div>

          {/* thumbnails */}
          <div className="mt-10 flex gap-3">
            {p.gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all ${active === i ? "border-white scale-105" : "border-white/30 opacity-70 hover:opacity-100"}`}
              >
                <img src={src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview + actions */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <SectionHeading eyebrow="OVERVIEW" title={<>About <em className="italic gradient-text">{p.name}.</em></>} />
            <p className="mt-6 text-muted-foreground leading-relaxed text-lg">{p.description}</p>

            <h3 className="font-cinema text-xs text-primary mt-12 mb-5">HIGHLIGHTS</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {p.highlights.map((h) => (
                <div key={h} className="flex items-center gap-3 p-4 rounded-xl glass-light">
                  <Sparkles size={16} className="text-primary" />
                  <span className="text-sm">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:sticky lg:top-28 self-start">
            <div className="glass-light rounded-2xl p-7 shadow-luxe">
              <div className="font-cinema text-[10px] text-muted-foreground">STARTING FROM</div>
              <div className="font-display text-4xl gradient-text mt-1">{p.price}</div>
              <EnquiryForm propertyName={p.name} />
              <div className="grid grid-cols-2 gap-2 mt-3">
                <a href="https://wa.me/919443342528" target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] text-white text-xs font-cinema py-3 grid place-items-center gap-2 flex"><MessageCircle size={14} /> WHATSAPP</a>
                <a href="tel:+919443342528" className="rounded-full glass-light border border-border text-xs font-cinema py-3 grid place-items-center gap-2 flex"><Phone size={14} /> CALL</a>
              </div>
              <button onClick={() => toast.success("Brochure download starting…")} className="mt-3 w-full rounded-full border border-border text-xs font-cinema py-3 flex items-center justify-center gap-2"><Download size={14} /> DOWNLOAD BROCHURE</button>
            </div>
          </aside>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="AMENITIES" title={<>Curated for <em className="italic gradient-text">comfort.</em></>} />
          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {p.amenities.map((a, i) => (
              <motion.div
                key={a}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="aspect-square rounded-2xl glass-light flex flex-col items-center justify-center text-center p-4 hover-glow"
              >
                <Sparkles size={22} className="text-primary mb-2" />
                <div className="font-cinema text-[10px]">{a.toUpperCase()}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-20 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="LOCATION" title={<>Where <em className="italic gradient-text">life</em> finds you.</>} subtitle={p.location} />
          <div className="mt-10 rounded-2xl overflow-hidden shadow-luxe aspect-[16/9] border border-border">
            <iframe
              title="Map"
              src={`https://www.google.com/maps?q=${p.lat},${p.lng}&z=13&output=embed`}
              className="w-full h-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Other */}
      <section className="py-24 px-6 lg:px-8 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="ALSO IN THE COLLECTION" title={<>Other <em className="italic gradient-text">addresses.</em></>} />
          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {others.map((o, i) => <PropertyCard key={o.id} p={o} i={i} />)}
          </div>
        </div>
      </section>
    </>
  );
}

function EnquiryForm({ propertyName }: { propertyName: string }) {
  const [submitting, setSubmitting] = useState(false);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          toast.success("Enquiry sent! Our team will reach out within 24 hours.");
          (e.target as HTMLFormElement).reset();
        }, 800);
      }}
      className="mt-5 space-y-3"
    >
      <input required placeholder="Full Name" className="w-full bg-background rounded-xl px-4 py-3 text-sm border border-border outline-none focus:ring-2 focus:ring-primary/30" />
      <input required type="tel" placeholder="Phone" className="w-full bg-background rounded-xl px-4 py-3 text-sm border border-border outline-none focus:ring-2 focus:ring-primary/30" />
      <input required type="email" placeholder="Email" className="w-full bg-background rounded-xl px-4 py-3 text-sm border border-border outline-none focus:ring-2 focus:ring-primary/30" />
      <textarea rows={3} placeholder={`I'm interested in ${propertyName}…`} className="w-full bg-background rounded-xl px-4 py-3 text-sm border border-border outline-none focus:ring-2 focus:ring-primary/30 resize-none" />
      <button disabled={submitting} className="w-full rounded-full gradient-royal text-white text-xs font-cinema py-3.5 shadow-glow disabled:opacity-60">
        {submitting ? "SENDING…" : "REQUEST PRIVATE TOUR"}
      </button>
    </form>
  );
}
