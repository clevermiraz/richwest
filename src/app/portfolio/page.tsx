import Link from "next/link";
import type { CSSProperties } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteImage } from "@/components/ui/site-image";
import { gallery } from "@/content/home";
import { images, type ImageKey } from "@/content/images";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Flooring & Decking Projects in Singapore",
  description:
    "Photos of our flooring and decking projects in Singapore homes, condos, offices and sports halls: wooden floors, vinyl, composite decks and more.",
  path: "/portfolio",
  keywords:
    "wooden floor, wooden deck, timber decking, composite timber decking, wooden deck varnish, outdoor deck, polycarbonate roof shelters, decking contractor singapore",
});

const keyOf = (src: string) => src.replace("/images/", "").replace(".webp", "") as ImageKey;

export default function PortfolioPage() {
  return (
    <>
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
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Projects" }]}
        kicker="Selected work · 2003 to today"
        title="Flooring & Decking Portfolio"
        intro="Wooden floor, wooden deck, timber decking, composite timber decking, wooden deck varnish refresh, outdoor deck, and polycarbonate roof shelters delivered across Singapore."
      />

      <PortfolioGrid heading={false} />

      <section aria-labelledby="gallery-heading" className="py-20 md:py-28">
        <div className="container-page">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <h2 id="gallery-heading" className="display-2">
              From our <em className="text-timber">sites.</em>
            </h2>
            <p className="max-w-md text-ink-2">
              Finished rooms and work in progress. Select a photo to see the service behind it.
            </p>
          </div>
          <ul className="columns-1 gap-6 sm:columns-2 lg:columns-3">
            {gallery.map((item, i) => {
              const meta = images[keyOf(item.image)];
              return (
                <li
                  key={item.image}
                  data-reveal=""
                  style={{ "--i": i % 3 } as CSSProperties}
                  className="mb-8 break-inside-avoid"
                >
                  <Link href={item.href} className="group block">
                    <span className="block overflow-hidden rounded-lg bg-paper-2">
                      <SiteImage
                        src={item.image}
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="zoom-media h-auto w-full"
                      />
                    </span>
                    <span className="mt-3 block text-sm text-ink-3">{item.category}</span>
                    <span
                      aria-hidden="true"
                      className="mt-0.5 block leading-snug text-ink transition-colors group-hover:text-timber"
                    >
                      {meta.alt}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
}
