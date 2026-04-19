import type { Metadata } from "next";
import TentangClient from "./TentangClient";

export const metadata: Metadata = {
  title: "Tentang Kami | Kauna Healthy",
  description:
    "Kauna Healthy adalah platform kalkulator kesehatan gratis untuk pengguna Indonesia. Hitung BMI, kalori harian, lemak tubuh, dan lebih banyak lagi.",
  alternates: { canonical: "https://healthy.getkauna.com/tentang" },
  robots: { index: true, follow: true },
};

export default function TentangPage() {
  return <TentangClient />;
}
