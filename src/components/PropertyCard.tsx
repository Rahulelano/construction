import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { MapPin, Maximize2, BadgeCheck } from "lucide-react";
import type { Property } from "@/lib/properties";

export function PropertyCard({ p, i = 0 }: { p: Property; i?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: i * 0.08, ease: [0.2, 0.8, 0.2, 1] }}
      className="group"
    >
      <Link to="/properties/$id" params={{ id: p.id }} className="block">
        <div className="relative overflow-hidden rounded-2xl bg-card shadow-luxe hover-glow">
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={p.image}
              alt={p.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-110"
            />
            <div className="absolute inset-0 gradient-cinema opacity-90" />
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="glass text-white text-[10px] font-cinema px-3 py-1.5 rounded-full">{p.status}</span>
              <span className="glass text-white text-[10px] font-cinema px-3 py-1.5 rounded-full flex items-center gap-1">
                <BadgeCheck size={12} /> {p.approval}
              </span>
            </div>
            <div className="absolute bottom-0 inset-x-0 p-5 text-white">
              <div className="font-cinema text-[10px] text-white/70">{p.type.toUpperCase()}</div>
              <h3 className="font-display text-3xl mt-1 leading-tight">{p.name}</h3>
              <p className="text-sm text-white/80 mt-1">{p.tagline}</p>
            </div>
          </div>

          <div className="p-5 grid grid-cols-3 gap-3 text-xs">
            <div>
              <div className="text-muted-foreground flex items-center gap-1"><MapPin size={12} /> Location</div>
              <div className="font-medium mt-0.5">{p.location}</div>
            </div>
            <div>
              <div className="text-muted-foreground flex items-center gap-1"><Maximize2 size={12} /> Size</div>
              <div className="font-medium mt-0.5">{p.size}</div>
            </div>
            <div className="text-right">
              <div className="text-muted-foreground">Starting</div>
              <div className="gradient-text font-display text-xl font-medium mt-0.5">{p.price}</div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
