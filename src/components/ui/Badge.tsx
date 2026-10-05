import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span className={cn("inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-arovia-ink", className)}>
      {children}
    </span>
  );
}

export function Eyebrow({ children, className }: BadgeProps) {
  return (
    <p className={cn("text-xs font-semibold uppercase tracking-[0.18em] text-arovia-cyan", className)}>{children}</p>
  );
}
