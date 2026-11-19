// Content extracted from the original richwestipl.sg build. Edit here to change site copy.
import type { ExpertiseCard, PortfolioItem, ProcessStep, Stat, Testimonial } from "./types";

export const hero = {
  headline: "Your Premium Flooring Partner in Singapore.",
  subheadline:
    "Complete flooring solutions for homeowners and businesses across Singapore: wooden floors, outdoor decking, vinyl flooring, and more, installed with expert workmanship and clean finishing.",
  backgroundImageUrl: "/images/wooden-floor-hallway.webp",
};

export const stats: readonly Stat[] = [
  {
    icon: "CalendarCheck",
    value: "Since 2003",
    label: "Established",
  },
  {
    icon: "CircleCheckBig",
    value: "1,000+",
    label: "Projects Delivered",
  },
  {
    icon: "Award",
    value: "ACRA",
    label: "Registered Company",
  },
  {
    icon: "Building2",
    value: "HDB · Condo",
    label: "& Commercial",
  },
];

export const expertise: readonly ExpertiseCard[] = [
  {
    title: "Flooring Solutions",
    items: ["Wooden Floor", "Vinyl Flooring", "Carpet Floor", "Sports Floor"],
    image: "/images/wooden-floor-hallway.webp",
    description:
      "Premium flooring for HDB, condos, and commercial spaces in Singapore. Wooden floors, vinyl, carpet, and sports floor systems installed with expert site prep and clean finishing.",
    href: "/services",
    icon: "Layers",
  },
  {
    title: "Outdoor Decking",
    items: ["Wooden Deck", "Wooden Deck Varnish", "Composite Deck", "Composite Timber Deck", "Outdoor Deck"],
    image: "/images/composite-deck-balcony-sg.webp",
    description:
      "Outdoor decking for balconies, patios, and rooftops, built for Singapore's sun and rain with proper drainage, ventilation, and safe edge detailing.",
    href: "/services/wooden-deck",
    icon: "Sun",
  },
  {
    title: "Commercial & Specialist",
    items: ["Sports Floor", "Poly Carbonate Roofing Shelters", "Office Carpet Tiles"],
    image: "/images/sports-court-completed.webp",
    description:
      "Commercial-grade sports floors, polycarbonate roofing shelters, and office carpet tile installation, specified and delivered for Singapore's commercial and institutional spaces.",
    href: "/services/commercial-flooring-contractor",
    icon: "Hammer",
  },
];

export const portfolio: readonly PortfolioItem[] = [
  {
    title: "Wooden Floor Installation",
    category: "Wooden Floor",
    image: "/images/wooden-floor-hallway.webp",
    href: "/services/wooden-floor",
  },
  {
    title: "Vinyl Flooring (SPC/LVT)",
    category: "Vinyl Flooring",
    image: "/images/vinyl-floor-bedroom.webp",
    href: "/services/vinyl-flooring",
  },
  {
    title: "Commercial Office Vinyl Floor",
    category: "Commercial Flooring",
    image: "/images/commercial-vinyl-office.webp",
    href: "/services/commercial-flooring-contractor",
  },
  {
    title: "Composite Timber Deck Balcony, Singapore",
    category: "Composite Timber Decking",
    image: "/images/composite-deck-balcony-sg.webp",
    href: "/services/composite-timber-deck",
  },
  {
    title: "Composite Deck Around Pool",
    category: "Outdoor Deck",
    image: "/images/composite-deck-pool.webp",
    href: "/services/composite-deck",
  },
  {
    title: "Sports Court Flooring Installation",
    category: "Sports Floor",
    image: "/images/sports-court-completed.webp",
    href: "/services/sports-floor",
  },
];

export const processSteps: readonly ProcessStep[] = [
  {
    icon: "MessageSquare",
    title: "Consultation",
    desc: "A detailed discussion to understand your vision, needs, and budget before anything else.",
  },
  {
    icon: "Search",
    title: "Site Survey",
    desc: "On-site measurement and subfloor assessment to recommend the right system.",
  },
  {
    icon: "ClipboardList",
    title: "Proposal",
    desc: "A transparent, itemised quotation with material samples for your selection.",
  },
  {
    icon: "Hammer",
    title: "Installation",
    desc: "In-house craftsmen execute with attention to detail, transitions, and clean finishing.",
  },
  {
    icon: "CircleCheck",
    title: "Handover",
    desc: "Final inspection with you to ensure every area meets our quality standards.",
  },
];

export const testimonials: readonly Testimonial[] = [
  {
    name: "Adrian Tan",
    role: "Homeowner, Sentosa Cove",
    initials: "AT",
    content:
      "Richwest installed composite timber decking for our balcony and the finish was excellent. They planned the drainage properly and it has held up perfectly through heavy rain. Would strongly recommend.",
    rating: 5,
  },
  {
    name: "Sarah Lim",
    role: "Interior Designer",
    initials: "SL",
    content:
      "As a designer I am very particular about flooring finishes. Richwest's vinyl flooring installation was clean and precise. Skirting, transitions, and edge detailing were all done properly. My go-to for residential projects.",
    rating: 5,
  },
  {
    name: "Marcus Wong",
    role: "Facilities Manager, Commercial Office",
    initials: "MW",
    content:
      "We engaged Richwest for office carpet tiles across two floors. They worked over a weekend to avoid disrupting our operations and the result was clean and professional. Timely, coordinated, no rework needed.",
    rating: 5,
  },
];

