import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Cara Menurunkan Berat Badan Tanpa Diet Ketat — Kauna Healthy",
  description:
    "Turun berat badan tidak harus menyiksa diri. Pelajari pendekatan ilmiah yang berkelanjutan: perubahan kebiasaan kecil yang berdampak besar tanpa efek yo-yo.",
  keywords: ["cara menurunkan berat badan", "diet tanpa kelaparan", "turun berat badan alami", "program diet sehat", "cara kurus tanpa diet ketat"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Cara Menurunkan Berat Badan Tanpa Diet Ketat",
  description: "Pendekatan ilmiah yang berkelanjutan untuk turun berat badan tanpa efek yo-yo.",
  url: "https://healthy.getkauna.com/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

function ContentId() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 mb-3">Diet & Gaya Hidup</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Cara Menurunkan Berat Badan Tanpa Diet Ketat
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Diet ekstrem mungkin berhasil dalam 2 minggu — tapi 95% orang kembali ke berat semula dalam setahun. Ada cara yang lebih baik.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa Diet Ketat Tidak Berhasil Jangka Panjang?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Setiap kali kamu mengurangi kalori secara drastis, tubuh bereaksi seolah sedang menghadapi kelaparan. Metabolisme melambat, hormon lapar (ghrelin) meningkat, dan hormon kenyang (leptin) menurun. Hasilnya: kamu semakin lapar, energi berkurang, dan tekad semakin melemah.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Ini bukan soal kurang disiplin — ini respons biologis yang sudah terprogram dalam evolusi manusia selama ratusan ribu tahun. Tubuhmu dirancang untuk bertahan dari kelaparan, bukan untuk ramping.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Kabar baiknya: kamu tidak harus melawan biologi. Kamu hanya perlu bekerja sama dengannya dengan pendekatan yang lebih cerdas.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Prinsip Dasar: Defisit Kecil, Konsisten</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Satu kilogram lemak tubuh setara dengan sekitar 7.700 kalori. Artinya, untuk turun 1 kg per bulan, kamu hanya perlu defisit sekitar 250 kalori per hari — kurang dari satu porsi nasi putih.
          </p>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 mb-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Defisit harian", value: "250 kcal" },
                { label: "Penurunan/bulan", value: "~1 kg" },
                { label: "Penurunan/tahun", value: "~12 kg" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-lg font-bold text-emerald-700">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Penurunan 1 kg per bulan mungkin terasa lambat, tapi ini penurunan yang <strong>berkelanjutan</strong> — tubuhmu tidak panik, metabolisme tidak melambat, dan kamu tidak tersiksa lapar setiap hari.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">7 Perubahan Kecil yang Berdampak Besar</h2>
          <div className="space-y-3">
            {[
              {
                no: "1",
                title: "Prioritaskan protein di setiap makan",
                body: "Protein adalah makronutrien yang paling mengenyangkan dan membutuhkan paling banyak energi untuk dicerna. Mulai setiap makan dengan protein: telur, ayam, ikan, tempe, atau tahu. Targetkan minimal 1,2 g protein per kg berat badan per hari.",
              },
              {
                no: "2",
                title: "Kurangi minuman berkalori",
                body: "Minuman manis, teh manis, kopi susu, dan jus kemasan adalah sumber kalori tersembunyi yang mudah diabaikan. Satu gelas teh manis mengandung 150–200 kalori — hampir tidak membuat kenyang. Ganti dengan air putih, teh tawar, atau kopi hitam tanpa gula.",
              },
              {
                no: "3",
                title: "Makan pelan dan tanpa distraksi",
                body: "Dibutuhkan 15–20 menit agar sinyal kenyang sampai dari perut ke otak. Makan sambil scroll HP atau nonton TV membuatmu makan lebih banyak tanpa sadar. Makan di meja, pelan-pelan, dan rasakan setiap gigitan.",
              },
              {
                no: "4",
                title: "Tidur 7–9 jam setiap malam",
                body: "Kurang tidur meningkatkan ghrelin (hormon lapar) dan menurunkan leptin (hormon kenyang) secara signifikan. Orang yang tidur kurang dari 6 jam cenderung makan 300–500 kalori lebih banyak per hari dibanding yang tidur cukup.",
              },
              {
                no: "5",
                title: "Tambahkan sayur di setiap makan",
                body: "Sayuran tinggi serat dan rendah kalori — kamu bisa makan banyak tanpa menambah banyak kalori. Isi setengah piringmu dengan sayuran sebelum mengisi sisanya dengan karbohidrat dan protein.",
              },
              {
                no: "6",
                title: "Jalan kaki minimal 30 menit setiap hari",
                body: "Tidak harus lari maraton. Jalan kaki 30 menit membakar 150–200 kalori dan terbukti mengurangi nafsu makan berlebih, menurunkan stres, dan meningkatkan sensitivitas insulin. Mulai dari parkir lebih jauh atau naik tangga.",
              },
              {
                no: "7",
                title: "Timbang badan seminggu sekali, bukan setiap hari",
                body: "Berat badan bisa naik 1–2 kg dalam sehari hanya karena retensi air, makanan berat, atau siklus menstruasi. Timbang di waktu yang sama setiap minggu dan lihat tren 4 mingguan — bukan angka harian.",
              },
            ].map((item) => (
              <div key={item.no} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.no}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Makanan yang Membantu vs Menghambat</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-800 text-sm mb-3">✓ Prioritaskan</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {["Protein: telur, ayam, ikan, tempe, tahu", "Sayuran: bayam, kangkung, brokoli, wortel", "Karbohidrat kompleks: nasi merah, ubi, oat", "Lemak sehat: alpukat, kacang-kacangan, ikan salmon", "Buah utuh (bukan jus)"].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
              <p className="font-semibold text-red-800 text-sm mb-3">✗ Batasi</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {["Minuman manis: teh manis, soda, jus kemasan", "Makanan ultra-proses: keripik, biskuit, mi instan", "Gorengan berulang dengan minyak lama", "Makanan tinggi gula: kue, permen, es krim", "Alkohol (kalori kosong, meningkatkan nafsu makan)"].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Apa yang Realistis untuk Diharapkan?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Penurunan berat badan yang sehat dan berkelanjutan adalah <strong>0,5–1 kg per minggu</strong>. Lebih dari itu, risiko kehilangan massa otot dan efek yo-yo semakin tinggi.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Ingat: tujuannya bukan hanya angka di timbangan, tapi kesehatan jangka panjang. Kamu bisa saja kehilangan 5 kg dalam 2 minggu dengan diet ekstrem, lalu mendapatkan 7 kg kembali dalam sebulan. Atau kamu bisa kehilangan 1 kg per bulan secara konsisten dan mempertahankannya seumur hidup.
          </p>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Artikel ini bersifat edukatif umum. Jika kamu memiliki kondisi medis seperti diabetes, penyakit jantung, atau gangguan makan, konsultasikan program penurunan berat badan dengan dokter atau ahli gizi terdaftar.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Mulai dengan menghitung BMI dan kalorimu</p>
          <p className="text-emerald-100 text-xs mb-4">Gratis, langsung hasil</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">Kalkulator BMI →</Link>
            <Link href="/kalori" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors">Kalkulator Kalori →</Link>
          </div>
        </div>

      </div>
    </>
  );
}

function ContentEn() {
  return (
    <>
      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 mb-3">Diet & Lifestyle</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          How to Lose Weight Without Crash Dieting
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Extreme diets may work for two weeks — but 95% of people regain the weight within a year. There is a better way.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Why Crash Diets Fail</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Every time you drastically cut calories, your body responds as if it is facing famine. Metabolism slows, ghrelin (the hunger hormone) rises, and leptin (the satiety hormone) drops. The result: you feel hungrier, your energy crashes, and your willpower weakens.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Research backs this up — studies show that up to 95% of people who lose weight through restrictive dieting regain it within 1–5 years, often ending up heavier than before. This is not a failure of discipline. It is a biological response hardwired into human evolution over hundreds of thousands of years. Your body is built to survive starvation, not to stay lean.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            The good news: you do not have to fight your biology. You just need to work with it using a smarter approach.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">The Math: Small Deficit, Big Results</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            One kilogram of body fat equals roughly 7,700 calories. To lose 1 kg per month, you only need a deficit of about 250 calories per day — less than a bowl of white rice. A daily 250 kcal deficit adds up to approximately 0.25 kg of fat lost per week without your body triggering a starvation response.
          </p>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 mb-4">
            <div className="grid grid-cols-3 gap-3 text-center">
              {[
                { label: "Daily deficit", value: "250 kcal" },
                { label: "Loss per month", value: "~1 kg" },
                { label: "Loss per year", value: "~12 kg" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-lg font-bold text-emerald-700">{item.value}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Losing 1 kg per month may feel slow, but it is <strong>sustainable</strong> — your body does not panic, your metabolism stays normal, and you are not starving every day.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">7 Small Habits for Sustainable Weight Loss</h2>
          <div className="space-y-3">
            {[
              {
                no: "1",
                title: "Prioritize protein at every meal",
                body: "Protein is the most filling macronutrient and requires the most energy to digest. Start every meal with a protein source: eggs, chicken, fish, tofu, or legumes. Aim for at least 1.2 g of protein per kg of body weight per day.",
              },
              {
                no: "2",
                title: "Cut liquid calories",
                body: "Sugary drinks, flavored coffees, and packaged juices are hidden calorie traps that barely satisfy hunger. A single sweetened drink can contain 150–200 calories. Switch to water, plain tea, or black coffee.",
              },
              {
                no: "3",
                title: "Eat slowly and without distractions",
                body: "It takes 15–20 minutes for fullness signals to travel from your stomach to your brain. Eating while scrolling your phone or watching TV leads to mindless overeating. Sit at a table, slow down, and pay attention to each bite.",
              },
              {
                no: "4",
                title: "Sleep 7–9 hours every night",
                body: "Sleep deprivation significantly increases ghrelin and decreases leptin. People who sleep less than 6 hours tend to eat 300–500 more calories per day compared to those who sleep adequately.",
              },
              {
                no: "5",
                title: "Add vegetables to every meal",
                body: "Vegetables are high in fiber and low in calories — you can eat a large volume without adding many calories. Fill half your plate with vegetables before adding carbohydrates and protein.",
              },
              {
                no: "6",
                title: "Walk at least 30 minutes every day",
                body: "You do not need to run a marathon. A 30-minute walk burns 150–200 calories and is proven to reduce excessive appetite, lower stress, and improve insulin sensitivity. Start by parking farther away or taking the stairs.",
              },
              {
                no: "7",
                title: "Weigh yourself once a week, not daily",
                body: "Body weight can fluctuate by 1–2 kg in a single day due to water retention, heavy meals, or hormonal cycles. Weigh at the same time each week and track the 4-week trend — not the daily number.",
              },
            ].map((item) => (
              <div key={item.no} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-emerald-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.no}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Foods to Prioritize vs Avoid</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
              <p className="font-semibold text-emerald-800 text-sm mb-3">✓ Prioritize</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "Protein: eggs, chicken, fish, tofu, legumes",
                  "Vegetables: spinach, broccoli, kale, carrots",
                  "Complex carbs: brown rice, sweet potato, oats",
                  "Healthy fats: avocado, nuts, salmon",
                  "Whole fruit (not juice)",
                ].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-emerald-500 shrink-0">✓</span>{item}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl bg-red-50 border border-red-100 p-4">
              <p className="font-semibold text-red-800 text-sm mb-3">✗ Limit</p>
              <ul className="space-y-1.5 text-sm text-gray-600">
                {[
                  "Sugary drinks: soda, sweetened tea, packaged juice",
                  "Ultra-processed foods: chips, crackers, instant noodles",
                  "Deep-fried foods cooked in reused oil",
                  "High-sugar foods: cakes, candy, ice cream",
                  "Alcohol (empty calories, increases appetite)",
                ].map((item) => (
                  <li key={item} className="flex gap-2"><span className="text-red-400 shrink-0">✗</span>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">What Is Realistic to Expect?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Healthy, sustainable weight loss is <strong>0.5–1 kg per week</strong>. Beyond that, the risk of muscle loss and yo-yo rebound increases sharply.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Remember: the goal is not just a number on the scale, but long-term health. You could lose 5 kg in two weeks with an extreme diet, then regain 7 kg within a month. Or you could lose 1 kg per month consistently and keep it off for life.
          </p>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Medical Disclaimer</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            This article is for general educational purposes only. If you have a medical condition such as diabetes, heart disease, or an eating disorder, consult a doctor or registered dietitian before starting any weight loss program.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Start by calculating your BMI and daily calories</p>
          <p className="text-emerald-100 text-xs mb-4">Free, instant results</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">BMI Calculator →</Link>
            <Link href="/kalori" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition-colors">Calorie Calculator →</Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default function ArticleDiet() {
  return (
    <ArticleLayout
      activeHref="/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat"
      childrenId={<ContentId />}
      childrenEn={<ContentEn />}
    />
  );
}
