"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { navItems } from "@/lib/constants";
import { phoneDisplay, phoneTel } from "@/lib/site-info";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import type { NavItem } from "@/types";

function isCurrent(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`);
}

function hasSubmenu(item: NavItem) {
  return (item.children?.length ?? 0) > 1;
}

export function Navigation() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const drawerTitleId = useId();

  useEffect(() => {
    setDrawerOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [drawerOpen]);

  useEffect(() => {
    function onPointerDown(event: MouseEvent) {
      if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      if (drawerOpen) {
        setDrawerOpen(false);
        menuButtonRef.current?.focus();
        return;
      }
      if (openMenu) setOpenMenu(null);
    }
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [drawerOpen, openMenu]);

  useEffect(() => {
    if (!drawerOpen) return;
    const drawer = drawerRef.current;
    const items = () =>
      Array.from(drawer?.querySelectorAll<HTMLElement>("a, button") ?? []).filter((node) => !node.hasAttribute("disabled"));
    items()[0]?.focus();
    function onKeyDown(event: KeyboardEvent) {
      if (event.key !== "Tab") return;
      const focusable = items();
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    drawer?.addEventListener("keydown", onKeyDown);
    return () => drawer?.removeEventListener("keydown", onKeyDown);
  }, [drawerOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 border-b border-slate-200 bg-white" onMouseLeave={() => setOpenMenu(null)}>
      <nav className="mx-auto flex h-20 w-full max-w-wide items-center gap-3 px-5 lg:px-10" aria-label="Primary">
        <Logo />
        <ul className="ml-auto hidden items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <DesktopItem key={item.href} item={item} pathname={pathname} openMenu={openMenu} setOpenMenu={setOpenMenu} />
          ))}
        </ul>
        <a href={phoneTel} className="hidden whitespace-nowrap text-sm font-semibold text-arovia-navy xl:inline-flex xl:min-h-11 xl:items-center">
          {phoneDisplay}
        </a>
        <Button href="/contact" size="sm" className="hidden xl:inline-flex">
          Talk to Arovia
        </Button>
        <button
          ref={menuButtonRef}
          type="button"
          className="ml-auto inline-flex h-11 w-11 items-center justify-center text-arovia-navy xl:hidden"
          aria-expanded={drawerOpen}
          aria-controls="mobile-menu"
          aria-label={drawerOpen ? "Close menu" : "Open menu"}
          onClick={() => setDrawerOpen((value) => !value)}
        >
          {drawerOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
      {drawerOpen && (
        <div
          ref={drawerRef}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-labelledby={drawerTitleId}
          className="fixed inset-x-0 bottom-0 top-20 z-40 overflow-y-auto bg-white px-5 py-6 xl:hidden"
        >
          <p id={drawerTitleId} className="sr-only">
            Site menu
          </p>
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="flex min-h-11 items-center text-lg font-semibold text-arovia-navy" aria-current={isCurrent(pathname, item.href) ? "page" : undefined}>
                  {item.label}
                </Link>
                {hasSubmenu(item) && (
                  <ul className="mb-3 border-l border-slate-200 pl-4">
                    {item.children?.map((child) => (
                      <li key={child.href}>
                        <Link href={child.href} className="flex min-h-11 flex-col justify-center py-1">
                          <span className="text-sm font-semibold text-arovia-navy">{child.label}</span>
                          <span className="text-sm text-slate-600">{child.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <a href={phoneTel} className="mt-4 flex min-h-11 items-center font-semibold text-arovia-navy">
            {phoneDisplay}
          </a>
          <Button href="/contact" className="mt-4">
            Talk to Arovia
          </Button>
        </div>
      )}
    </header>
  );
}

function DesktopItem({
  item,
  pathname,
  openMenu,
  setOpenMenu,
}: {
  item: NavItem;
  pathname: string;
  openMenu: string | null;
  setOpenMenu: (value: string | null) => void;
}) {
  const panelId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const links = useRef<Array<HTMLAnchorElement | null>>([]);
  const expanded = openMenu === item.href;
  const current = isCurrent(pathname, item.href);
  const submenu = hasSubmenu(item);

  function move(index: number) {
    const last = (item.children?.length ?? 1) - 1;
    const next = index < 0 ? last : index > last ? 0 : index;
    links.current[next]?.focus();
  }

  return (
    <li className="relative" onMouseEnter={() => submenu && setOpenMenu(item.href)}>
      <div className="flex items-center">
        <Link
          href={item.href}
          className={cn("inline-flex min-h-11 items-center whitespace-nowrap px-2 text-sm text-slate-700", current && "font-semibold text-arovia-navy")}
          aria-current={current ? "page" : undefined}
        >
          {item.label}
        </Link>
        {submenu && (
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex h-11 w-8 items-center justify-center text-slate-600"
            aria-expanded={expanded}
            aria-controls={panelId}
            aria-haspopup="true"
            aria-label={`${item.label} services`}
            onClick={() => setOpenMenu(expanded ? null : item.href)}
            onKeyDown={(event) => {
              if (event.key === "ArrowDown" || event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setOpenMenu(item.href);
                requestAnimationFrame(() => links.current[0]?.focus());
              }
            }}
          >
            <ChevronDown aria-hidden="true" className="h-4 w-4" />
          </button>
        )}
      </div>
      {submenu && expanded && (
        <div id={panelId} className="fixed inset-x-0 top-20 z-40 border-b border-slate-200 bg-white shadow-md">
          <ul className="mx-auto grid w-full max-w-wide grid-cols-2 gap-2 px-10 py-6 xl:grid-cols-4">
            {item.children?.map((child, index) => (
              <li key={child.href}>
                <Link
                  ref={(node) => {
                    links.current[index] = node;
                  }}
                  href={child.href}
                  className="block min-h-11 rounded-md px-3 py-3 hover:bg-slate-50 focus-visible:bg-slate-50"
                  onKeyDown={(event) => {
                    if (event.key === "ArrowDown") {
                      event.preventDefault();
                      move(index + 1);
                    }
                    if (event.key === "ArrowUp") {
                      event.preventDefault();
                      move(index - 1);
                    }
                    if (event.key === "Home") {
                      event.preventDefault();
                      move(0);
                    }
                    if (event.key === "End") {
                      event.preventDefault();
                      move((item.children?.length ?? 1) - 1);
                    }
                    if (event.key === "Escape") {
                      event.preventDefault();
                      setOpenMenu(null);
                      buttonRef.current?.focus();
                    }
                  }}
                >
                  <span className="block text-sm font-semibold text-arovia-navy">{child.label}</span>
                  <span className="mt-1 block text-sm text-slate-600">{child.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </li>
  );
}
