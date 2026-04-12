"use client";

import { useState } from "react";
import type { Lang } from "../../components/HomeClient";

const cdcMale: Record<number, [number, number, number, number]> = {
  2:[14.7,16.0,17.4,18.4],3:[14.3,15.7,17.0,18.0],4:[14.1,15.5,16.8,17.8],5:[14.0,15.4,16.8,18.0],
  6:[13.9,15.4,17.0,18.5],7:[14.0,15.6,17.4,19.3],8:[14.2,15.9,18.0,20.2],9:[14.4,16.4,18.8,21.3],
  10:[14.7,16.9,19.6,22.3],11:[15.1,17.6,20.5,23.4],12:[15.5,18.2,21.2,24.2],13:[16.0,18.9,22.0,25.1],
  14:[16.5,19.7,22.8,25.9],15:[17.1,20.5,23.5,26.8],16:[17.6,21.2,24.1,27.5],17:[18.0,21.7,24.6,28.0],18:[18.5,22.2,25.2,28.6],
};
const cdcFemale: Record<number, [number, number, number, number]> = {
  2:[14.3,15.7,17.1,18.0],3:[13.9,15.4,16.7,17.7],4:[13.6,15.2,16.5,17.6],5:[13.5,15.2,16.6,17.9],
  6:[13.5,15.3,17.0,18.5],7:[13.6,15.6,17.6,19.4],8:[13.9,16.1,18.4,20.6],9:[14.2,16.7,19.2,21.8],
  10:[14.6,17.5,20.1,23.0],11:[15.1,18.4,21.1,24.2],12:[15.7,19.2,22.0,25.3],13:[16.3,20.0,22.8,26.2],
  14:[16.9,20.7,23.5,27.0],15:[17.5,21.2,24.0,27.6],16:[17.9,21.7,24.4,28.0],17:[18.2,22.0,24.7,28.4],18:[18.5,22.5,25.0,28.6],
};

type Category = { label: string; color: string; bg: string; tip: string };
type Tx = {
  gender: string; male: string; female: string; age: string; agePlaceholder: string; ageNote: string;
  weightLabel: string; weightPlaceholder: string; heightLabel: string; heightPlaceholder: string;
  calculate: string; recalculate: string; bmiLabel: string; categoryLabel: string;
  idealWeightLabel: string; idealWeightNote: string;
  categories: { underweight: Category; normal: Category; overweight: Category; obese: Category };
  disclaimer: string;
};

