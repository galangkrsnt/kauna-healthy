import Link from "next/link";

const navLinks = [
  { href: "/", label: "Kalkulator BMI" },
  { href: "/anak", label: "BMI Anak" },
  { href: "/lemak", label: "Lemak Tubuh" },
  { href: "/pinggang", label: "Lingkar Pinggang" },
  { href: "/kalori", label: "Kalori Harian" },
  { href: "/air", label: "Air Minum" },
];

const artikelLinks = [
  { href: "/artikel/bmi-normal-orang-indonesia", label: "BMI Normal Indonesia" },
  { href: "/artikel/kebutuhan-kalori-harian", label: "Kebutuhan Kalori Harian" },
  { href: "/artikel/kebutuhan-air-minum-harian", label: "Kebutuhan Air Minum" },
  { href: "/artikel/cara-mengukur-lemak-tubuh", label: "Mengukur Lemak Tubuh" },
  { href: "/artikel/berat-badan-ideal-anak", label: "Berat Badan Ideal Anak" },
];

export default function ArticleLayout({
  children,
  activeHref,
}: {
  children: React.ReactNode;
  activeHref: string;
}) {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-56 shrink-0 bg-white border-r border-emerald-100 sticky top-0 h-screen overflow-y-auto py-6 px-4">
        <Link href="/" className="flex items-center gap-2 mb-8 px-2">
          <span className="text-2xl">🌿</span>
          <span className="font-bold text-emerald-800 text-base">Kauna Healthy</span>
        </Link>

        <nav className="space-y-6 flex-1">
          <div>
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest px-2 mb-2">
              Kalkulator
            </p>
            <ul className="space-y-0.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block px-2 py-1.5 rounded-lg text-sm text-emerald-800/70 hover:bg-emerald-50 hover:text-emerald-900 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest px-2 mb-2">
              Artikel
            </p>
            <ul className="space-y-0.5">
              {artikelLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-2 py-1.5 rounded-lg text-sm transition-colors ${
                      activeHref === link.href
                        ? "bg-emerald-100 text-emerald-900 font-semibold"
                        : "text-emerald-800/70 hover:bg-emerald-50 hover:text-emerald-900"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="pt-4 border-t border-emerald-50 space-y-1">
          <Link href="/tentang" className="block text-xs text-emerald-400 hover:text-emerald-600 px-2 py-1 transition-colors">Tentang</Link>
          <Link href="/kebijakan-privasi" className="block text-xs text-emerald-400 hover:text-emerald-600 px-2 py-1 transition-colors">Privasi</Link>
          <Link href="/kontak" className="block text-xs text-emerald-400 hover:text-emerald-600 px-2 py-1 transition-colors">Kontak</Link>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white border-b border-emerald-100 px-4 py-3 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-1.5">
          <span className="text-lg">🌿</span>
          <span className="font-bold text-emerald-800 text-sm">Kauna Healthy</span>
        </Link>
        <span className="text-emerald-200">·</span>
        <span className="text-sm text-emerald-600 font-medium">Artikel</span>
      </div>

      {/* Content */}
      <main className="flex-1 min-w-0 px-4 pt-16 pb-20 md:pt-10 md:px-10 max-w-2xl">
        {children}
        <footer className="mt-14 text-center text-xs text-emerald-500/60">
          <p>© 2026 Kauna Healthy · Informasi ini bukan pengganti saran medis profesional.</p>
        </footer>
      </main>
    </div>
  );
}
