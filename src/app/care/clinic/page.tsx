import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { clinicPage } from "@/content/care";

export const metadata: Metadata = {
  title: clinicPage.seo.title,
  description: clinicPage.seo.description,
  keywords: clinicPage.seo.keywords,
  alternates: { canonical: clinicPage.path },
};

export default function Page() {
  return <ServicePageView page={clinicPage} />;
}
