import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { popularServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for is not available. Browse our flooring and decking services in Singapore instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="pt-(--header-offset)">
      <div className="container-page grid gap-12 py-20 md:py-32 lg:grid-cols-12">
        <div className="intro lg:col-span-7">
          <p className="kicker">Error 404</p>
          <h1 className="display-1 text-ink" style={{ "--d": 1 } as React.CSSProperties}>
            We could not find <em className="text-timber">that page.</em>
          </h1>
          <p className="lede mt-6 max-w-xl" style={{ "--d": 2 } as React.CSSProperties}>
            The link may be out of date or mistyped. Head back to the homepage, or jump straight to one of our most
            requested services.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row" style={{ "--d": 3 } as React.CSSProperties}>
            <Link href="/" className="btn btn-lg btn-ink">
              Back to homepage
            </Link>
            <Link href="/contact" className="btn btn-lg btn-outline">
              Get a quote
            </Link>
          </div>
        </div>
        <nav aria-labelledby="popular-heading" className="lg:col-span-4 lg:col-start-9 lg:pt-10">
          <h2 id="popular-heading" className="mb-2 text-sm font-medium text-ink-3">
            Popular services
          </h2>
          <ul className="border-t border-line">
            {popularServices.map((s) => (
              <li key={s.href} className="border-b border-line">
                <Link
                  href={s.href}
                  className="group flex items-center justify-between py-4 font-display text-2xl text-ink"
                >
                  {s.name}
                  <ArrowRight size={18} aria-hidden="true" className="arrow text-ink-3" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}
