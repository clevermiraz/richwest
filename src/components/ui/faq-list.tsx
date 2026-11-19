import { Plus } from "lucide-react";

interface FaqListProps {
  items: readonly { q: string; a: string }[];
  /** Heading level for each question (h3 inside a section, h2 on the FAQ page). */
  headingLevel?: "h2" | "h3";
}

/**
 * Accessible accordion built on <details>/<summary>: works without JS, is
 * searchable with find-in-page, and animates open/closed where the browser
 * supports `interpolate-size` (see globals.css). Answers stay in the HTML.
 */
export function FaqList({ items, headingLevel: Heading = "h3" }: FaqListProps) {
  return (
    <div className="border-t border-line">
      {items.map((item) => (
        <details key={item.q} name="faq" className="group border-b border-line">
          <summary className="flex items-start justify-between gap-6 py-6 text-left">
            <Heading className="text-lg leading-snug font-semibold text-ink transition-colors group-hover:text-timber md:text-xl">
              {item.q}
            </Heading>
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-[rotate,background-color,border-color,color] duration-300 ease-(--ease-out) group-open:rotate-45 group-open:border-ink group-open:bg-ink group-open:text-paper"
            >
              <Plus size={16} />
            </span>
          </summary>
          <p className="max-w-3xl pb-7 leading-relaxed text-ink-2">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
