import { isPlaceholder } from "@/lib/site-info";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export interface TrustItem {
  label: string;
  value: string;
}

export function TrustSection({ heading = "Trust and safety", items }: { heading?: string; items: TrustItem[] }) {
  // Hide unpublished bracket placeholders — never show [CLINIC REGISTRATION]-style tokens publicly.
  const visible = items.filter((item) => item.value.trim().length > 0 && !isPlaceholder(item.value));
  if (visible.length === 0) return null;

  return (
    <Section background="subtle" labelledBy="trust-heading">
      <Heading id="trust-heading">{heading}</Heading>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {visible.map((item) => (
          <li key={item.label} className="rounded-lg border border-slate-200 bg-white p-5">
            <p className="text-sm font-semibold text-arovia-navy">{item.label}</p>
            <p className={cn("mt-2 text-sm leading-relaxed text-slate-600")}>{item.value}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
