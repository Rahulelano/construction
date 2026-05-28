import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/projects", label: "Projects" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-light shadow-lg" : "bg-transparent"
      }`}
    >
      {/* Top Bar */}
      <div
        className={`border-b transition-all duration-500 px-5 lg:px-8 py-1.5 flex items-center justify-between text-[10px] font-cinema ${
          scrolled
            ? "border-black/5 bg-primary/5 text-primary"
            : "border-white/10 bg-black/35 text-white/90"
        }`}
      >
        <div className="font-semibold tracking-wider">கரிய காளியம்மன் துணை</div>
        <div className="flex gap-4">
          <a href="tel:+919443342528" className="hover:underline">📞 9443342528</a>
          <span className="hidden sm:inline opacity-40">|</span>
          <a href="tel:+919944552507" className="hover:underline">📞 9944552507</a>
          <span className="hidden sm:inline opacity-40">|</span>
          <a href="mailto:tgppromoters@gmail.com" className="hover:underline hidden md:inline">✉️ tgppromoters@gmail.com</a>
        </div>
      </div>

      <div className={`mx-auto max-w-7xl px-5 lg:px-8 flex items-center justify-between transition-all duration-500 ${
        scrolled ? "py-2.5" : "py-4"
      }`}>
        <Link to="/" className="flex items-center gap-2 group">
          <img
            src="/logo.png"
            alt="TGP Logo"
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <div className="leading-tight">
            <div className={`font-cinema font-bold text-sm tracking-wider ${scrolled ? "text-foreground" : "text-white"}`}>
              TGP PROPERTIES
            </div>
            <div className={`font-cinema text-[8px] tracking-[0.2em] ${scrolled ? "text-muted-foreground" : "text-white/70"}`}>
              BUILDERS & DEVELOPERS
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              className={`px-3 py-2 text-[13px] font-medium tracking-wide rounded-md transition-colors relative
                ${scrolled ? "text-foreground/80 hover:text-primary" : "text-white/85 hover:text-white"}
                data-[status=active]:text-primary`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full gradient-royal text-white text-xs font-cinema shadow-glow hover-glow"
          >
            BOOK VISIT
          </Link>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? "text-foreground" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden glass-light mx-4 mt-3 rounded-2xl p-4 grid gap-1">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 text-sm rounded-md hover:bg-secondary"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-2.5 rounded-full gradient-royal text-white text-xs font-cinema text-center"
          >
            BOOK SITE VISIT
          </Link>
        </div>
      )}
    </header>
  );
}
