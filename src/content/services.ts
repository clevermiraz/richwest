// Content extracted from the original richwestipl.sg build. Edit here to change site copy.
import { serviceExtras } from "./service-extras";
import type { Service } from "./types";

const baseServices = [
  {
    slug: "wooden-floor",
    primaryKeyword: "wooden floor",
    title: "Wooden Floor Singapore",
    seoTitle: "Solid & Engineered Wood Flooring Singapore",
    metaDescription:
      "Need engineered wood flooring or solid wood flooring in Singapore? Richwest Integrated delivers quality installation and finishing. Get a quote today!",
    description:
      "Install a premium wooden floor in Singapore with expert site prep, moisture checks, and clean finishing. Solid wood and engineered wood options.",
    heroImage: "/images/wooden-floor-hallway.webp",
    highlights: [
      "Moisture and level checks before installation",
      "Premium finishing and skirting detailing",
      "Aftercare plan tailored to Singapore humidity",
    ],
    sections: [
      {
        heading: "Why a Wooden Floor Works in Singapore",
        body: [
          "A wooden floor adds warmth and a premium feel, but it needs the right product choice and installation approach for tropical conditions.",
          "We focus on stable systems, proper acclimatisation, and clean edge detailing so your floor looks consistent and performs well long-term.",
        ],
      },
      {
        heading: "Solid Wood vs Engineered Wood Flooring in Singapore",
        body: [
          "Solid wood flooring offers classic character and can be sanded and refinished multiple times. Engineered wood flooring, a real timber top layer on a stable multi-layer core, often handles Singapore humidity better and is a strong option for condos and larger spans.",
          "We recommend based on usage, budget, and your maintenance preference.",
        ],
      },
      {
        heading: "Installation Quality Matters",
        body: [
          "Subfloor preparation and moisture control are the foundation of long-lasting timber flooring.",
          "We detail transitions, skirtings, and door clearances for a clean, premium finish.",
        ],
      },
    ],
    faq: [
      {
        q: "Is wooden flooring suitable for Singapore humidity?",
        a: "Yes, with correct product choice, acclimatisation, and moisture-aware installation practices.",
      },
      {
        q: "How do I maintain a wooden floor?",
        a: "Use a well-wrung microfiber mop, avoid soaking the surface, and follow a periodic maintenance plan for the finish.",
      },
      {
        q: "Do you provide sanding and varnish?",
        a: "Yes, we provide sanding and varnish services for restoration and long-term protection.",
      },
    ],
  },
  {
    slug: "vinyl-flooring",
    primaryKeyword: "vinyl flooring",
    title: "Vinyl Flooring Singapore",
    seoTitle: "Vinyl Flooring Singapore",
    metaDescription:
      "Vinyl flooring in Singapore for homes and businesses, including commercial vinyl flooring and vinyl floor sheet options. Enquire with Richwest Integrated today!",
    description:
      "Premium vinyl flooring in Singapore for HDB, condo, and commercial spaces. Expert installation with clean transitions and durable finishes.",
    heroImage: "/images/vinyl-floor-bedroom.webp",
    highlights: [
      "SPC and LVT options for different budgets",
      "Clean edge finishing and transition detailing",
      "Low maintenance and water resistant performance",
    ],
    sections: [
      {
        heading: "Why Vinyl Flooring Is Popular in Singapore",
        body: [
          "Vinyl flooring is water resistant, comfortable underfoot, and easy to maintain, which makes it a practical choice for daily living and rental units.",
          "We match the right vinyl system to your usage, traffic level, and acoustic needs.",
        ],
      },
      {
        heading: "SPC vs LVT",
        body: [
          "SPC is typically more dimensionally stable and handles heat and humidity well. LVT can provide a softer feel and excellent realism when installed correctly.",
          "We will recommend based on site condition, budget, and long-term expectations.",
        ],
      },
      {
        heading: "Commercial Vinyl Flooring and Vinyl Floor Sheets",
        body: [
          "For offices, clinics, retail, and other high-traffic spaces, commercial vinyl flooring gives a hard-wearing surface that is quick to clean and simple to maintain.",
          "Vinyl floor sheet in Singapore is laid in wide rolls with very few joints, which suits areas that are cleaned often or need a near-seamless finish. We help you choose between sheet, plank, and tile formats for each area of your project.",
        ],
      },
    ],
    faq: [
      {
        q: "Is vinyl flooring suitable for HDB?",
        a: "Yes. Vinyl is popular in HDB for its durability, comfort, and simple upkeep.",
      },
      {
        q: "Can vinyl flooring be installed over existing tiles?",
        a: "Often yes, subject to levelness and site assessment for edges and height differences.",
      },
      {
        q: "Does vinyl flooring feel hollow?",
        a: "Correct underlay selection and installation details reduce hollow sound and improve comfort.",
      },
    ],
  },
  {
    slug: "carpet-floor",
    primaryKeyword: "carpet floor",
    title: "Carpet Floor Singapore",
    seoTitle: "Carpet Floor Singapore | Office Carpet Tiles & Commercial Carpet",
    description:
      "Carpet floor solutions in Singapore for offices and commercial spaces. Durable carpet tiles, acoustic comfort, and professional installation.",
    heroImage: "/images/commercial-vinyl-office.webp",
    highlights: [
      "Office carpet tiles with modular replacement",
      "Improved acoustics for workspaces",
      "Commercial-ready specifications and planning",
    ],
    sections: [
      {
        heading: "Carpet Floor Benefits for Offices",
        body: [
          "Carpet reduces noise, adds comfort, and improves walkability in office environments.",
          "Carpet tiles are the practical choice for most businesses due to easy replacement and minimal downtime.",
        ],
      },
      {
        heading: "Office Carpet Tiles Singapore",
        body: [
          "We help you choose the right backing, pile type, and traffic rating so your office carpet tiles perform well long-term.",
          "Installation quality prevents lifting edges and keeps joints aligned for a clean finish.",
        ],
      },
    ],
    faq: [
      {
        q: "Are carpet tiles easy to maintain?",
        a: "Yes. You can replace high-wear areas without redoing the whole space.",
      },
      {
        q: "Do you support phased installation?",
        a: "Yes. We can plan works to reduce downtime for active offices.",
      },
      {
        q: "Is carpet suitable for high-traffic areas?",
        a: "Yes, with correct specification and proper maintenance routines.",
      },
    ],
  },
  {
    slug: "sports-floor",
    primaryKeyword: "sports floor",
    title: "Sports Floor Singapore",
    seoTitle: "Sports Floor Singapore | Gym, Studio & Court Flooring Installation",
    description:
      "Sports floor installation in Singapore for gyms, studios, and courts. Shock absorption, traction, and commercial-grade durability.",
    heroImage: "/images/sports-court-completed.webp",
    highlights: [
      "Shock absorption and traction for safety",
      "Commercial-grade specifications and documentation",
      "Clean transitions and edge detailing",
    ],
    sections: [
      {
        heading: "What Makes a Sports Floor Different",
        body: [
          "A sports floor is a performance system designed for safety, comfort, and consistent traction.",
          "We recommend systems based on activity type, hygiene requirements, and expected traffic.",
        ],
      },
      {
        heading: "Planning for Commercial Use",
        body: [
          "Commercial works benefit from clear specs, method statements, and phased handover planning.",
          "We detail critical areas like transitions, skirting, and thresholds for long-term durability.",
        ],
      },
    ],
    faq: [
      {
        q: "Can a sports floor be installed over existing flooring?",
        a: "Sometimes. We assess levelness, moisture, and system compatibility first.",
      },
      {
        q: "Is the surface slip resistant?",
        a: "Yes. We recommend the right traction level based on your sport or training activity.",
      },
      {
        q: "Do you handle commercial projects?",
        a: "Yes, including gyms, schools, and studios with phased schedules.",
      },
    ],
  },
  {
    slug: "wooden-deck",
    primaryKeyword: "wooden deck",
    title: "Wooden Deck Singapore",
    seoTitle: "Wooden Deck Singapore | Balcony & Outdoor Decking Installation",
    description:
      "Premium wooden deck installation in Singapore for balconies, patios, and outdoor spaces. Proper drainage, ventilation, and clean detailing.",
    heroImage: "/images/composite-deck-pool.webp",
    highlights: [
      "Balcony and patio decking with drainage planning",
      "Premium finishing and safe detailing",
      "Maintenance plan including recoating guidance",
    ],
    sections: [
      {
        heading: "Designing a Wooden Deck for Singapore Weather",
        body: [
          "A wooden deck must handle rain, UV, and humidity. Drainage and ventilation are essential to prevent trapped moisture.",
          "We detail spacing, support structure, and edge finishing for safety and long-term durability.",
        ],
      },
      {
        heading: "Maintenance and Recoating",
        body: [
          "Wooden decking needs periodic care. We guide owners on cleaning routines and recoating frequency based on site exposure.",
          "A consistent maintenance schedule keeps your deck looking premium year-round.",
        ],
      },
    ],
    faq: [
      {
        q: "How often do I maintain a wooden deck?",
        a: "Typically every 12 to 18 months depending on sun exposure and traffic.",
      },
      {
        q: "Is a wooden deck slippery when wet?",
        a: "Proper board selection, spacing, and finishing improves traction.",
      },
      {
        q: "Can you install for balconies?",
        a: "Yes. We plan thresholds, drainage, and access for balcony installations.",
      },
    ],
  },
  {
    slug: "wooden-deck-varnish",
    primaryKeyword: "wooden deck varnish",
    title: "Wooden Deck Varnish Singapore",
    seoTitle: "Wooden Deck Varnish Singapore | Recoating & Deck Maintenance",
    description:
      "Wooden deck varnish and maintenance in Singapore. UV protection, recoating schedules, and professional surface preparation for long-lasting decks.",
    heroImage: "/images/composite-deck-installation.webp",
    highlights: [
      "Professional cleaning and prep for adhesion",
      "UV and weather protection for outdoor timber",
      "Recoating plans for consistent appearance",
    ],
    sections: [
      {
        heading: "Why Deck Varnish Matters",
        body: [
          "Deck finishes protect timber from UV damage, water penetration, and surface cracking.",
          "In Singapore, consistent recoating helps maintain both aesthetics and structural longevity.",
        ],
      },
      {
        heading: "Recoating Timing",
        body: [
          "Most decks benefit from a 12 to 18 month maintenance cycle, but exposed decks may need earlier attention.",
          "We assess signs like fading, rough grain, and reduced water beading to recommend the right timing.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you recoat an existing deck?",
        a: "Yes. We assess the current finish and prep the surface before applying a new coat.",
      },
      {
        q: "Will recoating change the color?",
        a: "It can enhance and restore the tone; we guide you on finish options and expected results.",
      },
      {
        q: "How long does maintenance take?",
        a: "Most decks can be completed within a short window depending on drying time and weather.",
      },
    ],
  },
  {
    slug: "composite-deck",
    primaryKeyword: "composite deck",
    title: "Composite Deck Singapore",
    seoTitle: "Composite Deck Singapore | Low Maintenance Outdoor Decking",
    description:
      "Composite deck installation in Singapore for patios, balconies, and pool areas. Low maintenance, stable performance, and clean detailing.",
    heroImage: "/images/composite-deck-balcony-sg.webp",
    highlights: [
      "Low maintenance outdoor deck performance",
      "Stable color options for sun exposure",
      "Safe edge detailing and clean finishes",
    ],
    sections: [
      {
        heading: "Why Composite Decking",
        body: [
          "Composite deck boards reduce maintenance compared to natural timber and are resistant to splintering and many surface stains.",
          "We recommend the right board profile and surface based on your outdoor usage and exposure conditions.",
        ],
      },
      {
        heading: "Detailing for Long-Term Results",
        body: [
          "Drainage, ventilation, and correct fastening systems are essential for composite decking performance.",
          "We detail edges and transitions so the deck looks premium and remains safe for daily use.",
        ],
      },
    ],
    faq: [
      {
        q: "Does composite decking fade?",
        a: "All outdoor materials age, but higher-quality boards provide better color stability and UV performance.",
      },
      {
        q: "Is composite decking slippery?",
        a: "Surface textures vary; we recommend appropriate traction options for wet areas.",
      },
      {
        q: "Can you install composite decking for pool areas?",
        a: "Yes. We plan drainage and traction carefully for pool deck conditions.",
      },
    ],
  },
  {
    slug: "composite-timber-deck",
    primaryKeyword: "composite timber decking",
    title: "Composite and Timber Decking Singapore",
    seoTitle: "Composite and Timber Decking Singapore",
    metaDescription:
      "Looking for composite and timber decking? Richwest Integrated provides quality decking and timber flooring services. Request your quote today!",
    description:
      "Composite timber deck (WPC) solutions in Singapore. Compare capped boards, textures, and detailing for patios, balconies, and outdoor decks.",
    heroImage: "/images/composite-deck-rooftop.webp",
    highlights: [
      "WPC decking options with different textures",
      "Capped vs uncapped board comparisons",
      "Professional edge and fascia detailing",
    ],
    sections: [
      {
        heading: "What “Composite Timber Deck” Means",
        body: [
          "Composite timber deck commonly refers to wood-plastic composite decking boards. Different formulations and surface treatments change performance significantly.",
          "We help you compare color stability, stain resistance, and warranty coverage before selection.",
        ],
      },
      {
        heading: "Capped Boards and Long-Term Care",
        body: [
          "Capped boards often improve stain resistance and keep a cleaner surface. This is useful for exposed outdoor decks in Singapore.",
          "Correct drainage and ventilation remain essential for a deck that stays clean and durable.",
        ],
      },
      {
        heading: "Composite and Timber Decking, Plus Timber Flooring Services",
        body: [
          "Some spaces suit natural timber decking, others suit composite. We install both, and can combine them with our timber flooring services so indoor and outdoor areas are planned together.",
          "We compare cost, upkeep, and appearance side by side so you can pick the right material for each area.",
        ],
      },
    ],
    faq: [
      {
        q: "Is composite timber deck the same as composite deck?",
        a: "Often yes; the key differences are board design, surface cap, and warranty coverage.",
      },
      {
        q: "Do I need to oil composite decking?",
        a: "Typically no. Most composite boards are designed for low maintenance without oiling.",
      },
      {
        q: "Can composite boards be replaced individually?",
        a: "In many systems, yes, depending on the fastening method used.",
      },
    ],
  },
  {
    slug: "balcony-decking-specialist",
    primaryKeyword: "balcony decking specialist",
    title: "Balcony Decking Specialist Singapore",
    seoTitle: "Balcony Decking Specialist Singapore | Outdoor Deck Solutions",
    description:
      "Balcony decking specialist services in Singapore. We plan thresholds, drainage, ventilation, and durable materials for balconies and patios.",
    heroImage: "/images/composite-deck-balcony-sg.webp",
    highlights: [
      "Threshold and door clearance planning",
      "Drainage and ventilation detailing",
      "Safe finishing for wet outdoor areas",
    ],
    sections: [
      {
        heading: "Balcony Decking Needs Specialist Detailing",
        body: [
          "Balconies have limited height and strict drainage requirements. A balcony decking specialist plans water flow and safe access.",
          "We detail edges, drains, and maintenance access so the installation remains reliable in Singapore weather.",
        ],
      },
      {
        heading: "Material Options",
        body: [
          "Timber decking provides a premium look, while composite decking reduces maintenance. The best choice depends on exposure and your upkeep preference.",
          "We recommend the right system and guide you on aftercare for long-term results.",
        ],
      },
    ],
    faq: [
      {
        q: "Will decking trap water on my balcony?",
        a: "With correct slope, spacing, and drain planning, decking should not trap water.",
      },
      {
        q: "Is decking safe when wet?",
        a: "We recommend surfaces and detailing that improve traction for outdoor conditions.",
      },
      {
        q: "Can you match the deck to existing tiles?",
        a: "Yes. We plan edge trims and height transitions for a clean finish.",
      },
    ],
  },
  {
    slug: "polycarbonate-roofing-shelters",
    primaryKeyword: "polycarbonate roof shelters",
    title: "Polycarbonate Roof Shelters Singapore",
    seoTitle: "Polycarbonate Roof Shelter",
    metaDescription:
      "Get durable polycarbonate roof shelter solutions from Richwest Integrated for practical outdoor protection. Contact us today for a project quote!",
    description:
      "Polycarbonate roof shelters in Singapore for patios and balconies. UV protection, drainage planning, and clean design integration with decking.",
    heroImage: "/images/outdoor-deck-composite.webp",
    highlights: [
      "UV protection and durable panel options",
      "Drainage, gutters, and slope planning",
      "Design integration with outdoor decking",
    ],
    sections: [
      {
        heading: "Why Polycarbonate Roofing Shelters",
        body: [
          "Polycarbonate shelters reduce rain impact and provide shade while allowing light through, making outdoor spaces more usable year-round.",
          "We plan panel choice, framing, and drainage so the shelter remains safe and functional.",
        ],
      },
      {
        heading: "Planning and Detailing",
        body: [
          "Proper slope, gutters, and downpipes reduce overflow and keep walls and flooring cleaner.",
          "We coordinate shelter design with outdoor deck layouts for a cohesive, premium look.",
        ],
      },
    ],
    faq: [
      {
        q: "Do polycarbonate shelters reduce heat?",
        a: "Yes, especially with UV-protected panels; performance varies by panel type and thickness.",
      },
      {
        q: "Will the shelter become noisy in rain?",
        a: "Good framing and proper installation reduce vibration and noise.",
      },
      {
        q: "Can you integrate shelter design with decking?",
        a: "Yes. We plan the full outdoor setup to look intentional and clean.",
      },
    ],
  },
  {
    slug: "commercial-flooring-contractor",
    primaryKeyword: "commercial flooring contractor",
    title: "Commercial Flooring Contractor Singapore",
    seoTitle: "Commercial Flooring Contractor Singapore | Offices, Gyms & Retail",
    description:
      "Commercial flooring contractor in Singapore for offices, gyms, and retail spaces. Clear specs, reliable scheduling, and professional finishing.",
    heroImage: "/images/commercial-vinyl-office.webp",
    highlights: [
      "Clear specifications and predictable timelines",
      "Phased installation to reduce downtime",
      "Professional detailing for high traffic areas",
    ],
    sections: [
      {
        heading: "Commercial Projects Need a Different Approach",
        body: [
          "Commercial flooring requires coordination, documentation, and planning well beyond the installation itself.",
          "We help teams avoid costly rework with clear scope, method statements, and consistent site execution.",
        ],
      },
      {
        heading: "Common Commercial Systems",
        body: [
          "Vinyl flooring, office carpet tiles, and sports flooring are common in commercial environments. Each system needs the right specification and substrate preparation.",
          "We plan transitions, thresholds, and edge protection for long-term durability.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you support night work and phased handover?",
        a: "Yes. We plan schedules based on site access and operational needs.",
      },
      {
        q: "Can you provide method statements?",
        a: "Yes. We can document scope, sequence, and installation approach for commercial coordination.",
      },
      {
        q: "Which flooring works best for offices?",
        a: "Office carpet tiles and vinyl flooring are popular; the best choice depends on traffic, acoustics, and cleaning needs.",
      },
    ],
  },
  {
    slug: "parquet-flooring",
    primaryKeyword: "parquet flooring",
    title: "Parquet Flooring Singapore",
    seoTitle: "Singapore Parquet Flooring",
    description:
      "New parquet flooring and parquet restoration in Singapore. Herringbone, chevron, and classic block patterns, laid on a level, moisture-checked base.",
    metaDescription:
      "Choose parquet flooring in Singapore from Richwest Integrated for quality flooring solutions and professional installation. Enquire today!",
    heroImage: "/images/wooden-floor-herringbone.webp",
    highlights: [
      "Herringbone, chevron, and block patterns",
      "Subfloor levelling and moisture checks first",
      "Repair, sanding, and varnish for older parquet",
    ],
    sections: [
      {
        heading: "Parquet Flooring Patterns",
        body: [
          "Parquet is timber laid in small blocks to form a pattern. Herringbone and chevron give a classic, formal look, while straight block and basket-weave layouts feel calmer and suit smaller rooms.",
          "We set out the pattern from the centre of the room so borders are even and the layout lines up with doorways and walls.",
        ],
      },
      {
        heading: "Solid and Engineered Parquet",
        body: [
          "Solid parquet blocks can be sanded and refinished many times over their life. Engineered parquet has a real timber top layer on a stable core, which moves less with Singapore humidity.",
          "We recommend the right option based on the room, the subfloor, and how the space will be used.",
        ],
      },
      {
        heading: "Installation That Lasts",
        body: [
          "Parquet is only as good as the base underneath it. We check moisture, level the subfloor, and use the correct adhesive so blocks stay firmly bonded.",
          "After laying, the floor is sanded flat and finished with varnish or oil for an even surface and lasting protection.",
        ],
      },
      {
        heading: "Restoring Existing Parquet",
        body: [
          "Many older HDB flats and condos in Singapore still have their original parquet. Loose or hollow blocks can be re-fixed, damaged pieces replaced, and the whole floor sanded and re-varnished.",
          "Restoring parquet is often faster and more affordable than replacing it, and it keeps the character of the original floor.",
        ],
      },
    ],
    faq: [
      {
        q: "Is parquet flooring suitable for Singapore homes?",
        a: "Yes. With correct moisture checks, a stable base, and a good finish, parquet performs well in Singapore homes.",
      },
      {
        q: "Can you repair loose parquet blocks?",
        a: "Yes. We lift and re-bond loose blocks, replace damaged pieces with matching timber where available, and refinish the area.",
      },
      {
        q: "How long does parquet installation take?",
        a: "It depends on the area and the pattern. We give you a clear timeline after the site survey.",
      },
      {
        q: "Herringbone or chevron, which should I choose?",
        a: "Herringbone blocks meet at right angles for a zig-zag effect; chevron blocks are cut at an angle to form a clean point. Both work well, so it comes down to the look you prefer.",
      },
    ],
  },
  {
    slug: "home-renovation",
    primaryKeyword: "home renovation",
    title: "Home Renovation Singapore",
    seoTitle: "Home Renovation Singapore",
    description:
      "Home renovation in Singapore built around quality flooring. One team to plan your floors, decking, waterproofing, and finishing from survey to handover.",
    metaDescription:
      "Planning home renovation in Singapore? Richwest Integrated provides professional renovation solutions tailored to your space. Request a quote today!",
    heroImage: "/images/luxury-interior-wood.webp",
    highlights: [
      "Site survey and clear, itemised quotation",
      "One team coordinating each trade",
      "Clean handover with aftercare advice",
    ],
    sections: [
      {
        heading: "Renovation Planned Around Your Floors",
        body: [
          "Flooring is often the biggest visual change in a home renovation, and it has to be sequenced correctly with the other works. We plan the whole job so floors go in at the right stage and are protected until handover.",
          "Whether you are renovating an HDB flat, a condo, or a landed home in Singapore, we start with a site survey and a clear scope.",
        ],
      },
      {
        heading: "What We Can Handle",
        body: [
          "Our renovation work covers wooden, vinyl, and parquet flooring, outdoor decking, waterproofing, sanding and varnish, and polycarbonate roof shelters.",
          "Tell us your full scope during the site visit and we will confirm what we deliver in-house and how the works will be scheduled.",
        ],
      },
      {
        heading: "How a Renovation Project Runs",
        body: [
          "We begin with a site survey and measurements, then provide an itemised quotation and timeline. Once confirmed, we schedule the works, protect finished areas, and keep you updated at each stage.",
          "At handover we walk through the finished work with you and explain how to care for your new floors and finishes.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you renovate HDB flats and condos?",
        a: "Yes. We work on HDB flats, condos, and landed homes, and follow building management rules on working hours and access.",
      },
      {
        q: "How long does a home renovation take?",
        a: "It depends on the scope. After the site survey we give you a timeline for each stage of the work.",
      },
      {
        q: "Can I renovate just the flooring?",
        a: "Yes. Many clients renovate only their floors. We can also combine flooring with decking, waterproofing, or other works.",
      },
      {
        q: "Do I need to move out during renovation?",
        a: "Not always. For flooring-only jobs we can often work room by room. We will advise after seeing the site.",
      },
    ],
  },
  {
    slug: "sand-and-varnish",
    primaryKeyword: "sand and varnish",
    title: "Sand and Varnish Singapore",
    seoTitle: "Sand and Varnish Singapore",
    description:
      "Floor sanding and varnish in Singapore for timber and parquet floors. Remove scratches and worn finish, then seal with a durable new coat.",
    metaDescription:
      "Choose sand and varnish services in Singapore from Richwest Integrated for quality floor finishing. Enquire today for your project!",
    heroImage: "/images/wooden-floor-living.webp",
    highlights: [
      "Dust-controlled sanding equipment",
      "Gap filling and minor board repairs",
      "Matt, satin, or gloss finishes",
    ],
    sections: [
      {
        heading: "When a Floor Needs Sanding and Varnish",
        body: [
          "Scratches, grey or worn patches, and a dull, uneven finish are signs that a timber floor needs refinishing. Sanding and varnish takes the floor back to fresh timber and seals it again.",
          "It works for solid wood floors, parquet, and many engineered floors with a thick enough top layer.",
        ],
      },
      {
        heading: "Our Sanding and Varnish Process",
        body: [
          "We protect skirting and furniture areas, then sand the floor in stages from coarse to fine grit. Gaps and small defects are filled before finishing.",
          "Several coats of varnish are applied, with light sanding between coats, for a smooth and even result.",
        ],
      },
      {
        heading: "Choosing Your Finish",
        body: [
          "Matt finishes look natural and hide small marks. Satin is the most popular middle ground, and gloss gives a classic reflective look.",
          "We can also adjust the tone of the floor, which is useful when matching new and old sections.",
        ],
      },
      {
        heading: "Indoor Floors and Outdoor Decks",
        body: [
          "This service is for indoor timber and parquet floors. For outdoor timber decks we offer a separate wooden deck varnish service using exterior-grade coatings.",
        ],
      },
    ],
    faq: [
      {
        q: "How often should a wooden floor be sanded and varnished?",
        a: "It depends on traffic and wear. Many homes refinish every several years, and busy areas may need it sooner.",
      },
      {
        q: "Can engineered wood be sanded?",
        a: "Often yes, if the timber top layer is thick enough. We check this before quoting.",
      },
      {
        q: "How long before I can walk on the floor?",
        a: "It depends on the varnish system and conditions. We give you a drying schedule before we start.",
      },
      {
        q: "Is sanding dusty?",
        a: "We use equipment with dust extraction to keep dust to a minimum, and we clean up afterwards.",
      },
    ],
  },
  {
    slug: "waterproofing-services",
    primaryKeyword: "waterproofing services",
    title: "Waterproofing Services Singapore",
    seoTitle: "Waterproofing Services Singapore",
    description:
      "Waterproofing services in Singapore for bathrooms, balconies, roofs, and planter boxes. Proper surface preparation, membrane systems, and water tests.",
    metaDescription:
      "Need waterproofing services in Singapore? Richwest Integrated provides professional waterproofing solutions for your property. Request a quote today!",
    heroImage: "/images/composite-deck-balcony-sg.webp",
    highlights: [
      "Leak inspection and cause diagnosis",
      "Membrane systems suited to each area",
      "Water test before tiling or decking",
    ],
    sections: [
      {
        heading: "Where Waterproofing Matters",
        body: [
          "Singapore gets heavy rain year-round, so balconies, flat roofs, planter boxes, and bathrooms need a reliable waterproof layer. When it fails, water can leak into ceilings and walls below.",
          "We inspect the area, find the source of the leak, and recommend the right repair or a full replacement.",
        ],
      },
      {
        heading: "Our Waterproofing Process",
        body: [
          "Good waterproofing starts with preparation: removing loose material, repairing cracks, and forming the correct falls towards drains.",
          "We then apply a membrane system suited to the area and carry out a water test to check it before any tiles, decking, or finishes go on top.",
        ],
      },
      {
        heading: "Waterproofing Under Decking and Flooring",
        body: [
          "Outdoor decks and balcony floors are only as good as the waterproofing below them. Because we also install decking and flooring, we plan both together so drainage and membranes are not damaged during installation.",
        ],
      },
    ],
    faq: [
      {
        q: "How do I know if I need waterproofing?",
        a: "Common signs are damp patches or stains on the ceiling below, peeling paint, water pooling on balconies or roofs, and leaks after heavy rain.",
      },
      {
        q: "Do you waterproof bathrooms?",
        a: "Yes. We handle bathroom waterproofing as well as balconies, flat roofs, and planter boxes.",
      },
      {
        q: "Can waterproofing be done without removing tiles?",
        a: "Some leaks can be treated without hacking, but many need the old finish removed to fix the cause properly. We advise after inspection.",
      },
      {
        q: "Do you test the waterproofing?",
        a: "Yes. We carry out a water test before finishes are installed to confirm the membrane is watertight.",
      },
    ],
  },
] as const satisfies readonly Service[];

export type ServiceSlug = (typeof baseServices)[number]["slug"];

const same = (a: string, b: string) => a.trim().toLowerCase() === b.trim().toLowerCase();

/** Base copy merged with the SEO additions in service-extras.ts (title, meta, sections, FAQs). */
export const services: readonly Service[] = baseServices.map((s) => {
  const extra = serviceExtras[s.slug];
  if (!extra) return s;
  return {
    ...s,
    seoTitle: extra.seoTitle,
    metaDescription: extra.metaDescription,
    // Never repeat a heading or question that the base copy already has.
    sections: [...s.sections, ...extra.sections.filter((x) => !s.sections.some((b) => same(b.heading, x.heading)))],
    faq: [...s.faq, ...extra.faq.filter((x) => !s.faq.some((b) => same(b.q, x.q)))],
  };
});

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
