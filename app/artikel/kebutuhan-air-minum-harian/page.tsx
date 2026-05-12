import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Kebutuhan Air Minum Per Hari: Panduan Lengkap — Kauna Healthy",
  description:
    "Berapa liter air yang harus diminum setiap hari? Pelajari faktor yang memengaruhi kebutuhan air, tanda dehidrasi, dan cara memenuhi kebutuhan cairan tubuhmu.",
  keywords: ["kebutuhan air minum per hari", "berapa liter air per hari", "tanda dehidrasi", "cara minum air yang cukup", "hidrasi tubuh"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/kebutuhan-air-minum-harian" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kebutuhan Air Minum Per Hari: Panduan Lengkap",
  description: "Berapa liter air yang harus diminum setiap hari dan faktor yang memengaruhinya.",
  url: "https://healthy.getkauna.com/artikel/kebutuhan-air-minum-harian",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleAir() {
  return (
    <ArticleLayout activeHref="/artikel/kebutuhan-air-minum-harian">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-100 text-cyan-700 mb-3">Hidrasi</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Kebutuhan Air Minum Per Hari: Panduan Lengkap
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Lebih dari sekadar "8 gelas sehari" — kebutuhan air tiap orang berbeda dan dipengaruhi banyak faktor.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa Air Sangat Penting bagi Tubuh?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Tubuh manusia terdiri dari sekitar 60% air. Air bukan sekadar minuman — ia adalah medium utama seluruh proses biologis yang menjaga kamu tetap hidup dan sehat.
          </p>
          <div className="space-y-2">
            {[
              "Mengatur suhu tubuh melalui keringat dan respirasi",
              "Mengangkut nutrisi dan oksigen ke seluruh sel tubuh",
              "Membantu pembuangan racun melalui urin, keringat, dan pernapasan",
              "Melindungi sendi dan organ vital sebagai bantalan alami",
              "Mendukung fungsi kognitif — bahkan dehidrasi ringan (1-2%) sudah menurunkan konsentrasi dan suasana hati",
            ].map((point, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-cyan-50 border border-cyan-100 p-3">
                <span className="text-cyan-500 font-bold text-sm mt-0.5 shrink-0">✓</span>
                <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Berapa Liter Air yang Harus Diminum Per Hari?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Rekomendasi populer "8 gelas per hari" (sekitar 2 liter) sebenarnya tidak memiliki dasar ilmiah yang kuat untuk semua orang. Kebutuhan air yang lebih akurat dihitung berdasarkan berat badan: <strong>35 ml per kilogram berat badan</strong> sebagai baseline untuk orang dewasa dengan aktivitas normal.
          </p>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 font-mono text-center text-emerald-800 text-sm sm:text-base mb-4">
            Kebutuhan Air = Berat Badan (kg) × 35 ml
          </div>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Contoh: orang dengan berat badan 60 kg membutuhkan sekitar 2.100 ml atau 2,1 liter per hari dalam kondisi normal. Angka ini meningkat signifikan jika kamu aktif berolahraga atau tinggal di lingkungan panas.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Berat Badan</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Kebutuhan Dasar</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Setara Gelas (250ml)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { weight: "45 kg", need: "1.575 ml", glass: "~6 gelas" },
                  { weight: "55 kg", need: "1.925 ml", glass: "~8 gelas" },
                  { weight: "65 kg", need: "2.275 ml", glass: "~9 gelas" },
                  { weight: "75 kg", need: "2.625 ml", glass: "~10 gelas" },
                  { weight: "85 kg", need: "2.975 ml", glass: "~12 gelas" },
                ].map((row) => (
                  <tr key={row.weight} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-semibold text-gray-700">{row.weight}</td>
                    <td className="px-4 py-3 font-mono text-cyan-600">{row.need}</td>
                    <td className="px-4 py-3 text-gray-500">{row.glass}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Faktor yang Meningkatkan Kebutuhan Air</h2>
          <div className="space-y-3">
            {[
              { factor: "Olahraga", detail: "Tambahkan 400–600 ml untuk setiap jam olahraga intensitas sedang. Untuk olahraga berat atau lari jarak jauh, kebutuhan bisa mencapai 1 liter lebih per jam." },
              { factor: "Cuaca panas dan lembab", detail: "Indonesia dengan iklim tropis menambah kebutuhan cairan karena keringat lebih banyak keluar. Di hari sangat panas, tambahkan 500 ml dari kebutuhan dasar." },
              { factor: "Demam, muntah, atau diare", detail: "Kondisi ini menyebabkan kehilangan cairan yang signifikan. Kebutuhan air bisa meningkat 2x lipat atau lebih — konsultasi dokter jika kondisi berat." },
              { factor: "Kehamilan dan menyusui", detail: "Ibu hamil butuh tambahan ~300 ml per hari. Ibu menyusui butuh tambahan ~700–900 ml karena ASI terdiri dari air." },
              { factor: "Konsumsi kafein dan alkohol", detail: "Kopi dan teh memiliki efek diuretik ringan. Untuk setiap cangkir kopi, tambahkan sekitar 150 ml air ekstra." },
            ].map((item) => (
              <div key={item.factor} className="border-l-4 border-cyan-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.factor}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tanda-tanda Dehidrasi yang Sering Diabaikan</h2>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Rasa haus adalah tanda dehidrasi yang sudah terlambat — pada saat kamu merasa haus, tubuh sudah dalam kondisi kekurangan cairan 1–2%. Perhatikan tanda-tanda lebih awal:
          </p>
          <div className="space-y-2">
            {[
              { sign: "Urin berwarna kuning gelap atau oranye", severity: "⚠ Perhatian" },
              { sign: "Sakit kepala ringan tanpa sebab jelas", severity: "⚠ Perhatian" },
              { sign: "Sulit berkonsentrasi atau merasa lelah", severity: "⚠ Perhatian" },
              { sign: "Mulut dan bibir kering", severity: "⚠ Perhatian" },
              { sign: "Jarang buang air kecil (kurang dari 4x sehari)", severity: "🔴 Segera minum" },
              { sign: "Pusing saat berdiri", severity: "🔴 Segera minum" },
              { sign: "Tidak ada keringat meski di lingkungan panas", severity: "🚨 Konsultasi dokter" },
            ].map((item) => (
              <div key={item.sign} className="flex items-center justify-between gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-2.5">
                <p className="text-sm text-gray-700">{item.sign}</p>
                <span className="text-xs font-semibold text-red-500 shrink-0">{item.severity}</span>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tips Praktis Minum Air Lebih Banyak</h2>
          <div className="space-y-2">
            {[
              "Bawa botol air 500–750 ml ke mana-mana dan targetkan menghabiskannya minimal 3–4x sehari.",
              "Minum 1 gelas air besar segera setelah bangun tidur — tubuhmu sudah 6–8 jam tanpa cairan.",
              "Pasang alarm pengingat di HP setiap 1–2 jam sebagai pengingat minum.",
              "Makan buah dan sayur dengan kandungan air tinggi: semangka (92%), mentimun (95%), tomat (94%), stroberi (91%).",
              "Gunakan warna urin sebagai panduan: kuning muda seperti limun = hidrasi baik. Kuning gelap = kurang minum.",
              "Jangan tunggu haus — minum secara teratur meski belum merasa haus.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-gray-50 border border-gray-100 p-3">
                <span className="text-cyan-500 font-bold text-sm mt-0.5 shrink-0">{i + 1}.</span>
                <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Artikel ini bersifat edukatif. Kebutuhan cairan bisa berbeda pada kondisi medis tertentu seperti penyakit ginjal, gagal jantung, atau diabetes. Konsultasikan dengan doktermu untuk rekomendasi yang dipersonalisasi.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Hitung kebutuhan air minummu</p>
          <p className="text-emerald-100 text-xs mb-3">Berdasarkan berat badan, aktivitas, dan kondisi spesifikmu</p>
          <Link
            href="/air"
            className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            Buka Kalkulator Air Minum →
          </Link>
        </div>

      </div>
    </ArticleLayout>
  );
}
