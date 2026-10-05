import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { digitalPage } from "@/content/digital";

export const metadata: Metadata = {
  title: digitalPage.seo.title,
  description: digitalPage.seo.description,
  keywords: digitalPage.seo.keywords,
  alternates: { canonical: digitalPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={digitalPage} />;
}
