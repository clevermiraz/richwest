import type { FaqItem, Post, QA, Service } from "@/content/types";
import { absoluteUrl, site } from "./site";

/** schema.org builders. Output is rendered by <JsonLd />. */

const BUSINESS_ID = absoluteUrl("/#business");
const ORGANIZATION_REF = { "@type": "Organization", "@id": BUSINESS_ID, name: site.name, url: absoluteUrl("/") };

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  addressLocality: site.address.locality,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
};

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": BUSINESS_ID,
    name: site.name,
    legalName: site.legalName,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/logo-512.png"),
    image: absoluteUrl("/images/wooden-floor-hallway.webp"),
    telephone: site.phone.display.replace(/\u00a0/g, " "),
    email: site.email,
    priceRange: "$$",
    foundingDate: String(site.foundedYear),
    address: postalAddress,
    geo: { "@type": "GeoCoordinates", latitude: site.geo.latitude, longitude: site.geo.longitude },
    hasMap: site.address.mapsUrl,
    sameAs: [site.social.instagram, site.social.facebook],
    openingHoursSpecification: site.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days.length === 1 ? h.days[0] : h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    areaServed: { "@type": "Country", name: "Singapore" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Flooring and Decking Services",
      itemListElement: [
        "Wooden Floor",
        "Vinyl Flooring",
        "Carpet Floor & Office Carpet Tiles",
        "Sports Floor",
        "Wooden Deck & Outdoor Decking",
        "Composite Deck & Composite Timber Deck",
        "Wooden Deck Varnish & Maintenance",
        "Polycarbonate Roofing Shelters",
      ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
    },
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": absoluteUrl("/#website"),
    name: site.name,
    url: absoluteUrl("/"),
    inLanguage: "en-SG",
    publisher: { "@id": BUSINESS_ID },
  };
}

export function breadcrumbSchema(items: readonly { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqSchema(items: readonly (QA | FaqItem)[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => {
      const [q, a] = "q" in item ? [item.q, item.a] : [item.question, item.answer];
      return { "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } };
    }),
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.primaryKeyword,
    description: service.metaDescription ?? service.description,
    url: absoluteUrl(`/services/${service.slug}`),
    image: absoluteUrl(service.heroImage),
    areaServed: { "@type": "Country", name: "Singapore" },
    provider: ORGANIZATION_REF,
  };
}

export function articleSchema(post: Post) {
  const url = absoluteUrl(`/blog/${post.slug}`);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: [absoluteUrl(post.image)],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    keywords: post.keywords.join(", "),
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      "@id": BUSINESS_ID,
      name: site.name,
      url: absoluteUrl("/"),
      logo: { "@type": "ImageObject", url: absoluteUrl("/logo-512.png") },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}

export function collectionPageSchema(name: string, path: string, about: readonly string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    url: absoluteUrl(path),
    about,
    isPartOf: { "@id": absoluteUrl("/#website") },
  };
}

export function webPageSchema(type: "AboutPage" | "ContactPage" | "WebPage", name: string, path: string, extra = {}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    url: absoluteUrl(path),
    isPartOf: { "@id": absoluteUrl("/#website") },
    ...extra,
  };
}

export const contactPageEntity = {
  mainEntity: {
    ...ORGANIZATION_REF,
    email: site.email,
    telephone: site.phone.display.replace(/\u00a0/g, " "),
    address: postalAddress,
  },
};
