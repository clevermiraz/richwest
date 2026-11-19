import type { Metadata } from "next";
import { absoluteUrl, site } from "./site";

interface PageSeo {
  /** Page title without the brand suffix; the root layout template appends it. */
  title: string;
  description: string;
  /** Path beginning with "/"; used for the canonical URL and og:url. */
  path: string;
  keywords?: string | readonly string[];
  ogImage?: string;
  ogType?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
  noIndex?: boolean;
}

export const DEFAULT_OG_IMAGE = "/og-default.jpg";

/**
 * Builds per-page metadata with the canonical URL, Open Graph and Twitter
 * tags. Every indexable page should go through this helper.
 */
export function buildMetadata({
  title,
  description,
  path,
  keywords,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  publishedTime,
  authors,
  noIndex = false,
}: PageSeo): Metadata {
  const fullTitle = `${title} | ${site.name}`;
  const url = absoluteUrl(path);
  const images = [{ url: ogImage, width: 1200, height: 630, alt: title }];

  return {
    // The root layout's title template does not apply to the root page itself.
    title: path === "/" ? { absolute: fullTitle } : title,
    description,
    keywords: typeof keywords === "string" ? keywords : keywords?.join(", "),
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: true } : { index: true, follow: true },
    openGraph: {
      type: ogType,
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      images,
      ...(ogType === "article" ? { publishedTime, authors } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
