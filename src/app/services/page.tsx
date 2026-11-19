import { CircleCheck } from "lucide-react";
import Link from "next/link";
import { Expertise } from "@/components/sections/expertise";
import { PageHero } from "@/components/sections/page-hero";
import { reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/content/services";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Flooring & Decking Services",
  description:
    "Explore flooring and decking services in Singapore: wooden floors, vinyl, carpet, sports floors, outdoor decking, and polycarbonate shelters.",
  path: "/services",
  keywords:
    "wooden floor, vinyl flooring, carpet floor, office carpet tiles singapore, sports floor, wooden deck, outdoor deck, composite deck, composite timber deck, wooden deck varnish, balcony decking specialist, flooring contractor singapore, commercial flooring contractor, poly carbonate roofing shelters",
});

const standards = [
  "In-house installation teams (No sub-contracting)",
  "Premium grade materials sourced globally",
  "Complimentary on-site measurement & consultation",
  "Comprehensive warranty on all installations",
  "Dust-free sanding technology for wood restoration",
  "Eco-friendly varnishes and adhesives",
];

export default function ServicesPage() {
  return (
    <div className="pt-(--header-offset)">
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
        title="Flooring & Decking Services in Singapore"
        intro="Wooden floor, vinyl flooring, carpet floor, sports floor, outdoor deck, composite deck, and polycarbonate roofing shelters, all planned and installed with clean finishing."
      />

      <Expertise />

      <section className="border-t border-slate-100 bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-xs font-bold tracking-widest text-wood-ink uppercase">Explore by keyword</p>
            <h2 className="heading-section text-slate-900">Service Pages</h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Browse focused pages for popular searches like wooden floor, vinyl flooring, composite deck, sports floor,
              and office carpet tiles in Singapore.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full rounded-4xl border border-slate-100 bg-slate-50 p-8 transition-[border-color,background-color,box-shadow] hover:border-wood-accent/30 hover:bg-white hover:shadow-xl"
                >
                  <p className="mb-3 text-xs font-black tracking-[0.25em] text-slate-600 uppercase">
                    {s.primaryKeyword}
                  </p>
                  <h3 className="text-2xl font-black text-slate-900 transition-colors group-hover:text-wood-ink">
                    {s.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{s.description}</p>
                  <span
                    className="mt-8 block text-sm font-black tracking-widest text-wood-ink uppercase"
                    aria-hidden="true"
                  >
                    Learn more
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SiteImage
                src="/images/wooden-floor-hallway.webp"
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="w-full rounded-6xl shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-section mb-8 text-slate-900">The Richwest Standard</h2>
              <ul className="space-y-6">
                {standards.map((item, i) => (
                  <li
                    key={item}
                    {...reveal(i, "right")}
                    className="flex items-center gap-4 text-lg font-medium text-slate-700"
                  >
                    <CircleCheck size={24} aria-hidden="true" className="shrink-0 text-wood-ink" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
