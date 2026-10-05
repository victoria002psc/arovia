import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-[#F7F8F6]">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[720px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20">
          <p className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#0F9F8F]">Healthcare, connected.</p>
          <h1 className="mt-6 font-heading text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-[#0B172A] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]">
            Healthcare That Connects
            <span className="mt-4 block max-w-[12em] text-[0.46em] font-medium leading-[1.25] tracking-normal text-[#1F2937]">
              Care, Pharmacy, Equipment &amp; Technology
            </span>
          </h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-[#3E4A57] lg:text-lg">
            Arovia Group brings together healthcare services, pharmacy, medical equipment and digital health solutions within one connected healthcare ecosystem.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="#ecosystem"
              className="inline-flex min-h-12 items-center justify-center bg-[#0B172A] px-6 text-[15px] font-medium text-white hover:bg-[#16283f]"
            >
              Explore Arovia
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-[#0B172A]/80 px-6 text-[15px] font-medium text-[#0B172A] hover:bg-white"
            >
              Talk to Arovia
            </Link>
          </div>
        </div>
        <div className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-full">
          <Image
            src="/images/hero-consult.jpg"
            alt="A clinician discussing diagnostic imaging with a colleague"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[58%_22%]"
          />
        </div>
      </div>
    </section>
  );
}
