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
    title: { id: "BMI Normal untuk Orang Indonesia", en: "Normal BMI for Indonesians" },
    desc: {
      id: "Standar BMI untuk populasi Asia-Pasifik berbeda dengan standar global WHO. Pelajari rentang BMI yang berlaku untuk orang Indonesia dan mengapa perbedaan ini penting.",
      en: "BMI standards for the Asia-Pacific population differ from the global WHO standard. Learn the BMI ranges applicable to Indonesians and why this difference matters.",
    },
    tag: { id: "BMI", en: "BMI" },
    color: "emerald",
  },
  {
    href: "/artikel/kebutuhan-kalori-harian",
    title: { id: "Berapa Kebutuhan Kalori Harian Kamu?", en: "How Many Calories Do You Need Per Day?" },
    desc: {
      id: "Panduan lengkap menghitung TDEE — total energi yang dibutuhkan tubuhmu per hari berdasarkan usia, berat badan, dan tingkat aktivitas.",
      en: "A complete guide to calculating TDEE — the total energy your body needs per day based on age, weight, and activity level.",
    },
    tag: { id: "Kalori", en: "Calories" },
    color: "orange",
  },
  {
    href: "/artikel/kebutuhan-air-minum-harian",
    title: { id: "Kebutuhan Air Minum Per Hari", en: "Daily Water Intake Requirements" },
    desc: {
      id: "Berapa liter air yang harus diminum setiap hari? Pelajari faktor yang memengaruhi kebutuhan air dan tanda-tanda dehidrasi yang sering diabaikan.",
      en: "How many liters of water should you drink daily? Learn the factors affecting hydration needs and often-ignored signs of dehydration.",
    },
    tag: { id: "Hidrasi", en: "Hydration" },
    color: "cyan",
  },
  {
    href: "/artikel/cara-mengukur-lemak-tubuh",
    title: { id: "Cara Mengukur Lemak Tubuh yang Akurat", en: "How to Accurately Measure Body Fat" },
    desc: {
      id: "Persentase lemak tubuh lebih informatif dari sekadar berat badan. Pelajari metode pengukuran, rentang normal, dan cara menurunkan lemak tubuh.",
      en: "Body fat percentage is more informative than weight alone. Learn measurement methods, normal ranges, and how to reduce body fat.",
    },
    tag: { id: "Lemak Tubuh", en: "Body Fat" },
    color: "purple",
  },
  {
    href: "/artikel/berat-badan-ideal-anak",
    title: { id: "Berat Badan Ideal Anak Berdasarkan Usia", en: "Ideal Child Weight by Age" },
    desc: {
      id: "Panduan membaca grafik pertumbuhan CDC, memahami persentil BMI anak, dan apa yang perlu dilakukan jika berat badan anak di luar rentang normal.",
      en: "A guide to reading CDC growth charts, understanding child BMI percentiles, and what to do if a child's weight falls outside normal range.",
    },
    tag: { id: "Anak", en: "Children" },
    color: "pink",
  },
  {
    href: "/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat",
    title: { id: "Cara Turun Berat Badan Tanpa Diet Ketat", en: "How to Lose Weight Without Crash Dieting" },
    desc: {
      id: "Diet ekstrem tidak berhasil jangka panjang. Pelajari pendekatan ilmiah: 7 perubahan kecil yang berdampak besar tanpa menyiksa diri.",
      en: "Extreme diets don't work long-term. Learn the scientific approach: 7 small changes with big impact without starving yourself.",
    },
    tag: { id: "Diet", en: "Diet" },
    color: "emerald",
  },
  {
    href: "/artikel/perbedaan-bmi-dan-lemak-tubuh",
    title: { id: "BMI vs Lemak Tubuh: Mana Lebih Akurat?", en: "BMI vs Body Fat: Which Is More Accurate?" },
    desc: {
      id: "BMI dan persentase lemak tubuh mengukur hal berbeda. Kapan harus pakai BMI, kapan perlu ukur lemak tubuh, dan kapan keduanya menyesatkan.",
      en: "BMI and body fat percentage measure different things. When to use BMI, when to measure body fat, and when both can be misleading.",
    },
    tag: { id: "Analisis Tubuh", en: "Body Analysis" },
    color: "blue",
  },
  {
    href: "/artikel/bahaya-lemak-perut-visceral",
    title: { id: "Bahaya Lemak Perut (Visceral)", en: "The Dangers of Visceral (Belly) Fat" },
    desc: {
      id: "Lemak di dalam perut yang mengelilingi organ jauh lebih berbahaya dari lemak yang bisa dicubit. Pelajari risikonya dan cara mengukurnya.",
      en: "Fat inside your belly surrounding your organs is far more dangerous than pinchable fat. Learn the risks and how to measure it.",
    },
    tag: { id: "Kesehatan Metabolik", en: "Metabolic Health" },
    color: "red",
  },
  {
    href: "/artikel/makanan-tinggi-protein-untuk-diet",
    title: { id: "Makanan Tinggi Protein untuk Diet", en: "High-Protein Foods for Weight Loss" },
    desc: {
      id: "Daftar lengkap sumber protein hewani dan nabati terbaik di Indonesia, berapa kebutuhan protein per hari, dan tips memenuhi target proteinmu.",
      en: "A complete list of the best animal and plant protein sources, how much protein you need per day, and tips to hit your daily target.",
    },
    tag: { id: "Nutrisi", en: "Nutrition" },
    color: "orange",
  },
  {
    href: "/artikel/olahraga-terbaik-untuk-bakar-lemak",
    title: { id: "Olahraga Terbaik untuk Membakar Lemak", en: "Best Exercises for Burning Fat" },
    desc: {
      id: "Kardio atau latihan beban? Jawabannya tidak sederhana. Pelajari ilmu di balik pembakaran lemak dan cara menyusun program olahraga optimal.",
      en: "Cardio or weight training? The answer isn't simple. Learn the science behind fat burning and how to build an optimal workout program.",
    },
    tag: { id: "Olahraga", en: "Exercise" },
    color: "green",
  },
  {
    href: "/artikel/tanda-tanda-kurus-tidak-sehat",
    title: { id: "Tanda-tanda Kurus Tidak Sehat (Skinny Fat)", en: "Signs of Skinny Fat (MONW)" },
    desc: {
      id: "BMI normal bukan jaminan sehat. Skinny fat — kurus tapi lemak tinggi dan otot rendah — memiliki risiko metabolik yang serius.",
      en: "Normal BMI doesn't guarantee health. Skinny fat — lean but high body fat and low muscle — carries serious metabolic risks.",
    },
    tag: { id: "Komposisi Tubuh", en: "Body Composition" },
    color: "purple",
  },
  {
    href: "/artikel/panduan-gizi-seimbang-untuk-anak",
    title: { id: "Panduan Gizi Seimbang untuk Anak", en: "Balanced Nutrition Guide for Children" },
    desc: {
      id: "Kebutuhan kalori, protein, kalsium, zat besi, dan vitamin D anak sesuai usia — plus tips praktis agar anak mau makan sehat.",
      en: "Calorie, protein, calcium, iron, and vitamin D needs by age — plus practical tips to get children eating healthily.",
    },
    tag: { id: "Gizi Anak", en: "Child Nutrition" },
    color: "pink",
  },
  {
    href: "/artikel/efek-kurang-tidur-terhadap-berat-badan",
    title: { id: "Efek Kurang Tidur terhadap Berat Badan", en: "How Poor Sleep Affects Your Weight" },
    desc: {
      id: "Kurang tidur meningkatkan hormon lapar, menurunkan willpower, dan merusak metabolisme. Inilah mengapa tidur adalah bagian dari diet.",
      en: "Poor sleep raises hunger hormones, reduces willpower, and damages metabolism. Here's why sleep is a core part of any diet.",
    },
    tag: { id: "Tidur & Metabolisme", en: "Sleep & Metabolism" },
    color: "indigo",
  },
];

