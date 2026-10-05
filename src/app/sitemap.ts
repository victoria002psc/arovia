import type { MetadataRoute } from "next";
import { company, routes } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${company.siteUrl}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-10-05"),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
