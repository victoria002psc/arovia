import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { clinicPage } from "@/content/care";

export const metadata: Metadata = {
  title: clinicPage.seo.title,
  description: clinicPage.seo.description,
  keywords: clinicPage.seo.keywords,
  alternates: { canonical: clinicPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={clinicPage} />;
}
