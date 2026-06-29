import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/service", label: "Service" },
  { to: "/promo", label: "Promo" },
  { to: "/about", label: "About Us" },
  { to: "/find-a-store", label: "Find a Store" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cobalt-deep/85 backdrop-blur-md border-b border-electric/20"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 shrink-0 group">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-electric text-white font-extrabold text-sm shadow-glow group-hover:scale-105 transition-transform">
              PB
            </span>
            <span className={`font-display font-extrabold tracking-tight text-base sm:text-lg ${scrolled ? "text-white" : "text-cobalt-deep"}`}>
              PAMAN BESAR
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                  scrolled
                    ? "text-white/85 hover:text-white hover:bg-white/10"
                    : "text-cobalt-deep hover:bg-electric-soft"
                }`}
                activeProps={{
                  className: scrolled
                    ? "px-4 py-2 rounded-full text-sm font-semibold text-white bg-white/15"
                    : "px-4 py-2 rounded-full text-sm font-semibold text-electric bg-electric-soft",
                }}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link
              to="/menu"
              className="inline-flex items-center rounded-full bg-electric px-5 py-2.5 text-sm font-bold text-white shadow-glow hover:bg-electric/90 transition"
            >
              Order Now
            </Link>
          </div>

          <button
            className={`lg:hidden grid h-10 w-10 place-items-center rounded-full ${scrolled ? "text-white hover:bg-white/10" : "text-cobalt-deep hover:bg-electric-soft"}`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-cobalt-deep/95 backdrop-blur-md border-t border-electric/20">
          <div className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-white/90 hover:bg-white/10"
                activeProps={{ className: "px-4 py-3 rounded-xl text-sm font-semibold text-white bg-electric/30" }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/menu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-electric px-5 py-3 text-sm font-bold text-white"
            >
              Order Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
