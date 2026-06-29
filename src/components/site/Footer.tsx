import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
  <footer className="bg-white pt-16 pb-8 text-cobalt-deep border-t border-border">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    
    <div className="flex flex-col md:flex-row gap-12">
      
      {/* 1. KIRI: Logo & Profil */}
      <div className="w-full md:w-80 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-cobalt-deep text-white font-bold text-lg">PB</div>
          <span className="font-display font-extrabold text-xl text-cobalt-deep tracking-tight">PAMAN BESAR</span>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Kehangatan paman, dalam skala urban. Hadir untuk menemani keseharian, produktivitas, dan diskusi hangatmu melalui kopi berkualitas.
        </p>
      </div>

      {/* 2. KANAN: Link Navigasi */}
      <div className="ml-auto flex flex-wrap gap-3 sm:gap-16">
        
        {/* JELAJAH */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-cobalt-deep uppercase tracking-wider">JELAJAH</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li><Link to="/menu" className="hover:text-electric transition-colors">Menu</Link></li>
            <li><Link to="/service" className="hover:text-electric transition-colors">Service</Link></li>
            <li><Link to="/promo" className="hover:text-electric transition-colors">Promo</Link></li>
            <li><Link to="/about" className="hover:text-electric transition-colors">About Us</Link></li>
            <li><Link to="/store-location" search={{}} className="hover:text-electric transition-colors">Find a Store</Link></li>
          </ul>
        </div>

        {/* BISNIS */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-cobalt-deep uppercase tracking-wider">BISNIS</h4>
          <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-electric transition-colors">Paman Big Catering</Link></li>
            <li><Link to="/" className="hover:text-electric transition-colors">B2B Beans Supply</Link></li>
            <li><Link to="/" className="hover:text-electric transition-colors">Franchise Info</Link></li>
          </ul>
        </div>

        {/* NGOBROL */}
        <div className="flex flex-col gap-4">
          <h4 className="font-bold text-sm text-cobalt-deep uppercase tracking-wider">NGOBROL</h4>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <p>halo@pamanbesar.id</p>
            <p>+62 811 8000 8000</p>
          </div>
          <div className="flex gap-2 mt-1">
            <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-xs text-cobalt-deep hover:bg-electric hover:text-white transition-colors cursor-pointer">IG</div>
            <div className="h-8 w-8 rounded-full border border-border flex items-center justify-center text-xs text-cobalt-deep hover:bg-electric hover:text-white transition-colors cursor-pointer">TW</div>
          </div>
        </div>

      </div>
    </div>

    {/* 3. BAWAH: Copyright Center */}
    <div className="mt-16 pt-8 border-t border-border text-center text-xs text-muted-foreground">
      &copy; {new Date().getFullYear()} Paman Besar. All rights reserved.
    </div>
  </div>
</footer>
  );
}