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
  const elevated = scrolled || open;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "sticky top-0 z-50 transition-colors duration-300",
        elevated ? "border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:h-20 md:px-6" aria-label="Primary">
        <Logo />
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <li key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium",
                    "text-slate-700 hover:text-arovia-ink",
                    active && "text-arovia-ink",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-arovia-cyan"
                    />
                  )}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full z-20 w-72 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                    <ul className="rounded-2xl border border-slate-200 bg-white p-2 shadow-lift">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block rounded-xl px-3 py-2 hover:bg-slate-50">
                            <span className="block text-sm font-semibold text-arovia-ink">{child.label}</span>
                            <span className="block text-xs text-slate-500">{child.description}</span>
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
        <div className="hidden lg:block">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center rounded-full bg-arovia-cyan px-5 text-sm font-semibold text-white hover:bg-cyan-600"
          >
            Get in Touch
          </Link>
        </div>
        <button
          type="button"
          className={cn(
            "inline-flex h-11 w-11 items-center justify-center rounded-full lg:hidden",
            "text-arovia-ink",
          )}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 top-16 z-40 overflow-y-auto bg-white px-4 py-6 lg:hidden"
          >
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="block min-h-11 py-2 text-lg font-semibold text-arovia-ink">
                    {item.label}
                  </Link>
                  {item.children && (
                    <ul className="mb-3 space-y-1 border-l border-slate-200 pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link href={child.href} className="block min-h-11 py-2 text-base text-slate-600">
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-4 inline-flex min-h-11 items-center rounded-full bg-arovia-cyan px-5 font-semibold text-white"
            >
              Get in Touch
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
