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
