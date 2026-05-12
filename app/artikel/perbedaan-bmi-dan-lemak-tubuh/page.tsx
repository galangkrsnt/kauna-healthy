import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Perbedaan BMI dan Persentase Lemak Tubuh: Mana yang Lebih Akurat? — Kauna Healthy",
  description:
    "BMI dan persentase lemak tubuh mengukur hal yang berbeda. Pelajari kapan harus menggunakan BMI, kapan perlu mengukur lemak tubuh, dan mana yang lebih relevan untuk kondisimu.",
  keywords: ["perbedaan BMI dan lemak tubuh", "BMI vs body fat percentage", "mana lebih akurat BMI atau lemak tubuh", "skinny fat", "BMI normal tapi gemuk"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/perbedaan-bmi-dan-lemak-tubuh" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Perbedaan BMI dan Persentase Lemak Tubuh: Mana yang Lebih Akurat?",
  description: "Kapan harus menggunakan BMI dan kapan perlu mengukur lemak tubuh.",
  url: "https://healthy.getkauna.com/artikel/perbedaan-bmi-dan-lemak-tubuh",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleBMIvsLemak() {
  return (
    <ArticleLayout activeHref="/artikel/perbedaan-bmi-dan-lemak-tubuh">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-700 mb-3">Analisis Tubuh</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Perbedaan BMI dan Lemak Tubuh: Mana yang Lebih Akurat?
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          BMI normal bukan jaminan tubuh sehat. Persentase lemak tubuh tinggi bukan berarti kamu harus panik. Pahami dulu apa yang masing-masing ukur.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Perbandingan Cepat: BMI vs Lemak Tubuh</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Aspek</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">BMI</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">% Lemak Tubuh</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50 text-xs sm:text-sm">
                {[
                  { aspect: "Yang diukur", bmi: "Berat vs tinggi badan", fat: "Proporsi lemak dari total berat" },
                  { aspect: "Alat yang dibutuhkan", bmi: "Timbangan + meteran", fat: "BIA, DEXA, atau formula" },
                  { aspect: "Biaya", bmi: "Gratis", fat: "Gratis (formula) hingga mahal (DEXA)" },
                  { aspect: "Akurasi", bmi: "Moderat", fat: "Tinggi (DEXA) hingga moderat (formula)" },
                  { aspect: "Membedakan otot vs lemak", bmi: "Tidak", fat: "Ya" },
                  { aspect: "Cocok untuk atlet", bmi: "Tidak akurat", fat: "Lebih akurat" },
                  { aspect: "Cocok untuk skrining massal", bmi: "Ya", fat: "Tidak praktis" },
                ].map((row) => (
                  <tr key={row.aspect} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.aspect}</td>
                    <td className="px-4 py-3 text-gray-600">{row.bmi}</td>
                    <td className="px-4 py-3 text-gray-600">{row.fat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Kapan BMI Bisa Menyesatkan?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">Ada beberapa situasi di mana BMI memberikan gambaran yang tidak akurat:</p>
          <div className="space-y-3">
            {[
              {
                title: "Atlet dan orang berbadan atletis",
                body: "Otot jauh lebih berat dari lemak dengan volume yang sama. Seorang atlet binaragawan bisa memiliki BMI 28–30 (termasuk overweight/obesitas) padahal persentase lemak tubuhnya hanya 8–12% — jauh lebih sehat dari rata-rata orang.",
                icon: "💪",
              },
              {
                title: "Fenomena 'Skinny Fat'",
                body: "Seseorang dengan BMI normal (18,5–22,9) bisa memiliki persentase lemak tubuh yang tinggi karena massa ototnya sangat sedikit. Secara klinis disebut MONW (Metabolically Obese Normal Weight) — risiko diabetes dan penyakit jantungnya sama dengan orang obesitas.",
                icon: "⚠",
              },
              {
                title: "Lansia",
                body: "Seiring usia, massa otot berkurang secara alami (sarcopenia) dan digantikan lemak. BMI bisa tetap normal, tapi komposisi tubuh sudah tidak sehat. Inilah mengapa banyak lansia dengan BMI normal tetap memiliki risiko metabolik tinggi.",
                icon: "👴",
              },
              {
                title: "Perbedaan ras dan etnis",
                body: "Orang Asia, termasuk Indonesia, memiliki lebih banyak lemak tubuh pada BMI yang sama dibanding orang Kaukasia. Standar BMI global yang dikembangkan berdasarkan populasi Eropa tidak sepenuhnya akurat untuk kita.",
                icon: "🌏",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <div className="flex gap-3 mb-2">
                  <span className="text-xl">{item.icon}</span>
                  <p className="font-semibold text-emerald-800 text-sm pt-0.5">{item.title}</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Kapan Lemak Tubuh Lebih Berguna?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">Ukur persentase lemak tubuh jika kamu:</p>
          <div className="space-y-2">
            {[
              "Berolahraga secara rutin dan ingin memantau komposisi tubuh, bukan sekadar berat badan",
              "BMI kamu di batas atas normal tapi kamu aktif dan berotot",
              "BMI kamu normal tapi kamu merasa tubuhmu lembek dan tidak bertenaga (kemungkinan skinny fat)",
              "Sedang dalam program cutting (menurunkan lemak sambil mempertahankan otot)",
              "Ingin data yang lebih presisi untuk perencanaan gizi dan latihan",
            ].map((point, i) => (
              <div key={i} className="flex gap-3 items-start bg-blue-50 border border-blue-100 rounded-xl p-3">
                <span className="text-blue-500 font-bold text-sm mt-0.5 shrink-0">✓</span>
                <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Pendekatan Terbaik: Gunakan Keduanya</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            BMI dan persentase lemak tubuh bukan kompetitor — mereka saling melengkapi. Gunakan BMI sebagai skrining awal yang mudah dan murah. Jika hasilnya meragukan (BMI normal tapi merasa tidak sehat, atau BMI tinggi tapi kamu sangat aktif), tambahkan pengukuran lemak tubuh.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Untuk gambaran kesehatan yang lebih lengkap, tambahkan juga pengukuran <strong>lingkar pinggang</strong> — karena lemak visceral di perut adalah yang paling berbahaya dan bisa dideteksi dengan ukuran sederhana ini.
          </p>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
            <p className="text-sm font-semibold text-emerald-800 mb-2">Kombinasi ideal untuk skrining kesehatan:</p>
            <div className="space-y-1">
              {["BMI — gambaran umum proporsi berat vs tinggi", "Lingkar Pinggang / WHtR — deteksi lemak visceral berbahaya", "% Lemak Tubuh — komposisi tubuh sesungguhnya"].map((item, i) => (
                <div key={i} className="flex gap-2 text-sm text-gray-600">
                  <span className="text-emerald-500 font-bold shrink-0">{i + 1}.</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Tidak ada satu pun alat pengukuran yang sempurna. Untuk evaluasi kesehatan yang komprehensif, konsultasikan dengan dokter atau tenaga kesehatan yang dapat melakukan pemeriksaan menyeluruh.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Coba semua kalkulator kami</p>
          <p className="text-emerald-100 text-xs mb-4">BMI, lemak tubuh, dan lingkar pinggang — gratis semua</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">BMI →</Link>
            <Link href="/lemak" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Lemak Tubuh →</Link>
            <Link href="/pinggang" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Lingkar Pinggang →</Link>
          </div>
        </div>

      </div>
    </ArticleLayout>
  );
}
