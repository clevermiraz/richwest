import Link from "next/link";
import { reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";
import { portfolio } from "@/content/home";

export function PortfolioGrid({ showViewAll = true }: { showViewAll?: boolean }) {
  return (
    <section id="portfolio" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:mb-16">
          <span className="eyebrow">Our Portfolio</span>
          <h2 className="heading-section text-slate-900">Featured Flooring &amp; Decking Projects</h2>
          <p className="mx-auto mt-4 max-w-3xl text-base text-slate-600 md:mt-6 md:text-lg">
            Real projects delivered across Singapore: wooden floors, composite decking, sports courts, and commercial
            flooring.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:gap-6 lg:grid-cols-3">
          {portfolio.map((item, i) => (
            <li key={item.title} {...reveal(i % 3)}>
              <Link
                href={item.href}
                className="group relative block overflow-hidden rounded-2xl shadow-lg md:rounded-3xl"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <SiteImage
                    src={item.image}
                    altFallback={item.title}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent opacity-70 transition-opacity duration-400 group-hover:opacity-90" />
                <div className="absolute inset-x-0 bottom-0 translate-y-1 p-5 transition-transform duration-300 group-hover:translate-y-0 md:p-6">
                  <span className="mb-1 block text-xs font-black tracking-[0.25em] text-wood-light uppercase">
                    {item.category}
                  </span>
                  <h3 className="text-base leading-snug font-black text-white md:text-lg">{item.title}</h3>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 right-0 h-20 w-20 bg-wood-accent/20 opacity-0 blur-[50px] transition-opacity duration-500 group-hover:opacity-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        {showViewAll && (
          <div className="mt-10 text-center md:mt-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 border-b-2 border-wood-ink pb-1 text-base font-bold text-slate-900 transition-colors hover:text-wood-ink md:text-lg"
            >
              View All Projects
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
