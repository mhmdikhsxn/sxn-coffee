import { createFileRoute } from "@tanstack/react-router";
import { Coffee, Award, Sprout } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Paman Besar" },
      { name: "description", content: "Cerita di balik nama Paman Besar, journey kami, dan biji kopi pilihan." },
      { property: "og:title", content: "About — Paman Besar" },
      { property: "og:description", content: "Kehangatan paman, dalam skala urban." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { year: "2022", title: "Booth pertama di Senopati", desc: "Dua paman, satu mesin espresso, mimpi besar." },
  { year: "2023", title: "5 outlet di Jabodetabek", desc: "Konsep co-working friendly meledak di kalangan pekerja muda." },
  { year: "2024", title: "Ekspansi ke Bandung & Bali", desc: "Kehangatan paman menjangkau kota wisata." },
  { year: "2025", title: "Launch Paman Big Catering", desc: "Coffee cart bisa dipanggil ke event manapun." },
  { year: "2026", title: "Roastery sendiri di Jakarta Selatan", desc: "Roast-to-order, supply ke 30+ kafe independen." },
];

function AboutPage() {
  return (
    <SiteLayout>
      {/* HEADER SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
        <p className="text-xs font-bold uppercase tracking-[0.02em] text-electric">Our Story</p>
        <h1 className="mt-3 font-display font-extrabold text-cobalt-deep text-4xl sm:text-6xl max-w-3xl leading-[1.1] tracking-tight">
          Kehangatan paman, <br /> dalam skala urban.
        </h1>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24 grid lg:grid-cols-2 gap-8 items-start">
        <div className="rounded-3xl bg-gradient-to-br from-cobalt-deep to-electric p-10 sm:p-12 text-white shadow-2xl">
          <Coffee className="h-10 w-10 text-electric-soft mb-6" />
          <h2 className="font-display font-extrabold text-3xl">Kenapa "Paman Besar"?</h2>
          <div className="space-y-4 mt-6 text-white/85 leading-relaxed">
            <p>
              Di setiap keluarga, selalu ada satu sosok paman yang punya suguhan kopi paling enak. Yang setiap kali kamu mampir, kopinya selalu pas — pahit, manis, hangat. Itulah perasaan yang ingin kami bawa ke skala urban.
            </p>
            <p>
              Bukan cuma kopi. Tapi rasa diterima, rasa di rumah. Bahkan saat kamu pesan to-go di tengah hujan.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            { icon: Award, title: "Kualitas tanpa kompromi", desc: "Cuma 100% Arabica. Roasted in-house tiap minggu. Barista kami sertifikasi SCA." },
            { icon: Sprout, title: "Petani lokal, harga adil", desc: "Direct trade dengan petani Gayo (Aceh) & Kintamani (Bali). Kami bayar di atas harga pasar." }
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl bg-white border border-border p-8 hover:border-electric/30 transition-all hover:shadow-lg">
              <item.icon className="h-8 w-8 text-electric mb-4" />
              <h3 className="font-display font-extrabold text-xl text-cobalt-deep">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <h2 className="font-display font-extrabold text-cobalt-deep text-3xl sm:text-4xl mb-12">Perjalanan Kami</h2>
        <div className="relative pl-8 sm:pl-10 border-l-2 border-border/50 space-y-12">
          {timeline.map((t) => (
            <div key={t.year} className="relative group">
              <div className="absolute -left-[45px] sm:-left-[53px] top-0 grid h-8 w-8 place-items-center rounded-full bg-electric text-white text-[10px] font-black shadow-glow ring-4 ring-white">
                {t.year.slice(-2)}
              </div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-electric mb-1">{t.year}</p>
              <h3 className="font-display font-bold text-xl text-cobalt-deep">{t.title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground max-w-xl leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* BEANS SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-white border border-border p-8 sm:p-12 grid md:grid-cols-2 gap-10 items-center shadow-card">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric">Our Beans</p>
            <h2 className="mt-3 font-display font-extrabold text-3xl text-cobalt-deep">Gayo × Kintamani Blend</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              House blend signature kami: 60% Gayo (Aceh) untuk body tebal dan cokelat pahit, dipadu 40% Kintamani (Bali) untuk aroma jeruk & finish bersih.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-cobalt-deep">
              {['Medium-dark roast', 'Tasting notes: dark chocolate, orange peel, brown sugar', 'Tersedia dalam whole beans & ground'].map((li, i) => (
                <li key={i} className="flex gap-3">
                  <span className="text-electric font-bold">•</span> {li}
                </li>
              ))}
            </ul>
          </div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cobalt-deep to-electric grid place-items-center text-white/20">
            <Coffee className="h-32 w-32" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
