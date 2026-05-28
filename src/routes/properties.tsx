import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { PROPERTIES } from "@/lib/properties";
import { PropertyCard } from "@/components/PropertyCard";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/properties")({
  component: PropertiesPage,
});

const TYPES = ["All", "Villa", "Plot", "Bungalow"] as const;
const STATUSES = ["All", "Ready", "Under Construction", "New Launch"] as const;

const LOCATIONS = [
  "All",
  "Chettipalayam Road, Coimbatore",
  "Malumichampatti, Coimbatore",
  "Pollachi Road, Coimbatore",
  "Avinashi Road, Coimbatore",
  "Saravanampatti, Coimbatore",
  "Race Course, Coimbatore"
];

function PropertiesPage() {
  const [type, setType] = useState<(typeof TYPES)[number]>("All");
  const [status, setStatus] = useState<(typeof STATUSES)[number]>("All");
  const [location, setLocation] = useState<string>("All");
  const [query, setQuery] = useState("");

  const list = useMemo(() =>
    PROPERTIES.filter((p) =>
      (type === "All" || p.type === type) &&
      (status === "All" || p.status === status) &&
      (location === "All" || p.location === location) &&
      (query === "" || (p.name + p.location + p.tagline).toLowerCase().includes(query.toLowerCase()))
    ), [type, status, location, query]);

  return (
    <>
      {/* Banner */}
      <section className="pt-36 pb-12 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 gradient-glow opacity-40" />
        <div className="relative mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="THE PORTFOLIO"
            title={<>Properties for a <em className="italic gradient-text">life well-lived.</em></>}
            subtitle="A curated collection of villas, plots, and bungalows — each chosen for its location, design, and rarity."
          />
        </div>
      </section>

      {/* Filter bar */}
      <section className="sticky top-[64px] z-30 px-6 lg:px-8 py-4 bg-background/80 backdrop-blur-xl border-y border-border">
        <div className="mx-auto max-w-7xl grid md:grid-cols-12 gap-3">
          <div className="md:col-span-4 relative">
            <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, location…"
              className="w-full bg-secondary rounded-full pl-11 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/40"
            />
          </div>
          <Select label="Type" value={type} onChange={(v) => setType(v as never)} options={TYPES as readonly string[]} className="md:col-span-2" />
          <Select label="Status" value={status} onChange={(v) => setStatus(v as never)} options={STATUSES as readonly string[]} className="md:col-span-3" />
          <Select label="Location" value={location} onChange={setLocation} options={LOCATIONS} className="md:col-span-3" />
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 text-sm text-muted-foreground">
            {list.length} {list.length === 1 ? "property" : "properties"} found
          </div>
          {list.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">No matches. Try widening your filters.</div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {list.map((p, i) => <PropertyCard key={p.id} p={p} i={i} />)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Select({ label, value, onChange, options, className = "" }: {
  label: string; value: string; onChange: (v: string) => void; options: readonly string[]; className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      <label className="absolute left-4 top-1.5 text-[9px] font-cinema text-muted-foreground">{label.toUpperCase()}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-secondary rounded-full pl-4 pr-9 pt-5 pb-2 text-sm outline-none focus:ring-2 focus:ring-primary/40 appearance-none cursor-pointer"
      >
        {options.map((o) => <option key={o}>{o}</option>)}
      </select>
    </div>
  );
}
