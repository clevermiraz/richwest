import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { SiteImage } from "@/components/ui/site-image";
import { featuredServices } from "@/content/home";

/**
 * Numbered index of the main services. On desktop, hovering or focusing a row
 * swaps the sticky preview photo (CSS :has(), see `.svc` in globals.css).
 * On phones each row carries its own thumbnail instead.
 */
export function ServicesIndex() {
  return (
    <section aria-labelledby="services-heading" className="py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="services-heading"
          kicker="What we install"
          title={
            <>
              Floors and decks, <em className="text-timber">done properly.</em>
            </>
          }
          intro="From a single HDB bedroom to a full office floor, one in-house team measures, supplies and installs, so there is one point of contact from quote to handover."
          aside={
            <Link href="/services" className="btn btn-outline">
              All 15 services
              <ArrowRight size={16} aria-hidden="true" className="arrow" />
            </Link>
          }
        />

        <div className="svc grid gap-12 lg:grid-cols-12">
          <ol className="border-t border-line lg:col-span-7">
            {featuredServices.map((s, i) => (
              <li
                key={s.href}
                className="border-b border-line"
                data-reveal=""
                style={{ "--i": i % 4 } as CSSProperties}
              >
                <Link
                  href={s.href}
                  data-k={i}
                  className="group grid grid-cols-[4.5rem_1fr_auto] items-center gap-x-4 py-5 sm:grid-cols-[2.5rem_1fr_auto] sm:gap-x-6 md:py-6"
                >
                  <span className="relative aspect-square overflow-hidden rounded-md bg-paper-2 sm:hidden">
                    <SiteImage src={s.image} alt="" sizes="72px" className="h-full w-full object-cover" />
                  </span>
                  <span className="hidden font-display text-lg text-ink-3 tabular-nums sm:block" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="flex flex-wrap items-baseline gap-x-3">
                      <span className="font-display text-[1.625rem] leading-tight text-ink transition-colors group-hover:text-timber md:text-[2rem]">
                        {s.name}
                      </span>
                      <span className="text-sm text-ink-3">{s.group}</span>
                    </span>
                    <span className="mt-1 block text-[0.9375rem] leading-snug text-ink-2">{s.tagline}</span>
                  </span>
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors group-hover:border-timber group-hover:bg-timber group-hover:text-white">
                    <ArrowRight size={16} aria-hidden="true" className="arrow" />
                  </span>
                </Link>
              </li>
            ))}
          </ol>

          <div aria-hidden="true" className="hidden lg:col-span-5 lg:block">
            <div className="svc-preview pointer-events-none sticky top-[calc(var(--header-offset)+2rem)] aspect-[4/5] overflow-hidden rounded-lg bg-paper-2">
              {featuredServices.map((s, i) => (
                <div key={s.href} data-k={i} className="absolute inset-0">
                  <SiteImage src={s.image} alt="" sizes="40vw" className="h-full w-full object-cover" />
                  <span className="absolute bottom-4 left-4 rounded-full bg-paper/90 px-3 py-1.5 text-sm text-ink backdrop-blur-sm">
                    {s.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
