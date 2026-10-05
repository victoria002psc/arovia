import type { Metadata } from "next";
import { ServicePageView } from "@/components/templates/ServicePageView";
import { homecarePage } from "@/content/care";

export const metadata: Metadata = {
  title: homecarePage.seo.title,
  description: homecarePage.seo.description,
  keywords: homecarePage.seo.keywords,
  alternates: { canonical: homecarePage.path },
};

export default function Page() {
  return <ServicePageView page={homecarePage} />;
}
