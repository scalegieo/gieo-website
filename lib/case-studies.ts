export type AdPerformance = {
  headline: string
  channels: string[]
  campaigns: string
  spend: string
  roas: string
  cpa: string
  highlights: string[]
}

export type CaseStudy = {
  slug: string
  name: string
  url: string
  industry: string
  location: string
  featured: boolean
  timeline: string
  services: string[]
  tags: string[]
  gradient: string
  coverFrom: string
  coverTo: string
  image: string
  imageObjectPosition?: 'top' | 'center'
  problem: string
  strategy: string
  system: string
  deliverables: { title: string; desc: string }[]
  results: { metric: string; label: string }[]
  ads?: AdPerformance
}

export const caseStudies: CaseStudy[] = [
  {
    slug: 'mirzam',
    name: 'Mirzam Chocolate',
    url: 'https://mirzam.com/',
    industry: 'Artisan E-Commerce',
    location: 'Dubai, UAE',
    featured: true,
    timeline: '10 Weeks',
    services: ['Shopify E-Commerce', 'Brand Storytelling', 'Paid Media', 'Email Flows'],
    tags: ['E-COMMERCE', 'PAID ADS', 'DTC'],
    gradient: 'from-amber-950/40 via-stone-900/20 to-surface-2',
    coverFrom: '#3d2914',
    coverTo: '#c4a574',
    image: '/case-studies/mirzam.png',
    problem:
      'Mirzam needed a digital experience as rich as their bean-to-bar craft — one that could carry the Spice Route storytelling, drive UAE-wide e-commerce, and convert gift-season traffic without losing the premium feel.',
    strategy:
      'We rebuilt the storefront around collection storytelling, streamlined checkout for UAE delivery, and layered Meta + Google Shopping campaigns tied to seasonal collections like Safeefa and Secret Spice Garden.',
    system:
      'Premium Shopify experience, collection-led merchandising, corporate gifting flows, and paid media connected to purchase revenue.',
    deliverables: [
      { title: 'Collection Commerce', desc: 'Shop-by-story flows for gifting, UAE flavors, and single-origin bars.' },
      { title: 'Brand Storytelling', desc: 'Factory-to-table narrative woven through product and about pages.' },
      { title: 'Paid Media Engine', desc: 'Meta + Google campaigns synced to inventory and seasonal drops.' },
    ],
    results: [
      { metric: '+52%', label: 'Online revenue vs. prior year' },
      { metric: '4.8x', label: 'Blended ROAS on paid campaigns' },
      { metric: '+38%', label: 'Repeat purchase rate' },
    ],
    ads: {
      headline: 'Paid media that matched the craft',
      channels: ['Meta Ads', 'Google Shopping', 'Instagram'],
      campaigns: 'Collection launches, gift-season retargeting, and UAE lookalike prospecting',
      spend: '$24K / quarter',
      roas: '4.8x',
      cpa: '$18',
      highlights: [
        'Scaled Safeefa Collection drop with 6.2x ROAS in first 14 days',
        'Google Shopping feed optimization cut CPA 31% on bestsellers',
        'Retargeting flows recovered 22% of abandoned gift carts',
      ],
    },
  },
  {
    slug: 'ylem',
    name: 'YLEM',
    url: 'https://ylem.watch/',
    industry: 'Luxury Watch Brand',
    location: 'Switzerland',
    featured: true,
    timeline: '12 Weeks',
    services: ['Luxury Web Experience', 'Product Launch', 'Reservation System', 'Awwwards-Level UX'],
    tags: ['LUXURY', 'LAUNCH', 'AWWWARDS'],
    gradient: 'from-zinc-900/50 via-neutral-900/30 to-surface-2',
    coverFrom: '#0a0a0a',
    coverTo: '#4a4a4a',
    image: '/case-studies/ylem.png',
    problem:
      'YLEM — an independent Swiss watch brand launching its first model — needed a digital presence as refined and considered as the timepiece itself. Generic luxury templates would undermine the craftsmanship story.',
    strategy:
      'Built in collaboration with après creative studio, we engineered a cinematic product narrative: fullscreen storytelling, micro-interactions on every detail, and a reservation flow that felt as intentional as the watch.',
    system:
      'Award-nominated launch site with product, about, and reserve journeys — typography-led, fullscreen, and conversion-ready for a limited first release.',
    deliverables: [
      { title: 'Launch Experience', desc: 'Homepage and product page with video-led storytelling and premium pacing.' },
      { title: 'Reserve Flow', desc: 'High-intent reservation journey for the first model drop.' },
      { title: 'Mobile Craft', desc: 'Responsive layouts nominated on Awwwards for design and interaction quality.' },
    ],
    results: [
      { metric: 'Awwwards', label: 'Site of the Day nominee' },
      { metric: '94%', label: 'Mobile engagement rate on product page' },
      { metric: 'Sold out', label: 'First production run via reserve flow' },
    ],
  },
  {
    slug: 'acsono',
    name: 'Acsono',
    url: 'https://www.acsono.com/',
    industry: 'B2B Acoustic Solutions',
    location: 'Switzerland',
    featured: true,
    timeline: '8 Weeks',
    services: ['B2B Website', 'Product Showcase', 'Lead Generation', 'Multilingual UX'],
    tags: ['B2B', 'WEBSITE', 'LEAD GEN'],
    gradient: 'from-stone-800/40 via-neutral-800/20 to-surface-2',
    coverFrom: '#2c2824',
    coverTo: '#a8895c',
    image: '/case-studies/acsono.png',
    imageObjectPosition: 'center',
    problem:
      'Acsono sells precision acoustic systems to architects, schools, and enterprise clients — but their digital presence did not reflect the technical credibility of FineMicro, Perfo, and Linea product lines.',
    strategy:
      'We structured the site around use-case verticals (office, education, hospitality, concert halls), interactive product education, and consultation CTAs that route high-value B2B leads into their sales team.',
    system:
      'Multilingual B2B platform with reference projects, acoustic education content, and product-line architecture built for specification-driven buyers.',
    deliverables: [
      { title: 'Product Architecture', desc: 'FineMicro, Perfo, and Linea showcased with use-case routing.' },
      { title: 'Reference Portfolio', desc: 'Roche Auditorium, National Library Luxembourg, and more.' },
      { title: 'Consultation Funnel', desc: 'Beratung flows for architects and facility planners.' },
    ],
    results: [
      { metric: '+64%', label: 'Qualified consultation requests' },
      { metric: '3.1x', label: 'Time on site for product pages' },
      { metric: '+41%', label: 'Inbound leads from DACH region' },
    ],
  },
  {
    slug: 'loft-thirty-one',
    name: 'Loft Thirty One',
    url: 'https://www.loftthirtyone.com/',
    industry: 'Design-Build Studio',
    location: 'Idaho, USA',
    featured: false,
    timeline: '6 Weeks',
    services: ['Portfolio Website', 'Video Integration', 'Lead Capture', 'Brand Positioning'],
    tags: ['PORTFOLIO', 'DESIGN-BUILD', 'RESIDENTIAL'],
    gradient: 'from-stone-800/40 via-neutral-800/20 to-surface-2',
    coverFrom: '#292524',
    coverTo: '#78716c',
    image: '/case-studies/loft-thirty-one.jpg',
    problem:
      'Loft Thirty One delivers end-to-end residential and commercial spaces coast to coast — but calling them an "interior design firm" undersold their owner-rep, procurement, and construction capabilities.',
    strategy:
      'We built a bold portfolio experience around "We build sensational spaces" — video-led proof, process transparency, and a direct call-to-action for investors and homeowners ready to move.',
    system:
      'Award-winning design-build portfolio with The Crew, The Process, and The Proof sections — positioning LOFT as partner from day one, not just designers.',
    deliverables: [
      { title: 'Portfolio Experience', desc: 'Video and project showcase for residential and commercial work.' },
      { title: 'Process Story', desc: 'Concept, 3D, procurement, and execution narrative.' },
      { title: 'Lead Capture', desc: 'Direct consultation routing for investment and forever-home projects.' },
    ],
    results: [
      { metric: '+47%', label: 'Consultation form submissions' },
      { metric: '2.8x', label: 'Avg. session duration' },
      { metric: '+33%', label: 'Commercial project inquiries' },
    ],
  },
  {
    slug: 'palazzo-sogni',
    name: 'Palazzo Sogni',
    url: 'https://www.palazzosogni.com/',
    industry: 'Experiential Luxury Hotel',
    location: 'Florence, Italy',
    featured: false,
    timeline: '9 Weeks',
    services: ['Luxury Hospitality Web', 'Booking Integration', 'Paid Media', 'Visual Storytelling'],
    tags: ['HOTEL', 'HOSPITALITY', 'PAID ADS'],
    gradient: 'from-amber-900/30 via-rose-950/20 to-surface-2',
    coverFrom: '#451a03',
    coverTo: '#d4a574',
    image: '/case-studies/palazzo-sogni.webp',
    problem:
      'Palazzo Sogni is an experiential hotel steps from the Duomo — but their digital presence needed to match the frescoed suites, Segreto Restaurant, and dreamlike wellness rituals that define the stay.',
    strategy:
      'We crafted an immersive booking experience around suite tiers (Heritage, Majestic, Charming), integrated inquiry flows, and Meta + Google Hotel campaigns targeting high-intent luxury travelers.',
    system:
      'Florence luxury hotel site with room storytelling, outlet showcase, and paid media driving direct bookings over OTA dependency.',
    deliverables: [
      { title: 'Suite Storytelling', desc: 'Heritage, Majestic, and Collection suites with fresco narrative.' },
      { title: 'Experience Map', desc: 'Segreto Restaurant, Hall of Wonders, and wellness rituals.' },
      { title: 'Direct Booking Ads', desc: 'Meta + Google Hotel campaigns for international luxury travelers.' },
    ],
    results: [
      { metric: '+56%', label: 'Direct booking inquiries' },
      { metric: '5.2x', label: 'ROAS on hotel campaigns' },
      { metric: '-28%', label: 'OTA commission dependency' },
    ],
    ads: {
      headline: 'Direct bookings over OTAs',
      channels: ['Meta Ads', 'Google Hotel Ads', 'Instagram'],
      campaigns: 'Luxury traveler prospecting, Duomo-area geo targeting, and suite retargeting',
      spend: '$18K / quarter',
      roas: '5.2x',
      cpa: '$42',
      highlights: [
        'Heritage Suite campaigns drove 68% of direct booking value',
        'Instagram Reels cut cost-per-inquiry 44% vs. static ads',
        'Retargeting converted 19% of site visitors who viewed Majestic Suite',
      ],
    },
  },
  {
    slug: 'ballena',
    name: 'Ballena',
    url: 'https://ballenacabo.com/',
    industry: 'Fine Dining Restaurant',
    location: 'Los Cabos, Mexico',
    featured: false,
    timeline: '7 Weeks',
    services: ['Restaurant Website', 'Events & Gallery', 'Paid Media', 'Gift Card Flows'],
    tags: ['RESTAURANT', 'HOSPITALITY', 'PAID ADS'],
    gradient: 'from-teal-950/40 via-amber-950/20 to-surface-2',
    coverFrom: '#134e4a',
    coverTo: '#d97706',
    image: '/case-studies/ballena.png',
    problem:
      'Ballena — a sea-and-desert fine dining destination in San José del Cabo — needed a web presence that felt as natural as the landscape: reservations, events, and the Grupo Hunan story in one cohesive experience.',
    strategy:
      'We built an atmosphere-first site with menu, gallery, and events flows — then ran Instagram and Meta campaigns targeting Cabo visitors and special-occasion diners to fill tables and event bookings.',
    system:
      'Fine dining web experience with reservation CTAs, gift cards, events showcase, and paid social driving covers and private dining inquiries.',
    deliverables: [
      { title: 'Atmosphere Site', desc: 'Sea-and-desert visual narrative with menu and gallery.' },
      { title: 'Events & Gatherings', desc: 'Private dining and group booking flows beyond the table.' },
      { title: 'Social Ad Engine', desc: 'Instagram-first campaigns for tourists and local occasion dining.' },
    ],
    results: [
      { metric: '+44%', label: 'Reservation requests online' },
      { metric: '3.9x', label: 'ROAS on dining campaigns' },
      { metric: '+31%', label: 'Event inquiry volume' },
    ],
    ads: {
      headline: 'Filling tables from social',
      channels: ['Meta Ads', 'Instagram', 'Google Local'],
      campaigns: 'Tourist geo-targeting, occasion dining, and event promotion',
      spend: '$12K / quarter',
      roas: '3.9x',
      cpa: '$28',
      highlights: [
        'Weekend brunch campaigns hit 4.6x ROAS during peak season',
        'Event ads generated 23 private dining bookings in 60 days',
        'Gift card promo drove $14K in pre-paid revenue',
      ],
    },
  },
  {
    slug: 'luxury-places',
    name: 'Luxury Places',
    url: 'https://www.luxury-places.ch/',
    industry: 'Luxury Real Estate',
    location: 'Lake Geneva, Switzerland',
    featured: false,
    timeline: '11 Weeks',
    services: ['Property Portal', 'CRM Integration', 'Paid Media', 'Editorial Platform'],
    tags: ['REAL ESTATE', 'LUXURY', 'PAID ADS'],
    gradient: 'from-indigo-950/40 via-slate-900/30 to-surface-2',
    coverFrom: '#1e1b4b',
    coverTo: '#64748b',
    image: '/case-studies/luxury-places.png',
    problem:
      'Luxury Places manages 150+ exceptional Swiss properties — lakeside villas, historic estates, equestrian homes — but needed a platform and ad strategy that matched the caliber of CHF 8M+ listings.',
    strategy:
      'We built a categorized property portal (waterfront, historic, modern, equestrian), editorial journal integration, and Meta + LinkedIn campaigns targeting qualified international buyers on the Léman arc.',
    system:
      'Luxury property marketplace with visual production showcase, broker CRM handoff, and paid media driving qualified viewing requests.',
    deliverables: [
      { title: 'Property Portal', desc: '153+ listings with category filters and premium presentation.' },
      { title: 'Editorial Journal', desc: 'Market insights and property features for authority and SEO.' },
      { title: 'Buyer Acquisition Ads', desc: 'Meta + LinkedIn luxury targeting for international acquirers.' },
    ],
    results: [
      { metric: '+71%', label: 'Qualified viewing requests' },
      { metric: '6.1x', label: 'ROAS on luxury buyer campaigns' },
      { metric: 'CHF 42M', label: 'Pipeline influenced in 6 months' },
    ],
    ads: {
      headline: 'Qualified buyers at scale',
      channels: ['Meta Ads', 'LinkedIn Ads', 'Google Display'],
      campaigns: 'International luxury buyer targeting, property retargeting, and lakefront geo campaigns',
      spend: '$32K / quarter',
      roas: '6.1x',
      cpa: '$186',
      highlights: [
        'LinkedIn campaigns delivered highest-value leads at CHF 890 CPL',
        'Waterfront property retargeting converted 12% of repeat visitors',
        'Meta lookalikes from closed deals cut CPA 38% vs. broad targeting',
      ],
    },
  },
]

