import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Icon, type IconName } from "@/components/ui/Icon";
import { Section } from "@/components/ui/Section";

const accents: Record<string, string> = {
  "arovia-care": "bg-arovia-care",
  "arovia-medicine": "bg-arovia-medicine",
  "arovia-equipment": "bg-arovia-equipment",
  "arovia-digital": "bg-arovia-digital",
};

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

export function Pillars({ heading, items }: { heading: string; items: PillarItem[] }) {
  return (
    <Section id="pillars" labelledBy="pillars-heading">
      <Heading id="pillars-heading">{heading}</Heading>
      <ul className="mt-8 grid gap-4 md:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Card className="h-full">
              <span className={`block h-1 w-12 rounded-full ${accents[item.colorToken] ?? "bg-arovia-navy"}`} />
              <Icon name={item.icon} className="mt-4 h-6 w-6 text-arovia-navy" />
              <Heading level={3} className="mt-3">
                {item.headline ?? item.name}
              </Heading>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.summary}</p>
              {item.services && item.services.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {item.services.map((service) => (
                    <li key={service.href}>
                      <Link href={service.href} className="text-sm font-semibold text-arovia-navy underline-offset-4 hover:underline">
                        {service.label}
                      </Link>
                      {service.detail && <span className="text-sm text-slate-600"> — {service.detail}</span>}
                    </li>
                  ))}
                </ul>
              )}
              <Link href={item.href} className="mt-4 inline-flex min-h-11 items-center text-sm font-semibold text-arovia-navy underline-offset-4 hover:underline">
                {item.cta ?? item.name}
              </Link>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
