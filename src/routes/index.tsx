import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, MapPin, Clock, Search, Sparkles, ChefHat, ChevronRight, Flame } from "lucide-react";
import heroCup from "@/assets/hero-cup.png";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BEST_SELLERS, formatRp } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paman Besar — Great Coffee, Served by Big Uncles" },
      {
        name: "description",
        content:
          "Kopi enak bikinan Paman. 100% Arabica blend Gayo & Kintamani, 15+ outlet di kota kamu.",
      },
      { property: "og:title", content: "Paman Besar — Great Coffee, Served by Big Uncles" },
      {
        property: "og:description",
        content: "Kopi enak bikinan Paman. 100% Arabica, 15+ outlet di kota kamu.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO (Padding bawah ditarik dalam ke pb-32 / lg:pb-36) */}
      <section className="relative overflow-hidden -mt-16 pt-15 pb-32 lg:pb-36">
        <div
          className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-electric/10 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cobalt/10 blur-3xl"
          aria-hidden
        />

        {/* Ganti grid lg:grid-cols-2 menjadi grid lg:grid-cols-12 */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 grid lg:grid-cols-12 gap-10 items-center">
          {/* Sisi Teks: Ambil 7 kolom dari 12 */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-soft px-4 py-1.5 text-xs font-semibold text-cobalt-deep">
              <Sparkles className="h-3.5 w-3.5 text-electric" />
              Paman Punya Selera
            </span>
            <h1 className="mt-5 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Great Coffee, <br />
              <span className="inline-flex items-center gap-2">
                Served by{" "}
                <span className="relative inline-flex">
                  <span className="relative z-10">Big Uncles.</span>
                  <svg
                    className="absolute -bottom-2 -left-2 w-[110%] h-4 text-electric-soft"
                    viewBox="0 0 100 20"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M0,15 Q50,0 100,15"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Racikan kopi Paman yang nagih. Diseduh niat, disajikan nikmat. <br /> Kini hadir di 5+
              lokasi buat jadi basecamp nongkrong kalian!
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-cobalt-deep px-6 py-3 text-sm font-bold text-white hover:bg-cobalt transition shadow-glow"
              >
                Lihat Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/store-location"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-cobalt-deep hover:bg-secondary transition"
              >
                <MapPin className="h-4 w-4" /> Outlet Terdekat
              </Link>
            </div>
          </div>

          {/* Sisi Gambar: Ambil 5 kolom sisanya */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="absolute inset-x-12 bottom-8 h-12 rounded-[50%] bg-cobalt/20 blur-2xl"
              aria-hidden
            />
            <img
              src={heroCup}
              alt="Cup kopi Paman Besar"
              width={1024}
              height={1280}
              className="relative w-[280px] sm:w-[340px] lg:w-[420px] drop-shadow-2xl animate-[float_5s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </section>

      {/* QUICK STATS (Ditarik naik pakai -mt-16 supaya pas memotong tengah BG) */}
      <section className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="rounded-full bg-cobalt-deep font-normal text-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 overflow-hidden shadow-card">
          <StatItem
            icon={<MapPin className="h-5 w-5 text-electric" />}
            value="5+"
            label="Outlets Paman"
          />
          <StatItem
            // Ganti Coffee jadi ChefHat
            icon={<ChefHat className="h-5 w-5 text-electric" />}
            value="Fresh"
            label="Handmade Quality"
          />
          <StatItem
            icon={<Clock className="h-5 w-5 text-electric" />}
            value="08.00 – 00.00"
            label="Buka setiap hari"
          />
        </div>
      </section>

    {/* BEST SELLERS */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-20">
  <div className="flex items-end justify-between gap-6 mb-10">
    <div>
    
      <h2 className="font-display font-extrabold text-cobalt-deep text-3xl sm:text-4xl">
        Favorite Ponakan
      </h2>
    </div>
    <Link
      to="/menu"
      className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-cobalt-deep hover:text-electric transition-colors"
    >
      Lihat Semua Menu <ChevronRight className="h-4 w-4" />
    </Link>
  </div>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {BEST_SELLERS.map((item) => (
      <article
        key={item.id}
        className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-glow hover:border-electric/40 transition-all flex flex-col"
      >
        {/* Container Gambar */}
        <div className="aspect-[4/3] bg-gradient-to-br from-cobalt-deep to-electric relative overflow-hidden">
          {item.img ? (
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center text-white/30">
              <Coffee className="h-20 w-20 group-hover:scale-110 transition-transform" />
            </div>
          )}
          
          <span className="absolute flex gap-2 top-3 left-3 rounded-tl-lg rounded-br-lg bg-white/90 backdrop-blur-sm text-cobalt-deep text-[10px] font-bold uppercase tracking-[0.02em] px-3 py-1 shadow-sm">
            <Flame  className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 text-cobalt-deep" />
            {item.badge}
          </span>
        </div>

        {/* Info Menu */}
        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-lg text-cobalt-deep group-hover:text-electric transition-colors">
              {item.name}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-extrabold text-cobalt-deep">{formatRp(item.price)}</span>
          
          </div>
        </div>
      </article>
    ))}
  </div>
</section>

    {/* PROMO TEASER */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
  <div className="flex items-end justify-between gap-6 mb-8">
    <div>
      
      <h2 className="font-display font-extrabold text-cobalt-deep text-3xl sm:text-4xl">
        Hemat Bareng Paman
      </h2>
    </div>
    <Link
      to="/promo"
      className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-cobalt-deep hover:text-electric transition-colors"
    >
      Semua promo <ChevronRight className="h-4 w-4" />
    </Link>
  </div>

  <div className="grid md:grid-cols-2 gap-6">
    {[
      {
        img: promo1,
        tag: "Special Deal",
        title: "Buy 5 Get 1 Free",
        desc: "Berlaku untuk semua menu kopi & non-kopi. Cocok buat sharing bareng temen sekolah!",
      },
      {
        img: promo2,
        tag: "App Only",
        title: "Friday Coffee Treat",
        desc: "Diskon 20% untuk semua Artisan Bakery setiap hari Jumat via aplikasi.",
      },
    ].map((p) => (
      <div
        key={p.title}
        className="rounded-2xl overflow-hidden border border-border bg-white shadow-card group"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={p.img}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 rounded-tl-lg rounded-br-lg bg-electric text-white text-[10px] font-bold uppercase tracking-[0.02em] px-3 py-1 shadow-md">
            {p.tag}
          </span>
        </div>
        <div className="p-6">
          <h3 className="font-display font-bold text-xl text-cobalt-deep group-hover:text-electric transition-colors">
            {p.title}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
        </div>
      </div>
    ))}
  </div>
</section>

   {/* STORE LOCATOR TEASER - CENTERED & CONNECTED */}
<section className="mx-auto max-w-4xl px-4 py-16 sm:py-24">
  <div className="flex flex-col items-center text-center">
    
    {/* Live Pulse Badge */}
    <div className="flex items-center gap-2 mb-3">
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-electric shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
      </div>
      <p className="text-xs font-bold uppercase tracking-widest text-electric">Store Locator</p>
    </div>

    {/* Heading */}
    <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-cobalt-deep">
      Cari Paman Besar
    </h2>
    <p className="mt-3 text-muted-foreground text-base sm:text-lg max-w-lg">
      5+ store siap menyambut. Ketik nama kota atau area kamu untuk menemukan lokasi terdekat.
    </p>

    {/* Search Box Terkoneksi ke ?q= */}
    <form
      action="/store-location"
      method="get"
      className="mt-8 w-full max-w-md flex flex-col sm:flex-row gap-2 rounded-2xl bg-white p-2 border border-border shadow-sm focus-within:ring-2 focus-within:ring-electric/20 transition-all"
    >
      <div className="flex-1 flex items-center gap-3 px-3 sm:px-4">
        <Search className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground shrink-0" />
        <input
          name="q"
          type="text"
          placeholder="Cari store/area.."
          className="w-full bg-transparent outline-none py-2.5 text-sm text-cobalt-deep placeholder:text-muted-foreground"
        />
      </div>
      <button 
        type="submit"
        className="rounded-xl bg-cobalt-deep text-white font-bold text-sm px-6 py-3 hover:bg-electric transition-all active:scale-95"
      >
        Cari
      </button>
    </form>
    
  </div>
</section>

      <style>{`@keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }`}</style>
    </SiteLayout>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 p-6 sm:p-8">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 shrink-0">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-display font-extrabold text-xl sm:text-2xl">{value}</p>
        <p className="text-xs sm:text-sm text-white/70">{label}</p>
      </div>
    </div>
  );
}