export const caseStudiesBySlug = Object.fromEntries(
  caseStudies.map((study) => [study.slug, study]),
) as Record<string, CaseStudy>

export const featuredCaseStudies = caseStudies.filter((s) => s.featured)

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudiesBySlug[slug]
}

export const industryCategories = [
  {
    label: 'Legal Firms',
    back: 'High-trust websites, intake systems, and CRM for firms that need credibility and modern client workflows.',
  },
  {
    label: 'Medical & Wellness',
    back: 'Booking systems, HIPAA-aware workflows, and patient intake — from clinics to wellness brands like Atlas Wellness.',
  },
  {
    label: 'Real Estate',
    back: 'IDX integration, luxury branding, and lead capture for brokers and property groups worldwide.',
  },
  {
    label: 'Financial Services',
    back: 'Wealth management, fintech, and advisory firms needing security, clarity, and clean data visualization.',
  },
  {
    label: 'Construction',
    back: 'Visual portfolios, quote capture, and project systems for builders and architecture studios.',
  },
  {
    label: 'Hospitality',
    back: 'Hotels, resorts, and fine dining brands driving direct bookings and premium guest experiences.',
  },
  {
    label: 'Fashion & Retail',
    back: 'E-commerce, DTC launches, and luxury retail with conversion-focused storefronts and paid media.',
  },
  {
    label: 'Automotive',
    back: 'Dealerships, custom shops, and EV startups — inventory, leads, and brand presence that converts.',
  },
  {
    label: 'Education',
    back: 'Private schools, universities, and edtech platforms with enrollment flows and modern digital presence.',
  },
  {
    label: 'Nonprofits',
    back: 'Foundations and arts organizations modernizing donations, storytelling, and community engagement.',
  },
  {
    label: 'SaaS & Tech',
    back: 'Product launches, custom web apps, API integrations, and growth systems for funded tech teams.',
  },
  {
    label: 'Professional Services',
    back: 'Consulting, accounting, insurance, and B2B firms scaling credibility and inbound pipeline.',
  },
  {
    label: 'Home Services',
    back: 'HVAC, roofing, landscaping, and local trades — local SEO, lead capture, and follow-up automation.',
  },
  {
    label: 'Restaurants',
    back: 'Fine dining, hotel F&B, and destination restaurants driving reservations, events, and repeat visits.',
  },
  {
    label: 'Hotels',
    back: 'Boutique and experiential hospitality winning direct bookings over OTAs with premium web experiences.',
  },
  {
    label: 'Agencies',
    back: 'Creative studios and marketing firms scaling their own digital presence and client delivery systems.',
  },
  {
    label: 'Events & Weddings',
    back: 'Destination weddings, luxury events, and planners needing stunning portfolios and inquiry flows.',
  },
  {
    label: 'Entertainment & Media',
    back: 'Production studios, talent brands, and media companies with cinematic sites and audience growth.',
  },
  {
    label: 'Sports & Fitness',
    back: 'Boutique gyms, clubs, and performance brands with membership flows and local demand generation.',
  },
  {
    label: 'Startups',
    back: 'Product launches, DTC brands, and funded teams building websites, ads, and systems from zero to scale.',
  },
] as const
