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
    footer: "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
};

export default function LemakClient() {
  const { lang, toggleLang } = useLang();
  const tx = content[lang];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1 min-w-0 max-w-2xl px-4 pt-16 pb-20 md:pt-8 md:px-8">

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

      <footer className="mt-14 text-center text-xs text-emerald-500/60">
        <p>{tx.footer}</p>
      </footer>
    </main>
    </div>
  );
}
