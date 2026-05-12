import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "./ArticleLayout";

export const metadata: Metadata = {
  title: "Artikel Kesehatan — Kauna Healthy",
  description:
    "Kumpulan artikel kesehatan berbasis data untuk membantu kamu memahami BMI, kalori, lemak tubuh, kebutuhan air, dan pertumbuhan anak.",
  alternates: { canonical: "https://healthy.getkauna.com/artikel" },
};

const articles = [
  {
    href: "/artikel/bmi-normal-orang-indonesia",
    title: "BMI Normal untuk Orang Indonesia",
    desc: "Standar BMI untuk populasi Asia-Pasifik berbeda dengan standar global WHO. Pelajari rentang BMI yang berlaku untuk orang Indonesia dan mengapa perbedaan ini penting.",
    tag: "BMI",
    color: "emerald",
  },
  {
    href: "/artikel/kebutuhan-kalori-harian",
    title: "Berapa Kebutuhan Kalori Harian Kamu?",
    desc: "Panduan lengkap menghitung TDEE — total energi yang dibutuhkan tubuhmu per hari berdasarkan usia, berat badan, dan tingkat aktivitas.",
    tag: "Kalori",
    color: "orange",
  },
  {
    href: "/artikel/kebutuhan-air-minum-harian",
    title: "Kebutuhan Air Minum Per Hari",
    desc: "Berapa liter air yang harus diminum setiap hari? Pelajari faktor yang memengaruhi kebutuhan air dan tanda-tanda dehidrasi yang sering diabaikan.",
    tag: "Hidrasi",
    color: "cyan",
  },
  {
    href: "/artikel/cara-mengukur-lemak-tubuh",
    title: "Cara Mengukur Lemak Tubuh yang Akurat",
    desc: "Persentase lemak tubuh lebih informatif dari sekadar berat badan. Pelajari metode pengukuran, rentang normal, dan cara menurunkan lemak tubuh.",
    tag: "Lemak Tubuh",
    color: "purple",
  },
  {
    href: "/artikel/berat-badan-ideal-anak",
    title: "Berat Badan Ideal Anak Berdasarkan Usia",
    desc: "Panduan membaca grafik pertumbuhan CDC, memahami persentil BMI anak, dan apa yang perlu dilakukan jika berat badan anak di luar rentang normal.",
    tag: "Anak",
    color: "pink",
  },
];

const tagColor: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  orange: "bg-orange-100 text-orange-700",
  cyan: "bg-cyan-100 text-cyan-700",
  purple: "bg-purple-100 text-purple-700",
  pink: "bg-pink-100 text-pink-700",
};

export default function ArtikelIndexPage() {
  return (
    <ArticleLayout activeHref="/artikel">
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">Artikel Kesehatan</h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Informasi kesehatan berbasis data, ditulis dalam Bahasa Indonesia — untuk membantu kamu
          memahami tubuhmu lebih baik.
        </p>
      </header>

      <div className="space-y-4">
        {articles.map((a) => (
          <Link
            key={a.href}
            href={a.href}
            className="block bg-white rounded-2xl border border-emerald-100 p-5 hover:border-emerald-300 hover:shadow-sm transition-all group"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <span className={`inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full mb-2 ${tagColor[a.color]}`}>
                  {a.tag}
                </span>
                <h2 className="text-base font-bold text-emerald-900 group-hover:text-emerald-700 mb-1.5">
                  {a.title}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc}</p>
              </div>
              <span className="text-emerald-300 group-hover:text-emerald-500 transition-colors text-xl shrink-0 mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </ArticleLayout>
  );
}
