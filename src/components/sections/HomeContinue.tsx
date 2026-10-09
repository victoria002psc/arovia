import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Icon } from "@/components/ui/Icon";
import { Button } from "@/components/ui/Button";
import {
  homeAudiences,
  homeCare,
  homeDigital,
  homeEquipment,
  homeFinalCta,
  homePharmacy,
  homeWhy,
} from "@/data/home";

export function HomeContinue() {
  return (
    <>
      <section className="bg-white" aria-labelledby="care-story">
        <div className="mx-auto grid max-w-wide items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={homeCare.image.src} alt={homeCare.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-arovia-navy/70">
              <span className="h-2 w-2 rounded-full bg-arovia-teal" aria-hidden="true" />
              {homeCare.number}
            </p>
            <h2 id="care-story" className="mt-3 font-heading text-3xl font-bold tracking-tight text-arovia-navy sm:text-4xl">
              {homeCare.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-arovia-charcoal">{homeCare.text}</p>
            <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
              <ul className="flex flex-wrap gap-x-6 gap-y-3">
                {homeCare.services.map((service) => (
                  <li key={service.href}>
                    <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-arovia-navy">
                      <Icon name={service.icon} className="h-4 w-4 text-arovia-teal" strokeWidth={1.75} />
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <Button href={homeCare.href} variant="care" size="sm" className="w-fit shrink-0 rounded-full px-5">
                {homeCare.cta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FBF7F8]" aria-labelledby="pharmacy-story">
        <div className="mx-auto grid max-w-wide items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-10 lg:px-10 lg:py-16">
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#C56B7B] text-[11px] font-semibold">
                {homePharmacy.number}
              </span>
            </p>
            <h2 id="pharmacy-story" className="mt-3 font-heading text-3xl font-bold tracking-tight text-arovia-navy sm:text-4xl">
              {homePharmacy.heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-arovia-charcoal">{homePharmacy.text}</p>
            <div className="mt-8">
              <Button href={homePharmacy.href} variant="medicine" size="sm" className="w-fit rounded-full px-5">
                {homePharmacy.cta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={homePharmacy.image.src} alt={homePharmacy.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#FBF7F8] to-transparent" />
          </div>
        </div>
      </section>

      <section className="bg-arovia-navy text-white" aria-labelledby="equipment-story">
        <div className="mx-auto grid max-w-wide items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={homeEquipment.image.src} alt={homeEquipment.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="flex items-center gap-2 text-sm font-semibold text-white">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-sky-400/90 text-[11px] font-semibold text-arovia-navy">
                {homeEquipment.number}
              </span>
            </p>
            <h2 id="equipment-story" className="mt-3 max-w-lg font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {homeEquipment.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/80">{homeEquipment.text}</p>
            <ul className="mt-7 flex flex-wrap gap-6">
              {homeEquipment.services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="inline-flex items-center gap-2.5 text-sm font-semibold text-white">
                    <Icon name={service.icon} className="h-4 w-4" strokeWidth={1.75} />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={homeEquipment.href}
                className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-arovia-navy"
              >
                {homeEquipment.cta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
              <Link
                href={homeEquipment.inquiry.href}
                className="inline-flex h-10 w-fit items-center justify-center rounded-full border border-white/50 px-5 text-sm font-semibold text-white"
              >
                {homeEquipment.inquiry.label}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="digital-story">
        <div className="mx-auto grid max-w-wide items-center gap-10 px-5 py-14 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16">
          <div>
            <p className="flex items-center gap-2 text-sm font-medium text-arovia-navy/70">
              <span className="h-2 w-2 rounded-full bg-arovia-digital" aria-hidden="true" />
              {homeDigital.number}
            </p>
            <h2 id="digital-story" className="mt-3 font-heading text-3xl font-bold tracking-tight text-arovia-navy sm:text-4xl">
              {homeDigital.heading}
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-arovia-charcoal">{homeDigital.text}</p>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
              {homeDigital.services.map((service) => (
                <li key={service.href}>
                  <Link href={service.href} className="inline-flex items-center gap-2 text-sm font-semibold text-arovia-navy">
                    <Icon name={service.icon} className="h-4 w-4 text-arovia-digital" strokeWidth={1.75} />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button href={homeDigital.href} variant="digital" size="sm" className="w-fit rounded-full px-5">
                {homeDigital.cta}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image src={homeDigital.image.src} alt={homeDigital.image.alt} fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="bg-[#F5F7F8]" aria-labelledby="who-we-serve">
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-arovia-teal">{homeAudiences.eyebrow}</p>
          <h2 id="who-we-serve" className="mx-auto mt-3 max-w-3xl text-center font-heading text-3xl font-bold tracking-tight text-arovia-navy sm:text-4xl">
            {homeAudiences.heading}
          </h2>
          <ul className="mt-10 grid gap-5 lg:grid-cols-2">
            {homeAudiences.items.map((item) => (
              <li key={item.href} className="overflow-hidden rounded-2xl border border-arovia-navy/8 bg-white">
                <div className="grid sm:grid-cols-[11rem_minmax(0,1fr)]">
                  <div className="relative min-h-[148px] sm:min-h-[168px]">
                    <span className={`absolute inset-y-0 left-0 z-10 w-1.5 ${item.accent}`} aria-hidden="true" />
                    <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 1024px) 12rem, 50vw" className="object-cover" />
                  </div>
                  <div className="flex flex-col justify-center px-5 py-5 sm:px-6">
                    <h3 className="font-heading text-xl font-bold text-arovia-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-arovia-muted">{item.description}</p>
                    <Link href={item.href} className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-arovia-navy">
                      {item.cta}
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="why-arovia">
        <div className="mx-auto max-w-wide px-5 py-14 lg:px-10 lg:py-16">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-arovia-teal">{homeWhy.eyebrow}</p>
          <h2 id="why-arovia" className="mx-auto mt-3 max-w-3xl text-center font-heading text-3xl font-bold tracking-tight text-arovia-navy sm:text-4xl">
            {homeWhy.heading}
          </h2>
          <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {homeWhy.items.map((item) => (
              <li key={item.title}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#D9F1ED] text-arovia-teal">
                  <Icon name={item.icon} className="h-4 w-4" strokeWidth={1.8} />
                </span>
                <h3 className="mt-4 font-heading text-base font-bold text-arovia-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-arovia-muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="relative overflow-hidden" aria-labelledby="contact-cta">
        <div className="absolute inset-0">
          <Image src={homeFinalCta.image.src} alt="" fill priority={false} sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-[#04101F]/78" />
        </div>
        <div className="relative mx-auto flex max-w-wide flex-col gap-6 px-5 py-12 lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-14">
          <div className="max-w-2xl">
            <h2 id="contact-cta" className="font-heading text-3xl font-bold tracking-tight text-white sm:text-[2.15rem]">
              {homeFinalCta.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85">{homeFinalCta.text}</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href={homeFinalCta.primary.href}
              className="inline-flex h-10 w-fit items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-semibold text-arovia-navy"
            >
              {homeFinalCta.primary.label}
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </Link>
            <Link
              href={homeFinalCta.secondary.href}
              className="inline-flex h-10 w-fit items-center justify-center rounded-full border border-white/70 px-5 text-sm font-semibold text-white"
            >
              {homeFinalCta.secondary.label}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
