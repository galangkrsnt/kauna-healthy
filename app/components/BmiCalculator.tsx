"use client";

import { useState } from "react";
import type { Lang } from "./HomeClient";
import { t } from "./HomeClient";

type Tx = (typeof t)["id"] | (typeof t)["en"];

type BmiCategory = {
  label: string;
  color: string;
  bg: string;
  tip: string;
};

function getBmiCategory(bmi: number, tx: Tx): BmiCategory {
  if (bmi < 18.5)
    return {
      label: tx.underweight,
      color: "text-blue-600",
      bg: "bg-blue-50 border-blue-200",
      tip: tx.tipUnderweight,
    };
  if (bmi < 25)
    return {
      label: tx.normal,
      color: "text-emerald-600",
      bg: "bg-emerald-50 border-emerald-200",
      tip: tx.tipNormal,
    };
  if (bmi < 30)
    return {
      label: tx.overweight,
      color: "text-amber-600",
      bg: "bg-amber-50 border-amber-200",
      tip: tx.tipOverweight,
    };
  return {
    label: tx.obese,
    color: "text-red-600",
    bg: "bg-red-50 border-red-200",
    tip: tx.tipObese,
  };
}

// Devine formula
function getIdealWeight(
  heightCm: number,
  gender: "male" | "female"
): { min: number; max: number } {
  const heightIn = (heightCm - 152.4) / 2.54;
  const base = gender === "male" ? 50 : 45.5;
  const ideal = base + 2.3 * heightIn;
  return { min: Math.round(ideal - 2), max: Math.round(ideal + 2) };
}

// BMI gauge bar
function BmiGauge({ bmi }: { bmi: number }) {
  // clamp to 15–40 display range
  const min = 15;
  const max = 40;
  const pct = Math.min(Math.max(((bmi - min) / (max - min)) * 100, 0), 100);

  return (
    <div className="mt-4">
      <div className="relative h-3 rounded-full overflow-hidden bg-gradient-to-r from-blue-300 via-emerald-400 via-60% to-red-400">
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-white border-2 border-gray-700 shadow-md transition-all duration-500"
          style={{ left: `calc(${pct}% - 8px)` }}
        />
      </div>
      <div className="flex justify-between text-xs text-gray-400 mt-1 px-0.5">
        <span>15</span>
        <span>18.5</span>
        <span>25</span>
        <span>30</span>
        <span>40</span>
      </div>
    </div>
  );
}

type Props = { lang: Lang; tx: Tx };

export default function BmiCalculator({ tx }: Props) {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [gender, setGender] = useState<"male" | "female">("male");
  const [result, setResult] = useState<{
    bmi: number;
    category: BmiCategory;
    idealWeight: { min: number; max: number };
  } | null>(null);

  function calculate(e: React.FormEvent) {
    e.preventDefault();
    const w = parseFloat(weight);
    const h = parseFloat(height);
    if (!w || !h || w <= 0 || h <= 0) return;

    const heightM = h / 100;
    const bmi = w / (heightM * heightM);
    const category = getBmiCategory(bmi, tx);
    const idealWeight = getIdealWeight(h, gender);

    setResult({ bmi: Math.round(bmi * 10) / 10, category, idealWeight });
  }

  function reset() {
    setWeight("");
    setHeight("");
    setResult(null);
  }

  // Re-derive category label if lang switches while result is showing
  const liveCategory = result ? getBmiCategory(result.bmi, tx) : null;

  return (
    <div className="w-full">
      <form onSubmit={calculate} className="space-y-5">
        {/* Gender toggle */}
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

        {/* Weight + Height — side by side on sm+ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="weight"
              className="block text-sm font-medium text-emerald-800 mb-2"
            >
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
          <div>
            <label
              htmlFor="height"
              className="block text-sm font-medium text-emerald-800 mb-2"
            >
              {tx.heightLabel}
            </label>
            <input
              id="height"
              type="number"
              inputMode="decimal"
              min="50"
              max="300"
              step="0.1"
              placeholder={tx.heightPlaceholder}
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              className="w-full rounded-2xl border-2 border-emerald-100 bg-emerald-50/50 px-4 py-3 text-lg text-emerald-900 placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-transparent transition-all"
            />
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-emerald-500 to-green-400 hover:from-emerald-600 hover:to-green-500 active:scale-95 text-white font-bold py-4 rounded-2xl transition-all text-base shadow-md shadow-emerald-200"
        >
          {tx.calculate}
        </button>
      </form>

      {result && liveCategory && (
        <div className="mt-6 space-y-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
          {/* BMI Result */}
          <div className={`rounded-3xl border-2 p-5 sm:p-6 ${liveCategory.bg}`}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
              {tx.yourBmi}
            </p>
            <p className={`text-6xl font-black ${liveCategory.color}`}>
              {result.bmi}
            </p>
            <p className={`text-lg font-bold mt-1 ${liveCategory.color}`}>
              {liveCategory.label}
            </p>
            <BmiGauge bmi={result.bmi} />
            <p className="text-sm text-gray-600 mt-3 leading-relaxed">
              {liveCategory.tip}
            </p>
          </div>

          {/* Ideal Weight */}
          <div className="rounded-3xl border-2 border-emerald-100 bg-white p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">
              {tx.idealWeightLabel}
            </p>
            <p className="text-4xl font-black text-emerald-700">
              {result.idealWeight.min}–{result.idealWeight.max}{" "}
              <span className="text-xl font-normal text-emerald-400">kg</span>
            </p>
            <p className="text-xs text-gray-400 mt-1">{tx.devineNote}</p>
          </div>

          <button
            onClick={reset}
            className="w-full py-3 rounded-2xl border-2 border-emerald-100 text-emerald-600 hover:bg-emerald-50 text-sm font-medium transition-all"
          >
            {tx.recalculate}
          </button>
        </div>
      )}
    </div>
  );
}
