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
  verification: { google: ["H16muMAwoIrAKJyB5g-9UPA6gmQmRYewTz7Jar3u_ok", "TNPF__dVjwDmOm_Qvb6urGWaiWwv531b5y0tcCaWfEA"] },
  alternates: { canonical: "https://healthy.getkauna.com" },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" className={geist.variable}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6350798258567080"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
