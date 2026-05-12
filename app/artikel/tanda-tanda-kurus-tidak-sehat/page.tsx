import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "Tanda-tanda Kurus Tidak Sehat (Skinny Fat) yang Sering Diabaikan — Kauna Healthy",
  description:
    "Kurus belum tentu sehat. Pelajari tanda-tanda kurus tidak sehat atau skinny fat, bedanya dengan kurus sehat, dan langkah konkret untuk memperbaiki komposisi tubuh.",
  keywords: ["kurus tidak sehat", "skinny fat", "tanda kurus tidak sehat", "berat badan normal tapi tidak sehat", "skinny fat adalah"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/tanda-tanda-kurus-tidak-sehat" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Tanda-tanda Kurus Tidak Sehat (Skinny Fat) yang Sering Diabaikan",
  description: "Kurus belum tentu sehat. Kenali skinny fat dan cara memperbaiki komposisi tubuh.",
  url: "https://healthy.getkauna.com/artikel/tanda-tanda-kurus-tidak-sehat",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

function ContentId() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 mb-3">Komposisi Tubuh</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Tanda-tanda Kurus Tidak Sehat yang Sering Diabaikan
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          BMI normal bukan jaminan tubuh sehat. Fenomena "skinny fat" lebih umum dari yang kamu kira — dan lebih berbahaya dari yang terlihat.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Apa Itu Skinny Fat?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            <strong>Skinny fat</strong> (secara klinis disebut MONW — Metabolically Obese Normal Weight) adalah kondisi di mana seseorang memiliki berat badan dan BMI yang terlihat normal atau bahkan kurus, tetapi persentase lemak tubuhnya tinggi dan massa ototnya sangat rendah.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Orang dengan kondisi ini mungkin tidak terlihat gemuk dari luar, tetapi secara metabolik memiliki risiko kesehatan yang setara atau bahkan melebihi orang dengan obesitas — termasuk risiko diabetes tipe 2, penyakit jantung, dan sindrom metabolik.
          </p>
          <div className="rounded-2xl bg-purple-50 border border-purple-100 p-4">
            <p className="text-sm font-semibold text-purple-800 mb-2">Ilustrasi sederhana:</p>
            <div className="grid grid-cols-3 gap-3 text-center text-xs">
              {[
                { label: "Berat badan", skinny: "55 kg", healthy: "55 kg" },
                { label: "BMI", skinny: "21 (normal)", healthy: "21 (normal)" },
                { label: "% Lemak", skinny: "32% (tinggi)", healthy: "20% (sehat)" },
                { label: "Massa otot", skinny: "Sangat rendah", healthy: "Cukup" },
              ].map((row) => (
                <div key={row.label} className="col-span-1">
                  <p className="font-semibold text-gray-600 mb-1">{row.label}</p>
                  <p className="text-red-500">{row.skinny}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tanda-tanda Kurus Tidak Sehat</h2>
          <div className="space-y-3">
            {[
              { sign: "Tubuh terasa lembek meski berat badan normal", detail: "Sedikit atau tidak ada kepadatan otot. Menekan area lengan, perut, atau paha terasa lembek seperti kapas — bukan kencang." },
              { sign: "Cepat lelah dan tidak bertenaga", detail: "Massa otot yang rendah berarti cadangan energi dan kekuatan fisik yang lebih rendah. Aktivitas sederhana seperti naik tangga atau membawa belanjaan terasa berat." },
              { sign: "Perut buncit meski badan kurus", detail: "Lemak visceral bisa menumpuk di perut meski bagian tubuh lain kurus. Lingkar pinggang yang melebihi batas (90cm pria, 80cm wanita) adalah tanda kuat skinny fat." },
              { sign: "Kadar gula darah atau kolesterol tidak normal", detail: "Pemeriksaan darah bisa mengungkap resistensi insulin, trigliserida tinggi, atau HDL rendah — semua tanda sindrom metabolik yang tidak terlihat dari luar." },
              { sign: "Tidak kuat berolahraga meski 'kurus'", detail: "Kekuatan dan daya tahan yang sangat rendah dibanding orang dengan berat badan serupa — karena tidak ada otot yang mendukung." },
              { sign: "Diet ketat tapi berat badan tidak turun jauh", detail: "Metabolisme basal yang rendah (karena kurang otot) membuat defisit kalori lebih sulit diciptakan. Tubuh cepat menyesuaikan diri dengan asupan rendah." },
            ].map((item) => (
              <div key={item.sign} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <p className="font-semibold text-emerald-800 text-sm mb-1.5">⚠ {item.sign}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Penyebab Utama Skinny Fat</h2>
          <div className="space-y-2">
            {[
              { cause: "Diet ketat tanpa olahraga", desc: "Kehilangan berat badan melalui diet saja (terutama kalori sangat rendah) menyebabkan kehilangan otot bersama lemak — menghasilkan tubuh yang lebih kecil tapi komposisinya tetap buruk." },
              { cause: "Tidak aktif secara fisik", desc: "Gaya hidup sedentary menyebabkan atrofi otot secara bertahap. Massa otot berkurang, digantikan lemak — meski berat badan totalnya tidak berubah banyak." },
              { cause: "Asupan protein rendah", desc: "Diet rendah protein tidak memberikan bahan baku untuk mempertahankan dan membangun otot, mempercepat kehilangan massa otot seiring usia." },
              { cause: "Genetik dan hormon", desc: "Beberapa orang secara genetik lebih mudah menyimpan lemak visceral dibanding subkutan, atau memiliki sensitivitas insulin lebih rendah — membuat risiko skinny fat lebih tinggi." },
            ].map((item) => (
              <div key={item.cause} className="border-l-4 border-purple-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.cause}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Cara Memperbaiki Komposisi Tubuh</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            Untuk skinny fat, tujuannya bukan sekadar "turun berat badan" — tapi <strong>rekomposisi tubuh</strong>: membangun otot sambil mengurangi lemak secara bersamaan.
          </p>
          <div className="space-y-3">
            {[
              { no: "1", title: "Mulai latihan beban", body: "Ini adalah perubahan paling penting. Latihan beban 3x seminggu — squat, deadlift, bench press, pull-up — merangsang pertumbuhan otot dan meningkatkan metabolisme basal. Tanpa ini, semua usaha diet tidak akan memperbaiki komposisi tubuh." },
              { no: "2", title: "Tingkatkan asupan protein", body: "Target 1,6–2 gram protein per kg berat badan per hari. Protein memberikan bahan baku untuk membangun otot dan menjaga rasa kenyang lebih lama." },
              { no: "3", title: "Jangan defisit kalori terlalu besar", body: "Untuk rekomposisi, makan di sekitar TDEE (maintenance) atau defisit kecil (200–300 kcal). Defisit besar akan menghambat pertumbuhan otot." },
              { no: "4", title: "Tambahkan kardio moderat", body: "Jalan cepat atau bersepeda 2–3x seminggu membantu kesehatan kardiovaskular dan membakar sedikit lemak tanpa mengganggu pemulihan otot." },
              { no: "5", title: "Tidur cukup dan kelola stres", body: "Hormon pertumbuhan diproduksi saat tidur. Kortisol tinggi akibat stres menghambat pertumbuhan otot dan mendorong penyimpanan lemak visceral." },
            ].map((item) => (
              <div key={item.no} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.no}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Jika kamu mencurigai kondisi skinny fat, pertimbangkan pemeriksaan darah (gula darah puasa, profil lipid, HbA1c) untuk mengetahui kondisi metabolik yang sebenarnya. Konsultasikan dengan dokter untuk evaluasi menyeluruh.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Cek komposisi tubuhmu sekarang</p>
          <p className="text-emerald-100 text-xs mb-4">BMI, persentase lemak, dan lingkar pinggang — gratis</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/lemak" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">Lemak Tubuh →</Link>
            <Link href="/pinggang" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Lingkar Pinggang →</Link>
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
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-purple-100 text-purple-700 mb-3">Body Composition</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Signs of Being Unhealthily Thin (Skinny Fat) That Are Often Ignored
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          A normal BMI is no guarantee of good health. The "skinny fat" phenomenon is more common than you think — and more dangerous than it looks.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">What Is Skinny Fat? (MONW)</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            <strong>Skinny fat</strong> — clinically known as MONW (Metabolically Obese Normal Weight) — is a condition where a person has a normal or even low body weight and BMI, yet carries a high percentage of body fat and very little muscle mass.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            People with this condition may not look overweight from the outside, but metabolically they carry health risks equal to or even exceeding those of people with obesity — including type 2 diabetes, heart disease, and metabolic syndrome.
          </p>
          <div className="rounded-2xl bg-purple-50 border border-purple-100 p-4">
            <p className="text-sm font-semibold text-purple-800 mb-3">Illustration — same BMI, very different body composition:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center">
                <thead>
                  <tr>
                    <th className="px-3 py-2 font-semibold text-gray-600 text-left">Measurement</th>
                    <th className="px-3 py-2 font-semibold text-red-600">Skinny Fat</th>
                    <th className="px-3 py-2 font-semibold text-green-600">Healthy Thin</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-purple-100">
                  {[
                    { label: "Body weight", skinny: "55 kg", healthy: "55 kg" },
                    { label: "BMI", skinny: "21 (normal)", healthy: "21 (normal)" },
                    { label: "Body fat %", skinny: "32% (high)", healthy: "20% (healthy)" },
                    { label: "Muscle mass", skinny: "Very low", healthy: "Adequate" },
                  ].map((row) => (
                    <tr key={row.label} className="bg-white/60">
                      <td className="px-3 py-2 text-left text-gray-600 font-medium">{row.label}</td>
                      <td className="px-3 py-2 text-red-500">{row.skinny}</td>
                      <td className="px-3 py-2 text-green-600">{row.healthy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">6 Signs of Being Unhealthily Thin</h2>
          <div className="space-y-3">
            {[
              { sign: "Body feels soft despite normal weight", detail: "Little or no muscle density. Pressing the upper arms, belly, or thighs feels soft like cotton — not firm." },
              { sign: "Constant fatigue and low energy", detail: "Low muscle mass means lower energy reserves and physical strength. Simple activities like climbing stairs or carrying groceries feel exhausting." },
              { sign: "Pot belly despite a thin frame", detail: "Visceral fat can accumulate in the abdomen even when other body parts are slim. A waist circumference above the threshold (90 cm for men, 80 cm for women) is a strong sign of skinny fat." },
              { sign: "Abnormal blood sugar or cholesterol", detail: "Blood tests may reveal insulin resistance, high triglycerides, or low HDL — all signs of metabolic syndrome that are invisible from the outside." },
              { sign: "Poor exercise tolerance despite being 'thin'", detail: "Very low strength and endurance compared to others of similar weight — because there is no muscle to support physical effort." },
              { sign: "Strict dieting but weight barely drops", detail: "A low basal metabolic rate (due to insufficient muscle) makes it harder to create a calorie deficit. The body adapts quickly to low intake." },
            ].map((item) => (
              <div key={item.sign} className="rounded-2xl bg-gray-50 border border-gray-100 p-4">
                <p className="font-semibold text-emerald-800 text-sm mb-1.5">⚠ {item.sign}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">4 Main Causes of Skinny Fat</h2>
          <div className="space-y-2">
            {[
              { cause: "Strict dieting without exercise", desc: "Losing weight through diet alone (especially very low calorie diets) causes muscle loss alongside fat — resulting in a smaller body with the same poor composition." },
              { cause: "Physical inactivity", desc: "A sedentary lifestyle gradually causes muscle atrophy. Muscle mass decreases and is replaced by fat — even if total body weight does not change much." },
              { cause: "Low protein intake", desc: "A low-protein diet does not provide the building blocks to maintain and build muscle, accelerating muscle mass loss with age." },
              { cause: "Genetics and hormones", desc: "Some people are genetically predisposed to store more visceral fat compared to subcutaneous fat, or have lower insulin sensitivity — making the risk of skinny fat higher." },
            ].map((item) => (
              <div key={item.cause} className="border-l-4 border-purple-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.cause}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">5-Step Body Recomposition Plan</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            For skinny fat, the goal is not simply "lose weight" — it is <strong>body recomposition</strong>: building muscle while reducing fat at the same time.
          </p>
          <div className="space-y-3">
            {[
              { no: "1", title: "Start weight training", body: "This is the single most important change. Weight training 3x per week — squats, deadlifts, bench press, pull-ups — stimulates muscle growth and raises your basal metabolic rate. Without this, no amount of dieting will fix body composition." },
              { no: "2", title: "Increase protein intake", body: "Target 1.6–2 grams of protein per kg of body weight per day. Protein provides the raw material for building muscle and keeps you fuller for longer." },
              { no: "3", title: "Avoid a large calorie deficit", body: "For recomposition, eat around your TDEE (maintenance) or a small deficit (200–300 kcal). A large deficit will impair muscle growth." },
              { no: "4", title: "Add moderate cardio", body: "Brisk walking or cycling 2–3x per week supports cardiovascular health and burns some fat without interfering with muscle recovery." },
              { no: "5", title: "Get enough sleep and manage stress", body: "Growth hormone is produced during sleep. High cortisol from stress inhibits muscle growth and promotes visceral fat storage." },
            ].map((item) => (
              <div key={item.no} className="flex gap-4 bg-white rounded-xl border border-slate-100 p-4">
                <span className="w-7 h-7 rounded-full bg-purple-600 text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{item.no}</span>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">{item.title}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Medical Disclaimer</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            If you suspect you have skinny fat, consider getting blood work done (fasting blood glucose, lipid panel, HbA1c) to understand your true metabolic status. Consult a doctor for a comprehensive evaluation.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Check your body composition now</p>
          <p className="text-emerald-100 text-xs mb-4">Body fat percentage and waist circumference — free</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/lemak" className="inline-block bg-white text-emerald-700 font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-50 transition-colors">Body Fat Calculator →</Link>
            <Link href="/pinggang" className="inline-block bg-emerald-500 text-white font-semibold text-sm px-4 py-2 rounded-xl hover:bg-emerald-400 transition-colors">Waist Calculator →</Link>
          </div>
        </div>

      </div>
    </>
  );
}

export default function ArticleSkinnyFat() {
  return (
    <ArticleLayout
      activeHref="/artikel/tanda-tanda-kurus-tidak-sehat"
      childrenId={<ContentId />}
      childrenEn={<ContentEn />}
    />
  );
}
