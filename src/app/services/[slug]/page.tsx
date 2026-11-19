import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { posts } from "@/content/posts";
import { getService, services } from "@/content/services";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { serviceKeywords } from "@/lib/site";

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

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();

  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 6);
  const relatedPosts = posts
    .filter((p) => (p.keywords as readonly string[]).includes(service.primaryKeyword))
    .slice(0, 3);

  return (
    <div className="pt-(--header-offset)">
      <JsonLd
        data={[
          serviceSchema(service),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
          faqSchema(service.faq),
        ]}
      />

      <PageHero
        wide
        className="bg-slate-950 py-28"
        image={service.heroImage}
        imageAlt={service.title}
        imageTreatment="overlay"
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: service.title }]}
        eyebrow={service.primaryKeyword}
        title={service.title}
        intro={service.description}
        introClassName="text-xl leading-relaxed font-medium text-white/70"
      >
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="btn btn-primary"
            data-track="quote_click"
            data-section="service_hero_get_quote"
          >
            Get a quote
          </Link>
          <Link href="/portfolio" className="btn btn-outline-light">
            View portfolio
          </Link>
        </div>
      </PageHero>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
            <div className="space-y-14 lg:col-span-2">
              {service.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="mb-6 text-2xl font-extrabold tracking-tight text-slate-900 md:text-3xl">
                    {section.heading}
                  </h2>
                  <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <aside
              className="sticky top-28 rounded-5xl border border-slate-100 bg-slate-50 p-10"
              aria-label="Service summary"
            >
              <h2 className="mb-6 text-xl font-black text-slate-900">What you get</h2>
              <ul className="space-y-4">
                {service.highlights.map((h) => (
                  <li key={h} className="flex gap-3 font-semibold text-slate-700">
                    <span aria-hidden="true" className="mt-2 h-2 w-2 shrink-0 rounded-full bg-wood-accent" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="btn btn-dark w-full"
                  data-track="quote_click"
                  data-section="service_sidebar_request_consultation"
                >
                  Request consultation
                </Link>
              </div>

              <div className="mt-10">
                <h3 className="mb-4 text-sm font-black tracking-widest text-slate-900 uppercase">Related services</h3>
                <ul className="flex flex-wrap gap-2">
                  {relatedServices.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/services/${s.slug}`} className="chip inline-block">
                        {s.title.replace(/ Singapore$/, "")}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {relatedPosts.length > 0 && (
                <div className="mt-10">
                  <h3 className="mb-4 text-sm font-black tracking-widest text-slate-900 uppercase">Related articles</h3>
                  <ul className="space-y-3">
                    {relatedPosts.map((p) => (
                      <li key={p.id}>
                        <Link
                          href={`/blog/${p.slug}`}
                          className="block font-semibold text-slate-700 transition-colors hover:text-wood-ink"
                        >
                          {p.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="heading-section mb-12 text-slate-900">FAQs</h2>
          <div className="space-y-6">
            {service.faq.map((item) => (
              <div key={item.q} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
                <h3 className="mb-3 text-xl font-semibold text-slate-900 md:text-2xl">{item.q}</h3>
                <p className="leading-relaxed text-slate-600">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
