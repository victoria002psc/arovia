import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export interface CtaLink {
  label: string;
  href: string;
}

interface CTASectionProps {
  heading?: string;
  text?: string;
  title?: string;
  copy?: string;
  primary: CtaLink;
  secondary?: CtaLink;
  eyebrow?: string;
}

export function CTASection({ heading, text, title, copy, primary, secondary, eyebrow }: CTASectionProps) {
  const headingText = heading ?? title ?? "";
  const body = text ?? copy ?? "";

  return (
    <Section background="navy">
      {eyebrow && <Eyebrow className="text-cyan-200">{eyebrow}</Eyebrow>}
      <Heading className="text-white">{headingText}</Heading>
      {body && <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-200">{body}</p>}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Button href={primary.href}>{primary.label}</Button>
        {secondary && (
          <Button href={secondary.href} variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-arovia-navy">
            {secondary.label}
          </Button>
        )}
      </div>
    </Section>
  );
}
