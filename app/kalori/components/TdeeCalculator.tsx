"use client";

import { useState } from "react";
import type { Lang } from "../../components/HomeClient";

type Tx = {
  gender: string; male: string; female: string; age: string; agePlaceholder: string;
  weightLabel: string; weightPlaceholder: string; heightLabel: string; heightPlaceholder: string;
  activity: string; activityLevels: { value: string; label: string; multiplier: number }[];
  calculate: string; recalculate: string; bmrLabel: string; bmrNote: string;
  maintenanceLabel: string; maintenanceNote: string; cutLabel: string; cutNote: string;
  bulkLabel: string; bulkNote: string; macrosTitle: string; protein: string; carbs: string; fat: string;
};

export const tdeeT: Record<Lang, Tx> = {
  id: {
    gender: "Jenis Kelamin", male: "Laki-laki", female: "Perempuan",
    age: "Usia", agePlaceholder: "contoh: 25",
    weightLabel: "Berat Badan (kg)", weightPlaceholder: "contoh: 65",
    heightLabel: "Tinggi Badan (cm)", heightPlaceholder: "contoh: 170",
    activity: "Tingkat Aktivitas",
    activityLevels: [
      { value: "sedentary", label: "Sangat jarang olahraga", multiplier: 1.2 },
      { value: "light", label: "Jarang olahraga (1–3x/minggu)", multiplier: 1.375 },
      { value: "moderate", label: "Cukup aktif (3–5x/minggu)", multiplier: 1.55 },
      { value: "active", label: "Sangat aktif (6–7x/minggu)", multiplier: 1.725 },
      { value: "extra", label: "Atlet / kerja fisik berat", multiplier: 1.9 },
    ],
    calculate: "Hitung Kebutuhan Kalori", recalculate: "Hitung Ulang",
    bmrLabel: "BMR (Kalori Dasar)", bmrNote: "Kalori yang dibakar tubuh saat istirahat total",
    maintenanceLabel: "Kalori Maintenance", maintenanceNote: "Untuk menjaga berat badan saat ini",
    cutLabel: "Target Defisit (Turun BB)", cutNote: "−500 kcal/hari → turun ~0.5 kg/minggu",
    bulkLabel: "Target Surplus (Naik BB)", bulkNote: "+300 kcal/hari → lean bulk",
    macrosTitle: "Estimasi Makro Harian (Maintenance)", protein: "Protein", carbs: "Karbohidrat", fat: "Lemak",
  },
  en: {
    gender: "Gender", male: "Male", female: "Female",
    age: "Age", agePlaceholder: "e.g. 25",
    weightLabel: "Weight (kg)", weightPlaceholder: "e.g. 65",
    heightLabel: "Height (cm)", heightPlaceholder: "e.g. 170",
    activity: "Activity Level",
    activityLevels: [
      { value: "sedentary", label: "Sedentary (little or no exercise)", multiplier: 1.2 },
      { value: "light", label: "Lightly active (1–3 days/week)", multiplier: 1.375 },
      { value: "moderate", label: "Moderately active (3–5 days/week)", multiplier: 1.55 },
      { value: "active", label: "Very active (6–7 days/week)", multiplier: 1.725 },
      { value: "extra", label: "Athlete / physical job", multiplier: 1.9 },
    ],
    calculate: "Calculate My Calories", recalculate: "Recalculate",
    bmrLabel: "BMR (Basal Metabolic Rate)", bmrNote: "Calories burned at complete rest",
    maintenanceLabel: "Maintenance Calories", maintenanceNote: "To maintain your current weight",
    cutLabel: "Cut Target (Lose Weight)", cutNote: "−500 kcal/day → lose ~0.5 kg/week",
    bulkLabel: "Bulk Target (Gain Weight)", bulkNote: "+300 kcal/day → lean bulk",
    macrosTitle: "Estimated Daily Macros (Maintenance)", protein: "Protein", carbs: "Carbs", fat: "Fat",
  },
};

type Result = { bmr: number; tdee: number; cut: number; bulk: number; macros: { protein: number; carbs: number; fat: number } };

const inputCls = "flex-1 min-w-0 bg-transparent px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none";
const unitCls = "px-3 py-3 text-sm font-semibold text-emerald-700 bg-emerald-100/70 border-l border-emerald-200 focus:outline-none cursor-pointer rounded-r-2xl";
const wrapCls = "flex rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 overflow-hidden transition-all";

