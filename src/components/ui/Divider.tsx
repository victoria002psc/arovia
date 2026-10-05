import { cn } from "@/lib/utils";

export function Divider({ className }: { className?: string }) {
  return <hr className={cn("border-0 border-t border-arovia-navy/10", className)} />;
}
