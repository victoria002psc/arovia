import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ inverted = false, className }: { inverted?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-h-11 items-baseline gap-2 font-heading text-[15px] font-semibold tracking-[0.22em]",
        inverted ? "text-white" : "text-[#0B172A]",
        className,
      )}
      aria-label="Arovia Group home"
    >
      AROVIA
      <span className={cn("text-[11px] font-medium tracking-[0.28em]", inverted ? "text-white/70" : "text-[#6B7280]")}>
        GROUP
      </span>
    </Link>
  );
}
