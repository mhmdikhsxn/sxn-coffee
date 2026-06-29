import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { Search, MapPin, Navigation, Map as MapIcon, ExternalLink } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { STORES, type Store } from "@/lib/store-data";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";

interface StoreSearch {
  q?: string; // Tanda '?' ini yang membuat 'q' menjadi opsional
}

export const Route = createFileRoute("/store-location")({
  validateSearch: (search: Record<string, unknown>): StoreSearch => {
    return {
      q: (search.q as string) || undefined,
    };
  },

  head: () => ({
    meta: [
      { title: "Find a Store — Paman Besar" },
      {
        name: "description",
        content: "15+ store Paman Besar di seluruh Indonesia. Cari yang terdekat dari kamu.",
      },
      { property: "og:title", content: "Find a Store — Paman Besar" },
      { property: "og:description", content: "Cari store Paman Besar terdekat." },
    ],
  }),
  component: FindStorePage,
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

// Logic bikin Pin biru anti-error Vite
const customPin = new L.DivIcon({
  className: "custom-pin",
  html: `<div style="background-color:#2563eb; width:26px; height:26px; border-radius:50%; border:3px solid white; box-shadow:0 4px 6px rgba(0,0,0,0.3); display:grid; place-items:center;"><div style="width:8px; height:8px; background:white; border-radius:50%;"></div></div>`,
  iconSize: [26, 26],
  iconAnchor: [13, 13],
  popupAnchor: [0, -14],
});

function FindStorePage() {
  const [query, setQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("Semua");
  const [active, setActive] = useState<Store>(STORES[0]);
const { q } = Route.useSearch();

  useEffect(() => {
    setQuery(q || "");
  }, [q]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STORES.filter((s) => {
      const matchQ =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.area.toLowerCase().includes(q) ||
        s.address.toLowerCase().includes(q);
      const matchA = selectedArea === "Semua" || s.area === selectedArea;
      return matchQ && matchA;
    });
  }, [query, selectedArea]);

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl">
          Store Paman Besar
        </h1>
        <p className="mt-1 max-w-2xl text-muted-foreground">
          5+ store siap menyambut. Cari yang paling dekat dari rumah atau sekolah kamu.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8  grid lg:grid-cols-5 gap-6">
        {/* List column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-white border border-border p-4 shadow-card">
            <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
              <Search className="h-4 w-4 text-cobalt-deep/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari store / area..."
                className="flex-1 bg-transparent outline-none text-sm text-cobalt-deep placeholder:text-cobalt-deep/40"
              />
            </div>

            {/* Filter berdasarkan Area (Wonogiri, Sukoharjo, dll) */}
            <div className="mt-3 flex flex-wrap gap-2">
              {AREAS.map((a) => (
                <button
                  key={a}
                  onClick={() => setSelectedArea(a)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                    selectedArea === a
                      ? "bg-cobalt-deep text-white"
                      : "bg-secondary text-cobalt-deep hover:bg-electric-soft"
                  }`}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1 [scrollbar-width:thin]">
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                Store tidak ditemukan. Coba kata kunci lain.
              </div>
            )}
            {filtered.map((s) => {
              const isActive = active?.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className={`w-full text-left cursor-pointer rounded-2xl bg-white border p-5 transition-all ${
                    isActive
                      ? "border-electric shadow-glow"
                      : "border-border hover:border-electric/40"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    {/* Icon Container */}
                    <div
                      className={`grid h-10 w-10 place-items-center rounded-full shrink-0 ${
                        isActive ? "bg-cobalt-deep/90 text-white" : "bg-cobalt/10 text-cobalt-deep"
                      }`}
                    >
                      <MapPin className="h-4 w-4" />
                    </div>

                    {/* Content Container */}
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <h3 className="font-display font-bold text-cobalt-deep truncate">
                          {s.name}
                        </h3>
                        <span className="shrink-0 rounded-[0.4em] bg-cobalt-deep/10 text-cobalt font-bold px-2 py-0.5 text-[10px] w-fit">
                          {s.area}
                        </span>
                      </div>

                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed line-clamp-2">
                        {s.address}
                      </p>

                      {/* Tombol Rute dibuat lebih proporsional */}
                      <a
                        href={s.gmaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-secondary text-cobalt-deep text-[11px] font-bold px-3 py-2 hover:bg-cobalt-deep hover:text-white transition w-full sm:w-auto justify-center"
                      >
                        <Navigation className="h-3 w-3" /> Buka di Google Maps
                      </a>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Map column */}
        <div className="lg:col-span-3">
          <div className="sticky top-24 rounded-2xl overflow-hidden border border-border bg-white shadow-card">
            <div className="aspect-[4/3] lg:aspect-auto lg:h-[640px] relative">
              <div className="absolute inset-0 h-full w-full bg-cobalt-deep z-0">
                {/* Gradasi Cobalt Deep di bagian atas */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#F8FAFD] to-transparent z-[1000] pointer-events-none" />

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
                        <div className="-p-15 text-cobalt-deep">
                          <p className="font-bold font-display text-sm m-0">{store.name}</p>
                          <p className="text-[11px] text-gray-600 leading-tight">{store.address}</p>
                          <a
                            href={store.gmaps}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-1 text-[10px] font-bold bg-cobalt-deep/10 text-cobalt-deep px-2.5 py-1 rounded-full no-underline"
                          >
                            Rute <ExternalLink className="h-2.5 w-2.5" />
                          </a>
                        </div>
                      </Popup>
                    </Marker>
                  ))}
                </MapContainer>
              </div>
              {active && (
                <div className="absolute top-4 left-4 right-4 z-[400] rounded-2xl bg-white/95 backdrop-blur-md border border-border p-4 shadow-card flex items-center gap-3 pointer-events-auto">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      {/* Pulse Dot Container */}
                      <div className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-electric shadow-[0_0_8px_rgba(59,130,246,0.6)]"></span>
                      </div>

                      <p className="text-[13px] font-medium tracking-tight text-electric">
                        Sedang ditampilkan
                      </p>
                    </div>
                    <h3 className="font-display font-bold text-cobalt-deep truncate">
                      {active.name}
                    </h3>
                    <p className="text-xs text-muted-foreground truncate">
                      {active.address} ({active.area})
                    </p>
                  </div>
                  <a
                    href={active.gmaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-secondary text-cobalt-deep hover:bg-cobalt-deep hover:text-white text-xs font-bold px-4 py-2  transition"
                  >
                    <Navigation className="h-3 w-3" /> Rute
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}