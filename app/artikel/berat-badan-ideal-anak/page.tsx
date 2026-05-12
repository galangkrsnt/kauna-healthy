import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Berat Badan Ideal Anak Berdasarkan Usia — Kauna Healthy",
  description:
    "Panduan memahami grafik pertumbuhan CDC, persentil BMI anak, dan cara mengetahui apakah berat badan anakmu termasuk normal, kurang, atau berlebih berdasarkan usia.",
  keywords: ["berat badan ideal anak", "BMI anak normal", "tabel berat badan anak", "grafik pertumbuhan anak", "persentil berat badan anak"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/berat-badan-ideal-anak" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Berat Badan Ideal Anak Berdasarkan Usia",
  description: "Panduan membaca grafik pertumbuhan CDC dan memahami persentil BMI anak.",
  url: "https://healthy.getkauna.com/artikel/berat-badan-ideal-anak",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleAnak() {
  return (
    <ArticleLayout activeHref="/artikel/berat-badan-ideal-anak">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 mb-3">Anak</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Berat Badan Ideal Anak Berdasarkan Usia
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Berat badan anak tidak bisa dinilai hanya dari angka di timbangan — perlu dibandingkan dengan grafik pertumbuhan sesuai usia dan jenis kelamin.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa BMI Anak Berbeda dari BMI Dewasa?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Pada orang dewasa, BMI di atas 25 selalu berarti overweight. Tapi pada anak-anak, interpretasi BMI jauh lebih kompleks karena:
          </p>
          <div className="space-y-2 mb-3">
            {[
              "Proporsi lemak tubuh, otot, dan tulang berubah drastis seiring pertumbuhan",
              "Anak laki-laki dan perempuan tumbuh dengan pola yang berbeda",
              "Ada percepatan pertumbuhan (growth spurt) di usia tertentu yang mengubah BMI secara tiba-tiba",
            ].map((point, i) => (
              <div key={i} className="flex gap-3 items-start bg-pink-50 border border-pink-100 rounded-xl p-3">
                <span className="text-pink-400 font-bold text-sm mt-0.5 shrink-0">•</span>
                <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
          <p className="leading-relaxed text-sm sm:text-base">
            Karena itu, BMI anak dinilai menggunakan <strong>persentil</strong> — membandingkan BMI anak dengan distribusi BMI anak-anak lain pada usia dan jenis kelamin yang sama. Standar yang digunakan adalah grafik pertumbuhan CDC (Centers for Disease Control and Prevention) untuk anak usia 2–18 tahun.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Membaca Persentil BMI Anak</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Persentil</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Kategori</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Artinya</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { p: "< P5", cat: "Berat kurang", meaning: "BMI lebih rendah dari 95% anak seusianya", color: "text-blue-600" },
                  { p: "P5 – P84", cat: "Normal / Sehat", meaning: "Rentang yang disarankan untuk pertumbuhan sehat", color: "text-emerald-600" },
                  { p: "P85 – P94", cat: "Overweight (berisiko)", meaning: "BMI lebih tinggi dari 85% tapi lebih rendah dari 95% anak seusianya", color: "text-yellow-600" },
                  { p: "≥ P95", cat: "Obesitas", meaning: "BMI lebih tinggi dari 95% anak seusianya", color: "text-red-600" },
                ].map((row) => (
                  <tr key={row.p} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-mono font-semibold text-gray-700">{row.p}</td>
                    <td className={`px-4 py-3 font-semibold ${row.color}`}>{row.cat}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.meaning}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            <strong>Contoh:</strong> Anak laki-laki usia 8 tahun dengan BMI di persentil ke-60 berarti BMI-nya lebih tinggi dari 60% anak laki-laki usia 8 tahun, dan lebih rendah dari 40% lainnya. Ini masuk kategori normal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tabel Berat Badan Ideal Anak (Referensi Umum)</h2>
          <p className="text-sm text-gray-500 mb-4">Rentang berat badan normal berdasarkan persentil P5–P85 dari grafik CDC (estimasi):</p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-3">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Usia</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Anak Laki-laki</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Anak Perempuan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { age: "2 tahun", boys: "11–15 kg", girls: "10–14 kg" },
                  { age: "4 tahun", boys: "14–19 kg", girls: "13–18 kg" },
                  { age: "6 tahun", boys: "17–25 kg", girls: "16–24 kg" },
                  { age: "8 tahun", boys: "21–32 kg", girls: "20–31 kg" },
                  { age: "10 tahun", boys: "26–41 kg", girls: "25–41 kg" },
                  { age: "12 tahun", boys: "32–52 kg", girls: "32–53 kg" },
                  { age: "14 tahun", boys: "40–64 kg", girls: "40–59 kg" },
                  { age: "16 tahun", boys: "49–74 kg", girls: "45–64 kg" },
                ].map((row) => (
                  <tr key={row.age} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.age}</td>
                    <td className="px-4 py-3 text-blue-600 text-sm">{row.boys}</td>
                    <td className="px-4 py-3 text-pink-600 text-sm">{row.girls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Sumber: CDC Growth Charts, 2000. Rentang ini adalah estimasi — persentil aktual bergantung pada tinggi badan anak.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Faktor yang Memengaruhi Pertumbuhan Anak</h2>
          <div className="space-y-3">
            {[
              { factor: "Genetik", detail: "Tinggi dan berat badan orang tua adalah prediktor terkuat pertumbuhan anak. Anak dari orang tua berbadan besar cenderung tumbuh lebih besar — ini bukan masalah selama berada dalam rentang persentil yang sehat." },
              { factor: "Asupan nutrisi", detail: "Kecukupan protein, zat besi, kalsium, zinc, dan vitamin D sangat penting untuk pertumbuhan optimal. Kekurangan nutrisi di usia dini bisa berdampak permanen pada tinggi badan akhir." },
              { factor: "Aktivitas fisik", detail: "Anak aktif cenderung memiliki komposisi tubuh yang lebih sehat. Aktivitas fisik juga merangsang produksi hormon pertumbuhan secara alami." },
              { factor: "Kualitas tidur", detail: "Hormon pertumbuhan (GH) diproduksi terutama saat tidur nyenyak. Anak yang kurang tidur bisa mengalami gangguan pertumbuhan. Anak usia sekolah butuh 9–11 jam tidur per malam." },
              { factor: "Kondisi medis", detail: "Penyakit kronis, alergi yang tidak tertangani, atau gangguan hormonal bisa memengaruhi pertumbuhan. Jika anak tidak tumbuh sesuai kurva, konsultasikan dengan dokter anak." },
            ].map((item) => (
              <div key={item.factor} className="border-l-4 border-pink-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.factor}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Apa yang Harus Dilakukan Jika Berat Badan Anak Tidak Normal?</h2>
          <div className="space-y-3">
            {[
              {
                title: "Jika persentil < P5 (berat kurang)",
                steps: [
                  "Evaluasi asupan kalori dan nutrisi — apakah anak makan cukup dan variatif?",
                  "Periksa apakah ada penyakit atau alergi yang menyebabkan penyerapan nutrisi buruk",
                  "Konsultasi dengan dokter anak untuk pemeriksaan lebih lanjut",
                ],
              },
              {
                title: "Jika persentil ≥ P85 (overweight atau obesitas)",
                steps: [
                  "Kurangi makanan ultra-proses, minuman manis, dan snack tinggi kalori",
                  "Tingkatkan aktivitas fisik — minimal 60 menit per hari sesuai rekomendasi WHO",
                  "Jangan berdiet ketat pada anak — yang dibutuhkan adalah perubahan gaya hidup keluarga",
                  "Pantau persentil secara berkala (setiap 3–6 bulan), bukan berat badan harian",
                ],
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <p className="font-semibold text-emerald-800 text-sm mb-3">{item.title}</p>
                <ul className="space-y-1.5">
                  {item.steps.map((step, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-emerald-500 text-sm font-bold mt-0.5 shrink-0">{i + 1}.</span>
                      <p className="text-sm text-gray-600 leading-relaxed">{step}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Catatan Penting untuk Orang Tua</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Persentil BMI adalah alat skrining, bukan diagnosis. Satu pengukuran tidak cukup — yang penting adalah tren pertumbuhan dari waktu ke waktu. Selalu diskusikan hasil dengan dokter anak sebelum mengambil keputusan terkait diet atau gaya hidup anak.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Cek BMI dan persentil anak sekarang</p>
          <p className="text-emerald-100 text-xs mb-3">Berdasarkan grafik pertumbuhan CDC untuk usia 2–18 tahun</p>
          <Link
            href="/anak"
            className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            Buka Kalkulator BMI Anak →
          </Link>
        </div>

      </div>
    </ArticleLayout>
  );
}
