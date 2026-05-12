"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import type { Lang } from "./HomeClient";

type Props = {
  lang: Lang;
  onToggleLang: () => void;
};

const navGroups = {
  id: [
    {
      label: "Komposisi Tubuh",
      links: [
        { href: "/", label: "Kalkulator BMI" },
        { href: "/anak", label: "BMI Anak" },
        { href: "/lemak", label: "Lemak Tubuh" },
        { href: "/pinggang", label: "Lingkar Pinggang" },
      ],
    },
    {
      label: "Kebutuhan Harian",
      links: [
        { href: "/kalori", label: "Kalori Harian" },
        { href: "/air", label: "Air Minum" },
      ],
    },
    {
      label: "Artikel",
      links: [
        { href: "/artikel", label: "Semua Artikel" },
        { href: "/artikel/bmi-normal-orang-indonesia", label: "BMI Normal Indonesia" },
        { href: "/artikel/kebutuhan-kalori-harian", label: "Kebutuhan Kalori Harian" },
        { href: "/artikel/kebutuhan-air-minum-harian", label: "Kebutuhan Air Minum" },
        { href: "/artikel/cara-mengukur-lemak-tubuh", label: "Mengukur Lemak Tubuh" },
        { href: "/artikel/berat-badan-ideal-anak", label: "Berat Badan Ideal Anak" },
        { href: "/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat", label: "Turun BB Tanpa Diet Ketat" },
        { href: "/artikel/perbedaan-bmi-dan-lemak-tubuh", label: "BMI vs Lemak Tubuh" },
        { href: "/artikel/bahaya-lemak-perut-visceral", label: "Bahaya Lemak Perut" },
        { href: "/artikel/makanan-tinggi-protein-untuk-diet", label: "Makanan Tinggi Protein" },
        { href: "/artikel/olahraga-terbaik-untuk-bakar-lemak", label: "Olahraga Bakar Lemak" },
        { href: "/artikel/tanda-tanda-kurus-tidak-sehat", label: "Kurus Tidak Sehat" },
        { href: "/artikel/panduan-gizi-seimbang-untuk-anak", label: "Gizi Seimbang Anak" },
        { href: "/artikel/efek-kurang-tidur-terhadap-berat-badan", label: "Tidur & Berat Badan" },
      ],
    },
  ],
  en: [
    {
      label: "Body Composition",
      links: [
        { href: "/", label: "BMI Calculator" },
        { href: "/anak", label: "Child BMI" },
        { href: "/lemak", label: "Body Fat" },
        { href: "/pinggang", label: "Waist Size" },
      ],
    },
    {
      label: "Daily Needs",
      links: [
        { href: "/kalori", label: "Daily Calories" },
        { href: "/air", label: "Water Intake" },
      ],
    },
    {
      label: "Articles",
      links: [
        { href: "/artikel", label: "All Articles" },
        { href: "/artikel/bmi-normal-orang-indonesia", label: "BMI for Indonesians" },
        { href: "/artikel/kebutuhan-kalori-harian", label: "Daily Calorie Needs" },
        { href: "/artikel/kebutuhan-air-minum-harian", label: "Daily Water Needs" },
        { href: "/artikel/cara-mengukur-lemak-tubuh", label: "Measuring Body Fat" },
        { href: "/artikel/berat-badan-ideal-anak", label: "Ideal Child Weight" },
        { href: "/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat", label: "Lose Weight Without Crash Diet" },
        { href: "/artikel/perbedaan-bmi-dan-lemak-tubuh", label: "BMI vs Body Fat" },
        { href: "/artikel/bahaya-lemak-perut-visceral", label: "Dangers of Visceral Fat" },
        { href: "/artikel/makanan-tinggi-protein-untuk-diet", label: "High Protein Foods" },
        { href: "/artikel/olahraga-terbaik-untuk-bakar-lemak", label: "Best Fat-Burning Exercises" },
        { href: "/artikel/tanda-tanda-kurus-tidak-sehat", label: "Signs of Skinny Fat" },
        { href: "/artikel/panduan-gizi-seimbang-untuk-anak", label: "Child Nutrition Guide" },
        { href: "/artikel/efek-kurang-tidur-terhadap-berat-badan", label: "Sleep & Weight Gain" },
      ],
    },
  ],
};

export default function Sidebar({ lang, onToggleLang }: Props) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({ 0: true, 1: true, 2: true });

  const toggleGroup = (i: number) =>
    setExpanded((prev) => ({ ...prev, [i]: !prev[i] }));

  return (
    <>
      {/* Mobile hamburger */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white border border-emerald-200 rounded-xl p-2.5 shadow-md"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label="Toggle menu"
      >
        <span className="text-emerald-700 text-base leading-none">
          {mobileOpen ? "✕" : "☰"}
        </span>
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-30"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed inset-y-0 left-0 w-64 bg-white border-r border-emerald-100 z-40
          transform transition-transform duration-200
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0 md:flex md:flex-col md:w-56 md:shrink-0
          md:sticky md:top-0 md:h-screen md:overflow-hidden
        `}
      >
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="px-5 py-5 border-b border-emerald-100">
            <Link
              href="/"
              className="flex items-center gap-2"
              onClick={() => setMobileOpen(false)}
            >
              <span className="text-2xl">🌿</span>
              <span className="text-emerald-700 font-bold text-base tracking-tight">
                Kauna Healthy
              </span>
            </Link>
          </div>

          {/* Nav groups */}
          <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            {navGroups[lang].map((group, i) => (
              <div key={i}>
                <button
                  onClick={() => toggleGroup(i)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-bold text-emerald-500 uppercase tracking-widest hover:bg-emerald-50 transition-colors"
                >
                  <span>{group.label}</span>
                  <span
                    className={`transition-transform duration-200 text-emerald-400 ${
                      expanded[i] ? "rotate-180" : ""
                    }`}
                  >
                    ▾
                  </span>
                </button>

                {expanded[i] && (
                  <div className="mt-0.5 space-y-0.5 mb-2">
                    {group.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          pathname === link.href
                            ? "bg-emerald-500 text-white shadow-sm shadow-emerald-200"
                            : "text-emerald-800 hover:bg-emerald-50"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Lang toggle */}
          <div className="px-4 pt-4 border-t border-emerald-100">
            <button
              onClick={onToggleLang}
              className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl border border-emerald-200 bg-white text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm"
              aria-label="Switch language"
            >
              <span className="text-base leading-none">
                {lang === "id" ? "🇮🇩" : "🇬🇧"}
              </span>
              <span>{lang === "id" ? "ID" : "EN"}</span>
              <span className="text-emerald-400">⇄</span>
              <span>{lang === "id" ? "EN" : "ID"}</span>
            </button>
          </div>

          {/* Footer links */}
          <div className="px-4 py-3 flex justify-center gap-3 flex-wrap">
            <Link href="/tentang" onClick={() => setMobileOpen(false)} className="text-xs text-emerald-400 hover:text-emerald-600 transition-colors">
              {lang === "id" ? "Tentang" : "About"}
            </Link>
            <span className="text-emerald-200 text-xs">·</span>
            <Link href="/kebijakan-privasi" onClick={() => setMobileOpen(false)} className="text-xs text-emerald-400 hover:text-emerald-600 transition-colors">
              {lang === "id" ? "Privasi" : "Privacy"}
            </Link>
            <span className="text-emerald-200 text-xs">·</span>
            <Link href="/kontak" onClick={() => setMobileOpen(false)} className="text-xs text-emerald-400 hover:text-emerald-600 transition-colors">
              {lang === "id" ? "Kontak" : "Contact"}
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
