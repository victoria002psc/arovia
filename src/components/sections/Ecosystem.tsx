const capabilities = [
  { name: "Care", text: "Homecare, diagnostics, ambulance and clinic services for people and families." },
  { name: "Pharmacy", text: "A dedicated pharmacy within the same healthcare journey." },
  { name: "Equipment Trade", text: "Medical equipment and export for healthcare organizations." },
  { name: "Digital Health", text: "Applications, websites, platforms and software built for care." },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 lg:px-10">
        <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#0F9F8F]">The Arovia Group</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
          <h2 className="font-heading text-[2.35rem] font-semibold leading-[1.08] tracking-[-0.025em] text-[#0B172A] sm:text-5xl">
            One Healthcare Ecosystem.
            <span className="mt-2 block">Four Connected Capabilities.</span>
          </h2>
          <p className="max-w-sm text-[17px] leading-relaxed text-[#3E4A57] lg:pb-1">
            Arovia brings care, pharmacy, equipment trade and digital health together, so patients, families and healthcare organizations do not have to treat them as separate worlds.
          </p>
        </div>

        <div className="mt-16 border-t border-[#0B172A]/15 pt-8">
          <p className="font-heading text-[13px] font-semibold tracking-[0.22em] text-[#0B172A]">AROVIA GROUP</p>
          <ul className="mt-8 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => (
              <li key={item.name} className="border-t border-[#0B172A]/10 pt-5">
                <p className="font-heading text-[12px] tracking-[0.18em] text-[#8A93A0]">0{index + 1}</p>
                <h3 className="mt-3 font-heading text-[1.65rem] font-semibold leading-none text-[#0B172A]">{item.name}</h3>
                <p className="mt-4 text-[15px] leading-relaxed text-[#4B5563]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
