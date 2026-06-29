import { Link } from "@tanstack/react-router";
import { Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 bg-cobalt-deep text-white/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-electric text-white font-extrabold text-sm">PB</span>
            <span className="font-display font-extrabold text-white text-lg">PAMAN BESAR</span>
          </div>
          <p className="text-sm leading-relaxed text-white/70">
            Great Coffee, Served by Big Uncles. Kehangatan paman, dalam skala urban.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-sm tracking-wide uppercase">Jelajah</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/menu" className="hover:text-electric">Menu</Link></li>
            <li><Link to="/service" className="hover:text-electric">Service</Link></li>
            <li><Link to="/promo" className="hover:text-electric">Promo</Link></li>
            <li><Link to="/about" className="hover:text-electric">About Us</Link></li>
            <li><Link to="/find-a-store" className="hover:text-electric">Find a Store</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-sm tracking-wide uppercase">Bisnis</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/service" className="hover:text-electric">Paman Big Catering</Link></li>
            <li><Link to="/service" className="hover:text-electric">B2B Beans Supply</Link></li>
            <li><Link to="/service" className="hover:text-electric">Franchise Info</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-3 text-sm tracking-wide uppercase">Ngobrol</h4>
          <p className="text-sm mb-4">halo@pamanbesar.id<br/>+62 811 8000 8000</p>
          <div className="flex gap-3">
            <a href="#" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-electric transition"><Instagram className="h-4 w-4" /></a>
            <a href="#" aria-label="Twitter" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-electric transition"><Twitter className="h-4 w-4" /></a>
            <a href="#" aria-label="Facebook" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-electric transition"><Facebook className="h-4 w-4" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 text-xs text-white/50 flex flex-wrap gap-2 justify-between">
          <p>© {new Date().getFullYear()} Paman Besar Coffee. Semua hak dilindungi.</p>
          <p>Diseduh dengan ❤️ di Indonesia.</p>
        </div>
      </div>
    </footer>
  );
}
