"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/", label: { id: "Kalkulator BMI", en: "BMI Calculator" } },
  { href: "/anak", label: { id: "BMI Anak", en: "Child BMI" } },
  { href: "/lemak", label: { id: "Lemak Tubuh", en: "Body Fat" } },
  { href: "/pinggang", label: { id: "Lingkar Pinggang", en: "Waist Size" } },
  { href: "/kalori", label: { id: "Kalori Harian", en: "Daily Calories" } },
  { href: "/air", label: { id: "Air Minum", en: "Water Intake" } },
];

const artikelLinks = [
  { href: "/artikel/bmi-normal-orang-indonesia", label: { id: "BMI Normal Indonesia", en: "BMI for Indonesians" } },
  { href: "/artikel/kebutuhan-kalori-harian", label: { id: "Kebutuhan Kalori Harian", en: "Daily Calorie Needs" } },
  { href: "/artikel/kebutuhan-air-minum-harian", label: { id: "Kebutuhan Air Minum", en: "Daily Water Needs" } },
  { href: "/artikel/cara-mengukur-lemak-tubuh", label: { id: "Mengukur Lemak Tubuh", en: "Measuring Body Fat" } },
  { href: "/artikel/berat-badan-ideal-anak", label: { id: "Berat Badan Ideal Anak", en: "Ideal Child Weight" } },
  { href: "/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat", label: { id: "Turun BB Tanpa Diet Ketat", en: "Lose Weight Without Crash Diets" } },
  { href: "/artikel/perbedaan-bmi-dan-lemak-tubuh", label: { id: "BMI vs Lemak Tubuh", en: "BMI vs Body Fat" } },
  { href: "/artikel/bahaya-lemak-perut-visceral", label: { id: "Bahaya Lemak Perut", en: "Dangers of Visceral Fat" } },
  { href: "/artikel/makanan-tinggi-protein-untuk-diet", label: { id: "Makanan Tinggi Protein", en: "High-Protein Foods" } },
  { href: "/artikel/olahraga-terbaik-untuk-bakar-lemak", label: { id: "Olahraga Bakar Lemak", en: "Best Fat-Burning Exercises" } },
  { href: "/artikel/tanda-tanda-kurus-tidak-sehat", label: { id: "Kurus Tidak Sehat", en: "Signs of Skinny Fat" } },
  { href: "/artikel/panduan-gizi-seimbang-untuk-anak", label: { id: "Gizi Seimbang Anak", en: "Child Nutrition Guide" } },
  { href: "/artikel/efek-kurang-tidur-terhadap-berat-badan", label: { id: "Tidur & Berat Badan", en: "Sleep & Weight Gain" } },
];

export default function ArticleLayout({
  children,
  childrenId,
  childrenEn,
  activeHref,
}: {
  children?: React.ReactNode;
  childrenId?: React.ReactNode;
  childrenEn?: React.ReactNode;
  activeHref: string;
}) {
  const [lang, setLang] = useState<"id" | "en">("id");

  const content = childrenId
    ? lang === "id"
      ? childrenId
      : childrenEn ?? childrenId
    : children;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 bg-white border-r border-emerald-100 sticky top-0 h-screen overflow-y-auto py-6 px-4">
        <Link href="/" className="flex items-center gap-2 mb-8 px-2">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-emerald-800 text-base">Kauna Healthy</span>
        </Link>

        <nav className="space-y-6 flex-1">
          <div>
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest px-2 mb-2">
              {lang === "id" ? "Kalkulator" : "Calculators"}
            </p>
            <ul className="space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-2 py-1.5 rounded-lg text-sm text-emerald-800/70 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest px-2 mb-2">
              {lang === "id" ? "Artikel" : "Articles"}
            </p>
            <ul className="space-y-0.5">
              {artikelLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-2 py-1.5 rounded-lg text-sm transition-colors ${
                      activeHref === link.href
                        ? "bg-emerald-100 text-emerald-900 font-semibold"
                        : "text-emerald-800/70 hover:bg-emerald-50 hover:text-emerald-900"
                    }`}
                  >
                    {link.label[lang]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* Lang toggle */}
        <div className="pt-3 border-t border-emerald-50">
          <button
            onClick={() => setLang((l) => (l === "id" ? "en" : "id"))}
            className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-emerald-200 bg-white text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm mb-2"
          >
            <span className="text-base leading-none">{lang === "id" ? "🇮🇩" : "🇬🇧"}</span>
            <span>{lang === "id" ? "ID" : "EN"}</span>
            <span className="text-emerald-400">⇄</span>
            <span>{lang === "id" ? "EN" : "ID"}</span>
          </button>
          <div className="space-y-1">
            <Link href="/tentang" className="block text-xs text-emerald-400 hover:text-emerald-600 px-2 py-1 transition-colors">
              {lang === "id" ? "Tentang" : "About"}
            </Link>
            <Link href="/kebijakan-privasi" className="block text-xs text-emerald-400 hover:text-emerald-600 px-2 py-1 transition-colors">
              {lang === "id" ? "Privasi" : "Privacy"}
            </Link>
            <Link href="/kontak" className="block text-xs text-emerald-400 hover:text-emerald-600 px-2 py-1 transition-colors">
              {lang === "id" ? "Kontak" : "Contact"}
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-emerald-100 px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-lg">🌿</span>
          <span className="font-bold text-emerald-800 text-sm">Kauna Healthy</span>
        </Link>
        <span className="text-emerald-200">·</span>
        <span className="text-sm text-emerald-600 font-medium">{lang === "id" ? "Artikel" : "Articles"}</span>
        <button
          onClick={() => setLang((l) => (l === "id" ? "en" : "id"))}
          className="ml-auto text-xs border border-emerald-200 rounded-lg px-2 py-1 text-emerald-700 font-semibold hover:bg-emerald-50"
        >
          {lang === "id" ? "EN" : "ID"}
        </button>
      </div>

      {/* Content */}
      <main className="flex-1 min-w-0 px-4 pt-16 pb-20 md:pt-10 md:px-10 max-w-2xl">
        {content}
        <footer className="mt-14 text-center text-xs text-emerald-500/60">
          <p>© 2026 Kauna Healthy · {lang === "id" ? "Informasi ini bukan pengganti saran medis profesional." : "This information is not a substitute for professional medical advice."}</p>
        </footer>
      </main>
    </div>
  );
}
