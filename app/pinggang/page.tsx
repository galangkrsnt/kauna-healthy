import type { Metadata } from "next";
import PinggangClient from "./components/PinggangClient";

export const metadata: Metadata = {
  title: "Kalkulator Lingkar Pinggang & Rasio Pinggang-Tinggi | Kauna Healthy",
  description:
    "Hitung lingkar pinggang ideal dan rasio pinggang-tinggi badan (WHtR) kamu. Ketahui risiko penyakit jantung dan diabetes dari ukuran perut. Gratis dan akurat.",
  keywords: [
    "kalkulator lingkar pinggang",
    "lingkar pinggang ideal",
    "rasio pinggang tinggi",
    "WHtR calculator",
    "lemak perut berbahaya",
    "lingkar pinggang normal",
  ],
  openGraph: {
    title: "Kalkulator Lingkar Pinggang & Rasio Pinggang-Tinggi | Kauna Healthy",
    description: "Hitung lingkar pinggang ideal dan risiko kesehatan dari lemak perut kamu.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "https://healthy.getkauna.com/pinggang" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kalkulator Lingkar Pinggang & WHtR",
  description: "Hitung lingkar pinggang ideal dan rasio pinggang-tinggi badan untuk menilai risiko kesehatan.",
  url: "https://healthy.getkauna.com/pinggang",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  inLanguage: ["id", "en"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
};

export default function PinggangPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }} />
      <PinggangClient />
    </>
  );
}
