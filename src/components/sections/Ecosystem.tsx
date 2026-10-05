const capabilities = [
  { name: "Care", detail: "Homecare, diagnostics, ambulance, clinic" },
  { name: "Pharmacy", detail: "One pharmacy" },
  { name: "Equipment Trade", detail: "Export and medical equipment" },
  { name: "Digital Health", detail: "Apps, websites, platforms, solutions" },
];

export function Ecosystem({ heading, text }: { heading: string; text: string }) {
  return (
    <section id="ecosystem" aria-labelledby="ecosystem-heading" className="bg-white">
      <div className="mx-auto max-w-wide px-5 py-20 lg:px-10 lg:py-28">
        <h2 id="ecosystem-heading" className="max-w-3xl font-heading text-3xl font-semibold text-arovia-navy sm:text-4xl">
          {heading}
        </h2>
        <p className="type-lead mt-5 text-arovia-charcoal">{text}</p>
        <div className="mt-14" role="img" aria-label="Arovia Group connected to Care, Pharmacy, Equipment Trade, and Digital Health">
          <p className="font-heading text-sm font-semibold tracking-[0.18em] text-arovia-navy">AROVIA GROUP</p>
          <div className="mt-6 h-px w-full bg-arovia-navy/15" />
          <ol className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <li key={item.name} className="border-t border-arovia-navy/15 pt-4">
                <span className="text-xs tracking-[0.16em] text-arovia-muted">0{index + 1}</span>
                <p className="mt-2 font-heading text-lg font-semibold text-arovia-navy">{item.name}</p>
                <p className="mt-1 text-sm text-arovia-muted">{item.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