export default function TdeeCalculator({ lang }: { lang: Lang }) {
  const tx = tdeeT[lang];

  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightUnit, setHeightUnit] = useState<"cm" | "in">("cm");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [result, setResult] = useState<Result | null>(null);

  function switchWeightUnit(u: "kg" | "lbs") {
    if (weight) {
      const val = parseFloat(weight);
      if (!isNaN(val)) {
        const c = u === "lbs" ? Math.round(val * 2.20462 * 10) / 10 : Math.round(val * 0.453592 * 10) / 10;
        setWeight(String(c));
      }
    }
    setWeightUnit(u); setResult(null);
  }

  function switchHeightUnit(u: "cm" | "in") {
    if (height) {
      const val = parseFloat(height);
      if (!isNaN(val)) {
        const c = u === "in" ? Math.round(val / 2.54 * 10) / 10 : Math.round(val * 2.54 * 10) / 10;
        setHeight(String(c));
      }
    }
    setHeightUnit(u); setResult(null);
  }

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const rawW = parseFloat(weight), rawH = parseFloat(height), a = parseFloat(age);
    if (!rawW || !rawH || !a) return;
    const w = weightUnit === "lbs" ? rawW * 0.453592 : rawW;
    const h = heightUnit === "in" ? rawH * 2.54 : rawH;

    const bmr = gender === "male" ? 10 * w + 6.25 * h - 5 * a + 5 : 10 * w + 6.25 * h - 5 * a - 161;
    const multiplier = tx.activityLevels.find((l) => l.value === activity)?.multiplier ?? 1.55;
    const tdee = bmr * multiplier;
    const protein = Math.round(w * 2);
    const fat = Math.round((tdee * 0.25) / 9);
    const carbs = Math.round((tdee - protein * 4 - fat * 9) / 4);
    setResult({ bmr: Math.round(bmr), tdee: Math.round(tdee), cut: Math.round(tdee - 500), bulk: Math.round(tdee + 300), macros: { protein, carbs, fat } });
  }

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
            <input id="age" type="number" inputMode="numeric" min="10" max="120"
              placeholder={tx.agePlaceholder} value={age} onChange={(e) => setAge(e.target.value)} required
              className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all" />
          </div>
          <div>
            <label className="block text-sm font-medium text-emerald-800 mb-2">{lang === "id" ? "Berat Badan" : "Weight"}</label>
            <div className={wrapCls}>
              <input type="number" inputMode="decimal" min="1" max="660" step="0.1"
                placeholder={weightUnit === "kg" ? (lang === "id" ? "contoh: 65" : "e.g. 65") : (lang === "id" ? "contoh: 143" : "e.g. 143")}
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
                placeholder={heightUnit === "cm" ? (lang === "id" ? "contoh: 170" : "e.g. 170") : (lang === "id" ? "contoh: 67" : "e.g. 67")}
                value={height} onChange={(e) => setHeight(e.target.value)} required className={inputCls} />
              <select value={heightUnit} onChange={(e) => switchHeightUnit(e.target.value as "cm" | "in")} className={unitCls}>
                <option value="cm">cm</option>
                <option value="in">in</option>
              </select>
            </div>
          </div>
        </div>

        {/* Activity */}
        <div>
          <label htmlFor="activity" className="block text-sm font-medium text-emerald-800 mb-2">{tx.activity}</label>
          <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}
            className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-base text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all">
            {tx.activityLevels.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
          </select>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 active:scale-95 text-white font-bold py-4 rounded-2xl transition-all text-base shadow-md shadow-emerald-200">
          {tx.calculate}
        </button>
      </form>

      {result && (
        <div className="mt-6 space-y-3">
          <div className="rounded-2xl border-2 border-gray-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-0.5">{tx.bmrLabel}</p>
            <p className="text-3xl font-black text-gray-700">{result.bmr.toLocaleString()} <span className="text-base font-normal text-gray-400">kcal</span></p>
            <p className="text-xs text-gray-400 mt-0.5">{tx.bmrNote}</p>
          </div>
          <div className="rounded-3xl border-2 border-emerald-200 bg-emerald-50 p-5">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-0.5">{tx.maintenanceLabel}</p>
            <p className="text-6xl font-black text-emerald-700">{result.tdee.toLocaleString()}<span className="text-xl font-normal text-emerald-400 ml-1">kcal</span></p>
            <p className="text-xs text-emerald-500 mt-1">{tx.maintenanceNote}</p>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl border-2 border-blue-100 bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 mb-0.5">{tx.cutLabel}</p>
              <p className="text-2xl font-black text-blue-700">{result.cut.toLocaleString()}<span className="text-sm font-normal text-blue-400 ml-1">kcal</span></p>
              <p className="text-xs text-blue-400 mt-1">{tx.cutNote}</p>
            </div>
            <div className="rounded-2xl border-2 border-orange-100 bg-orange-50 p-4">
              <p className="text-xs font-semibold uppercase tracking-widest text-orange-500 mb-0.5">{tx.bulkLabel}</p>
              <p className="text-2xl font-black text-orange-600">{result.bulk.toLocaleString()}<span className="text-sm font-normal text-orange-400 ml-1">kcal</span></p>
              <p className="text-xs text-orange-400 mt-1">{tx.bulkNote}</p>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-emerald-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500 mb-3">{tx.macrosTitle}</p>
            <div className="grid grid-cols-3 gap-2 text-center">
              {[
                { label: tx.protein, value: result.macros.protein, color: "text-blue-600" },
                { label: tx.carbs, value: result.macros.carbs, color: "text-orange-500" },
                { label: tx.fat, value: result.macros.fat, color: "text-yellow-500" },
              ].map((m) => (
                <div key={m.label} className="bg-gray-50 rounded-xl p-3">
                  <p className={`text-xl font-black ${m.color}`}>{m.value}<span className="text-xs font-normal text-gray-400 ml-0.5">g</span></p>
                  <p className="text-xs text-gray-500 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
          <button onClick={() => setResult(null)} className="w-full py-3 rounded-2xl border-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50 text-sm font-medium transition-all">
            {tx.recalculate}
          </button>
        </div>
      )}
    </div>
  );
}
