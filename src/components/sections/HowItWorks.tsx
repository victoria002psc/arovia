import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export interface StepItem {
  title: string;
  description: string;
}

export function HowItWorks({ heading, intro, steps }: { heading: string; intro?: string; steps: StepItem[] }) {
  if (steps.length === 0) return null;

  return (
    <Section background="mist" labelledBy="how-it-works-heading">
      <Heading id="how-it-works-heading">{heading}</Heading>
      {intro && <p className="mt-4 max-w-3xl text-slate-600">{intro}</p>}
      <ol className="mt-8 grid gap-4 md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step.title} className="rounded-lg border border-slate-200 bg-white p-6">
            <p className="text-sm font-semibold text-arovia-cyan">{String(index + 1).padStart(2, "0")}</p>
            <Heading level={3} className="mt-2">
              {step.title}
            </Heading>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
