import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { MapPin, Menu, X } from "lucide-react";
import logo from "@/assets/logo/logo.png";
import logo2 from "@/assets/logo/logo2.png";

const links = [
  { to: "/menu", label: "Menu" },
  { to: "/service", label: "Service" },
  { to: "/promo", label: "Promo" },
  { to: "/about", label: "About Us" },
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
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-cobalt-deep/80 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.1)] py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
        {/* LOGO (KIRI) */}
<Link to="/" onClick={() => window.scrollTo(0, 0)} className="flex items-center shrink-0 group">
  <div className="h-10 w-28 overflow-hidden">
    <img
      src={scrolled ? logo2 : logo}
      alt="logo"
      className="h-full w-full object-cover object-center"
    />
  </div>
</Link>
          {/* RIGHT ALIGNED NAV + CTA WRAPPER */}
          <div className="hidden lg:flex items-center ml-auto gap-2">
            <nav className="flex items-center gap-1 mr-4">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                    scrolled
                      ? "text-slate-300 hover:text-white hover:bg-white/10"
                      : "text-cobalt-deep/80 hover:text-cobalt-deep hover:bg-black/5"
                  }`}
                  activeProps={{
                    className: scrolled
                      ? "!text-white bg-white/20 shadow-inner font-bold"
                      : "!text-electric bg-electric/10 font-bold",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <a
              href="/#store"
              className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-r from-electric to-blue-600 p-0.5 font-bold text-white hover:shadow-[0_0_35px_rgba(59,130,246,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
            >
              <span className="flex items-center gap-2 px-6 py-2 rounded-full bg-transparent text-sm">
                <MapPin className="w-4 h-4" />
                Find a Store
              </span>
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className={`lg:hidden grid h-10 w-10 place-items-center rounded-xl border transition-all duration-200 ml-auto ${
              scrolled
                ? "text-white border-white/10 hover:bg-white/10"
                : "text-cobalt-deep border-black/5 hover:bg-black/5"
            }`}
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="lg:hidden mt-2 border-t border-white/10 bg-cobalt-deep/95 backdrop-blur-2xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-1.5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-semibold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                activeProps={{
                  className:
                    "!text-white bg-gradient-to-r from-electric/30 to-transparent border-l-4 border-electric font-bold pl-3",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/store-location"
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center justify-center gap-2 w-full text-center rounded-xl bg-gradient-to-r from-electric to-blue-600 py-3 text-sm font-bold text-white shadow-lg shadow-electric/30 active:scale-[0.98] transition-transform"
            >
              Find a Store
              <MapPin className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
