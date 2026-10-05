import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionBackground = "white" | "mist" | "subtle" | "navy" | "off" | "soft";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  id?: string;
  labelledBy?: string;
}

const backgrounds: Record<SectionBackground, string> = {
  white: "bg-white text-arovia-charcoal",
  mist: "bg-arovia-off text-arovia-charcoal",
  off: "bg-arovia-off text-arovia-charcoal",
  soft: "bg-arovia-soft text-arovia-charcoal",
  subtle: "bg-arovia-soft text-arovia-charcoal",
  navy: "bg-arovia-navy text-white",
};

export function Section({ children, className, background = "white", id, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-16 sm:py-20", backgrounds[background], className)}>
      <Container>{children}</Container>
    </section>
  );
}
