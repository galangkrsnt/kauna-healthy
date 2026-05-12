import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Efek Kurang Tidur terhadap Berat Badan: Kenapa Tidur Itu Diet — Kauna Healthy",
  description:
    "Kurang tidur bukan hanya bikin mengantuk — ini salah satu sabotase terbesar terhadap program diet. Pelajari mekanisme ilmiahnya dan cara memperbaiki kualitas tidur.",
  keywords: ["efek kurang tidur berat badan", "tidur dan diet", "kurang tidur bikin gemuk", "kualitas tidur dan metabolisme", "hormon tidur dan nafsu makan"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/efek-kurang-tidur-terhadap-berat-badan" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Efek Kurang Tidur terhadap Berat Badan: Kenapa Tidur Itu Diet",
  description: "Mekanisme ilmiah kurang tidur terhadap penambahan berat badan dan cara memperbaikinya.",
  url: "https://healthy.getkauna.com/artikel/efek-kurang-tidur-terhadap-berat-badan",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

function ContentId() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3">Tidur & Metabolisme</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Efek Kurang Tidur terhadap Berat Badan
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Kamu bisa diet ketat dan olahraga rajin, tapi jika tidurmu buruk, hasilnya tidak akan optimal. Inilah mengapa tidur adalah bagian dari program diet yang sering dilupakan.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Angka yang Mengejutkan</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { stat: "+300–500 kcal", desc: "Kalori ekstra yang dimakan orang kurang tidur per hari dibanding yang tidur cukup" },
              { stat: "55%", desc: "Peningkatan risiko obesitas pada orang dewasa yang tidur kurang dari 6 jam per malam" },
              { stat: "2x lipat", desc: "Peningkatan risiko diabetes tipe 2 pada orang dengan gangguan tidur kronis" },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl bg-indigo-50 border border-indigo-100 p-4 text-center">
                <p className="text-2xl font-bold text-indigo-700 mb-1">{item.stat}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 text-center">Sumber: berbagai penelitian meta-analisis, dipublikasikan di jurnal Sleep, Obesity, dan Lancet.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Mekanisme: Bagaimana Kurang Tidur Bikin Gemuk?</h2>
          <div className="space-y-3">
            {[
              {
                title: "Ghrelin meningkat, Leptin menurun",
                body: "Ghrelin adalah hormon lapar yang diproduksi lambung. Leptin adalah hormon kenyang yang diproduksi sel lemak. Kurang tidur satu malam saja meningkatkan ghrelin 15–28% dan menurunkan leptin 15–18% — artinya kamu lebih lapar dan lebih sulit merasa kenyang keesokan harinya.",
                icon: "🍽",
              },
              {
                title: "Kortisol meningkat",
                body: "Kurang tidur memicu respons stres yang meningkatkan kortisol. Kortisol tinggi mendorong nafsu makan tinggi (terutama karbohidrat dan makanan manis), memperlambat pembakaran lemak, dan secara langsung mendorong akumulasi lemak visceral di perut.",
                icon: "😤",
              },
              {
                title: "Penurunan sensitivitas insulin",
                body: "Hanya empat malam tidur kurang dari 6 jam menurunkan sensitivitas insulin hingga 30% — setara dengan efek penambahan berat badan 8–9 kg. Ini meningkatkan risiko diabetes dan membuat tubuh lebih mudah menyimpan kalori sebagai lemak.",
                icon: "📈",
              },
              {
                title: "Aktivasi sistem endocannabinoid",
                body: "Kurang tidur mengaktifkan sistem endocannabinoid di otak — sistem yang sama yang diaktifkan oleh ganja. Efeknya: dorongan kuat untuk makan makanan tinggi kalori yang menyenangkan (snack manis, gorengan) melebihi kebutuhan energi sebenarnya.",
                icon: "🧠",
              },
              {
                title: "Penurunan willpower dan pengambilan keputusan",
                body: "Korteks prefrontal (bagian otak yang mengontrol keputusan dan pengendalian diri) sangat sensitif terhadap kurang tidur. Kamu lebih mudah menyerah pada godaan makanan dan lebih sulit mempertahankan pilihan makanan sehat.",
                icon: "💭",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-emerald-800 text-sm mb-1.5">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Berapa Jam Tidur yang Optimal?</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Usia</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Rekomendasi Tidur</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { age: "Bayi (4–12 bulan)", sleep: "12–16 jam (termasuk tidur siang)" },
                  { age: "Balita (1–2 tahun)", sleep: "11–14 jam" },
                  { age: "Prasekolah (3–5 tahun)", sleep: "10–13 jam" },
                  { age: "Usia sekolah (6–12 tahun)", sleep: "9–12 jam" },
                  { age: "Remaja (13–18 tahun)", sleep: "8–10 jam" },
                  { age: "Dewasa (18–64 tahun)", sleep: "7–9 jam" },
                  { age: "Lansia (65+ tahun)", sleep: "7–8 jam" },
                ].map((row) => (
                  <tr key={row.age} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.age}</td>
                    <td className="px-4 py-3 font-semibold text-indigo-600">{row.sleep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Sumber: National Sleep Foundation & American Academy of Sleep Medicine</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Memperbaiki Kualitas Tidur</h2>
          <div className="space-y-2">
            {[
              { tip: "Tidur dan bangun di jam yang sama setiap hari", detail: "Termasuk akhir pekan. Konsistensi jadwal adalah faktor tunggal terpenting untuk kualitas tidur — lebih penting dari berapa jam kamu tidur." },
              { tip: "Buat kamar tidur gelap, sejuk, dan tenang", detail: "Suhu ideal kamar untuk tidur adalah 18–22°C. Gunakan tirai blackout jika perlu. Kegelapan merangsang produksi melatonin." },
              { tip: "Hindari layar 1 jam sebelum tidur", detail: "Cahaya biru dari HP, tablet, dan laptop menekan melatonin dan membuat otak tetap aktif. Ganti dengan membaca buku fisik, meditasi, atau stretching." },
              { tip: "Hindari kafein setelah jam 14.00", detail: "Kafein memiliki half-life 5–6 jam. Kopi jam 15.00 masih separuh aktif di tubuhmu jam 20.00 — mengganggu kemampuan untuk tertidur." },
              { tip: "Olahraga teratur, tapi tidak terlalu dekat waktu tidur", detail: "Olahraga meningkatkan kualitas tidur secara signifikan — tapi hindari olahraga intensitas tinggi dalam 2–3 jam sebelum tidur karena meningkatkan suhu tubuh dan kortisol." },
              { tip: "Kelola stres secara aktif", detail: "Stres yang tidak terkelola adalah penyebab utama insomnia. Journaling, meditasi 10 menit, atau berbicara dengan orang terpercaya membantu menenangkan sistem saraf sebelum tidur." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-white border border-slate-100 rounded-xl p-4">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-0.5">{item.tip}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Tidur dan Diet: Bekerja Sama, Bukan Terpisah</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Jika kamu sedang dalam program penurunan berat badan dan hasilnya lambat padahal sudah menjaga makan dan olahraga, evaluasi tidurmu. Penelitian menunjukkan orang yang tidur cukup (7–9 jam) kehilangan lebih banyak lemak (bukan otot) dari kalori yang sama dibanding yang kurang tidur.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Tidur bukan kemewahan — ini kebutuhan biologis yang setara dengan makan dan olahraga. Perlakukan tidur sebagai bagian tidak terpisahkan dari program kesehatanmu.
          </p>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Gangguan tidur kronis seperti insomnia atau sleep apnea memerlukan penanganan medis profesional. Jika kamu sudah mencoba memperbaiki kebiasaan tidur tapi tetap tidak bisa tidur dengan baik, konsultasikan dengan dokter.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Pantau kesehatan tubuhmu secara menyeluruh</p>
          <p className="text-emerald-100 text-xs mb-4">BMI, kalori, lemak tubuh, dan lebih banyak lagi — gratis</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">BMI →</Link>
            <Link href="/kalori" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Kalori →</Link>
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
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-indigo-100 text-indigo-700 mb-3">Sleep & Metabolism</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          How Poor Sleep Causes Weight Gain
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          You can diet strictly and exercise regularly, but if your sleep is poor, the results will never be optimal. Here is why sleep is the most overlooked part of any weight-loss program.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Shocking Statistics</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-4">
            {[
              { stat: "+300–500 kcal", desc: "Extra calories consumed per day by sleep-deprived people compared to those who sleep enough" },
              { stat: "55%", desc: "Increased obesity risk in adults who sleep fewer than 6 hours per night" },
              { stat: "2x higher", desc: "Risk of type 2 diabetes in people with chronic sleep disorders" },
            ].map((item) => (
              <div key={item.stat} className="rounded-2xl bg-indigo-50 border border-indigo-100 p-4 text-center">
                <p className="text-2xl font-bold text-indigo-700 mb-1">{item.stat}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-400 text-center">Sources: various meta-analyses published in the journals Sleep, Obesity, and The Lancet.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">5 Mechanisms: How Poor Sleep Causes Weight Gain</h2>
          <div className="space-y-3">
            {[
              {
                title: "Ghrelin rises, Leptin drops",
                body: "Ghrelin is the hunger hormone produced by the stomach. Leptin is the satiety hormone produced by fat cells. Just one night of poor sleep increases ghrelin by 15–28% and decreases leptin by 15–18% — meaning you feel hungrier and find it harder to feel full the next day.",
                icon: "🍽",
              },
              {
                title: "Cortisol spikes",
                body: "Sleep deprivation triggers a stress response that elevates cortisol. High cortisol drives increased appetite (especially for carbs and sweets), slows fat burning, and directly promotes visceral fat accumulation in the abdomen.",
                icon: "😤",
              },
              {
                title: "Insulin resistance develops",
                body: "Just four nights of sleeping fewer than 6 hours reduces insulin sensitivity by up to 30% — equivalent to the effect of gaining 8–9 kg of body weight. This raises diabetes risk and makes the body far more efficient at storing calories as fat.",
                icon: "📈",
              },
              {
                title: "Endocannabinoid system activated",
                body: "Sleep deprivation activates the endocannabinoid system in the brain — the same system activated by cannabis. The result: a powerful urge to eat highly palatable, calorie-dense foods (sweets, fried snacks) well beyond actual energy needs.",
                icon: "🧠",
              },
              {
                title: "Willpower and decision-making impaired",
                body: "The prefrontal cortex — the part of the brain that controls decisions and self-regulation — is highly sensitive to sleep loss. You become more likely to give in to food temptations and less able to maintain healthy eating choices.",
                icon: "💭",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 bg-gray-50 border border-gray-100 rounded-2xl p-4">
                <span className="text-2xl shrink-0">{item.icon}</span>
                <div>
                  <p className="font-semibold text-emerald-800 text-sm mb-1.5">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Optimal Sleep Hours by Age</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Age Group</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Recommended Sleep</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { age: "Infants (4–12 months)", sleep: "12–16 hours (including naps)" },
                  { age: "Toddlers (1–2 years)", sleep: "11–14 hours" },
                  { age: "Preschool (3–5 years)", sleep: "10–13 hours" },
                  { age: "School age (6–12 years)", sleep: "9–12 hours" },
                  { age: "Teenagers (13–18 years)", sleep: "8–10 hours" },
                  { age: "Adults (18–64 years)", sleep: "7–9 hours" },
                  { age: "Older adults (65+ years)", sleep: "7–8 hours" },
                ].map((row) => (
                  <tr key={row.age} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.age}</td>
                    <td className="px-4 py-3 font-semibold text-indigo-600">{row.sleep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Source: National Sleep Foundation & American Academy of Sleep Medicine</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">6 Ways to Improve Sleep Quality</h2>
          <div className="space-y-2">
            {[
              { tip: "Sleep and wake at the same time every day", detail: "Including weekends. Consistent scheduling is the single most important factor for sleep quality — more important than how many hours you sleep." },
              { tip: "Make your bedroom dark, cool, and quiet", detail: "The ideal bedroom temperature for sleep is 18–22°C (64–72°F). Use blackout curtains if needed. Darkness stimulates melatonin production." },
              { tip: "Avoid screens 1 hour before bed", detail: "Blue light from phones, tablets, and laptops suppresses melatonin and keeps the brain active. Replace with reading a physical book, meditating, or light stretching." },
              { tip: "Avoid caffeine after 2:00 PM", detail: "Caffeine has a half-life of 5–6 hours. A 3:00 PM coffee is still half-active in your body at 8:00 PM — interfering with your ability to fall asleep." },
              { tip: "Exercise regularly, but not too close to bedtime", detail: "Regular exercise significantly improves sleep quality — but avoid high-intensity workouts within 2–3 hours of bedtime as they raise body temperature and cortisol." },
              { tip: "Actively manage stress", detail: "Unmanaged stress is the leading cause of insomnia. Journaling, 10 minutes of meditation, or talking to someone you trust helps calm the nervous system before sleep." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-start bg-white border border-slate-100 rounded-xl p-4">
                <span className="w-6 h-6 rounded-full bg-indigo-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-0.5">{item.tip}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Sleep and Diet: Partners, Not Separate</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            If you are in a weight-loss program and progress is slow despite watching your diet and exercising, evaluate your sleep. Research shows that people who sleep enough (7–9 hours) lose significantly more fat (not muscle) from the same caloric deficit compared to those who are sleep-deprived.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Sleep is not a luxury — it is a biological need as fundamental as eating and exercising. Treat sleep as an inseparable part of your health program.
          </p>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Medical Disclaimer</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Chronic sleep disorders such as insomnia or sleep apnea require professional medical treatment. If you have already tried improving your sleep habits but still cannot sleep well, consult a doctor.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Monitor your health comprehensively</p>
          <p className="text-emerald-100 text-xs mb-4">BMI, calories, body fat, and more — all free</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">BMI Calculator →</Link>
            <Link href="/kalori" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Calorie Calculator →</Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default function ArticleTidur() {
  return (
    <ArticleLayout
      activeHref="/artikel/efek-kurang-tidur-terhadap-berat-badan"
      childrenId={<ContentId />}
      childrenEn={<ContentEn />}
    />
  );
}
