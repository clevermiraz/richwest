import Link from "next/link";
import { SiteImage } from "@/components/ui/site-image";
import type { Post } from "@/content/types";
import { cn } from "@/lib/cn";
import { formatDate } from "@/lib/format";

interface PostCardProps {
  post: Post;
  /** Lead article: image and text side by side on large screens. */
  feature?: boolean;
  headingLevel?: "h2" | "h3";
  className?: string;
}

/** Article teaser. The whole card is one link; the title carries its name. */
export function PostCard({ post, feature = false, headingLevel: Heading = "h3", className }: PostCardProps) {
  return (
    <article
      className={cn(
        "group relative flex flex-col",
        feature && "lg:grid lg:grid-cols-12 lg:items-center lg:gap-12",
        className,
      )}
    >
      <div
        className={cn(
          "relative aspect-[3/2] overflow-hidden rounded-lg bg-paper-2",
          feature && "lg:col-span-7 lg:aspect-[4/3]",
        )}
      >
        <SiteImage
          src={post.image}
          alt=""
          fill
          priority={feature}
          sizes={feature ? "(max-width: 1024px) 100vw, 55vw" : "(max-width: 768px) 100vw, 33vw"}
          className="zoom-media object-cover"
        />
      </div>
      <div className={cn(feature && "lg:col-span-5")}>
        {feature && <p className="kicker mt-6 mb-3 lg:mt-0">Latest article</p>}
        <p className={cn("flex flex-wrap items-center gap-x-3 text-sm text-ink-3", !feature && "mt-5")}>
          <span className="capitalize">{post.keywords[0] ?? "Flooring"}</span>
          <span aria-hidden="true">·</span>
          <time dateTime={post.dateISO}>{formatDate(post.dateISO)}</time>
          <span aria-hidden="true">·</span>
          <span>{post.readTime}</span>
        </p>
        <Heading
          className={cn(
            "mt-2 font-display text-ink transition-colors group-hover:text-timber",
            feature ? "text-[clamp(1.875rem,1.3rem+1.8vw,3rem)] leading-[1.1]" : "text-[1.5rem] leading-[1.18]",
          )}
        >
          <Link href={`/blog/${post.slug}`} className="after:absolute after:inset-0">
            {post.title}
          </Link>
        </Heading>
        {feature && <p className="mt-4 leading-relaxed text-ink-2">{post.excerpt}</p>}
      </div>
    </article>
  );
}
