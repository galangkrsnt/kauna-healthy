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
  ];
}
