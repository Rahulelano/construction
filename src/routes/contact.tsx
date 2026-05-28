import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "motion/react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/contact")({
  component: Contact,
});

const offices = [
  { city: "Coimbatore · Head Office", addr: "#6, MRP Complex, Chettipalayam Road, Malumichampatti, Coimbatore - 641050", phone: "94433 42528", img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" },
  { city: "Coimbatore · Branch Office", addr: "Chettipalayam Road, Malumichampatti, Coimbatore - 641050", phone: "99445 52507", img: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800" },
];

function Contact() {
  return (
    <>
      <section className="pt-36 pb-16 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="REACH US"
            title={<>Let's begin a <em className="italic gradient-text">conversation.</em></>}
            subtitle="Whether you're scouting your first plot or planning your forever home — we'd love to hear from you."
          />
        </div>
      </section>

      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
          <aside className="lg:col-span-2 space-y-5">
            <div className="glass-light rounded-2xl p-7 shadow-luxe">
              <h3 className="font-cinema text-xs text-primary">REACH US</h3>
              <div className="mt-5 space-y-4 text-sm">
                <div className="flex gap-3"><Phone size={16} className="mt-0.5 text-primary" /> <div><div className="font-medium">94433 42528 | 99445 52507</div><div className="text-muted-foreground text-xs">Sales & Support · 10am – 8pm</div></div></div>
                <div className="flex gap-3"><Mail size={16} className="mt-0.5 text-primary" /> <div><div className="font-medium">tgppromoters@gmail.com</div><div className="text-muted-foreground text-xs">We reply within 4 hours</div></div></div>
                <div className="flex gap-3"><Clock size={16} className="mt-0.5 text-primary" /> <div><div className="font-medium">Mon – Sat · 10am – 8pm</div><div className="text-muted-foreground text-xs">Sunday by appointment</div></div></div>
              </div>
            </div>
            <div className="glass-light rounded-2xl p-7 shadow-luxe">
              <h3 className="font-cinema text-xs text-primary">PREFER WHATSAPP?</h3>
              <p className="text-sm text-muted-foreground mt-2">Our team is online 7 days a week for instant answers.</p>
              <a href="https://wa.me/919443342528" target="_blank" rel="noreferrer" className="mt-5 inline-flex w-full justify-center items-center gap-2 rounded-full bg-[#25D366] text-white text-xs font-cinema py-3.5">MESSAGE ON WHATSAPP</a>
            </div>
          </aside>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 lg:px-8 pb-24">
        <div className="mx-auto max-w-7xl rounded-2xl overflow-hidden shadow-luxe aspect-[16/8] border border-border">
          <iframe
            title="Office map"
            src="https://www.google.com/maps?q=Malumichampatti,+Coimbatore&output=embed"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
      </section>

      {/* Offices */}
      <section className="px-6 lg:px-8 pb-28">
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="OUR OFFICES" title={<>Visit a <em className="italic gradient-text">TGP office.</em></>} />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {offices.map((o, i) => (
              <motion.div
                key={o.city}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-luxe bg-card"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={o.img} alt={o.city} loading="lazy" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                </div>
                <div className="p-6">
                  <div className="font-display text-2xl">{o.city}</div>
                  <div className="mt-3 text-sm text-muted-foreground flex gap-2"><MapPin size={14} className="mt-0.5 shrink-0" /> {o.addr}</div>
                  <div className="mt-2 text-sm text-muted-foreground flex gap-2"><Phone size={14} className="mt-0.5 shrink-0" /> {o.phone}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [sending, setSending] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSending(true);
        setTimeout(() => {
          setSending(false);
          toast.success("Thank you — our advisory team will reach out within 24 hours.");
          (e.target as HTMLFormElement).reset();
        }, 900);
      }}
      className="glass-light rounded-2xl p-7 md:p-10 shadow-luxe"
    >
      <h3 className="font-display text-3xl">Tell us about your dream space.</h3>
      <p className="text-sm text-muted-foreground mt-2">Every field optional — but the more we know, the better we can curate.</p>

      <div className="mt-8 grid sm:grid-cols-2 gap-4">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" />
        <Field label="Budget Range" name="budget" placeholder="e.g. ₹3 Cr – 5 Cr" />
      </div>
      <div className="mt-4">
        <Field label="Property Interest" name="interest" placeholder="Villa · Plot · Bungalow · Investment" />
      </div>
      <div className="mt-4">
        <Field label="Message" name="message" textarea />
      </div>
      <button disabled={sending} className="mt-7 inline-flex items-center gap-3 rounded-full gradient-royal text-white px-7 py-3.5 text-xs font-cinema shadow-glow disabled:opacity-60">
        {sending ? "SENDING…" : <>SEND ENQUIRY <Send size={14} /></>}
      </button>
    </form>
  );
}

function Field({ label, name, type = "text", required, textarea, placeholder }: {
  label: string; name: string; type?: string; required?: boolean; textarea?: boolean; placeholder?: string;
}) {
  const [focus, setFocus] = useState(false);
  const Tag: any = textarea ? "textarea" : "input";
  return (
    <div className="relative">
      <label className={`absolute left-4 transition-all pointer-events-none font-cinema ${focus ? "top-1.5 text-[9px] text-primary" : "top-3.5 text-xs text-muted-foreground"}`}>
        {label.toUpperCase()}{required && " *"}
      </label>
      <Tag
        name={name}
        type={type}
        required={required}
        placeholder={focus ? placeholder : ""}
        rows={textarea ? 4 : undefined}
        onFocus={() => setFocus(true)}
        onBlur={(e: any) => setFocus(!!e.target.value)}
        className="w-full bg-background/80 rounded-xl px-4 pt-6 pb-3 text-sm border border-border outline-none focus:ring-2 focus:ring-primary/30 transition-all"
      />
    </div>
  );
}
