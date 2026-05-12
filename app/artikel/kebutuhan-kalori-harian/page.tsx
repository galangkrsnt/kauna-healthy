import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Berapa Kebutuhan Kalori Harian Kamu? Panduan TDEE Lengkap — Kauna Healthy",
  description:
    "Pelajari cara menghitung kebutuhan kalori harian (TDEE) berdasarkan usia, berat badan, dan aktivitas. Panduan lengkap untuk turun berat badan, menjaga berat, atau bulking.",
  keywords: ["kebutuhan kalori harian", "cara hitung TDEE", "kalori untuk diet", "berapa kalori per hari", "BMR adalah", "kalkulator kalori"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/kebutuhan-kalori-harian" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Berapa Kebutuhan Kalori Harian Kamu? Panduan TDEE Lengkap",
  description: "Panduan lengkap menghitung TDEE — total energi yang dibutuhkan tubuhmu per hari.",
  url: "https://healthy.getkauna.com/artikel/kebutuhan-kalori-harian",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleKalori() {
  return (
    <ArticleLayout activeHref="/artikel/kebutuhan-kalori-harian">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 mb-3">Kalori</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Berapa Kebutuhan Kalori Harian Kamu?
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Memahami TDEE adalah kunci untuk mengatur berat badan secara efektif — apakah tujuanmu turun, naik, atau menjaga berat badan.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Apa itu Kalori?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Kalori adalah satuan energi. Tubuhmu membutuhkan energi untuk setiap fungsi — dari bernapas, memompa darah, hingga berjalan dan berolahraga. Semua energi itu berasal dari makanan dan minuman yang kamu konsumsi.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Keseimbangan kalori adalah konsep fundamental dalam pengelolaan berat badan: jika kamu makan lebih banyak dari yang dibakar, berat badan naik. Jika lebih sedikit, berat badan turun. Jika sama, berat badan stabil.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">BMR vs TDEE: Apa Bedanya?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Dua angka yang perlu kamu pahami:
          </p>
          <div className="space-y-3 mb-4">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-800 text-sm mb-1">BMR (Basal Metabolic Rate)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Jumlah kalori minimum yang dibutuhkan tubuhmu untuk mempertahankan fungsi vital — jantung berdetak, paru-paru bernapas, otak berfungsi — jika kamu berbaring diam sepanjang hari. Ini adalah "tarif dasar" metabolismemu.
              </p>
            </div>
            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
              <p className="font-semibold text-orange-800 text-sm mb-1">TDEE (Total Daily Energy Expenditure)</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Total kalori yang kamu bakar dalam sehari, sudah termasuk semua aktivitas — dari bangun tidur, kerja, olahraga, hingga aktivitas rumah tangga. TDEE = BMR × faktor aktivitas. Ini adalah angka yang paling relevan untuk perencanaan diet.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tabel Kebutuhan Kalori Harian Berdasarkan Aktivitas</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-3">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Tingkat Aktivitas</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Wanita</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Pria</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { level: "Sangat ringan (duduk sepanjang hari)", women: "1.600–1.800 kcal", men: "2.000–2.200 kcal" },
                  { level: "Ringan (olahraga 1–3x/minggu)", women: "1.800–2.000 kcal", men: "2.200–2.500 kcal" },
                  { level: "Sedang (olahraga 3–5x/minggu)", women: "2.000–2.200 kcal", men: "2.500–2.800 kcal" },
                  { level: "Berat (olahraga intensif setiap hari)", women: "2.200–2.500 kcal", men: "2.800–3.200 kcal" },
                  { level: "Sangat berat (atlet/kerja fisik berat)", women: "2.500+ kcal", men: "3.200+ kcal" },
                ].map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.level}</td>
                    <td className="px-4 py-3 font-mono text-pink-600">{row.women}</td>
                    <td className="px-4 py-3 font-mono text-blue-600">{row.men}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Estimasi umum. Angka aktual bervariasi berdasarkan usia, berat, dan tinggi badan.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Menggunakan TDEE untuk Mencapai Tujuanmu</h2>
          <div className="space-y-3">
            {[
              {
                title: "Menjaga Berat Badan",
                color: "bg-emerald-50 border-emerald-100",
                titleColor: "text-emerald-800",
                body: "Makan sesuai TDEE-mu. Jika berat badan mulai naik atau turun, sesuaikan asupan 100–200 kcal ke arah yang dibutuhkan. Konsistensi lebih penting dari presisi.",
              },
              {
                title: "Menurunkan Berat Badan",
                color: "bg-blue-50 border-blue-100",
                titleColor: "text-blue-800",
                body: "Kurangi 300–500 kcal dari TDEE. Defisit 500 kcal/hari menghasilkan penurunan sekitar 0,5 kg per minggu — aman dan berkelanjutan. Jangan kurangi lebih dari 1.000 kcal karena bisa merusak metabolisme dan kehilangan massa otot.",
              },
              {
                title: "Menaikkan Berat Badan / Massa Otot",
                color: "bg-orange-50 border-orange-100",
                titleColor: "text-orange-800",
                body: "Tambahkan 250–500 kcal di atas TDEE dengan prioritas pada protein (1,6–2,2 g/kg berat badan). Kombinasikan dengan latihan beban agar surplus kalori diubah menjadi otot, bukan lemak.",
              },
            ].map((item) => (
              <div key={item.title} className={`rounded-2xl border p-4 ${item.color}`}>
                <p className={`font-semibold text-sm mb-1.5 ${item.titleColor}`}>{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Makronutrien: Bukan Hanya Soal Kalori</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Kalori total penting, tapi dari mana kalori itu berasal juga berpengaruh besar. Tiga makronutrien utama:
          </p>
          <div className="space-y-3">
            {[
              { macro: "Protein", cal: "4 kcal/gram", role: "Membangun dan mempertahankan massa otot. Paling mengenyangkan. Target: 1,2–2,2 g per kg berat badan per hari, tergantung level aktivitas." },
              { macro: "Karbohidrat", cal: "4 kcal/gram", role: "Sumber energi utama, terutama untuk otak dan otot saat berolahraga. Pilih karbohidrat kompleks (nasi merah, oat, ubi) daripada karbohidrat sederhana." },
              { macro: "Lemak", cal: "9 kcal/gram", role: "Penting untuk hormon, penyerapan vitamin, dan kesehatan sel. Prioritaskan lemak sehat (alpukat, ikan, kacang-kacangan) dan batasi lemak trans." },
            ].map((item) => (
              <div key={item.macro} className="border-l-4 border-emerald-300 pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-emerald-900 text-sm">{item.macro}</p>
                  <span className="text-xs text-gray-400 font-mono">{item.cal}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.role}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tips Praktis Menghitung Kalori Sehari-hari</h2>
          <div className="space-y-2">
            {[
              "Gunakan aplikasi tracking seperti MyFitnessPal atau Cronometer minimal selama 2 minggu untuk membangun kesadaran kalori makananmu.",
              "Timbang berat badan di waktu yang sama setiap minggu (pagi setelah bangun tidur) — bukan setiap hari karena fluktuasi normal bisa mencapai 1–2 kg dalam sehari.",
              "Jika berat badan tidak berubah setelah 2 minggu mengikuti target kalori, kurangi 100–150 kcal lagi — karena TDEE aktual mungkin lebih rendah dari estimasi.",
              "Jangan takut makan lebih banyak di hari olahraga — kebutuhan kalorimu memang meningkat pada hari aktif.",
              "Protein adalah prioritas pertama. Jika harus memilih, lebih baik memenuhi target protein daripada target kalori total.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-gray-50 border border-gray-100 p-3">
                <span className="text-emerald-500 font-bold text-sm mt-0.5 shrink-0">{i + 1}.</span>
                <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Panduan kalori ini bersifat edukatif. Kebutuhan kalori individu bisa berbeda karena kondisi medis, obat-obatan, atau faktor genetik. Konsultasikan dengan ahli gizi untuk program yang dipersonalisasi.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Hitung TDEE kamu sekarang</p>
          <p className="text-emerald-100 text-xs mb-3">Masukkan data kamu dan dapatkan angka kalori yang akurat</p>
          <Link
            href="/kalori"
            className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            Buka Kalkulator Kalori →
          </Link>
        </div>

      </div>
    </ArticleLayout>
  );
}
