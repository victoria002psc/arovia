import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { medicinesPage } from "@/content/medicines";

export const metadata: Metadata = {
  title: medicinesPage.seo.title,
  description: medicinesPage.seo.description,
  keywords: medicinesPage.seo.keywords,
  alternates: { canonical: medicinesPage.path },
};

export default function Page() {
  return <ServicePageTemplate page={medicinesPage} />;
}
