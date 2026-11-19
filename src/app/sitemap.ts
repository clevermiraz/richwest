import type { MetadataRoute } from "next";
import { posts } from "@/content/posts";
import { services } from "@/content/services";
import { absoluteUrl } from "@/lib/site";

/** Bump when site-wide copy changes so crawlers re-fetch static pages. */
const CONTENT_UPDATED = "2026-11-19";

type Entry = MetadataRoute.Sitemap[number];

const staticPages: [path: string, priority: number, changeFrequency: Entry["changeFrequency"]][] = [
  ["/", 1, "weekly"],
  ["/about", 0.7, "monthly"],
  ["/services", 0.9, "monthly"],
  ["/portfolio", 0.8, "monthly"],
  ["/process", 0.6, "yearly"],
  ["/blog", 0.7, "weekly"],
  ["/contact", 0.8, "yearly"],
  ["/faq", 0.6, "monthly"],
  ["/privacy", 0.2, "yearly"],
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...staticPages.map(([path, priority, changeFrequency]): Entry => ({
      url: absoluteUrl(path),
      lastModified: CONTENT_UPDATED,
      changeFrequency,
      priority,
    })),
    ...services.map((s): Entry => ({
      url: absoluteUrl(`/services/${s.slug}`),
      lastModified: CONTENT_UPDATED,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [absoluteUrl(s.heroImage)],
    })),
    ...posts.map((p): Entry => ({
      url: absoluteUrl(`/blog/${p.slug}`),
      lastModified: p.updatedISO ?? p.dateISO,
      changeFrequency: "yearly",
      priority: 0.6,
      images: [absoluteUrl(p.image)],
    })),
  ];
}
