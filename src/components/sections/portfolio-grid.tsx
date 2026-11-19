import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";
import { portfolio } from "@/content/home";
import { cn } from "@/lib/cn";

/* Asymmetric layout: one feature, two stacked beside it, three across. */
const tiles = [
  { cell: "sm:col-span-2 lg:col-span-7 lg:row-span-2", media: "aspect-[4/3] lg:aspect-auto lg:grow" },
  { cell: "lg:col-span-5", media: "aspect-[16/10]" },
  { cell: "lg:col-span-5", media: "aspect-[16/10]" },
  { cell: "lg:col-span-4", media: "aspect-[4/3]" },
  { cell: "lg:col-span-4", media: "aspect-[4/3]" },
  // Spans both columns on tablets so the two-column grid never ends on an orphan.
  { cell: "sm:col-span-2 lg:col-span-4", media: "aspect-[4/3] sm:aspect-[21/9] lg:aspect-[4/3]" },
];

interface PortfolioGridProps {
  /** Show the section heading (the portfolio page has its own <h1>). */
  heading?: boolean;
}

/** Selected projects. Each tile links to the service it shows. */
export function PortfolioGrid({ heading = true }: PortfolioGridProps) {
  return (
    <section
      aria-labelledby={heading ? "projects-heading" : undefined}
      aria-label={heading ? undefined : "Selected projects"}
      className="bg-paper-2 py-20 md:py-28"
    >
      <div className="container-page">
        {heading && (
          <SectionHeading
            id="projects-heading"
            kicker="Selected projects"
            title={
              <>
                Work you can <em className="text-timber">stand on.</em>
              </>
            }
            intro="Homes, condominiums, offices and sports halls across Singapore. Every floor here was measured, supplied and installed by our own crew."
            aside={
              <Link href="/portfolio" className="btn btn-outline">
                View all projects
                <ArrowUpRight size={16} aria-hidden="true" className="arrow arrow-up" />
              </Link>
            }
          />
        )}

        <ul className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-y-12">
          {portfolio.map((item, i) => (
            <li
              key={item.title}
              data-reveal=""
              style={{ "--i": i % 3 } as CSSProperties}
              className={cn("flex flex-col", tiles[i]?.cell)}
            >
              <Link href={item.href} className="group flex h-full flex-col">
                <span
                  className={cn(
                    "relative block overflow-hidden rounded-lg bg-paper",
                    tiles[i]?.media ?? "aspect-[4/3]",
                  )}
                >
                  <SiteImage
                    src={item.image}
                    altFallback={item.title}
                    fill
                    priority={!heading && i === 0}
                    sizes={
                      i === 0
                        ? "(max-width: 1024px) 100vw, 58vw"
                        : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    }
                    className="zoom-media object-cover"
                  />
                </span>
                <span className="mt-4 flex items-start justify-between gap-4">
                  <span>
                    <span className="block text-sm text-ink-3">{item.category}</span>
                    <span className="mt-0.5 block font-display text-[1.375rem] leading-snug text-ink md:text-2xl">
                      {item.title}
                    </span>
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" className="arrow arrow-up mt-1 shrink-0 text-ink-3" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
