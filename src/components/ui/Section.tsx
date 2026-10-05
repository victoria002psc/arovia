import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/Container";

type SectionBackground = "white" | "mist" | "subtle" | "navy";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: SectionBackground;
  id?: string;
  labelledBy?: string;
}

const backgrounds: Record<SectionBackground, string> = {
  white: "bg-white text-arovia-ink",
  mist: "bg-arovia-mist text-arovia-ink",
  subtle: "bg-gradient-subtle text-arovia-ink",
  navy: "bg-arovia-navy text-white",
};

export function Section({ children, className, background = "white", id, labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={cn("py-16 sm:py-20", backgrounds[background], className)}>
      <Container>{children}</Container>
    </section>
  );
}
