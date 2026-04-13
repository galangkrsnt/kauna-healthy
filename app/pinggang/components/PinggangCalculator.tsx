"use client";

import { useState } from "react";
import type { Lang } from "../../components/HomeClient";

type Category = { label: string; color: string; bg: string; tip: string };

type Tx = {
  gender: string; male: string; female: string;
  waistLabel: string; waistPlaceholder: string;
  heightLabel: string; heightPlaceholder: string;
  calculate: string; recalculate: string;
  whtrTitle: string; waistTitle: string; riskTitle: string;
  categories: { slim: Category; healthy: Category; overweight: Category; obese: Category; extremeObese: Category };
  waistCategories: { normal: Category; risk: Category };
  whtrNote: string; waistNote: string;
};

export const pinggangT: Record<Lang, Tx> = {
  id: {
    gender: "Jenis Kelamin", male: "Laki-laki", female: "Perempuan",
    waistLabel: "Lingkar Pinggang (cm)", waistPlaceholder: "contoh: 80",
    heightLabel: "Tinggi Badan (cm)", heightPlaceholder: "contoh: 170",
    calculate: "Hitung Lingkar Pinggang", recalculate: "Hitung Ulang",
    whtrTitle: "Rasio Pinggang-Tinggi (WHtR)",
    waistTitle: "Lingkar Pinggang",
    riskTitle: "Risiko Kesehatan",
    categories: {
      slim: { label: "Terlalu Kurus", color: "text-blue-500", bg: "bg-blue-50 border-blue-200", tip: "Lingkar pinggangmu sangat kecil dibanding tinggi badanmu. Pastikan kamu mendapat nutrisi yang cukup." },
      healthy: { label: "Sehat", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", tip: "Rasio pinggang-tinggi badanmu ideal. Pertahankan dengan pola makan sehat dan olahraga rutin." },
      overweight: { label: "Kelebihan Lemak Perut", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", tip: "Lemak di area perut mulai meningkat. Kurangi makanan tinggi gula dan lemak, perbanyak kardio." },
      obese: { label: "Obesitas Sentral", color: "text-orange-600", bg: "bg-orange-50 border-orange-200", tip: "Lemak perut berlebih meningkatkan risiko penyakit jantung dan diabetes. Konsultasi dengan dokter disarankan." },
      extremeObese: { label: "Obesitas Sentral Berat", color: "text-red-600", bg: "bg-red-50 border-red-200", tip: "Risiko kesehatan sangat tinggi. Sangat disarankan untuk berkonsultasi dengan dokter dan ahli gizi segera." },
    },
    waistCategories: {
      normal: { label: "Normal", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", tip: "Lingkar pinggang dalam batas aman." },
      risk: { label: "Berisiko", color: "text-red-600", bg: "bg-red-50 border-red-200", tip: "Lingkar pinggang melebihi batas aman WHO untuk Asia. Risiko penyakit metabolik meningkat." },
    },
    whtrNote: "WHtR = lingkar pinggang ÷ tinggi badan. Nilai ideal < 0.5",
    waistNote: "Batas aman WHO untuk Asia: Laki-laki < 90cm, Perempuan < 80cm",
  },
  en: {
    gender: "Gender", male: "Male", female: "Female",
    waistLabel: "Waist Circumference (cm)", waistPlaceholder: "e.g. 80",
    heightLabel: "Height (cm)", heightPlaceholder: "e.g. 170",
    calculate: "Calculate Waist", recalculate: "Recalculate",
    whtrTitle: "Waist-to-Height Ratio (WHtR)",
    waistTitle: "Waist Circumference",
    riskTitle: "Health Risk",
    categories: {
      slim: { label: "Too Slim", color: "text-blue-500", bg: "bg-blue-50 border-blue-200", tip: "Your waist is very small relative to your height. Make sure you're getting adequate nutrition." },
      healthy: { label: "Healthy", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", tip: "Your waist-to-height ratio is ideal. Maintain it with a healthy diet and regular exercise." },
      overweight: { label: "Excess Belly Fat", color: "text-amber-600", bg: "bg-amber-50 border-amber-200", tip: "Belly fat is starting to increase. Reduce sugary and fatty foods and add more cardio." },
      obese: { label: "Central Obesity", color: "text-orange-600", bg: "bg-orange-50 border-orange-200", tip: "Excess belly fat increases risk of heart disease and diabetes. Consult a doctor." },
      extremeObese: { label: "Severe Central Obesity", color: "text-red-600", bg: "bg-red-50 border-red-200", tip: "Health risk is very high. Strongly recommended to consult a doctor and nutritionist immediately." },
    },
    waistCategories: {
      normal: { label: "Normal", color: "text-emerald-600", bg: "bg-emerald-50 border-emerald-200", tip: "Waist circumference is within safe limits." },
      risk: { label: "At Risk", color: "text-red-600", bg: "bg-red-50 border-red-200", tip: "Waist circumference exceeds WHO safe limit for Asians. Risk of metabolic disease is increased." },
    },
    whtrNote: "WHtR = waist circumference ÷ height. Ideal value < 0.5",
    waistNote: "WHO safe limit for Asians: Male < 90cm, Female < 80cm",
  },
};

function getWhtrCategory(whtr: number, tx: Tx): Category {
  if (whtr < 0.4) return tx.categories.slim;
  if (whtr < 0.5) return tx.categories.healthy;
  if (whtr < 0.53) return tx.categories.overweight;
  if (whtr < 0.58) return tx.categories.obese;
  return tx.categories.extremeObese;
}

function getWaistCategory(waistCm: number, gender: "male" | "female", tx: Tx): Category {
  const limit = gender === "male" ? 90 : 80;
  return waistCm < limit ? tx.waistCategories.normal : tx.waistCategories.risk;
}

type Result = { whtr: number; waistCm: number; heightCm: number; whtrCategory: Category; waistCategory: Category };

const inputCls = "flex-1 min-w-0 bg-transparent px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none";
const unitCls = "px-3 py-3 text-sm font-semibold text-emerald-700 bg-emerald-100/70 border-l border-emerald-200 focus:outline-none cursor-pointer rounded-r-2xl";
const wrapCls = "flex rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 overflow-hidden transition-all";

export default function PinggangCalculator({ lang }: { lang: Lang }) {
  const tx = pinggangT[lang];

  const [waistUnit, setWaistUnit] = useState<"cm" | "in">("cm");
  const [heightUnit, setHeightUnit] = useState<"cm" | "in">("cm");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [waist, setWaist] = useState("");
  const [height, setHeight] = useState("");
  const [result, setResult] = useState<Result | null>(null);

  function switchWaistUnit(u: "cm" | "in") {
    if (waist) { const v = parseFloat(waist); if (!isNaN(v)) setWaist(String(u === "in" ? Math.round(v / 2.54 * 10) / 10 : Math.round(v * 2.54 * 10) / 10)); }
    setWaistUnit(u); setResult(null);
  }
  function switchHeightUnit(u: "cm" | "in") {
    if (height) { const v = parseFloat(height); if (!isNaN(v)) setHeight(String(u === "in" ? Math.round(v / 2.54 * 10) / 10 : Math.round(v * 2.54 * 10) / 10)); }
    setHeightUnit(u); setResult(null);
  }

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const rawW = parseFloat(waist), rawH = parseFloat(height);
    if (!rawW || !rawH || rawW <= 0 || rawH <= 0) return;
    const waistCm = waistUnit === "in" ? rawW * 2.54 : rawW;
    const heightCm = heightUnit === "in" ? rawH * 2.54 : rawH;
    const whtr = Math.round((waistCm / heightCm) * 1000) / 1000;
    setResult({
      whtr,
      waistCm: Math.round(waistCm * 10) / 10,
      heightCm: Math.round(heightCm * 10) / 10,
      whtrCategory: getWhtrCategory(whtr, tx),
      waistCategory: getWaistCategory(waistCm, gender, tx),
    });
  }

  const liveWhtrCat = result ? getWhtrCategory(result.whtr, pinggangT[lang]) : null;
  const liveWaistCat = result ? getWaistCategory(result.waistCm, gender, pinggangT[lang]) : null;

  // Gauge: WHtR range 0.3 – 0.7
  const gaugePct = result ? Math.min(Math.max(((result.whtr - 0.3) / 0.4) * 100, 0), 100) : 0;

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

        {/* Waist + Height */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-2">
              {lang === "id" ? "Lingkar Pinggang" : "Waist Circumference"}
            </label>
            <div className={wrapCls}>
              <input type="number" inputMode="decimal" min="1" max="300" step="0.1"
                placeholder={waistUnit === "cm" ? (lang === "id" ? "contoh: 80" : "e.g. 80") : (lang === "id" ? "contoh: 31" : "e.g. 31")}
                value={waist} onChange={(e) => setWaist(e.target.value)} required className={inputCls} />
              <select value={waistUnit} onChange={(e) => switchWaistUnit(e.target.value as "cm" | "in")} className={unitCls}>
                <option value="cm">cm</option>
                <option value="in">in</option>
              </select>
            </div>
            <p className="text-xs text-emerald-400 mt-1">
              {lang === "id" ? "Ukur di bagian paling kecil perut (setinggi pusar)" : "Measure at the narrowest part of your abdomen (navel level)"}
            </p>
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-2">
              {lang === "id" ? "Tinggi Badan" : "Height"}
            </label>
            <div className={wrapCls}>
              <input type="number" inputMode="decimal" min="1" max="300" step="0.1"
                placeholder={heightUnit === "cm" ? (lang === "id" ? "contoh: 170" : "e.g. 170") : (lang === "id" ? "contoh: 67" : "e.g. 67")}
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

      {result && liveWhtrCat && liveWaistCat && (
        <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* WHtR main result */}
          <div className={`rounded-3xl border-2 p-5 sm:p-6 ${liveWhtrCat.bg}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{tx.whtrTitle}</p>
            <p className={`text-6xl font-black ${liveWhtrCat.color}`}>{result.whtr}</p>
            <p className={`text-lg font-bold mt-1 ${liveWhtrCat.color}`}>{liveWhtrCat.label}</p>

            {/* Gauge */}
            <div className="mt-4">
              <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-300 via-emerald-400 via-40% via-amber-400 to-red-500">
                <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-700 shadow-md transition-all duration-500" style={{ left: `calc(${gaugePct}% - 8px)` }} />
              </div>
              <div className="flex justify-between text-xs text-gray-400 mt-1 px-0.5">
                <span>0.3</span><span>0.4</span><span>0.5</span><span>0.58</span><span>0.7</span>
              </div>
            </div>

            <p className="text-sm text-gray-600 mt-3 leading-relaxed">{liveWhtrCat.tip}</p>
            <p className="text-xs text-gray-400 mt-2">{tx.whtrNote}</p>
          </div>

          {/* Waist circumference risk */}
          <div className={`rounded-2xl border-2 p-4 sm:p-5 ${liveWaistCat.bg}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{tx.waistTitle}</p>
            <div className="flex items-center justify-between">
              <p className={`text-4xl font-black ${liveWaistCat.color}`}>
                {result.waistCm} <span className="text-xl font-normal">cm</span>
              </p>
              <span className={`text-sm font-bold px-3 py-1 rounded-full ${liveWaistCat.color} bg-white border-2 ${liveWaistCat.bg.replace("bg-", "border-").replace("/50","")}`}>
                {liveWaistCat.label}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-2">{tx.waistNote}</p>
          </div>

          {/* Reference table */}
          <div className="rounded-2xl border-2 border-gray-100 bg-white overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">WHtR</th>
                  <th className="text-left px-4 py-2.5 text-xs font-semibold text-gray-500 uppercase tracking-wide">{lang === "id" ? "Kategori" : "Category"}</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { range: "< 0.4", label: tx.categories.slim.label, color: "text-blue-500" },
                  { range: "0.4 – 0.5", label: tx.categories.healthy.label, color: "text-emerald-600" },
                  { range: "0.5 – 0.53", label: tx.categories.overweight.label, color: "text-amber-600" },
                  { range: "0.53 – 0.58", label: tx.categories.obese.label, color: "text-orange-600" },
                  { range: "> 0.58", label: tx.categories.extremeObese.label, color: "text-red-600" },
                ].map((row) => (
                  <tr key={row.range} className={`bg-white hover:bg-gray-50/50 transition-colors ${result.whtr >= parseFloat(row.range.replace("> ","").replace("< ","").split(" –")[0]) ? "" : ""}`}>
                    <td className="px-4 py-2.5 font-mono text-gray-600 text-xs">{row.range}</td>
                    <td className={`px-4 py-2.5 font-semibold ${row.color}`}>{row.label}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button onClick={() => setResult(null)} className="w-full py-3 rounded-2xl border-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50 text-sm font-medium transition-all">
            {tx.recalculate}
          </button>
        </div>
      )}
    </div>
  );
}
