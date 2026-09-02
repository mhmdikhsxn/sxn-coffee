import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Navigation,
  ExternalLink,
  Coffee,
  Tag,
  ChevronRight,
  Sparkles,
  ChefHat,
  Clock,
  Flame,
  Star,
  User,
} from "lucide-react";
import heroCup from "@/assets/hero-cup.png";
import { SiteLayout } from "@/components/site/SiteLayout";
import { BEST_SELLERS, formatRp } from "@/lib/menu-data";
import { STORES, type Store } from "@/lib/store-data";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

interface StoreSearch {
  q?: string;
}

export const Route = createFileRoute("/")({
  validateSearch: (search: Record<string, unknown>): StoreSearch => {
    return {
      q: (search.q as string) || undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "SXN Caffe — Great Coffee, Crafted for Your Vibe." },
      {
        name: "description",
        content:
          "Racikan kopi SXN yang nagih. Diseduh niat, disajikan nikmat. 5+ outlet buat jadi basecamp lo.",
      },
      { property: "og:title", content: "SXN Caffe — Great Coffee, Crafted for Your Vibe." },
      {
        property: "og:description",
        content: "Racikan kopi SXN yang nagih. 5+ outlet buat jadi basecamp lo.",
      },
    ],
  }),
  component: Home,
});

// Ambil list unik 'area' dari data STORES secara otomatis
const AREAS = ["Semua", ...Array.from(new Set(STORES.map((s) => s.area)))] as const;

// Logic biar kamera peta bisa terbang pas toko diklik
function MapController({ target }: { target: { lat: number; lng: number } | null }) {
  const map = useMap();
  useEffect(() => {
    if (target) map.flyTo([target.lat, target.lng], 15, { animate: true, duration: 1.2 });
  }, [target, map]);
  return null;
}