const tagColor: Record<string, string> = {
  emerald: "bg-emerald-100 text-emerald-700",
  orange: "bg-orange-100 text-orange-700",
  cyan: "bg-cyan-100 text-cyan-700",
  purple: "bg-purple-100 text-purple-700",
  pink: "bg-pink-100 text-pink-700",
  blue: "bg-blue-100 text-blue-700",
  red: "bg-red-100 text-red-700",
  green: "bg-green-100 text-green-700",
  indigo: "bg-indigo-100 text-indigo-700",
};

function ContentId() {
  return (
    <>
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
                  {a.tag.id}
                </span>
                <h2 className="text-base font-bold text-emerald-900 group-hover:text-emerald-700 mb-1.5">
                  {a.title.id}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc.id}</p>
              </div>
              <span className="text-emerald-300 group-hover:text-emerald-500 transition-colors text-xl shrink-0 mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

function ContentEn() {
  return (
    <>
      <header className="mb-10">
        <h1 className="text-3xl font-bold text-emerald-900 mb-2">Health Articles</h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Data-driven health information to help you understand your body better.
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
                  {a.tag.en}
                </span>
                <h2 className="text-base font-bold text-emerald-900 group-hover:text-emerald-700 mb-1.5">
                  {a.title.en}
                </h2>
                <p className="text-sm text-gray-500 leading-relaxed">{a.desc.en}</p>
              </div>
              <span className="text-emerald-300 group-hover:text-emerald-500 transition-colors text-xl shrink-0 mt-1">→</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default function ArtikelIndexPage() {
  return (
    <ArticleLayout activeHref="/artikel" childrenId={<ContentId />} childrenEn={<ContentEn />} />
  );
}
