import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { medicinesPage } from "@/content/medicines";

export const metadata: Metadata = {
  title: medicinesPage.seo.title,
  description: medicinesPage.seo.description,
  keywords: medicinesPage.seo.keywords,
  alternates: { canonical: medicinesPage.path },
};

export default function Page() {
  return <ServicePageView page={medicinesPage} />;
}
