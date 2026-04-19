"use client";

import Sidebar from "../components/Sidebar";
import { useLang } from "../hooks/useLang";

const t = {
  id: {
    title: "Kontak",
    subtitle: "Ada pertanyaan, saran, atau laporan masalah? Kami senang mendengarnya.",
    emailTitle: "Email",
    emailBody: "Untuk pertanyaan umum, saran fitur, atau laporan bug:",
    reportTitle: "Laporkan Masalah",
    reportBody:
      "Jika menemukan hasil kalkulasi yang tidak tepat atau ada tampilan yang rusak, tolong beritahu kami agar bisa segera diperbaiki.",
    aboutTitle: "Tentang Situs Ini",
    aboutBody:
      "Kauna Healthy dibuat dan dikelola secara independen. Kami berusaha menjaga semua kalkulator tetap akurat dan gratis untuk semua pengguna.",
    footer: "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "Contact",
    subtitle: "Have a question, suggestion, or issue to report? We'd love to hear from you.",
    emailTitle: "Email",
    emailBody: "For general inquiries, feature suggestions, or bug reports:",
    reportTitle: "Report an Issue",
    reportBody:
      "If you find an inaccurate calculation result or a broken layout, please let us know so we can fix it quickly.",
    aboutTitle: "About This Site",
    aboutBody:
      "Kauna Healthy is independently built and maintained. We strive to keep all calculators accurate and free for all users.",
    footer: "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
} as const;

export default function KontakClient() {
  const { lang, toggleLang } = useLang();
  const tx = t[lang];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1 min-w-0 px-4 pt-16 pb-20 md:pt-8 md:px-10 max-w-2xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">{tx.title}</h1>
          <p className="text-emerald-700/70 text-base">{tx.subtitle}</p>
        </header>

        <div className="space-y-8 text-emerald-950/80">
          <section className="bg-white rounded-3xl border border-emerald-100 shadow-sm p-6">
            <h2 className="text-lg font-bold text-emerald-900 mb-2">{tx.emailTitle}</h2>
            <p className="text-sm mb-3 text-emerald-950/70">{tx.emailBody}</p>
            <a
              href="mailto:hello@getkauna.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-500 text-white text-sm font-semibold hover:bg-emerald-600 transition-colors shadow-sm shadow-emerald-200"
            >
              <span>✉</span>
              hello@getkauna.com
            </a>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">{tx.reportTitle}</h2>
            <p className="leading-relaxed text-sm sm:text-base">{tx.reportBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">{tx.aboutTitle}</h2>
            <p className="leading-relaxed text-sm sm:text-base">{tx.aboutBody}</p>
          </section>
        </div>

        <footer className="mt-14 text-center text-xs text-emerald-500/60">
          <p>{tx.footer}</p>
        </footer>
      </main>
    </div>
  );
}
