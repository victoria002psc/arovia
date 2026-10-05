import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { platformsPage } from "@/content/digital";

export const metadata: Metadata = {
  title: platformsPage.seo.title,
  description: platformsPage.seo.description,
  keywords: platformsPage.seo.keywords,
  alternates: { canonical: platformsPage.path },
};

export default function Page() {
  return <ServicePageView page={platformsPage} />;
}
