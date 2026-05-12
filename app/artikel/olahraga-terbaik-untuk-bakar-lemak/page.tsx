import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Olahraga Terbaik untuk Membakar Lemak: Kardio vs Latihan Beban — Kauna Healthy",
  description:
    "Kardio atau angkat beban — mana yang lebih efektif membakar lemak? Jawabannya tidak sesederhana itu. Pelajari ilmu di balik pembakaran lemak dan cara menyusun program olahraga yang optimal.",
  keywords: ["olahraga bakar lemak", "kardio vs angkat beban", "olahraga untuk turun berat badan", "olahraga efektif diet", "latihan untuk membakar lemak perut"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/olahraga-terbaik-untuk-bakar-lemak" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Olahraga Terbaik untuk Membakar Lemak: Kardio vs Latihan Beban",
  description: "Ilmu di balik pembakaran lemak dan cara menyusun program olahraga yang optimal.",
  url: "https://healthy.getkauna.com/artikel/olahraga-terbaik-untuk-bakar-lemak",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

function ContentId() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 mb-3">Olahraga</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Olahraga Terbaik untuk Membakar Lemak
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Perdebatan kardio vs latihan beban sudah berlangsung lama. Faktanya, keduanya bekerja dengan mekanisme berbeda — dan keduanya kamu butuhkan.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Bagaimana Tubuh Membakar Lemak?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Tubuh tidak bisa memilih dari bagian mana lemak akan dibakar — ini yang disebut "spot reduction" dan merupakan mitos. Yang terjadi adalah: saat kamu dalam defisit kalori dan berolahraga, tubuh memecah simpanan lemak dari seluruh tubuh secara merata (dengan sedikit variasi genetik).
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Lemak dibakar dalam dua kondisi utama: saat olahraga (langsung) dan saat istirahat (metabolisme basal). Program olahraga yang baik mengoptimalkan keduanya — membakar lemak saat berolahraga sekaligus meningkatkan metabolisme basal untuk membakar lebih banyak kalori sepanjang hari, bahkan saat tidur.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Kardio: Pembakaran Langsung yang Tinggi</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Latihan kardio (aerobik) membakar lebih banyak kalori per sesi dibanding latihan beban dengan durasi yang sama. Ini membuatnya efektif untuk menciptakan defisit kalori secara langsung.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Jenis Kardio</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Kalori/30 menit (70 kg)</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Intensitas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { type: "Jalan santai", cal: "~120 kcal", intensity: "Rendah" },
                  { type: "Jalan cepat", cal: "~180 kcal", intensity: "Rendah–Sedang" },
                  { type: "Bersepeda santai", cal: "~200 kcal", intensity: "Sedang" },
                  { type: "Lari (8 km/jam)", cal: "~280 kcal", intensity: "Sedang–Tinggi" },
                  { type: "Berenang (crawl)", cal: "~250 kcal", intensity: "Sedang–Tinggi" },
                  { type: "HIIT (tabata, circuit)", cal: "~300–400 kcal", intensity: "Sangat Tinggi" },
                ].map((row) => (
                  <tr key={row.type} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.type}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-green-600">{row.cal}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.intensity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Estimasi. Kalori aktual bervariasi berdasarkan berat badan, kebugaran, dan intensitas.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Latihan Beban: Efek Jangka Panjang yang Lebih Kuat</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Per sesi, latihan beban membakar lebih sedikit kalori dari kardio. Tapi keunggulannya ada di efek jangka panjang:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "EPOC (Excess Post-Exercise Oxygen Consumption)",
                body: "Setelah latihan beban intensif, tubuh terus membakar kalori ekstra selama 24–48 jam untuk memulihkan otot. Efek ini jauh lebih besar dari kardio intensitas sedang.",
              },
              {
                title: "Peningkatan metabolisme basal permanen",
                body: "Setiap 1 kg otot yang kamu bangun meningkatkan metabolisme basal sekitar 50–100 kalori per hari — tanpa melakukan apapun. Massa otot lebih besar = tubuh membakar lebih banyak kalori 24 jam.",
              },
              {
                title: "Mencegah kehilangan otot saat diet",
                body: "Tanpa latihan beban, sekitar 25–30% penurunan berat badan saat diet berasal dari otot, bukan lemak. Latihan beban membalikkan proporsi ini.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-green-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Program Optimal: Kombinasi Keduanya</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Penelitian konsisten menunjukkan kombinasi kardio + latihan beban menghasilkan penurunan lemak tubuh yang lebih baik dari masing-masing secara terpisah. Berikut template mingguan yang realistis untuk pemula:
          </p>
          <div className="space-y-2">
            {[
              { day: "Senin", activity: "Latihan beban (upper body: dada, bahu, punggung, tricep, bicep)", duration: "45–60 menit" },
              { day: "Selasa", activity: "Kardio sedang (jalan cepat, bersepeda, berenang)", duration: "30–45 menit" },
              { day: "Rabu", activity: "Istirahat aktif (jalan santai, stretching, yoga)", duration: "20–30 menit" },
              { day: "Kamis", activity: "Latihan beban (lower body: squat, deadlift, lunges, calf)", duration: "45–60 menit" },
              { day: "Jumat", activity: "Kardio + core (HIIT atau circuit training)", duration: "30–40 menit" },
              { day: "Sabtu", activity: "Latihan beban (full body atau lagging muscle group)", duration: "45–60 menit" },
              { day: "Minggu", activity: "Istirahat penuh", duration: "—" },
            ].map((item) => (
              <div key={item.day} className="flex gap-3 bg-white rounded-xl border border-slate-100 p-3">
                <span className="text-xs font-bold text-emerald-600 w-12 shrink-0 pt-0.5">{item.day}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 leading-snug">{item.activity}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Olahraga Terbaik untuk Pemula</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Olahraga terbaik adalah yang bisa kamu lakukan secara konsisten. Jika gym bukan pilihanmu, ini alternatif yang efektif:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Jalan kaki cepat", desc: "Paling mudah dimulai. Targetkan 7.000–10.000 langkah per hari." },
              { name: "Bodyweight training", desc: "Push-up, squat, lunges, plank — efektif tanpa alat." },
              { name: "Bersepeda", desc: "Low-impact, bagus untuk sendi. Bisa sambil commuting." },
              { name: "Berenang", desc: "Full-body workout terbaik, minimal tekanan sendi." },
              { name: "Zumba / dance", desc: "Kardio yang menyenangkan — tingkat kepatuhan lebih tinggi." },
              { name: "Yoga & pilates", desc: "Membangun kekuatan inti dan fleksibilitas, manajemen stres." },
            ].map((item) => (
              <div key={item.name} className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-emerald-800 text-sm mb-0.5">{item.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Konsultasikan dengan dokter sebelum memulai program olahraga baru, terutama jika kamu memiliki kondisi jantung, sendi, atau kondisi medis lainnya. Mulai pelan-pelan dan tingkatkan intensitas secara bertahap.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Track progressmu dengan kalkulator lemak tubuh</p>
          <p className="text-emerald-100 text-xs mb-3">Ukur setiap bulan untuk lihat perkembangan komposisi tubuh</p>
          <Link href="/lemak" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
            Kalkulator Lemak Tubuh →
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
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 mb-3">Exercise</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Best Exercises to Burn Fat
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          The cardio vs. weight training debate has gone on for years. The truth is, both work through different mechanisms — and you need both.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">How Does the Body Burn Fat?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Your body cannot choose which area to burn fat from — this idea is called "spot reduction" and it is a myth. What actually happens: when you are in a calorie deficit and exercising, your body breaks down fat stores from all over the body in a relatively even way (with some genetic variation).
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Fat is burned in two main conditions: during exercise (directly) and at rest (basal metabolism). A good exercise program optimizes both — burning fat during workouts while also raising your basal metabolic rate so you burn more calories throughout the day, even while sleeping.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cardio: High Direct Calorie Burn</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Cardio (aerobic) exercise burns more calories per session than weight training in the same amount of time. This makes it highly effective for creating a direct calorie deficit.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Activity</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Calories/hour at 70 kg</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Intensity</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { type: "Leisurely walking", cal: "~240 kcal", intensity: "Low" },
                  { type: "Brisk walking", cal: "~360 kcal", intensity: "Low–Moderate" },
                  { type: "Casual cycling", cal: "~400 kcal", intensity: "Moderate" },
                  { type: "Running (8 km/h)", cal: "~560 kcal", intensity: "Moderate–High" },
                  { type: "Swimming (freestyle)", cal: "~500 kcal", intensity: "Moderate–High" },
                  { type: "HIIT (tabata, circuit)", cal: "~600–800 kcal", intensity: "Very High" },
                ].map((row) => (
                  <tr key={row.type} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700">{row.type}</td>
                    <td className="px-4 py-3 font-mono font-semibold text-green-600">{row.cal}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.intensity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Estimates. Actual calories vary based on body weight, fitness level, and intensity.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Weight Training: Stronger Long-Term Effects</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Per session, weight training burns fewer calories than cardio. But its advantages lie in long-term effects:
          </p>
          <div className="space-y-3">
            {[
              {
                title: "EPOC (Excess Post-Exercise Oxygen Consumption)",
                body: "After an intense weight training session, your body continues burning extra calories for 24–48 hours to repair muscles. This effect is far greater than moderate-intensity cardio.",
              },
              {
                title: "Permanent increase in basal metabolism",
                body: "Every 1 kg of muscle you build raises your basal metabolic rate by roughly 50–100 calories per day — without doing anything extra. More muscle mass = more calories burned around the clock.",
              },
              {
                title: "Prevents muscle loss while dieting",
                body: "Without weight training, about 25–30% of weight lost during a diet comes from muscle, not fat. Weight training reverses this proportion and preserves lean mass.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-green-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cardio vs. Weights: A Quick Comparison</h2>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Factor</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Cardio</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Weight Training</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { factor: "Calories burned per session", cardio: "Higher", weights: "Lower" },
                  { factor: "After-burn effect (EPOC)", cardio: "Low–Moderate", weights: "High (24–48 hrs)" },
                  { factor: "Impact on basal metabolism", cardio: "Minimal", weights: "Significant (long-term)" },
                  { factor: "Muscle preservation on diet", cardio: "Poor", weights: "Excellent" },
                  { factor: "Cardiovascular health", cardio: "Excellent", weights: "Moderate" },
                ].map((row) => (
                  <tr key={row.factor} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 text-gray-700 font-medium">{row.factor}</td>
                    <td className="px-4 py-3 text-blue-600 text-sm">{row.cardio}</td>
                    <td className="px-4 py-3 text-green-600 text-sm">{row.weights}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Conclusion: combining both produces better fat loss results than either alone.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Optimal Weekly Program Template</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Research consistently shows that combining cardio + weight training yields greater body fat reduction than either alone. Here is a realistic weekly template for beginners:
          </p>
          <div className="space-y-2">
            {[
              { day: "Monday", activity: "Weight training — upper body (chest, shoulders, back, triceps, biceps)", duration: "45–60 min" },
              { day: "Tuesday", activity: "Moderate cardio (brisk walking, cycling, swimming)", duration: "30–45 min" },
              { day: "Wednesday", activity: "Active rest (light walk, stretching, yoga)", duration: "20–30 min" },
              { day: "Thursday", activity: "Weight training — lower body (squats, deadlifts, lunges, calves)", duration: "45–60 min" },
              { day: "Friday", activity: "Cardio + core (HIIT or circuit training)", duration: "30–40 min" },
              { day: "Saturday", activity: "Weight training — full body or lagging muscle group", duration: "45–60 min" },
              { day: "Sunday", activity: "Full rest", duration: "—" },
            ].map((item) => (
              <div key={item.day} className="flex gap-3 bg-white rounded-xl border border-slate-100 p-3">
                <span className="text-xs font-bold text-emerald-600 w-16 shrink-0 pt-0.5">{item.day}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-700 leading-snug">{item.activity}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Best Exercises for Beginners</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            The best exercise is the one you can do consistently. If the gym is not your thing, here are effective alternatives:
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              { name: "Brisk walking", desc: "Easiest to start. Aim for 7,000–10,000 steps per day." },
              { name: "Bodyweight training", desc: "Push-ups, squats, lunges, planks — effective with no equipment." },
              { name: "Cycling", desc: "Low-impact, great for joints. Can double as your commute." },
              { name: "Swimming", desc: "Best full-body workout with minimal joint stress." },
              { name: "Zumba / dance", desc: "Fun cardio — higher adherence rate than traditional workouts." },
              { name: "Yoga & pilates", desc: "Builds core strength and flexibility, great for stress management." },
            ].map((item) => (
              <div key={item.name} className="rounded-xl bg-gray-50 border border-gray-100 p-3">
                <p className="font-semibold text-emerald-800 text-sm mb-0.5">{item.name}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Medical Disclaimer</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Consult your doctor before starting a new exercise program, especially if you have heart conditions, joint problems, or other medical conditions. Start slowly and increase intensity gradually.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Track your progress with the calorie calculator</p>
          <p className="text-emerald-100 text-xs mb-3">Find your TDEE and daily calorie target to fuel your workouts</p>
          <Link href="/kalori" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors">
            Calorie Calculator →
          </Link>
        </div>

      </div>
    </>
  );
}

export default function ArticleOlahraga() {
  return (
    <ArticleLayout
      activeHref="/artikel/olahraga-terbaik-untuk-bakar-lemak"
      childrenId={<ContentId />}
      childrenEn={<ContentEn />}
    />
  );
}
