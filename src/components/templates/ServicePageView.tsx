import Link from "next/link";
import type { ContentPage } from "@/types";
import { Button } from "@/components/ui/Button";
import { FAQAccordion } from "@/components/sections/FAQAccordion";
import { CTASection } from "@/components/sections/CTASection";
import { pillarClasses } from "@/lib/utils";

export function ServicePageView({ page }: { page: ContentPage }) {
  const tone = pillarClasses(page.pillar);

  return (
    <>
      <article>
        <header className={`bg-gradient-to-br ${tone.gradient} text-white`}>
          <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
            <nav aria-label="Breadcrumb" className="text-sm text-white/80">
              <ol className="flex flex-wrap gap-2">
                {page.breadcrumbs.map((crumb, index) => (
                  <li key={crumb.href} className="flex items-center gap-2">
                    {index > 0 && <span aria-hidden="true">/</span>}
                    {index === page.breadcrumbs.length - 1 ? (
                      <span aria-current="page">{crumb.label}</span>
                    ) : (
                      <Link href={crumb.href} className="underline-offset-4 hover:underline">
                        {crumb.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.16em] text-white/80">{page.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight sm:text-5xl">{page.title}</h1>
            <p className="mt-4 max-w-3xl text-lg text-white/90">{page.subheading}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={page.primaryCta.href}>{page.primaryCta.label}</Button>
              {page.secondaryCta && (
                <Button href={page.secondaryCta.href} variant="outline" className="border-white/40 bg-transparent text-white hover:bg-white hover:text-slate-900">
                  {page.secondaryCta.label}
                </Button>
              )}
            </div>
          </div>
        </header>

        {page.audiences && (
          <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold text-arovia-ink">{page.audiencesTitle}</h2>
            {page.audiencesIntro && <p className="mt-3 max-w-3xl text-lg text-slate-600">{page.audiencesIntro}</p>}
            <ul className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {page.audiences.map((item) => (
                <li key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5 shadow-card">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {page.services && (
          <section id="services" className="bg-white py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <h2 className="text-3xl font-semibold text-arovia-ink">{page.servicesTitle}</h2>
              {page.servicesIntro && <p className="mt-3 max-w-3xl text-lg text-slate-600">{page.servicesIntro}</p>}
              <div className="mt-8 grid gap-5">
                {page.services.map((service) => (
                  <article key={service.title} className="rounded-3xl border border-slate-200 p-6">
                    <h3 className="text-2xl font-semibold text-arovia-ink">{service.title}</h3>
                    <p className="mt-2 max-w-3xl text-slate-600">{service.description}</p>
                    {service.included && (
                      <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                        {service.included.map((item) => (
                          <li key={item} className="text-sm text-slate-700">
                            {item}
                          </li>
                        ))}
                      </ul>
                    )}
                    {service.whenToUse && (
                      <p className="mt-4 text-sm text-slate-600">
                        <span className="font-semibold text-arovia-ink">When to use: </span>
                        {service.whenToUse.join(" · ")}
                      </p>
                    )}
                    {service.steps && (
                      <ol className="mt-4 list-decimal space-y-1 pl-5 text-sm text-slate-700">
                        {service.steps.map((step) => (
                          <li key={step}>{step}</li>
                        ))}
                      </ol>
                    )}
                    {service.notes?.map((note) => (
                      <p key={note} className="mt-3 text-sm text-slate-500">
                        {note}
                      </p>
                    ))}
                    {service.href && (
                      <Link href={service.href} className={`mt-4 inline-flex min-h-11 items-center text-sm font-semibold ${tone.text}`}>
                        Learn more
                      </Link>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {page.extra && (
          <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold">{page.extraTitle}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.extra.map((item) => (
                <li key={item.title} className="rounded-3xl bg-white p-5 shadow-card">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {page.steps && (
          <section id="how" className="bg-gradient-subtle py-16">
            <div className="mx-auto max-w-6xl px-4 md:px-6">
              <h2 className="text-3xl font-semibold">{page.stepsTitle}</h2>
              {page.stepsIntro && <p className="mt-3 text-lg text-slate-600">{page.stepsIntro}</p>}
              <ol className="mt-8 grid gap-4 md:grid-cols-2">
                {page.steps.map((step, index) => (
                  <li key={step.title} className="rounded-3xl bg-white p-5 shadow-card">
                    <span className={`text-sm font-semibold ${tone.text}`}>0{index + 1}</span>
                    <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {page.why && (
          <section className="mx-auto max-w-6xl px-4 py-16 md:px-6">
            <h2 className="text-3xl font-semibold">{page.whyTitle}</h2>
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {page.why.map((item) => (
                <li key={item.title} className="rounded-3xl border border-slate-200 bg-white p-5">
                  <h3 className="font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </li>
              ))}
            </ul>
          </section>
        )}

        {page.faqs && page.faqs.length > 0 && (
          <section className="bg-white py-16">
            <div className="mx-auto max-w-3xl px-4 md:px-6">
              <h2 className="text-3xl font-semibold">Common questions</h2>
              <div className="mt-6">
                <FAQAccordion items={page.faqs} />
              </div>
            </div>
          </section>
        )}
      </article>
      <CTASection
        title={page.ctaTitle}
        copy={page.ctaCopy}
        primary={page.ctaPrimary}
        secondary={page.ctaSecondary}
      />
    </>
  );
}
