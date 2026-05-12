import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Cara Menurunkan Berat Badan Tanpa Diet Ketat — Kauna Healthy",
  description:
    "Turun berat badan tidak harus menyiksa diri. Pelajari pendekatan ilmiah yang berkelanjutan: perubahan kebiasaan kecil yang berdampak besar tanpa efek yo-yo.",
  keywords: ["cara menurunkan berat badan", "diet tanpa kelaparan", "turun berat badan alami", "program diet sehat", "cara kurus tanpa diet ketat"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Menurunkan Berat Badan Tanpa Diet Ketat",
  description: "Pendekatan ilmiah yang berkelanjutan untuk turun berat badan tanpa efek yo-yo.",
  url: "https://healthy.getkauna.com/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleDiet() {
  return (
    <ArticleLayout activeHref="/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 mb-3">Diet & Gaya Hidup</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Cara Menurunkan Berat Badan Tanpa Diet Ketat
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Diet ekstrem mungkin berhasil dalam 2 minggu — tapi 95% orang kembali ke berat semula dalam setahun. Ada cara yang lebih baik.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa Diet Ketat Tidak Berhasil Jangka Panjang?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Setiap kali kamu mengurangi kalori secara drastis, tubuh bereaksi seolah sedang menghadapi kelaparan. Metabolisme melambat, hormon lapar (ghrelin) meningkat, dan hormon kenyang (leptin) menurun. Hasilnya: kamu semakin lapar, energi berkurang, dan tekad semakin melemah.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Ini bukan soal kurang disiplin — ini respons biologis yang sudah terprogram dalam evolusi manusia selama ratusan ribu tahun. Tubuhmu dirancang untuk bertahan dari kelaparan, bukan untuk ramping.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Kabar baiknya: kamu tidak harus melawan biologi. Kamu hanya perlu bekerja sama dengannya dengan pendekatan yang lebih cerdas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Prinsip Dasar: Defisit Kecil, Konsisten</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Satu kilogram lemak tubuh setara dengan sekitar 7.700 kalori. Artinya, untuk turun 1 kg per bulan, kamu hanya perlu defisit sekitar 250 kalori per hari — kurang dari satu porsi nasi putih.
          </p>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 mb-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Defisit harian", value: "250 kcal" },
                { label: "Penurunan/bulan", value: "~1 kg" },
                { label: "Penurunan/tahun", value: "~12 kg" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-lg font-bold text-emerald-700">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Penurunan 1 kg per bulan mungkin terasa lambat, tapi ini penurunan yang <strong>berkelanjutan</strong> — tubuhmu tidak panik, metabolisme tidak melambat, dan kamu tidak tersiksa lapar setiap hari.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">7 Perubahan Kecil yang Berdampak Besar</h2>
          <div className="space-y-3">
            {[
              {
                no: "1",
                title: "Prioritaskan protein di setiap makan",
                body: "Protein adalah makronutrien yang paling mengenyangkan dan membutuhkan paling banyak energi untuk dicerna. Mulai setiap makan dengan protein: telur, ayam, ikan, tempe, atau tahu. Targetkan minimal 1,2 g protein per kg berat badan per hari.",
              },
              {
                no: "2",
                title: "Kurangi minuman berkalori",
                body: "Minuman manis, teh manis, kopi susu, dan jus kemasan adalah sumber kalori tersembunyi yang mudah diabaikan. Satu gelas teh manis mengandung 150–200 kalori — hampir tidak membuat kenyang. Ganti dengan air putih, teh tawar, atau kopi hitam tanpa gula.",
              },
              {
                no: "3",
                title: "Makan pelan dan tanpa distraksi",
                body: "Dibutuhkan 15–20 menit agar sinyal kenyang sampai dari perut ke otak. Makan sambil scroll HP atau nonton TV membuatmu makan lebih banyak tanpa sadar. Makan di meja, pelan-pelan, dan rasakan setiap gigitan.",
              },
              {
                no: "4",
                title: "Tidur 7–9 jam setiap malam",
                body: "Kurang tidur meningkatkan ghrelin (hormon lapar) dan menurunkan leptin (hormon kenyang) secara signifikan. Orang yang tidur kurang dari 6 jam cenderung makan 300–500 kalori lebih banyak per hari dibanding yang tidur cukup.",
              },
              {
                no: "5",
                title: "Tambahkan sayur di setiap makan",
                body: "Sayuran tinggi serat dan rendah kalori — kamu bisa makan banyak tanpa menambah banyak kalori. Isi setengah piringmu dengan sayuran sebelum mengisi sisanya dengan karbohidrat dan protein.",
              },
              {
                no: "6",
                title: "Jalan kaki minimal 30 menit setiap hari",
                body: "Tidak harus lari maraton. Jalan kaki 30 menit membakar 150–200 kalori dan terbukti mengurangi nafsu makan berlebih, menurunkan stres, dan meningkatkan sensitivitas insulin. Mulai dari parkir lebih jauh atau naik tangga.",
              },
              {
                no: "7",
                title: "Timbang badan seminggu sekali, bukan setiap hari",
                body: "Berat badan bisa naik 1–2 kg dalam sehari hanya karena retensi air, makanan berat, atau siklus menstruasi. Timbang di waktu yang sama setiap minggu dan lihat tren 4 mingguan — bukan angka harian.",
              },
            ].map((item) => (
              <div key={item.no} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.no}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Makanan yang Membantu vs Menghambat</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-800 text-sm mb-3">✓ Prioritaskan</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {["Protein: telur, ayam, ikan, tempe, tahu", "Sayuran: bayam, kangkung, brokoli, wortel", "Karbohidrat kompleks: nasi merah, ubi, oat", "Lemak sehat: alpukat, kacang-kacangan, ikan salmon", "Buah utuh (bukan jus)"].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
              <p className="font-semibold text-red-800 text-sm mb-3">✗ Batasi</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {["Minuman manis: teh manis, soda, jus kemasan", "Makanan ultra-proses: keripik, biskuit, mi instan", "Gorengan berulang dengan minyak lama", "Makanan tinggi gula: kue, permen, es krim", "Alkohol (kalori kosong, meningkatkan nafsu makan)"].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Apa yang Realistis untuk Diharapkan?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Penurunan berat badan yang sehat dan berkelanjutan adalah <strong>0,5–1 kg per minggu</strong>. Lebih dari itu, risiko kehilangan massa otot dan efek yo-yo semakin tinggi.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Ingat: tujuannya bukan hanya angka di timbangan, tapi kesehatan jangka panjang. Kamu bisa saja kehilangan 5 kg dalam 2 minggu dengan diet ekstrem, lalu mendapatkan 7 kg kembali dalam sebulan. Atau kamu bisa kehilangan 1 kg per bulan secara konsisten dan mempertahankannya seumur hidup.
          </p>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Artikel ini bersifat edukatif umum. Jika kamu memiliki kondisi medis seperti diabetes, penyakit jantung, atau gangguan makan, konsultasikan program penurunan berat badan dengan dokter atau ahli gizi terdaftar.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Mulai dengan menghitung BMI dan kalorimu</p>
          <p className="text-emerald-100 text-xs mb-4">Gratis, langsung hasil</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">Kalkulator BMI →</Link>
            <Link href="/kalori" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors">Kalkulator Kalori →</Link>
          </div>
        </div>

      </div>
    </ArticleLayout>
  );
}
