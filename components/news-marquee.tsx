'use client'

import Link from 'next/link'

const newsItems = [
  { label: 'Mirzam Chocolate: 4.8x ROAS on UAE e-commerce', href: '/work/mirzam' },
  { label: 'YLEM watch launch nominated on Awwwards', href: '/work/ylem' },
  { label: 'Luxury Places: 6.1x ROAS on Swiss property campaigns', href: '/work/luxury-places' },
  { label: 'Palazzo Sogni direct bookings up 56%', href: '/work/palazzo-sogni' },
  { label: 'Ballena fine dining ads fill weekend tables', href: '/work/ballena' },
  { label: 'Denver · Geneva · Abu Dhabi — now accepting projects', href: '/contact' },
]

export function NewsMarquee() {
  const items = [...newsItems, ...newsItems]

  return (
    <div className="overflow-hidden border-t border-border py-3">
      <div className="flex w-max marquee-track">
        {items.map((item, i) => (
          <Link
            key={`${item.label}-${i}`}
            href={item.href}
            data-cursor="hover"
            className="group mx-8 flex shrink-0 items-center gap-3 whitespace-nowrap"
          >
            <span className="label-caps text-muted-foreground">News</span>
            <span className="text-sm text-foreground/70 transition-colors group-hover:text-foreground">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  )
}
