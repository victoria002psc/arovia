import { navItems } from "@/lib/constants";

export function relatedFor(path: string) {
  const links: { label: string; href: string }[] = [];
  for (const item of navItems) {
    const children = item.children ?? [];
    const inBranch = item.href === path || children.some((child) => child.href === path);
    if (!inBranch) continue;
    if (item.href !== path) links.push({ label: item.label, href: item.href });
    for (const child of children) {
      if (child.href !== path && child.href !== item.href) links.push({ label: child.label, href: child.href });
    }
  }
  const unique = links.filter((link, index) => links.findIndex((item) => item.href === link.href) === index);
  if (unique.length < 2) {
    unique.push({ label: "Contact", href: "/contact?type=general" }, { label: "FAQ", href: "/faq" });
  }
  return unique.slice(0, 4);
}
