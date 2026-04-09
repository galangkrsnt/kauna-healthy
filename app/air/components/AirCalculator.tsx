"use client";

import { useState } from "react";
import type { Lang } from "../../components/HomeClient";

type Tx = {
  gender: string;
  male: string;
  female: string;
  weightLabel: string;
  weightPlaceholder: string;
  activity: string;
  activityLevels: { value: string; label: string; extra: number }[];
  climate: string;
  climateLevels: { value: string; label: string; extra: number }[];
  calculate: string;
  recalculate: string;
  resultTitle: string;
  litersLabel: string;
  glassesLabel: string;
  glassesNote: string;
  tipsTitle: string;
  tips: string[];
};

export const airT: Record<Lang, Tx> = {
  id: {
    gender: "Jenis Kelamin",
    male: "Laki-laki",
    female: "Perempuan",
    weightLabel: "Berat Badan (kg)",
    weightPlaceholder: "contoh: 65",
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
    calculate: "Hitung Kebutuhan Air Saya",
    recalculate: "Hitung Ulang",
    resultTitle: "Kebutuhan Air Harianmu",
    litersLabel: "liter / hari",
    glassesLabel: "gelas / hari",
    glassesNote: "Berdasarkan gelas 250ml",
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
    gender: "Gender",
    male: "Male",
    female: "Female",
    weightLabel: "Weight (kg)",
    weightPlaceholder: "e.g. 65",
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
    calculate: "Calculate My Water Intake",
    recalculate: "Recalculate",
    resultTitle: "Your Daily Water Intake",
    litersLabel: "liters / day",
    glassesLabel: "glasses / day",
    glassesNote: "Based on 250ml glass",
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

type Result = {
  liters: number;
  glasses: number;
};

export default function AirCalculator({ lang }: { lang: Lang }) {
  const tx = airT[lang];

  const [gender, setGender] = useState<"male" | "female">("male");
  const [weight, setWeight] = useState("");
  const [activity, setActivity] = useState("moderate");
  const [climate, setClimate] = useState("hot");
  const [result, setResult] = useState<Result | null>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const w = parseFloat(weight);
    if (!w || w <= 0) return;

    // Base: 35ml/kg, female slightly less
    const base = w * (gender === "male" ? 35 : 31);
    const activityExtra =
      tx.activityLevels.find((a) => a.value === activity)?.extra ?? 0;
    const climateExtra =
      tx.climateLevels.find((c) => c.value === climate)?.extra ?? 0;

    const totalMl = base + activityExtra + climateExtra;
    const liters = Math.round((totalMl / 1000) * 10) / 10;
    const glasses = Math.ceil(totalMl / 250);

    setResult({ liters, glasses });
  }

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

        {/* Weight */}
        <div>
          <label htmlFor="weight" className="block text-sm font-medium text-emerald-800 mb-2">
            {tx.weightLabel}
          </label>
          <input
            id="weight"
            type="number"
            inputMode="decimal"
            min="1"
            max="300"
            step="0.1"
            placeholder={tx.weightPlaceholder}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
          />
        </div>

        {/* Activity + Climate side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="activity" className="block text-sm font-medium text-emerald-800 mb-2">
              {tx.activity}
            </label>
            <select
              id="activity"
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
            >
              {tx.activityLevels.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="climate" className="block text-sm font-medium text-emerald-800 mb-2">
              {tx.climate}
            </label>
            <select
              id="climate"
              value={climate}
              onChange={(e) => setClimate(e.target.value)}
              className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-sm text-emerald-900 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
            >
              {tx.climateLevels.map((l) => (
                <option key={l.value} value={l.value}>
                  {l.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 active:scale-95 text-white font-bold py-4 rounded-2xl transition-all text-base shadow-md shadow-emerald-200"
        >
          {tx.calculate}
        </button>
      </form>

      {result && (
        <div className="mt-6 space-y-4">
          {/* Main result */}
          <div className="rounded-3xl border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-3">
              {tx.resultTitle}
            </p>

            {/* Water drop visual */}
            <div className="text-6xl mb-2">💧</div>

            <p className="text-6xl font-black text-cyan-700">
              {result.liters}
              <span className="text-xl font-normal text-cyan-400 ml-1">
                {tx.litersLabel}
              </span>
            </p>

            <div className="mt-4 inline-flex items-center gap-2 bg-white/70 rounded-2xl px-5 py-2.5 border border-cyan-100">
              <span className="text-2xl font-black text-cyan-600">{result.glasses}</span>
              <div className="text-left">
                <p className="text-sm font-semibold text-cyan-700 leading-tight">
                  {tx.glassesLabel}
                </p>
                <p className="text-xs text-cyan-400">{tx.glassesNote}</p>
              </div>
            </div>
          </div>

          {/* Glass progress visual */}
          <div className="rounded-2xl border-2 border-cyan-100 bg-white p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-500 mb-3">
              {result.glasses} glasses
            </p>
            <div className="flex flex-wrap gap-2">
              {Array.from({ length: Math.min(result.glasses, 20) }).map((_, i) => (
                <span key={i} className="text-xl">🥛</span>
              ))}
              {result.glasses > 20 && (
                <span className="text-sm text-cyan-400 self-center">+{result.glasses - 20} more</span>
              )}
            </div>
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
