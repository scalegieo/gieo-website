'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { BookCallLink } from '@/components/book-call-link'
import { NewsletterForm } from '@/components/newsletter-form'
import { ProjectCover } from '@/components/project-cover'
import { getCaseStudy } from '@/lib/case-studies'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/constants'

const footerLinks = [
  { label: 'Work', href: '/work' },
  { label: 'Services', href: '/services' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

const featuredCards = [
  {
    title: 'Mirzam Chocolate',
    tag: 'E-Commerce · 4.8x ROAS',
    href: '/work/mirzam',
    slug: 'mirzam',
  },
  {
    title: 'YLEM',
    tag: 'Luxury Launch · Awwwards',
    href: '/work/ylem',
    slug: 'ylem',
  },
]

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/gieoagency/' },
]

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-surface-dark text-primary-foreground">
      {/* Large editorial nav */}
      <div className="px-5 pt-24 md:px-8 md:pt-32">
        <nav className="flex flex-col gap-1">
          {footerLinks.map((link) => (
            <div key={link.href}>
              <Link
                href={link.href}
                data-cursor="hover"
                className="font-heading text-[clamp(3rem,10vw,7rem)] italic leading-[0.95] tracking-tight text-primary-foreground transition-opacity hover:opacity-50"
              >
                {link.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-8">
          <Link href="/blog" data-cursor="hover" className="label-caps text-primary-foreground/50 hover:text-primary-foreground">
            Blog ↗
          </Link>
          <BookCallLink className="label-caps text-primary-foreground/50 hover:text-primary-foreground">
            Book a Call ↓
          </BookCallLink>
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            data-cursor="hover"
            className="label-caps text-primary-foreground/50 hover:text-primary-foreground"
          >
            {CONTACT_EMAIL} ↗
          </a>
          <a
            href={`tel:${CONTACT_PHONE}`}
            data-cursor="hover"
            className="label-caps text-primary-foreground/50 hover:text-primary-foreground"
          >
            {CONTACT_PHONE_DISPLAY} ↗
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="hover"
            className="label-caps text-primary-foreground/50 hover:text-primary-foreground"
          >
            WhatsApp ↗
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="label-caps text-primary-foreground/50 hover:text-primary-foreground"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>

      {/* Featured project cards — Heco-style rounded cards */}
      <div className="mt-20 px-5 pb-8 md:px-8">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {featuredCards.map((card, i) => {
            const project = getCaseStudy(card.slug)
            if (!project) return null
            return (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.25, 1, 0.5, 1] }}
            >
              <Link
                href={card.href}
                data-cursor="hover"
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl"
              >
                <ProjectCover project={project} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]" />
                <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-black">
                  {card.tag}
                </span>
                <span className="absolute bottom-5 left-5 font-heading text-2xl italic text-white drop-shadow-lg">
                  {card.title}
                </span>
              </Link>
            </motion.div>
            )
          })}
        </div>
      </div>

      {/* Newsletter + copyright */}
      <div className="border-t border-white/10 px-5 py-10 md:px-8">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="label-caps text-primary-foreground/40">Newsletter</p>
            <NewsletterForm variant="dark" className="mt-3" />
          </div>
          <p className="label-caps text-primary-foreground/30">
            © 2026 GIEO — Denver · Geneva · Abu Dhabi
          </p>
        </div>
      </div>
    </footer>
  )
}
