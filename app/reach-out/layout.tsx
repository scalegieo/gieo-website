import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'Reach Out to GIEO — Email, Phone & WhatsApp',
  description:
    'Contact GIEO by email at scale.gieo@gmail.com, phone +1 (720) 258-9835, or WhatsApp. Denver · Geneva · Abu Dhabi · worldwide.',
  path: '/reach-out',
  keywords: ['reach out GIEO', 'contact GIEO', 'GIEO email', 'GIEO WhatsApp', 'GIEO phone'],
})

export default function ReachOutLayout({ children }: { children: React.ReactNode }) {
  return children
}
