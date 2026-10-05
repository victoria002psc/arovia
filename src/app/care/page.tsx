import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { carePage } from "@/content/care";

export const metadata: Metadata = {
  title: carePage.seo.title,
  description: carePage.seo.description,
  keywords: carePage.seo.keywords,
  alternates: { canonical: carePage.path },
};

export default function Page() {
  return <ServicePageTemplate page={carePage} />;
}
