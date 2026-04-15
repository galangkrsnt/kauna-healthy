"use client";

import Sidebar from "../../components/Sidebar";
import AnakCalculator from "./AnakCalculator";
import { useLang } from "../../hooks/useLang";

const content = {
  id: {
    title: "Kalkulator BMI Anak & Berat Badan Ideal",
    subtitle:
      "Cek apakah berat badan anak kamu sudah sesuai dengan usianya menggunakan standar CDC.",
    whatTitle: "Kenapa BMI Anak Berbeda dari BMI Dewasa?",
    whatP1:
      "Pada anak-anak, BMI tidak bisa langsung dibandingkan dengan tabel dewasa. BMI anak dievaluasi berdasarkan persentil — yaitu dibandingkan dengan anak-anak lain di usia dan jenis kelamin yang sama.",
    whatP2:
      "Standar yang digunakan adalah CDC (Centers for Disease Control and Prevention) Growth Chart, yang diakui secara internasional termasuk oleh Kemenkes Indonesia sebagai referensi pertumbuhan anak.",
    tipsTitle: "Tips Menjaga Berat Badan Sehat Anak",
    tips: [
      { title: "Perbanyak sayur dan buah", body: "Jadikan sayur dan buah bagian dari setiap makan. Anak yang terbiasa sejak kecil akan lebih mudah menjaga pola makan sehat." },
      { title: "Batasi screen time", body: "Kurangi waktu layar dan ganti dengan aktivitas fisik — bermain di luar, bersepeda, atau olahraga tim." },
      { title: "Sarapan setiap hari", body: "Anak yang sarapan cenderung lebih fokus di sekolah dan tidak makan berlebihan di siang hari." },
      { title: "Hindari minuman manis", body: "Jus kemasan, minuman bersoda, dan susu kental manis mengandung gula sangat tinggi. Ganti dengan air putih atau susu." },
    ],
    faqTitle: "Pertanyaan Umum",
    faq1Q: "Apakah BMI bisa digunakan untuk bayi di bawah 2 tahun?",
    faq1A:
      "Tidak. Untuk bayi 0–2 tahun, digunakan grafik berat badan menurut panjang badan (WHO Child Growth Standards), bukan BMI. Kalkulator ini hanya berlaku untuk anak usia 2–18 tahun.",
    faq2Q: "Anak saya di atas persentil ke-85, apa yang harus dilakukan?",
    faq2A:
      "Jangan langsung diet ketat. Fokus pada pola makan sehat dan aktivitas fisik. Konsultasikan dengan dokter anak untuk rencana yang tepat sesuai usia dan kondisi anak.",
    faq3Q: "Apakah persentil ke-50 artinya paling ideal?",
    faq3A:
      "Tidak harus. Anak yang sehat bisa berada di persentil berapa pun antara 5–85. Yang penting adalah konsistensi pertumbuhan — apakah kurva pertumbuhannya stabil dari waktu ke waktu.",
    articleTitle: "Berat Badan Ideal Anak Berdasarkan Usia",
    articleP1: "Pertumbuhan anak tidak linear — ada periode lonjakan cepat (growth spurt) dan periode melambat yang keduanya normal. Yang terpenting bukan angka di timbangan, tapi konsistensi kurva pertumbuhan dari waktu ke waktu.",
    articleP2: "Berikut kisaran berat badan dan tinggi badan rata-rata anak Indonesia berdasarkan usia (referensi WHO/CDC):",
    articleTableTitle: "Berat & Tinggi Badan Rata-rata Anak (Persentil ke-50)",
    articleColAge: "Usia",
    articleColBoys: "Laki-laki",
    articleColGirls: "Perempuan",
    articleFactorsTitle: "Faktor yang Mempengaruhi Pertumbuhan Anak",
    articleFactors: [
      "Genetik — tinggi dan berat badan orang tua adalah prediktor terkuat pertumbuhan anak.",
      "Nutrisi — asupan protein, kalsium, zat besi, dan vitamin D sangat kritis di masa pertumbuhan.",
      "Aktivitas fisik — anak aktif cenderung memiliki komposisi tubuh lebih baik (lebih banyak otot, lebih sedikit lemak).",
      "Tidur — hormon pertumbuhan (GH) diproduksi terutama saat tidur nyenyak. Anak 6–12 tahun butuh 9–12 jam tidur.",
      "Kondisi kesehatan — penyakit kronis atau infeksi berulang bisa menghambat pertumbuhan.",
    ],
    articleNoteTitle: "Kapan Harus ke Dokter?",
    articleNoteBody: "Konsultasi ke dokter anak jika berat badan anak tiba-tiba turun signifikan, berada di bawah persentil ke-5 atau di atas persentil ke-95 secara konsisten, atau kurva pertumbuhannya tidak stabil dari waktu ke waktu.",
    footer: "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "Child BMI & Ideal Weight Calculator",
    subtitle:
      "Check whether your child's weight is appropriate for their age using CDC growth chart standards.",
    whatTitle: "Why is Child BMI Different from Adult BMI?",
    whatP1:
      "In children, BMI cannot be directly compared to adult tables. Child BMI is evaluated based on percentiles — compared to other children of the same age and gender.",
    whatP2:
      "The standard used is the CDC (Centers for Disease Control and Prevention) Growth Chart, internationally recognized as a reference for child growth.",
    tipsTitle: "Tips to Maintain a Healthy Weight in Children",
    tips: [
      { title: "More fruits and vegetables", body: "Make fruits and vegetables part of every meal. Children who start healthy habits early are more likely to maintain them." },
      { title: "Limit screen time", body: "Reduce screen time and replace it with physical activity — playing outside, cycling, or team sports." },
      { title: "Breakfast every day", body: "Children who eat breakfast tend to focus better at school and are less likely to overeat during the day." },
      { title: "Avoid sugary drinks", body: "Packaged juices, sodas, and sweetened condensed milk are very high in sugar. Replace them with water or plain milk." },
    ],
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Can BMI be used for babies under 2 years old?",
    faq1A:
      "No. For infants aged 0–2 years, weight-for-length charts (WHO Child Growth Standards) are used instead of BMI. This calculator is only valid for children aged 2–18.",
    faq2Q: "My child is above the 85th percentile — what should I do?",
    faq2A:
      "Don't jump to strict dieting. Focus on healthy eating habits and physical activity. Consult a pediatrician for a plan appropriate to your child's age and condition.",
    faq3Q: "Does the 50th percentile mean most ideal?",
    faq3A:
      "Not necessarily. A healthy child can be anywhere between the 5th and 85th percentile. What matters most is consistent growth over time — whether the growth curve is stable.",
    articleTitle: "Ideal Child Weight by Age",
    articleP1: "Child growth is not linear — there are rapid growth spurts and slower periods, both of which are normal. What matters most is not the number on the scale, but the consistency of the growth curve over time.",
    articleP2: "Here are average weight and height ranges for children based on age (WHO/CDC reference):",
    articleTableTitle: "Average Child Weight & Height (50th Percentile)",
    articleColAge: "Age",
    articleColBoys: "Boys",
    articleColGirls: "Girls",
    articleFactorsTitle: "Factors That Affect Child Growth",
    articleFactors: [
      "Genetics — the height and weight of parents is the strongest predictor of a child's growth.",
      "Nutrition — adequate protein, calcium, iron, and vitamin D are critical during growth phases.",
      "Physical activity — active children tend to have better body composition (more muscle, less fat).",
      "Sleep — growth hormone (GH) is produced mainly during deep sleep. Children aged 6–12 need 9–12 hours of sleep.",
      "Health conditions — chronic illness or recurring infections can slow growth.",
    ],
    articleNoteTitle: "When to See a Doctor",
    articleNoteBody: "Consult a pediatrician if your child suddenly loses significant weight, consistently falls below the 5th or above the 95th percentile, or if the growth curve is unstable over time.",
    footer: "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
};

const anakTable = {
  id: [
    { age: "2 tahun", boys: "12–14 kg / 86–90 cm", girls: "11–14 kg / 85–89 cm" },
    { age: "4 tahun", boys: "15–18 kg / 100–105 cm", girls: "15–18 kg / 99–104 cm" },
    { age: "6 tahun", boys: "19–22 kg / 112–117 cm", girls: "18–22 kg / 111–116 cm" },
    { age: "8 tahun", boys: "24–28 kg / 122–128 cm", girls: "23–28 kg / 121–128 cm" },
    { age: "10 tahun", boys: "30–36 kg / 132–139 cm", girls: "30–37 kg / 132–140 cm" },
    { age: "12 tahun", boys: "37–45 kg / 142–152 cm", girls: "37–46 kg / 144–154 cm" },
    { age: "14 tahun", boys: "47–57 kg / 155–166 cm", girls: "44–52 kg / 154–162 cm" },
  ],
  en: [
    { age: "2 years", boys: "12–14 kg / 86–90 cm", girls: "11–14 kg / 85–89 cm" },
    { age: "4 years", boys: "15–18 kg / 100–105 cm", girls: "15–18 kg / 99–104 cm" },
    { age: "6 years", boys: "19–22 kg / 112–117 cm", girls: "18–22 kg / 111–116 cm" },
    { age: "8 years", boys: "24–28 kg / 122–128 cm", girls: "23–28 kg / 121–128 cm" },
    { age: "10 years", boys: "30–36 kg / 132–139 cm", girls: "30–37 kg / 132–140 cm" },
    { age: "12 years", boys: "37–45 kg / 142–152 cm", girls: "37–46 kg / 144–154 cm" },
    { age: "14 years", boys: "47–57 kg / 155–166 cm", girls: "44–52 kg / 154–162 cm" },
  ],
};

export default function AnakClient() {
  const { lang, toggleLang } = useLang();
  const tx = content[lang];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1 min-w-0 px-4 pt-16 pb-20 md:pt-8 md:px-10">

      <header className="text-center mb-8 px-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 leading-tight mb-3">
          {tx.title}
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed max-w-md mx-auto">
          {tx.subtitle}
        </p>
      </header>

      <section
        aria-label={lang === "id" ? "Kalkulator BMI Anak" : "Child BMI Calculator"}
        className="bg-white rounded-3xl shadow-md shadow-emerald-100 border border-emerald-100 p-6 sm:p-8 mb-10"
      >
        <AnakCalculator lang={lang} />
      </section>

      <article className="space-y-10 text-emerald-950/80">
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.whatTitle}</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">{tx.whatP1}</p>
          <p className="leading-relaxed text-sm sm:text-base">{tx.whatP2}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">{tx.tipsTitle}</h2>
          <div className="space-y-3">
            {tx.tips.map((tip, i) => (
              <div key={i} className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="font-semibold text-emerald-700 mb-1 text-sm">{tip.title}</p>
                <p className="text-sm leading-relaxed text-gray-600">{tip.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">{tx.faqTitle}</h2>
          <div className="space-y-5">
            {[
              { q: tx.faq1Q, a: tx.faq1A },
              { q: tx.faq2Q, a: tx.faq2A },
              { q: tx.faq3Q, a: tx.faq3A },
            ].map((item) => (
              <div key={item.q} className="border-l-4 border-emerald-300 pl-4">
                <p className="font-semibold text-emerald-900 mb-1 text-sm sm:text-base">{item.q}</p>
                <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <article id="berat-badan-anak-artikel" className="mt-10 space-y-6 text-emerald-950/80">
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.articleTitle}</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">{tx.articleP1}</p>
          <p className="leading-relaxed text-sm sm:text-base mb-4">{tx.articleP2}</p>

          <h3 className="text-base font-semibold text-emerald-800 mb-3">{tx.articleTableTitle}</h3>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColAge}</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColBoys}</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColGirls}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {anakTable[lang].map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.age}</td>
                    <td className="px-4 py-3 text-sm text-blue-600">{row.boys}</td>
                    <td className="px-4 py-3 text-sm text-pink-600">{row.girls}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h3 className="text-base font-semibold text-emerald-800 mb-3">{tx.articleFactorsTitle}</h3>
          <div className="space-y-2 mb-5">
            {tx.articleFactors.map((factor, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <span className="text-emerald-500 font-black text-base mt-0.5 shrink-0">{i + 1}.</span>
                <p className="text-sm leading-relaxed text-gray-600">{factor}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4">
            <p className="font-semibold text-amber-800 mb-1 text-sm">{tx.articleNoteTitle}</p>
            <p className="text-sm leading-relaxed text-amber-700/80">{tx.articleNoteBody}</p>
          </div>
        </section>
      </article>

      <footer className="mt-14 text-center text-xs text-emerald-500/60">
        <p>{tx.footer}</p>
      </footer>
    </main>
    </div>
  );
}
