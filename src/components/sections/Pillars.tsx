import Link from "next/link";
import { ImageFrame } from "@/components/ui/ImageFrame";
import { TextLink } from "@/components/ui/TextLink";
import type { IconName } from "@/components/ui/Icon";

export interface PillarItem {
  name: string;
  href: string;
  summary: string;
  headline?: string;
  cta?: string;
  colorToken: string;
  icon: IconName;
  services?: { label: string; href: string; detail?: string }[];
}

const images: Record<string, { src: string; alt: string }> = {
  Care: { src: "/images/care.jpg", alt: "A clinician with a patient in a calm care setting" },
  Pharmacy: { src: "/images/pharmacy.jpg", alt: "A pharmacist handling medicine in a pharmacy" },
  "Equipment Trade": { src: "/images/equipment.jpg", alt: "Medical equipment in a hospital setting" },
  "Digital Health": { src: "/images/digital.jpg", alt: "A clinician using healthcare technology" },
};

const dots: Record<string, string> = {
  "arovia-care": "bg-arovia-care",
  "arovia-pharmacy": "bg-arovia-pharmacy",
  "arovia-medicine": "bg-arovia-pharmacy",
  "arovia-equipment": "bg-arovia-equipment",
  "arovia-digital": "bg-arovia-digital",
};

export function Pillars({ items }: { heading?: string; items: PillarItem[] }) {
  return (
    <section id="pillars" aria-labelledby="pillars-heading" className="bg-arovia-off">
      <h2 id="pillars-heading" className="sr-only">
        Four business pillars
      </h2>
      <ol>
        {items.map((item, index) => {
          const image = images[item.name];
          const flip = index % 2 === 1;
          return (
            <li key={item.href} className="border-t border-arovia-navy/10">
              <div className={`mx-auto grid max-w-wide items-center gap-10 px-5 py-16 lg:grid-cols-2 lg:gap-20 lg:px-10 lg:py-24 ${flip ? "" : ""}`}>
                <div className={flip ? "lg:order-2" : undefined}>
                  <p className="flex items-center gap-3 text-sm tracking-[0.16em] text-arovia-muted">
                    <span className={`h-1.5 w-1.5 rounded-full ${dots[item.colorToken] ?? "bg-arovia-navy"}`} aria-hidden="true" />
                    0{index + 1}
                  </p>
                  <h3 className="mt-4 font-heading text-4xl font-semibold text-arovia-navy">{item.name}</h3>
                  <p className="type-lead mt-4 text-arovia-charcoal">{item.headline}</p>
                  {item.services && (
                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2">
                      {item.services.map((service) => (
                        <li key={service.href}>
                          <Link href={service.href} className="text-sm font-medium text-arovia-navy underline-offset-4 hover:underline">
                            {service.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                  {item.cta && (
                    <div className="mt-8">
                      <TextLink href={item.href}>{item.cta}</TextLink>
                    </div>
                  )}
                </div>
                {image && (
                  <ImageFrame src={image.src} alt={image.alt} ratio="4/5" className={flip ? "lg:order-1" : undefined} />
                )}
              </div>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
