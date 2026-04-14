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
        { href: "/#bmi-normal-indonesia", label: "BMI Normal Indonesia" },
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
        { href: "/#bmi-normal-indonesia", label: "BMI for Indonesians" },
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
          <div className="px-4 py-4 border-t border-emerald-100">
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
        </div>
      </aside>
    </>
  );
}
