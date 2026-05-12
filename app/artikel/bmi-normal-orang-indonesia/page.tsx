import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "../ArticleLayout";

export const metadata: Metadata = {
  title: "BMI Normal untuk Orang Indonesia: Panduan Lengkap — Kauna Healthy",
  description:
    "Standar BMI untuk orang Indonesia berbeda dengan standar global. Pelajari rentang BMI Asia-Pasifik, mengapa orang Asia berisiko lebih tinggi, dan cara interpretasi hasil BMI kamu.",
  keywords: ["BMI normal orang Indonesia", "BMI ideal Indonesia", "BMI Asia Pasifik", "berapa BMI normal", "BMI ideal pria wanita Indonesia"],
  alternates: { canonical: "https://healthy.getkauna.com/artikel/bmi-normal-orang-indonesia" },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "BMI Normal untuk Orang Indonesia: Panduan Lengkap",
  description: "Standar BMI untuk populasi Asia-Pasifik berbeda dengan standar global WHO. Pelajari rentang yang berlaku untuk orang Indonesia.",
  url: "https://healthy.getkauna.com/artikel/bmi-normal-orang-indonesia",
  inLanguage: "id",
  publisher: { "@type": "Organization", name: "Kauna Healthy", url: "https://healthy.getkauna.com" },
};

