import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[oklch(0.1_0.06_265)] text-white">
      <div className="absolute inset-0 gradient-glow opacity-60 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 grid gap-12 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-5">
            <img src="/logo.png" alt="TGP Logo" className="h-10 w-auto object-contain" />
            <div>
              <div className="font-cinema font-bold text-sm tracking-wider">TGP PROPERTIES</div>
              <div className="font-cinema text-[8px] text-white/60 tracking-widest">BUILDERS & DEVELOPERS</div>
            </div>
          </div>
          <p className="text-sm text-white/65 leading-relaxed max-w-xs">
            We build with pride. Premium villas, layout development, quality construction, and design services in Coimbatore.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: Instagram, href: "https://instagram.com/t_grand_property" },
              { Icon: Facebook, href: "#" },
              { Icon: Linkedin, href: "#" },
              { Icon: Youtube, href: "#" }
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-9 h-9 rounded-full glass grid place-items-center hover:bg-white/15 transition-colors"
                aria-label="Social link"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-cinema text-xs text-white/50 mb-5">EXPLORE</h4>
          <ul className="space-y-3 text-sm">
            {[
              ["/properties", "Properties"],
              ["/projects", "Completed Projects"],
              ["/gallery", "Gallery"],
              ["/services", "Services"],
              ["/about", "About Us"],
              ["/blog", "Insights"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-white/75 hover:text-white transition-colors">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-cinema text-xs text-white/50 mb-5">SERVICES</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li>Villas Buying & Selling</li>
            <li>Construction</li>
            <li>Real Estate</li>
            <li>Building Materials</li>
            <li>Building Approval</li>
            <li>DTCP Approval</li>
            <li>Bank Loan</li>
            <li>2D & 3D Designing</li>
          </ul>
        </div>

        <div>
          <h4 className="font-cinema text-xs text-white/50 mb-5">REACH US</h4>
          <ul className="space-y-4 text-sm text-white/75">
            <li className="flex gap-3"><MapPin size={16} className="mt-0.5 shrink-0" /> #6, MRP Complex, Chettipalayam Road, Malumichampatti, Coimbatore - 641050</li>
            <li className="flex gap-3 flex-col">
              <span className="flex items-center gap-3"><Phone size={16} className="shrink-0" /> 94433 42528</span>
              <span className="flex items-center gap-3 pl-7">99445 52507</span>
            </li>
            <li className="flex gap-3"><Mail size={16} className="mt-0.5 shrink-0" /> tgppromoters@gmail.com</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} TGP Builders & Developers. All rights reserved.</div>
          <div className="font-cinema">WE BUILD WITH PRIDE · கரிய காளியம்மன் துணை</div>
        </div>
      </div>
    </footer>
  );
}
