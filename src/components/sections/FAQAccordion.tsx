import { fillCopy } from "@/lib/utils";
import { Accordion } from "@/components/ui/Accordion";

interface FAQAccordionProps {
  items: { question: string; answer: string; id?: string }[];
  allowMultiple?: boolean;
}

export function FAQAccordion({ items, allowMultiple = false }: FAQAccordionProps) {
  return (
    <Accordion
      allowMultiple={allowMultiple}
      items={items.map((item, index) => ({
        id: item.id ?? `faq-${index}`,
        title: item.question,
        content: fillCopy(item.answer),
      }))}
    />
  );
}
