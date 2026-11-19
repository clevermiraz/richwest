import type { CSSProperties } from "react";
import { NewsletterForm } from "@/components/sections/newsletter-form";
import { PageHero } from "@/components/sections/page-hero";
import { JsonLd } from "@/components/seo/json-ld";
import { PostCard } from "@/components/ui/post-card";
import { posts } from "@/content/posts";
import { breadcrumbSchema, collectionPageSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site";

export const metadata = buildMetadata({
  title: "Flooring & Decking Guides for Singapore",
  description:
    "Practical guides to flooring and decking in Singapore: choosing materials, humidity, maintenance, costs and hiring the right contractor.",
  path: "/blog",
  keywords:
    "flooring blog singapore, wood flooring tips sg, vinyl flooring maintenance singapore, outdoor decking trends sg, wooden floor, wooden deck, wooden deck varnish, composite deck, sports floor, carpet floor, office carpet tiles singapore, commercial flooring contractor, flooring contractor singapore, poly carbonate roofing shelters",
});

export default function BlogPage() {
  const sorted = [...posts].sort((a, b) => b.dateISO.localeCompare(a.dateISO));
  const [lead, ...rest] = sorted;

  return (
    <>
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
        breadcrumbs={[{ name: "Home", href: "/" }, { name: "Journal" }]}
        kicker="The Richwest journal"
        title={
          <>
            Our <em className="text-timber">blog</em>
          </>
        }
        intro="Expert advice, maintenance tips, and the latest trends in flooring and decking."
      />

      <section aria-label="Articles" className="py-16 md:py-24">
        <div className="container-page">
          <PostCard post={lead} feature headingLevel="h2" className="mb-16 md:mb-24" />
          <div className="grid gap-x-8 gap-y-14 border-t border-line pt-14 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <div key={post.id} data-reveal="" style={{ "--i": i % 3 } as CSSProperties}>
                <PostCard post={post} headingLevel="h2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="newsletter-heading" className="border-t border-line bg-paper-2 py-16 md:py-24">
        <div className="container-page grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <h2 id="newsletter-heading" className="display-2">
              Subscribe to our <em className="text-timber">newsletter</em>
            </h2>
            <p className="mt-4 text-ink-2">
              Get the latest flooring tips and exclusive offers delivered straight to your inbox.
            </p>
          </div>
          <div className="lg:col-span-6">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </>
  );
}
