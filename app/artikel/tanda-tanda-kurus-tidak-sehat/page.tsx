import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Tanda-tanda Kurus Tidak Sehat (Skinny Fat) yang Sering Diabaikan — Kauna Healthy",
  description:
    "Kurus belum tentu sehat. Pelajari tanda-tanda kurus tidak sehat atau skinny fat, bedanya dengan kurus sehat, dan langkah konkret untuk memperbaiki komposisi tubuh.",
  keywords: ["kurus tidak sehat", "skinny fat", "tanda kurus tidak sehat", "berat badan normal tapi tidak sehat", "skinny fat adalah"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/tanda-tanda-kurus-tidak-sehat" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tanda-tanda Kurus Tidak Sehat (Skinny Fat) yang Sering Diabaikan",
  description: "Kurus belum tentu sehat. Kenali skinny fat dan cara memperbaiki komposisi tubuh.",
  url: "https://healthy.getkauna.com/artikel/tanda-tanda-kurus-tidak-sehat",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleSkinnyFat() {
  return (
    <ArticleLayout activeHref="/artikel/tanda-tanda-kurus-tidak-sehat">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 mb-3">Komposisi Tubuh</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Tanda-tanda Kurus Tidak Sehat yang Sering Diabaikan
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          BMI normal bukan jaminan tubuh sehat. Fenomena "skinny fat" lebih umum dari yang kamu kira — dan lebih berbahaya dari yang terlihat.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Apa Itu Skinny Fat?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            <strong>Skinny fat</strong> (secara klinis disebut MONW — Metabolically Obese Normal Weight) adalah kondisi di mana seseorang memiliki berat badan dan BMI yang terlihat normal atau bahkan kurus, tetapi persentase lemak tubuhnya tinggi dan massa ototnya sangat rendah.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Orang dengan kondisi ini mungkin tidak terlihat gemuk dari luar, tetapi secara metabolik memiliki risiko kesehatan yang setara atau bahkan melebihi orang dengan obesitas — termasuk risiko diabetes tipe 2, penyakit jantung, dan sindrom metabolik.
          </p>
          <div className="rounded-2xl bg-purple-50 border border-purple-100 p-4">
            <p className="text-sm font-semibold text-purple-800 mb-2">Ilustrasi sederhana:</p>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              {[
                { label: "Berat badan", skinny: "55 kg", healthy: "55 kg" },
                { label: "BMI", skinny: "21 (normal)", healthy: "21 (normal)" },
                { label: "% Lemak", skinny: "32% (tinggi)", healthy: "20% (sehat)" },
                { label: "Massa otot", skinny: "Sangat rendah", healthy: "Cukup" },
              ].map((row) => (
                <div key={row.label} className="col-span-1">
                  <p className="font-semibold text-gray-600 mb-1">{row.label}</p>
                  <p className="text-red-500">{row.skinny}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tanda-tanda Kurus Tidak Sehat</h2>
          <div className="space-y-3">
            {[
              { sign: "Tubuh terasa lembek meski berat badan normal", detail: "Sedikit atau tidak ada kepadatan otot. Menekan area lengan, perut, atau paha terasa lembek seperti kapas — bukan kencang." },
              { sign: "Cepat lelah dan tidak bertenaga", detail: "Massa otot yang rendah berarti cadangan energi dan kekuatan fisik yang lebih rendah. Aktivitas sederhana seperti naik tangga atau membawa belanjaan terasa berat." },
              { sign: "Perut buncit meski badan kurus", detail: "Lemak visceral bisa menumpuk di perut meski bagian tubuh lain kurus. Lingkar pinggang yang melebihi batas (90cm pria, 80cm wanita) adalah tanda kuat skinny fat." },
              { sign: "Kadar gula darah atau kolesterol tidak normal", detail: "Pemeriksaan darah bisa mengungkap resistensi insulin, trigliserida tinggi, atau HDL rendah — semua tanda sindrom metabolik yang tidak terlihat dari luar." },
              { sign: "Tidak kuat berolahraga meski 'kurus'", detail: "Kekuatan dan daya tahan yang sangat rendah dibanding orang dengan berat badan serupa — karena tidak ada otot yang mendukung." },
              { sign: "Diet ketat tapi berat badan tidak turun jauh", detail: "Metabolisme basal yang rendah (karena kurang otot) membuat defisit kalori lebih sulit diciptakan. Tubuh cepat menyesuaikan diri dengan asupan rendah." },
            ].map((item) => (
              <div key={item.sign} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <p className="font-semibold text-emerald-800 text-sm mb-1.5">⚠ {item.sign}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Penyebab Utama Skinny Fat</h2>
          <div className="space-y-2">
            {[
              { cause: "Diet ketat tanpa olahraga", desc: "Kehilangan berat badan melalui diet saja (terutama kalori sangat rendah) menyebabkan kehilangan otot bersama lemak — menghasilkan tubuh yang lebih kecil tapi komposisinya tetap buruk." },
              { cause: "Tidak aktif secara fisik", desc: "Gaya hidup sedentary menyebabkan atrofi otot secara bertahap. Massa otot berkurang, digantikan lemak — meski berat badan totalnya tidak berubah banyak." },
              { cause: "Asupan protein rendah", desc: "Diet rendah protein tidak memberikan bahan baku untuk mempertahankan dan membangun otot, mempercepat kehilangan massa otot seiring usia." },
              { cause: "Genetik dan hormon", desc: "Beberapa orang secara genetik lebih mudah menyimpan lemak visceral dibanding subkutan, atau memiliki sensitivitas insulin lebih rendah — membuat risiko skinny fat lebih tinggi." },
            ].map((item) => (
              <div key={item.cause} className="border-l-4 border-purple-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.cause}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Memperbaiki Komposisi Tubuh</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Untuk skinny fat, tujuannya bukan sekadar "turun berat badan" — tapi <strong>rekomposisi tubuh</strong>: membangun otot sambil mengurangi lemak secara bersamaan.
          </p>
          <div className="space-y-3">
            {[
              { no: "1", title: "Mulai latihan beban", body: "Ini adalah perubahan paling penting. Latihan beban 3x seminggu — squat, deadlift, bench press, pull-up — merangsang pertumbuhan otot dan meningkatkan metabolisme basal. Tanpa ini, semua usaha diet tidak akan memperbaiki komposisi tubuh." },
              { no: "2", title: "Tingkatkan asupan protein", body: "Target 1,6–2 gram protein per kg berat badan per hari. Protein memberikan bahan baku untuk membangun otot dan menjaga rasa kenyang lebih lama." },
              { no: "3", title: "Jangan defisit kalori terlalu besar", body: "Untuk rekomposisi, makan di sekitar TDEE (maintenance) atau defisit kecil (200–300 kcal). Defisit besar akan menghambat pertumbuhan otot." },
              { no: "4", title: "Tambahkan kardio moderat", body: "Jalan cepat atau bersepeda 2–3x seminggu membantu kesehatan kardiovaskular dan membakar sedikit lemak tanpa mengganggu pemulihan otot." },
              { no: "5", title: "Tidur cukup dan kelola stres", body: "Hormon pertumbuhan diproduksi saat tidur. Kortisol tinggi akibat stres menghambat pertumbuhan otot dan mendorong penyimpanan lemak visceral." },
            ].map((item) => (
              <div key={item.no} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.no}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Jika kamu mencurigai kondisi skinny fat, pertimbangkan pemeriksaan darah (gula darah puasa, profil lipid, HbA1c) untuk mengetahui kondisi metabolik yang sebenarnya. Konsultasikan dengan dokter untuk evaluasi menyeluruh.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Cek komposisi tubuhmu sekarang</p>
          <p className="text-emerald-100 text-xs mb-4">BMI, persentase lemak, dan lingkar pinggang — gratis</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/lemak" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">Lemak Tubuh →</Link>
            <Link href="/pinggang" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Lingkar Pinggang →</Link>
          </div>
        </div>

      </div>
    </ArticleLayout>
  );
}
