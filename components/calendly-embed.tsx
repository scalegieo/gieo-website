'use client'

import { useEffect, useRef } from 'react'
import Script from 'next/script'

// Dark slate theme aligned with GIEO site
const CALENDLY_EMBED_URL =
  'https://calendly.com/scale-gieo/30min?background_color=1a1a1a&text_color=f0ede6&primary_color=d4af37&hide_event_type_details=1&hide_landing_page_details=1'

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string
        parentElement: HTMLElement
      }) => void
    }
  }
}

function mountWidget(container: HTMLDivElement) {
  if (!window.Calendly) return
  container.innerHTML = ''
  window.Calendly.initInlineWidget({
    url: CALENDLY_EMBED_URL,
    parentElement: container,
  })
}

export function CalendlyEmbed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    if (window.Calendly) {
      mountWidget(container)
      return
    }

    const id = setInterval(() => {
      if (window.Calendly && containerRef.current) {
        clearInterval(id)
        mountWidget(containerRef.current)
      }
    }, 100)

    return () => clearInterval(id)
  }, [])

  return (
    <>
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (containerRef.current) mountWidget(containerRef.current)
        }}
      />
      <div
        id="calendly-embed"
        ref={containerRef}
        className="calendly-inline-widget calendly-embed-dark w-full overflow-hidden rounded-2xl border border-border/60 bg-[#1a1a1a] shadow-[0_24px_80px_-24px_rgba(0,0,0,0.45)]"
        data-url={CALENDLY_EMBED_URL}
        style={{ minWidth: '320px', height: '700px' }}
      />
    </>
  )
}
