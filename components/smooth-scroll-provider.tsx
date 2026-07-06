'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import {
  BOOK_CALL_SECTION_ID,
  scheduleBookCallScroll,
  setScrollController,
} from '@/lib/book-call'

const LENIS_DISABLED_PATHS = ['/blog']

function shouldScrollToBookCall() {
  if (typeof window === 'undefined') return false
  return window.location.hash === `#${BOOK_CALL_SECTION_ID}`
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const pathname = usePathname()
  const lenisDisabled = LENIS_DISABLED_PATHS.includes(pathname)

  useEffect(() => {
    if (lenisDisabled) {
      setScrollController(null)
      return
    }

    const lenis = new Lenis({
      lerp: 0.08,
      smoothWheel: true,
      wheelMultiplier: 0.9,
    })
    lenisRef.current = lenis
    setScrollController(lenis)

    let raf = 0
    function frame(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(frame)
    }
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      setScrollController(null)
      lenis.destroy()
      lenisRef.current = null
    }
  }, [lenisDisabled])

  useEffect(() => {
    if (!shouldScrollToBookCall()) return
    const timer = setTimeout(() => scheduleBookCallScroll(), 120)
    return () => clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    function onHashChange() {
      if (shouldScrollToBookCall()) scheduleBookCallScroll()
    }

    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  return <>{children}</>
}
