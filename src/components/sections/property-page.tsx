import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/ui/faq-list";
import { PostCard } from "@/components/ui/post-card";
import { QuoteActions } from "@/components/ui/quote-actions";
import { SiteImage } from "@/components/ui/site-image";
import { posts } from "@/content/posts";
import { type PropertyPage, propertyPages } from "@/content/property-pages";
import { getService } from "@/content/services";
import { breadcrumbSchema, faqSchema, propertyServiceSchema } from "@/lib/schema";

/** Full page for one property type (HDB, condo, landed). Rendered by each route. */
export function PropertyPageView({ page }: { page: PropertyPage }) {
  const related = page.relatedPosts.map((slug) => posts.find((p) => p.slug === slug)).filter((p) => p !== undefined);
  const others = propertyPages.filter((p) => p.slug !== page.slug);

  return (
    <>
      <JsonLd
        data={[
          propertyServiceSchema(page),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: page.h1, path: `/${page.slug}` },
          ]),
          faqSchema(page.faq),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: page.h1 }]}
        kicker={page.kicker}
        title={page.h1}
        intro={page.intro}
        image={page.heroImage}
        caption={page.heroCaption}
      >
        <QuoteActions section={`${page.slug.replace(/-/g, "_")}_hero`} topic={page.primaryKeyword} />
      </PageHero>

      <section aria-labelledby="context-heading" className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <h2 id="context-heading" className="display-2 lg:col-span-5" data-reveal="">
            {page.context.heading}
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-ink-2 lg:col-span-6 lg:col-start-7">
            {page.context.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="recommend-heading" className="bg-paper-2 py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10 max-w-3xl md:mb-14">
            <h2 id="recommend-heading" className="display-2" data-reveal="">
              {page.recommendations.heading}
            </h2>
            <p className="lede mt-5">{page.recommendations.intro}</p>
          </div>
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {page.recommendations.items.map((item, i) => {
              const service = getService(item.slug);
              return (
                <li key={item.slug} data-reveal="" style={{ "--i": i } as CSSProperties}>
                  <Link href={`/services/${item.slug}`} className="group flex h-full flex-col">
                    {service && (
                      <span className="relative block aspect-[4/3] overflow-hidden rounded-lg bg-paper">
                        <SiteImage
                          src={service.heroImage}
                          alt=""
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="zoom-media object-cover"
                        />
                      </span>
                    )}
                    <span className="mt-4 flex items-start justify-between gap-3">
                      <span className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-timber">
                        {item.name}
                      </span>
                      <ArrowRight size={18} aria-hidden="true" className="arrow mt-1.5 shrink-0 text-ink-3" />
                    </span>
                    <span className="mt-2 text-[0.9375rem] leading-relaxed text-ink-2">{item.why}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section aria-labelledby="rooms-heading" className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <h2 id="rooms-heading" className="display-2 lg:col-span-4" data-reveal="">
            {page.rooms.heading}
          </h2>
          <dl className="grid gap-x-10 sm:grid-cols-2 lg:col-span-8">
            {page.rooms.items.map((r, i) => (
              <div
                key={r.room}
                data-reveal=""
                style={{ "--i": i % 2 } as CSSProperties}
                className="border-t border-line py-6"
              >
                <dt className="font-display text-2xl text-ink">{r.room}</dt>
                <dd className="mt-2 text-ink-2">{r.advice}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section aria-labelledby="planning-heading" className="on-dark bg-night grain py-16 text-paper md:py-24">
        <div className="container-page grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <h2 id="planning-heading" className="display-2" data-reveal="">
              {page.planning.heading}
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-paper/75">
              {page.planning.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <ol className="lg:col-span-6 lg:col-start-7">
            {page.steps.map((step, i) => (
              <li
                key={step.title}
                data-reveal=""
                style={{ "--i": i } as CSSProperties}
                className="grid grid-cols-[3rem_1fr] border-t border-line-dark py-5 last:border-b"
              >
                <span className="font-display text-2xl text-oak tabular-nums" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>
                  <span className="block font-semibold text-paper">
                    <span className="sr-only">Step {i + 1}: </span>
                    {step.title}
                  </span>
                  <span className="mt-1 block text-[0.9375rem] text-paper/75">{step.desc}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="cost-heading" className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 id="cost-heading" className="display-2" data-reveal="">
              What affects the cost
            </h2>
            <p className="lede mt-5">
              Every home is different, so we quote after a free site visit. These are the main things that decide the
              price of flooring for {page.navLabel.toLowerCase().replace("hdb", "HDB")} in Singapore:
            </p>
            <ul className="mt-8 space-y-3">
              {page.costFactors.map((f) => (
                <li key={f} className="flex gap-3 text-ink-2">
                  <Check size={18} aria-hidden="true" className="mt-1 shrink-0 text-timber" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <div className="rounded-xl border border-line bg-white p-7 lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
              <p className="display-3 text-ink">Get an itemised quote</p>
              <p className="mt-2 mb-6 text-[0.9375rem] text-ink-2">
                Free measurement, samples in your own light and a clear breakdown of every cost.
              </p>
              <QuoteActions section={`${page.slug.replace(/-/g, "_")}_cost`} topic={page.primaryKeyword} compact />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="border-t border-line py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Questions</p>
            <h2 id="faq-heading" className="display-2">
              {page.h1.replace(" Singapore", "")} FAQs
            </h2>
            <p className="mt-4 text-ink-2">
              More answers on our{" "}
              <Link href="/faq" className="link">
                FAQ page
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <FaqList items={page.faq} />
          </div>
        </div>
      </section>

      <section aria-labelledby="more-heading" className="border-t border-line bg-paper-2 py-16 md:py-24">
        <div className="container-page">
          <h2 id="more-heading" className="display-2 mb-10">
            Helpful guides
          </h2>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {related.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
          <nav
            aria-label="Other property types"
            className="mt-16 flex flex-wrap items-center gap-3 border-t border-line pt-10"
          >
            <span className="mr-2 text-sm text-ink-3">Flooring for other homes:</span>
            {others.map((o) => (
              <Link key={o.slug} href={`/${o.slug}`} className="chip">
                {o.h1}
              </Link>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
}
