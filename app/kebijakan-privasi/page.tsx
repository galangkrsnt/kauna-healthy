import type { Metadata } from "next";
import KebijakanClient from "./KebijakanClient";

export const metadata: Metadata = {
  title: "Kebijakan Privasi | Kauna Healthy",
  description:
    "Kebijakan privasi Kauna Healthy. Kami tidak menyimpan data kesehatan pribadi Anda. Semua kalkulasi berjalan langsung di browser Anda.",
  alternates: { canonical: "https://healthy.getkauna.com/kebijakan-privasi" },
  robots: { index: true, follow: true },
};

export default function KebijakanPage() {
  return <KebijakanClient />;
}