export const anakT: Record<Lang, Tx> = {
  id: {
    gender: "Jenis Kelamin Anak", male: "Laki-laki", female: "Perempuan",
    age: "Usia (tahun)", agePlaceholder: "contoh: 10", ageNote: "Berlaku untuk anak usia 2–18 tahun",
    weightLabel: "Berat Badan (kg)", weightPlaceholder: "contoh: 30",
    heightLabel: "Tinggi Badan (cm)", heightPlaceholder: "contoh: 135",
    calculate: "Hitung BMI Anak", recalculate: "Hitung Ulang",
    bmiLabel: "BMI Anak", categoryLabel: "Kategori",
    idealWeightLabel: "Berat Badan Ideal", idealWeightNote: "Berdasarkan persentil 5–85 CDC untuk usia & tinggi ini",
    categories: {
      underweight: { label: "Kekurangan Berat Badan", color: "text-blue-600", bg: "bg-blue-50 border-blue-200", tip: "Berat badan anak di bawah persentil ke-5. Konsultasikan dengan dokter anak untuk evaluasi nutrisi lebih lanjut." },
      normal: { label: "Berat Badan Normal", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", tip: "Berat badan anak dalam rentang sehat. Pertahankan dengan pola makan bergizi dan aktivitas fisik yang cukup." },
      overweight: { label: "Kelebihan Berat Badan", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", tip: "Berat badan anak di atas persentil ke-85. Kurangi makanan tinggi gula dan ajak lebih banyak bergerak." },
      obese: { label: "Obesitas", color: "text-red-600", bg: "bg-red-50 border-red-200", tip: "Berat badan anak di atas persentil ke-95. Sangat disarankan konsultasi dengan dokter anak." },
    },
    disclaimer: "Hasil ini hanya estimasi. Selalu konsultasikan dengan dokter anak untuk penilaian yang akurat.",
  },
  en: {
    gender: "Child's Gender", male: "Male", female: "Female",
    age: "Age (years)", agePlaceholder: "e.g. 10", ageNote: "For children aged 2–18 years",
    weightLabel: "Weight (kg)", weightPlaceholder: "e.g. 30",
    heightLabel: "Height (cm)", heightPlaceholder: "e.g. 135",
    calculate: "Calculate Child's BMI", recalculate: "Recalculate",
    bmiLabel: "Child's BMI", categoryLabel: "Category",
    idealWeightLabel: "Ideal Weight Range", idealWeightNote: "Based on CDC 5th–85th percentile for this age & height",
    categories: {
      underweight: { label: "Underweight", color: "text-blue-600", bg: "bg-blue-50 border-blue-200", tip: "Child's weight is below the 5th percentile. Consult a pediatrician for a nutritional evaluation." },
      normal: { label: "Healthy Weight", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", tip: "Child's weight is in the healthy range. Maintain with nutritious meals and adequate physical activity." },
      overweight: { label: "Overweight", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", tip: "Child's weight is above the 85th percentile. Reduce sugary foods and encourage more physical activity." },
      obese: { label: "Obese", color: "text-red-600", bg: "bg-red-50 border-red-200", tip: "Child's weight is above the 95th percentile. A pediatrician consultation is strongly recommended." },
    },
    disclaimer: "This result is an estimate only. Always consult a pediatrician for an accurate assessment.",
  },
};

function getCategory(bmi: number, age: number, gender: "male" | "female", tx: Tx): Category {
  const table = gender === "male" ? cdcMale : cdcFemale;
  const [p5, , p85, p95] = table[age] ?? table[10];
  if (bmi < p5) return tx.categories.underweight;
  if (bmi < p85) return tx.categories.normal;
  if (bmi < p95) return tx.categories.overweight;
  return tx.categories.obese;
}

type Result = { bmi: number; category: Category; idealMin: number; idealMax: number };

const inputCls = "flex-1 min-w-0 bg-transparent px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none";
const unitCls = "px-3 py-3 text-sm font-semibold text-emerald-700 bg-emerald-100/70 border-l border-emerald-200 focus:outline-none cursor-pointer rounded-r-2xl";
const wrapCls = "flex rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 overflow-hidden transition-all";

export default function AnakCalculator({ lang }: { lang: Lang }) {
  const tx = anakT[lang];

  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightUnit, setHeightUnit] = useState<"cm" | "in">("cm");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function switchWeightUnit(u: "kg" | "lbs") {
    if (weight) { const v = parseFloat(weight); if (!isNaN(v)) setWeight(String(u === "lbs" ? Math.round(v * 2.20462 * 10) / 10 : Math.round(v * 0.453592 * 10) / 10)); }
    setWeightUnit(u); setResult(null);
  }
  function switchHeightUnit(u: "cm" | "in") {
    if (height) { const v = parseFloat(height); if (!isNaN(v)) setHeight(String(u === "in" ? Math.round(v / 2.54 * 10) / 10 : Math.round(v * 2.54 * 10) / 10)); }
    setHeightUnit(u); setResult(null);
  }

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const a = Math.round(parseFloat(age));
    if (!a || a < 2 || a > 18) return;
    const rawW = parseFloat(weight), rawH = parseFloat(height);
    if (!rawW || !rawH) return;
    const weightKg = weightUnit === "lbs" ? rawW * 0.453592 : rawW;
    const heightCm = heightUnit === "in" ? rawH * 2.54 : rawH;
    const heightM = heightCm / 100;
    const bmi = weightKg / (heightM * heightM);
    const table = gender === "male" ? cdcMale : cdcFemale;
    const [p5, , p85] = table[a] ?? table[10];
    const idealMin = Math.round(p5 * heightM * heightM * 10) / 10;
    const idealMax = Math.round(p85 * heightM * heightM * 10) / 10;
    setResult({ bmi: Math.round(bmi * 10) / 10, category: getCategory(bmi, a, gender, tx), idealMin, idealMax });
  }

  const liveCategory = result ? getCategory(result.bmi, Math.round(parseFloat(age)), gender, anakT[lang]) : null;

  return (
    <div className="w-full">
      <form onSubmit={calculate} className="space-y-5">
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-emerald-800 mb-2">{tx.gender}</label>
          <div className="flex gap-3">
            {(["male", "female"] as const).map((g) => (
              <button key={g} type="button" onClick={() => setGender(g)}
                className={`flex-1 py-3 rounded-2xl text-sm font-semibold border-2 transition-all ${
                  g === "male"
                    ? gender === "male" ? "bg-blue-500 text-white border-blue-500 shadow-sm shadow-blue-200" : "bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-300"
                    : gender === "female" ? "bg-pink-500 text-white border-pink-500 shadow-sm shadow-pink-200" : "bg-pink-50 text-pink-600 border-pink-100 hover:border-pink-300"
                }`}>
                {g === "male" ? `♂ ${tx.male}` : `♀ ${tx.female}`}
              </button>
            ))}
          </div>
        </div>

        {/* Age + Weight + Height */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-emerald-800 mb-2">{tx.age}</label>
            <input id="age" type="number" inputMode="numeric" min="2" max="18" step="1"
              placeholder={tx.agePlaceholder} value={age} onChange={(e) => setAge(e.target.value)} required
              className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all" />
            <p className="text-xs text-emerald-400 mt-1">{tx.ageNote}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-2">{lang === "id" ? "Berat Badan" : "Weight"}</label>
            <div className={wrapCls}>
              <input type="number" inputMode="decimal" min="1" max="440" step="0.1"
                placeholder={weightUnit === "kg" ? (lang === "id" ? "contoh: 30" : "e.g. 30") : (lang === "id" ? "contoh: 66" : "e.g. 66")}
                value={weight} onChange={(e) => setWeight(e.target.value)} required className={inputCls} />
              <select value={weightUnit} onChange={(e) => switchWeightUnit(e.target.value as "kg" | "lbs")} className={unitCls}>
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-2">{lang === "id" ? "Tinggi Badan" : "Height"}</label>
            <div className={wrapCls}>
              <input type="number" inputMode="decimal" min="1" max="300" step="0.1"
                placeholder={heightUnit === "cm" ? (lang === "id" ? "contoh: 135" : "e.g. 135") : (lang === "id" ? "contoh: 53" : "e.g. 53")}
                value={height} onChange={(e) => setHeight(e.target.value)} required className={inputCls} />
              <select value={heightUnit} onChange={(e) => switchHeightUnit(e.target.value as "cm" | "in")} className={unitCls}>
                <option value="cm">cm</option>
                <option value="in">in</option>
              </select>
            </div>
          </div>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 active:scale-95 text-white font-bold py-4 rounded-2xl transition-all text-base shadow-md shadow-emerald-200">
          {tx.calculate}
        </button>
      </form>

      {result && liveCategory && (
        <div className="mt-6 space-y-4">
          <div className={`rounded-3xl border-2 p-5 sm:p-6 ${liveCategory.bg}`}>
            <div className="flex items-start justify-between mb-3">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{tx.bmiLabel}</p>
                <p className={`text-6xl font-black ${liveCategory.color}`}>{result.bmi}</p>
              </div>
              <div className="text-right">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{tx.categoryLabel}</p>
                <p className={`text-lg font-bold ${liveCategory.color}`}>{liveCategory.label}</p>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">{liveCategory.tip}</p>
          </div>
          <div className="rounded-2xl border-2 border-emerald-100 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-1">{tx.idealWeightLabel}</p>
            <p className="text-4xl font-black text-emerald-700">
              {result.idealMin}–{result.idealMax}<span className="text-xl font-normal text-emerald-400 ml-1">kg</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">{tx.idealWeightNote}</p>
          </div>
          <div className="rounded-2xl bg-amber-50 border border-amber-100 px-4 py-3 flex gap-2 items-start">
            <span className="text-amber-500 text-base shrink-0">⚠️</span>
            <p className="text-xs text-amber-700 leading-relaxed">{tx.disclaimer}</p>
          </div>
          <button onClick={() => setResult(null)} className="w-full py-3 rounded-2xl border-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50 text-sm font-medium transition-all">
            {tx.recalculate}
          </button>
        </div>
      )}
    </div>
  );
}
