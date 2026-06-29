import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Coffee, MapPin, Clock, Search, Sparkles } from "lucide-react";
import heroCup from "@/assets/hero-cup.png";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BEST_SELLERS, formatRp } from "@/lib/menu-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paman Besar — Great Coffee, Served by Big Uncles" },
      { name: "description", content: "Kopi enak bikinan Paman. 100% Arabica blend Gayo & Kintamani, 15+ outlet di kota kamu." },
      { property: "og:title", content: "Paman Besar — Great Coffee, Served by Big Uncles" },
      { property: "og:description", content: "Kopi enak bikinan Paman. 100% Arabica, 15+ outlet di kota kamu." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-electric/10 blur-3xl" aria-hidden />
        <div className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cobalt/10 blur-3xl" aria-hidden />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-soft px-4 py-1.5 text-xs font-semibold text-cobalt-deep">
              <Sparkles className="h-3.5 w-3.5 text-electric" />
              House blend Gayo × Kintamani
            </span>
            <h1 className="mt-5 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Great Coffee,<br />Served by{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Big Uncles.</span>
                <span className="absolute inset-x-0 bottom-2 h-3 bg-electric/30 -skew-x-6" aria-hidden />
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Kopi hangat ala paman favorit kamu. Diseduh serius, disajikan ramah. Dari satu booth jadi 15+ outlet di kota-kota besar.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 rounded-full bg-cobalt-deep px-6 py-3 text-sm font-bold text-white hover:bg-cobalt transition shadow-glow"
              >
                Lihat Menu <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/find-a-store"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-6 py-3 text-sm font-bold text-cobalt-deep hover:bg-secondary transition"
              >
                <MapPin className="h-4 w-4" /> Outlet Terdekat
              </Link>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-x-12 bottom-8 h-12 rounded-[50%] bg-cobalt/20 blur-2xl" aria-hidden />
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

      {/* QUICK STATS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-cobalt-deep text-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 overflow-hidden shadow-card">
          <StatItem icon={<MapPin className="h-5 w-5 text-electric" />} value="15+" label="Outlets nationwide" />
          <StatItem icon={<Coffee className="h-5 w-5 text-electric" />} value="100%" label="Arabica beans" />
          <StatItem icon={<Clock className="h-5 w-5 text-electric" />} value="07.00 – 22.00" label="Buka setiap hari" />
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-electric mb-2">Paling laris</p>
            <h2 className="font-display font-extrabold text-cobalt-deep text-3xl sm:text-4xl">The Favorites</h2>
          </div>
          <Link to="/menu" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-cobalt-deep hover:text-electric">
            Lihat Semua Menu <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEST_SELLERS.map((item) => (
            <article
              key={item.id}
              className="group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-glow hover:border-electric/40 transition-all"
            >
              <div className="aspect-[4/3] bg-gradient-to-br from-cobalt-deep to-electric relative overflow-hidden">
                <div className="absolute inset-0 grid place-items-center text-white/30">
                  <Coffee className="h-24 w-24 group-hover:scale-110 transition-transform" />
                </div>
                <span className="absolute top-3 left-3 rounded-full bg-white text-cobalt-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1">
                  {item.badge}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display font-bold text-lg text-cobalt-deep">{item.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-extrabold text-cobalt-deep">{formatRp(item.price)}</span>
                  <span className="text-xs text-muted-foreground">{item.kcal} kcal</span>
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
            <p className="text-xs font-bold uppercase tracking-widest text-electric mb-2">Promo minggu ini</p>
            <h2 className="font-display font-extrabold text-cobalt-deep text-3xl sm:text-4xl">Hemat Bareng Paman</h2>
          </div>
          <Link to="/promo" className="hidden sm:inline-flex items-center gap-1 text-sm font-semibold text-cobalt-deep hover:text-electric">
            Semua promo <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[{img: promo1, tag: "Bank Promo", title: "Diskon 30% Tiap Senin", desc: "Pakai kartu debit BCA/Mandiri untuk semua minuman."},
            {img: promo2, tag: "App Only", title: "Buy 1 Get 1 Es Kopi Aren", desc: "Khusus order via aplikasi, setiap Jumat."}].map((p) => (
            <div key={p.title} className="rounded-2xl overflow-hidden border border-border bg-white shadow-card group">
              <div className="relative aspect-[16/9] overflow-hidden">
                <img src={p.img} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 rounded-full bg-electric text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1">{p.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display font-bold text-xl text-cobalt-deep">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* STORE LOCATOR TEASER */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="rounded-3xl bg-gradient-to-br from-cobalt-deep via-cobalt to-electric p-8 sm:p-12 text-white relative overflow-hidden">
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" aria-hidden />
          <div className="relative max-w-2xl">
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl">Cari Paman Besar di dekatmu</h2>
            <p className="mt-2 text-white/80">15+ outlet siap menyambut. Ketik nama kota atau area kamu.</p>
            <form action="/find-a-store" className="mt-6 flex gap-2 rounded-full bg-white p-1.5 shadow-glow">
              <div className="flex-1 flex items-center gap-2 px-4">
                <Search className="h-4 w-4 text-cobalt-deep/60" />
                <input name="q" placeholder="Cari kota / kecamatan…" className="flex-1 bg-transparent text-cobalt-deep placeholder:text-cobalt-deep/40 outline-none py-2 text-sm" />
              </div>
              <button className="rounded-full bg-cobalt-deep text-white font-bold text-sm px-5 py-2.5 hover:bg-electric transition">
                Cari
              </button>
            </form>
          </div>
        </div>
      </section>

      <style>{`@keyframes float { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-12px) } }`}</style>
    </SiteLayout>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex items-center gap-4 p-6 sm:p-8">
      <div className="grid h-12 w-12 place-items-center rounded-full bg-white/10 shrink-0">{icon}</div>
      <div className="min-w-0">
        <p className="font-display font-extrabold text-xl sm:text-2xl">{value}</p>
        <p className="text-xs sm:text-sm text-white/70">{label}</p>
      </div>
    </div>
  );
}
