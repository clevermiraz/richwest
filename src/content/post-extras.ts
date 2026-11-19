import type { ServiceSection } from "./types";

/**
 * SEO additions for each journal article: a shorter search title (the long
 * editorial title stays as the on-page <h1>), extra sections that answer the
 * follow-up questions readers search for, the service page the article
 * supports, and the date the article was last revised.
 */
export interface PostExtras {
  seoTitle: string;
  sections: readonly ServiceSection[];
  /** Service the article leads to, for the in-article call to action. */
  serviceSlug: string;
  updatedISO: string;
}

const UPDATED = "2026-11-19";

export const postExtras: Record<string, PostExtras> = {
  "flooring-contractor-singapore-checklist": {
    seoTitle: "Hiring a Flooring Contractor in Singapore",
    serviceSlug: "commercial-flooring-contractor",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Questions to Ask Before You Sign",
        body: [
          "Who will actually install the floor: the company's own team or a sub-contractor? Who do you call if something goes wrong after handover? How long will the work take, and what happens if the existing floor needs levelling or tile removal?",
          "A good contractor answers these clearly and puts the answers in writing. If the replies are vague, the risk usually lands on you.",
        ],
      },
      {
        heading: "How to Compare Quotations Fairly",
        body: [
          "The cheapest quotation is often missing items rather than cheaper overall. Check that each quote covers the same product, the same area, floor preparation, skirting, transition strips, furniture moving and disposal of old materials.",
          "Ask for an itemised quotation. It lets you compare line by line and makes it obvious when something has been left out.",
        ],
      },
      {
        heading: "Red Flags to Watch For",
        body: [
          "Be careful with contractors who quote without seeing the site, cannot name the exact product they will supply, push for a large deposit before materials are ordered, or are reluctant to give a written scope.",
          "Also ask how they handle HDB or condominium renovation rules. An experienced team will know to check working hours and notification requirements for your building.",
        ],
      },
    ],
  },

  "vinyl-flooring-spc-vs-lvt-singapore": {
    seoTitle: "SPC vs LVT Vinyl Flooring in Singapore",
    serviceSlug: "vinyl-flooring",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "SPC vs LVT at a Glance",
        body: [
          "SPC has a rigid stone-polymer core. It hides small imperfections in the floor below, resists dents and stays stable when temperatures change, which makes it a safe choice for most HDB flats and condominiums.",
          "LVT is more flexible and usually glued down. It is quieter and softer underfoot, but it needs a smoother, better-prepared base because unevenness can show through.",
        ],
      },
      {
        heading: "Which Vinyl Is Better for HDB Flats?",
        body: [
          "For most HDB homes, SPC click vinyl laid over existing tiles is the most practical option. It avoids hacking, can be installed quickly and copes well with the occasional spill in kitchens and living areas.",
          "If the tiles are hollow or uneven, they need fixing first. A quick check during the site visit tells you whether overlaying is possible.",
        ],
      },
      {
        heading: "Wear Layer, Thickness and Underlay",
        body: [
          "The wear layer is the clear top coat that protects the printed design. A thicker wear layer lasts longer, which matters for busy homes and commercial spaces.",
          "Overall thickness affects how solid the floor feels, and an acoustic underlay reduces footstep noise, something your downstairs neighbours will appreciate.",
        ],
      },
    ],
  },

  "wooden-floor-maintenance-singapore-humidity": {
    seoTitle: "Wooden Floor Care in Singapore Humidity",
    serviceSlug: "wooden-floor",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "A Simple Weekly and Yearly Routine",
        body: [
          "Weekly: sweep or vacuum with a soft head to remove grit, then clean with a well-wrung microfibre mop and a cleaner made for finished wood floors.",
          "Yearly: check high-traffic areas, doorways and spots near windows for worn finish. Topping up the finish before it wears through is far easier than a full restoration later.",
        ],
      },
      {
        heading: "Common Problems and What They Mean",
        body: [
          "Cupping, where plank edges rise above the centre, usually points to moisture coming from below or from spills. Gaps that open up during dry, air-conditioned periods are normal seasonal movement.",
          "Dark stains around plants or pet bowls mean water has got under the finish. Dealing with the cause early stops the damage spreading.",
        ],
      },
      {
        heading: "When to Call a Professional",
        body: [
          "If boards are lifting, sounding hollow or the finish has worn through to bare wood, it is time for a professional inspection. Sanding and refinishing can often restore a floor that looks beyond saving.",
          "We can assess the floor and tell you whether repair, refinishing or replacement makes sense.",
        ],
      },
    ],
  },

  "carpet-floor-office-carpet-tiles-singapore": {
    seoTitle: "Office Carpet Tiles in Singapore: Why They Win",
    serviceSlug: "carpet-floor",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Carpet Tiles vs Broadloom for Offices",
        body: [
          "Broadloom carpet comes on a roll and gives a seamless look, but a single stain or worn patch often means replacing a large area. Carpet tiles can be lifted and replaced one at a time.",
          "Tiles are also easier to install around existing furniture and raised floors, which makes them a practical choice for occupied offices.",
        ],
      },
      {
        heading: "Planning an Office Carpet Replacement",
        body: [
          "Most offices cannot close for a refit, so the work is usually phased by zone or scheduled after hours and over weekends. Building management may require lift bookings and work permits.",
          "Keep a few spare tiles from the same batch. Colours vary slightly between production runs, so spares make future repairs invisible.",
        ],
      },
      {
        heading: "Keeping Carpet Tiles Looking Good",
        body: [
          "Regular vacuuming removes the grit that wears fibres down, and entrance mats keep a lot of dirt from reaching the main floor. Periodic deep cleaning refreshes colour and hygiene.",
          "Rotating tiles from quiet corners into busy walkways can extend the life of the whole floor.",
        ],
      },
    ],
  },

  "sports-floor-installation-singapore": {
    seoTitle: "Sports Floor Installation Singapore Guide",
    serviceSlug: "sports-floor",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Choosing a System for Your Facility",
        body: [
          "Schools and multi-purpose halls need a floor that handles many sports and events. Dedicated badminton courts prioritise grip and consistent footing, while gyms need resistance to dropped weights and heavy equipment.",
          "Start with how the space will be used most of the time, then choose the system that suits that use rather than trying to make one floor do everything equally well.",
        ],
      },
      {
        heading: "Line Marking and Layout",
        body: [
          "Court lines must be set out accurately to the dimensions for each sport. Multi-sport halls often use different colours for badminton, basketball and volleyball so players can follow the right lines.",
          "Plan the layout before installation, including where equipment, nets and posts will go.",
        ],
      },
      {
        heading: "Maintenance After Installation",
        body: [
          "Daily dust mopping keeps the surface grippy, and the cleaning products recommended for the system protect the finish. Avoid street shoes on court surfaces wherever possible.",
          "Regular checks around doors, drains and equipment areas catch small problems before they spread.",
        ],
      },
    ],
  },

  "outdoor-decking-singapore-balcony-pool": {
    seoTitle: "Outdoor Decking Singapore: Balcony to Pool",
    serviceSlug: "composite-deck",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Rooftop Decks: Extra Considerations",
        body: [
          "Rooftops get the most sun and wind of any outdoor space. Choose boards with good UV resistance, and make sure the frame is fixed securely without damaging the roof waterproofing.",
          "Raised pedestal or frame systems keep the deck level over a sloping roof and leave the drainage underneath working as designed.",
        ],
      },
      {
        heading: "Condominium Balcony Rules",
        body: [
          "Many condominiums have by-laws on balcony works, including permitted materials, working hours and access to floor traps. Check with your management before you start.",
          "A removable, raised decking system is usually the easiest way to meet these rules while keeping drains accessible.",
        ],
      },
      {
        heading: "Planning Your Deck Budget",
        body: [
          "The main cost factors are the area, the board material, the frame system, steps and edges, and any waterproofing or drainage work underneath.",
          "Ask your contractor to quote timber and composite options for the same space so you can weigh up the price against the maintenance each one needs.",
        ],
      },
    ],
  },

  "composite-deck-vs-composite-timber-deck": {
    seoTitle: "Composite vs Composite Timber Deck (Singapore)",
    serviceSlug: "composite-timber-deck",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Capped vs Uncapped Composite Boards",
        body: [
          "Uncapped boards are the same material all the way through. Capped boards have a protective polymer shell bonded around the core, which improves resistance to stains, fading and moisture.",
          "For sun-exposed balconies, rooftops and pool decks in Singapore, capped boards generally hold their colour and finish better over time.",
        ],
      },
      {
        heading: "How to Compare Composite Boards",
        body: [
          "Look at the surface texture, how realistic the grain looks, the board profile (solid or hollow), the fixing system and the manufacturer's guidance on joist spacing.",
          "Ask to see physical samples in daylight. Colours look very different on a screen than they do on your balcony.",
        ],
      },
      {
        heading: "Installation Makes the Difference",
        body: [
          "Composite expands and contracts with heat, so correct gaps, joist spacing and fixing clips are essential. Poor installation causes warping or uneven gaps that no board can fix.",
          "Drainage and ventilation under the deck matter just as much as with timber.",
        ],
      },
    ],
  },

  "wooden-deck-varnish-singapore-guide": {
    seoTitle: "Wooden Deck Varnish Singapore: Recoat Guide",
    serviceSlug: "wooden-deck-varnish",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Choosing a Deck Finish",
        body: [
          "Penetrating oils soak into the timber and give a natural look, and are easy to top up. Film-forming varnishes sit on the surface and can look glossier, but need more preparation when they wear.",
          "Tinted finishes add colour and extra UV protection, while clear finishes show the natural grain.",
        ],
      },
      {
        heading: "Can You Recoat a Deck Yourself?",
        body: [
          "Light maintenance coats on a deck in good condition can be done by a careful homeowner. The keys are a clean, completely dry surface and a dry weather window.",
          "If the old coating is peeling, the timber has gone grey, or boards are rough and splintering, professional sanding gives a much better and longer-lasting result.",
        ],
      },
      {
        heading: "Timing Around Singapore Weather",
        body: [
          "Coatings need dry timber and time to cure. Plan recoating for a stretch of dry days where possible, and avoid starting right before a forecast downpour.",
          "Morning starts help, because the surface has the whole day to dry between coats.",
        ],
      },
    ],
  },

  "polycarbonate-roofing-shelters-singapore": {
    seoTitle: "Polycarbonate Roofing Shelters in Singapore",
    serviceSlug: "polycarbonate-roofing-shelters",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Clear, Tinted or Opal Sheets?",
        body: [
          "Clear sheets let the most light through, which suits shaded walkways. Tinted sheets reduce glare and heat for sunny patios, and opal sheets diffuse light evenly for a softer feel.",
          "Think about how the space is used: a car porch, a dining patio and a laundry area each have different needs.",
        ],
      },
      {
        heading: "Frames and Fixing",
        body: [
          "The frame carries the roof and resists wind. Aluminium and steel are common choices, and the right one depends on the span, the look you want and the exposure of the site.",
          "Sheets must be fixed with allowance for expansion and sealed properly, or they can rattle, leak or crack over time.",
        ],
      },
      {
        heading: "Looking After a Polycarbonate Roof",
        body: [
          "Rinse the sheets with water and a mild soap a few times a year, and clear leaves from gutters so water flows freely.",
          "Avoid abrasive cleaners and high-pressure jets close to the surface, which can scratch or damage the protective coating.",
        ],
      },
    ],
  },

  "commercial-flooring-contractor-singapore": {
    seoTitle: "Commercial Flooring Singapore: Avoid Rework",
    serviceSlug: "commercial-flooring-contractor",
    updatedISO: UPDATED,
    sections: [
      {
        heading: "Choosing Flooring by Space Type",
        body: [
          "Open offices often use carpet tiles for acoustics and easy replacement. Pantries, clinics and retail floors suit commercial vinyl for easy cleaning, and gyms or halls need a sports flooring system.",
          "Matching the floor to each zone, rather than using one product everywhere, usually gives better results and longer life.",
        ],
      },
      {
        heading: "Handover and Aftercare",
        body: [
          "A clean handover includes protected, cleaned floors, spare materials labelled for future repairs and cleaning guidance for the facilities team.",
          "Agree in advance how defects will be reported and fixed, so small issues are resolved quickly after the site opens.",
        ],
      },
      {
        heading: "Working With Your Project Team",
        body: [
          "On fit-outs, the flooring contractor works alongside designers, main contractors and building management. Sharing drawings, finishes schedules and the programme early prevents clashes on site.",
          "Ask for a method statement that explains how the work will be done safely and on time.",
        ],
      },
    ],
  },
};
