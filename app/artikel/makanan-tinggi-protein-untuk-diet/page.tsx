import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Makanan Tinggi Protein untuk Diet: Panduan Lengkap — Kauna Healthy",
  description:
    "Daftar makanan tinggi protein terbaik yang mudah ditemukan di Indonesia — dari sumber hewani dan nabati — beserta cara mengoptimalkan asupan protein untuk diet dan pembentukan otot.",
  keywords: ["makanan tinggi protein", "sumber protein untuk diet", "makanan protein tinggi Indonesia", "protein nabati hewani", "berapa protein per hari"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/makanan-tinggi-protein-untuk-diet" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Makanan Tinggi Protein untuk Diet: Panduan Lengkap",
  description: "Daftar makanan tinggi protein terbaik yang mudah ditemukan di Indonesia.",
  url: "https://healthy.getkauna.com/artikel/makanan-tinggi-protein-untuk-diet",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

function ContentId() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 mb-3">Nutrisi</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Makanan Tinggi Protein untuk Diet
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Protein adalah kunci diet yang efektif — mengenyangkan, mempertahankan otot, dan membakar lebih banyak kalori hanya untuk dicerna. Ini daftar lengkap yang mudah ditemukan di Indonesia.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa Protein Penting untuk Diet?</h2>
          <div className="space-y-3">
            {[
              { title: "Paling mengenyangkan", body: "Protein meningkatkan hormon kenyang (GLP-1, peptida YY) dan menurunkan hormon lapar (ghrelin) lebih efektif dari karbohidrat maupun lemak. Penelitian menunjukkan diet tinggi protein mengurangi nafsu makan secara spontan 400–500 kalori per hari." },
              { title: "Efek termogenik tertinggi", body: "Tubuh membakar 20–30% kalori protein hanya untuk mencernanya — jauh lebih tinggi dari karbohidrat (5–10%) dan lemak (0–3%). Artinya, makan 100 kalori protein hanya memberikan sekitar 70–80 kalori neto." },
              { title: "Mencegah kehilangan massa otot", body: "Saat defisit kalori, tubuh cenderung membakar otot bersama lemak. Asupan protein yang cukup (1,6 g/kg/hari) terbukti mempertahankan massa otot selama diet, sehingga hasilnya lebih baik jangka panjang." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                <p className="font-semibold text-orange-800 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Berapa Protein yang Dibutuhkan Per Hari?</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Tujuan</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Rekomendasi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { goal: "Kebutuhan minimum (sedentary)", rec: "0,8 g / kg berat badan / hari" },
                  { goal: "Menjaga berat badan & aktif", rec: "1,2–1,6 g / kg berat badan / hari" },
                  { goal: "Diet (turun berat badan)", rec: "1,6–2,2 g / kg berat badan / hari" },
                  { goal: "Pembentukan otot (bulking)", rec: "1,6–2,4 g / kg berat badan / hari" },
                ].map((row) => (
                  <tr key={row.goal} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.goal}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-orange-600">{row.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Contoh: orang dengan berat 65 kg yang sedang diet butuh sekitar <strong>104–143 gram protein per hari</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Sumber Protein Hewani Terbaik di Indonesia</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Makanan</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Protein per 100g</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Kalori per 100g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { food: "Dada ayam (tanpa kulit)", protein: "31 g", cal: "165 kcal" },
                  { food: "Ikan tuna (kaleng, air)", protein: "26 g", cal: "116 kcal" },
                  { food: "Ikan salmon", protein: "25 g", cal: "208 kcal" },
                  { food: "Telur (putih + kuning)", protein: "13 g", cal: "155 kcal" },
                  { food: "Putih telur saja", protein: "11 g", cal: "52 kcal" },
                  { food: "Udang rebus", protein: "24 g", cal: "99 kcal" },
                  { food: "Daging sapi (has dalam)", protein: "26 g", cal: "250 kcal" },
                  { food: "Susu skim", protein: "3,4 g", cal: "35 kcal" },
                ].map((row) => (
                  <tr key={row.food} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.food}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-orange-600">{row.protein}</td>
                    <td className="px-4 py-3 text-gray-500">{row.cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Sumber Protein Nabati Terbaik di Indonesia</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Makanan</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Protein per 100g</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Kalori per 100g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { food: "Tempe", protein: "19 g", cal: "193 kcal" },
                  { food: "Tahu (keras)", protein: "8 g", cal: "76 kcal" },
                  { food: "Edamame (kedelai muda)", protein: "11 g", cal: "122 kcal" },
                  { food: "Kacang merah (matang)", protein: "9 g", cal: "127 kcal" },
                  { food: "Kacang hitam (matang)", protein: "9 g", cal: "132 kcal" },
                  { food: "Oat", protein: "17 g", cal: "389 kcal" },
                  { food: "Kacang almond", protein: "21 g", cal: "579 kcal" },
                ].map((row) => (
                  <tr key={row.food} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.food}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-orange-600">{row.protein}</td>
                    <td className="px-4 py-3 text-gray-500">{row.cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Catatan: protein nabati umumnya memiliki skor asam amino yang lebih rendah (kecuali kedelai). Kombinasikan berbagai sumber untuk asupan asam amino yang lengkap.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tips Praktis Memenuhi Target Protein</h2>
          <div className="space-y-2">
            {[
              "Mulai hari dengan protein: telur rebus, tempe goreng, atau Greek yogurt — bukan nasi putih atau roti saja.",
              "Tambahkan protein di setiap makan: dada ayam, tahu, tempe, atau telur sebagai lauk utama.",
              "Snack tinggi protein: kacang-kacangan, telur rebus, edamame, atau susu — bukan keripik atau biskuit.",
              "Jika sulit mencapai target dari makanan biasa, whey protein atau protein nabati dalam bentuk bubuk bisa membantu — tapi utamakan makanan asli.",
              "Rencanakan makan minggu ini: masak protein dalam jumlah besar (meal prep) agar mudah dikonsumsi setiap hari.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-xl bg-gray-50 border border-gray-100 p-3">
                <span className="text-orange-500 font-bold text-sm mt-0.5 shrink-0">{i + 1}.</span>
                <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Asupan protein sangat tinggi ({">"} 3 g/kg/hari) tidak direkomendasikan untuk orang dengan penyakit ginjal. Konsultasikan dengan dokter jika kamu memiliki kondisi medis tertentu sebelum mengubah pola makan secara drastis.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Hitung kebutuhan kalori dan protein harianmu</p>
          <p className="text-emerald-100 text-xs mb-3">Berdasarkan berat badan dan tingkat aktivitas</p>
          <Link href="/kalori" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
            Kalkulator Kalori Harian →
          </Link>
        </div>

      </div>
    </>
  );
}

function ContentEn() {
  return (
    <>
      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-orange-100 text-orange-700 mb-3">Nutrition</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          High-Protein Foods for Weight Loss: A Complete Guide
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Protein is the cornerstone of effective weight loss — it keeps you full, preserves muscle, and burns more calories just through digestion. Here is everything you need to know.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Why Protein Is Critical for Weight Loss</h2>
          <div className="space-y-3">
            {[
              {
                title: "Most satiating macronutrient",
                body: "Protein raises satiety hormones (GLP-1, peptide YY) and suppresses hunger hormones (ghrelin) more effectively than carbohydrates or fat. Research shows high-protein diets spontaneously reduce calorie intake by 400–500 calories per day without deliberate restriction.",
              },
              {
                title: "Highest thermic effect of any macronutrient",
                body: "Your body burns 20–30% of protein's calories just to digest and process it — far higher than carbohydrates (5–10%) and fat (0–3%). In practical terms, eating 100 calories of protein only delivers around 70–80 net calories to your body.",
              },
              {
                title: "Preserves muscle mass during weight loss",
                body: "In a calorie deficit, the body tends to break down muscle along with fat. Adequate protein intake (1.6 g/kg/day) is proven to preserve lean muscle mass during dieting — leading to better long-term body composition results.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-orange-50 border border-orange-100 p-4">
                <p className="font-semibold text-orange-800 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Daily Protein Needs by Goal</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Goal</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Recommended Intake</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { goal: "Minimum requirement (sedentary)", rec: "0.8 g / kg body weight / day" },
                  { goal: "Maintaining weight & active", rec: "1.2–1.6 g / kg body weight / day" },
                  { goal: "Weight loss (dieting)", rec: "1.6–2.2 g / kg body weight / day" },
                  { goal: "Muscle building (bulking)", rec: "1.6–2.4 g / kg body weight / day" },
                ].map((row) => (
                  <tr key={row.goal} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.goal}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-orange-600">{row.rec}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 leading-relaxed">
            Example: a person weighing 65 kg who is actively dieting needs approximately <strong>104–143 grams of protein per day</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Animal Protein Sources</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Food</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Protein per 100g</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Calories per 100g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { food: "Chicken breast (skinless)", protein: "31 g", cal: "165 kcal" },
                  { food: "Canned tuna (in water)", protein: "26 g", cal: "116 kcal" },
                  { food: "Salmon", protein: "25 g", cal: "208 kcal" },
                  { food: "Whole egg (white + yolk)", protein: "13 g", cal: "155 kcal" },
                  { food: "Egg white only", protein: "11 g", cal: "52 kcal" },
                  { food: "Boiled shrimp", protein: "24 g", cal: "99 kcal" },
                  { food: "Beef sirloin", protein: "26 g", cal: "250 kcal" },
                  { food: "Skim milk", protein: "3.4 g", cal: "35 kcal" },
                ].map((row) => (
                  <tr key={row.food} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.food}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-orange-600">{row.protein}</td>
                    <td className="px-4 py-3 text-gray-500">{row.cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Plant Protein Sources</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Food</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Protein per 100g</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Calories per 100g</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { food: "Tempeh", protein: "19 g", cal: "193 kcal" },
                  { food: "Firm tofu", protein: "8 g", cal: "76 kcal" },
                  { food: "Edamame (young soybeans)", protein: "11 g", cal: "122 kcal" },
                  { food: "Kidney beans (cooked)", protein: "9 g", cal: "127 kcal" },
                  { food: "Black beans (cooked)", protein: "9 g", cal: "132 kcal" },
                  { food: "Oats", protein: "17 g", cal: "389 kcal" },
                  { food: "Almonds", protein: "21 g", cal: "579 kcal" },
                ].map((row) => (
                  <tr key={row.food} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-medium text-gray-700">{row.food}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-orange-600">{row.protein}</td>
                    <td className="px-4 py-3 text-gray-500">{row.cal}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Note: plant proteins generally have a lower amino acid score than animal proteins (soy is an exception). Combine multiple plant sources to ensure a complete amino acid profile.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tips to Hit Your Daily Protein Target</h2>
          <div className="space-y-2">
            {[
              "Start the day with protein: boiled eggs, tempeh, or Greek yogurt — not just white rice or bread alone.",
              "Add a protein source to every meal: chicken breast, tofu, tempeh, or eggs as the main protein component.",
              "Choose high-protein snacks: nuts, boiled eggs, edamame, or milk — not chips or biscuits.",
              "If reaching your target through whole foods is difficult, whey or plant-based protein powder can help — but always prioritize real food first.",
              "Plan and prep ahead: cook protein in bulk (meal prep) so it is easy to include in every meal throughout the week.",
            ].map((tip, i) => (
              <div key={i} className="flex gap-3 items-start rounded-xl bg-gray-50 border border-gray-100 p-3">
                <span className="text-orange-500 font-bold text-sm mt-0.5 shrink-0">{i + 1}.</span>
                <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Medical Disclaimer</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Very high protein intake ({">"} 3 g/kg/day) is not recommended for individuals with kidney disease. Consult a doctor before making significant dietary changes if you have any existing medical conditions.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Calculate your daily calorie and protein needs</p>
          <p className="text-emerald-100 text-xs mb-3">Based on your body weight and activity level</p>
          <Link href="/kalori" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
            Calorie Calculator →
          </Link>
        </div>

      </div>
    </>
  );
}

export default function ArticleProtein() {
  return (
    <ArticleLayout
      activeHref="/artikel/makanan-tinggi-protein-untuk-diet"
      childrenId={<ContentId />}
      childrenEn={<ContentEn />}
    />
  );
}
