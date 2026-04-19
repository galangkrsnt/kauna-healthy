"use client";

import Sidebar from "../components/Sidebar";
import { useLang } from "../hooks/useLang";

const t = {
  id: {
    title: "Tentang Kauna Healthy",
    subtitle: "Platform kalkulator kesehatan gratis untuk pengguna Indonesia.",
    whoTitle: "Siapa Kami",
    whoBody:
      "Kauna Healthy adalah platform alat kesehatan berbasis web yang dibuat untuk membantu masyarakat Indonesia memahami kondisi kesehatan mereka dengan cara yang mudah, cepat, dan gratis. Kami menyediakan berbagai kalkulator kesehatan — dari BMI, kalori harian, persentase lemak tubuh, hingga kebutuhan air minum — semuanya langsung berjalan di browser tanpa perlu membuat akun.",
    missionTitle: "Misi Kami",
    missionBody:
      "Membuat informasi kesehatan yang akurat dan berbasis data mudah diakses oleh semua orang di Indonesia, tanpa biaya dan tanpa kerumitan.",
    toolsTitle: "Alat yang Tersedia",
    tools: [
      "Kalkulator BMI & Berat Badan Ideal",
      "Kalkulator BMI Anak",
      "Kalkulator Lemak Tubuh",
      "Kalkulator Lingkar Pinggang",
      "Kalkulator Kalori Harian (TDEE)",
      "Kalkulator Kebutuhan Air Minum",
    ],
    disclaimerTitle: "Disclaimer Medis",
    disclaimerBody:
      "Semua informasi dan hasil kalkulasi di Kauna Healthy bersifat edukatif dan tidak dimaksudkan sebagai pengganti saran, diagnosis, atau perawatan medis profesional. Selalu konsultasikan kondisi kesehatan Anda dengan dokter atau tenaga medis yang berkualifikasi.",
    contactTitle: "Hubungi Kami",
    contactBody: "Punya pertanyaan atau saran? Hubungi kami di:",
    footer: "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "About Kauna Healthy",
    subtitle: "Free health calculator platform for Indonesian users.",
    whoTitle: "Who We Are",
    whoBody:
      "Kauna Healthy is a web-based health tools platform built to help Indonesians understand their health in an easy, fast, and free way. We provide a range of health calculators — from BMI, daily calories, body fat percentage, to daily water intake — all running directly in your browser without needing an account.",
    missionTitle: "Our Mission",
    missionBody:
      "To make accurate, data-driven health information accessible to everyone in Indonesia — free and without complexity.",
    toolsTitle: "Available Tools",
    tools: [
      "BMI & Ideal Weight Calculator",
      "Child BMI Calculator",
      "Body Fat Calculator",
      "Waist Circumference Calculator",
      "Daily Calorie Calculator (TDEE)",
      "Daily Water Intake Calculator",
    ],
    disclaimerTitle: "Medical Disclaimer",
    disclaimerBody:
      "All information and calculation results on Kauna Healthy are educational in nature and are not intended as a substitute for professional medical advice, diagnosis, or treatment. Always consult your condition with a qualified doctor or medical professional.",
    contactTitle: "Contact Us",
    contactBody: "Have a question or suggestion? Reach us at:",
    footer: "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
} as const;

export default function TentangClient() {
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
          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.whoTitle}</h2>
            <p className="leading-relaxed text-sm sm:text-base">{tx.whoBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.missionTitle}</h2>
            <p className="leading-relaxed text-sm sm:text-base">{tx.missionBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.toolsTitle}</h2>
            <ul className="space-y-2">
              {tx.tools.map((tool) => (
                <li key={tool} className="flex items-center gap-2 text-sm sm:text-base">
                  <span className="text-emerald-500">✓</span>
                  <span>{tool}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
            <h2 className="text-base font-bold text-amber-800 mb-2">{tx.disclaimerTitle}</h2>
            <p className="text-sm leading-relaxed text-amber-700/80">{tx.disclaimerBody}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">{tx.contactTitle}</h2>
            <p className="text-sm sm:text-base mb-2">{tx.contactBody}</p>
            <a
              href="mailto:hello@getkauna.com"
              className="text-emerald-600 font-medium hover:underline"
            >
              hello@getkauna.com
            </a>
          </section>
        </div>

        <footer className="mt-14 text-center text-xs text-emerald-500/60">
          <p>{tx.footer}</p>
        </footer>
      </main>
    </div>
  );
}
