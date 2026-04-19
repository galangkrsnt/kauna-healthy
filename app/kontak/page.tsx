import type { Metadata } from "next";
import KontakClient from "./KontakClient";

export const metadata: Metadata = {
  title: "Kontak | Kauna Healthy",
  description:
    "Hubungi tim Kauna Healthy untuk pertanyaan, saran, atau laporan masalah. Kami siap membantu.",
  alternates: { canonical: "https://healthy.getkauna.com/kontak" },
  robots: { index: true, follow: true },
};

export default function KontakPage() {
  return <KontakClient />;
}
