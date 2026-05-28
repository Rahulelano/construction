import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Building2, Home, Image as ImageIcon, MessageSquare, ShieldAlert, Users, FileText, BarChart3, Plus, Edit3, Trash2 } from "lucide-react";
import { PROPERTIES } from "@/lib/properties";
import { toast } from "sonner";

export const Route = createFileRoute("/admin")({
  component: Admin,
});

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: BarChart3 },
  { id: "properties", label: "Properties", icon: Building2 },
  { id: "gallery", label: "Gallery", icon: ImageIcon },
  { id: "enquiries", label: "Enquiries", icon: MessageSquare },
  { id: "testimonials", label: "Testimonials", icon: Users },
  { id: "blog", label: "Blog", icon: FileText },
] as const;

function Admin() {
  const [auth, setAuth] = useState(false);
  const [tab, setTab] = useState<(typeof tabs)[number]["id"]>("dashboard");

  if (!auth) return <Login onSuccess={() => setAuth(true)} />;

  return (
    <div className="min-h-screen bg-[oklch(0.08_0.05_265)] text-white pt-20">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-[240px_1fr] gap-6 px-4 py-8">
        {/* Sidebar */}
        <aside className="glass rounded-2xl p-4 h-fit lg:sticky lg:top-24">
          <div className="px-3 py-2 font-cinema text-[10px] text-white/50">ADMIN PANEL</div>
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all ${tab === t.id ? "gradient-royal text-white shadow-glow" : "text-white/70 hover:bg-white/5"}`}
            >
              <t.icon size={16} /> {t.label}
            </button>
          ))}
          <button onClick={() => setAuth(false)} className="mt-6 w-full px-3 py-2.5 rounded-lg text-sm text-white/60 hover:bg-white/5">Logout</button>
        </aside>

        {/* Main */}
        <main>
          {tab === "dashboard" && <Dashboard />}
          {tab === "properties" && <PropertiesTable />}
          {tab === "gallery" && <Placeholder title="Gallery Manager" />}
          {tab === "enquiries" && <Enquiries />}
          {tab === "testimonials" && <Placeholder title="Testimonials" />}
          {tab === "blog" && <Placeholder title="Blog Posts" />}
        </main>
      </div>
    </div>
  );
}

function Login({ onSuccess }: { onSuccess: () => void }) {
  return (
    <div className="min-h-screen grid place-items-center bg-[oklch(0.08_0.05_265)] text-white p-6">
      <form
        onSubmit={(e) => { e.preventDefault(); onSuccess(); toast.success("Welcome back, Admin."); }}
        className="w-full max-w-md glass rounded-2xl p-8 shadow-luxe"
      >
        <ShieldAlert size={28} className="text-primary" />
        <h1 className="font-display text-3xl mt-4">Admin Login</h1>
        <p className="text-sm text-white/60 mt-1">Demo only — not connected to a backend.</p>
        <input className="mt-6 w-full bg-white/5 rounded-xl px-4 py-3 text-sm border border-white/10 outline-none" placeholder="Email" defaultValue="admin@tgp.in" />
        <input type="password" className="mt-3 w-full bg-white/5 rounded-xl px-4 py-3 text-sm border border-white/10 outline-none" placeholder="Password" defaultValue="••••••••" />
        <button className="mt-5 w-full rounded-full gradient-royal text-white text-xs font-cinema py-3.5 shadow-glow">SIGN IN</button>
      </form>
    </div>
  );
}

function Dashboard() {
  const stats = [
    { l: "Properties", v: PROPERTIES.length, sub: "live listings" },
    { l: "Enquiries", v: 42, sub: "this month" },
    { l: "Site Visits", v: 18, sub: "scheduled" },
    { l: "Revenue", v: "₹12.4 Cr", sub: "MTD" },
  ];
  return (
    <div className="space-y-6">
      <h1 className="font-display text-4xl">Welcome back, Venkat.</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass rounded-2xl p-5">
            <div className="font-cinema text-[10px] text-white/50">{s.l.toUpperCase()}</div>
            <div className="font-display text-3xl mt-2">{s.v}</div>
            <div className="text-xs text-white/60 mt-1">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="glass rounded-2xl p-6">
        <h2 className="font-display text-2xl mb-4">Activity</h2>
        <ul className="space-y-3 text-sm">
          {["New enquiry · Azure Heights · 12 min ago", "Site visit booked · Vasanth Greens · 1 h ago", "Property published · Celeste Row · 3 h ago", "Brochure download · Lumière Villas · 5 h ago"].map((a, k) => (
            <li key={k} className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" /> {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function PropertiesTable() {
  return (
    <div className="glass rounded-2xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="font-display text-3xl">Properties</h1>
        <button onClick={() => toast.success("Property editor would open here")} className="inline-flex items-center gap-2 rounded-full gradient-royal text-white text-xs font-cinema px-5 py-2.5 shadow-glow">
          <Plus size={14} /> ADD PROPERTY
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-[10px] font-cinema text-white/50 uppercase">
            <tr><th className="py-3">Name</th><th>Type</th><th>Location</th><th>Status</th><th>Price</th><th></th></tr>
          </thead>
          <tbody>
            {PROPERTIES.map((p) => (
              <tr key={p.id} className="border-t border-white/10 hover:bg-white/5">
                <td className="py-3 flex items-center gap-3"><img src={p.image} alt="" className="w-10 h-10 rounded object-cover" /> {p.name}</td>
                <td>{p.type}</td>
                <td className="text-white/70">{p.location}</td>
                <td><span className="text-[10px] font-cinema px-2 py-1 rounded-full bg-white/10">{p.status.toUpperCase()}</span></td>
                <td>{p.price}</td>
                <td className="flex gap-2 justify-end py-3">
                  <button onClick={() => toast("Edit modal would open")} className="p-2 rounded-lg hover:bg-white/10"><Edit3 size={14} /></button>
                  <button onClick={() => toast.error("Delete confirmation would open")} className="p-2 rounded-lg hover:bg-white/10 text-red-300"><Trash2 size={14} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Enquiries() {
  const list = [
    { name: "Karthik R.", email: "karthik@vasya.tech", prop: "Azure Heights", date: "Today" },
    { name: "Dr. Lakshmi I.", email: "lakshmi@apollo.in", prop: "Lumière Villas", date: "Yesterday" },
    { name: "Rohan P.", email: "rohan@sg.com", prop: "Vasanth Greens", date: "2 days ago" },
  ];
  return (
    <div className="glass rounded-2xl p-6">
      <h1 className="font-display text-3xl mb-6">Enquiries</h1>
      <div className="space-y-3">
        {list.map((e, i) => (
          <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5">
            <div>
              <div className="font-medium">{e.name}</div>
              <div className="text-xs text-white/60">{e.email} · {e.prop}</div>
            </div>
            <div className="text-xs text-white/50">{e.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Placeholder({ title }: { title: string }) {
  return (
    <div className="glass rounded-2xl p-10 text-center">
      <Home size={32} className="mx-auto text-primary" />
      <h1 className="font-display text-3xl mt-4">{title}</h1>
      <p className="text-white/60 mt-2 text-sm">Management UI scaffold. Hook this up to a backend database or CMS to make it live.</p>
    </div>
  );
}