// Logic bikin Pin biru
const customPin = new L.DivIcon({
  className: "custom-pin",
  html: `<div style="background-color:#2563eb; width:26px; height:26px; border-radius:50%; border:3px solid white; box-shadow:0 4px 6px rgba(0,0,0,0.3); display:grid; place-items:center;"><div style="width:8px; height:8px; background:white; border-radius:50%;"></div></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
  popupAnchor: [0, -14],
});

function Home() {
  const [query, setQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("Semua");
  const [active, setActive] = useState<Store>(STORES[0]);
  const { q } = Route.useSearch();

  useEffect(() => {
    setQuery(q || "");
  }, [q]);

  const filtered = useMemo(() => {
    const searchQ = query.trim().toLowerCase();
    return STORES.filter((s) => {
      const matchQ =
        !searchQ ||
        s.name.toLowerCase().includes(searchQ) ||
        s.area.toLowerCase().includes(searchQ) ||
        s.address.toLowerCase().includes(searchQ);
      const matchA = selectedArea === "Semua" || s.area === selectedArea;
      return matchQ && matchA;
    });
  }, [query, selectedArea]);

  return (
    <SiteLayout>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden -mt-16 pt-15 pb-32 lg:pb-36">
        <div
          className="absolute -top-32 -right-32 h-[520px] w-[520px] rounded-full bg-electric/10 blur-3xl"
          aria-hidden
        />
        <div
          className="absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full bg-cobalt/10 blur-3xl"
          aria-hidden
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 grid lg:grid-cols-12 gap-10 items-center">
          {/* Sisi Teks */}
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-soft px-4 py-1.5 text-xs font-semibold text-cobalt-deep">
              <Sparkles className="h-3.5 w-3.5 text-electric" />
              Gen-Z Punya Selera
            </span>
            <h1 className="mt-5 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance">
              Great Coffee, <br />
              <span className="inline-flex items-center gap-2">
                Crafted for{" "}
                <span className="relative inline-flex">
                  <span className="relative z-10">Your Vibe.</span>
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
              Racikan kopi SXN yang nagih. Diseduh niat, disajikan nikmat. <br /> Kini hadir di 5+
              lokasi buat jadi basecamp nongkrong kalian!
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                to="/menu"
                onClick={() => window.scrollTo(0, 0)}
                className="inline-flex items-center gap-2 rounded-full bg-cobalt-deep px-6 py-3 text-sm font-bold text-white hover:bg-cobalt transition shadow-glow"
              >
                Lihat Menu <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Sisi Gambar */}
          <div className="relative lg:col-span-5 flex justify-center lg:justify-end">
            <div
              className="absolute inset-x-12 bottom-8 h-12 rounded-[50%] bg-cobalt/20 blur-2xl"
              aria-hidden
            />
            <img
              src={heroCup}
              alt="Cup kopi SXN Caffe"
              width={1024}
              height={1280}
              className="relative w-[280px] sm:w-[340px] lg:w-[420px] drop-shadow-2xl animate-[float_5s_ease-in-out_infinite]"
            />
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="relative z-20 mx-auto max-w-5xl px-2 sm:px-6 lg:px-8 -mt-10 sm:-mt-12">
        <div className="rounded-2xl sm:rounded-full bg-cobalt-deep font-normal text-white grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10 overflow-hidden shadow-card">
          <StatItem
            icon={<MapPin className="h-4 w-4 text-electric" />}
            value="5+ Titik"
            label="Basecamp Nongkrong"
          />
          <StatItem
            icon={<ChefHat className="h-4 w-4 text-electric" />}
            value="100% Racikan"
            label="Fresh & Handcrafted"
          />
          <StatItem
            icon={<Clock className="h-4 w-4 text-electric" />}
            value="8am – 10pm"
            label="Buka Setiap Hari"
          />
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-12">
        <div className="flex items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="font-display font-extrabold text-cobalt-deep text-3xl sm:text-4xl">
              Best Sellers
            </h2>
          </div>
          <Link
            to="/menu"
            onClick={() => window.scrollTo(0, 0)}
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

                {/* Badge Kiri (Flame) */}
                <span className="absolute flex gap-2 top-3 left-3 rounded-tl-lg rounded-br-lg bg-white/90 backdrop-blur-sm text-cobalt-deep text-[10px] font-bold uppercase tracking-[0.02em] px-3 py-1 shadow-sm">
                  <Flame className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 text-cobalt-deep" />
                  {item.badge}
                </span>

                {/* Badge Kanan (Rating Bintang) */}
                <span className="absolute flex items-center gap-1.5 top-3 right-3 rounded-tr-lg rounded-bl-lg bg-black/20 backdrop-blur-sm text-white text-[10px] font-bold px-2.5 py-1 shadow-sm">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  5.0
                </span>
              </div>

              <div  className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="font-display font-bold text-lg text-cobalt-deep group-hover:text-electric transition-colors">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{item.desc}</p>
                </div>
                <div id="store"  className="mt-4 flex items-center justify-between">
                  <span className="font-extrabold text-cobalt-deep">{formatRp(item.price)}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* STORE LOCATOR - MAPS & SEARCH FORMAL */}
      <section  className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-border/60 pb-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3.5 py-1.5 border border-border/40">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-electric shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
              </span>
              <span className="text-xs font-semibold uppercase tracking-wider text-cobalt-deep">
                Find SXN Caffe Near You
              </span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-cobalt-deep tracking-tight">
              Outlet SXN Caffe
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Temukan outlet terdekat dari lokasi Anda dan nikmati sajian kopi berkualitas <br />{" "}
              yang diracik khusus oleh barista kami.
            </p>
          </div>
          <div className="hidden md:block shrink-0 pb-2">
            <div className="text-xs font-bold text-cobalt bg-secondary/80 px-4 py-2 rounded-xl border border-border/60">
              5+ Active Basecamp Locations
            </div>
          </div>
        </div>
      </section>

      {/* STORE LOCATOR - MAPS & SEARCH (COMPACT & CLEAN) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 grid lg:grid-cols-12 gap-6 items-start">
        {/* Kolom Peta di Kiri (Lebih pas, tinggi proporsional) */}
        <div className="lg:col-span-7 order-2 lg:order-1">
          <div className="rounded-2xl overflow-hidden border border-border bg-white shadow-sm relative">
            <div className="aspect-[4/3] lg:h-[500px] relative w-full">
              <div className="absolute inset-0 h-full w-full bg-cobalt-deep z-0">
                <MapContainer
                  center={[active?.lat || -7.8145, active?.lng || 110.9264]}
                  zoom={14}
                  scrollWheelZoom={false}
                  style={{ width: "100%", height: "100%" }}
                >
                  <TileLayer
                    attribution="&copy; CARTO"
                    url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                  />
                  <MapController target={active} />
                  {filtered.map((store) => (
                    <Marker
                      key={store.id}
                      position={[store.lat, store.lng]}
                      icon={customPin}
                      eventHandlers={{ click: () => setActive(store) }}
                    >
                      <Popup className="custom-popup">
                        <div className="p-2 text-cobalt-deep">
                          <p className="font-bold font-display text-sm m-0">{store.name}</p>
                          <p className="text-[11px] text-gray-600 leading-tight mt-1">
                            {store.address}
                          </p>
                          <a
                            href={store.gmaps}
                            target="_blank"
                            rel="noreferrer"
                            className="mt-2 inline-flex items-center gap-1 text-[10px] font-bold bg-cobalt-deep text-white px-3 py-1 rounded-full no-underline"
                          >
                            Rute <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>

              {/* Floating Active Store Info Card di dalam Map */}
              {active && (
                <div className="absolute bottom-3 left-3 right-3 z-[40] rounded-xl bg-white/95 backdrop-blur-md border border-border p-3 shadow-md flex items-center justify-between gap-3 pointer-events-auto">
                  <div className="min-w-0 flex-1">
                    <h3 className="font-display font-bold text-cobalt-deep text-sm truncate">
                      {active.name}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">
                      {active.address}
                    </p>
                  </div>
                  <a
                    href={active.gmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 rounded-lg bg-cobalt-deep text-white hover:bg-electric text-xs font-bold px-3 py-2 transition-all"
                  >
                    <Navigation className="h-3 w-3" /> Maps
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Kolom List & Search di Kanan (Ringkas, pas, tidak terlalu panjang) */}
        <div className="lg:col-span-5 order-1 lg:order-2 space-y-3">
          {/* Search & Filter Box */}
          <div className="rounded-2xl bg-white border border-border p-3.5 shadow-sm space-y-3">
            <div className="flex items-center gap-2.5 rounded-xl bg-secondary px-3.5 py-2 border border-border/40 focus-within:border-electric transition-all">
              <Search className="h-4 w-4 text-cobalt-deep/50 shrink-0" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari lokasi outlet atau area..."
                className="flex-1 bg-transparent outline-none text-xs sm:text-sm text-cobalt-deep placeholder:text-muted-foreground font-medium"
              />
            </div>

            {/* Area Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {AREAS.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelectedArea(a)}
                  className={`rounded-lg px-3 py-1 text-xs font-bold transition-all ${
                    selectedArea === a
                      ? "bg-cobalt-deep text-white shadow-xs"
                      : "bg-secondary text-cobalt-deep hover:bg-electric-soft"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Stores List Scrollable */}
          <div className="space-y-2.5 max-h-[420px] overflow-y-auto pr-1 [scrollbar-width:thin]">
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-6 text-center text-xs text-muted-foreground bg-white">
                Lokasi tidak ditemukan. Coba kata kunci lain.
              </div>
            )}
            {filtered.map((s) => {
              const isActive = active?.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className={`w-full text-left cursor-pointer rounded-2xl p-3.5 transition-all duration-200 flex items-start gap-3 ${
                    isActive
                      ? "bg-white border-2 border-electric shadow-sm"
                      : "bg-white border border-border hover:border-electric/40"
                  }`}
                >
                  <div
                    className={`grid h-8 w-8 place-items-center rounded-full shrink-0 mt-0.5 transition-colors ${
                      isActive ? "bg-cobalt-deep text-white" : "bg-secondary text-cobalt-deep"
                    }`}
                  >
                    <MapPin className="h-3.5 w-3.5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-display font-bold text-cobalt-deep text-xs sm:text-sm truncate">
                        {s.name}
                      </h3>
                      <span className="shrink-0 rounded bg-secondary text-cobalt-deep font-bold px-2 py-0.5 text-[10px]">
                        {s.area}
                      </span>
                    </div>
                    <p className="text-[11px] text-muted-foreground line-clamp-1 leading-relaxed">
                      {s.address}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>
      {/* TESTIMONIALS SECTION (RUNNING MARQUEE) */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 my-12 overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-electric-soft px-4 py-1.5 text-xs font-semibold text-cobalt-deep">
              <Sparkles className="h-3.5 w-3.5 text-electric" />
              Ulasan Pelanggan
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-cobalt-deep tracking-tight">
              Apa Kata Mereka <br /> yang Sering Nongkrong?
            </h2>
          </div>
          <p className="text-muted-foreground text-right text-sm sm:text-base max-w-lg">
            Cerita seru dari para pelanggan setia yang selalu menjadikan <br /> SXN Caffe sebagai
            pilihan utama mereka setiap hari.
          </p>
        </div>

        {/* Marquee Running Container */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_5%,white_95%,transparent)]">
          <div className="flex w-max animate-[marquee_35s_linear_infinite] gap-6 hover:[animation-play-state:paused]">
            {[
              {
                name: "Rehan Pradana",
                role: "Mahasiswa & Content Creator",
                comment:
                  "Tempat paling nyaman buat ngerjain tugas atau editing video. Kopinya bener-bener konsisten rasanya dan Wi-Fi nya kenceng!",
                rating: "4.5",
              },
              {
                name: "Sarah Anindya",
                role: "Pekerja Kreatif",
                comment:
                  "Suasana outletnya estetik parah dan barista-nya ramah banget. Paling suka pesan Artisan Coffee-nya pas sore hari.",
                rating: "5.0",
              },
              {
                name: "Dimas Anggara",
                role: "Penikmat Kopi",
                comment:
                  "Racikan biji kopinya berasa banget kualitasnya. Harganya juga masih sangat masuk akal buat anak muda.",
                rating: "4.9",
              },
              {
                name: "Nabila Zahra",
                role: "Mahasiswi Desain",
                comment:
                  "Sumpah ini basecamp paling cozy buat nyari inspirasi sambil ngemil pastry-nya yang enak banget. Recommended!",
                rating: "5.0",
              },
              // Duplikasi untuk kelancaran animasi looping infinite
              {
                name: "Rehan Pradana",
                role: "Mahasiswa & Content Creator",
                comment:
                  "Tempat paling nyaman buat ngerjain tugas atau editing video. Kopinya bener-bener konsisten rasanya dan Wi-Fi nya kenceng!",
                rating: "4.5",
              },
              {
                name: "Sarah Anindya",
                role: "Pekerja Kreatif",
                comment:
                  "Suasana outletnya estetik parah dan barista-nya ramah banget. Paling suka pesan Artisan Coffee-nya pas sore hari.",
                rating: "5.0",
              },
              {
                name: "Dimas Anggara",
                role: "Penikmat Kopi",
                comment:
                  "Racikan biji kopinya berasa banget kualitasnya. Harganya juga masih sangat masuk akal buat anak muda.",
                rating: "4.9",
              },
              {
                name: "Nabila Zahra",
                role: "Mahasiswi Desain",
                comment:
                  "Sumpah ini basecamp paling cozy buat nyari inspirasi sambil ngemil pastry-nya yang enak banget. Recommended!",
                rating: "5.0",
              },
            ].map((testi, idx) => (
              <div
                key={idx}
                className="w-[320px] sm:w-[380px] mb-24 shrink-0 rounded-3xl bg-white border border-border/80 p-7 shadow-sm hover:shadow-glow hover:border-electric/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cobalt bg-secondary px-2.5 py-1 rounded-full">
                      sxn review
                    </span>
                  </div>
                  <p className="text-sm text-cobalt-deep/80 leading-relaxed font-normal">
                    &ldquo;{testi.comment}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-border/60 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="h-10 w-10 rounded-2xl bg-cobalt-deep text-white font-bold flex items-center justify-center text-xs shrink-0 shadow-sm">
                      {testi.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display font-bold text-cobalt-deep text-sm truncate">
                        {testi.name}
                      </h4>
                      <p className="text-[11px] text-muted-foreground truncate">{testi.role}</p>
                    </div>
                  </div>
                  <div className="shrink-0">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-cobalt-deep ml-1">
                        {testi.rating}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SXN PRIORITAS SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 my-12">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-tr-xl rounded-bl-xl bg-black px-4 py-1.5 text-xs font-semibold text-white border border-white/10 shadow-lg">
              <span className="bg-gradient-to-r from-white via-gray-400 to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_2s_linear_infinite]">
                SXN Prioritas
              </span>
            </span>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-cobalt-deep tracking-tight">
              Fasilitas Khusus Tanpa Ribet, Nongkrong Makin Maksimal.
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
              Layanan eksklusif buat lo yang pengen serba cepat, nyaman, dan dapet privilege lebih
              di setiap kunjungan ke basecamp SXN Caffe.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-cobalt-deep">
              <div className="flex items-center gap-1.5 bg-secondary px-3.5 py-2 rounded-xl border border-border/60">
                ⚡ Fast Lane Service
              </div>
              <div className="flex items-center gap-1.5 bg-secondary px-3.5 py-2 rounded-xl border border-border/60">
                🛋️ VIP Reserved Spot
              </div>
            </div>
          </div>

         <div className="lg:col-span-6">
            <div className="rounded-3xl bg-secondary/50 border border-border/80 border border-white/10 p-6 sm:p-8 shadow-card space-y-6 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mt-12 -mr-12 h-48 w-48 rounded-full bg-electric/20 blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between border-b border-white/10 pb-4 relative z-10">
                <div className="flex items-center gap-3">
                
                  <div>
                    <h4 className="font-display font-bold text-black text-sm">
                      Privilege Member Prioritas
                    </h4>
                    <p className="text-xs text-black/60">Nikmati kenyamanan tanpa batas</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold bg-white/10 text-electric px-3 py-1 rounded-full border border-white/10 backdrop-blur-md">
                  Active Access
                </span>
              </div>

              <div className="space-y-3 relative z-10">
                {[
                  {
                    num: "01",
                    title: "Fast Lane Ordering",
                    desc: "Akses jalur khusus pemesanan tanpa antre lama di kasir.",
                    badge: "Instant",
                  },
                  {
                    num: "02",
                    title: "Reserved Working Spot",
                    desc: "Garansi meja strategis dengan colokan terdekat & Wi-Fi prioritas.",
                    badge: "Guaranteed",
                  },
                  {
                    num: "03",
                    title: "Express Barista Queue",
                    desc: "Pesanan kopi racikan lo diprioritaskan untuk diseduh lebih awal.",
                    badge: "Priority",
                  },
                ].map((item, i) => (
                 <div
                    key={i}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-secondary/30 border border-border/40 hover:border-electric/40 transition-all group"
                  >
                    <span className="font-display font-extrabold text-xl text-cobalt/30 group-hover:text-electric transition-colors shrink-0 pt-0.5">
                      {item.num}
                    </span>
                    <div className="min-w-0 flex-1 space-y-0.1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="text-xs sm:text-sm font-bold text-cobalt-deep">{item.title}</p>
                        <span className="text-[10px] font-light text-black">
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
          @keyframes shimmer {
    0% { background-position: 200% 0; }
    100% { background-position: -200% 0; }
  }
      `}</style>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

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
