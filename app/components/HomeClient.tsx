"use client";

import { useState } from "react";
import BmiCalculator from "./BmiCalculator";

export type Lang = "id" | "en";

export const t = {
  id: {
    brand: "Kauna Healthy",
    title: "Kalkulator BMI & Berat Badan Ideal",
    subtitle:
      "Masukkan berat dan tinggi badanmu — kami hitung BMI dan berat ideal kamu secara instan.",

    // calculator
    gender: "Jenis Kelamin",
    male: "Laki-laki",
    female: "Perempuan",
    weightLabel: "Berat Badan (kg)",
    weightPlaceholder: "contoh: 65",
    heightLabel: "Tinggi Badan (cm)",
    heightPlaceholder: "contoh: 170",
    calculate: "Hitung BMI Saya",
    recalculate: "Hitung Ulang",
    yourBmi: "BMI kamu",
    idealWeightLabel: "Berat badan ideal kamu",
    devineNote: "Berdasarkan rumus Devine",

    // categories
    underweight: "Kekurangan Berat Badan",
    normal: "Normal",
    overweight: "Kelebihan Berat Badan",
    obese: "Obesitas",
    tipUnderweight:
      "Coba tambah asupan kalori dengan makanan bergizi. Konsultasi ke ahli gizi jika perlu.",
    tipNormal:
      "Berat badanmu ideal! Pertahankan dengan pola makan sehat dan olahraga rutin.",
    tipOverweight:
      "Kurangi asupan kalori dan tambah aktivitas fisik minimal 30 menit per hari.",
    tipObese:
      "Disarankan konsultasi dengan dokter atau ahli gizi untuk program penurunan berat badan yang aman.",

    // info
    whatIsBmiTitle: "Apa itu BMI?",
    whatIsBmiP1:
      "BMI (Body Mass Index) atau Indeks Massa Tubuh adalah ukuran yang digunakan untuk menilai apakah berat badan seseorang sudah proporsional dengan tinggi badannya. Rumusnya sederhana:",
    whatIsBmiFormula: "BMI = Berat Badan (kg) ÷ Tinggi Badan (m)²",
    whatIsBmiP2:
      "BMI bukan alat diagnosis medis, tapi berguna sebagai indikator awal risiko kesehatan yang berhubungan dengan berat badan.",

    tableTitle: "Tabel Kategori BMI (WHO)",
    tableColRange: "Nilai BMI",
    tableColCategory: "Kategori",

    tipsTitle: "Tips Berdasarkan Hasil BMI",
    tipCardUnderweight: "Kekurangan Berat Badan (BMI < 18.5)",
    tipCardUnderweightBody:
      "Tingkatkan asupan kalori dengan makanan padat gizi seperti kacang-kacangan, alpukat, telur, dan daging tanpa lemak. Olahraga beban ringan bisa membantu menambah massa otot.",
    tipCardNormal: "Normal (BMI 18.5 – 24.9)",
    tipCardNormalBody:
      "Pertahankan! Fokus ke pola makan seimbang dan olahraga minimal 150 menit per minggu. Cukup tidur dan kelola stres dengan baik.",
    tipCardOverweight: "Kelebihan Berat Badan (BMI 25 – 29.9)",
    tipCardOverweightBody:
      "Kurangi makanan tinggi gula dan lemak jenuh. Tambah porsi sayur dan protein. Jalan kaki 30 menit per hari sudah sangat membantu.",
    tipCardObese: "Obesitas (BMI ≥ 30)",
    tipCardObeseBody:
      "Sangat disarankan konsultasi dengan dokter atau ahli gizi untuk program yang aman dan terstruktur. Jangan coba diet ekstrem tanpa pengawasan.",

    faqTitle: "Pertanyaan Umum",
    faq1Q: "BMI normal berapa?",
    faq1A: (
      <>
        Menurut WHO, BMI normal berada di rentang{" "}
        <strong>18.5 hingga 24.9</strong>. Di bawah itu dianggap kekurangan
        berat badan, di atas 25 masuk kategori kelebihan berat badan.
      </>
    ),
    faq2Q: "Apakah BMI akurat untuk semua orang?",
    faq2A:
      "BMI adalah indikator umum dan tidak memperhitungkan komposisi tubuh seperti persentase lemak vs otot. Atlet dengan massa otot tinggi bisa punya BMI tinggi meski lemak tubuhnya rendah.",
    faq3Q: "Cara hitung BMI secara manual?",
    faq3A: (
      <>
        Bagi berat badan (kg) dengan kuadrat tinggi badan dalam meter. Contoh:
        berat 65 kg, tinggi 170 cm → BMI = 65 ÷ (1.70 × 1.70) = 65 ÷ 2.89 ≈{" "}
        <strong>22.5</strong> (Normal).
      </>
    ),

    footer:
      "© 2025 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },

  en: {
    brand: "Kauna Healthy",
    title: "BMI & Ideal Weight Calculator",
    subtitle:
      "Enter your weight and height — we'll instantly calculate your BMI and ideal weight.",

    gender: "Gender",
    male: "Male",
    female: "Female",
    weightLabel: "Weight (kg)",
    weightPlaceholder: "e.g. 65",
    heightLabel: "Height (cm)",
    heightPlaceholder: "e.g. 170",
    calculate: "Calculate My BMI",
    recalculate: "Recalculate",
    yourBmi: "Your BMI",
    idealWeightLabel: "Your ideal weight",
    devineNote: "Based on the Devine formula",

    underweight: "Underweight",
    normal: "Normal",
    overweight: "Overweight",
    obese: "Obese",
    tipUnderweight:
      "Try increasing calorie intake with nutritious foods. Consider consulting a nutritionist.",
    tipNormal:
      "Your weight is ideal! Maintain it with a balanced diet and regular exercise.",
    tipOverweight:
      "Reduce calorie intake and add at least 30 minutes of physical activity per day.",
    tipObese:
      "It's recommended to consult a doctor or nutritionist for a safe weight-loss program.",

    whatIsBmiTitle: "What is BMI?",
    whatIsBmiP1:
      "BMI (Body Mass Index) is a measure used to assess whether a person's weight is proportional to their height. The formula is simple:",
    whatIsBmiFormula: "BMI = Weight (kg) ÷ Height (m)²",
    whatIsBmiP2:
      "BMI is not a medical diagnostic tool, but it's useful as an early indicator of health risks related to body weight.",

    tableTitle: "BMI Category Table (WHO)",
    tableColRange: "BMI Value",
    tableColCategory: "Category",

    tipsTitle: "Tips Based on Your BMI",
    tipCardUnderweight: "Underweight (BMI < 18.5)",
    tipCardUnderweightBody:
      "Increase calorie intake with nutrient-dense foods like nuts, avocado, eggs, and lean meat. Light strength training can help build muscle mass.",
    tipCardNormal: "Normal (BMI 18.5 – 24.9)",
    tipCardNormalBody:
      "Keep it up! Focus on a balanced diet and exercise at least 150 minutes per week. Get enough sleep and manage stress well.",
    tipCardOverweight: "Overweight (BMI 25 – 29.9)",
    tipCardOverweightBody:
      "Cut down on high-sugar and saturated fat foods. Add more vegetables and protein. A 30-minute daily walk goes a long way.",
    tipCardObese: "Obese (BMI ≥ 30)",
    tipCardObeseBody:
      "It's strongly recommended to consult a doctor or nutritionist for a safe, structured program. Avoid extreme diets without supervision.",

    faqTitle: "Frequently Asked Questions",
    faq1Q: "What is a normal BMI?",
    faq1A: (
      <>
        According to WHO, a normal BMI is between <strong>18.5 and 24.9</strong>
        . Below that is considered underweight; above 25 is overweight.
      </>
    ),
    faq2Q: "Is BMI accurate for everyone?",
    faq2A:
      "BMI is a general indicator and doesn't account for body composition like fat vs muscle percentage. Athletes with high muscle mass can have a high BMI even with low body fat.",
    faq3Q: "How do I calculate BMI manually?",
    faq3A: (
      <>
        Divide your weight (kg) by the square of your height in meters. Example:
        65 kg, 170 cm → BMI = 65 ÷ (1.70 × 1.70) = 65 ÷ 2.89 ≈{" "}
        <strong>22.5</strong> (Normal).
      </>
    ),

    footer:
      "© 2025 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
} as const;

const bmiTable = {
  id: [
    { range: "< 18.5", category: "Kekurangan Berat Badan", color: "text-blue-600" },
    { range: "18.5 – 24.9", category: "Normal", color: "text-green-600" },
    { range: "25 – 29.9", category: "Kelebihan Berat Badan", color: "text-yellow-600" },
    { range: "≥ 30", category: "Obesitas", color: "text-red-600" },
  ],
  en: [
    { range: "< 18.5", category: "Underweight", color: "text-blue-600" },
    { range: "18.5 – 24.9", category: "Normal", color: "text-green-600" },
    { range: "25 – 29.9", category: "Overweight", color: "text-yellow-600" },
    { range: "≥ 30", category: "Obese", color: "text-red-600" },
  ],
};

export default function HomeClient() {
  const [lang, setLang] = useState<Lang>("id");
  const tx = t[lang];

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 pb-20">
      {/* Top bar */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="text-emerald-700 font-bold text-base tracking-tight">
            {tx.brand}
          </span>
        </div>

        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === "id" ? "en" : "id")}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-200 bg-white text-sm font-medium text-emerald-700 hover:bg-emerald-50 transition-all shadow-sm"
          aria-label="Switch language"
        >
          <span className="text-base leading-none">
            {lang === "id" ? "🇮🇩" : "🇬🇧"}
          </span>
          <span>{lang === "id" ? "ID" : "EN"}</span>
          <span className="text-emerald-400">⇄</span>
          <span>{lang === "id" ? "EN" : "ID"}</span>
        </button>
      </div>

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
        aria-label={lang === "id" ? "Kalkulator BMI" : "BMI Calculator"}
        className="bg-white rounded-3xl shadow-md shadow-emerald-100 border border-emerald-100 p-6 sm:p-8 mb-10"
      >
        <BmiCalculator lang={lang} tx={tx} />
      </section>

      {/* Info Section */}
      <article className="space-y-10 text-emerald-950/80">
        {/* What is BMI */}
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">
            {tx.whatIsBmiTitle}
          </h2>
          <p className="leading-relaxed text-sm sm:text-base">{tx.whatIsBmiP1}</p>
          <div className="my-4 bg-emerald-50 border border-emerald-100 rounded-2xl p-4 text-center font-mono text-emerald-800 text-sm sm:text-base">
            {tx.whatIsBmiFormula}
          </div>
          <p className="leading-relaxed text-sm sm:text-base">{tx.whatIsBmiP2}</p>
        </section>

        {/* BMI Category Table */}
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">
            {tx.tableTitle}
          </h2>
          <div className="overflow-hidden rounded-2xl border border-emerald-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">
                    {tx.tableColRange}
                  </th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">
                    {tx.tableColCategory}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {bmiTable[lang].map((row) => (
                  <tr key={row.range} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-mono text-gray-700">
                      {row.range}
                    </td>
                    <td className={`px-4 py-3 font-semibold ${row.color}`}>
                      {row.category}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips by category */}
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">
            {tx.tipsTitle}
          </h2>
          <div className="space-y-3">
            <div className="rounded-2xl bg-blue-50 border border-blue-100 p-4">
              <p className="font-semibold text-blue-700 mb-1 text-sm">
                {tx.tipCardUnderweight}
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {tx.tipCardUnderweightBody}
              </p>
            </div>
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-700 mb-1 text-sm">
                {tx.tipCardNormal}
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {tx.tipCardNormalBody}
              </p>
            </div>
            <div className="rounded-2xl bg-amber-50 border border-amber-100 p-4">
              <p className="font-semibold text-amber-700 mb-1 text-sm">
                {tx.tipCardOverweight}
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {tx.tipCardOverweightBody}
              </p>
            </div>
            <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
              <p className="font-semibold text-red-700 mb-1 text-sm">
                {tx.tipCardObese}
              </p>
              <p className="text-sm leading-relaxed text-gray-600">
                {tx.tipCardObeseBody}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">
            {tx.faqTitle}
          </h2>
          <div className="space-y-5">
            {[
              { q: tx.faq1Q, a: tx.faq1A },
              { q: tx.faq2Q, a: tx.faq2A },
              { q: tx.faq3Q, a: tx.faq3A },
            ].map((item) => (
              <div
                key={item.q}
                className="border-l-4 border-emerald-300 pl-4"
              >
                <p className="font-semibold text-emerald-900 mb-1 text-sm sm:text-base">
                  {item.q}
                </p>
                <p className="text-sm leading-relaxed text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="mt-14 text-center text-xs text-emerald-500/60">
        <p>{tx.footer}</p>
      </footer>
    </main>
  );
}
