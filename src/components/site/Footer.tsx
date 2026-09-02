import { Link } from "@tanstack/react-router";
import { Send, MapPin, Mail, Phone, Instagram, Twitter, Music } from "lucide-react";
import logo from "@/assets/logo/logo.png";
export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8 text-cobalt-deep border-t border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* 1. KIRI: Brand & Profil (Background Top Transparent / Subtle Gradient) */}
          <div className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-transparent via-secondary/40 to-secondary/80 border-t-transparent border-x-border/70 border-b-border/70 p-8 flex flex-col justify-between h-full min-h-[340px]">
            <div className="space-y-2 pb-3">
              <div className="flex items-center gap-3">
                <div className="h-18 w-18 overflow-hidden flex items-center justify-center shrink-0">
                  <img src={logo} alt="SXN Caffe Logo" className="w-full h-full object-cover" />
                </div>
                <div className="h-10 w-[1px] h-[20px] bg-border/80 shrink-0" />
                <div className="flex flex-col">
                  <span className="font-display font-extrabold text-xl text-cobalt-deep tracking-tight leading-none">
                    SXN CAFFE
                  </span>
                  <span className="text-[10px] font-medium text-black/60 tracking-[0.02em]">
                    Group of Coffee Enthusiasts
                  </span>
                </div>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed">
                Menghadirkan pengalaman ngopi urban terbaik dengan racikan konsisten, suasana
                estetik, dan fasilitas prioritas untuk menemani setiap rutinitas serta
                kreativitasmu.
              </p>

              <div className="pt-2 space-y-2 text-xs text-muted-foreground font-medium">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-electric shrink-0" />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-electric shrink-0" />
                  <span>halo@sxncaffe.com</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-electric shrink-0" />
                  <span>+62 811 9900 8800</span>
                </div>
              </div>
            </div>

           <div className="pt-6 border-t border-border/50 flex items-center justify-between">
  <span className="text-md font-medium tracking-[0.02em] text-cobalt-deep">
    Stay in Touch!
  </span>
  <div className="flex gap-2">
    {[
      { name: "IG", icon: <Instagram className="w-4 h-4" />, href: "https://instagram.com" },
      { name: "X", icon: <Twitter className="w-4 h-4" />, href: "https://twitter.com" },
      { name: "TT", icon: <Music className="w-4 h-4" />, href: "https://tiktok.com" },
    ].map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
      
        rel="noreferrer"
        aria-label={social.name}
        className="h-9 w-9 rounded-xl border border-border/80 bg-white flex items-center justify-center text-cobalt-deep hover:bg-cobalt-deep hover:text-white hover:border-cobalt-deep transition-all shadow-xs"
      >
        {social.icon}
      </a>
    ))}
  </div>
</div>
          </div>

          {/* 2. KANAN: Navigasi Mepet Kanan (Menggunakan col-span-7 & ml-auto) */}
          <div className="lg:col-span-7 flex flex-wrap lg:flex-nowrap justify-end gap-10 sm:gap-14 pt-2 ml-auto">
            {/* JELAJAH */}
            <div className="flex flex-col gap-4 min-w-[130px]">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-cobalt-deep">
                JELAJAH
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground font-medium">
                <li>
                  <Link
                    to="/menu"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    Menu Pilihan
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    Service &amp; Fasilitas
                  </Link>
                </li>
                <li>
                  <Link
                    to="/promo"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    Promo Menarik
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store-location"
                    search={{}}
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    Find a Store
                  </Link>
                </li>
              </ul>
            </div>

            {/* BISNIS */}
            <div className="flex flex-col gap-4 min-w-[150px]">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-cobalt-deep">
                BISNIS &amp; MITRA
              </h4>
              <ul className="flex flex-col gap-2.5 text-sm text-muted-foreground font-medium">
                <li>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    SXN Catering
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    B2B Beans Supply
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    Franchise Info
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-electric transition-colors"
                  >
                    Event Space Rental
                  </Link>
                </li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div className="flex flex-col gap-4 max-w-[220px]">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-cobalt-deep">
                NEWSLETTER
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Dapatkan info promo mingguan &amp; peluncuran menu baru.
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
                <input
                  type="email"
                  placeholder="Email kamu..."
                  className="w-full bg-secondary/80 border border-border/80 rounded-xl px-3.5 py-2 text-xs text-cobalt-deep placeholder:text-muted-foreground outline-none focus:border-electric transition-all"
                />
                <button
                  type="submit"
                  className="w-full rounded-xl bg-cobalt-deep text-white text-xs font-bold py-2.5 hover:bg-electric transition-all shadow-xs flex items-center justify-center gap-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* 3. BAWAH: Copyright & Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-medium">
          <p>&copy; {new Date().getFullYear()} SXN Caffe. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span className="hover:text-cobalt-deep cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="hover:text-cobalt-deep cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
