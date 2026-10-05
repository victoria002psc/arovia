import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export function TextLink({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const classes = cn("inline-flex items-center gap-2 font-medium text-arovia-navy underline-offset-4 hover:underline", className);
  if (/^(https?:|tel:|mailto:)/.test(href)) {
    return (
      <a href={href} className={classes}>
        {children}
        <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" strokeWidth={1.5} />
    </Link>
  );
}
