import type { QA } from "./types";

/**
 * Flooring guides by property type. Each page answers the questions specific
 * to that kind of home (rules, rooms, materials, timing), so the content is
 * genuinely different from page to page rather than a swapped keyword.
 *
 * Copy is general guidance. It does not state prices, warranty periods or
 * regulatory registrations that the business has not confirmed.
 */
export interface PropertyRecommendation {
  /** Service page slug the recommendation links to. */
  slug: string;
  name: string;
  why: string;
}

export interface PropertyRoom {
  room: string;
  advice: string;
}

export interface PropertyPage {
  slug: string;
  /** Short label for navigation. */
  navLabel: string;
  primaryKeyword: string;
  seoTitle: string;
  metaDescription: string;
  h1: string;
  kicker: string;
  intro: string;
  heroImage: string;
  heroCaption: string;
  /** Opening section: what makes this property type different. */
  context: { heading: string; body: readonly string[] };
  recommendations: { heading: string; intro: string; items: readonly PropertyRecommendation[] };
  rooms: { heading: string; items: readonly PropertyRoom[] };
  planning: { heading: string; body: readonly string[] };
  steps: readonly { title: string; desc: string }[];
  costFactors: readonly string[];
  faq: readonly QA[];
  /** Journal articles to suggest (by slug). */
  relatedPosts: readonly string[];
}

