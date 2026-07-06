import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'About GIEO — Digital Systems Agency',
  description:
    'Learn about GIEO — a digital systems agency in Denver, Geneva, and Abu Dhabi. We build custom websites, AI automation, and CRM infrastructure for premium brands worldwide.',
  path: '/about',
  keywords: [
    'GIEO',
    'about GIEO',
    'GIEO agency team',
    'digital agency Denver Geneva Abu Dhabi',
  ],
})

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
