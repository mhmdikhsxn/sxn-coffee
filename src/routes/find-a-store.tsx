import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, MapPin, Clock, Navigation, Map as MapIcon } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { STORES, type Store } from "@/lib/store-data";

export const Route = createFileRoute("/find-a-store")({
  head: () => ({
    meta: [
      { title: "Find a Store — Paman Besar" },
      { name: "description", content: "15+ outlet Paman Besar di seluruh Indonesia. Cari yang terdekat dari kamu." },
      { property: "og:title", content: "Find a Store — Paman Besar" },
      { property: "og:description", content: "Cari outlet Paman Besar terdekat." },
    ],
  }),
  component: FindStorePage,
});

const FILTERS = ["Semua", "24 Jam", "Ada Mushola"] as const;
type Filter = (typeof FILTERS)[number];

function FindStorePage() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("Semua");
  const [active, setActive] = useState<Store>(STORES[0]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return STORES.filter((s) => {
      const matchQ = !q || s.name.toLowerCase().includes(q) || s.city.toLowerCase().includes(q) || s.address.toLowerCase().includes(q);
      const matchF = filter === "Semua" || s.tags.includes(filter as never);
      return matchQ && matchF;
    });
  }, [query, filter]);

  const directionsUrl = (s: Store) =>
    `https://www.google.com/maps/dir/?api=1&destination=${s.lat},${s.lng}&destination_place_id=${encodeURIComponent(s.name)}`;

  const mapEmbed = `https://www.google.com/maps?q=${active.lat},${active.lng}&z=15&output=embed`;

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-6">
        <p className="text-xs font-bold uppercase tracking-widest text-electric">Find a Store</p>
        <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl">Outlet Paman Besar</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">15+ outlet siap menyambut. Cari yang paling dekat dari rumah atau kantor kamu.</p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 grid lg:grid-cols-5 gap-6">
        {/* List column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="rounded-2xl bg-white border border-border p-4 shadow-card">
            <div className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2.5">
              <Search className="h-4 w-4 text-cobalt-deep/60" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari kota / area..."
                className="flex-1 bg-transparent outline-none text-sm text-cobalt-deep placeholder:text-cobalt-deep/40"
              />
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {FILTERS.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`rounded-full px-3 py-1.5 text-xs font-bold transition ${
                    filter === f ? "bg-cobalt-deep text-white" : "bg-secondary text-cobalt-deep hover:bg-electric-soft"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {filtered.length === 0 && (
              <div className="rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
                Belum ada outlet yang cocok. Coba kata kunci lain.
              </div>
            )}
            {filtered.map((s) => {
              const isActive = active.id === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActive(s)}
                  className={`w-full text-left rounded-2xl bg-white border p-5 transition-all ${
                    isActive ? "border-electric shadow-glow" : "border-border hover:border-electric/40"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`grid h-10 w-10 place-items-center rounded-xl shrink-0 ${isActive ? "bg-electric text-white" : "bg-electric-soft text-electric"}`}>
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="font-display font-bold text-cobalt-deep truncate">{s.name}</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.address}, {s.city}</p>
                      <div className="mt-2 flex items-center gap-3 text-xs">
                        <span className="inline-flex items-center gap-1 text-cobalt-deep/70"><Clock className="h-3 w-3" /> {s.hours}</span>
                        {s.tags.map((t) => (
                          <span key={t} className="rounded-full bg-electric-soft text-electric font-bold px-2 py-0.5 text-[10px]">{t}</span>
                        ))}
                      </div>
                      <a
                        href={directionsUrl(s)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cobalt-deep text-white text-xs font-bold px-4 py-2 hover:bg-electric transition"
                      >
                        <Navigation className="h-3 w-3" /> Get Directions
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
              <iframe
                key={active.id}
                title={`Map of ${active.name}`}
                src={mapEmbed}
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute top-4 left-4 right-4 rounded-2xl bg-white/95 backdrop-blur-md border border-border p-4 shadow-card flex items-start gap-3">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-electric text-white shrink-0">
                  <MapIcon className="h-4 w-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[10px] uppercase font-bold tracking-wider text-electric">Sedang ditampilkan</p>
                  <h3 className="font-display font-bold text-cobalt-deep truncate">{active.name}</h3>
                  <p className="text-xs text-muted-foreground truncate">{active.address}</p>
                </div>
                <a
                  href={directionsUrl(active)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cobalt-deep text-white text-xs font-bold px-4 py-2 hover:bg-electric transition"
                >
                  <Navigation className="h-3 w-3" /> Rute
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
