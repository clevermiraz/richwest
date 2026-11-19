/**
 * Single source of truth for business details. Used by the UI, metadata,
 * JSON-LD, sitemap and robots so the values can never drift apart.
 */
export const site = {
  name: "Richwest Integrated",
  /** Used in page titles, where every character counts. */
  shortName: "Richwest",
  legalName: "Richwest Integrated (Pte.) Ltd.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.richwestipl.sg").replace(/\/$/, ""),
  locale: "en_SG",
  themeColor: "#f6f2ec",
  description:
    "Flooring contractor in Singapore since 2003: wooden floors, vinyl, carpet tiles, sports floors and decks for homes and offices. Free site visit: +65 9625 2205.",
  phone: {
    /** Non-breaking spaces so the number never wraps mid-way. */
    display: "+65\u00a09625\u00a02205",
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

/**
 * Primary navigation, kept to four destinations plus the quote CTA.
 * Process and FAQ stay live (they rank) and are linked from About, service
 * pages and the footer instead of the header.
 */
export const mainNav = [
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Journal", href: "/blog" },
] as const;

export interface NavLink {
  name: string;
  href: string;
}

export interface ServiceGroup {
  name: string;
  blurb: string;
  items: readonly NavLink[];
}

/** Services grouped for the header menu, the services index and the footer. */
export const serviceGroups: readonly ServiceGroup[] = [
  {
    name: "Flooring",
    blurb: "Timber, vinyl, carpet and sports systems for homes and workplaces.",
    items: [
      { name: "Wooden Floor", href: "/services/wooden-floor" },
      { name: "Parquet Flooring", href: "/services/parquet-flooring" },
      { name: "Vinyl Flooring", href: "/services/vinyl-flooring" },
      { name: "Carpet & Office Carpet Tiles", href: "/services/carpet-floor" },
      { name: "Sports Floor", href: "/services/sports-floor" },
      { name: "Sand and Varnish", href: "/services/sand-and-varnish" },
      { name: "Commercial Flooring", href: "/services/commercial-flooring-contractor" },
    ],
  },
  {
    name: "Decking & Outdoor",
    blurb: "Balconies, pool decks and rooftops built for Singapore weather.",
    items: [
      { name: "Wooden Deck", href: "/services/wooden-deck" },
      { name: "Composite Deck", href: "/services/composite-deck" },
      { name: "Composite & Timber Decking", href: "/services/composite-timber-deck" },
      { name: "Balcony Decking", href: "/services/balcony-decking-specialist" },
      { name: "Wooden Deck Varnish", href: "/services/wooden-deck-varnish" },
      { name: "Polycarbonate Roof Shelters", href: "/services/polycarbonate-roofing-shelters" },
    ],
  },
  {
    name: "Renovation",
    blurb: "Supporting works so your new floor goes down on a sound base.",
    items: [
      { name: "Home Renovation", href: "/services/home-renovation" },
      { name: "Waterproofing", href: "/services/waterproofing-services" },
    ],
  },
];

/** Flooring guides by property type (each is a full page at the site root). */
export const homeTypeGroup: ServiceGroup = {
  name: "By home type",
  blurb: "What works best in each kind of Singapore home.",
  items: [
    { name: "HDB Flooring", href: "/hdb-flooring" },
    { name: "Condo Flooring", href: "/condo-flooring" },
    { name: "Landed House Flooring", href: "/landed-house-flooring" },
  ],
};

export const companyLinks = [
  { name: "About us", href: "/about" },
  { name: "Our process", href: "/process" },
  { name: "Projects", href: "/portfolio" },
  { name: "Journal", href: "/blog" },
  { name: "FAQs", href: "/faq" },
  { name: "Contact", href: "/contact" },
] as const;

export const popularServices = [
  { name: "Wooden Floor", href: "/services/wooden-floor" },
  { name: "Vinyl Flooring", href: "/services/vinyl-flooring" },
  { name: "Composite Deck", href: "/services/composite-deck" },
  { name: "Office Carpet Tiles", href: "/services/carpet-floor" },
] as const;

/** Business hours as shown to people (structured data uses `site.hours`). */
export const hoursDisplay = [
  { label: "Mon – Fri", value: "9:00 am – 6:00 pm" },
  { label: "Saturday", value: "9:00 am – 1:00 pm" },
  { label: "Sun & PH", value: "Closed" },
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
