"use client";

import { useState } from "react";
import type { Lang } from "../../components/HomeClient";

type Tx = {
  gender: string; male: string; female: string;
  weightLabel: string; weightPlaceholder: string;
  activity: string; activityLevels: { value: string; label: string; extra: number }[];
  climate: string; climateLevels: { value: string; label: string; extra: number }[];
  calculate: string; recalculate: string; resultTitle: string;
  litersLabel: string; glassesLabel: string; glassesNote: string; tipsTitle: string; tips: string[];
};

export const airT: Record<Lang, Tx> = {
  id: {
    gender: "Jenis Kelamin", male: "Laki-laki", female: "Perempuan",
    weightLabel: "Berat Badan (kg)", weightPlaceholder: "contoh: 65",
    activity: "Tingkat Aktivitas",
    activityLevels: [
      { value: "low", label: "Jarang bergerak (kerja meja)", extra: 0 },
      { value: "moderate", label: "Cukup aktif (olahraga 3x/minggu)", extra: 350 },
      { value: "high", label: "Sangat aktif (olahraga tiap hari)", extra: 700 },
    ],
    climate: "Kondisi Cuaca / Lingkungan",
    climateLevels: [
      { value: "normal", label: "Normal / ber-AC", extra: 0 },
      { value: "hot", label: "Panas / lembab (Indonesia tropis)", extra: 500 },
    ],
    calculate: "Hitung Kebutuhan Air Saya", recalculate: "Hitung Ulang",
    resultTitle: "Kebutuhan Air Harianmu", litersLabel: "liter / hari",
    glassesLabel: "gelas / hari", glassesNote: "Berdasarkan gelas 250ml",
    tipsTitle: "Tips Minum Air yang Cukup",
    tips: [
      "Mulai hari dengan segelas air putih sebelum kopi atau sarapan.",
      "Bawa botol minum ke mana-mana — kalau kelihatan, kamu pasti ingat minum.",
      "Atur pengingat setiap 2 jam di HP.",
      "Makan buah dan sayur dengan kandungan air tinggi seperti semangka, mentimun, dan bayam.",
      "Urine berwarna kuning pucat = terhidrasi dengan baik. Kuning gelap = kurang minum.",
    ],
  },
  en: {
    gender: "Gender", male: "Male", female: "Female",
    weightLabel: "Weight (kg)", weightPlaceholder: "e.g. 65",
    activity: "Activity Level",
    activityLevels: [
      { value: "low", label: "Sedentary (desk job)", extra: 0 },
      { value: "moderate", label: "Moderately active (3x/week exercise)", extra: 350 },
      { value: "high", label: "Very active (daily exercise)", extra: 700 },
    ],
    climate: "Weather / Environment",
    climateLevels: [
      { value: "normal", label: "Normal / air-conditioned", extra: 0 },
      { value: "hot", label: "Hot / humid (tropical)", extra: 500 },
    ],
    calculate: "Calculate My Water Intake", recalculate: "Recalculate",
    resultTitle: "Your Daily Water Intake", litersLabel: "liters / day",
    glassesLabel: "glasses / day", glassesNote: "Based on 250ml glass",
    tipsTitle: "Tips to Stay Hydrated",
    tips: [
      "Start your day with a glass of water before coffee or breakfast.",
      "Carry a water bottle everywhere — if you see it, you'll drink it.",
      "Set reminders on your phone every 2 hours.",
      "Eat water-rich fruits and vegetables like watermelon, cucumber, and spinach.",
      "Pale yellow urine = well hydrated. Dark yellow = drink more.",
    ],
  },
};

type Result = { liters: number; glasses: number };

const inputCls = "flex-1 min-w-0 bg-transparent px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none";
const unitCls = "px-3 py-3 text-sm font-semibold text-emerald-700 bg-emerald-100/70 border-l border-emerald-200 focus:outline-none cursor-pointer rounded-r-2xl";
const wrapCls = "flex rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-400/20 overflow-hidden transition-all";

export default function AirCalculator({ lang }: { lang: Lang }) {
  const tx = airT[lang];

  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [climate, setClimate] = useState("hot");
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

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const rawW = parseFloat(weight);
    if (!rawW || rawW <= 0) return;
    const weightKg = weightUnit === "lbs" ? rawW * 0.453592 : rawW;
    const base = weightKg * (gender === "male" ? 35 : 31);
    const activityExtra = tx.activityLevels.find((a) => a.value === activity)?.extra ?? 0;
    const climateExtra = tx.climateLevels.find((c) => c.value === climate)?.extra ?? 0;
    const totalMl = base + activityExtra + climateExtra;
    setResult({ liters: Math.round((totalMl / 1000) * 10) / 10, glasses: Math.ceil(totalMl / 250) });
  }

  function reset() { setWeight(""); setResult(null); }

  const maxGlasses = 12;
  const filledGlasses = result ? Math.min(result.glasses, maxGlasses) : 0;

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

        {/* Weight */}
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

        {/* Activity + Climate */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="activity" className="block text-sm font-medium text-emerald-800 mb-2">{tx.activity}</label>
            <select id="activity" value={activity} onChange={(e) => setActivity(e.target.value)}
              className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all">
              {tx.activityLevels.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select>
          </div>
          <div>
            <label htmlFor="climate" className="block text-sm font-medium text-emerald-800 mb-2">{tx.climate}</label>
            <select id="climate" value={climate} onChange={(e) => setClimate(e.target.value)}
              className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all">
              {tx.climateLevels.map((l) => <option key={l.value} value={l.value}>{l.label}</option>)}
            </select>
          </div>
        </div>

        <button type="submit" className="w-full bg-gradient-to-r from-cyan-500 to-blue-400 hover:from-cyan-600 hover:to-blue-500 active:scale-95 text-white font-bold py-4 rounded-2xl transition-all text-base shadow-md shadow-cyan-200">
          {tx.calculate}
        </button>
      </form>

      {result && (
        <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          <div className="rounded-3xl border-2 border-cyan-200 bg-cyan-50 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-2">{tx.resultTitle}</p>
            <p className="text-6xl font-black text-cyan-700">{result.liters}<span className="text-xl font-normal text-cyan-400 ml-2">{tx.litersLabel}</span></p>
            <p className="text-lg font-semibold text-cyan-600 mt-2">{result.glasses} {tx.glassesLabel}</p>
            <p className="text-xs text-cyan-400 mt-0.5">{tx.glassesNote}</p>
          </div>
          <div className="rounded-2xl border-2 border-cyan-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3">{tx.tipsTitle}</p>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: maxGlasses }).map((_, i) => (
                <div key={i} className={`w-8 h-10 rounded-b-lg rounded-t-sm border-2 flex items-end transition-all ${i < filledGlasses ? "border-cyan-400 bg-cyan-100" : "border-gray-200 bg-gray-50"}`}>
                  {i < filledGlasses && <div className="w-full h-3/4 bg-cyan-300 rounded-b-md opacity-60" />}
                </div>
              ))}
              {result.glasses > maxGlasses && <span className="text-sm text-cyan-500 font-bold self-center">+{result.glasses - maxGlasses}</span>}
            </div>
          </div>
          <button onClick={reset} className="w-full py-3 rounded-2xl border-2 border-cyan-100 text-cyan-600 hover:bg-cyan-50 text-sm font-medium transition-all">
            {tx.recalculate}
          </button>
        </div>
      )}
    </div>
  );
}
