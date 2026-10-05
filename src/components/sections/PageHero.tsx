import { Breadcrumbs, type Crumb } from "@/components/layouts/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";
import type { HeroAction } from "@/components/sections/Hero";

export interface PageHeroProps {
  breadcrumbs?: Crumb[];
  eyebrow?: string;
  title: string;
  summary?: string;
  primary?: HeroAction;
  secondary?: HeroAction;
}

export function PageHero({ breadcrumbs, eyebrow, title, summary, primary, secondary }: PageHeroProps) {
  return (
    <Section background="mist">
      {breadcrumbs && breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
      {eyebrow && <Eyebrow className="mt-6">{eyebrow}</Eyebrow>}
      <Heading level={1} className="mt-3">
        {title}
      </Heading>
      {summary && <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">{summary}</p>}
      {(primary || secondary) && (
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          {primary && <Button href={primary.href}>{primary.label}</Button>}
          {secondary && (
            <Button href={secondary.href} variant="outline">
              {secondary.label}
            </Button>
          )}
        </div>
      )}
    </Section>
  );
}
