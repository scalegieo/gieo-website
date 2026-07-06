import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/constants'
import { caseStudies } from '@/lib/case-studies'
import { SITE_TAGLINE, SITE_URL, SOCIAL } from '@/lib/seo'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'GIEO',
    alternateName: ['GIEO Agency', 'GIEO Digital', 'GIEO Digital Systems'],
    url: SITE_URL,
    logo: `${SITE_URL}/opengraph-image.png`,
    image: `${SITE_URL}/opengraph-image.png`,
    description:
      'GIEO is a digital systems agency building custom websites, AI automation, CRM infrastructure, and growth systems for premium brands in Denver, Geneva, Abu Dhabi, and worldwide.',
    slogan: SITE_TAGLINE,
    email: CONTACT_EMAIL,
    telephone: CONTACT_PHONE_DISPLAY,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: CONTACT_EMAIL,
        telephone: CONTACT_PHONE_DISPLAY,
        url: WHATSAPP_URL,
        availableLanguage: ['English'],
        areaServed: ['US', 'CH', 'AE', 'Worldwide'],
      },
    ],
    sameAs: [SOCIAL.linkedin],
    knowsAbout: [
      'Custom web development',
      'AI automation',
      'CRM systems',
      'Digital marketing',
      'SEO',
      'Lead generation',
    ],
  }
}

export function getWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'GIEO',
    alternateName: 'GIEO Digital Systems Agency',
    url: SITE_URL,
    description:
      'Official website of GIEO — digital systems agency for custom websites, AI, CRM, and growth.',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/work?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }
}

export function getLocalBusinessSchemas() {
  return [
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#denver`,
      name: 'GIEO — Denver',
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      description: 'GIEO digital systems agency serving Denver, Colorado and the Rocky Mountain region.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Denver',
        addressRegion: 'CO',
        addressCountry: 'US',
      },
      areaServed: { '@type': 'City', name: 'Denver' },
      priceRange: '$$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#geneva`,
      name: 'GIEO — Geneva',
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      description: 'GIEO digital systems agency serving Geneva, Switzerland and the Swiss market.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Geneva',
        addressCountry: 'CH',
      },
      areaServed: { '@type': 'City', name: 'Geneva' },
      priceRange: '$$$',
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#abudhabi`,
      name: 'GIEO — Abu Dhabi',
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      url: SITE_URL,
      description: 'GIEO digital systems agency serving Abu Dhabi, UAE and the Gulf region.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Abu Dhabi',
        addressCountry: 'AE',
      },
      areaServed: { '@type': 'City', name: 'Abu Dhabi' },
      priceRange: '$$$',
    },
  ]
}

export function getServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#services`,
    name: 'GIEO Digital Systems',
    provider: { '@id': `${SITE_URL}/#organization` },
    serviceType: 'Digital Systems Agency',
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'GIEO Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Websites',
            description: 'High-performance, conversion-focused websites built from scratch.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Chatbots & Automation',
            description: 'AI chatbots, CRM workflows, and intelligent automations.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'CRM & Lead Capture',
            description: 'Custom CRM setup, booking systems, and lead capture infrastructure.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'SEO, GEO & Growth Systems',
            description: 'SEO, local search, AI visibility optimization, and paid media.',
          },
        },
      ],
    },
  }
}

export function getFaqSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is GIEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GIEO is a digital systems agency that builds custom websites, AI automation, CRM infrastructure, and paid growth systems for premium brands. GIEO operates from Denver, Geneva, and Abu Dhabi and serves clients worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'What does GIEO do?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GIEO designs and builds integrated digital systems — custom websites, AI chatbots, CRM pipelines, booking flows, paid advertising, and SEO — so businesses can capture leads, automate follow-up, and scale revenue without fragmented tools.',
        },
      },
      {
        '@type': 'Question',
        name: 'Where is GIEO located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GIEO serves clients from Denver, Colorado (USA), Geneva (Switzerland), and Abu Dhabi (UAE), with remote delivery worldwide.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I contact GIEO?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Book a 30-minute call at ${SITE_URL}/#contact, email scale.gieo@gmail.com, call +1 (720) 258-9835, or message GIEO on WhatsApp.`,
        },
      },
      {
        '@type': 'Question',
        name: 'Who has GIEO worked with?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: `GIEO has launched digital systems for brands including ${caseStudies
            .slice(0, 5)
            .map((c) => c.name)
            .join(', ')}, and more across luxury, hospitality, B2B, and e-commerce.`,
        },
      },
    ],
  }
}

export function getAllStructuredData() {
  return [
    getOrganizationSchema(),
    getWebSiteSchema(),
    ...getLocalBusinessSchemas(),
    getServiceSchema(),
    getFaqSchema(),
  ]
}
