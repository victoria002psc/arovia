import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export interface ServiceGridItem {
  title: string;
  description: string;
  href?: string;
}

export function Services({ heading, intro, items }: { heading?: string; intro?: string; items: ServiceGridItem[] }) {
  if (items.length === 0) return null;

  return (
    <Section labelledBy={heading ? "services-heading" : undefined}>
      {heading && <Heading id="services-heading">{heading}</Heading>}
      {intro && <p className="mt-3 max-w-3xl text-slate-600">{intro}</p>}
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.title}>
            <Card className="h-full">
              <Heading level={3}>
                {item.href ? (
                  <Link href={item.href} className="underline-offset-4 hover:underline">
                    {item.title}
                  </Link>
                ) : (
                  item.title
                )}
              </Heading>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </Section>
  );
}
