export type IconName =
  | "Award"
  | "Building2"
  | "CalendarCheck"
  | "CircleCheck"
  | "CircleCheckBig"
  | "ClipboardList"
  | "Clock"
  | "Hammer"
  | "Layers"
  | "MessageSquare"
  | "Search"
  | "Shield"
  | "ShieldCheck"
  | "Sun"
  | "Target"
  | "Users";

export interface ServiceSection {
  heading: string;
  body: readonly string[];
}

export interface QA {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  primaryKeyword: string;
  title: string;
  seoTitle: string;
  metaDescription?: string;
  description: string;
  heroImage: string;
  highlights: readonly string[];
  sections: readonly ServiceSection[];
  faq: readonly QA[];
}

export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: readonly string[];
  dateISO: string;
  author: string;
  image: string;
  readTime: string;
  keywords: readonly string[];
  /** Shorter title for search results; the full title stays as the <h1>. */
  seoTitle?: string;
  /** Additional subheaded sections rendered after `content`. */
  sections?: readonly ServiceSection[];
  /** Service the article leads to (in-article call to action). */
  serviceSlug?: string;
  /** Last substantive revision, for dateModified and the sitemap. */
  updatedISO?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Stat {
  icon: IconName;
  value: string;
  label: string;
}

export interface ExpertiseCard {
  title: string;
  icon: IconName;
  items: readonly string[];
  image: string;
  description: string;
  href: string;
}

export interface PortfolioItem {
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface ProcessStep {
  icon: IconName;
  title: string;
  desc: string;
}

export interface Testimonial {
  name: string;
  role: string;
  initials: string;
  content: string;
  rating: number;
}
