import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex min-h-11 items-center gap-2", className)} aria-label="Arovia Group home">
      <svg width="36" height="36" viewBox="0 0 36 36" aria-hidden="true">
        <rect width="36" height="36" rx="10" fill={inverted ? "white" : "#0F172A"} />
        <circle cx="12" cy="14" r="4" fill="#10B981" />
        <circle cx="24" cy="14" r="4" fill="#EF4444" />
        <circle cx="12" cy="24" r="4" fill="#3B82F6" />
        <circle cx="24" cy="24" r="4" fill="#8B5CF6" />
      </svg>
      <span className={cn("text-base font-semibold tracking-tight", inverted ? "text-white" : "text-arovia-ink")}>
        Arovia Group
      </span>
    </Link>
  );
}
