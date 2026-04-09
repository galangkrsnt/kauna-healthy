"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import AnakCalculator from "./AnakCalculator";
import type { Lang } from "../../components/HomeClient";

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
    footer: "© 2025 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
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
    footer: "© 2025 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
};

export default function AnakClient() {
  const [lang, setLang] = useState<Lang>("id");
  const tx = content[lang];

  return (
    <main className="max-w-2xl mx-auto px-4 py-8 pb-20">
      <Navbar lang={lang} onToggleLang={() => setLang(lang === "id" ? "en" : "id")} />

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

      <footer className="mt-14 text-center text-xs text-emerald-500/60">
        <p>{tx.footer}</p>
      </footer>
    </main>
  );
}
