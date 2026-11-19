import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { SiteImage } from "@/components/ui/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { getPost, posts } from "@/content/posts";
import { services } from "@/content/services";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const post = getPost((await params).slug);
  if (!post) return { title: "Article Not Found", robots: { index: false, follow: true } };

  return buildMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`,
    keywords: post.keywords,
    ogImage: post.image,
    ogType: "article",
    publishedTime: post.dateISO,
    authors: [post.author],
  });
}

const dateFormatter = new Intl.DateTimeFormat("en-SG", {
  year: "numeric",
  month: "short",
  day: "2-digit",
  timeZone: "Asia/Singapore",
});

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const relatedServices = services.filter((s) => post.keywords.includes(s.primaryKeyword)).slice(0, 8);

  return (
    <div className="pt-(--header-offset)">
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

      <article className="bg-white">
        <header className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0 opacity-25">
            <SiteImage
              src={post.image}
              altFallback={post.title}
              priority
              sizes="100vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl animate-fade-up px-4 py-20 sm:px-6 lg:px-8">
            <Breadcrumbs
              tone="light"
              items={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title }]}
            />
            <p className="mb-5 text-xs font-black tracking-[0.3em] text-wood-light uppercase">
              {post.keywords[0] ?? "Flooring & Decking"}
            </p>
            <h1 className="heading-page mb-6">{post.title}</h1>
            <p className="font-semibold text-white/70">
              <time dateTime={post.dateISO}>{dateFormatter.format(new Date(post.dateISO))}</time>
              <span className="mx-3" aria-hidden="true">
                •
              </span>
              <span>{post.readTime}</span>
              <span className="mx-3" aria-hidden="true">
                •
              </span>
              <span>{post.author}</span>
            </p>
          </div>
        </header>

        <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-slate-700">{post.excerpt}</p>
            {post.content.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-slate-700">
                {paragraph}
              </p>
            ))}
          </div>

          {relatedServices.length > 0 && (
            <aside className="mt-14 border-t border-slate-100 pt-10" aria-labelledby="related-services">
              <h2 id="related-services" className="mb-4 text-sm font-black tracking-widest text-slate-900 uppercase">
                Related services
              </h2>
              <ul className="flex flex-wrap gap-2">
                {relatedServices.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`} className="chip inline-block">
                      {s.primaryKeyword}
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-slate-100 pt-10 sm:flex-row sm:items-center">
            <Link href="/blog" className="font-bold text-slate-700 transition-colors hover:text-wood-ink">
              Back to Blog
            </Link>
            <Link
              href="/contact"
              className="btn btn-primary"
              data-track="quote_click"
              data-section="blog_post_get_quote"
            >
              Get a quote
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
