import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { carePage } from "@/content/care";

export const metadata: Metadata = {
  title: carePage.seo.title,
  description: carePage.seo.description,
  keywords: carePage.seo.keywords,
  alternates: { canonical: carePage.path },
};

export default function Page() {
  return <ServicePageView page={carePage} />;
}
