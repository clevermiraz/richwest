import type { CSSProperties } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { JsonLd } from "@/components/seo/json-ld";
import { SiteImage } from "@/components/ui/site-image";
import { stats } from "@/content/home";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl, site } from "@/lib/site";

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about Richwest Integrated, a flooring contractor in Singapore for wooden floors, vinyl, carpet, sports floors, and outdoor decking.",
  path: "/about",
  keywords:
    "flooring contractor singapore, commercial flooring contractor, wooden floor, vinyl flooring, carpet floor, sports floor, wooden deck, composite deck, balcony decking specialist",
});

const values = [
  { title: "Integrity", desc: "Honest advice and transparent, itemised pricing for every client." },
  { title: "Quality", desc: "Premium materials, sourced and checked to stand the test of time." },
  { title: "Customer first", desc: "Dedicated support from the first consultation to after-sales care." },
  { title: "Precision", desc: "Meticulous installation by our own in-house master craftsmen." },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema("AboutPage", "About Richwest Integrated", "/about", {
            mainEntity: {
              "@type": "Organization",
              "@id": absoluteUrl("/#business"),
              name: site.name,
              url: absoluteUrl("/"),
            },
          }),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "About" }]}
        kicker="About Richwest"
        title={
          <>
            Crafting excellence since <em className="text-timber">{site.foundedYear}</em>
          </>
        }
        intro="Richwest Integrated (Pte.) Ltd. is a flooring contractor in Singapore for wooden floor, vinyl flooring, carpet floor, sports floor, outdoor deck, and composite deck projects."
        image="/images/wooden-floor-corridor.webp"
        caption="Wooden flooring with flush skirting, residential corridor"
      />

      <section aria-labelledby="journey-heading" className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="kicker">Our journey</p>
            <h2 id="journey-heading" className="display-2" data-reveal="">
              From a carpentry workshop to <em className="text-timber">1,000+ floors.</em>
            </h2>
          </div>
          <div className="space-y-6 text-lg leading-relaxed text-ink-2 lg:col-span-6 lg:col-start-7">
            <p>
              Founded with a passion for woodworking and a commitment to quality, Richwest Integrated has grown from a
              small carpentry workshop into a full-scale integrated flooring solution provider.
            </p>
            <p>
              Over the past two decades, we have successfully delivered over 1,000 projects across Singapore, ranging
              from luxury residential bungalows to large-scale commercial developments.
            </p>
            <blockquote className="border-l-2 border-timber pl-6 font-display text-[1.75rem] leading-snug text-ink">
              We treat every floor as a canvas and every project as a legacy.
            </blockquote>
            <p>
              We source only the finest materials and employ master craftsmen who share our dedication to perfection.
            </p>
          </div>
        </div>

        <div className="container-page mt-16 md:mt-24">
          <div className="grid gap-4 sm:grid-cols-12">
            <div
              className="relative aspect-[4/3] overflow-hidden rounded-lg sm:col-span-7 sm:aspect-auto"
              data-reveal="fade"
            >
              <SiteImage
                src="/images/wooden-floor-living.webp"
                fill
                sizes="(max-width: 640px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
            <div className="grid gap-4 sm:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg" data-reveal="fade">
                <SiteImage
                  src="/images/sports-floor-installation.webp"
                  fill
                  sizes="(max-width: 640px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg" data-reveal="fade">
                <SiteImage
                  src="/images/composite-deck-rooftop.webp"
                  fill
                  sizes="(max-width: 640px) 100vw, 42vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Richwest in numbers" className="border-y border-line">
        <dl className="container-page grid grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              data-reveal=""
              style={{ "--i": i } as CSSProperties}
              className="flex flex-col-reverse gap-1 border-line py-8 odd:pr-4 even:border-l even:pl-5 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0 [&:nth-child(n+3)]:border-t lg:[&:nth-child(n+3)]:border-t-0"
            >
              <dt className="text-sm text-ink-3">{stat.label}</dt>
              <dd className="font-display text-[2rem] leading-none text-ink tabular-nums md:text-[2.5rem]">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section aria-labelledby="values-heading" className="py-20 md:py-28">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">What we stand for</p>
            <h2 id="values-heading" className="display-2" data-reveal="">
              Our core <em className="text-timber">values.</em>
            </h2>
          </div>
          <ol className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {values.map((v, i) => (
              <li
                key={v.title}
                data-reveal=""
                style={{ "--i": i % 2 } as CSSProperties}
                className="border-t border-line py-7"
              >
                <p className="font-display text-xl text-ink-3 tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-3 mt-3 text-ink">{v.title}</h3>
                <p className="mt-2 text-ink-2">{v.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ProcessSteps />
    </>
  );
}
