import Link from "next/link";
import { PageHero } from "@/components/sections/page-hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { SiteImage } from "@/components/ui/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Flooring & Decking Portfolio",
  description:
    "Browse Singapore projects: wooden floors, timber decking, composite decking, deck varnish maintenance, and polycarbonate shelters.",
  path: "/portfolio",
  keywords:
    "wooden floor, wooden deck, timber decking, composite timber decking, wooden deck varnish, outdoor deck, polycarbonate roof shelters, decking contractor singapore",
});

export default function PortfolioPage() {
  return (
    <div className="pt-(--header-offset)">
      <JsonLd
        data={[
          collectionPageSchema("Portfolio - Flooring & Decking Projects in Singapore", "/portfolio", [
            "wooden floor",
            "wooden deck",
            "timber decking",
            "composite timber decking",
            "wooden deck varnish",
            "polycarbonate roofing shelters",
            "outdoor deck",
          ]),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Portfolio", path: "/portfolio" },
          ]),
        ]}
      />

      <PageHero
        title="Flooring & Decking Portfolio"
        intro="Wooden floor, wooden deck, timber decking, composite timber decking, wooden deck varnish refresh, outdoor deck, and polycarbonate roof shelters delivered across Singapore."
      />

      <PortfolioGrid showViewAll={false} />

      <section className="relative overflow-hidden bg-wood-accent py-24 text-white">
        <div className="absolute inset-0 opacity-10">
          <SiteImage src="/images/composite-deck-balcony-sg.webp" alt="" fill sizes="100vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="heading-section mb-8">Ready to start your project?</h2>
          <p className="mx-auto mb-12 max-w-2xl text-xl opacity-90">
            Over 1,000 projects delivered across Singapore since 2003. Let&apos;s plan yours.
          </p>
          <Link
            href="/contact"
            className="btn btn-lg btn-light"
            data-track="quote_click"
            data-section="portfolio_cta_get_free_quote"
          >
            Get a free quote
          </Link>
        </div>
      </section>
    </div>
  );
}
