import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { Heading } from "@/components/ui/Heading";

export interface HeroAction {
  label: string;
  href: string;
}

export interface HeroProps {
  eyebrow?: string;
  title: string;
  text: string;
  primary: HeroAction;
  secondary?: HeroAction;
  image?: { src: string; alt: string };
}

export function Hero({ eyebrow, title, text, primary, secondary, image }: HeroProps) {
  return (
    <section className="bg-arovia-mist">
      <div className="mx-auto grid w-full max-w-wide lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 lg:px-10 lg:py-20">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <Heading level={1} className={eyebrow ? "mt-4" : undefined}>
            {title}
          </Heading>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary && (
              <Button href={secondary.href} variant="outline">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
        {image && (
          <div className="relative min-h-[280px] sm:min-h-[380px]">
            <Image src={image.src} alt={image.alt} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
        )}
      </div>
    </section>
  );
}
