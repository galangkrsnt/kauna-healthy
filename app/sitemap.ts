import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://healthy.getkauna.com",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: "https://healthy.getkauna.com/kalori",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://healthy.getkauna.com/air",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://healthy.getkauna.com/lemak",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://healthy.getkauna.com/anak",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://healthy.getkauna.com/pinggang",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://healthy.getkauna.com/artikel",
      lastModified: new Date("2026-05-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/bmi-normal-orang-indonesia",
      lastModified: new Date("2026-05-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/kebutuhan-kalori-harian",
      lastModified: new Date("2026-05-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/kebutuhan-air-minum-harian",
      lastModified: new Date("2026-05-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/cara-mengukur-lemak-tubuh",
      lastModified: new Date("2026-05-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/berat-badan-ideal-anak",
      lastModified: new Date("2026-05-12"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/cara-menurunkan-berat-badan-tanpa-diet-ketat",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/perbedaan-bmi-dan-lemak-tubuh",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/bahaya-lemak-perut-visceral",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/makanan-tinggi-protein-untuk-diet",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/olahraga-terbaik-untuk-bakar-lemak",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/tanda-tanda-kurus-tidak-sehat",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/panduan-gizi-seimbang-untuk-anak",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/artikel/efek-kurang-tidur-terhadap-berat-badan",
      lastModified: new Date("2026-05-09"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://healthy.getkauna.com/tentang",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://healthy.getkauna.com/kebijakan-privasi",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://healthy.getkauna.com/kontak",
      lastModified: new Date("2026-04-20"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
