export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'https://gieo.agency'

export const SITE_NAME = 'GIEO'

export const SITE_TAGLINE = 'BUILD. AUTOMATE. SCALE.'

export const DEFAULT_TITLE = 'GIEO — Digital Systems Agency | Denver · Geneva · Abu Dhabi'

export const DEFAULT_DESCRIPTION =
  'GIEO is a digital systems agency building custom websites, AI automation, CRM infrastructure, and paid growth for premium brands in Denver, Geneva, Abu Dhabi, and worldwide. Book a 30-minute call.'

export const DEFAULT_KEYWORDS = [
  'GIEO',
  'GIEO agency',
  'GIEO digital',
  'GIEO digital systems',
  'digital systems agency',
  'custom websites',
  'AI automation agency',
  'CRM automation',
  'Denver digital agency',
  'Geneva web agency',
  'Abu Dhabi digital agency',
  'growth systems',
  'web design Denver',
  'B2B website agency',
  'Calendly GIEO',
] as const

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/company/gieoagency/',
} as const

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export function pageTitle(title?: string) {
  if (!title) return DEFAULT_TITLE
  if (title.toLowerCase().includes('gieo')) return title
  return `${title} | GIEO`
}

export const OG_IMAGE = {
  url: '/opengraph-image.png',
  width: 1200,
  height: 630,
  alt: 'GIEO — BUILD. AUTOMATE. SCALE. Digital systems agency',
} as const

export function buildPageMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  keywords = [...DEFAULT_KEYWORDS],
  noIndex = false,
}: {
  title?: string
  description?: string
  path?: string
  keywords?: string[]
  noIndex?: boolean
}) {
  const resolvedTitle = pageTitle(title)
  const url = absoluteUrl(path)

  return {
    title: resolvedTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large' as const,
            'max-snippet': -1,
            'max-video-preview': -1,
          },
        },
    openGraph: {
      type: 'website' as const,
      locale: 'en_US',
      url,
      siteName: SITE_NAME,
      title: resolvedTitle,
      description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image' as const,
      title: resolvedTitle,
      description,
      images: [OG_IMAGE.url],
    },
  }
}
