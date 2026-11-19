import { ArrowRight } from "lucide-react";
import Link from "next/link";
import type { CSSProperties } from "react";
import { PostCard } from "@/components/ui/post-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { posts } from "@/content/posts";

/** Three most recent guides from the journal. */
export function LatestPosts() {
  const latest = [...posts].sort((a, b) => b.dateISO.localeCompare(a.dateISO)).slice(0, 3);

  return (
    <section aria-labelledby="journal-heading" className="border-t border-line py-20 md:py-28">
      <div className="container-page">
        <SectionHeading
          id="journal-heading"
          kicker="From the journal"
          title={
            <>
              Insights &amp; <em className="text-timber">maintenance tips.</em>
            </>
          }
          aside={
            <Link href="/blog" className="btn btn-outline">
              Read all articles
              <ArrowRight size={16} aria-hidden="true" className="arrow" />
            </Link>
          }
        />
        <div className="grid gap-x-8 gap-y-14 md:grid-cols-3">
          {latest.map((post, i) => (
            <div key={post.id} data-reveal="" style={{ "--i": i } as CSSProperties}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
