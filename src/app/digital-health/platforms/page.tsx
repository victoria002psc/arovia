import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { platformsPage } from "@/content/digital";

export const metadata: Metadata = {
  title: platformsPage.seo.title,
  description: platformsPage.seo.description,
  keywords: platformsPage.seo.keywords,
  alternates: { canonical: platformsPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={platformsPage} />;
}
