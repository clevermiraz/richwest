import Link from "next/link";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { PageHero } from "@/components/sections/page-hero";
import { SiteImage } from "@/components/ui/site-image";
import { JsonLd } from "@/components/seo/json-ld";
import { posts } from "@/content/posts";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Flooring & Decking Blog",
  description:
    "Flooring tips and guides for Singapore: wooden floors, vinyl, carpets, decking, and maintenance best practices.",
  path: "/blog",
  keywords:
    "flooring blog singapore, wood flooring tips sg, vinyl flooring maintenance singapore, outdoor decking trends sg, wooden floor, wooden deck, wooden deck varnish, composite deck, sports floor, carpet floor, office carpet tiles singapore, commercial flooring contractor, flooring contractor singapore, poly carbonate roofing shelters",
});

export default function BlogPage() {
  return (
    <div className="pt-(--header-offset)">
      <JsonLd
        data={[
          {
            ...collectionPageSchema("Flooring Blog & Expert Tips Singapore", "/blog", [
              "wooden floor",
              "vinyl flooring",
              "carpet floor",
              "sports floor",
              "outdoor deck",
              "composite deck",
              "wooden deck varnish",
              "poly carbonate roofing shelters",
              "commercial flooring contractor",
            ]),
            mainEntity: {
              "@type": "ItemList",
              itemListElement: posts.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/blog/${p.slug}`),
                name: p.title,
              })),
            },
          },
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blog" },
          ]),
        ]}
      />

      <PageHero
        title="Our Blog"
        intro="Expert advice, maintenance tips, and the latest trends in flooring and decking."
      />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col overflow-hidden rounded-5xl border border-slate-50 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-[translate,box-shadow] duration-700 hover:-translate-y-2 hover:shadow-[0_30px_80px_rgba(188,108,37,0.15)]"
              >
                <div className="h-64 overflow-hidden">
                  <SiteImage
                    src={post.image}
                    altFallback={post.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex grow flex-col p-10">
                  <p className="mb-4 text-xs font-black tracking-[0.2em] text-slate-600 uppercase">
                    {post.keywords[0] ?? "Flooring & Decking"} • {post.readTime}
                  </p>
                  <h2 className="mb-5 text-2xl leading-tight font-black text-slate-900">
                    <Link href={`/blog/${post.slug}`} className="transition-colors hover:text-wood-ink">
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mb-8 grow text-lg leading-relaxed text-slate-600">{post.excerpt}</p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-3 text-sm font-black tracking-widest text-wood-ink uppercase"
                  >
                    Read Article<span className="sr-only">: {post.title}</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-24">
        <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-3xl font-bold text-slate-900">Subscribe to our Newsletter</h2>
          <p className="mb-10 text-slate-600">
            Get the latest flooring tips and exclusive offers delivered straight to your inbox.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </div>
  );
}
