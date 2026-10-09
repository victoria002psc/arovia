import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon, type IconName } from "@/components/ui/Icon";

export interface EcosystemCard {
  number: string;
  name: string;
  description: string;
  href: string;
  cta: string;
  icon: IconName;
  tint: string;
  accent: string;
}

export function Ecosystem({
  eyebrow,
  heading,
  text,
  cards,
}: {
  eyebrow?: string;
  heading: string;
  text: string;
  cards: EcosystemCard[];
}) {
  return (
    <section id="ecosystem" aria-labelledby="ecosystem-heading" className="bg-white">
      <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-16">
        {eyebrow && (
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-arovia-teal">{eyebrow}</p>
        )}
        <h2 id="ecosystem-heading" className="mx-auto mt-3 max-w-3xl text-center font-heading text-3xl font-bold tracking-tight text-arovia-navy sm:text-4xl">
          {heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-arovia-muted">{text}</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {cards.map((card) => (
            <li key={card.href} className={`rounded-2xl ${card.tint} p-5 sm:p-6`}>
              <div className="flex items-start justify-between gap-3">
                <Icon name={card.icon} className={`h-7 w-7 ${card.accent}`} strokeWidth={1.6} />
                <span className="text-sm font-medium text-arovia-navy/25">{card.number}</span>
              </div>
              <h3 className="mt-5 font-heading text-xl font-bold text-arovia-navy">{card.name}</h3>
              <p className="mt-2 text-sm leading-relaxed text-arovia-charcoal">{card.description}</p>
              <Link href={card.href} className={`mt-5 inline-flex items-center gap-1.5 text-sm font-semibold ${card.accent}`}>
                {card.cta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
