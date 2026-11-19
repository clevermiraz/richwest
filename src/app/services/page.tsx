import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteImage } from "@/components/ui/site-image";
import { getService, services } from "@/content/services";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, serviceGroups } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Flooring & Decking Services",
  description:
    "Explore flooring and decking services in Singapore: wooden floors, vinyl, carpet, sports floors, outdoor decking, and polycarbonate shelters.",
  path: "/services",
  keywords:
    "wooden floor, vinyl flooring, carpet floor, office carpet tiles singapore, sports floor, wooden deck, outdoor deck, composite deck, composite timber deck, wooden deck varnish, balcony decking specialist, flooring contractor singapore, commercial flooring contractor, poly carbonate roofing shelters",
});

const standards = [
  {
    title: "In-house installation teams",
    desc: "No sub-contracting. The people who quote are the people who install.",
  },
  { title: "Premium grade materials", desc: "Sourced globally and checked for moisture and grain before delivery." },
  {
    title: "Complimentary site measurement",
    desc: "Free on-site measurement and consultation, with samples to compare.",
  },
  { title: "Comprehensive warranty", desc: "Workmanship warranty on every installation, in writing." },
  { title: "Dust-free sanding", desc: "Dust-extraction equipment when restoring existing wooden floors." },
  { title: "Eco-friendly finishes", desc: "Low-VOC varnishes and adhesives wherever the system allows." },
];

const slugOf = (href: string) => href.replace("/services/", "");

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            ...collectionPageSchema(
              "Services - Flooring & Decking in Singapore",
              "/services",
              services.map((s) => s.primaryKeyword),
            ),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: services.map((s, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: s.title,
                url: absoluteUrl(`/services/${s.slug}`),
              })),
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services" }]}
        kicker={`${services.length} services · one in-house team`}
        title="Flooring & Decking Services in Singapore"
        intro="Wooden floor, vinyl flooring, carpet floor, sports floor, outdoor deck, composite deck, and polycarbonate roofing shelters, all planned and installed with clean finishing."
        image="/images/luxury-interior-wood.webp"
        caption="Wide-plank wooden flooring, living room"
      />

      {serviceGroups.map((group, gi) => (
        <section
          key={group.name}
          aria-labelledby={`group-${gi}`}
          className={gi % 2 === 1 ? "bg-paper-2 py-16 md:py-24" : "py-16 md:py-24"}
        >
          <div className="container-page grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
                <p className="font-display text-lg text-ink-3 tabular-nums">{String(gi + 1).padStart(2, "0")}</p>
                <h2 id={`group-${gi}`} className="display-2 mt-2">
                  {group.name}
                </h2>
                <p className="mt-4 max-w-sm text-ink-2">{group.blurb}</p>
              </div>
            </div>
            <ul className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
              {group.items.map((item, i) => {
                const service = getService(slugOf(item.href));
                if (!service) return null;
                return (
                  <li key={item.href} data-reveal="" style={{ "--i": i % 2 } as CSSProperties}>
                    <Link href={item.href} className="group flex h-full flex-col">
                      <span className="relative block aspect-[3/2] overflow-hidden rounded-lg bg-paper-2">
                        <SiteImage
                          src={service.heroImage}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 30vw"
                          className="zoom-media object-cover"
                        />
                      </span>
                      <span className="mt-4 flex items-start justify-between gap-4">
                        <span className="font-display text-[1.625rem] leading-tight text-ink transition-colors group-hover:text-timber">
                          {service.title}
                        </span>
                        <ArrowRight size={18} aria-hidden="true" className="arrow mt-2 shrink-0 text-ink-3" />
                      </span>
                      <span className="mt-2 block text-[0.9375rem] leading-relaxed text-ink-2">
                        {service.description}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      ))}

      <section aria-labelledby="standard-heading" className="on-dark bg-night grain py-20 text-paper md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">What every project includes</p>
            <h2 id="standard-heading" className="display-2" data-reveal="">
              The Richwest <em className="text-oak">standard.</em>
            </h2>
            <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-lg">
              <SiteImage
                src="/images/composite-deck-installation.webp"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-7 lg:pt-16">
            {standards.map((item, i) => (
              <li
                key={item.title}
                data-reveal=""
                style={{ "--i": i % 2 } as CSSProperties}
                className="border-t border-line-dark py-6"
              >
                <p className="font-display text-xl text-oak tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-paper/75">{item.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
