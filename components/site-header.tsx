'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ArrowLeft, ArrowRight, LayoutGrid, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { BookCallLink } from '@/components/book-call-link'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/constants'

const navItems = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export function SiteHeader() {
  const pathname = usePathname()
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [heroScrolled, setHeroScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      setHeroScrolled(window.scrollY > 80)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 flex items-center justify-between px-5 py-5 md:px-8 md:py-6',
          'transition-colors duration-700 ease-heco',
          scrolled ? 'bg-background/80 backdrop-blur-md' : 'bg-transparent',
        )}
      >
        <Link
          href="/"
          data-cursor="hover"
          className={cn(
            'relative flex h-10 items-center transition-opacity duration-500 md:h-12',
            pathname === '/' && !heroScrolled ? 'opacity-0' : 'opacity-100',
          )}
        >
          <Image
            src="/gieo-logo-nav.png"
            alt="GIEO"
            width={305}
            height={108}
            className="h-full w-auto max-w-[min(42vw,220px)] object-contain object-left mix-blend-multiply md:max-w-[260px]"
            style={{ width: 'auto', height: '100%' }}
            priority
          />
        </Link>

        <div className="flex items-center gap-1 md:gap-2">
          <button
            type="button"
            aria-label="Previous"
            className="flex h-9 w-9 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
            data-cursor="hover"
            onClick={() => {
              if (pathname === '/' || window.history.length <= 1) {
                router.push('/')
              } else {
                router.back()
              }
            }}
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            data-cursor="hover"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
          >
            {open ? (
              <X className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <LayoutGrid className="h-4 w-4" strokeWidth={1.5} />
            )}
          </button>
          <BookCallLink
            className="flex h-9 w-9 items-center justify-center text-foreground/60 transition-colors hover:text-foreground"
            aria-label="Book a call"
          >
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </BookCallLink>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between bg-background px-5 pb-10 pt-24 md:px-8"
          >
            <nav className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
                >
                  <Link
                    href={item.href}
                    data-cursor="hover"
                    onClick={() => setOpen(false)}
                    className={cn(
                      'font-heading text-[clamp(2.5rem,8vw,5rem)] italic leading-none tracking-tight transition-opacity',
                      pathname === item.href ? 'text-foreground' : 'text-foreground/30 hover:text-foreground/70',
                    )}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col gap-2 border-t border-border pt-8"
            >
              <BookCallLink
                onClick={() => setOpen(false)}
                className="label-caps text-foreground hover:opacity-60"
              >
                Book a 30 Min Call ↓
              </BookCallLink>
              <p className="label-caps text-muted-foreground">{CONTACT_EMAIL}</p>
              <a
                href={`tel:${CONTACT_PHONE}`}
                className="label-caps text-muted-foreground transition-opacity hover:text-foreground"
              >
                {CONTACT_PHONE_DISPLAY}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="label-caps text-muted-foreground transition-opacity hover:text-foreground"
              >
                WhatsApp ↗
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
