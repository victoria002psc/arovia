"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/ui/Logo";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-[#E6E8EA] transition-[background-color,box-shadow] duration-300",
        scrolled ? "bg-white/95 shadow-[0_10px_30px_-24px_rgba(11,23,42,0.55)] backdrop-blur-md" : "bg-white",
      )}
    >
      <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-5 lg:px-10" aria-label="Primary">
        <Logo />
        <ul className="hidden items-center gap-1 xl:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex min-h-11 items-center px-3 text-[14px] text-[#1F2937]",
                    active && "text-[#0B172A]",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <span className="relative">
                    {item.label}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-px w-full origin-left bg-[#0F9F8F] transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </span>
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-20 min-w-[240px] pt-2 opacity-0 transition duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="border border-[#E6E8EA] bg-white py-2 shadow-[0_12px_30px_-24px_rgba(11,23,42,0.45)]">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block px-4 py-2.5 text-[14px] text-[#1F2937] hover:bg-[#F7F8F6] hover:text-[#0B172A]">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
        <div className="hidden xl:block">
          <Link href="/contact" className="inline-flex min-h-11 items-center bg-[#0B172A] px-5 text-[14px] font-medium text-white transition-[background-color,transform] duration-300 hover:bg-[#16283f] active:scale-[0.98]">
            Talk to Arovia
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-[#0B172A] xl:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X strokeWidth={1.5} /> : <Menu strokeWidth={1.5} />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-[#F7F8F6] px-6 py-8 xl:hidden"
          >
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-heading text-2xl text-[#0B172A]">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mt-3 space-y-1 border-l border-[#E6E8EA] pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="inline-flex min-h-11 items-center text-base text-[#374151]">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-flex min-h-11 items-center bg-[#0B172A] px-5 text-sm font-medium text-white">
              Talk to Arovia
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
