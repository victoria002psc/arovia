import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { inverted?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center", className)} aria-label="Arovia Group home">
      <Image src="/logo-arovia.png" alt="" width={838} height={518} priority className="h-16 w-auto" />
    </Link>
  );
}
