import { ArrowRight, Check, Phone } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { PageHero } from "@/components/sections/page-hero";
import { ProcessSteps } from "@/components/sections/process-steps";
import { JsonLd } from "@/components/seo/json-ld";
import { FaqList } from "@/components/ui/faq-list";
import { QuoteActions } from "@/components/ui/quote-actions";
import { PostCard } from "@/components/ui/post-card";
import { SiteImage } from "@/components/ui/site-image";
import { posts } from "@/content/posts";
import { getService, services } from "@/content/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { serviceGroups, serviceKeywords, site } from "@/lib/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">): Promise<Metadata> {
  const service = getService((await params).slug);
  if (!service) return { title: "Service Not Found", robots: { index: false, follow: true } };

  return buildMetadata({
    title: service.seoTitle,
    description: service.metaDescription ?? service.description,
    path: `/services/${service.slug}`,
    keywords: [service.primaryKeyword, ...serviceKeywords.filter((k) => k !== service.primaryKeyword)],
    ogImage: service.heroImage,
  });
}

/**
 * Opts this route out of the dev-only "instant navigation" validation.
 * Wrapping the page in <Suspense> would satisfy it, but React then ships the
 * prerendered content inside a hidden <div> swapped in by script, which
 * non-JS crawlers (several AI search bots) may not read. Every slug is
 * prerendered as complete HTML via generateStaticParams; navigation still
 * uses prerendering and prefetching exactly as before.
 */
export const instant = false;

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const href = `/services/${service.slug}`;
  // Siblings from the same group first, then the rest, so "related" really is related.
  const group = serviceGroups.find((g) => g.items.some((i) => i.href === href));
  const siblingSlugs = group?.items.map((i) => i.href.replace("/services/", "")) ?? [];
  const relatedServices = [
    ...services.filter((s) => s.slug !== service.slug && siblingSlugs.includes(s.slug)),
    ...services.filter((s) => s.slug !== service.slug && !siblingSlugs.includes(s.slug)),
  ].slice(0, 3);
  const relatedPosts = posts
    .filter((p) => (p.keywords as readonly string[]).includes(service.primaryKeyword))
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: href },
          ]),
          faqSchema(service.faq),
        ]}
      />

      <PageHero
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]}
        kicker={group ? `${group.name} · ${service.primaryKeyword}` : service.primaryKeyword}
        title={service.title}
        intro={service.description}
        image={service.heroImage}
        imageAlt={service.title}
      >
        <QuoteActions section="service_hero" topic={service.primaryKeyword} />
      </PageHero>

      <section className="py-16 md:py-24">
        <div className="container-page grid gap-14 lg:grid-cols-12">
          <div className="prose-rw lg:col-span-7">
            {service.sections.map((section, i) => (
              <section key={section.heading} className={i === 0 ? "[&>h2]:mt-0" : undefined}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-5">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </div>

          <aside className="lg:col-span-4 lg:col-start-9" aria-label="Service summary">
            <div className="rounded-xl border border-line bg-white p-7 lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
              <h2 className="display-3 text-ink">What you get</h2>
              <ul className="mt-6 space-y-3">
                {service.highlights.map((h) => (
                  <li key={h} className="flex gap-3 text-ink-2">
                    <Check size={18} aria-hidden="true" className="mt-1 shrink-0 text-timber" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 grid gap-3">
                <Link
                  href="/contact"
                  className="btn btn-ink"
                  data-track="quote_click"
                  data-section="service_sidebar_request_consultation"
                >
                  Request a consultation
                </Link>
                <a
                  href={`tel:${site.phone.e164}`}
                  className="btn btn-outline tabular-nums"
                  data-track="quote_click"
                  data-section="service_sidebar_call"
                >
                  <Phone size={16} aria-hidden="true" />
                  {site.phone.display}
                </a>
              </div>
              <p className="mt-5 text-center text-sm text-ink-3">{site.replyPromise} during business hours.</p>
            </div>
          </aside>
        </div>
      </section>

      <ProcessSteps />

      <section aria-labelledby="faq-heading" className="py-16 md:py-24">
        <div className="container-page grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="kicker">Questions</p>
            <h2 id="faq-heading" className="display-2">
              FAQs
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
            <FaqList items={service.faq} />
          </div>
        </div>
      </section>

      <section aria-labelledby="related-heading" className="border-t border-line bg-paper-2 py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 id="related-heading" className="display-2">
              Related services
            </h2>
            <Link href="/services" className="link hidden shrink-0 sm:inline">
              All services
            </Link>
          </div>
          <ul className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s, i) => (
              <li key={s.slug} data-reveal="" style={{ "--i": i } as CSSProperties}>
                <Link href={`/services/${s.slug}`} className="group block">
                  <span className="relative block aspect-[3/2] overflow-hidden rounded-lg bg-paper">
                    <SiteImage
                      src={s.heroImage}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="zoom-media object-cover"
                    />
                  </span>
                  <span className="mt-4 flex items-start justify-between gap-4">
                    <span className="font-display text-2xl leading-tight text-ink transition-colors group-hover:text-timber">
                      {s.title}
                    </span>
                    <ArrowRight size={18} aria-hidden="true" className="arrow mt-1.5 shrink-0 text-ink-3" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {relatedPosts.length > 0 && (
            <div className="mt-20 border-t border-line pt-14">
              <h2 className="display-3 mb-10">Guides on {service.primaryKeyword}</h2>
              <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
                {relatedPosts.map((p) => (
                  <PostCard key={p.id} post={p} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
