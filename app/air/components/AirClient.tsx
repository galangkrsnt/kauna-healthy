"use client";

import Sidebar from "../../components/Sidebar";
import AirCalculator from "./AirCalculator";
import { useLang } from "../../hooks/useLang";

const content = {
  id: {
    title: "Kalkulator Kebutuhan Air Minum Harian",
    subtitle:
      "Hitung berapa liter air yang harus kamu minum setiap hari berdasarkan berat badan dan aktivitasmu.",
    whatTitle: "Kenapa Air Putih Itu Penting?",
    whatP1:
      "Tubuh manusia terdiri dari sekitar 60% air. Air berperan dalam hampir semua fungsi tubuh — dari mengatur suhu, melancarkan pencernaan, hingga menjaga konsentrasi dan energi sepanjang hari.",
    whatP2:
      "Kebutuhan air setiap orang berbeda tergantung berat badan, tingkat aktivitas, dan kondisi lingkungan. Di Indonesia yang beriklim tropis dan lembab, kebutuhan air cenderung lebih tinggi dari rata-rata global.",
    tipsTitle: "Tips Minum Air yang Cukup",
    faqTitle: "Pertanyaan Umum",
    faq1Q: "Apakah 8 gelas sehari itu cukup untuk semua orang?",
    faq1A:
      "Tidak selalu. Anjuran 8 gelas (sekitar 2 liter) adalah rata-rata umum. Kebutuhan aktualmu bisa lebih tinggi jika kamu aktif, berat badanmu lebih besar, atau tinggal di daerah panas.",
    faq2Q: "Apakah kopi, teh, atau jus bisa menggantikan air putih?",
    faq2A:
      "Sebagian bisa, tapi tidak sepenuhnya. Kopi dan teh mengandung kafein yang bersifat diuretik ringan. Air putih tetap yang terbaik untuk hidrasi. Minuman berkafein bisa dihitung sekitar 50–60% dari volume minumannya.",
    faq3Q: "Bagaimana tahu kalau sudah cukup minum air?",
    faq3A:
      "Cara paling mudah: lihat warna urine. Kuning pucat seperti lemonade = terhidrasi baik. Kuning tua atau oranye = kurang minum. Jernih seperti air = terlalu banyak minum.",
    footer:
      "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "Daily Water Intake Calculator",
    subtitle:
      "Find out how many liters of water you should drink every day based on your weight and activity level.",
    whatTitle: "Why is Water So Important?",
    whatP1:
      "The human body is made up of about 60% water. Water plays a role in nearly every bodily function — from regulating temperature and aiding digestion to maintaining focus and energy throughout the day.",
    whatP2:
      "Water needs vary per person depending on body weight, activity level, and environment. In tropical and humid climates, water needs tend to be higher than the global average.",
    tipsTitle: "Tips to Stay Hydrated",
    faqTitle: "Frequently Asked Questions",
    faq1Q: "Is 8 glasses a day enough for everyone?",
    faq1A:
      "Not necessarily. The 8-glass rule (~2 liters) is a general average. Your actual needs may be higher if you're active, have a larger body weight, or live in a hot climate.",
    faq2Q: "Can coffee, tea, or juice replace plain water?",
    faq2A:
      "Partially, but not entirely. Coffee and tea contain caffeine which is a mild diuretic. Plain water is still best for hydration. Caffeinated drinks can count for roughly 50–60% of their volume.",
    faq3Q: "How do I know if I'm drinking enough water?",
    faq3A:
      "The easiest way: check your urine color. Pale yellow like lemonade = well hydrated. Dark yellow or orange = drink more. Clear like water = you may be overhydrating.",
    footer:
      "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
};

export default function AirClient() {
  const { lang, toggleLang } = useLang();
  const tx = content[lang];
  const { tips } = { tips: lang === "id"
    ? [
        "Mulai hari dengan segelas air putih sebelum kopi atau sarapan.",
        "Bawa botol minum ke mana-mana — kalau kelihatan, kamu pasti ingat minum.",
        "Atur pengingat setiap 2 jam di HP.",
        "Makan buah dan sayur dengan kandungan air tinggi seperti semangka, mentimun, dan bayam.",
        "Urine berwarna kuning pucat = terhidrasi dengan baik. Kuning gelap = kurang minum.",
      ]
    : [
        "Start your day with a glass of water before coffee or breakfast.",
        "Carry a water bottle everywhere — if you see it, you'll drink it.",
        "Set reminders on your phone every 2 hours.",
        "Eat water-rich foods like watermelon, cucumber, and spinach.",
        "Pale yellow urine = well hydrated. Dark yellow = drink more.",
      ]
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1 min-w-0 max-w-2xl px-4 pt-16 pb-20 md:pt-8 md:px-8">

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
        aria-label={lang === "id" ? "Kalkulator Air Minum" : "Water Intake Calculator"}
        className="bg-white rounded-3xl shadow-md shadow-emerald-100 border border-emerald-100 p-6 sm:p-8 mb-10"
      >
        <AirCalculator lang={lang} />
      </section>

      {/* Info */}
      <article className="space-y-10 text-emerald-950/80">
        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">{tx.whatTitle}</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">{tx.whatP1}</p>
          <p className="leading-relaxed text-sm sm:text-base">{tx.whatP2}</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">{tx.tipsTitle}</h2>
          <div className="space-y-3">
            {tips.map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-2xl bg-cyan-50 border border-cyan-100 p-4">
                <span className="text-cyan-500 font-black text-base mt-0.5 shrink-0">
                  {i + 1}.
                </span>
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
