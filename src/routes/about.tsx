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
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-electric">Our Story</p>
        <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl max-w-3xl text-balance">
          Kehangatan paman, dalam skala urban.
        </h1>
      </section>

      {/* Philosophy */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 grid lg:grid-cols-2 gap-10 items-start">
        <div className="rounded-3xl bg-gradient-to-br from-cobalt-deep to-electric p-10 text-white">
          <Coffee className="h-10 w-10 text-electric-soft mb-4" />
          <h2 className="font-display font-extrabold text-3xl">Kenapa "Paman Besar"?</h2>
          <p className="mt-4 leading-relaxed text-white/85">
            Di setiap keluarga, selalu ada satu sosok paman yang punya suguhan kopi paling enak. Yang setiap kali kamu mampir, kopinya selalu pas — pahit, manis, hangat. Itulah perasaan yang ingin kami bawa ke skala urban.
          </p>
          <p className="mt-4 leading-relaxed text-white/85">
            Bukan cuma kopi. Tapi rasa diterima, rasa di rumah. Bahkan saat kamu pesan to-go di tengah hujan.
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white border border-border p-7">
            <Award className="h-8 w-8 text-electric mb-3" />
            <h3 className="font-display font-extrabold text-xl text-cobalt-deep">Kualitas tanpa kompromi</h3>
            <p className="mt-2 text-sm text-muted-foreground">Cuma 100% Arabica. Roasted in-house tiap minggu. Barista kami sertifikasi SCA.</p>
          </div>
          <div className="rounded-2xl bg-white border border-border p-7">
            <Sprout className="h-8 w-8 text-electric mb-3" />
            <h3 className="font-display font-extrabold text-xl text-cobalt-deep">Petani lokal, harga adil</h3>
            <p className="mt-2 text-sm text-muted-foreground">Direct trade dengan petani Gayo (Aceh) & Kintamani (Bali). Kami bayar di atas harga pasar.</p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <h2 className="font-display font-extrabold text-cobalt-deep text-3xl sm:text-4xl mb-10">Perjalanan Kami</h2>
        <div className="relative pl-10 sm:pl-14 border-l-2 border-border space-y-10">
          {timeline.map((t) => (
            <div key={t.year} className="relative">
              <div className="absolute -left-[46px] sm:-left-[58px] top-1 grid h-10 w-10 place-items-center rounded-full bg-electric text-white text-xs font-extrabold shadow-glow">
                {t.year.slice(-2)}
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-electric">{t.year}</p>
              <h3 className="font-display font-bold text-xl text-cobalt-deep mt-1">{t.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground max-w-xl">{t.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Beans */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-white border border-border p-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-electric">Our Beans</p>
            <h2 className="mt-2 font-display font-extrabold text-3xl text-cobalt-deep">Gayo × Kintamani Blend</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              House blend signature kami: 60% Gayo (Aceh) untuk body tebal dan cokelat pahit, dipadu 40% Kintamani (Bali) untuk aroma jeruk & finish bersih.
            </p>
            <ul className="mt-5 space-y-2 text-sm text-cobalt-deep">
              <li className="flex gap-2"><span className="text-electric">•</span> Medium-dark roast</li>
              <li className="flex gap-2"><span className="text-electric">•</span> Tasting notes: dark chocolate, orange peel, brown sugar</li>
              <li className="flex gap-2"><span className="text-electric">•</span> Tersedia dalam whole beans & ground</li>
            </ul>
          </div>
          <div className="aspect-square rounded-2xl bg-gradient-to-br from-cobalt-deep to-electric grid place-items-center text-white/30">
            <Coffee className="h-32 w-32" />
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
