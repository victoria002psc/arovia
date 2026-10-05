import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Badge";
import { ImageFrame } from "@/components/ui/ImageFrame";

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
    <section className="bg-arovia-off">
      <div className="mx-auto grid w-full max-w-wide items-center gap-8 px-5 py-10 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-16">
        <div className="max-w-xl">
          {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
          <h1 className="type-display mt-4 text-arovia-navy">{title}</h1>
          <p className="type-lead mt-5 text-arovia-charcoal">{text}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primary.href}>{primary.label}</Button>
            {secondary && (
              <Button href={secondary.href} variant="outline">
                {secondary.label}
              </Button>
            )}
          </div>
        </div>
        {image && <ImageFrame src={image.src} alt={image.alt} ratio="3/2" priority />}
      </div>
    </section>
  );
}
