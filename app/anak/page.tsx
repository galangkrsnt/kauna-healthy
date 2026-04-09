import type { Metadata } from "next";
import AnakClient from "./components/AnakClient";

export const metadata: Metadata = {
  title: "Kalkulator BMI Anak & Berat Badan Ideal Anak | Kauna Healthy",
  description:
    "Hitung BMI anak dan berat badan ideal berdasarkan usia menggunakan standar CDC. Cek apakah pertumbuhan anak kamu sudah sesuai.",
  keywords: [
    "kalkulator BMI anak",
    "berat badan ideal anak",
    "BMI anak berdasarkan usia",
    "tabel berat badan anak",
    "pertumbuhan anak normal",
  ],
  openGraph: {
    title: "Kalkulator BMI Anak & Berat Badan Ideal | Kauna Healthy",
    description: "Cek BMI dan berat badan ideal anak berdasarkan usia. Standar CDC. Gratis.",
    type: "website",
    locale: "id_ID",
  },
  alternates: { canonical: "https://kauna-healthy.vercel.app/anak" },
};

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kalkulator BMI Anak & Berat Badan Ideal Anak",
  description: "Hitung BMI anak berdasarkan usia menggunakan standar CDC Growth Chart.",
  url: "https://kauna-healthy.vercel.app/anak",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  inLanguage: ["id", "en"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
};

export default function AnakPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <AnakClient />
    </>
  );
}
