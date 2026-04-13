"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "./HomeClient";

type Props = {
  lang: Lang;
  onToggleLang: () => void;
};

const navLinks = {
  id: [
    { href: "/", label: "Kalkulator BMI" },
    { href: "/kalori", label: "Kalori Harian" },
    { href: "/air", label: "Air Minum" },
    { href: "/lemak", label: "Lemak Tubuh" },
    { href: "/anak", label: "BMI Anak" },
    { href: "/pinggang", label: "Lingkar Pinggang" },
  ],
  en: [
    { href: "/", label: "BMI Calculator" },
    { href: "/kalori", label: "Daily Calories" },
    { href: "/air", label: "Water Intake" },
    { href: "/lemak", label: "Body Fat" },
    { href: "/anak", label: "Child BMI" },
    { href: "/pinggang", label: "Waist Size" },
  ],
};

export default function Navbar({ lang, onToggleLang }: Props) {
  const pathname = usePathname();

  return (
    <nav className="w-full mb-8">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="text-emerald-700 font-bold text-base tracking-tight">
            Kauna Healthy
          </span>
        </Link>

        <button
          onClick={onToggleLang}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-white text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm"
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

      {/* Nav links */}
      <div className="flex gap-2 overflow-x-auto pb-1">
        {navLinks[lang].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-all border ${
              pathname === link.href
                ? "bg-emerald-500 text-white border-emerald-500 shadow-sm shadow-emerald-200"
                : "bg-white text-emerald-700 border-emerald-100 hover:border-emerald-300 hover:bg-emerald-50"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
