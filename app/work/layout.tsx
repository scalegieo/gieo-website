import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'GIEO Work — Case Studies & Client Launches',
  description:
    'Explore GIEO case studies: Mirzam Chocolate, YLEM, Acsono, luxury hospitality, real estate, and B2B launches with measurable ROAS and conversion results.',
  path: '/work',
  keywords: ['GIEO portfolio', 'GIEO case studies', 'GIEO work', 'GIEO clients', 'GIEO projects'],
})

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children
}
