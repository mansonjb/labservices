import type { MetadataRoute } from "next";
import { BUSINESS } from "@/lib/data";
import { allCombos } from "@/lib/programmatic";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const combos = allCombos().map((x) => ({
    url: `${BUSINESS.url}/${x.service}/${x.ville}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));
  return [
    { url: BUSINESS.url, lastModified: now, changeFrequency: "monthly", priority: 1 },
    { url: `${BUSINESS.url}/villes`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BUSINESS.url}/prix-stand-salon`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    ...combos,
  ];
}
