import type { MetadataRoute } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/seo'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${SITE_NAME} — Digital Systems Agency`,
    short_name: SITE_NAME,
    description:
      'GIEO builds custom websites, AI automation, CRM systems, and growth infrastructure for premium brands.',
    start_url: '/',
    display: 'standalone',
    background_color: '#E8E6E1',
    theme_color: '#E8E6E1',
    icons: [
      {
        src: '/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/icon-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
      {
        src: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
        purpose: 'any',
      },
    ],
    categories: ['business', 'productivity'],
    lang: 'en-US',
    id: SITE_URL,
  }
}
