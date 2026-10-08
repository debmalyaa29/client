import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://calcuttaagritech.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-10-09"),
      changeFrequency: "weekly",
      priority: 1.0,
    },
  ];
}
