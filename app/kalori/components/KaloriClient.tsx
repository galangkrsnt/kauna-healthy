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
    footer:
      "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
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

      <footer className="mt-14 text-center text-xs text-emerald-500/60">
        <p>{tx.footer}</p>
      </footer>
    </main>
    </div>
  );
}
