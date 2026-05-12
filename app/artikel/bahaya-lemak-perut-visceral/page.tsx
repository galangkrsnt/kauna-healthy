import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Bahaya Lemak Perut (Visceral) dan Cara Mengatasinya — Kauna Healthy",
  description:
    "Lemak di perut bukan sekadar masalah estetika — lemak visceral yang mengelilingi organ dalam adalah salah satu faktor risiko terbesar penyakit jantung, diabetes, dan kanker.",
  keywords: ["bahaya lemak perut", "lemak visceral", "cara mengurangi lemak perut", "perut buncit berbahaya", "lemak visceral adalah"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/bahaya-lemak-perut-visceral" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bahaya Lemak Perut (Visceral) dan Cara Mengatasinya",
  description: "Lemak visceral yang mengelilingi organ adalah faktor risiko utama penyakit kronis.",
  url: "https://healthy.getkauna.com/artikel/bahaya-lemak-perut-visceral",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

export default function ArticleVisceral() {
  return (
    <ArticleLayout activeHref="/artikel/bahaya-lemak-perut-visceral">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-red-100 text-red-700 mb-3">Kesehatan Metabolik</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Bahaya Lemak Perut (Visceral) dan Cara Mengatasinya
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Perut buncit bukan hanya soal penampilan. Lemak yang tersembunyi di dalam perut bisa merusak organ-organmu diam-diam.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Apa Itu Lemak Visceral?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Lemak dalam tubuh tidak semuanya sama. Ada dua jenis lemak utama di area perut:
          </p>
          <div className="space-y-3 mb-4">
            <div className="rounded-2xl bg-yellow-50 border border-yellow-100 p-4">
              <p className="font-semibold text-yellow-800 text-sm mb-1">Lemak subkutan</p>
              <p className="text-sm text-gray-600 leading-relaxed">Lemak yang ada tepat di bawah kulit — yang bisa kamu cubit. Ini lemak yang kamu lihat dan rasakan. Tidak terlalu berbahaya secara metabolik, meski dalam jumlah besar tetap perlu dikurangi.</p>
            </div>
            <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
              <p className="font-semibold text-red-800 text-sm mb-1">Lemak visceral (intra-abdominal)</p>
              <p className="text-sm text-gray-600 leading-relaxed">Lemak yang mengelilingi organ-organ di dalam rongga perut: hati, pankreas, usus, dan ginjal. Tidak bisa dicubit karena berada di dalam. Inilah yang paling berbahaya karena aktif secara metabolik seperti organ tambahan — tapi organ yang merusak.</p>
            </div>
          </div>
          <p className="leading-relaxed text-sm sm:text-base">
            Lemak visceral bisa tinggi bahkan pada orang yang terlihat kurus dari luar — inilah yang disebut "TOFI" (Thin Outside, Fat Inside). Seseorang dengan perut datar pun bisa memiliki lemak visceral berbahaya jika gaya hidupnya tidak sehat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Mengapa Lemak Visceral Sangat Berbahaya?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Berbeda dengan lemak subkutan yang relatif pasif, lemak visceral aktif memproduksi zat-zat berbahaya:
          </p>
          <div className="space-y-3">
            {[
              {
                danger: "Resistensi insulin dan diabetes tipe 2",
                desc: "Lemak visceral melepaskan asam lemak bebas langsung ke hati melalui vena portal. Ini mengganggu kemampuan hati merespons insulin, menyebabkan kadar gula darah naik secara kronis.",
              },
              {
                danger: "Penyakit jantung dan stroke",
                desc: "Lemak visceral memproduksi sitokin inflamasi (IL-6, TNF-α) yang merusak dinding pembuluh darah, meningkatkan tekanan darah, dan mendorong pembentukan plak aterosklerosis.",
              },
              {
                danger: "Perlemakan hati non-alkohol (NAFLD)",
                desc: "Asam lemak bebas dari lemak visceral yang masuk ke hati dapat menyebabkan penumpukan lemak di sel hati — kondisi yang bisa berkembang menjadi sirosis dan gagal hati.",
              },
              {
                danger: "Peningkatan risiko kanker",
                desc: "Penelitian menunjukkan lemak visceral berkorelasi dengan peningkatan risiko kanker kolon, payudara, dan pankreas — diduga melalui jalur inflamasi kronis dan peningkatan kadar insulin.",
              },
              {
                danger: "Gangguan hormonal",
                desc: "Lemak visceral mengubah androgen menjadi estrogen pada pria maupun wanita, mengganggu keseimbangan hormon dan berkontribusi pada kondisi seperti PCOS pada wanita dan penurunan testosteron pada pria.",
              },
            ].map((item) => (
              <div key={item.danger} className="border-l-4 border-red-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.danger}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Mendeteksi Lemak Visceral</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Tanpa DEXA scan atau CT scan, cara paling praktis mendeteksi risiko lemak visceral adalah mengukur lingkar pinggang:
          </p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Jenis Kelamin</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Normal</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Berisiko Tinggi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                <tr className="bg-white">
                  <td className="px-4 py-3 font-medium text-blue-600">Pria</td>
                  <td className="px-4 py-3 text-emerald-600 font-mono">{"< 90 cm"}</td>
                  <td className="px-4 py-3 text-red-500 font-mono">{"≥ 90 cm"}</td>
                </tr>
                <tr className="bg-emerald-50/40">
                  <td className="px-4 py-3 font-medium text-pink-600">Wanita</td>
                  <td className="px-4 py-3 text-emerald-600 font-mono">{"< 80 cm"}</td>
                  <td className="px-4 py-3 text-red-500 font-mono">{"≥ 80 cm"}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mb-4">Standar WHO untuk populasi Asia-Pasifik (termasuk Indonesia)</p>
          <p className="text-sm text-gray-600 leading-relaxed">
            Cara ukur: berdiri tegak, ukur lingkar perut di titik paling sempit antara tulang rusuk bawah dan tulang pinggul (biasanya setinggi pusar), setelah menghembuskan napas normal.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Efektif Mengurangi Lemak Visceral</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Kabar baiknya: lemak visceral adalah yang paling responsif terhadap perubahan gaya hidup dibanding jenis lemak lainnya.
          </p>
          <div className="space-y-3">
            {[
              { no: "1", title: "Defisit kalori moderat", body: "Kurangi 300–500 kcal dari kebutuhan harian. Lemak visceral turun lebih cepat dari lemak subkutan saat kamu dalam defisit kalori." },
              { no: "2", title: "Latihan kardio rutin", body: "Minimal 150 menit kardio intensitas sedang per minggu (jalan cepat, bersepeda, berenang). Latihan aerobik terbukti lebih efektif mengurangi lemak visceral dibanding lemak subkutan." },
              { no: "3", title: "Latihan beban 2–3x seminggu", body: "Kombinasi kardio dan latihan beban lebih efektif dari kardio saja. Massa otot yang lebih besar meningkatkan laju metabolisme basal, membantu pembakaran lemak 24 jam." },
              { no: "4", title: "Kurangi gula dan karbohidrat olahan", body: "Makanan tinggi indeks glikemik (nasi putih, roti putih, gula) memicu lonjakan insulin yang mendorong penyimpanan lemak visceral. Tukar dengan karbohidrat kompleks dan perbanyak serat." },
              { no: "5", title: "Tidur berkualitas 7–9 jam", body: "Kurang tidur meningkatkan kortisol — hormon stres yang secara langsung mendorong akumulasi lemak di perut. Kualitas tidur yang baik adalah salah satu cara paling underrated untuk mengurangi lemak visceral." },
              { no: "6", title: "Kelola stres secara aktif", body: "Stres kronis = kortisol tinggi = lemak perut bertambah. Meditasi, olahraga, dan koneksi sosial yang sehat terbukti menurunkan kadar kortisol secara berkelanjutan." },
            ].map((item) => (
              <div key={item.no} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-red-500 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.no}</span>
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
            Artikel ini bersifat edukatif. Jika lingkar pinggangmu jauh di atas batas normal atau kamu memiliki gejala metabolik lain, konsultasikan dengan dokter untuk pemeriksaan lengkap termasuk gula darah, profil lipid, dan tekanan darah.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Cek risiko lemak perutmu sekarang</p>
          <p className="text-emerald-100 text-xs mb-3">Hitung WHtR dan lingkar pinggang — gratis</p>
          <Link href="/pinggang" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
            Kalkulator Lingkar Pinggang →
          </Link>
        </div>

      </div>
    </ArticleLayout>
  );
}
