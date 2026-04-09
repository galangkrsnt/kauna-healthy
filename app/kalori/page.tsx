import type { Metadata } from "next";
import KaloriClient from "./components/KaloriClient";

export const metadata: Metadata = {
  title: "Kalkulator Kalori Harian & TDEE | Kauna Healthy",
  description:
    "Hitung kebutuhan kalori harian kamu (TDEE) secara akurat berdasarkan usia, berat, tinggi, dan aktivitas. Gratis, cepat, dan mudah.",
  keywords: [
    "kalkulator kalori harian",
    "TDEE calculator",
    "kebutuhan kalori per hari",
    "kalori untuk turun berat badan",
    "cara hitung kalori",
  ],
  openGraph: {
    title: "Kalkulator Kalori Harian & TDEE | Kauna Healthy",
    description:
      "Hitung kebutuhan kalori harian kamu secara akurat. Gratis dan mudah digunakan.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "https://kauna-healthy.vercel.app/kalori" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kalkulator Kalori Harian & TDEE",
  description: "Hitung kebutuhan kalori harian kamu berdasarkan usia, berat, tinggi, dan aktivitas.",
  url: "https://kauna-healthy.vercel.app/kalori",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  inLanguage: ["id", "en"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
};

export default function KaloriPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <KaloriClient />
    </>
  );
}
