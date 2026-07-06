import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact GIEO — Book a 30-Minute Call',
  description:
    'Contact GIEO to book a 30-minute strategy call. Email scale.gieo@gmail.com, call +1 (720) 258-9835, or schedule via Calendly. Denver · Geneva · Abu Dhabi.',
  path: '/contact',
  keywords: ['contact GIEO', 'book GIEO call', 'GIEO Calendly', 'GIEO email', 'GIEO phone'],
})

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
