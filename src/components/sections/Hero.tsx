"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

const ease = "easeInOut" as const;

export function Hero() {
  const reduce = useReducedMotion();
  const hidden = reduce ? false : { opacity: 0, y: 10 };
  const show = { opacity: 1, y: 0 };

  return (
    <section className="bg-[#F7F8F6]">
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[720px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 sm:px-8 lg:px-14 lg:py-20 xl:px-20">
          <motion.p
            className="text-[12px] font-medium uppercase tracking-[0.24em] text-[#0F9F8F]"
            initial={hidden}
            animate={show}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
          >
            Healthcare, connected.
          </motion.p>
          <motion.h1
            className="mt-6 font-heading text-[2.5rem] font-semibold leading-[1.05] tracking-[-0.025em] text-[#0B172A] sm:text-[3rem] lg:text-[3.5rem] xl:text-[4rem]"
            initial={reduce ? false : { opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease, delay: 0.16 }}
          >
            Healthcare That Connects
            <span className="mt-4 block max-w-[12em] text-[0.46em] font-medium leading-[1.25] tracking-normal text-[#1F2937]">
              Care, Pharmacy, Equipment &amp; Technology
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-[17px] leading-relaxed text-[#3E4A57] lg:text-lg"
            initial={hidden}
            animate={show}
            transition={{ duration: 0.8, ease, delay: 0.28 }}
          >
            Arovia Group brings together healthcare services, pharmacy, medical equipment and digital health solutions within one connected healthcare ecosystem.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
            initial={hidden}
            animate={show}
            transition={{ duration: 0.8, ease, delay: 0.4 }}
          >
            <Link
              href="#ecosystem"
              className="inline-flex min-h-12 items-center justify-center bg-[#0B172A] px-6 text-[15px] font-medium text-white shadow-[0_10px_24px_-18px_rgba(11,23,42,0.8)] transition-[background-color,box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:bg-[#16283f] hover:shadow-[0_16px_28px_-16px_rgba(11,23,42,0.55)] active:translate-y-0 active:scale-[0.98]"
            >
              Explore Arovia
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center border border-[#0B172A]/80 px-6 text-[15px] font-medium text-[#0B172A] transition-[background-color,transform] duration-300 hover:-translate-y-0.5 hover:bg-white active:translate-y-0 active:scale-[0.98]"
            >
              Talk to Arovia
            </Link>
          </motion.div>
        </div>
        <motion.div
          className="relative min-h-[340px] sm:min-h-[460px] lg:min-h-full"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease, delay: 0.12 }}
        >
          <Image
            src="/images/hero-consult.jpg"
            alt="A clinician discussing diagnostic imaging with a colleague"
            fill
            priority
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-[58%_22%]"
          />
        </motion.div>
      </div>
      <div className="mx-auto h-px max-w-[1440px] origin-left bg-[#0B172A]/10" aria-hidden="true" />
    </section>
  );
}
