"use client";

import Sidebar from "../../components/Sidebar";
import TdeeCalculator from "./TdeeCalculator";
import { useLang } from "../../hooks/useLang";

const content = {
  id: {
    title: "Kalkulator Kalori Harian & TDEE",
    subtitle:
      "Hitung kebutuhan kalori harianmu berdasarkan usia, berat, tinggi, dan tingkat aktivitas.",
    whatTitle: "Apa itu TDEE?",
    whatP1:
      "TDEE (Total Daily Energy Expenditure) adalah total kalori yang dibakar tubuhmu dalam sehari, termasuk semua aktivitas fisik. Ini adalah angka paling penting untuk mengatur berat badan.",
    whatFormula: "TDEE = BMR × Faktor Aktivitas",
    whatP2:
      "BMR (Basal Metabolic Rate) adalah kalori yang dibutuhkan tubuh hanya untuk fungsi dasar seperti bernapas dan memompa darah. TDEE memperhitungkan semua gerakanmu sepanjang hari.",
    tipsTitle: "Cara Menggunakan Hasil Ini",
    tipMaintain: "Menjaga Berat Badan",
    tipMaintainBody:
      "Makan sesuai angka maintenance. Tidak perlu menghitung terlalu ketat — cukup perhatikan porsi dan jangan makan berlebihan.",
    tipCut: "Turun Berat Badan",
    tipCutBody:
      "Kurangi 500 kcal/hari dari maintenance. Ini akan menurunkan berat badan sekitar 0.5 kg per minggu secara konsisten dan aman.",
    tipBulk: "Naik Berat Badan (Lean Bulk)",
    tipBulkBody:
      "Tambah 300 kcal/hari. Surplus kecil memaksimalkan pertumbuhan otot dengan minimal penumpukan lemak.",
    faqTitle: "Pertanyaan Umum",
    faq1Q: "Berapa kalori yang dibutuhkan per hari?",
    faq1A:
      "Rata-rata orang dewasa membutuhkan 1.800–2.500 kcal per hari, tergantung usia, jenis kelamin, dan tingkat aktivitas. Gunakan kalkulator di atas untuk angka yang lebih akurat.",
    faq2Q: "Apakah TDEE selalu akurat?",
    faq2A:
      "TDEE adalah estimasi berdasarkan formula ilmiah. Setiap orang berbeda — gunakan sebagai titik awal, lalu sesuaikan berdasarkan perubahan berat badan aktual setelah 2–3 minggu.",
    faq3Q: "Apa itu defisit kalori?",
    faq3A:
      "Defisit kalori terjadi ketika kamu makan lebih sedikit dari TDEE-mu. Defisit 500 kcal/hari setara dengan penurunan sekitar 0.5 kg per minggu.",
    articleTitle: "Berapa Kalori yang Dibutuhkan Tubuh Per Hari?",
    articleP1: "Kebutuhan kalori harian setiap orang berbeda-beda. Faktor utamanya adalah usia, jenis kelamin, berat badan, tinggi badan, dan seberapa aktif kamu bergerak. Tidak ada angka tunggal yang berlaku untuk semua orang.",
    articleP2: "Sebagai referensi umum, berikut kisaran kebutuhan kalori harian berdasarkan tingkat aktivitas:",
    articleTableTitle: "Kisaran Kalori Harian (Estimasi Umum)",
    articleColActivity: "Tingkat Aktivitas",
    articleColWomen: "Wanita",
    articleColMen: "Pria",
    articleMenTitle: "Kebutuhan Kalori Pria Dewasa",
    articleMenBody: "Pria dewasa usia 19–50 tahun dengan aktivitas sedang membutuhkan sekitar 2.400–2.800 kcal per hari. Pria yang lebih aktif atau berbadan besar bisa membutuhkan lebih dari 3.000 kcal.",
    articleWomenTitle: "Kebutuhan Kalori Wanita Dewasa",
    articleWomenBody: "Wanita dewasa usia 19–50 tahun dengan aktivitas sedang membutuhkan sekitar 1.800–2.200 kcal per hari. Kebutuhan meningkat saat hamil (+340 kcal) dan menyusui (+500 kcal).",
    articleNoteTitle: "Ingat",
    articleNoteBody: "Angka-angka ini adalah estimasi. Metabolisme setiap orang unik. Gunakan kalkulator TDEE di atas sebagai titik awal, lalu sesuaikan berdasarkan perubahan berat badan aktual setelah 2–3 minggu.",
    footer:
      "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "Daily Calorie & TDEE Calculator",
    subtitle:
      "Calculate your daily calorie needs based on age, weight, height, and activity level.",
    whatTitle: "What is TDEE?",
    whatP1:
      "TDEE (Total Daily Energy Expenditure) is the total calories your body burns in a day, including all physical activity. It's the most important number for managing your weight.",
    whatFormula: "TDEE = BMR × Activity Factor",
    whatP2:
      "BMR (Basal Metabolic Rate) is the calories your body needs just for basic functions like breathing and pumping blood. TDEE accounts for all your movement throughout the day.",
    tipsTitle: "How to Use These Results",
    tipMaintain: "Maintain Weight",
    tipMaintainBody:
      "Eat at your maintenance number. No need to count too strictly — just watch your portions and avoid overeating.",
    tipCut: "Lose Weight",
    tipCutBody:
      "Reduce by 500 kcal/day from maintenance. This will drop about 0.5 kg per week consistently and safely.",
    tipBulk: "Gain Weight (Lean Bulk)",
    tipBulkBody:
      "Add 300 kcal/day. A small surplus maximizes muscle growth with minimal fat gain.",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "How many calories do I need per day?",
    faq1A:
      "The average adult needs 1,800–2,500 kcal per day, depending on age, gender, and activity level. Use the calculator above for a more accurate number.",
    faq2Q: "Is TDEE always accurate?",
    faq2A:
      "TDEE is an estimate based on scientific formulas. Everyone is different — use it as a starting point, then adjust based on actual weight changes after 2–3 weeks.",
    faq3Q: "What is a calorie deficit?",
    faq3A:
      "A calorie deficit occurs when you eat less than your TDEE. A 500 kcal/day deficit equals roughly 0.5 kg of weight loss per week.",
    articleTitle: "How Many Calories Does Your Body Need Per Day?",
    articleP1: "Daily calorie needs vary from person to person. The main factors are age, gender, body weight, height, and how active you are. There's no single number that works for everyone.",
    articleP2: "As a general reference, here are estimated daily calorie ranges by activity level:",
    articleTableTitle: "Daily Calorie Ranges (General Estimate)",
    articleColActivity: "Activity Level",
    articleColWomen: "Women",
    articleColMen: "Men",
    articleMenTitle: "Calorie Needs for Adult Men",
    articleMenBody: "Adult men aged 19–50 with moderate activity need approximately 2,400–2,800 kcal per day. More active men or those with larger body frames may need over 3,000 kcal.",
    articleWomenTitle: "Calorie Needs for Adult Women",
    articleWomenBody: "Adult women aged 19–50 with moderate activity need approximately 1,800–2,200 kcal per day. Needs increase during pregnancy (+340 kcal) and breastfeeding (+500 kcal).",
    articleNoteTitle: "Keep in Mind",
    articleNoteBody: "These are estimates. Everyone's metabolism is unique. Use the TDEE calculator above as a starting point, then adjust based on your actual weight changes after 2–3 weeks.",
    footer:
      "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
};

const kaloriTable = {
  id: [
    { activity: "Tidak aktif (kerja duduk, jarang olahraga)", women: "1.600–2.000", men: "2.000–2.600" },
    { activity: "Aktif ringan (olahraga 1–3x/minggu)", women: "1.800–2.200", men: "2.200–2.800" },
    { activity: "Aktif sedang (olahraga 3–5x/minggu)", women: "2.000–2.400", men: "2.400–3.000" },
    { activity: "Sangat aktif (olahraga intensif setiap hari)", women: "2.200–2.800", men: "2.800–3.500" },
  ],
  en: [
    { activity: "Sedentary (desk job, rarely exercises)", women: "1,600–2,000", men: "2,000–2,600" },
    { activity: "Lightly active (exercise 1–3x/week)", women: "1,800–2,200", men: "2,200–2,800" },
    { activity: "Moderately active (exercise 3–5x/week)", women: "2,000–2,400", men: "2,400–3,000" },
    { activity: "Very active (intense exercise daily)", women: "2,200–2,800", men: "2,800–3,500" },
  ],
};

export default function KaloriClient() {
  const { lang, toggleLang } = useLang();
  const tx = content[lang];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1 min-w-0 px-4 pt-16 pb-20 md:pt-8 md:px-10">

      {/* Header */}
      <header className="text-center mb-8 px-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 leading-tight mb-3">
          {tx.title}
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed max-w-md mx-auto">
          {tx.subtitle}
        </p>
      </header>

      {/* Calculator Card */}
      <section
        aria-label={lang === "id" ? "Kalkulator Kalori" : "Calorie Calculator"}
        className="bg-white rounded-3xl shadow-md shadow-emerald-100 border border-emerald-100 p-6 sm:p-8 mb-10"
      >
        <TdeeCalculator lang={lang} />
      </section>

      {/* Info */}
      <article className="space-y-10 text-emerald-950/80">
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.whatTitle}</h2>
          <p className="leading-relaxed text-sm sm:text-base">{tx.whatP1}</p>
          <div className="my-4 bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center font-mono text-emerald-800 text-sm sm:text-base">
            {tx.whatFormula}
          </div>
          <p className="leading-relaxed text-sm sm:text-base">{tx.whatP2}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">{tx.tipsTitle}</h2>
          <div className="space-y-3">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-700 mb-1 text-sm">{tx.tipMaintain}</p>
              <p className="text-sm leading-relaxed text-gray-600">{tx.tipMaintainBody}</p>
            </div>
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
              <p className="font-semibold text-blue-700 mb-1 text-sm">{tx.tipCut}</p>
              <p className="text-sm leading-relaxed text-gray-600">{tx.tipCutBody}</p>
            </div>
            <div className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
              <p className="font-semibold text-orange-700 mb-1 text-sm">{tx.tipBulk}</p>
              <p className="text-sm leading-relaxed text-gray-600">{tx.tipBulkBody}</p>
            </div>
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
                <p className="font-semibold text-emerald-900 mb-1 text-sm sm:text-base">
                  {item.q}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      <article id="kalori-harian-artikel" className="mt-10 space-y-6 text-emerald-950/80">
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.articleTitle}</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">{tx.articleP1}</p>
          <p className="leading-relaxed text-sm sm:text-base mb-4">{tx.articleP2}</p>

          <h3 className="text-base font-semibold text-emerald-800 mb-3">{tx.articleTableTitle}</h3>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-6">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColActivity}</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColWomen}</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">{tx.articleColMen}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {kaloriTable[lang].map((row, i) => (
                  <tr key={i} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.activity}</td>
                    <td className="px-4 py-3 font-mono text-pink-600">{row.women}</td>
                    <td className="px-4 py-3 font-mono text-blue-600">{row.men}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-base font-semibold text-emerald-800 mb-1">{tx.articleMenTitle}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{tx.articleMenBody}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold text-emerald-800 mb-1">{tx.articleWomenTitle}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{tx.articleWomenBody}</p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl bg-amber-50 border border-amber-200 p-4">
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
