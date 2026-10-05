import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export interface AudienceItem {
  title: string;
  description: string;
  href?: string;
}

export function WhoWeServe({ heading, items }: { heading: string; items: AudienceItem[] }) {
  if (items.length === 0) return null;

  return (
    <Section labelledBy="who-we-serve-heading">
      <Heading id="who-we-serve-heading">{heading}</Heading>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
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
