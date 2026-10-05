import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3 | 4;

interface HeadingProps {
  level?: HeadingLevel;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const styles: Record<HeadingLevel, string> = {
  1: "font-heading text-4xl font-semibold leading-tight text-arovia-navy sm:text-5xl",
  2: "font-heading text-3xl font-semibold leading-tight text-arovia-navy sm:text-4xl",
  3: "font-heading text-2xl font-semibold leading-tight text-arovia-navy",
  4: "font-heading text-xl font-semibold leading-tight text-arovia-navy",
};

export function Heading({ level = 2, children, className, id }: HeadingProps) {
  const Tag = `h${level}` as const;
  return (
    <Tag id={id} className={cn(styles[level], className)}>
      {children}
    </Tag>
  );
}
