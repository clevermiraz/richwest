import { ArrowRight, User } from "lucide-react";
import Link from "next/link";
import { reveal } from "@/components/ui/reveal";
import { SiteImage } from "@/components/ui/site-image";
import { posts } from "@/content/posts";

export function LatestPosts() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="eyebrow">Our Latest Blog</span>
            <h2 className="heading-section text-slate-900">Insights &amp; Maintenance Tips</h2>
          </div>
          <Link
            href="/blog"
            className="rounded-full border border-slate-200 bg-white px-6 py-3 font-bold text-slate-900 shadow-sm transition-colors hover:bg-slate-50"
          >
            Read All Articles
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {posts.slice(0, 3).map((post, i) => (
            <article
              key={post.id}
              {...reveal(i)}
              className="group relative flex h-full flex-col overflow-hidden rounded-5xl border border-slate-50 bg-white shadow-[0_10px_40px_rgba(0,0,0,0.03)] transition-[translate,box-shadow] duration-700 hover:-translate-y-3 hover:shadow-[0_30px_80px_rgba(188,108,37,0.15)]"
            >
              <div className="relative h-72 overflow-hidden">
                <SiteImage
                  src={post.image}
                  altFallback={post.title}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute top-6 left-6 rounded-full bg-wood-accent px-4 py-2 text-xs font-black tracking-widest text-white uppercase shadow-xl glow-wood">
                  {post.readTime}
                </div>
              </div>
              <div className="flex grow flex-col p-10">
                <div className="mb-6 flex items-center gap-6 text-xs font-black tracking-[0.2em] text-slate-600 uppercase">
                  <span className="flex items-center gap-2">
                    <User size={14} aria-hidden="true" className="text-wood-ink" /> {post.author}
                  </span>
                </div>
                <h3 className="mb-6 line-clamp-2 text-2xl leading-tight font-black text-slate-900 transition-colors group-hover:text-wood-ink">
                  {post.title}
                </h3>
                <p className="mb-10 line-clamp-3 grow text-lg leading-relaxed font-medium text-slate-600">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group/btn inline-flex w-fit items-center gap-3 text-sm font-black tracking-widest text-wood-ink uppercase"
                >
                  Read Article
                  <span className="sr-only">: {post.title}</span>
                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                    className="transition-transform group-hover/btn:translate-x-2"
                  />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
