import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { JsonLd } from "@/components/seo/json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { PostCard } from "@/components/ui/post-card";
import { SiteImage } from "@/components/ui/site-image";
import { getPost, posts } from "@/content/posts";
import { services } from "@/content/services";
import { formatDate } from "@/lib/format";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Article Not Found", robots: { index: false, follow: true } };

  return buildMetadata({
    title: post.seoTitle ?? post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogImage: post.image,
    ogType: "article",
    publishedTime: post.dateISO,
    modifiedTime: post.updatedISO,
    authors: [post.author],
  });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const relatedServices = services.filter((s) => post.keywords.includes(s.primaryKeyword)).slice(0, 8);
  const mainService = services.find((s) => s.slug === post.serviceSlug);
  const morePosts = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]}
      />

      <article>
        <header className="pt-(--header-offset)">
          <div className="container-page pt-8 md:pt-12">
            <Breadcrumbs
              items={[{ name: "Home", href: "/" }, { name: "Journal", href: "/blog" }, { name: post.title }]}
            />
            <div className="intro max-w-4xl">
              <p className="kicker capitalize">{post.keywords[0] ?? "Flooring & decking"}</p>
              <h1 className="display-2 text-ink" style={{ "--d": 1 } as React.CSSProperties}>
                {post.title}
              </h1>
              <p
                className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.9375rem] text-ink-3"
                style={{ "--d": 2 } as React.CSSProperties}
              >
                <span>By the {post.author} team</span>
                <span aria-hidden="true">·</span>
                {post.updatedISO ? (
                  <span>
                    Updated <time dateTime={post.updatedISO}>{formatDate(post.updatedISO)}</time>
                  </span>
                ) : (
                  <time dateTime={post.dateISO}>{formatDate(post.dateISO)}</time>
                )}
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </p>
            </div>
          </div>
          <div className="container-page mt-10 md:mt-14">
            <div className="unveil relative aspect-[16/10] overflow-hidden rounded-lg bg-paper-2 md:aspect-[21/9]">
              <SiteImage
                src={post.image}
                altFallback={post.title}
                priority
                fill
                sizes="(max-width: 1344px) 100vw, 1344px"
                className="object-cover"
              />
            </div>
          </div>
        </header>

        <div className="container-page grid gap-14 py-14 md:py-20 lg:grid-cols-12">
          <div className="prose-rw lg:col-span-7 lg:col-start-2">
            <p className="text-xl leading-relaxed text-ink">{post.excerpt}</p>
            {post.content.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {post.sections?.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph} className="mt-5">
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
            {mainService && (
              <aside className="!mt-14 rounded-xl border border-line bg-paper-2 p-6 md:p-8" aria-label="Get help">
                <p className="font-display text-[1.75rem] leading-tight text-ink">
                  Need help with {mainService.primaryKeyword}?
                </p>
                <p className="mt-3 text-base">
                  Our team handles this across Singapore, from site survey to handover. See our{" "}
                  <Link href={`/services/${mainService.slug}`}>
                    {mainService.title.replace(/ Singapore$/, "")} service
                  </Link>
                  , or{" "}
                  <a href={`tel:${site.phone.e164}`} data-track="quote_click" data-section="blog_post_inline_call">
                    call {site.phone.display}
                  </a>{" "}
                  for a free site visit.
                </p>
              </aside>
            )}
          </div>

          <aside className="lg:col-span-3 lg:col-start-10" aria-label="Get help with this">
            <div className="space-y-8 lg:sticky lg:top-[calc(var(--header-offset)+2rem)]">
              <div className="rounded-xl border border-line bg-white p-6">
                <p className="display-3 text-[1.625rem] text-ink">Planning a project?</p>
                <p className="mt-2 text-[0.9375rem] text-ink-2">
                  Free on-site measurement and an itemised quote. {site.replyPromise}.
                </p>
                <Link
                  href="/contact"
                  className="btn btn-primary mt-5 w-full"
                  data-track="quote_click"
                  data-section="blog_post_get_quote"
                >
                  Get a free quote
                </Link>
              </div>
              {relatedServices.length > 0 && (
                <div>
                  <h2 className="mb-3 text-sm font-medium text-ink-3">Related services</h2>
                  <ul className="flex flex-wrap gap-2">
                    {relatedServices.map((s) => (
                      <li key={s.slug}>
                        <Link href={`/services/${s.slug}`} className="chip capitalize">
                          {s.primaryKeyword}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </aside>
        </div>

        <div className="container-page">
          <div className="flex border-t border-line py-8 lg:mx-[calc(100%/12)]">
            <Link href="/blog" className="group inline-flex items-center gap-2 font-medium text-ink">
              <ArrowLeft size={16} aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5" />
              Back to the journal
            </Link>
          </div>
        </div>
      </article>

      <section aria-labelledby="more-heading" className="border-t border-line bg-paper-2 py-16 md:py-24">
        <div className="container-page">
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 id="more-heading" className="display-2">
              Keep reading
            </h2>
            <Link href="/blog" className="link hidden shrink-0 items-center gap-1 sm:inline-flex">
              All articles
              <ArrowRight size={14} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-x-8 gap-y-12 md:grid-cols-3">
            {morePosts.map((p) => (
              <PostCard key={p.id} post={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
