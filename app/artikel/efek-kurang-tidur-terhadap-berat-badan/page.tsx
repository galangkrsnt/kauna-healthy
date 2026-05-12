import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Efek Kurang Tidur terhadap Berat Badan: Kenapa Tidur Itu Diet — Kauna Healthy",
  description:
    "Kurang tidur bukan hanya bikin mengantuk — ini salah satu sabotase terbesar terhadap program diet. Pelajari mekanisme ilmiahnya dan cara memperbaiki kualitas tidur.",
  keywords: ["efek kurang tidur berat badan", "tidur dan diet", "kurang tidur bikin gemuk", "kualitas tidur dan metabolisme", "hormon tidur dan nafsu makan"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/efek-kurang-tidur-terhadap-berat-badan" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Efek Kurang Tidur terhadap Berat Badan: Kenapa Tidur Itu Diet",
  description: "Mekanisme ilmiah kurang tidur terhadap penambahan berat badan dan cara memperbaikinya.",
  url: "https://healthy.getkauna.com/artikel/efek-kurang-tidur-terhadap-berat-badan",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleTidur() {
  return (
    <ArticleLayout activeHref="/artikel/efek-kurang-tidur-terhadap-berat-badan">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3">Tidur & Metabolisme</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Efek Kurang Tidur terhadap Berat Badan
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Kamu bisa diet ketat dan olahraga rajin, tapi jika tidurmu buruk, hasilnya tidak akan optimal. Inilah mengapa tidur adalah bagian dari program diet yang sering dilupakan.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Angka yang Mengejutkan</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { stat: "+300–500 kcal", desc: "Kalori ekstra yang dimakan orang kurang tidur per hari dibanding yang tidur cukup" },
              { stat: "55%", desc: "Peningkatan risiko obesitas pada orang dewasa yang tidur kurang dari 6 jam per malam" },
              { stat: "2x lipat", desc: "Peningkatan risiko diabetes tipe 2 pada orang dengan gangguan tidur kronis" },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl bg-indigo-50 border border-indigo-100 p-4 text-center">
                <p className="text-2xl font-bold text-indigo-700 mb-1">{item.stat}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 text-center">Sumber: berbagai penelitian meta-analisis, dipublikasikan di jurnal Sleep, Obesity, dan Lancet.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Mekanisme: Bagaimana Kurang Tidur Bikin Gemuk?</h2>
          <div className="space-y-3">
            {[
              {
                title: "Ghrelin meningkat, Leptin menurun",
                body: "Ghrelin adalah hormon lapar yang diproduksi lambung. Leptin adalah hormon kenyang yang diproduksi sel lemak. Kurang tidur satu malam saja meningkatkan ghrelin 15–28% dan menurunkan leptin 15–18% — artinya kamu lebih lapar dan lebih sulit merasa kenyang keesokan harinya.",
                icon: "🍽",
              },
              {
                title: "Kortisol meningkat",
                body: "Kurang tidur memicu respons stres yang meningkatkan kortisol. Kortisol tinggi mendorong nafsu makan tinggi (terutama karbohidrat dan makanan manis), memperlambat pembakaran lemak, dan secara langsung mendorong akumulasi lemak visceral di perut.",
                icon: "😤",
              },
              {
                title: "Penurunan sensitivitas insulin",
                body: "Hanya empat malam tidur kurang dari 6 jam menurunkan sensitivitas insulin hingga 30% — setara dengan efek penambahan berat badan 8–9 kg. Ini meningkatkan risiko diabetes dan membuat tubuh lebih mudah menyimpan kalori sebagai lemak.",
                icon: "📈",
              },
              {
                title: "Aktivasi sistem endocannabinoid",
                body: "Kurang tidur mengaktifkan sistem endocannabinoid di otak — sistem yang sama yang diaktifkan oleh ganja. Efeknya: dorongan kuat untuk makan makanan tinggi kalori yang menyenangkan (snack manis, gorengan) melebihi kebutuhan energi sebenarnya.",
                icon: "🧠",
              },
              {
                title: "Penurunan willpower dan pengambilan keputusan",
                body: "Korteks prefrontal (bagian otak yang mengontrol keputusan dan pengendalian diri) sangat sensitif terhadap kurang tidur. Kamu lebih mudah menyerah pada godaan makanan dan lebih sulit mempertahankan pilihan makanan sehat.",
                icon: "💭",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-emerald-800 text-sm mb-1.5">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Berapa Jam Tidur yang Optimal?</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Usia</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Rekomendasi Tidur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { age: "Bayi (4–12 bulan)", sleep: "12–16 jam (termasuk tidur siang)" },
                  { age: "Balita (1–2 tahun)", sleep: "11–14 jam" },
                  { age: "Prasekolah (3–5 tahun)", sleep: "10–13 jam" },
                  { age: "Usia sekolah (6–12 tahun)", sleep: "9–12 jam" },
                  { age: "Remaja (13–18 tahun)", sleep: "8–10 jam" },
                  { age: "Dewasa (18–64 tahun)", sleep: "7–9 jam" },
                  { age: "Lansia (65+ tahun)", sleep: "7–8 jam" },
                ].map((row) => (
                  <tr key={row.age} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.age}</td>
                    <td className="px-4 py-3 font-semibold text-indigo-600">{row.sleep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Sumber: National Sleep Foundation & American Academy of Sleep Medicine</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Memperbaiki Kualitas Tidur</h2>
          <div className="space-y-2">
            {[
              { tip: "Tidur dan bangun di jam yang sama setiap hari", detail: "Termasuk akhir pekan. Konsistensi jadwal adalah faktor tunggal terpenting untuk kualitas tidur — lebih penting dari berapa jam kamu tidur." },
              { tip: "Buat kamar tidur gelap, sejuk, dan tenang", detail: "Suhu ideal kamar untuk tidur adalah 18–22°C. Gunakan tirai blackout jika perlu. Kegelapan merangsang produksi melatonin." },
              { tip: "Hindari layar 1 jam sebelum tidur", detail: "Cahaya biru dari HP, tablet, dan laptop menekan melatonin dan membuat otak tetap aktif. Ganti dengan membaca buku fisik, meditasi, atau stretching." },
              { tip: "Hindari kafein setelah jam 14.00", detail: "Kafein memiliki half-life 5–6 jam. Kopi jam 15.00 masih separuh aktif di tubuhmu jam 20.00 — mengganggu kemampuan untuk tertidur." },
              { tip: "Olahraga teratur, tapi tidak terlalu dekat waktu tidur", detail: "Olahraga meningkatkan kualitas tidur secara signifikan — tapi hindari olahraga intensitas tinggi dalam 2–3 jam sebelum tidur karena meningkatkan suhu tubuh dan kortisol." },
              { tip: "Kelola stres secara aktif", detail: "Stres yang tidak terkelola adalah penyebab utama insomnia. Journaling, meditasi 10 menit, atau berbicara dengan orang terpercaya membantu menenangkan sistem saraf sebelum tidur." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-white border border-slate-100 rounded-xl p-4">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-0.5">{item.tip}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Tidur dan Diet: Bekerja Sama, Bukan Terpisah</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Jika kamu sedang dalam program penurunan berat badan dan hasilnya lambat padahal sudah menjaga makan dan olahraga, evaluasi tidurmu. Penelitian menunjukkan orang yang tidur cukup (7–9 jam) kehilangan lebih banyak lemak (bukan otot) dari kalori yang sama dibanding yang kurang tidur.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Tidur bukan kemewahan — ini kebutuhan biologis yang setara dengan makan dan olahraga. Perlakukan tidur sebagai bagian tidak terpisahkan dari program kesehatanmu.
          </p>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Gangguan tidur kronis seperti insomnia atau sleep apnea memerlukan penanganan medis profesional. Jika kamu sudah mencoba memperbaiki kebiasaan tidur tapi tetap tidak bisa tidur dengan baik, konsultasikan dengan dokter.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Pantau kesehatan tubuhmu secara menyeluruh</p>
          <p className="text-emerald-100 text-xs mb-4">BMI, kalori, lemak tubuh, dan lebih banyak lagi — gratis</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">BMI →</Link>
            <Link href="/kalori" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Kalori →</Link>
          </div>
        </div>

      </div>
    </ArticleLayout>
  );
}
