"use client";

import { useState } from "react";
import type { Lang } from "../../components/HomeClient";

type Category = {
  label: string;
  color: string;
  bg: string;
  tip: string;
};

type Tx = {
  gender: string;
  male: string;
  female: string;
  age: string;
  agePlaceholder: string;
  weightLabel: string;
  weightPlaceholder: string;
  heightLabel: string;
  heightPlaceholder: string;
  calculate: string;
  recalculate: string;
  resultTitle: string;
  categories: {
    athlete: Category;
    fit: Category;
    average: Category;
    obese: Category;
  };
  bmiNote: string;
};

export const lemakT: Record<Lang, Tx> = {
  id: {
    gender: "Jenis Kelamin",
    male: "Laki-laki",
    female: "Perempuan",
    age: "Usia",
    agePlaceholder: "contoh: 25",
    weightLabel: "Berat Badan (kg)",
    weightPlaceholder: "contoh: 65",
    heightLabel: "Tinggi Badan (cm)",
    heightPlaceholder: "contoh: 170",
    calculate: "Hitung Lemak Tubuh Saya",
    recalculate: "Hitung Ulang",
    resultTitle: "Persentase Lemak Tubuhmu",
    bmiNote: "Dihitung via BMI menggunakan rumus Deurenberg",
    categories: {
      athlete: {
        label: "Atlet",
        color: "text-blue-600",
        bg: "bg-blue-50 border-blue-200",
        tip: "Persentase lemak tubuhmu sangat rendah — level atlet. Pastikan kamu tetap cukup makan untuk performa optimal.",
      },
      fit: {
        label: "Bugar",
        color: "text-emerald-600",
        bg: "bg-emerald-50 border-emerald-200",
        tip: "Bagus banget! Lemak tubuhmu di level sehat dan bugar. Pertahankan dengan olahraga rutin dan pola makan seimbang.",
      },
      average: {
        label: "Rata-rata",
        color: "text-amber-600",
        bg: "bg-amber-50 border-amber-200",
        tip: "Lemak tubuhmu di kisaran normal. Kalau mau lebih bugar, kombinasikan latihan kardio dan beban dengan defisit kalori ringan.",
      },
      obese: {
        label: "Tinggi",
        color: "text-red-600",
        bg: "bg-red-50 border-red-200",
        tip: "Persentase lemak tubuhmu cukup tinggi. Disarankan konsultasi dengan ahli gizi dan mulai program olahraga yang terstruktur.",
      },
    },
  },
  en: {
    gender: "Gender",
    male: "Male",
    female: "Female",
    age: "Age",
    agePlaceholder: "e.g. 25",
    weightLabel: "Weight (kg)",
    weightPlaceholder: "e.g. 65",
    heightLabel: "Height (cm)",
    heightPlaceholder: "e.g. 170",
    calculate: "Calculate My Body Fat",
    recalculate: "Recalculate",
    resultTitle: "Your Body Fat Percentage",
    bmiNote: "Calculated via BMI using the Deurenberg formula",
    categories: {
      athlete: {
        label: "Athlete",
        color: "text-blue-600",
        bg: "bg-blue-50 border-blue-200",
        tip: "Your body fat is very low — athlete level. Make sure you're eating enough to support performance and recovery.",
      },
      fit: {
        label: "Fit",
        color: "text-emerald-600",
        bg: "bg-emerald-50 border-emerald-200",
        tip: "Great shape! Your body fat is at a healthy, fit level. Keep it up with regular exercise and a balanced diet.",
      },
      average: {
        label: "Average",
        color: "text-amber-600",
        bg: "bg-amber-50 border-amber-200",
        tip: "Your body fat is in the normal range. To get leaner, combine cardio and strength training with a moderate calorie deficit.",
      },
      obese: {
        label: "High",
        color: "text-red-600",
        bg: "bg-red-50 border-red-200",
        tip: "Your body fat percentage is quite high. It's recommended to consult a nutritionist and start a structured exercise program.",
      },
    },
  },
};

// Body fat ranges by gender
const ranges = {
  male: { athlete: 14, fit: 21, average: 25 },
  female: { athlete: 21, fit: 28, average: 35 },
};

function getCategory(bf: number, gender: "male" | "female", tx: Tx): Category {
  const r = ranges[gender];
  if (bf < r.athlete) return tx.categories.athlete;
  if (bf < r.fit) return tx.categories.fit;
  if (bf < r.average) return tx.categories.average;
  return tx.categories.obese;
}

type Result = {
  bodyFat: number;
  bmi: number;
  category: Category;
};

