import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'GIEO Blog — Digital Systems, AI & Growth',
  description:
    'GIEO blog on custom websites, CRM automation, AI chatbots, SEO, GEO, and growth systems for premium brands. Insights from Denver, Geneva, and Abu Dhabi.',
  path: '/blog',
  keywords: ['GIEO blog', 'GIEO insights', 'digital systems blog', 'GEO optimization', 'CRM automation tips'],
})

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