export const propertyPages: readonly PropertyPage[] = [
  {
    slug: "hdb-flooring",
    navLabel: "HDB flats",
    primaryKeyword: "hdb flooring",
    seoTitle: "HDB Flooring Singapore: Vinyl, Wood & More",
    metaDescription:
      "Flooring for HDB flats in Singapore: vinyl over existing tiles, engineered wood and parquet restoration for BTO and resale homes. Call +65 9625 2205.",
    h1: "HDB Flooring Singapore",
    kicker: "Flooring for BTO and resale flats",
    intro:
      "New flooring for HDB flats across Singapore, from first-time BTO homes to older resale units. Most HDB projects are done in a few days, often without hacking the existing tiles.",
    heroImage: "/images/vinyl-floor-bedroom.webp",
    heroCaption: "SPC vinyl flooring in a bedroom",
    context: {
      heading: "What Makes HDB Flooring Different",
      body: [
        "Most HDB flats come with ceramic or homogeneous tiles in the living areas, and resale flats may still have original parquet, terrazzo or older tiles. Removing tiles is noisy, dusty and adds days to a project, so many owners choose a new floor that can be laid over what is already there.",
        "HDB flats also have shared walls, corridors and lifts. Planning for noise, protecting common areas and working within HDB's renovation rules matter as much as the floor itself.",
      ],
    },
    recommendations: {
      heading: "The Best Flooring for HDB Flats",
      intro: "These are the floors we install most often in HDB homes, and why owners choose them.",
      items: [
        {
          slug: "vinyl-flooring",
          name: "SPC vinyl flooring",
          why: "The most popular choice for HDB living rooms and bedrooms. It goes over existing tiles, is water-resistant and quiet underfoot, and is quick to install.",
        },
        {
          slug: "wooden-floor",
          name: "Engineered wooden floor",
          why: "For a warmer, natural timber look in bedrooms and living areas. Engineered boards handle humidity far better than solid timber.",
        },
        {
          slug: "parquet-flooring",
          name: "Parquet restoration",
          why: "Many older resale flats still have their original parquet under carpet or vinyl. It can often be repaired, sanded and refinished instead of replaced.",
        },
        {
          slug: "sand-and-varnish",
          name: "Sanding and varnish",
          why: "Brings scratched, dull or yellowed timber floors back to life without the cost of new flooring.",
        },
      ],
    },
    rooms: {
      heading: "Room by Room in an HDB Flat",
      items: [
        {
          room: "Living and dining",
          advice:
            "SPC vinyl or engineered wood laid over the existing tiles. We run the floor continuously through open-plan spaces for a clean, seamless look.",
        },
        {
          room: "Bedrooms",
          advice:
            "Vinyl or engineered wood. Many owners upgrade bedrooms first because they are quick to clear and the change is immediately noticeable.",
        },
        {
          room: "Kitchen",
          advice:
            "Water-resistant SPC vinyl works in most HDB kitchens. Tiles remain the safer choice right around the sink and in the service yard.",
        },
        {
          room: "Bathrooms and service yard",
          advice: "Keep these tiled. Wet areas need waterproofing and tiles rather than vinyl or timber.",
        },
      ],
    },
    planning: {
      heading: "HDB Renovation Rules and Planning",
      body: [
        "HDB sets rules on renovation works, including permitted working hours and what needs approval. We check what applies to your flat and plan the work so it stays within those rules.",
        "We protect the lift and corridor during delivery and installation, and keep noisy work to the permitted hours. For new BTO flats, flooring is usually one of the first jobs after key collection, before carpentry and furniture arrive.",
      ],
    },
    steps: [
      {
        title: "Site visit",
        desc: "We measure every room and check the existing tiles for hollow spots, cracks and level differences.",
      },
      {
        title: "Choose your floor",
        desc: "You see samples in your own light, and we recommend the right system for each room.",
      },
      {
        title: "Itemised quotation",
        desc: "Floor area, preparation, skirting and trims are listed so you can compare like for like.",
      },
      {
        title: "Installation",
        desc: "Most HDB flats are completed in one to three working days, room by room if you are living in.",
      },
      { title: "Walk-through", desc: "We check every room with you and leave care instructions for your new floor." },
    ],
    costFactors: [
      "Total floor area and number of rooms",
      "Material and product range (SPC, LVT or engineered wood)",
      "Repairs to hollow or cracked tiles before overlaying",
      "Skirting, door undercuts and transition strips",
      "Furniture moving and whether the flat is occupied",
    ],
    faq: [
      {
        q: "Can I lay new flooring over my HDB tiles?",
        a: "Usually, yes. SPC vinyl and engineered wood floating floors can go over tiles that are firmly bonded and level. Hollow or cracked tiles are fixed first.",
      },
      {
        q: "Will the new floor affect my doors?",
        a: "An overlay raises the floor slightly, so some doors need to be trimmed at the bottom. We check door clearance during the site visit and include it in the quotation.",
      },
      {
        q: "How long does flooring take for a 4-room HDB flat?",
        a: "Most HDB flats take one to three working days once materials are on site, depending on the area and how much preparation is needed.",
      },
      {
        q: "Should I install flooring before or after carpentry in my BTO?",
        a: "Usually before. Laying the floor first gives a continuous finish under wardrobes and cabinets. We can coordinate timing with your carpentry contractor.",
      },
      {
        q: "Is vinyl flooring noisy for neighbours below?",
        a: "Vinyl is quieter than tiles underfoot, and an acoustic underlay reduces footstep noise further. We can recommend one if noise is a concern.",
      },
    ],
    relatedPosts: [
      "vinyl-flooring-spc-vs-lvt-singapore",
      "flooring-contractor-singapore-checklist",
      "wooden-floor-maintenance-singapore-humidity",
    ],
  },

  {
    slug: "condo-flooring",
    navLabel: "Condominiums",
    primaryKeyword: "condo flooring",
    seoTitle: "Condo Flooring Singapore: Wood, Vinyl, Decks",
    metaDescription:
      "Flooring for Singapore condominiums: engineered wood, vinyl and parquet indoors, plus balcony decking, planned around MCST rules. Call +65 9625 2205.",
    h1: "Condo Flooring Singapore",
    kicker: "Flooring for condominiums and apartments",
    intro:
      "Indoor flooring and balcony decking for condominiums across Singapore, planned around your MCST's renovation rules and finished to the standard of the rest of your home.",
    heroImage: "/images/luxury-interior-wood.webp",
    heroCaption: "Wide-plank wooden flooring, condominium living room",
    context: {
      heading: "What Makes Condo Flooring Different",
      body: [
        "Every condominium is run by its own management corporation (MCST), with by-laws covering renovation hours, notification, deposits and sometimes the type of flooring allowed. Getting this right before work starts avoids delays and disputes.",
        "Condos often have marble or large-format tiles in living areas, balconies with glass railings and drainage outlets, and neighbours directly below who will hear hard floors. Each of these shapes the floor we recommend.",
      ],
    },
    recommendations: {
      heading: "The Best Flooring for Condominiums",
      intro: "The floors and finishes we install most often in condominium homes.",
      items: [
        {
          slug: "wooden-floor",
          name: "Engineered wooden floor",
          why: "The most requested upgrade for condo living rooms and bedrooms. Stable in humidity and suitable for large open spans.",
        },
        {
          slug: "vinyl-flooring",
          name: "SPC and LVT vinyl",
          why: "A practical, water-resistant option for families, rental units and kitchens, laid over existing tiles in most cases.",
        },
        {
          slug: "balcony-decking-specialist",
          name: "Balcony decking",
          why: "Turns a bare balcony into usable outdoor space, with a raised system that keeps the drains accessible.",
        },
        {
          slug: "parquet-flooring",
          name: "Herringbone and parquet",
          why: "A classic pattern for living and dining areas that adds character to a modern apartment.",
        },
      ],
    },
    rooms: {
      heading: "Room by Room in a Condominium",
      items: [
        {
          room: "Living and dining",
          advice:
            "Engineered wood or herringbone parquet for a premium finish, often over the original tiles or marble. We match levels at the balcony door.",
        },
        {
          room: "Bedrooms",
          advice:
            "Engineered wood or vinyl, with an acoustic underlay where your MCST requires one or neighbours are sensitive to noise.",
        },
        {
          room: "Balcony",
          advice:
            "Composite or timber decking on a raised, removable frame, with gaps for drainage and access to the floor trap.",
        },
        {
          room: "Kitchen and wet areas",
          advice: "SPC vinyl in open kitchens; bathrooms and yards stay tiled and waterproofed.",
        },
      ],
    },
    planning: {
      heading: "MCST Rules and Planning",
      body: [
        "Most condominiums ask owners to submit a renovation application or notification before work starts, and many require a deposit and set working hours. Some by-laws also require an acoustic underlay under hard floors. We help you prepare the information your management usually asks for.",
        "We book the service lift, protect lift interiors and common corridors, and keep the work within the approved hours so there are no complaints from neighbours or management.",
      ],
    },
    steps: [
      {
        title: "Site visit",
        desc: "We measure, check the existing floor and balcony drainage, and note any MCST requirements.",
      },
      {
        title: "MCST paperwork",
        desc: "We provide the details your management usually needs for the renovation application.",
      },
      {
        title: "Itemised quotation",
        desc: "Indoor flooring and balcony decking are priced separately so you can phase the work.",
      },
      { title: "Installation", desc: "Scheduled within approved hours, with lift and corridor protection throughout." },
      { title: "Walk-through", desc: "We check the floor, balcony levels and drains with you before handover." },
    ],
    costFactors: [
      "Floor area, and whether balcony decking is included",
      "Material: engineered wood, vinyl, parquet or composite decking",
      "Acoustic underlay if your MCST or neighbours require it",
      "Preparation over marble or large-format tiles",
      "Lift booking, protection and working-hour constraints",
    ],
    faq: [
      {
        q: "Do I need MCST approval to change my condo flooring?",
        a: "Most condominiums require a renovation application or notification before work starts. We help you prepare the information your management usually asks for.",
      },
      {
        q: "Does my condo require an acoustic underlay?",
        a: "Some MCST by-laws require an acoustic underlay under hard floors to reduce noise for the unit below. Check your by-laws, or we can help you confirm with the management office.",
      },
      {
        q: "Can wooden flooring go over marble?",
        a: "Often, yes. If the marble is level and firmly bonded, an engineered floating floor can be laid over it, which avoids hacking.",
      },
      {
        q: "Can you deck my balcony without blocking the drains?",
        a: "Yes. We use a raised, removable system that leaves the floor trap accessible and lets water drain freely underneath.",
      },
      {
        q: "Can you work while my condo unit is tenanted or occupied?",
        a: "Yes. We can phase work room by room and agree times with you, your tenant and the management.",
      },
    ],
    relatedPosts: [
      "outdoor-decking-singapore-balcony-pool",
      "composite-deck-vs-composite-timber-deck",
      "vinyl-flooring-spc-vs-lvt-singapore",
    ],
  },

  {
    slug: "landed-house-flooring",
    navLabel: "Landed homes",
    primaryKeyword: "landed house flooring",
    seoTitle: "Landed House Flooring Singapore: Indoor & Out",
    metaDescription:
      "Flooring for landed homes in Singapore: solid and engineered wood, parquet, staircases, outdoor decks and car porch shelters. Call +65 9625 2205.",
    h1: "Landed House Flooring Singapore",
    kicker: "Terrace, semi-detached and bungalow homes",
    intro:
      "Indoor floors, staircases and outdoor spaces for terrace houses, semi-detached homes and bungalows across Singapore, planned as one project by one team.",
    heroImage: "/images/wooden-floor-living.webp",
    heroCaption: "Wide-plank wooden flooring, landed home living room",
    context: {
      heading: "What Makes Landed Home Flooring Different",
      body: [
        "Landed homes have more of everything: larger floor areas across several levels, staircases, and outdoor spaces such as patios, roof terraces, pools and car porches. A good result comes from planning them together so materials and levels flow from room to room.",
        "Ground floors sit closer to the earth, so moisture from below needs more attention than in an apartment. We test and, where needed, add a moisture barrier before laying timber.",
      ],
    },
    recommendations: {
      heading: "The Best Flooring for Landed Homes",
      intro: "The indoor and outdoor finishes we install most often in landed homes.",
      items: [
        {
          slug: "wooden-floor",
          name: "Solid and engineered wood",
          why: "Solid timber suits landed homes where you want to sand and refinish the floor over many years. Engineered boards suit large ground-floor spans.",
        },
        {
          slug: "parquet-flooring",
          name: "Parquet",
          why: "Herringbone and chevron patterns for living and dining rooms, or restoration of original parquet in older houses.",
        },
        {
          slug: "composite-deck",
          name: "Outdoor and pool decking",
          why: "Composite or timber decks for patios, pool surrounds and roof terraces, built with proper drainage and ventilation.",
        },
        {
          slug: "polycarbonate-roofing-shelters",
          name: "Polycarbonate shelters",
          why: "Covers car porches, side passages and patios so they stay usable in heavy rain while letting light through.",
        },
      ],
    },
    rooms: {
      heading: "Area by Area in a Landed Home",
      items: [
        {
          room: "Living and dining",
          advice: "Solid wood, engineered wood or parquet, with a moisture check and barrier on the ground floor.",
        },
        {
          room: "Staircases",
          advice:
            "Timber treads and nosings matched to the floors above and below, finished for grip and durability on the most-used surface in the house.",
        },
        {
          room: "Bedrooms and upper floors",
          advice: "Engineered wood or vinyl, with matching thresholds so every level looks consistent.",
        },
        {
          room: "Outdoors",
          advice:
            "Composite or timber decking for patios, pools and roof terraces, and polycarbonate shelters for car porches and walkways.",
        },
      ],
    },
    planning: {
      heading: "Planning a Landed Home Project",
      body: [
        "Because the scope is larger, we plan the work in stages: indoor floors, staircase and outdoor areas can be scheduled together or one after another to suit your budget and move-in date.",
        "If your project is part of a larger renovation or A&A works, we coordinate with your main contractor or designer so floors go down after the messy trades and are protected until handover.",
      ],
    },
    steps: [
      { title: "Site visit", desc: "We measure every level, test ground-floor moisture and look at outdoor drainage." },
      {
        title: "Plan the scope",
        desc: "Indoor, staircase and outdoor work are planned together so materials and levels flow.",
      },
      {
        title: "Itemised quotation",
        desc: "Each area is priced separately so you can stage the project if you prefer.",
      },
      {
        title: "Installation",
        desc: "Floors, stairs and outdoor areas installed by our own crew, protected until handover.",
      },
      { title: "Walk-through", desc: "We review every area with you and leave a care plan for timber and decking." },
    ],
    costFactors: [
      "Total area across all levels",
      "Timber species, solid versus engineered, and plank or parquet pattern",
      "Ground-floor moisture barrier and levelling",
      "Number of staircase treads and nosings",
      "Outdoor decking or shelters, and any drainage or waterproofing work",
    ],
    faq: [
      {
        q: "Is solid wood a good choice for a landed home?",
        a: "Yes, especially on upper floors. On the ground floor we test for moisture first and add a barrier where needed, or recommend engineered wood for large spans.",
      },
      {
        q: "Can you do the staircase as well as the floors?",
        a: "Yes. We install timber treads and nosings that match the floors, so the whole house looks consistent.",
      },
      {
        q: "Can you handle both indoor flooring and outdoor decking?",
        a: "Yes. Indoor floors, decks, pool surrounds and polycarbonate shelters can be planned and installed as one project.",
      },
      {
        q: "Can the work be done in stages?",
        a: "Yes. Each area is quoted separately, so you can complete the project in stages to suit your budget and schedule.",
      },
      {
        q: "Do you work with main contractors on A&A projects?",
        a: "Yes. We coordinate with your main contractor or designer on timing, levels and protection of finished floors.",
      },
    ],
    relatedPosts: [
      "wooden-floor-maintenance-singapore-humidity",
      "outdoor-decking-singapore-balcony-pool",
      "polycarbonate-roofing-shelters-singapore",
    ],
  },
];

export const getPropertyPage = (slug: string) => propertyPages.find((p) => p.slug === slug);