function ContentId() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <header className="mb-8">
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 mb-3">BMI</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          BMI Normal untuk Orang Indonesia: Panduan Lengkap
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          Standar WHO global tidak sepenuhnya berlaku untuk orang Asia. Pelajari angka yang benar untuk tubuhmu.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Apa itu BMI?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Body Mass Index (BMI) atau Indeks Massa Tubuh adalah cara sederhana untuk menilai apakah berat badan seseorang proporsional terhadap tinggi badannya. BMI dihitung dengan membagi berat badan (kg) dengan kuadrat tinggi badan (m²).
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Meskipun BMI bukan pengukuran sempurna, ini adalah alat skrining yang berguna karena murah, mudah, dan cukup akurat untuk sebagian besar populasi. Dokter dan tenaga kesehatan di seluruh dunia menggunakannya sebagai indikator awal risiko penyakit terkait berat badan.
          </p>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 font-mono text-center text-emerald-800 text-sm sm:text-base">
            BMI = Berat Badan (kg) ÷ Tinggi Badan² (m)
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Mengapa Standar BMI Indonesia Berbeda?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Standar BMI yang banyak dikenal (normal: 18,5–24,9) adalah standar global WHO yang dikembangkan berdasarkan populasi Kaukasia (Eropa dan Amerika). Namun, penelitian selama dua dekade terakhir membuktikan bahwa orang Asia — termasuk orang Indonesia — memiliki risiko kesehatan yang lebih tinggi pada angka BMI yang sama.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Pada BMI yang sama, orang Asia cenderung memiliki <strong>persentase lemak tubuh yang lebih tinggi</strong> dan <strong>lebih banyak lemak visceral</strong> (lemak di sekitar organ) dibanding orang Kaukasia. Lemak visceral inilah yang paling berbahaya karena langsung meningkatkan risiko diabetes tipe 2, penyakit jantung, dan tekanan darah tinggi.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Karena itulah WHO mengembangkan <strong>standar Asia-Pasifik</strong> yang digunakan oleh Kementerian Kesehatan Indonesia — dengan batas bawah yang lebih ketat.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Tabel BMI Normal untuk Orang Indonesia</h2>
          <p className="text-sm text-gray-500 mb-4">Berdasarkan standar WHO Asia-Pasifik yang digunakan Kemenkes RI:</p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Rentang BMI</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Kategori</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Risiko Kesehatan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { range: "< 18,5", cat: "Berat badan kurang", risk: "Rendah (tapi risiko lain meningkat)", color: "text-blue-600" },
                  { range: "18,5 – 22,9", cat: "Normal", risk: "Rata-rata", color: "text-emerald-600" },
                  { range: "23,0 – 24,9", cat: "Overweight (berisiko)", risk: "Meningkat", color: "text-yellow-600" },
                  { range: "25,0 – 29,9", cat: "Obesitas I", risk: "Moderat", color: "text-orange-600" },
                  { range: "≥ 30,0", cat: "Obesitas II", risk: "Tinggi", color: "text-red-600" },
                ].map((row) => (
                  <tr key={row.range} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-mono text-gray-700">{row.range}</td>
                    <td className={`px-4 py-3 font-semibold ${row.color}`}>{row.cat}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Sumber: WHO/IASO/IOTF Expert Consultation on Obesity in Asia Pacific, 2000</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">BMI Normal Pria Indonesia</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Untuk pria Indonesia dewasa, BMI normal berada di rentang <strong>18,5 – 22,9</strong>. Pria dengan BMI di atas 23 sudah termasuk kategori overweight berisiko meskipun secara visual masih terlihat proporsional. Ini berbeda dari persepsi umum yang masih menggunakan standar global (normal hingga 24,9).
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Pria dengan BMI di atas 25 disarankan untuk berkonsultasi dengan dokter atau ahli gizi untuk evaluasi lebih lanjut, terutama jika ada faktor risiko lain seperti lingkar pinggang besar, riwayat diabetes keluarga, atau tekanan darah tinggi.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">BMI Normal Wanita Indonesia</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Untuk wanita Indonesia dewasa, rentang BMI normal juga sama: <strong>18,5 – 22,9</strong>. Wanita secara alami memiliki persentase lemak tubuh yang lebih tinggi dari pria pada BMI yang sama, sehingga pengelolaan berat badan perlu mempertimbangkan komposisi tubuh secara keseluruhan.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Wanita yang sedang hamil atau menyusui memiliki kebutuhan kalori dan berat badan yang berbeda — standar BMI di atas tidak berlaku selama kehamilan dan sebaiknya dikonsultasikan dengan dokter kandungan.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Keterbatasan BMI yang Perlu Kamu Tahu</h2>
          <div className="space-y-3">
            {[
              { title: "BMI tidak membedakan lemak dan otot", body: "Atlet dengan massa otot tinggi bisa memiliki BMI tinggi meski persentase lemak tubuhnya rendah. BMI akan salah mengklasifikasikan mereka sebagai overweight." },
              { title: "BMI tidak mempertimbangkan distribusi lemak", body: "Orang dengan BMI normal bisa tetap berisiko jika lemaknya terkonsentrasi di perut (apple-shaped). Kalkulator lingkar pinggang lebih relevan untuk kasus ini." },
              { title: "BMI tidak akurat untuk lansia", body: "Pada usia lanjut, massa otot berkurang secara alami sehingga BMI bisa normal meski komposisi tubuh sudah tidak sehat." },
              { title: "BMI tidak membedakan jenis kelamin dengan sempurna", body: "Wanita secara biologis memiliki lebih banyak lemak dari pria pada BMI yang sama, namun BMI tidak secara eksplisit memperhitungkan hal ini." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="font-semibold text-emerald-800 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Apa yang Harus Dilakukan Jika BMI Tidak Normal?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            BMI yang tidak normal bukan akhir segalanya — ini hanyalah sinyal awal untuk mengambil tindakan. Yang paling penting adalah perubahan gaya hidup secara bertahap dan konsisten.
          </p>
          <div className="space-y-3">
            {[
              { label: "Jika BMI kurang dari 18,5", action: "Tingkatkan asupan kalori dengan makanan bergizi (bukan junk food). Konsultasi dengan ahli gizi untuk program penambahan berat badan yang sehat." },
              { label: "Jika BMI 23–24,9 (overweight berisiko)", action: "Kurangi asupan kalori 300–500 kcal per hari dan tingkatkan aktivitas fisik. Target penurunan 0,5 kg per minggu adalah realistis dan berkelanjutan." },
              { label: "Jika BMI ≥ 25 (obesitas)", action: "Konsultasi dengan dokter untuk evaluasi kesehatan menyeluruh. Pendekatan multidisiplin (diet, olahraga, perubahan perilaku) lebih efektif dari sekadar diet saja." },
            ].map((item) => (
              <div key={item.label} className="border-l-4 border-emerald-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.action}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Disclaimer Medis</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            Artikel ini bersifat edukatif dan tidak menggantikan saran medis profesional. Jika kamu memiliki kekhawatiran tentang berat badan atau kondisi kesehatan, selalu konsultasikan dengan dokter.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Hitung BMI kamu sekarang</p>
          <p className="text-emerald-100 text-xs mb-3">Gratis, langsung dapat hasil dan interpretasi</p>
          <Link
            href="/"
            className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            Buka Kalkulator BMI →
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
        <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-700 mb-3">BMI</span>
        <h1 className="text-3xl font-bold text-emerald-900 leading-tight mb-3">
          Normal BMI for Indonesians: A Complete Guide
        </h1>
        <p className="text-emerald-700/70 text-base leading-relaxed">
          The global WHO standard does not fully apply to Asian populations. Learn the correct numbers for your body.
        </p>
      </header>

      <div className="space-y-8 text-emerald-950/80">

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">What is BMI?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            Body Mass Index (BMI) is a simple way to assess whether a person&apos;s weight is proportional to their height. BMI is calculated by dividing body weight (kg) by the square of height (m²).
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            While BMI is not a perfect measurement, it is a useful screening tool because it is inexpensive, easy to use, and reasonably accurate for most populations. Doctors and health professionals worldwide use it as an early indicator of weight-related disease risk.
          </p>
          <div className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4 font-mono text-center text-emerald-800 text-sm sm:text-base">
            BMI = Body Weight (kg) ÷ Height² (m)
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-3">Why Does the Indonesian BMI Standard Differ?</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            The widely known BMI standard (normal: 18.5–24.9) is the global WHO standard developed based on Caucasian populations (European and American). However, research over the past two decades has proven that Asian people — including Indonesians — face higher health risks at the same BMI values.
          </p>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            At the same BMI, Asian people tend to have a <strong>higher percentage of body fat</strong> and <strong>more visceral fat</strong> (fat around internal organs) compared to Caucasians. Visceral fat is the most dangerous because it directly increases the risk of type 2 diabetes, heart disease, and high blood pressure.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            This is why WHO developed the <strong>Asia-Pacific standard</strong> adopted by Indonesia&apos;s Ministry of Health — with stricter lower thresholds.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">BMI Table for Indonesians</h2>
          <p className="text-sm text-gray-500 mb-4">Based on the WHO Asia-Pacific standard used by Indonesia&apos;s Ministry of Health:</p>
          <div className="overflow-x-auto rounded-2xl border border-emerald-100 shadow-sm mb-4">
            <table className="w-full text-sm">
              <thead className="bg-emerald-50">
                <tr>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">BMI Range</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Category</th>
                  <th className="text-left px-4 py-3 font-semibold text-emerald-700">Health Risk</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-50">
                {[
                  { range: "< 18.5", cat: "Underweight", risk: "Low (but other risks increase)", color: "text-blue-600" },
                  { range: "18.5 – 22.9", cat: "Normal", risk: "Average", color: "text-emerald-600" },
                  { range: "23.0 – 24.9", cat: "At-Risk Overweight", risk: "Increased", color: "text-yellow-600" },
                  { range: "25.0 – 29.9", cat: "Obesity I", risk: "Moderate", color: "text-orange-600" },
                  { range: "≥ 30.0", cat: "Obesity II", risk: "High", color: "text-red-600" },
                ].map((row) => (
                  <tr key={row.range} className="bg-white hover:bg-emerald-50/40 transition-colors">
                    <td className="px-4 py-3 font-mono text-gray-700">{row.range}</td>
                    <td className={`px-4 py-3 font-semibold ${row.color}`}>{row.cat}</td>
                    <td className="px-4 py-3 text-gray-500 text-xs">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400">Source: WHO/IASO/IOTF Expert Consultation on Obesity in Asia Pacific, 2000</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Normal BMI for Indonesian Men</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            For adult Indonesian men, normal BMI falls in the range of <strong>18.5 – 22.9</strong>. Men with a BMI above 23 are already in the at-risk overweight category even if they still appear proportional visually. This differs from the common perception that still uses the global standard (normal up to 24.9).
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Men with a BMI above 25 are advised to consult a doctor or nutritionist for further evaluation, especially if other risk factors are present such as a large waist circumference, family history of diabetes, or high blood pressure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">Normal BMI for Indonesian Women</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-3">
            For adult Indonesian women, the normal BMI range is also: <strong>18.5 – 22.9</strong>. Women naturally have a higher percentage of body fat than men at the same BMI, so weight management should take overall body composition into account.
          </p>
          <p className="leading-relaxed text-sm sm:text-base">
            Women who are pregnant or breastfeeding have different caloric and weight needs — the BMI standards above do not apply during pregnancy and should be discussed with an obstetrician.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">BMI Limitations You Should Know</h2>
          <div className="space-y-3">
            {[
              { title: "BMI does not distinguish fat from muscle", body: "Athletes with high muscle mass can have a high BMI even though their body fat percentage is low. BMI will incorrectly classify them as overweight." },
              { title: "BMI does not account for fat distribution", body: "People with a normal BMI can still be at risk if their fat is concentrated in the abdomen (apple-shaped). A waist circumference calculator is more relevant in such cases." },
              { title: "BMI is less accurate for older adults", body: "With aging, muscle mass naturally declines, so BMI may appear normal even when body composition is no longer healthy." },
              { title: "BMI does not perfectly distinguish between sexes", body: "Women biologically carry more fat than men at the same BMI, but BMI does not explicitly account for this difference." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl bg-emerald-50 border border-emerald-100 p-4">
                <p className="font-semibold text-emerald-800 text-sm mb-1">{item.title}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-emerald-900 mb-4">What to Do If Your BMI Is Abnormal</h2>
          <p className="leading-relaxed text-sm sm:text-base mb-4">
            An abnormal BMI is not the end of the world — it is simply an early signal to take action. The most important thing is gradual and consistent lifestyle change.
          </p>
          <div className="space-y-3">
            {[
              { label: "If BMI is below 18.5 (Underweight)", action: "Increase caloric intake with nutritious foods (not junk food). Consult a nutritionist for a healthy weight-gain program." },
              { label: "If BMI is 23–24.9 (At-Risk Overweight)", action: "Reduce caloric intake by 300–500 kcal per day and increase physical activity. A target loss of 0.5 kg per week is realistic and sustainable." },
              { label: "If BMI is ≥ 25 (Obesity)", action: "Consult a doctor for a comprehensive health evaluation. A multidisciplinary approach (diet, exercise, behavioral change) is more effective than dieting alone." },
            ].map((item) => (
              <div key={item.label} className="border-l-4 border-emerald-300 pl-4">
                <p className="font-semibold text-emerald-900 text-sm mb-1">{item.label}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{item.action}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="rounded-2xl bg-amber-50 border border-amber-200 p-5">
          <p className="font-semibold text-amber-800 mb-2 text-sm">Medical Disclaimer</p>
          <p className="text-sm leading-relaxed text-amber-700/80">
            This article is for educational purposes only and does not replace professional medical advice. If you have concerns about your weight or health condition, always consult a doctor.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-600 p-5 text-center">
          <p className="text-white font-semibold mb-1 text-sm">Calculate your BMI now</p>
          <p className="text-emerald-100 text-xs mb-3">Free, get instant results and interpretation</p>
          <Link
            href="/"
            className="inline-block bg-white text-emerald-700 font-semibold text-sm px-6 py-2.5 rounded-xl hover:bg-emerald-50 transition-colors"
          >
            Open BMI Calculator →
          </Link>
        </div>

      </div>
    </>
  );
}

export default function ArticleBMIIndonesia() {
  return (
    <ArticleLayout
      activeHref="/artikel/bmi-normal-orang-indonesia"
      childrenId={<ContentId />}
      childrenEn={<ContentEn />}
    />
  );
}
