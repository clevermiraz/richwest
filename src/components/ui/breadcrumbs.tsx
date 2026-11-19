import { ChevronRight } from "lucide-react";
import Link from "next/link";

export interface Crumb {
  name: string;
  href?: string;
}

/** Visible breadcrumb trail. Pair with breadcrumbSchema() for rich results. */
export function Breadcrumbs({ items, tone = "dark" }: { items: readonly Crumb[]; tone?: "light" | "dark" }) {
  const link = tone === "light" ? "text-white/70 hover:text-white" : "text-slate-500 hover:text-wood-ink";
  const current = tone === "light" ? "text-white font-semibold" : "text-slate-900 font-semibold";
  const separator = tone === "light" ? "text-white/40" : "text-slate-400";

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex items-center gap-2">
              {i > 0 && <ChevronRight size={14} aria-hidden="true" className={separator} />}
              {item.href && !isLast ? (
                <Link href={item.href} className={`${link} transition-colors`}>
                  {item.name}
                </Link>
              ) : (
                <span className={current} aria-current={isLast ? "page" : undefined}>
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
