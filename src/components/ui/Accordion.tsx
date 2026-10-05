"use client";

import { useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

export function Accordion({ items, allowMultiple = false, className }: AccordionProps) {
  const [open, setOpen] = useState<string[]>(items[0] ? [items[0].id] : []);
  const baseId = useId();
  const buttons = useRef<Array<HTMLButtonElement | null>>([]);

  function toggle(id: string) {
    setOpen((current) => {
      const isOpen = current.includes(id);
      if (allowMultiple) return isOpen ? current.filter((item) => item !== id) : [...current, id];
      return isOpen ? [] : [id];
    });
  }

  function onKeyDown(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    const last = items.length - 1;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      buttons.current[index === last ? 0 : index + 1]?.focus();
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      buttons.current[index === 0 ? last : index - 1]?.focus();
    }
    if (event.key === "Home") {
      event.preventDefault();
      buttons.current[0]?.focus();
    }
    if (event.key === "End") {
      event.preventDefault();
      buttons.current[last]?.focus();
    }
  }

  return (
    <div className={cn("divide-y divide-slate-200 border border-slate-200 bg-white", className)}>
      {items.map((item, index) => {
        const expanded = open.includes(item.id);
        const panelId = `${baseId}-${item.id}`;
        return (
          <div key={item.id}>
            <h3>
              <button
                ref={(node) => {
                  buttons.current[index] = node;
                }}
                type="button"
                className="flex min-h-11 w-full items-center justify-between gap-4 px-4 py-3 text-left text-base font-semibold text-arovia-navy"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
                onKeyDown={(event) => onKeyDown(event, index)}
              >
                {item.title}
                <span aria-hidden="true">{expanded ? "–" : "+"}</span>
              </button>
            </h3>
            <div id={panelId} role="region" hidden={!expanded} className="px-4 pb-4 text-sm leading-relaxed text-slate-600">
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
