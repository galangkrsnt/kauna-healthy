import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kalkulator BMI & Berat Badan Ideal | Kauna Healthy",
  description:
    "Hitung BMI (Body Mass Index) dan berat badan ideal kamu secara instan. Gratis, akurat, dan mudah digunakan. Cek BMI normal berapa dan tips kesehatan.",
  keywords: [
    "kalkulator BMI",
    "berat badan ideal",
    "kalkulator berat badan ideal",
    "cara hitung BMI",
    "BMI normal berapa",
  ],
  openGraph: {
    title: "Kalkulator BMI & Berat Badan Ideal | Kauna Healthy",
    description:
      "Hitung BMI dan berat badan ideal kamu secara instan. Gratis dan akurat.",
    type: "website",
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://kauna-healthy.vercel.app" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={geist.variable}>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
