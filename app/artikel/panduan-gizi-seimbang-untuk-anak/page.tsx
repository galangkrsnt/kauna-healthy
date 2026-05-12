import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Panduan Gizi Seimbang untuk Anak: Apa yang Perlu Orang Tua Tahu — Kauna Healthy",
  description:
    "Panduan praktis gizi seimbang untuk anak usia 1–18 tahun: kebutuhan kalori, protein, kalsium, zat besi, dan vitamin D sesuai usia, serta tips agar anak mau makan sehat.",
  keywords: ["gizi anak", "makanan sehat anak", "kebutuhan nutrisi anak", "pola makan anak sehat", "gizi seimbang anak Indonesia"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/panduan-gizi-seimbang-untuk-anak" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Panduan Gizi Seimbang untuk Anak: Apa yang Perlu Orang Tua Tahu",
  description: "Kebutuhan nutrisi anak sesuai usia dan tips praktis agar anak makan sehat.",
  url: "https://healthy.getkauna.com/artikel/panduan-gizi-seimbang-untuk-anak",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleGiziAnak() {
  return (
    <ArticleLayout activeHref="/artikel/panduan-gizi-seimbang-untuk-anak">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-pink-100 text-pink-700 mb-3">Gizi Anak</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Panduan Gizi Seimbang untuk Anak
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Nutrisi di masa anak-anak menentukan fondasi kesehatan seumur hidup. Ini yang perlu orang tua Indonesia tahu.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa Gizi Anak Sangat Kritis?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Masa anak-anak, terutama 1.000 hari pertama kehidupan (dari konsepsi hingga usia 2 tahun), adalah periode paling kritis dalam pembentukan otak, sistem imun, dan tulang. Kekurangan nutrisi pada periode ini dapat berdampak permanen yang tidak bisa sepenuhnya diperbaiki di kemudian hari.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Indonesia masih menghadapi tantangan gizi ganda: di satu sisi stunting (kurang gizi kronik) masih dialami 1 dari 5 anak, di sisi lain obesitas anak meningkat pesat seiring perubahan pola makan ke makanan ultra-proses. Keduanya sama-sama berbahaya.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Kebutuhan Kalori Anak Sesuai Usia</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-3">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Usia</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Laki-laki</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Perempuan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { age: "1–3 tahun", boys: "1.000–1.400 kcal", girls: "1.000–1.400 kcal" },
                  { age: "4–8 tahun", boys: "1.200–1.600 kcal", girls: "1.200–1.400 kcal" },
                  { age: "9–13 tahun", boys: "1.600–2.200 kcal", girls: "1.400–2.000 kcal" },
                  { age: "14–18 tahun", boys: "2.000–3.200 kcal", girls: "1.800–2.400 kcal" },
                ].map((row) => (
                  <tr key={row.age} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.age}</td>
                    <td className="px-4 py-3 font-mono text-blue-600 text-xs sm:text-sm">{row.boys}</td>
                    <td className="px-4 py-3 font-mono text-pink-600 text-xs sm:text-sm">{row.girls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Sumber: Dietary Reference Intakes (DRI), Institute of Medicine. Rentang bervariasi berdasarkan tingkat aktivitas.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Nutrisi Kritis untuk Tumbuh Kembang Anak</h2>
          <div className="space-y-3">
            {[
              {
                nutrient: "Protein",
                role: "Membangun dan memperbaiki jaringan tubuh, termasuk otot dan otak.",
                source: "Telur, ayam, ikan, tempe, tahu, kacang-kacangan, susu",
                need: "0,85–1,1 g/kg berat badan/hari (meningkat saat pubertas)",
              },
              {
                nutrient: "Kalsium",
                role: "Membangun kepadatan tulang dan gigi — investasi kesehatan tulang seumur hidup.",
                source: "Susu, keju, yogurt, ikan teri, bayam, brokoli, tahu",
                need: "700–1.300 mg/hari (tertinggi pada usia 9–18 tahun saat pertumbuhan pesat)",
              },
              {
                nutrient: "Zat Besi",
                role: "Membawa oksigen ke otak dan otot. Kekurangan zat besi adalah penyebab utama anemia dan gangguan kognitif pada anak.",
                source: "Daging merah, hati ayam, tempe, bayam, kacang merah, sereal fortifikasi",
                need: "7–11 mg/hari. Anak perempuan butuh lebih banyak setelah menstruasi dimulai",
              },
              {
                nutrient: "Vitamin D",
                role: "Membantu penyerapan kalsium, mendukung fungsi imun dan perkembangan otak.",
                source: "Paparan sinar matahari (15 menit/hari), ikan berlemak, kuning telur, susu fortifikasi",
                need: "600–1.000 IU/hari. Banyak anak Indonesia defisiensi karena kurang paparan matahari",
              },
              {
                nutrient: "Zinc",
                role: "Penting untuk pertumbuhan, penyembuhan luka, fungsi imun, dan perkembangan seksual.",
                source: "Daging merah, kerang, kacang-kacangan, biji labu, susu",
                need: "3–11 mg/hari (meningkat sesuai usia dan jenis kelamin)",
              },
            ].map((item) => (
              <div key={item.nutrient} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <p className="font-bold text-emerald-800">{item.nutrient}</p>
                  <span className="text-xs text-gray-400 font-mono">{item.need}</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-2">{item.role}</p>
                <p className="text-xs text-emerald-600 font-medium">Sumber: {item.source}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Pola Makan Sehat untuk Anak: Panduan Praktis</h2>
          <div className="space-y-3">
            {[
              { title: "Isi setengah piring dengan buah dan sayur", body: "Targetkan variasi warna — setiap warna mengandung fitonutrien berbeda. Sajikan sayuran dalam berbagai bentuk: sop, tumis, atau sebagai snack dengan saus yogurt." },
              { title: "Seperempat piring karbohidrat kompleks", body: "Nasi, oat, roti gandum, ubi, atau jagung. Hindari mengganti ini dengan nasi putih + mie instan setiap hari — variasi sumber karbohidrat penting." },
              { title: "Seperempat piring protein", body: "Telur, ayam, ikan, tempe, atau tahu di setiap makan. Anak yang mendapat cukup protein jarang ngemil berlebih karena lebih kenyang." },
              { title: "Susu atau produk susu 2–3 porsi sehari", body: "Untuk anak 1–8 tahun: 2 gelas susu per hari. Usia 9–18 tahun: 3 gelas. Alternatinya: yogurt atau keju." },
              { title: "Batasi ultra-proses dan gula tambahan", body: "WHO merekomendasikan gula bebas kurang dari 10% total kalori — sekitar 6–10 sendok teh per hari. Minuman manis, keripik, dan biskuit komersial sering melebihi batas ini dalam satu porsi." },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-pink-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tips Agar Anak Mau Makan Sehat</h2>
          <div className="space-y-2">
            {[
              "Libatkan anak dalam memilih dan menyiapkan makanan — anak lebih mau makan yang dia bantu buat.",
              "Sajikan makanan baru berulang kali — penelitian menunjukkan anak butuh 10–15 paparan sebelum menerima makanan baru.",
              "Jangan gunakan dessert sebagai hadiah makan sayur — ini menciptakan hubungan emosional tidak sehat dengan makanan.",
              "Makan bersama sebagai keluarga sebanyak mungkin — anak meniru kebiasaan makan orang tua.",
              "Variasikan tampilan makanan — sayuran yang sama bisa lebih menarik jika dipotong berbeda atau dicampur dalam nasi goreng.",
              "Jangan paksa habiskan makanan — ajarkan anak mengenali sinyal lapar dan kenyang tubuhnya sendiri.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-xl bg-pink-50 border border-pink-100 p-3">
                <span className="text-pink-500 font-bold text-sm mt-0.5 shrink-0">✓</span>
                <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Catatan untuk Orang Tua</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Artikel ini adalah panduan umum. Setiap anak unik — kebutuhan nutrisi bisa berbeda berdasarkan kondisi medis, alergi, atau kebutuhan khusus lainnya. Konsultasikan dengan dokter anak atau ahli gizi anak untuk panduan yang dipersonalisasi.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Cek status pertumbuhan anak</p>
          <p className="text-emerald-100 text-xs mb-3">BMI dan persentil berdasarkan grafik CDC untuk usia 2–18 tahun</p>
          <Link href="/anak" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
            Kalkulator BMI Anak →
          </Link>
        </div>

      </div>
    </ArticleLayout>
  );
}
