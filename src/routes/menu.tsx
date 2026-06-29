import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Coffee, X, Flame } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { CATEGORIES, formatRp, type MenuItem } from "@/lib/menu-data";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Paman Besar" },
      {
        name: "description",
        content:
          "Signature Coffee, Non-Coffee, Artisan Bakery, Heavy Meals, dan Snacks ala Paman Besar.",
      },
      { property: "og:title", content: "Menu — Paman Besar" },
      {
        property: "og:description",
        content: "Semua menu Paman Besar, lengkap dengan kalori & komposisi.",
      },
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
      { rootMargin: "-30% 0px -55% 0px", threshold: 0 },
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
        <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl">
          Menu Paman Besar
        </h1>
        <p className="mt-1 max-w-3xl text-muted-foreground">
          Dari signature coffee sampai heavy meals, semua disajikan dengan kehangatan khas paman.
        </p>
      </section>

     {/* Mobile sticky chip nav */}
<div className="lg:hidden sticky top-18 z-40 w-full bg-background/85 backdrop-blur-md border-y border-border">
  {/* Jalur Scroll (Sembunyikan scrollbar jelek bawaan HP) */}
  <div className="overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-3">
    {/* Wadah Konten (w-max memaksa panjangnya pas sesuai jumlah tombol) */}
    <div className="flex gap-2 px-4 w-max">
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
</div>

      {/* 12-col layout */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-12 gap-8 pb-20">
        <div className="col-span-12 lg:col-span-9 space-y-16">
          {CATEGORIES.map((cat) => (
            <section
              key={cat.id}
              id={cat.id}
              ref={(el) => {
                sectionRefs.current[cat.id] = el;
              }}
              className="scroll-mt-32"
            >
              <div className="flex items-baseline gap-3 mb-6">
                <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-cobalt-deep">
                  {cat.label}
                </h2>
                <span className="text-xs font-semibold text-muted-foreground">
                 ( {cat.items.length} items )
                </span>
              </div>

              {/* FIX MOBILE: grid-cols-2 di HP, 3 di PC */}
              <div className="grid grid-cols-2 xl:grid-cols-3 gap-3.5 sm:gap-5">
                {cat.items.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className="text-left cursor-pointer group rounded-xl sm:rounded-2xl bg-white border border-border overflow-hidden hover:shadow-glow hover:border-electric/40 transition-all flex flex-col h-full"
                  >
                    <div className="aspect-[4/3] bg-gradient-to-br from-cobalt-deep to-electric relative w-full overflow-hidden">
                      {/* Cek ada gambar atau pakai fallback Coffee Icon */}
                      {(item as any).img ? (
                        <img 
                          src={(item as any).img} 
                          alt={item.name} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      ) : (
                        <div className="absolute inset-0 grid place-items-center text-white/25">
                          <Coffee className="h-12 sm:h-16 w-12 sm:w-16 group-hover:scale-110 transition-transform" />
                        </div>
                      )}

                      {item.badge && (
                        <span className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 inline-flex items-center justify-center gap-1 rounded-tl-md rounded-br-md sm:rounded-tl-lg sm:rounded-br-lg bg-white px-2 py-1 sm:px-2.5 sm:py-1.5 text-[9px] sm:text-[10px] font-semibold leading-none uppercase tracking-[0.02em] text-cobalt-deep z-10 shadow-sm">
                          {item.badge === "Best Seller" && (
                            <Flame className="h-2.5 w-2.5 sm:h-3 sm:w-3 shrink-0 text-electric" />
                          )}
                          <span>{item.badge}</span>
                        </span>
                      )}
                    </div>

                    <div className="p-3 sm:p-4 flex flex-col flex-grow justify-between w-full">
                      <div>
                        <h3 className="font-display font-bold text-sm sm:text-base text-cobalt-deep line-clamp-1">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-[11px] sm:text-xs text-muted-foreground line-clamp-2">
                          {item.desc}
                        </p>
                      </div>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="font-extrabold text-cobalt-deep text-xs sm:text-sm">
                          {formatRp(item.price)}
                        </span>
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
            <p className="text-[14px] font-bold text-center uppercase tracking-[0.02em] text-foreground mb-3">
              Kategori Menu
            </p>
            <nav className="flex flex-col divide-y divide-border/50">
  {CATEGORIES.map((c) => {
    const active = activeId === c.id;
    return (
      <a
        key={c.id}
        href={`#${c.id}`}
        onClick={(e) => handleAnchor(e, c.id)}
        className={`flex items-center justify-between px-3 py-2 rounded-sm text-sm font-semibold transition ${
          active
            ? "bg-cobalt/10 text-cobalt-deep"
            : "text-cobalt-deep/80 hover:bg-secondary"
        }`}
      >
        <span>{c.label}</span>
      </a>
    );
  })}
</nav>
            <div className="mt-5 pt-5 border-t text-center border-border text-xs text-muted-foreground">
              Klik produk untuk melihat{" "} <br />
              <span className="font-semibold text-cobalt-deep">komposisi & rasa</span>.
            </div>
          </div>
        </aside>
      </section>

      {/* Modal - MOBILE OPTIMIZED */}
      {selected && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 backdrop-blur-sm p-4 sm:p-6 animate-in fade-in"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute cursor-pointer top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 grid h-8 w-8 sm:h-9 sm:w-9 place-items-center rounded-full bg-white/90 text-cobalt-deep hover:bg-cobalt hover:text-white transition shadow-md"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Gambar Modal */}
            <div className="aspect-[16/10] bg-gradient-to-br from-cobalt-deep to-electric relative shrink-0 w-full overflow-hidden">
              {(selected as any).img ? (
                <img 
                  src={(selected as any).img} 
                  alt={selected.name} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full grid place-items-center text-white/30">
                  <Coffee className="h-20 sm:h-24 w-20 sm:w-24" />
                </div>
              )}
            </div>

            {/* Isi Konten Modal (Bisa di-scroll kalau layar HP pendek) */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-4">
              <div className="flex flex-col items-center w-full border-b border-border/60 pb-3">
  <h3 className="font-display text-center font-extrabold text-xl sm:text-2xl text-cobalt-deep">
    {selected.name}
  </h3>
</div>

              <div>
                <p className="text-xs sm:text-[13px] font-semibold tracking-[0.04em] text-foreground">
                  Rasa :
                </p>
                <p className="text-sm text-cobalt-deep font-mono font-medium leading-relaxed">
                  {selected.desc}
                </p>
              </div>

              <div>
              <p className="text-xs sm:text-[13px] font-semibold tracking-[0.04em] text-foreground">
                  Komposisi :
                </p>
                <p className="text-sm text-cobalt-deep font-mono leading-relaxed">
                  {selected.composition || "Ekstrak kopi rahasia Paman Besar, bahan pilihan berkualitas."}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}