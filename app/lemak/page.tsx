import type { Metadata } from "next";
import LemakClient from "./components/LemakClient";

export const metadata: Metadata = {
  title: "Kalkulator Persentase Lemak Tubuh | Kauna Healthy",
  description:
    "Hitung persentase lemak tubuhmu secara instan berdasarkan BMI, usia, dan jenis kelamin. Ketahui apakah lemak tubuhmu sudah di level sehat.",
  keywords: [
    "kalkulator lemak tubuh",
    "persentase lemak tubuh",
    "body fat percentage",
    "lemak tubuh normal berapa persen",
    "cara hitung lemak tubuh",
  ],
  openGraph: {
    title: "Kalkulator Persentase Lemak Tubuh | Kauna Healthy",
    description: "Hitung persentase lemak tubuhmu secara instan. Gratis dan akurat.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "https://healthy.getkauna.com/lemak" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kalkulator Persentase Lemak Tubuh",
  description: "Hitung persentase lemak tubuh berdasarkan BMI, usia, dan jenis kelamin.",
  url: "https://healthy.getkauna.com/lemak",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  inLanguage: ["id", "en"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
};

export default function LemakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <LemakClient />
    </>
  );
}
