import Link from "next/link";
import { Heading } from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-24">
      <Heading level={1}>Page not found</Heading>
      <p className="mt-4 text-slate-600">That address is not part of the Arovia Group site.</p>
      <Link href="/" className="mt-6 inline-flex min-h-11 items-center font-semibold text-arovia-navy underline-offset-4 hover:underline">
        Back to home
      </Link>
    </section>
  );
}