export const contactServiceOptions = [
  "Wooden Floor",
  "Vinyl Flooring",
  "Carpet Floor / Office Carpet Tiles",
  "Sports Floor",
  "Wooden Deck / Outdoor Deck",
  "Composite Deck / Composite Timber Deck",
  "Wooden Deck Varnish",
  "Polycarbonate Roofing Shelters",
  "Commercial Flooring Contractor",
  "Other",
] as const;

/** The eight services featured on the homepage index, with a one-line pitch each. */
export const featuredServices = [
  {
    name: "Wooden Floor",
    href: "/services/wooden-floor",
    group: "Flooring",
    tagline: "Engineered and solid timber, installed with moisture checks for Singapore humidity.",
    image: "/images/wooden-floor-living.webp",
  },
  {
    name: "Vinyl Flooring",
    href: "/services/vinyl-flooring",
    group: "Flooring",
    tagline: "Water-resistant SPC and LVT planks for HDB flats, condos and offices.",
    image: "/images/vinyl-floor-bedroom.webp",
  },
  {
    name: "Parquet Flooring",
    href: "/services/parquet-flooring",
    group: "Flooring",
    tagline: "Herringbone and chevron patterns laid and finished by hand.",
    image: "/images/wooden-floor-herringbone.webp",
  },
  {
    name: "Carpet & Office Carpet Tiles",
    href: "/services/carpet-floor",
    group: "Commercial",
    tagline: "Quiet, replaceable carpet tiles fitted after hours so work carries on.",
    image: "/images/commercial-vinyl-office.webp",
  },
  {
    name: "Sports Floor",
    href: "/services/sports-floor",
    group: "Commercial",
    tagline: "Indoor courts with the right shock absorption and line marking.",
    image: "/images/sports-floor-badminton.webp",
  },
  {
    name: "Composite Deck",
    href: "/services/composite-deck",
    group: "Outdoor",
    tagline: "Low-maintenance boards for balconies, pools and rooftops.",
    image: "/images/composite-deck-pool.webp",
  },
  {
    name: "Wooden Deck",
    href: "/services/wooden-deck",
    group: "Outdoor",
    tagline: "Natural timber decks with proper drainage, ventilation and varnish care.",
    image: "/images/outdoor-deck-composite.webp",
  },
  {
    name: "Polycarbonate Roof Shelters",
    href: "/services/polycarbonate-roofing-shelters",
    group: "Outdoor",
    tagline: "Covered walkways and patios that keep the rain off and the light in.",
    image: "/images/composite-deck-rooftop.webp",
  },
] as const;

/** Every project photo for the portfolio gallery, grouped by what it shows. */
export const gallery = [
  { image: "/images/wooden-floor-hallway.webp", category: "Wooden Floor", href: "/services/wooden-floor" },
  { image: "/images/wooden-floor-herringbone.webp", category: "Parquet", href: "/services/parquet-flooring" },
  {
    image: "/images/composite-deck-balcony-sg.webp",
    category: "Decking",
    href: "/services/balcony-decking-specialist",
  },
  { image: "/images/wooden-floor-living.webp", category: "Wooden Floor", href: "/services/wooden-floor" },
  { image: "/images/sports-court-completed.webp", category: "Sports Floor", href: "/services/sports-floor" },
  { image: "/images/vinyl-floor-bedroom.webp", category: "Vinyl", href: "/services/vinyl-flooring" },
  { image: "/images/composite-deck-pool.webp", category: "Decking", href: "/services/composite-deck" },
  {
    image: "/images/commercial-vinyl-office.webp",
    category: "Commercial",
    href: "/services/commercial-flooring-contractor",
  },
  { image: "/images/wooden-floor-corridor.webp", category: "Wooden Floor", href: "/services/wooden-floor" },
  { image: "/images/composite-deck-rooftop.webp", category: "Decking", href: "/services/composite-timber-deck" },
  { image: "/images/sports-floor-badminton.webp", category: "Sports Floor", href: "/services/sports-floor" },
  { image: "/images/luxury-interior-wood.webp", category: "Wooden Floor", href: "/services/wooden-floor" },
  { image: "/images/outdoor-deck-composite.webp", category: "Decking", href: "/services/wooden-deck" },
  { image: "/images/wooden-floor-bedroom.webp", category: "Wooden Floor", href: "/services/wooden-floor" },
  { image: "/images/composite-deck-installation.webp", category: "Installation", href: "/services/composite-deck" },
  { image: "/images/sports-floor-installation.webp", category: "Installation", href: "/services/sports-floor" },
] as const;
