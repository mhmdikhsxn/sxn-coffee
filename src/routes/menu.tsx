import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Coffee, X, Flame } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CATEGORIES, formatRp, type MenuItem } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Paman Besar" },
      { name: "description", content: "Signature Coffee, Non-Coffee, Artisan Bakery, Heavy Meals, dan Snacks ala Paman Besar." },
      { property: "og:title", content: "Menu — Paman Besar" },
      { property: "og:description", content: "Semua menu Paman Besar, lengkap dengan kalori & komposisi." },
    ],
  }),
  component: MenuPage,
});

function MenuPage() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const [selected, setSelected] = useState<MenuItem | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // pick the topmost intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 }
    );
    Object.values(sectionRefs.current).forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleAnchor = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 130;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <SiteLayout>
      {/* Page header */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-electric">Eksplor</p>
        <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl">Menu Paman Besar</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Dari signature coffee sampai heavy meals — semua disajikan dengan kehangatan khas paman.
        </p>
      </section>

      {/* Mobile sticky chip nav */}
      <div className="lg:hidden sticky top-16 z-40 bg-background/85 backdrop-blur-md border-y border-border">
        <div className="overflow-x-auto whitespace-nowrap flex gap-2 px-4 py-3">
          {CATEGORIES.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              onClick={(e) => handleAnchor(e, c.id)}
              className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold transition ${
                activeId === c.id
                  ? "bg-cobalt-deep text-white"
                  : "bg-white border border-border text-cobalt-deep"
              }`}
            >
              {c.label}
            </a>
          ))}
        </div>
      </div>

      {/* 12-col layout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-8 pb-20">
        <div className="col-span-12 lg:col-span-9 space-y-16">
          {CATEGORIES.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => { sectionRefs.current[cat.id] = el; }}
              className="scroll-mt-32"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-cobalt-deep">{cat.label}</h2>
                <span className="text-xs font-semibold text-muted-foreground">{cat.items.length} items</span>
              </div>

              <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
                {cat.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="text-left group rounded-2xl bg-white border border-border overflow-hidden hover:shadow-glow hover:border-electric/40 transition-all"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-cobalt-deep to-electric relative">
                      <div className="absolute inset-0 grid place-items-center text-white/25">
                        <Coffee className="h-16 w-16 group-hover:scale-110 transition-transform" />
                      </div>
                      {item.badge && (
                        <span className="absolute top-3 left-3 rounded-full bg-white text-cobalt-deep text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 flex items-center gap-1">
                          {item.badge === "Best Seller" && <Flame className="h-3 w-3 text-electric" />}
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="font-display font-bold text-base text-cobalt-deep">{item.name}</h3>
                      <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{item.desc}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-extrabold text-cobalt-deep">{formatRp(item.price)}</span>
                        <span className="text-[10px] text-muted-foreground">{item.kcal} kcal</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </section>
          ))}
        </div>

        {/* Desktop aside */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-24 rounded-2xl bg-white border border-border p-5 shadow-card">
            <p className="text-[10px] font-bold uppercase tracking-widest text-electric mb-3">Kategori Menu</p>
            <nav className="flex flex-col gap-1">
              {CATEGORIES.map((c) => {
                const active = activeId === c.id;
                return (
                  <a
                    key={c.id}
                    href={`#${c.id}`}
                    onClick={(e) => handleAnchor(e, c.id)}
                    className={`flex items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold transition ${
                      active
                        ? "bg-electric-soft text-electric"
                        : "text-cobalt-deep/80 hover:bg-secondary"
                    }`}
                  >
                    <span>{c.label}</span>
                    <span className={`h-1.5 w-1.5 rounded-full transition ${active ? "bg-electric" : "bg-transparent"}`} />
                  </a>
                );
              })}
            </nav>
            <div className="mt-5 pt-5 border-t border-border text-xs text-muted-foreground">
              Klik kartu menu untuk lihat <span className="font-semibold text-cobalt-deep">kalori & komposisi</span>.
            </div>
          </div>
        </aside>
      </section>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-cobalt-deep/60 backdrop-blur-sm p-4 animate-in fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-cobalt-deep hover:bg-electric hover:text-white transition"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="aspect-[16/10] bg-gradient-to-br from-cobalt-deep to-electric grid place-items-center text-white/30">
              <Coffee className="h-24 w-24" />
            </div>
            <div className="p-6">
              <h3 className="font-display font-extrabold text-2xl text-cobalt-deep">{selected.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{selected.desc}</p>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-secondary p-3">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Harga</p>
                  <p className="font-extrabold text-cobalt-deep mt-1">{formatRp(selected.price)}</p>
                </div>
                <div className="rounded-xl bg-secondary p-3">
                  <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider">Kalori</p>
                  <p className="font-extrabold text-cobalt-deep mt-1">{selected.kcal} kcal</p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-1">Komposisi</p>
                <p className="text-sm text-cobalt-deep">{selected.composition}</p>
              </div>

              <button className="mt-6 w-full rounded-full bg-cobalt-deep text-white font-bold py-3 hover:bg-electric transition">
                Pesan via Outlet Terdekat
              </button>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
