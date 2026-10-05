import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <article className={cn("rounded-md border border-arovia-navy/10 bg-white p-6 shadow-xs", className)}>{children}</article>;
}
