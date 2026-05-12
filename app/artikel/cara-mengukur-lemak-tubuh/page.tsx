import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Cara Mengukur Lemak Tubuh yang Akurat — Kauna Healthy",
  description:
    "Persentase lemak tubuh lebih informatif dari sekadar berat badan. Pelajari metode pengukuran, rentang normal berdasarkan usia dan jenis kelamin, serta cara menurunkan lemak tubuh.",
  keywords: ["cara mengukur lemak tubuh", "persentase lemak tubuh normal", "lemak tubuh ideal", "body fat percentage", "cara menurunkan lemak tubuh"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/cara-mengukur-lemak-tubuh" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Mengukur Lemak Tubuh yang Akurat",
  description: "Metode pengukuran lemak tubuh, rentang normal, dan cara menurunkan persentase lemak.",
  url: "https://healthy.getkauna.com/artikel/cara-mengukur-lemak-tubuh",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleLemak() {
  return (
    <ArticleLayout activeHref="/artikel/cara-mengukur-lemak-tubuh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 mb-3">Lemak Tubuh</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Cara Mengukur Lemak Tubuh yang Akurat
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Berat badan bisa menipu. Dua orang dengan berat sama bisa memiliki komposisi tubuh yang sangat berbeda — dan persentase lemak tubuh yang berbeda pula.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa Persentase Lemak Tubuh Penting?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Timbangan hanya mengukur gravitasi yang bekerja pada tubuhmu — tidak membedakan apakah kamu memiliki 30 kg otot atau 30 kg lemak. Persentase lemak tubuh memberikan gambaran yang jauh lebih akurat tentang komposisi tubuhmu dan kondisi kesehatanmu.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Lemak tubuh terbagi menjadi dua kategori:
          </p>
          <div className="space-y-3">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-800 text-sm mb-1">Lemak esensial</p>
              <p className="text-sm text-gray-600 leading-relaxed">Lemak yang diperlukan tubuh untuk fungsi vital — perlindungan organ, produksi hormon, fungsi reproduksi, dan regulasi suhu. Pria butuh minimal 2–5%, wanita 10–13% karena kebutuhan reproduksi yang lebih tinggi.</p>
            </div>
            <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
              <p className="font-semibold text-red-800 text-sm mb-1">Lemak penyimpanan (storage fat)</p>
              <p className="text-sm text-gray-600 leading-relaxed">Lemak yang disimpan sebagai cadangan energi. Dalam jumlah wajar tidak berbahaya, tapi kelebihan — terutama lemak visceral di sekitar organ perut — langsung berkorelasi dengan risiko penyakit kronis.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Metode Pengukuran Lemak Tubuh</h2>
          <div className="space-y-3">
            {[
              {
                name: "DEXA Scan",
                accuracy: "Sangat Akurat",
                badge: "bg-emerald-100 text-emerald-700",
                desc: "Dual-energy X-ray absorptiometry — standar emas pengukuran komposisi tubuh. Bisa membedakan lemak, otot, dan tulang di setiap bagian tubuh. Mahal (Rp 500rb–1,5jt) dan hanya tersedia di fasilitas medis tertentu.",
              },
              {
                name: "BIA (Bioelectrical Impedance Analysis)",
                accuracy: "Cukup Akurat",
                badge: "bg-blue-100 text-blue-700",
                desc: "Mengalirkan arus listrik kecil melalui tubuh. Tersedia di timbangan pintar modern dan alat khusus di gym atau klinik. Akurasi dipengaruhi tingkat hidrasi — ukur di waktu yang sama dan kondisi yang konsisten.",
              },
              {
                name: "Skinfold Calipers",
                accuracy: "Moderat",
                badge: "bg-yellow-100 text-yellow-700",
                desc: "Mengukur ketebalan lipatan kulit di titik-titik tertentu menggunakan alat jepit. Murah dan portabel, tapi sangat tergantung keahlian pengukur. Error bisa cukup besar jika tidak dilakukan dengan benar.",
              },
              {
                name: "Rumus Deurenberg (Formula)",
                accuracy: "Estimasi",
                badge: "bg-gray-100 text-gray-700",
                desc: "Menghitung persentase lemak tubuh berdasarkan BMI, usia, dan jenis kelamin. Tidak memerlukan alat khusus. Akurasi lebih rendah tapi cukup untuk estimasi umum — yang digunakan kalkulator Kauna Healthy.",
              },
            ].map((item) => (
              <div key={item.name} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-semibold text-emerald-800 text-sm">{item.name}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.badge}`}>{item.accuracy}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tabel Persentase Lemak Tubuh Normal</h2>
          <p className="text-sm text-gray-500 mb-4">Berdasarkan American Council on Exercise (ACE):</p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-3">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Kategori</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Pria</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Wanita</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { cat: "Esensial", men: "2–5%", women: "10–13%", color: "text-blue-600" },
                  { cat: "Atlet", men: "6–13%", women: "14–20%", color: "text-emerald-600" },
                  { cat: "Kebugaran", men: "14–17%", women: "21–24%", color: "text-green-600" },
                  { cat: "Rata-rata", men: "18–24%", women: "25–31%", color: "text-yellow-600" },
                  { cat: "Obesitas", men: "≥ 25%", women: "≥ 32%", color: "text-red-600" },
                ].map((row) => (
                  <tr key={row.cat} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className={`px-4 py-3 font-semibold ${row.color}`}>{row.cat}</td>
                    <td className="px-4 py-3 font-mono text-blue-600">{row.men}</td>
                    <td className="px-4 py-3 font-mono text-pink-600">{row.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Catatan: rentang ini dapat bervariasi berdasarkan usia. Pada usia di atas 40 tahun, persentase lemak sedikit lebih tinggi masih dianggap normal.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Menurunkan Persentase Lemak Tubuh</h2>
          <p className="text-sm text-gray-600 mb-4 leading-relaxed">
            Menurunkan lemak tubuh membutuhkan tiga komponen yang bekerja bersama:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "1. Defisit kalori yang terkendali",
                body: "Kurangi 300–500 kcal dari TDEE per hari. Defisit terlalu besar justru memperlambat metabolisme dan menyebabkan kehilangan massa otot yang tidak diinginkan. Targetkan penurunan 0,5–1% lemak tubuh per bulan.",
                color: "border-blue-300",
              },
              {
                title: "2. Latihan beban (resistance training)",
                body: "Latihan beban mempertahankan massa otot saat defisit kalori — tanpa ini, tubuh akan membakar otot bersama lemak. Targetkan 2–4 sesi per minggu dengan progresif overload.",
                color: "border-emerald-300",
              },
              {
                title: "3. Asupan protein yang cukup",
                body: "Konsumsi 1,6–2,2 gram protein per kilogram berat badan per hari. Protein membantu mempertahankan massa otot, meningkatkan rasa kenyang, dan memiliki efek termogenik (tubuh membakar lebih banyak kalori untuk mencernanya).",
                color: "border-purple-300",
              },
            ].map((item) => (
              <div key={item.title} className={`border-l-4 pl-4 ${item.color}`}>
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Hal yang Perlu Dihindari</h2>
          <div className="space-y-2">
            {[
              "Diet ekstrem di bawah 1.200 kcal/hari (wanita) atau 1.500 kcal/hari (pria) — memperlambat metabolisme dan menyebabkan efek yo-yo.",
              "Terlalu fokus pada timbangan — berat badan bisa naik saat membangun otot meski lemak berkurang. Ukur juga lingkar pinggang dan persentase lemak secara berkala.",
              "Kardio berlebihan tanpa latihan beban — bisa menyebabkan kehilangan massa otot yang signifikan.",
              "Mengandalkan suplemen pembakar lemak tanpa mengubah pola makan dan olahraga.",
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-red-50 border border-red-100 p-3">
                <span className="text-red-400 font-bold text-sm mt-0.5 shrink-0">✗</span>
                <p className="text-sm text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Artikel ini bersifat edukatif. Persentase lemak tubuh yang sangat rendah (di bawah esensial) bisa berbahaya. Konsultasikan dengan profesional kesehatan sebelum memulai program penurunan lemak yang agresif.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Hitung persentase lemak tubuhmu</p>
          <p className="text-emerald-100 text-xs mb-3">Estimasi berdasarkan BMI, usia, dan jenis kelamin</p>
          <Link
            href="/lemak"
            className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            Buka Kalkulator Lemak Tubuh →
          </Link>
        </div>

      </div>
    </ArticleLayout>
  );
}
