import type { Metadata } from "next";
import AirClient from "./components/AirClient";

export const metadata: Metadata = {
  title: "Kalkulator Kebutuhan Air Minum Harian | Kauna Healthy",
  description:
    "Hitung berapa liter air yang harus kamu minum setiap hari. Disesuaikan dengan berat badan, aktivitas, dan cuaca. Gratis dan akurat.",
  keywords: [
    "kebutuhan air minum per hari",
    "kalkulator minum air",
    "berapa liter air per hari",
    "kebutuhan cairan harian",
    "cara hitung kebutuhan air",
  ],
  openGraph: {
    title: "Kalkulator Kebutuhan Air Minum Harian | Kauna Healthy",
    description:
      "Hitung kebutuhan air harianmu berdasarkan berat badan dan aktivitas. Gratis.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "https://kauna-healthy.vercel.app/air" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kalkulator Kebutuhan Air Minum Harian",
  description: "Hitung kebutuhan air minum harian berdasarkan berat badan, aktivitas, dan cuaca.",
  url: "https://kauna-healthy.vercel.app/air",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  inLanguage: ["id", "en"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
};

export default function AirPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <AirClient />
    </>
  );
}
