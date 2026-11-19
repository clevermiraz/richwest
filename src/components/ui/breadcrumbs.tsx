import Link from "next/link";

export interface Crumb {
  name: string;
  href?: string;
}

/** Visible breadcrumb trail. Pair with breadcrumbSchema() for rich results. */
export function Breadcrumbs({ items, tone = "dark" }: { items: readonly Crumb[]; tone?: "light" | "dark" }) {
  const link = tone === "light" ? "text-paper/70 hover:text-paper" : "text-ink-3 hover:text-ink";
  const current = tone === "light" ? "text-paper" : "text-ink";

  return (
    <nav aria-label="Breadcrumb" className="mb-8 md:mb-12">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${item.name}-${i}`} className="flex min-w-0 items-center gap-2">
              {i > 0 && (
                <span aria-hidden="true" className={tone === "light" ? "text-paper/40" : "text-ink-3/60"}>
                  /
                </span>
              )}
              {item.href && !isLast ? (
                <Link href={item.href} className={`${link} transition-colors`}>
                  {item.name}
                </Link>
              ) : (
                <span className={`${current} truncate`} aria-current={isLast ? "page" : undefined}>
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
