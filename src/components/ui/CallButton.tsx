import { phoneDisplay, phoneTel } from "@/lib/site-info";

export function CallButton() {
  return (
    <a
      href={phoneTel}
      className="fixed bottom-4 left-4 z-30 inline-flex min-h-11 items-center rounded-full bg-arovia-navy px-4 text-sm font-semibold text-white shadow-md md:hidden"
    >
      Call {phoneDisplay}
    </a>
  );
}
