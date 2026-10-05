import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { websitesPage } from "@/content/digital";

export const metadata: Metadata = {
  title: websitesPage.seo.title,
  description: websitesPage.seo.description,
  keywords: websitesPage.seo.keywords,
  alternates: { canonical: websitesPage.path },
};

export default function Page() {
  return <ServicePageView page={websitesPage} />;
}
