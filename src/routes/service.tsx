import { createFileRoute } from "@tanstack/react-router";
import { Wifi, ChefHat, Truck, Building2, ArrowRight, ChevronRight } from "lucide-react";
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

const SERVICES = [
  {
    icon: Wifi,
    title: "Dine-In & Co-Working Friendly",
    desc: "Tiap outlet kami dirancang buat kamu yang mau kerja, ngobrol, atau cuma rehat. High-speed Wi-Fi, colokan di tiap meja, dan AC dingin standar paman.",
    bullets: ["Wi-Fi 200 Mbps", "Colokan tiap meja", "AC dingin standar", "Quiet zone tersedia"],
    ctaText: "Lihat Lokasi Outlet",
    ctaLink: "/store-location",
    isExternal: false,
  },
  {
    icon: Truck,
    title: "Paman Big Catering / Event Cart",
    desc: "Panggil gerobak dan tim Paman Besar ke wedding, pensi, atau gathering kantor. Custom menu minuman & artisan bakery siap kami siapkan.",
    bullets: ["On-site event cart", "Crew profesional", "Custom F&B menu", "Min. order 50 pax"],
    ctaText: "Tanya Paket Catering",
    ctaLink: "https://wa.me/628112345678?text=Halo%20Paman,%20mau%20tanya%20paket%20Catering/Event%20Cart",
    isExternal: true,
  },
  {
    icon: Building2,
    title: "B2B F&B Supply",
    desc: "Biji kopi house-roasted dan produk bakery pasokan Paman Besar siap kami suplai untuk kafe independen. Konsisten, fresh, dan harga kompetitif.",
    bullets: ["Roast-to-order", "Commercial blend", "Min. order fleksibel", "Free konsultasi menu"],
    ctaText: "Minta Katalog B2B",
    ctaLink: "https://wa.me/628112345678?text=Halo%20Paman,%20mau%20minta%20Katalog%20Supply%20B2B",
    isExternal: true,
  },
  {
    icon: ChefHat,
    title: "Private F&B Workshop",
    desc: "Belajar kreasi menu, manual brew, espresso fundamentals, hingga artisan baking langsung dari tim praktisi terbaik kami.",
    bullets: ["3–8 peserta / sesi", "E-Sertifikat resmi", "Tools & bahan lengkap", "Fleksibel weekend"],
    ctaText: "Jadwal Workshop",
    ctaLink: "https://wa.me/628112345678?text=Halo%20Paman,%20mau%20tanya%20jadwal%20Private%20Workshop",
    isExternal: true,
  },
] as const;

function ServicePage() {
  return (
    <SiteLayout>
      {/* HERO SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-tigth text-electric">Apa yang kami tawarkan</p>
          <h1 className="mt-2 font-display font-extrabold text-cobalt-deep text-5xl tracking-tight text-balance">
            Lebih dari sekadar <br /> tempat makan & ngopi.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
            Dari ruang dine-in yang produktif hingga pasokan bahan baku untuk bisnis kuliner lain. Paman Besar siap mendukung keseharian maupun pertumbuhan bisnismu.
          </p>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {SERVICES.map((s) => {
            const IconComponent = s.icon;
            return (
              <article 
                key={s.title} 
                className="group relative flex flex-col justify-between rounded-3xl bg-white border border-border p-7 sm:p-8 shadow-card hover:border-electric/40 hover:shadow-glow transition-all duration-300"
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-full bg-electric-soft text-electric mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  
                  <h2 className="font-display font-bold text-2xl text-cobalt-deep tracking-tight">
                    {s.title}
                  </h2>
                  <p className="mt-2.5 text-sm text-muted-foreground leading-relaxed">
                    {s.desc}
                  </p>
                  
                  <hr className="my-6 border-border/60" />

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs font-medium text-cobalt-deep/80">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-electric shrink-0" />
                        <span className="truncate">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <a 
                    href={s.ctaLink}
                    target={s.isExternal ? "_blank" : "_self"}
                    rel={s.isExternal ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-cobalt-deep group-hover:text-electric transition-colors"
                  >
                    <span>{s.ctaText}</span>
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

     {/* BOTTOM CTA BANNER - PROFESSIONAL B2B STYLE */}
<section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
  <div className="relative overflow-hidden rounded-3xl bg-cobalt-deep p-10 sm:p-16 text-center shadow-xl">
    {/* Ambient Light Effect */}
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-electric/20 via-transparent to-transparent pointer-events-none" />
    
    <div className="relative z-10 max-w-2xl mx-auto">
      <h2 className="font-display font-bold text-3xl  text-white tracking-tight">
        Siap Berkolaborasi dengan Paman Besar?
      </h2>
      <p className="mt-4 text-white/70 text-base sm:text-lg leading-relaxed">
        Kami menyediakan solusi F&B komprehensif, mulai dari layanan katering korporat hingga kemitraan suplai bahan baku untuk bisnis Anda. Mari diskusikan kebutuhan profesional Anda.
      </p>
      
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <a 
          href="https://wa.me/628112345678" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white text-cobalt-deep font-bold px-8 py-4 text-sm hover:bg-electric hover:text-white transition-all shadow-lg active:scale-95"
        >
          <span>Hubungi Tim Kemitraan</span>
          <ArrowRight className="h-4 w-4" />
        </a>
        <a 
          href="mailto:halo@pamanbesar.id" 
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-white/5 text-white border border-white/10 font-medium px-8 py-4 text-sm hover:bg-white/10 transition-all active:scale-95"
        >
          <span>Jadwalkan Konsultasi</span>
        </a>
      </div>
    </div>
  </div>
</section>
    </SiteLayout>
  );
}