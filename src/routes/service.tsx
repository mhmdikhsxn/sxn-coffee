import { createFileRoute } from "@tanstack/react-router";
import { Wifi, Coffee, Truck, Building2, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Service — Paman Besar" },
      { name: "description", content: "Dine-in & co-working, Paman Big Catering, dan B2B Beans Supply untuk kafe independen." },
      { property: "og:title", content: "Service — Paman Besar" },
      { property: "og:description", content: "Layanan B2C & B2B Paman Besar." },
    ],
  }),
  component: ServicePage,
});

const services = [
  {
    icon: Wifi,
    title: "Dine-In & Co-Working Friendly",
    desc: "Tiap outlet kami dirancang buat kamu yang mau kerja, ngobrol, atau cuma rehat. High-speed Wi-Fi, colokan di tiap meja, dan AC dingin standar paman.",
    bullets: ["Wi-Fi 200 Mbps", "Colokan di tiap meja", "AC dingin", "Quiet zone tersedia"],
  },
  {
    icon: Truck,
    title: "Paman Big Catering / Coffee Cart",
    desc: "Panggil gerobak dan barista Paman Besar ke wedding, pensi, atau gathering kantor. Custom menu + branding bisa kami siapkan.",
    bullets: ["Coffee cart on-site", "Barista profesional", "Menu custom", "Min. 50 cup"],
  },
  {
    icon: Building2,
    title: "B2B Beans Supply",
    desc: "Biji kopi house-roasted Paman Besar siap kami suplai untuk kafe independen. Konsisten, fresh, dan harga kompetitif.",
    bullets: ["Roast-to-order", "Gayo & Kintamani blend", "Min. 5kg / order", "Free konsultasi recipe"],
  },
  {
    icon: Coffee,
    title: "Private Barista Workshop",
    desc: "Belajar bikin latte art, manual brew, atau espresso fundamentals langsung dari barista juara kami.",
    bullets: ["3–8 peserta / sesi", "Sertifikat", "All tools provided", "Kelas weekend"],
  },
];

function ServicePage() {
  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <p className="text-xs font-bold uppercase tracking-widest text-electric">Apa yang kami tawarkan</p>
        <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-4xl sm:text-5xl max-w-3xl text-balance">
          Lebih dari sekedar secangkir kopi.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Dari dine-in hangat sampai supply biji kopi untuk kafe lain. Paman Besar siap melayani kamu maupun bisnismu.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 grid md:grid-cols-2 gap-6">
        {services.map((s) => (
          <article key={s.title} className="rounded-2xl bg-white border border-border p-7 shadow-card hover:border-electric/40 hover:shadow-glow transition">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-electric-soft text-electric mb-5">
              <s.icon className="h-5 w-5" />
            </div>
            <h2 className="font-display font-extrabold text-xl text-cobalt-deep">{s.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-xs">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-cobalt-deep">
                  <span className="h-1.5 w-1.5 rounded-full bg-electric" /> {b}
                </li>
              ))}
            </ul>
            <button className="mt-6 inline-flex items-center gap-1 text-sm font-bold text-cobalt-deep hover:text-electric">
              Tanya Paman <ArrowRight className="h-4 w-4" />
            </button>
          </article>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="rounded-3xl bg-gradient-to-br from-cobalt-deep to-electric p-10 sm:p-14 text-white text-center">
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl">Mau diskusi project bareng Paman?</h2>
          <p className="mt-3 text-white/80 max-w-xl mx-auto">Tim kami siap bantu rancang penawaran khusus buat event atau bisnis kamu.</p>
          <a href="mailto:halo@pamanbesar.id" className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-cobalt-deep font-bold px-6 py-3 text-sm hover:bg-electric-soft transition">
            Email Tim Paman <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </SiteLayout>
  );
}
