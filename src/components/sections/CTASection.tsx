import { Button } from "@/components/ui/Button";

interface CTASectionProps {
  eyebrow?: string;
  title: string;
  copy: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
}

export function CTASection({ eyebrow, title, copy, primary, secondary }: CTASectionProps) {
  return (
    <section className="px-4 py-16 md:px-6">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-slate-900 px-6 py-12 text-white md:px-12">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">{eyebrow}</p>}
        <h2 className="mt-3 max-w-2xl text-3xl font-semibold sm:text-4xl">{title}</h2>
        <p className="mt-4 max-w-2xl text-lg text-slate-300">{copy}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={primary.href}>{primary.label}</Button>
          {secondary && (
            <Button href={secondary.href} variant="outline" className="border-white/30 bg-transparent text-white hover:bg-white hover:text-slate-900">
              {secondary.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
