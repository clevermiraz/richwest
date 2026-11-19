/**
 * Single source of truth for business details. Used by the UI, metadata,
 * JSON-LD, sitemap and robots so the values can never drift apart.
 */
export const site = {
  name: "Richwest Integrated",
  legalName: "Richwest Integrated (Pte.) Ltd.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.richwestipl.sg").replace(/\/$/, ""),
  locale: "en_SG",
  themeColor: "#0f172a",
  description:
    "Get reliable flooring solutions in Singapore from Richwest Integrated. Quality flooring services for residential and commercial spaces. Contact us today!",
  phone: {
    display: "+65 9625 2205",
    e164: "+6596252205",
  },
  whatsapp: "https://wa.me/6596252205",
  email: "info@richwestipl.sg",
  address: {
    street: "43J Paya Lebar Cres",
    locality: "Singapore",
    postalCode: "536108",
    country: "SG",
    full: "43J Paya Lebar Cres, Singapore 536108",
    mapsUrl: "https://maps.google.com/?q=43J+Paya+Lebar+Cres,+Singapore+536108",
  },
  geo: { latitude: 1.3306099, longitude: 103.8894966 },
  social: {
    instagram: "https://www.instagram.com/richwest_integrated_pte_ltd",
    facebook: "https://www.facebook.com/Richwestpte",
  },
  googleReviews: "https://share.google/x2q2fuKCcyZdQk4KQ",
  replyPromise: "We reply within 1 hour",
  foundedYear: 2003,
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "18:00" },
    { days: ["Saturday"], opens: "09:00", closes: "13:00" },
  ],
  analytics: {
    gaId: process.env.NEXT_PUBLIC_GA_ID ?? "G-TG7ED64M9P",
    gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "GTM-TVVJ8VGD",
    adsConversion: process.env.NEXT_PUBLIC_ADS_CONVERSION ?? "AW-17511777226/eABaCILkkYkcEMqHop5B",
    metaPixelId: process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "1402613441524404",
  },
  googleSiteVerification: "FSzTP0cK5Fm0YTNscs-oWCCRxy-yAPWk1nJoz-AlSiM",
} as const;

export const absoluteUrl = (path = "/") => `${site.url}${path.startsWith("/") ? path : `/${path}`}`;

export const mainNav = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Process", href: "/process" },
  { name: "Blog", href: "/blog" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
] as const;

export const footerQuickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
] as const;

export const footerServiceLinks = [
  { name: "Wooden Floor", href: "/services/wooden-floor" },
  { name: "Vinyl Flooring", href: "/services/vinyl-flooring" },
  { name: "Composite Deck", href: "/services/composite-deck" },
  { name: "Wooden Deck Varnish", href: "/services/wooden-deck-varnish" },
  { name: "Office Carpet Tiles", href: "/services/carpet-floor" },
  { name: "Polycarbonate Shelters", href: "/services/polycarbonate-roofing-shelters" },
] as const;

export const popularServices = [
  { name: "Wooden Floor", href: "/services/wooden-floor" },
  { name: "Vinyl Flooring", href: "/services/vinyl-flooring" },
  { name: "Composite Deck", href: "/services/composite-deck" },
  { name: "Office Carpet Tiles", href: "/services/carpet-floor" },
] as const;

/** Keywords shared by every service page, appended after the page's own keyword. */
export const serviceKeywords = [
  "flooring contractor singapore",
  "commercial flooring contractor",
  "vinyl flooring",
  "wooden floor",
  "wooden deck",
  "outdoor deck",
  "composite deck",
  "composite timber deck",
  "wooden deck varnish",
  "sports floor",
  "carpet floor",
  "office carpet tiles singapore",
  "balcony decking specialist",
  "poly carbonate roofing shelters",
];
