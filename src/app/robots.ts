import type { MetadataRoute } from "next";
import { company } from "@/lib/constants";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/design-system" },
    sitemap: `${company.siteUrl}/sitemap.xml`,
  };
}
