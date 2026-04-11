import HomeClient from "./components/HomeClient";

const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Kalkulator BMI & Berat Badan Ideal",
  description:
    "Hitung BMI dan berat badan ideal kamu secara instan. Gratis dan akurat.",
  url: "https://healthy.getkauna.com",
  applicationCategory: "HealthApplication",
  operatingSystem: "All",
  inLanguage: ["id", "en"],
  offers: { "@type": "Offer", price: "0", priceCurrency: "IDR" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
      <HomeClient />
    </>
  );
}
