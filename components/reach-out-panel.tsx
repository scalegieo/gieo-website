'use client'

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { BookCallLink } from '@/components/book-call-link'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/constants'

const channels = [
  {
    label: 'Email',
    value: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
    description: 'Best for project briefs, files, and detailed questions.',
    external: false,
  },
  {
    label: 'Phone',
    value: CONTACT_PHONE_DISPLAY,
    href: `tel:${CONTACT_PHONE}`,
    description: 'Call or text — we respond within one business day.',
    external: false,
  },
  {
    label: 'WhatsApp',
    value: 'Message on WhatsApp',
    href: WHATSAPP_URL,
    description: 'Fastest way to reach us for a quick intro or question.',
    external: true,
  },
]

export function ReachOutPanel() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
              Reach Out
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="font-heading text-[clamp(2.75rem,6vw,4.5rem)] italic leading-[0.92] tracking-tight">
              Let&apos;s talk about
              <br />
              your business.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Whether you read something on our blog or you&apos;re ready to
              scope a project — reach us on email, phone, or WhatsApp. We&apos;ll
              reply with clear next steps, not a sales script.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {channels.map((channel, i) => (
              <Reveal key={channel.label} delay={0.12 + i * 0.05}>
                <a
                  href={channel.href}
                  target={channel.external ? '_blank' : undefined}
                  rel={channel.external ? 'noopener noreferrer' : undefined}
                  data-cursor="hover"
                  className="group block rounded-xl border border-border/60 bg-surface-1 p-6 transition-all duration-300 hover:border-gold/40 hover:gold-border-glow md:p-8"
                >
                  <p className="label-caps text-gold">{channel.label}</p>
                  <p className="mt-3 text-lg font-medium text-foreground transition-opacity group-hover:opacity-70 md:text-xl">
                    {channel.value}
                    {channel.external ? ' ↗' : ''}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {channel.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-border/40 pt-10">
              <BookCallLink className="label-caps text-foreground transition-opacity hover:opacity-60">
                Or book a 30-min call ↓
              </BookCallLink>
              <Link
                href="/blog"
                data-cursor="hover"
                className="label-caps text-muted-foreground transition-opacity hover:text-foreground"
              >
                Back to blog
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.35}>
            <p className="mt-8 text-sm text-muted-foreground">
              Denver · Geneva · Abu Dhabi · Worldwide
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
