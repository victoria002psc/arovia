import { isPlaceholder } from "@/lib/site-info";
import { cn } from "@/lib/utils";
import { Heading } from "@/components/ui/Heading";
import { Section } from "@/components/ui/Section";

export interface TrustItem {
  label: string;
  value: string;
}

export function TrustSection({ heading = "Trust and safety", items }: { heading?: string; items: TrustItem[] }) {
  const visible = items.filter((item) => item.value.trim().length > 0);
  if (visible.length === 0) return null;

  return (
    <Section background="subtle" labelledBy="trust-heading">
      <Heading id="trust-heading">{heading}</Heading>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {visible.map((item) => {
          const pending = isPlaceholder(item.value);
          return (
            <li key={item.label} className="rounded-lg border border-slate-200 bg-white p-5">
              <p className="text-sm font-semibold text-arovia-navy">{item.label}</p>
              <p className={cn("mt-2 text-sm leading-relaxed", pending ? "bg-amber-100 px-2 py-1 text-amber-900" : "text-slate-600")}>{item.value}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
