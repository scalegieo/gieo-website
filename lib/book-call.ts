import type Lenis from 'lenis'

export const BOOK_CALL_SECTION_ID = 'contact'
export const CALENDLY_EMBED_ID = 'calendly-embed'

/** Clearance for fixed header when scrolling to Calendly */
const HEADER_OFFSET = -96

let lenisInstance: Lenis | null = null

export function setScrollController(lenis: Lenis | null) {
  lenisInstance = lenis
}

export function stopSmoothScroll() {
  lenisInstance?.stop()
}

export function startSmoothScroll() {
  lenisInstance?.start()
}

export function getBookCallTarget() {
  return (
    document.getElementById(CALENDLY_EMBED_ID) ??
    document.getElementById(BOOK_CALL_SECTION_ID)
  )
}

export function scrollToBookCall() {
  const target = getBookCallTarget()
  if (!target) return false

  if (lenisInstance) {
    lenisInstance.scrollTo(target, {
      offset: HEADER_OFFSET,
      duration: 1.35,
      lock: true,
    })
    return true
  }

  const top = target.getBoundingClientRect().top + window.scrollY + HEADER_OFFSET
  window.scrollTo({ top, behavior: 'smooth' })
  return true
}

/** Retry until the Calendly block exists (e.g. after client navigation). */
export function scheduleBookCallScroll(retries = 40) {
  if (scrollToBookCall()) return

  if (retries <= 0) return
  requestAnimationFrame(() => scheduleBookCallScroll(retries - 1))
}

export function getBookCallPath(pathname: string) {
  if (pathname === '/' || pathname === '/contact') {
    return `#${BOOK_CALL_SECTION_ID}`
  }
  return `/#${BOOK_CALL_SECTION_ID}`
}
