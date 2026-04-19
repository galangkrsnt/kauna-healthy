"use client";

import Sidebar from "../components/Sidebar";
import { useLang } from "../hooks/useLang";

const t = {
  id: {
    title: "Kebijakan Privasi",
    updated: "Terakhir diperbarui: 20 April 2026",
    intro:
      "Kauna Healthy berkomitmen untuk melindungi privasi pengguna. Kebijakan ini menjelaskan bagaimana kami menangani informasi saat Anda menggunakan layanan kami di healthy.getkauna.com.",
    dataTitle: "Data yang Kami Kumpulkan",
    dataBody:
      "Kauna Healthy adalah aplikasi kalkulator yang berjalan sepenuhnya di browser Anda. Kami tidak menyimpan data kesehatan pribadi Anda (berat badan, tinggi badan, usia, dll.) di server kami. Semua kalkulasi dilakukan secara lokal di perangkat Anda.",
    analyticsTitle: "Analitik & Performa",
    analyticsBody:
      "Kami menggunakan Vercel Analytics dan Vercel Speed Insights untuk memantau performa situs secara agregat dan anonim. Data ini tidak dapat digunakan untuk mengidentifikasi individu.",
    adsenseTitle: "Google AdSense & Cookie",
    adsenseBody:
      "Kami menggunakan Google AdSense untuk menampilkan iklan. Google AdSense dapat menggunakan cookie untuk menampilkan iklan yang relevan berdasarkan kunjungan Anda ke situs ini dan situs lainnya. Anda dapat menonaktifkan penggunaan cookie untuk iklan yang dipersonalisasi melalui pengaturan iklan Google.",
    thirdPartyTitle: "Pihak Ketiga",
    thirdPartyBody:
      "Situs ini dapat berisi tautan ke situs pihak ketiga. Kami tidak bertanggung jawab atas kebijakan privasi situs-situs tersebut.",
    rightsTitle: "Hak Pengguna",
    rightsBody:
      "Karena kami tidak menyimpan data pribadi Anda, tidak ada data yang perlu diminta untuk dihapus. Jika Anda memiliki pertanyaan seputar privasi, silakan hubungi kami.",
    contactTitle: "Hubungi Kami",
    contactBody: "Pertanyaan mengenai kebijakan privasi ini dapat dikirim ke:",
    footer: "© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.",
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: April 20, 2026",
    intro:
      "Kauna Healthy is committed to protecting user privacy. This policy explains how we handle information when you use our service at healthy.getkauna.com.",
    dataTitle: "Data We Collect",
    dataBody:
      "Kauna Healthy is a calculator app that runs entirely in your browser. We do not store your personal health data (weight, height, age, etc.) on our servers. All calculations are performed locally on your device.",
    analyticsTitle: "Analytics & Performance",
    analyticsBody:
      "We use Vercel Analytics and Vercel Speed Insights to monitor site performance in an aggregated, anonymous manner. This data cannot be used to identify individuals.",
    adsenseTitle: "Google AdSense & Cookies",
    adsenseBody:
      "We use Google AdSense to display advertisements. Google AdSense may use cookies to show relevant ads based on your visits to this and other websites. You can opt out of personalized ads via Google's ad settings.",
    thirdPartyTitle: "Third Parties",
    thirdPartyBody:
      "This site may contain links to third-party websites. We are not responsible for the privacy practices of those sites.",
    rightsTitle: "User Rights",
    rightsBody:
      "Since we do not store your personal data, there is no data to request deletion of. If you have privacy-related questions, please contact us.",
    contactTitle: "Contact Us",
    contactBody: "Questions about this privacy policy can be sent to:",
    footer: "© 2026 Kauna Healthy · This information is not a substitute for professional medical advice.",
  },
} as const;

export default function KebijakanClient() {
  const { lang, toggleLang } = useLang();
  const tx = t[lang];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar lang={lang} onToggleLang={toggleLang} />
      <main className="flex-1 min-w-0 px-4 pt-16 pb-20 md:pt-8 md:px-10 max-w-2xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-emerald-900 mb-2">{tx.title}</h1>
          <p className="text-emerald-500/70 text-sm">{tx.updated}</p>
        </header>

        <div className="space-y-8 text-emerald-950/80">
          <p className="leading-relaxed text-sm sm:text-base">{tx.intro}</p>

          {[
            { title: tx.dataTitle, body: tx.dataBody },
            { title: tx.analyticsTitle, body: tx.analyticsBody },
            { title: tx.adsenseTitle, body: tx.adsenseBody },
            { title: tx.thirdPartyTitle, body: tx.thirdPartyBody },
            { title: tx.rightsTitle, body: tx.rightsBody },
          ].map((section) => (
            <section key={section.title}>
              <h2 className="text-xl font-bold text-emerald-900 mb-3">{section.title}</h2>
              <p className="leading-relaxed text-sm sm:text-base">{section.body}</p>
            </section>
          ))}

          <section>
            <h2 className="text-xl font-bold text-emerald-900 mb-2">{tx.contactTitle}</h2>
            <p className="text-sm sm:text-base mb-2">{tx.contactBody}</p>
            <a
              href="mailto:hello@getkauna.com"
              className="text-emerald-600 font-medium hover:underline"
            >
              hello@getkauna.com
            </a>
          </section>
        </div>

        <footer className="mt-14 text-center text-xs text-emerald-500/60">
          <p>{tx.footer}</p>
        </footer>
      </main>
    </div>
  );
}