export default function LemakCalculator({ lang }: { lang: Lang }) {
  const tx = lemakT[lang];

  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    if (!w || !h || !a) return;

    const heightM = h / 100;
    const bmi = w / (heightM * heightM);

    // Deurenberg formula
    const bf = 1.2 * bmi + 0.23 * a - 10.8 * (gender === "male" ? 1 : 0) - 5.4;
    const bodyFat = Math.round(bf * 10) / 10;
    const category = getCategory(bodyFat, gender, tx);

    setResult({ bodyFat, bmi: Math.round(bmi * 10) / 10, category });
  }

  // Re-derive live category when lang switches
  const liveCategory =
    result ? getCategory(result.bodyFat, gender, lemakT[lang]) : null;

  // Gauge: clamp 0–50%
  const gaugePct = result
    ? Math.min(Math.max((result.bodyFat / 50) * 100, 0), 100)
    : 0;

  return (
    <div className="w-full">
      <form onSubmit={calculate} className="space-y-5">
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-emerald-800 mb-2">
            {tx.gender}
          </label>
          <div className="flex gap-3">
            {(["male", "female"] as const).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`flex-1 py-3 rounded-2xl text-sm font-semibold border-2 transition-all ${
                  g === "male"
                    ? gender === "male"
                      ? "bg-blue-500 text-white border-blue-500 shadow-sm shadow-blue-200"
                      : "bg-blue-50 text-blue-600 border-blue-100 hover:border-blue-300"
                    : gender === "female"
                      ? "bg-pink-500 text-white border-pink-500 shadow-sm shadow-pink-200"
                      : "bg-pink-50 text-pink-600 border-pink-100 hover:border-pink-300"
                }`}
              >
                {g === "male" ? `♂ ${tx.male}` : `♀ ${tx.female}`}
              </button>
            ))}
          </div>
        </div>

        {/* Age + Weight + Height */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { id: "age", label: tx.age, placeholder: tx.agePlaceholder, value: age, set: setAge, min: "10", max: "100", step: "1" },
            { id: "weight", label: tx.weightLabel, placeholder: tx.weightPlaceholder, value: weight, set: setWeight, min: "1", max: "300", step: "0.1" },
            { id: "height", label: tx.heightLabel, placeholder: tx.heightPlaceholder, value: height, set: setHeight, min: "50", max: "300", step: "0.1" },
          ].map((field) => (
            <div key={field.id}>
              <label htmlFor={field.id} className="block text-sm font-medium text-emerald-800 mb-2">
                {field.label}
              </label>
              <input
                id={field.id}
                type="number"
                inputMode="decimal"
                min={field.min}
                max={field.max}
                step={field.step}
                placeholder={field.placeholder}
                value={field.value}
                onChange={(e) => field.set(e.target.value)}
                required
                className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
              />
            </div>
          ))}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 active:scale-95 text-white font-bold py-4 rounded-2xl transition-all text-base shadow-md shadow-emerald-200"
        >
          {tx.calculate}
        </button>
      </form>

      {result && liveCategory && (
        <div className="mt-6 space-y-4">
          {/* Main result */}
          <div className={`rounded-3xl border-2 p-5 sm:p-6 ${liveCategory.bg}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
              {tx.resultTitle}
            </p>
            <p className={`text-6xl font-black ${liveCategory.color}`}>
              {result.bodyFat}
              <span className="text-2xl font-normal ml-1">%</span>
            </p>
            <p className={`text-lg font-bold mt-1 ${liveCategory.color}`}>
              {liveCategory.label}
            </p>

            {/* Gauge */}
            <div className="mt-4">
              <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-300 via-emerald-400 via-50% to-red-400">
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-700 shadow-md transition-all duration-500"
                  style={{ left: `calc(${gaugePct}% - 8px)` }}
                />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1 px-0.5">
                <span>0%</span>
                <span>Atlet</span>
                <span>Fit</span>
                <span>Avg</span>
                <span>50%</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {liveCategory.tip}
            </p>
          </div>

          {/* BMI reference */}
          <div className="rounded-2xl border-2 border-emerald-100 bg-white p-4 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest">BMI</p>
              <p className="text-2xl font-black text-emerald-700">{result.bmi}</p>
            </div>
            <p className="text-xs text-gray-400 text-right max-w-[180px] leading-relaxed">
              {tx.bmiNote}
            </p>
          </div>

          {/* Category reference table */}
          <div className="rounded-2xl border-2 border-gray-100 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {tx.categories.fit.label === "Fit" ? "Category" : "Kategori"}
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {lang === "id" ? "Laki-laki" : "Male"}
                  </th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">
                    {lang === "id" ? "Perempuan" : "Female"}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { cat: tx.categories.athlete, male: "< 14%", female: "< 21%", color: "text-blue-600" },
                  { cat: tx.categories.fit, male: "14–21%", female: "21–28%", color: "text-emerald-600" },
                  { cat: tx.categories.average, male: "21–25%", female: "28–35%", color: "text-amber-600" },
                  { cat: tx.categories.obese, male: "> 25%", female: "> 35%", color: "text-red-600" },
                ].map((row) => (
                  <tr key={row.cat.label} className="bg-white hover:bg-gray-50/50 transition-colors">
                    <td className={`px-4 py-2.5 font-semibold ${row.color}`}>{row.cat.label}</td>
                    <td className="px-4 py-2.5 font-mono text-gray-600 text-xs">{row.male}</td>
                    <td className="px-4 py-2.5 font-mono text-gray-600 text-xs">{row.female}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            onClick={() => setResult(null)}
            className="w-full py-3 rounded-2xl border-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50 text-sm font-medium transition-all"
          >
            {tx.recalculate}
          </button>
        </div>
      )}
    </div>
  );
}
