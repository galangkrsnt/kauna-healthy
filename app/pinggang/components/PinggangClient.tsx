"use client";

import Navbar from "../../components/Navbar";
import PinggangCalculator from "./PinggangCalculator";
import { useLang } from "../../hooks/useLang";

const content = {
  id: {
    title: "Kalkulator Lingkar Pinggang & Rasio Pinggang-Tinggi",
    subtitle: "Ukur risiko kesehatan kamu berdasarkan lingkar pinggang dan rasio pinggang-tinggi badan (WHtR).",
    whatTitle: "Kenapa Lingkar Pinggang Penting?",
    whatP1: "Lemak yang menumpuk di area perut (lemak visceral) jauh lebih berbahaya dibanding lemak di bagian tubuh lain. Lemak visceral mengelilingi organ vital seperti hati, pankreas, dan usus — dan secara langsung meningkatkan risiko penyakit jantung, diabetes tipe 2, dan tekanan darah tinggi.",
    whatP2: "Rasio Pinggang-Tinggi (WHtR) adalah cara yang lebih akurat untuk menilai risiko kesehatan dibanding BMI, karena mempertimbangkan distribusi lemak di tubuh, bukan hanya berat badan.",
    howTitle: "Cara Mengukur Lingkar Pinggang dengan Benar",
    tipsTitle: "Tips Menurunkan Lemak Perut",
    faqTitle: "Pertanyaan Umum",
    faq1Q: "Apa bedanya WHtR dengan BMI?",
    faq1A: "BMI hanya mengukur berat relatif terhadap tinggi, tanpa mempertimbangkan distribusi lemak. WHtR lebih spesifik karena fokus pada lemak perut yang paling berisiko untuk kesehatan jantung dan metabolisme.",
    faq2Q: "Apakah olahraga bisa menurunkan lingkar pinggang?",
    faq2A: "Ya, terutama kombinasi kardio (lari, sepeda, berenang) dan latihan beban. Kardio membakar kalori dan lemak visceral, sementara latihan beban meningkatkan metabolisme. Defisit kalori dari pola makan tetap yang paling penting.",
    faq3Q: "Berapa lama untuk menurunkan lingkar pinggang?",
    faq3A: "Dengan defisit kalori 500 kcal/hari dan olahraga rutin, penurunan 1–2 cm per bulan adalah target realistis. Konsistensi lebih penting dari intensitas.",
    footer: "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "Waist Circumference & Waist-to-Height Ratio Calculator",
    subtitle: "Measure your health risk based on waist circumference and waist-to-height ratio (WHtR).",
    whatTitle: "Why Does Waist Circumference Matter?",
    whatP1: "Fat that accumulates in the abdominal area (visceral fat) is far more dangerous than fat elsewhere in the body. Visceral fat surrounds vital organs like the liver, pancreas, and intestines — directly increasing the risk of heart disease, type 2 diabetes, and high blood pressure.",
    whatP2: "The Waist-to-Height Ratio (WHtR) is a more accurate way to assess health risk than BMI, because it accounts for fat distribution in the body, not just total weight.",
    howTitle: "How to Measure Your Waist Correctly",
    tipsTitle: "Tips to Reduce Belly Fat",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "What's the difference between WHtR and BMI?",
    faq1A: "BMI only measures weight relative to height, without considering fat distribution. WHtR is more specific because it focuses on belly fat, which is the most dangerous for heart and metabolic health.",
    faq2Q: "Can exercise reduce waist circumference?",
    faq2A: "Yes, especially a combination of cardio (running, cycling, swimming) and strength training. Cardio burns calories and visceral fat, while strength training boosts metabolism. A calorie deficit through diet remains the most important factor.",
    faq3Q: "How long does it take to reduce waist circumference?",
    faq3A: "With a 500 kcal/day calorie deficit and regular exercise, losing 1–2 cm per month is a realistic target. Consistency matters more than intensity.",
    footer: "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
};

export default function PinggangClient() {
  const { lang, toggleLang } = useLang();
  const tx = content[lang];

  const howSteps = lang === "id"
    ? [
        "Berdiri tegak dan bernapas secara normal.",
        "Temukan titik di antara tulang rusuk terbawah dan puncak tulang pinggul.",
        "Lingkarkan pita pengukur di bagian paling kecil perut (biasanya setinggi pusar).",
        "Pastikan pita rata dan tidak terlalu ketat atau longgar.",
        "Ukur setelah menghembuskan napas secara normal.",
      ]
    : [
        "Stand straight and breathe normally.",
        "Find the point between your lowest rib and the top of your hip bone.",
        "Wrap the tape measure around the narrowest part of your abdomen (usually at navel level).",
        "Make sure the tape is level and not too tight or loose.",
        "Measure after a normal exhale.",
      ];

  const tips = lang === "id"
    ? [
        "Kurangi makanan ultra-proses, gula tambahan, dan minuman manis.",
        "Tidur cukup 7–9 jam — kurang tidur meningkatkan hormon lapar dan simpanan lemak perut.",
        "Kelola stres — kortisol tinggi akibat stres mendorong penumpukan lemak visceral.",
        "Perbanyak serat dari sayuran, buah, dan biji-bijian utuh.",
        "Kombinasikan kardio dan latihan beban minimal 3x seminggu.",
      ]
    : [
        "Reduce ultra-processed foods, added sugars, and sugary drinks.",
        "Get 7–9 hours of sleep — lack of sleep increases hunger hormones and belly fat storage.",
        "Manage stress — high cortisol from stress promotes visceral fat accumulation.",
        "Increase fiber intake from vegetables, fruits, and whole grains.",
        "Combine cardio and strength training at least 3x per week.",
      ];

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 pb-20">
      <Navbar lang={lang} onToggleLang={toggleLang} />

      <header className="text-center mb-8 px-2">
        <h1 className="text-3xl sm:text-4xl font-bold text-emerald-900 leading-tight mb-3">{tx.title}</h1>
        <p className="text-emerald-700/70 text-base leading-relaxed max-w-md mx-auto">{tx.subtitle}</p>
      </header>

      <section aria-label={lang === "id" ? "Kalkulator Lingkar Pinggang" : "Waist Circumference Calculator"}
        className="bg-white rounded-3xl shadow-md shadow-emerald-100 border border-emerald-100 p-6 sm:p-8 mb-10">
        <PinggangCalculator lang={lang} />
      </section>

      <article className="space-y-10 text-emerald-950/80">
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.whatTitle}</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">{tx.whatP1}</p>
          <p className="leading-relaxed text-sm sm:text-base">{tx.whatP2}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">{tx.howTitle}</h2>
          <div className="space-y-3">
            {howSteps.map((step, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <span className="text-emerald-600 font-black text-base mt-0.5 shrink-0">{i + 1}.</span>
                <p className="text-sm leading-relaxed text-gray-600">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">{tx.tipsTitle}</h2>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-amber-50 border border-amber-100 p-4">
                <span className="text-amber-500 font-black text-base mt-0.5 shrink-0">✓</span>
                <p className="text-sm leading-relaxed text-gray-600">{tip}</p>
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

      <footer className="mt-14 text-center text-xs text-emerald-500/60">
        <p>{tx.footer}</p>
      </footer>
    </main>
  );
}
