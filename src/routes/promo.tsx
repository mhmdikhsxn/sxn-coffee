import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X, Copy, Check } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import promo1 from "@/assets/promo-1.jpg";
import promo2 from "@/assets/promo-2.jpg";
import menuCoffees from "@/assets/menu-coffees.jpg";

export const Route = createFileRoute("/promo")({
  head: () => ({
    meta: [
      { title: "Promo — Paman Besar" },
      { name: "description", content: "Hemat bareng Paman. Promo dine-in, app, dan bank tiap minggu." },
      { property: "og:title", content: "Promo — Paman Besar" },
      { property: "og:description", content: "Promo mingguan Paman Besar." },
    ],
  }),
  component: PromoPage,
});

type Tag = "Dine-In Only" | "App Only" | "Bank Promo";
type Promo = {
  id: string;
  image: string;
  tag: Tag;
  title: string;
  validity: string;
  code?: string;
  terms: string[];
};

const PROMOS: Promo[] = [
  { id: "p1", image: promo1, tag: "Bank Promo", title: "Diskon 30% Tiap Senin", validity: "Berlaku s/d 31 Des 2026", code: "PAMANBANK30", terms: ["Khusus transaksi dengan kartu debit BCA / Mandiri.", "Minimum transaksi Rp 50.000.", "Tidak bisa digabung promo lain."] },
  { id: "p2", image: promo2, tag: "App Only", title: "Buy 1 Get 1 Es Kopi Aren", validity: "Setiap Jumat", code: "JUMATSAUDARA", terms: ["Khusus order via aplikasi Paman Besar.", "Item kedua gratis dengan harga sama / lebih rendah.", "Berlaku 10.00 – 17.00."] },
  { id: "p3", image: menuCoffees, tag: "Dine-In Only", title: "Free Croissant Pembelian Coffee", validity: "Weekend Only", terms: ["Khusus dine-in di seluruh outlet.", "Min. pembelian 1 signature coffee size large.", "1 croissant per transaksi."] },
  { id: "p4", image: promo1, tag: "App Only", title: "Cashback 25% Member Baru", validity: "30 hari pertama", code: "PAMANBARU", terms: ["Khusus member baru.", "Maks cashback Rp 25.000."] },
];

const TAG_STYLE: Record<Tag, string> = {
  "Dine-In Only": "bg-cobalt-deep text-white",
  "App Only": "bg-electric text-white",
  "Bank Promo": "bg-amber-500 text-white",
};

function PromoPage() {
  const [filter, setFilter] = useState<"All" | Tag>("All");
  const [modal, setModal] = useState<Promo | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const filtered = PROMOS.filter((p) => filter === "All" || p.tag === filter);

  const copy = async (code: string) => {
    await navigator.clipboard.writeText(code);
    setCopied(code);
    setTimeout(() => setCopied(null), 1500);
  };

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-electric">Promo aktif</p>
        <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl">Hemat Bareng Paman</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">Tinggal pilih promo, salin kode, dan nikmati kopi favorit kamu.</p>

        <div className="mt-7 flex flex-wrap gap-2">
          {(["All", "Dine-In Only", "App Only", "Bank Promo"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                filter === t
                  ? "bg-cobalt-deep text-white"
                  : "bg-white border border-border text-cobalt-deep hover:border-electric"
              }`}
            >
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <article key={p.id} className="rounded-2xl bg-white border border-border overflow-hidden shadow-card hover:shadow-glow hover:border-electric/40 transition group">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <span className={`absolute top-3 left-3 rounded-full text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${TAG_STYLE[p.tag]}`}>{p.tag}</span>
            </div>
            <div className="p-5">
              <h3 className="font-display font-bold text-lg text-cobalt-deep">{p.title}</h3>
              <p className="mt-1 text-xs text-muted-foreground">{p.validity}</p>
              <div className="mt-4 flex gap-2">
                {p.code && (
                  <button
                    onClick={() => copy(p.code!)}
                    className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-cobalt-deep text-white text-xs font-bold py-2.5 hover:bg-electric transition"
                  >
                    {copied === p.code ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
                    {copied === p.code ? "Tersalin!" : p.code}
                  </button>
                )}
                <button
                  onClick={() => setModal(p)}
                  className="rounded-full border border-border text-cobalt-deep text-xs font-bold px-4 hover:bg-secondary transition"
                >
                  S&K
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>

      {modal && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-cobalt-deep/60 backdrop-blur-sm p-4" onClick={() => setModal(null)}>
          <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl p-6" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setModal(null)} className="absolute top-4 right-4 grid h-9 w-9 place-items-center rounded-full hover:bg-secondary" aria-label="Close">
              <X className="h-4 w-4" />
            </button>
            <span className={`inline-block rounded-full text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 ${TAG_STYLE[modal.tag]}`}>{modal.tag}</span>
            <h3 className="mt-3 font-display font-extrabold text-2xl text-cobalt-deep">{modal.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{modal.validity}</p>
            <div className="mt-5">
              <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-wider mb-2">Syarat & Ketentuan</p>
              <ul className="space-y-2 text-sm text-cobalt-deep">
                {modal.terms.map((t, i) => (
                  <li key={i} className="flex gap-2"><span className="text-electric">•</span> {t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
