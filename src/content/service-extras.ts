import type { QA, ServiceSection } from "./types";

/**
 * SEO additions for each service page: a search-friendly title (kept under
 * ~50 characters so " | Richwest" fits in 60), a meta description that ends
 * with a call to action, and extra sections + FAQs so every service page
 * answers the questions people search before they call.
 *
 * Copy is general, verifiable guidance. No prices, warranty periods or
 * certifications are stated that the business has not confirmed.
 */
export interface ServiceExtras {
  seoTitle: string;
  metaDescription: string;
  sections: readonly ServiceSection[];
  faq: readonly QA[];
}

const CALL = "Free site visit: +65 9625 2205.";

export const serviceExtras: Record<string, ServiceExtras> = {
  "wooden-floor": {
    seoTitle: "Wooden Floor Singapore: Solid & Engineered",
    metaDescription: `Solid and engineered wooden floors for HDB, condo and landed homes in Singapore, with moisture checks and clean finishing. ${CALL}`,
    sections: [
      {
        heading: "Where Wooden Flooring Works Best",
        body: [
          "Engineered wood is our usual recommendation for HDB flats and condominiums. Its cross-layered core moves far less with humidity than solid planks, so it suits air-conditioned bedrooms, living rooms and long open spans.",
          "Solid timber suits landed homes and spaces where you want to sand and refinish the floor several times over its life. We avoid timber in wet areas such as bathrooms and service yards, and suggest vinyl there instead.",
        ],
      },
      {
        heading: "How We Install a Wooden Floor",
        body: [
          "We start with a site survey: we measure the area, check the subfloor level and test moisture before recommending a system. Uneven screed is levelled first, because a timber floor will only ever be as flat as the base under it.",
          "Planks are acclimatised, then laid as a floating click system or glued down depending on the product and the room. We finish with skirting, door undercuts and threshold profiles so every transition sits flush.",
        ],
      },
      {
        heading: "What Affects the Cost of a Wooden Floor",
        body: [
          "Your quotation depends on the floor area, the species and grade of timber, engineered versus solid construction, the plank size and pattern, and how much levelling the existing floor needs.",
          "Removing old tiles or flooring, moving furniture and adding skirting also change the scope. After the site visit we give you an itemised quotation so you can see where every dollar goes.",
        ],
      },
    ],
    faq: [
      {
        q: "Can a wooden floor be laid over existing tiles?",
        a: "Often, yes. If the tiles are firmly bonded and level, an engineered floating floor can go over them. We check for hollow or cracked tiles during the site visit first.",
      },
      {
        q: "How long does wooden floor installation take?",
        a: "A typical HDB or condominium unit takes one to three working days once materials are on site. Levelling or tile removal adds time, and we confirm the schedule in your quotation.",
      },
      {
        q: "Engineered or solid wood: which lasts longer?",
        a: "Solid wood can be refinished more times. Engineered wood is more stable in Singapore humidity. With proper care both last for many years, so the choice depends on your space and how you use it.",
      },
    ],
  },

  "vinyl-flooring": {
    seoTitle: "Vinyl Flooring Singapore: SPC & LVT Install",
    metaDescription: `SPC and LVT vinyl flooring for HDB flats, condos and offices in Singapore. Water-resistant, quiet, with clean edges. ${CALL}`,
    sections: [
      {
        heading: "Vinyl Flooring for HDB Flats and Condos",
        body: [
          "Vinyl is one of the most practical floors for Singapore homes. Planks can usually be installed directly over existing tiles, which avoids hacking, dust and the noise that comes with tile removal.",
          "Because vinyl is water-resistant, it works in kitchens and living areas where spills happen. Families with children or pets appreciate how easy it is to clean and how quiet it is underfoot.",
        ],
      },
      {
        heading: "How a Vinyl Installation Runs",
        body: [
          "We survey the existing floor for hollow tiles, cracks and level differences, and recommend SPC or LVT based on what we find. Low spots and deep grout lines are corrected so they do not show through the planks.",
          "Planks are laid with expansion gaps at the walls, then finished with skirting and transition strips at doorways. Most rooms are ready to use the same day.",
        ],
      },
      {
        heading: "What Affects the Cost of Vinyl Flooring",
        body: [
          "The main factors are the floor area, the product (SPC or LVT, wear-layer thickness and plank format), whether you want an acoustic underlay, and how much preparation the existing floor needs.",
          "Skirting, transition profiles and furniture moving are quoted as separate line items, so you can compare quotations on a like-for-like basis.",
        ],
      },
    ],
    faq: [
      {
        q: "Can vinyl flooring be installed over existing tiles?",
        a: "Yes, in most cases. The tiles need to be well bonded and reasonably level. We fill deep grout lines and fix hollow tiles before laying the vinyl.",
      },
      {
        q: "Is vinyl flooring suitable for kitchens?",
        a: "Yes. SPC vinyl is water-resistant and handles everyday spills well. Standing water should still be wiped up promptly, and we keep wet areas such as shower floors tiled.",
      },
      {
        q: "How long does vinyl flooring last?",
        a: "A quality vinyl floor with a suitable wear layer lasts for many years in a home. Commercial-grade wear layers are recommended for offices and shops with heavier foot traffic.",
      },
    ],
  },

  "carpet-floor": {
    seoTitle: "Carpet Floor & Office Carpet Tiles Singapore",
    metaDescription: `Office carpet tiles and carpet flooring in Singapore, installed after hours or over weekends to keep your business running. ${CALL}`,
    sections: [
      {
        heading: "Carpet Tiles or Broadloom Carpet?",
        body: [
          "Carpet tiles are the standard for offices because a stained or worn tile can be lifted and replaced on its own, and tiles can be rotated to spread wear. They also let you mix colours to mark walkways and zones.",
          "Broadloom (roll) carpet gives a seamless look for meeting rooms, hotel-style corridors and bedrooms where you want a softer, continuous finish.",
        ],
      },
      {
        heading: "Installing Carpet With Minimal Disruption",
        body: [
          "For occupied offices we can phase the work by zone, and schedule it after office hours or over a weekend. We coordinate with building management on loading bay access, lift bookings and work permits.",
          "Old carpet and adhesive are removed, the floor is cleaned and levelled where needed, and new tiles are laid with the right adhesive for easy future replacement.",
        ],
      },
      {
        heading: "What Affects the Cost of Carpet Flooring",
        body: [
          "Pricing depends on the area, the carpet range and backing, removal and disposal of the existing flooring, floor preparation, and whether the work must be done after hours.",
          "We provide an itemised quotation with any spare tiles listed, so you have stock for future replacements.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you install office carpet tiles over a weekend?",
        a: "Yes. We regularly phase office projects over weekends or after hours so your team can work normally during the week.",
      },
      {
        q: "Can damaged carpet tiles be replaced individually?",
        a: "Yes. That is one of the main advantages of carpet tiles. We recommend keeping a few spare tiles from the same batch for colour matching.",
      },
      {
        q: "Do you remove and dispose of old carpet?",
        a: "Yes. Removal and disposal can be included in your quotation as a separate line item.",
      },
    ],
  },

  "sports-floor": {
    seoTitle: "Sports Floor Singapore: Courts, Gyms, Studios",
    metaDescription: `Sports flooring for indoor courts, gyms, schools and studios in Singapore, with the right shock absorption and line marking. ${CALL}`,
    sections: [
      {
        heading: "Choosing the Right Sports Floor System",
        body: [
          "Different activities need different floors. Badminton and indoor courts need consistent ball bounce and grip, dance and fitness studios need shock absorption that protects joints, and gyms need surfaces that handle dropped weights.",
          "We specify the system around how the space is used, how often, and by whom, whether that is a school hall, a condominium gym or a commercial studio.",
        ],
      },
      {
        heading: "Our Sports Floor Installation Process",
        body: [
          "We assess the existing slab for level, moisture and cracks, because sports surfaces magnify any defect underneath. Repairs and levelling are completed before the system goes down.",
          "The surface is installed and cured, then court lines are set out and marked to the dimensions you need. We hand over with cleaning and care guidance for your facility team.",
        ],
      },
      {
        heading: "What Affects the Cost of a Sports Floor",
        body: [
          "Costs depend on the court or room size, the system type and thickness, slab preparation, line marking for one or several sports, and access and scheduling constraints at the site.",
          "For schools and condominiums we can plan works around term breaks or quieter periods, and include this in the programme.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you mark lines for more than one sport?",
        a: "Yes. Multi-sport halls often have badminton, basketball and volleyball lines in different colours. We set them out to your required layout.",
      },
      {
        q: "Do you install flooring for condominium gyms?",
        a: "Yes. We work with management corporations (MCST) on gym and studio floors, and coordinate access and work hours with the managing agent.",
      },
      {
        q: "How do we maintain a sports floor?",
        a: "Regular dust mopping and the cleaning products recommended for the system keep grip and appearance consistent. We provide care guidance at handover.",
      },
    ],
  },

  "wooden-deck": {
    seoTitle: "Wooden Deck Singapore: Balcony & Outdoor",
    metaDescription: `Natural timber decks for balconies, patios, pools and rooftops in Singapore, built with proper drainage and ventilation. ${CALL}`,
    sections: [
      {
        heading: "Timber Decking Built for Singapore Weather",
        body: [
          "Sun, heavy rain and constant humidity are hard on outdoor timber. A long-lasting deck starts with a durable species, a well-ventilated frame and drainage that lets water run off rather than sit under the boards.",
          "We design the gap between boards, the joist spacing and the fall of the surface so the deck dries quickly after a downpour.",
        ],
      },
      {
        heading: "How We Build a Wooden Deck",
        body: [
          "After measuring the area we check the substrate, drainage points and waterproofing. If the waterproofing is in doubt we recommend fixing it first, because a deck is much harder to lift later.",
          "We install the support frame, lay the boards with consistent gaps, then finish edges, steps and trims. The deck is coated to protect it from UV and moisture before handover.",
        ],
      },
      {
        heading: "What Affects the Cost of a Wooden Deck",
        body: [
          "Your quotation depends on the deck area, the timber species, the frame system, edge and step details, and any waterproofing or drainage work needed underneath.",
          "If you want lower maintenance, we can also price a composite deck for the same space so you can compare.",
        ],
      },
    ],
    faq: [
      {
        q: "How long does a wooden deck last in Singapore?",
        a: "A well-built deck in a durable timber, with regular recoating, lasts for many years. Drainage, ventilation and maintenance make the biggest difference.",
      },
      {
        q: "Wooden deck or composite deck?",
        a: "Timber has a natural look and feel but needs periodic varnishing. Composite needs far less maintenance. We can quote both for your space.",
      },
      {
        q: "Can you build a deck on a condominium balcony?",
        a: "Usually, yes. We check your MCST rules and drainage outlets first, and use a raised system that keeps the drains accessible.",
      },
    ],
  },

  "wooden-deck-varnish": {
    seoTitle: "Wooden Deck Varnish & Recoating Singapore",
    metaDescription: `Wooden deck varnish, sanding and recoating in Singapore to restore colour and protect outdoor timber from sun and rain. ${CALL}`,
    sections: [
      {
        heading: "Signs Your Deck Needs Recoating",
        body: [
          "Grey or faded boards, water soaking in instead of beading on the surface, rough or splintering patches, and dark stains around fixings are all signs that the protective coating has worn away.",
          "Recoating at that point is far cheaper than replacing boards that have started to crack or rot.",
        ],
      },
      {
        heading: "Our Deck Restoration Process",
        body: [
          "We clean the deck thoroughly and let it dry, then sand the surface to remove the worn coating and open up the grain. Loose or damaged boards are re-fixed or replaced.",
          "We apply the coating in the recommended number of coats, allowing proper drying time between each, and schedule the work around dry weather wherever possible.",
        ],
      },
      {
        heading: "What Affects the Cost of Deck Varnish",
        body: [
          "The main factors are the deck area, its current condition, how much sanding is needed, the type of finish, and any boards that need repair or replacement.",
          "Regular maintenance coats cost less than full restorations, so we can also suggest a recoating schedule for your deck.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you varnish a deck we did not install?",
        a: "Yes. We restore and recoat existing timber decks regardless of who built them, after checking the condition of the boards and frame.",
      },
      {
        q: "How long before we can use the deck again?",
        a: "It depends on the coating and the weather. We will tell you the recommended drying time before light use and before furniture goes back.",
      },
      {
        q: "Does varnish change the colour of the timber?",
        a: "Finishes range from clear to tinted. We can show samples so you can choose how warm or natural you want the deck to look.",
      },
    ],
  },

  "composite-deck": {
    seoTitle: "Composite Deck Singapore: Low-Maintenance",
    metaDescription: `Composite decking for balconies, pools and rooftops in Singapore. No varnishing, splinter-free, and built with proper drainage. ${CALL}`,
    sections: [
      {
        heading: "Why Homeowners Choose Composite Decking",
        body: [
          "Composite boards combine wood fibre and polymer, so they do not need sanding or varnishing and will not splinter. For busy households, that means a deck that looks good with simple washing.",
          "Capped composite boards add a protective outer shell that improves resistance to fading and staining, which matters on sun-exposed balconies and rooftops.",
        ],
      },
      {
        heading: "How We Install Composite Decking",
        body: [
          "We check the substrate, drainage and waterproofing, then install a support frame suited to the board system. Correct joist spacing and fixing clips are essential, because composite expands and contracts with heat.",
          "Boards are laid with the gaps the system requires, and edges, steps and fascia boards are finished for a clean, safe edge.",
        ],
      },
      {
        heading: "What Affects the Cost of a Composite Deck",
        body: [
          "Pricing depends on the area, the board range (capped or uncapped, colour and texture), the frame system, edge and step details, and any work needed on drainage or waterproofing.",
          "We will show you board samples on site so you can see and feel the options before you decide.",
        ],
      },
    ],
    faq: [
      {
        q: "Does composite decking get hot in the sun?",
        a: "All decking warms up in direct sun. Lighter colours stay cooler than dark ones, so we recommend lighter boards for fully exposed areas.",
      },
      {
        q: "How do you clean a composite deck?",
        a: "Sweep regularly and wash with water and a mild cleaner. Avoid harsh chemicals and metal brushes that can scratch the surface.",
      },
      {
        q: "Can composite decking be used around a pool?",
        a: "Yes, with a slip-resistant board and good drainage. We advise on board texture and layout for pool surrounds.",
      },
    ],
  },

  "composite-timber-deck": {
    seoTitle: "Composite & Timber Decking Singapore",
    metaDescription: `Composite timber decking and natural timber decks in Singapore. Compare looks, care and cost with an on-site consultation. ${CALL}`,
    sections: [
      {
        heading: "Composite or Timber: How to Decide",
        body: [
          "Choose timber if you want the natural grain, warmth and character of real wood, and are happy to recoat it periodically. Choose composite if low maintenance and consistent colour matter more.",
          "Many clients use both: timber for a shaded patio where people sit, and composite for a sun-exposed balcony or pool edge.",
        ],
      },
      {
        heading: "Built Properly Underneath",
        body: [
          "Whichever board you choose, the frame, ventilation and drainage decide how long the deck lasts. We plan joist spacing, falls and access to floor traps before a single board goes down.",
          "We also check existing waterproofing, since problems underneath are much harder to fix once the deck is in place.",
        ],
      },
      {
        heading: "What Affects the Cost",
        body: [
          "The board material, the deck area, the frame system, steps and edge details, and any substrate repairs are the main cost factors.",
          "We are happy to quote both a timber and a composite option for the same space so you can compare them side by side.",
        ],
      },
    ],
    faq: [
      {
        q: "Is composite timber decking real wood?",
        a: "No. Composite decking is made from wood fibre bound with polymer. It looks like timber but behaves differently, with much lower maintenance.",
      },
      {
        q: "Which lasts longer, composite or timber?",
        a: "Both can last many years when installed correctly. Composite needs less upkeep, while timber needs regular recoating to stay in good condition.",
      },
      {
        q: "Can you replace an old timber deck with composite?",
        a: "Yes. We remove the old deck, check the frame and substrate, and install composite boards on a suitable support system.",
      },
    ],
  },

  "balcony-decking-specialist": {
    seoTitle: "Balcony Decking Specialist Singapore",
    metaDescription: `Balcony decking for Singapore condos and landed homes. Raised systems that keep drains accessible and meet MCST rules. ${CALL}`,
    sections: [
      {
        heading: "Balcony Decking for Condominiums",
        body: [
          "Condominium balconies come with rules. Many MCSTs set requirements on materials, works hours and keeping floor traps accessible, so we check the by-laws with you before work starts.",
          "We usually use a raised, removable system so the drain outlets stay reachable and water runs freely underneath the boards.",
        ],
      },
      {
        heading: "Design Details That Matter on a Balcony",
        body: [
          "We keep the finished deck level with the sliding door track where possible, so the step out is comfortable and safe. Edges at glass railings are trimmed neatly, with gaps left for drainage.",
          "On high floors, wind and sun exposure are stronger, so we recommend boards with good UV resistance and secure fixing systems.",
        ],
      },
      {
        heading: "What Affects the Cost of Balcony Decking",
        body: [
          "Cost depends on the balcony size and shape, the board material, the frame system, edge trims and any adjustments needed around drains or door tracks.",
          "Balconies are usually small, so we can often complete the work in a single day once materials are on site.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need MCST approval for balcony decking?",
        a: "Many condominiums require you to notify or apply to the management before renovation works. We help you prepare the information they usually ask for.",
      },
      {
        q: "Will decking block my balcony drain?",
        a: "No. We use a raised system with access to the floor trap, and leave gaps so water drains freely.",
      },
      {
        q: "Can the deck be removed later?",
        a: "Yes. Raised clip systems can be lifted for maintenance or if you move, without damaging the balcony floor.",
      },
    ],
  },

  "polycarbonate-roofing-shelters": {
    seoTitle: "Polycarbonate Roof Shelters Singapore",
    metaDescription: `Polycarbonate roofing shelters for patios, walkways, car porches and rooftops in Singapore. Rain cover that lets light in. ${CALL}`,
    sections: [
      {
        heading: "Where Polycarbonate Shelters Work Well",
        body: [
          "Polycarbonate roofing is a popular choice for patios, back yards, covered walkways, car porches and rooftop terraces. It keeps rain off while letting natural light through, so the space underneath does not feel dark.",
          "Sheets come in clear, tinted and opal finishes, so you can choose how much light and heat passes through.",
        ],
      },
      {
        heading: "How We Plan and Install a Shelter",
        body: [
          "We measure the area and check the structure the shelter will attach to, then plan the frame, the fall of the roof and the gutters so rainwater runs off in the right direction.",
          "The frame is installed and the sheets are fixed with the correct sealing and expansion allowance. We finish with flashing where the roof meets the wall to keep water out.",
        ],
      },
      {
        heading: "What Affects the Cost of a Shelter",
        body: [
          "The size of the area, the sheet type and thickness, the frame material, gutters and downpipes, and access at the site all affect the price.",
          "For landed homes and commercial sites, any approvals or structural requirements are discussed during the site visit.",
        ],
      },
    ],
    faq: [
      {
        q: "Does a polycarbonate roof make the area hot?",
        a: "Tinted and opal sheets reduce glare and heat compared with clear sheets. We help you choose based on how much sun the area gets.",
      },
      {
        q: "Is polycarbonate roofing noisy in heavy rain?",
        a: "All lightweight roofs make some noise in heavy rain. Thicker sheets and proper fixing help reduce it.",
      },
      {
        q: "How do I clean a polycarbonate roof?",
        a: "Rinse with water and a mild soap using a soft brush. Avoid abrasive cleaners that can scratch the sheets.",
      },
    ],
  },

  "commercial-flooring-contractor": {
    seoTitle: "Commercial Flooring Contractor Singapore",
    metaDescription: `Commercial flooring contractor in Singapore for offices, retail, gyms and schools. Clear specs, scheduling and clean handover. ${CALL}`,
    sections: [
      {
        heading: "Flooring for Offices, Retail and Facilities",
        body: [
          "We install vinyl, carpet tiles and sports flooring for offices, shops, clinics, schools and condominium facilities. Each space needs a floor that handles its traffic, cleaning routine and look.",
          "We work with facilities managers, interior designers and main contractors, and can supply a clear method statement and programme for your project.",
        ],
      },
      {
        heading: "Working Around Your Operations",
        body: [
          "Commercial jobs often run after hours or over weekends. We phase works by zone, coordinate with building management on access and lifts, and protect finished areas as we go.",
          "Old flooring is removed and disposed of, substrates are prepared, and new flooring is handed over clean and ready to use.",
        ],
      },
      {
        heading: "What Affects the Cost of Commercial Flooring",
        body: [
          "Pricing depends on the area, the flooring system, removal of existing finishes, substrate preparation, after-hours work, and any phasing required to keep your operations running.",
          "We provide itemised quotations so procurement teams can compare scope accurately.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you work after office hours?",
        a: "Yes. We schedule commercial works after hours or over weekends when needed, and plan them with your building management.",
      },
      {
        q: "Can you work with our interior designer or main contractor?",
        a: "Yes. We regularly coordinate with designers and main contractors on specifications, programme and handover.",
      },
      {
        q: "Which flooring is best for a busy office?",
        a: "Carpet tiles and commercial-grade vinyl are the most common choices. We recommend based on traffic, acoustics and how the space is cleaned.",
      },
    ],
  },

  "parquet-flooring": {
    seoTitle: "Parquet Flooring Singapore: Install & Restore",
    metaDescription: `Parquet flooring in Singapore: herringbone, chevron and block patterns, plus parquet sanding and restoration. ${CALL}`,
    sections: [
      {
        heading: "Parquet in Singapore Homes",
        body: [
          "Many older HDB flats and landed homes still have their original parquet, often in good timber that is worth restoring. New parquet in herringbone or chevron is also a popular choice for living rooms and bedrooms.",
          "Because parquet is made of small blocks, it handles humidity movement well when it is installed on a sound, dry base.",
        ],
      },
      {
        heading: "Repairing Loose or Damaged Parquet",
        body: [
          "Loose, lifting or hollow-sounding blocks are common in older floors. We re-bond loose blocks, replace damaged ones with matching timber where possible, and level the area before sanding.",
          "Once repaired, the floor is sanded and refinished so the patched areas blend in with the rest.",
        ],
      },
      {
        heading: "What Affects the Cost of Parquet",
        body: [
          "For new parquet, the pattern, timber species, block size and floor preparation are the main factors. For restoration, the area, the number of loose or damaged blocks, and the finish you choose decide the price.",
          "We assess the floor on site and give you an itemised quotation for either option.",
        ],
      },
    ],
    faq: [
      {
        q: "Can old parquet be restored instead of replaced?",
        a: "Often, yes. If the blocks are thick enough, we repair loose areas, sand and refinish the floor to bring it back to life.",
      },
      {
        q: "Is herringbone harder to install than straight planks?",
        a: "Yes. Herringbone and chevron need precise setting out and more cutting, so they take longer and cost more than straight-laid flooring.",
      },
      {
        q: "Why is my parquet lifting?",
        a: "Usually because of moisture, failed adhesive or movement in the base. We find the cause before repairing so the problem does not come back.",
      },
    ],
  },

  "home-renovation": {
    seoTitle: "Home Renovation Singapore for HDB & Condos",
    metaDescription: `Flooring-led home renovation in Singapore for HDB, condo and landed homes: floors, decking, waterproofing and more. ${CALL}`,
    sections: [
      {
        heading: "Planning a Renovation Around Your Floors",
        body: [
          "Floors are one of the first decisions in a renovation and one of the last finishes installed. Planning them early helps you choose door heights, skirting and transitions that work together.",
          "We advise on which flooring suits each room, then schedule the works so floors go down after messy trades are finished and are protected until handover.",
        ],
      },
      {
        heading: "Renovating an HDB Flat or Condominium",
        body: [
          "HDB flats and condominiums have renovation rules on permitted works, working hours and notifications. We check what applies to your home and plan the work accordingly.",
          "For occupied homes, we can phase work room by room to reduce disruption.",
        ],
      },
      {
        heading: "What Affects the Cost of a Renovation",
        body: [
          "The scope of work, the floor area, material choices, removal of existing finishes, and any waterproofing or levelling needed are the main factors.",
          "After a site visit we give you an itemised quotation and a clear schedule, so you know what is included and when each stage happens.",
        ],
      },
    ],
    faq: [
      {
        q: "Do you handle full home renovations?",
        a: "We focus on flooring-led renovation: flooring, decking, waterproofing, sanding and varnish, and roof shelters. We confirm what we deliver in-house during the site visit.",
      },
      {
        q: "Can you renovate while we are living at home?",
        a: "Yes. We can phase works room by room and keep dust and noise to a minimum.",
      },
      {
        q: "How long does a flooring renovation take?",
        a: "It depends on the scope. Flooring alone in a typical unit often takes a few days, while larger renovations are scheduled in stages.",
      },
    ],
  },

  "sand-and-varnish": {
    seoTitle: "Floor Sanding & Varnish Singapore",
    metaDescription: `Timber and parquet floor sanding and varnish in Singapore. Remove scratches, restore colour and protect your floor. ${CALL}`,
    sections: [
      {
        heading: "Is Your Floor Worth Restoring?",
        body: [
          "Scratches, dull patches, grey or worn walkways and old yellowed varnish can usually be removed by sanding, as long as the timber has enough thickness left.",
          "We check the floor on site and tell you honestly whether sanding will give a good result, or whether replacement makes more sense.",
        ],
      },
      {
        heading: "Preparing Your Home for Sanding",
        body: [
          "Rooms need to be cleared of furniture before work starts. We use dust-extraction equipment to keep the mess down, and seal off doorways where needed.",
          "Most rooms can be used again after the final coat has dried. We will tell you how long to wait before walking on the floor and before moving furniture back.",
        ],
      },
      {
        heading: "What Affects the Cost of Sanding and Varnish",
        body: [
          "The floor area, the type and condition of the timber, the number of repairs, and the finish you choose decide the price.",
          "Stairs, borders and inlays take more detailed work and are quoted separately.",
        ],
      },
    ],
    faq: [
      {
        q: "How many times can a wooden floor be sanded?",
        a: "Solid timber and parquet can usually be sanded several times. Engineered floors depend on the thickness of the top layer, which we check before starting.",
      },
      {
        q: "Matte or glossy finish?",
        a: "Matte and satin finishes hide scratches better and look more natural. Gloss gives a classic shine but shows wear sooner.",
      },
      {
        q: "Is floor sanding dusty?",
        a: "We use dust-extraction equipment, which captures most of the dust. Some light cleaning may still be needed afterwards.",
      },
    ],
  },

  "waterproofing-services": {
    seoTitle: "Waterproofing Services Singapore",
    metaDescription: `Waterproofing for balconies, roofs, planters and decks in Singapore, applied before finishes and water-tested. ${CALL}`,
    sections: [
      {
        heading: "Signs You Need Waterproofing",
        body: [
          "Water stains or peeling paint on the ceiling below, damp patches, mould near the floor, and water that pools instead of draining are common signs of a failed membrane.",
          "Finding the cause early prevents damage to your floors, walls and your neighbour's ceiling.",
        ],
      },
      {
        heading: "Waterproofing Before New Flooring or Decking",
        body: [
          "If you are adding a deck or new flooring to a balcony, roof or wet area, it is the right time to check the waterproofing. Once finishes are installed, repairs become much more disruptive.",
          "We apply the membrane, test it with water, and only then install the finish on top.",
        ],
      },
      {
        heading: "What Affects the Cost of Waterproofing",
        body: [
          "The area, the type of membrane, whether existing finishes must be removed, and the condition of the surface underneath are the main cost factors.",
          "We inspect the area first and explain the cause of the leak before recommending a solution.",
        ],
      },
    ],
    faq: [
      {
        q: "Can you find where a leak is coming from?",
        a: "We inspect the area to identify the likely cause before recommending work. Some leaks need investigation over more than one visit.",
      },
      {
        q: "Do you need to hack the tiles to waterproof?",
        a: "Not always. It depends on the cause and the system. We explain the options and their trade-offs after the inspection.",
      },
      {
        q: "Can waterproofing be done on a balcony before decking?",
        a: "Yes, and we recommend it. Waterproofing is easiest to do properly before the deck goes in.",
      },
    ],
  },
};
