"use client";

import Sidebar from "../../components/Sidebar";
import LemakCalculator from "./LemakCalculator";
import { useLang } from "../../hooks/useLang";

const content = {
  id: {
    title: "Kalkulator Persentase Lemak Tubuh",
    subtitle:
      "Ketahui berapa persen lemak dalam tubuhmu dan apakah sudah berada di level yang sehat.",
    whatTitle: "Apa itu Persentase Lemak Tubuh?",
    whatP1:
      "Persentase lemak tubuh adalah proporsi massa lemak dibandingkan total berat badan. Berbeda dengan BMI yang hanya memperhitungkan berat dan tinggi, lemak tubuh memberi gambaran yang lebih akurat tentang komposisi tubuhmu.",
    whatP2:
      "Dua orang dengan BMI yang sama bisa punya komposisi tubuh yang sangat berbeda — satu berotot, satu berlemak. Itulah kenapa persentase lemak tubuh lebih informatif.",
    tipsTitle: "Cara Menurunkan Lemak Tubuh",
    tips: [
      { title: "Defisit kalori moderat", body: "Kurangi 300–500 kcal dari TDEE-mu. Jangan terlalu agresif — defisit besar justru membakar otot." },
      { title: "Latihan beban", body: "Angkat beban 2–4x seminggu. Otot membakar lebih banyak kalori bahkan saat istirahat." },
      { title: "Cukup protein", body: "Makan 1.6–2.2g protein per kg berat badan untuk mempertahankan massa otot saat defisit kalori." },
      { title: "Kardio secukupnya", body: "LISS (jalan cepat, bersepeda santai) 3–4x seminggu cukup untuk membantu defisit tanpa terlalu menguras energi." },
    ],
    faqTitle: "Pertanyaan Umum",
    faq1Q: "Apakah rumus Deurenberg akurat?",
    faq1A:
      "Rumus Deurenberg adalah estimasi ilmiah yang cukup akurat untuk populasi umum dengan margin error sekitar 3–5%. Untuk pengukuran lebih presisi, gunakan DEXA scan atau BodPod.",
    faq2Q: "Berapa lemak tubuh yang ideal?",
    faq2A:
      "Untuk laki-laki, lemak tubuh ideal adalah 14–21%. Untuk perempuan, 21–28%. Di bawah itu masuk level atlet, di atas itu mulai perlu perhatian.",
    faq3Q: "Kenapa perempuan butuh lebih banyak lemak dari laki-laki?",
    faq3A:
      "Perempuan secara biologis membutuhkan lebih banyak lemak esensial untuk fungsi hormonal, reproduksi, dan kesehatan tulang. Ini normal dan sehat.",
    articleTitle: "Cara Menghitung Lemak Tubuh yang Akurat",
    articleP1: "Ada beberapa metode untuk mengukur persentase lemak tubuh, masing-masing dengan tingkat akurasi dan kemudahan yang berbeda. Memahami perbedaannya membantu kamu memilih metode yang tepat.",
    articleMethodsTitle: "Metode Pengukuran Lemak Tubuh",
    articleMethods: [
      { name: "DEXA Scan", accuracy: "Sangat Akurat", desc: "Standar emas pengukuran lemak tubuh. Menggunakan sinar-X dosis rendah. Tersedia di rumah sakit tertentu, biaya relatif mahal." },
      { name: "BodPod", accuracy: "Sangat Akurat", desc: "Menggunakan perpindahan udara untuk menghitung komposisi tubuh. Akurat tapi jarang tersedia di Indonesia." },
      { name: "Bioelectrical Impedance (BIA)", accuracy: "Cukup Akurat", desc: "Digunakan di timbangan pintar dan alat gym. Akurasi dipengaruhi tingkat hidrasi — ukur di kondisi yang konsisten." },
      { name: "Rumus (seperti Deurenberg)", accuracy: "Estimasi", desc: "Menggunakan BMI, usia, dan jenis kelamin. Paling mudah dan gratis, margin error sekitar 3–5%. Cocok untuk pemantauan umum." },
    ],
    articleTableTitle: "Persentase Lemak Tubuh Normal",
    articleColCategory: "Kategori",
    articleColMen: "Pria",
    articleColWomen: "Wanita",
    articleNoteTitle: "Lemak Visceral vs Lemak Subkutan",
    articleNoteBody: "Tidak semua lemak sama berbahayanya. Lemak subkutan (di bawah kulit) relatif tidak berbahaya. Lemak visceral (mengelilingi organ dalam perut) yang paling berisiko — terkait langsung dengan penyakit jantung, diabetes, dan tekanan darah tinggi. Lingkar pinggang adalah proxy terbaik untuk lemak visceral.",
    footer: "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "Body Fat Percentage Calculator",
    subtitle:
      "Find out your body fat percentage and whether it's at a healthy level.",
    whatTitle: "What is Body Fat Percentage?",
    whatP1:
      "Body fat percentage is the proportion of fat mass compared to total body weight. Unlike BMI which only considers weight and height, body fat gives a more accurate picture of your body composition.",
    whatP2:
      "Two people with the same BMI can have very different body compositions — one muscular, one with high fat. That's why body fat percentage is more informative.",
    tipsTitle: "How to Reduce Body Fat",
    tips: [
      { title: "Moderate calorie deficit", body: "Cut 300–500 kcal from your TDEE. Don't go too aggressive — large deficits burn muscle too." },
      { title: "Strength training", body: "Lift weights 2–4x per week. Muscle burns more calories even at rest." },
      { title: "Enough protein", body: "Eat 1.6–2.2g of protein per kg of body weight to preserve muscle during a calorie deficit." },
      { title: "Some cardio", body: "LISS (brisk walking, easy cycling) 3–4x per week is enough to help the deficit without burning you out." },
    ],
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Is the Deurenberg formula accurate?",
    faq1A:
      "The Deurenberg formula is a scientifically validated estimate with a margin of error of about 3–5% for the general population. For more precise measurements, use a DEXA scan or BodPod.",
    faq2Q: "What is an ideal body fat percentage?",
    faq2A:
      "For men, ideal body fat is 14–21%. For women, 21–28%. Below that is athlete level, above that starts to warrant attention.",
    faq3Q: "Why do women need more body fat than men?",
    faq3A:
      "Women biologically require more essential fat for hormonal function, reproduction, and bone health. This is normal and healthy.",
    articleTitle: "How to Accurately Measure Your Body Fat",
    articleP1: "There are several methods for measuring body fat percentage, each with different levels of accuracy and accessibility. Understanding the differences helps you choose the right method.",
    articleMethodsTitle: "Body Fat Measurement Methods",
    articleMethods: [
      { name: "DEXA Scan", accuracy: "Very Accurate", desc: "The gold standard for body fat measurement. Uses low-dose X-rays. Available at select hospitals, relatively expensive." },
      { name: "BodPod", accuracy: "Very Accurate", desc: "Uses air displacement to calculate body composition. Accurate but rarely available." },
      { name: "Bioelectrical Impedance (BIA)", accuracy: "Fairly Accurate", desc: "Used in smart scales and gym equipment. Accuracy is affected by hydration level — measure under consistent conditions." },
      { name: "Formula (e.g. Deurenberg)", accuracy: "Estimate", desc: "Uses BMI, age, and gender. Easiest and free, margin of error ~3–5%. Good for general tracking." },
    ],
    articleTableTitle: "Normal Body Fat Percentage Ranges",
    articleColCategory: "Category",
    articleColMen: "Men",
    articleColWomen: "Women",
    articleNoteTitle: "Visceral Fat vs Subcutaneous Fat",
    articleNoteBody: "Not all fat is equally dangerous. Subcutaneous fat (under the skin) is relatively harmless. Visceral fat (surrounding internal abdominal organs) is the most dangerous — directly linked to heart disease, diabetes, and high blood pressure. Waist circumference is the best proxy for visceral fat.",
    footer: "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
};

const lemakTable = {
  id: [
    { category: "Atlet", men: "6–13%", women: "14–20%" },
    { category: "Fit / Bugar", men: "14–17%", women: "21–24%" },
    { category: "Rata-rata / Normal", men: "18–24%", women: "25–31%" },
    { category: "Obesitas", men: "> 25%", women: "> 32%" },
  ],
  en: [
    { category: "Athlete", men: "6–13%", women: "14–20%" },
    { category: "Fit", men: "14–17%", women: "21–24%" },
    { category: "Average / Normal", men: "18–24%", women: "25–31%" },
    { category: "Obese", men: "> 25%", women: "> 32%" },
  ],
};

export default function LemakClient() {
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
        aria-label={lang === "id" ? "Kalkulator Lemak Tubuh" : "Body Fat Calculator"}
        className="bg-white rounded-3xl shadow-md shadow-emerald-100 border border-emerald-100 p-6 sm:p-8 mb-10"
      >
        <LemakCalculator lang={lang} />
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

      <article id="lemak-tubuh-artikel" className="mt-10 space-y-6 text-emerald-950/80">
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.articleTitle}</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">{tx.articleP1}</p>

          <h3 className="text-base font-semibold text-emerald-800 mb-3">{tx.articleMethodsTitle}</h3>
          <div className="space-y-3 mb-6">
            {tx.articleMethods.map((m, i) => (
              <div key={i} className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold text-emerald-800 text-sm">{m.name}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-200 text-emerald-700 font-medium">{m.accuracy}</span>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">{m.desc}</p>
              </div>
            ))}
          </div>

          <h3 className="text-base font-semibold text-emerald-800 mb-3">{tx.articleTableTitle}</h3>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColCategory}</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColMen}</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColWomen}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {lemakTable[lang].map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.category}</td>
                    <td className="px-4 py-3 font-mono text-blue-600">{row.men}</td>
                    <td className="px-4 py-3 font-mono text-pink-600">{row.women}</td>
                  </tr>
                ))}
              </tbody>
            </table>
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
