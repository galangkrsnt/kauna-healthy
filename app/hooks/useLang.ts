"use client";

import { useState, useEffect } from "react";
import type { Lang } from "../components/HomeClient";

export function useLang() {
  const [lang, setLang] = useState<Lang>("id");

  useEffect(() => {
    const stored = localStorage.getItem("kauna-lang");
    if (stored === "en" || stored === "id") setLang(stored);
  }, []);

  function toggleLang() {
    const next: Lang = lang === "id" ? "en" : "id";
    localStorage.setItem("kauna-lang", next);
    setLang(next);
  }

  return { lang, toggleLang };
}
