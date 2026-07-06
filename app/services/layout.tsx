import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'GIEO Services — Websites, AI, CRM & Growth',
  description:
    'GIEO services: custom websites, AI chatbots, CRM automation, paid ads, SEO, and growth systems. Project-scoped pricing from Denver, Geneva, and Abu Dhabi.',
  path: '/services',
  keywords: [
    'GIEO services',
    'GIEO web design',
    'GIEO CRM automation',
    'GIEO AI chatbots',
    'digital agency services',
  ],
})

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children
}
