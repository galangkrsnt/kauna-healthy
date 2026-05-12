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
  {
    href: "/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat",
    title: "Cara Turun Berat Badan Tanpa Diet Ketat",
    desc: "Diet ekstrem tidak berhasil jangka panjang. Pelajari pendekatan ilmiah: 7 perubahan kecil yang berdampak besar tanpa menyiksa diri.",
    tag: "Diet",
    color: "emerald",
  },
  {
    href: "/artikel/perbedaan-bmi-dan-lemak-tubuh",
    title: "BMI vs Lemak Tubuh: Mana Lebih Akurat?",
    desc: "BMI dan persentase lemak tubuh mengukur hal berbeda. Kapan harus pakai BMI, kapan perlu ukur lemak tubuh, dan kapan keduanya menyesatkan.",
    tag: "Analisis Tubuh",
    color: "blue",
  },
  {
    href: "/artikel/bahaya-lemak-perut-visceral",
    title: "Bahaya Lemak Perut (Visceral)",
    desc: "Lemak di dalam perut yang mengelilingi organ jauh lebih berbahaya dari lemak yang bisa dicubit. Pelajari risikonya dan cara mengukurnya.",
    tag: "Kesehatan Metabolik",
    color: "red",
  },
  {
    href: "/artikel/makanan-tinggi-protein-untuk-diet",
    title: "Makanan Tinggi Protein untuk Diet",
    desc: "Daftar lengkap sumber protein hewani dan nabati terbaik di Indonesia, berapa kebutuhan protein per hari, dan tips memenuhi target proteinmu.",
    tag: "Nutrisi",
    color: "orange",
  },
  {
    href: "/artikel/olahraga-terbaik-untuk-bakar-lemak",
    title: "Olahraga Terbaik untuk Membakar Lemak",
    desc: "Kardio atau latihan beban? Jawabannya tidak sederhana. Pelajari ilmu di balik pembakaran lemak dan cara menyusun program olahraga optimal.",
    tag: "Olahraga",
    color: "green",
  },
  {
    href: "/artikel/tanda-tanda-kurus-tidak-sehat",
    title: "Tanda-tanda Kurus Tidak Sehat (Skinny Fat)",
    desc: "BMI normal bukan jaminan sehat. Skinny fat — kurus tapi lemak tinggi dan otot rendah — memiliki risiko metabolik yang serius.",
    tag: "Komposisi Tubuh",
    color: "purple",
  },
  {
    href: "/artikel/panduan-gizi-seimbang-untuk-anak",
    title: "Panduan Gizi Seimbang untuk Anak",
    desc: "Kebutuhan kalori, protein, kalsium, zat besi, dan vitamin D anak sesuai usia — plus tips praktis agar anak mau makan sehat.",
    tag: "Gizi Anak",
    color: "pink",
  },
  {
    href: "/artikel/efek-kurang-tidur-terhadap-berat-badan",
    title: "Efek Kurang Tidur terhadap Berat Badan",
    desc: "Kurang tidur meningkatkan hormon lapar, menurunkan willpower, dan merusak metabolisme. Inilah mengapa tidur adalah bagian dari diet.",
    tag: "Tidur & Metabolisme",
    color: "indigo",
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
