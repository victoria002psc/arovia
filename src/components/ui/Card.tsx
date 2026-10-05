import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return <article className={cn("rounded-lg border border-slate-200/80 bg-white p-6 shadow-md", className)}>{children}</article>;
}
