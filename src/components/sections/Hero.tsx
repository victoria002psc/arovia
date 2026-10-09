import Image from "next/image";
import Link from "next/link";

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

const serviceHotspots = [
  { label: "Care", href: "/care", left: "6.2%", width: "7.2%" },
  { label: "Pharmacy", href: "/pharmacy", left: "14.6%", width: "8.5%" },
  { label: "Equipment Trade", href: "/equipment-trade", left: "24.2%", width: "11.5%" },
  { label: "Digital Health", href: "/digital-health", left: "36.8%", width: "10.5%" },
] as const;

/**
 * Homepage hero — exact reproduction of the approved flattened artwork.
 * Visual text, logo, icons, sculpture, and background live in the image;
 * HTML provides accessible copy and functional click targets only.
 */
export function Hero({ eyebrow, title, text, primary, secondary, image }: HeroProps) {
  const src = image?.src ?? "/images/hero-home-approved.jpg";
  const alt =
    image?.alt ??
    "Arovia Group — Healthcare That Brings People, Services and Technology Together";

  return (
    <section className="relative overflow-hidden bg-[#F7F4F0]" aria-label="Arovia Group hero">
      <div className="relative w-full">
        <Image
          src={src}
          alt={alt}
          width={1024}
          height={425}
          priority
          sizes="100vw"
          className="h-auto w-full select-none"
          quality={100}
          unoptimized
        />

        {/* Primary CTA — Explore Arovia */}
        <Link
          href={primary.href}
          aria-label={primary.label}
          className="absolute z-10 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arovia-teal"
          style={{ left: "5.8%", top: "62.5%", width: "14.8%", height: "8.8%" }}
        />

        {/* Secondary CTA — Talk to Arovia */}
        {secondary && (
          <Link
            href={secondary.href}
            aria-label={secondary.label}
            className="absolute z-10 rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arovia-teal"
            style={{ left: "21.6%", top: "62.5%", width: "13.2%", height: "8.8%" }}
          />
        )}

        {/* Service indicators */}
        {serviceHotspots.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            aria-label={item.label}
            className="absolute z-10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-arovia-teal"
            style={{ left: item.left, top: "76%", width: item.width, height: "16%" }}
          />
        ))}
      </div>

      {/* Accessible text mirror of the approved artwork copy */}
      <div className="sr-only">
        {eyebrow && <p>{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{text}</p>
        <p>
          <a href={primary.href}>{primary.label}</a>
          {secondary ? (
            <>
              {" "}
              <a href={secondary.href}>{secondary.label}</a>
            </>
          ) : null}
        </p>
        <ul>
          {serviceHotspots.map((item) => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
