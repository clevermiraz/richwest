import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { SiteImage } from "@/components/ui/site-image";
import { propertyPages } from "@/content/property-pages";
import { cn } from "@/lib/cn";

/** Three cards leading to the HDB, condo and landed flooring guides. */
export function HomeTypes({ className }: { className?: string }) {
  return (
    <section aria-labelledby="home-types-heading" className={cn("py-16 md:py-24", className)}>
      <div className="container-page">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="kicker">By home type</p>
            <h2 id="home-types-heading" className="display-2" data-reveal="">
              Flooring for every kind of <em className="text-timber">Singapore home.</em>
            </h2>
          </div>
          <p className="max-w-md text-ink-2">
            HDB flats, condominiums and landed houses each come with their own rules and needs. Start with yours.
          </p>
        </div>
        <ul className="grid gap-x-6 gap-y-10 md:grid-cols-3">
          {propertyPages.map((p, i) => (
            <li key={p.slug} data-reveal="" style={{ "--i": i } as CSSProperties}>
              <Link href={`/${p.slug}`} className="group block">
                <span className="relative block aspect-[4/3] overflow-hidden rounded-lg bg-paper-2">
                  <SiteImage
                    src={p.heroImage}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="zoom-media object-cover"
                  />
                </span>
                <span className="mt-4 flex items-start justify-between gap-4">
                  <span className="font-display text-[1.75rem] leading-tight text-ink transition-colors group-hover:text-timber">
                    {p.h1.replace(" Singapore", "")}
                  </span>
                  <ArrowRight size={18} aria-hidden="true" className="arrow mt-2 shrink-0 text-ink-3" />
                </span>
                <span className="mt-1 block text-[0.9375rem] text-ink-2">{p.kicker}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
