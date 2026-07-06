'use client'

import { Reveal } from '@/components/reveal'
import { CalendlyEmbed } from '@/components/calendly-embed'
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_DISPLAY,
  WHATSAPP_URL,
} from '@/lib/constants'

export function Contact() {
  return (
    <section id="contact" className="bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-12 px-5 py-24 md:grid-cols-2 md:gap-16 md:px-10 md:py-32">
        <div className="flex flex-col">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
              Start a Project
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-[clamp(2.75rem,6vw,5rem)] italic leading-[0.92] tracking-tight">
              Let&apos;s build
              <br />
              something real.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Book a 30-minute call — no preparation needed. We scope every
              project individually, serving clients in Denver, Geneva, Abu Dhabi,
              and worldwide.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 space-y-4 text-sm">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                data-cursor="hover"
                className="block font-medium text-foreground transition-opacity hover:opacity-60"
              >
                {CONTACT_EMAIL}
              </a>
              <div className="space-y-2">
                <a
                  href={`tel:${CONTACT_PHONE}`}
                  data-cursor="hover"
                  className="block font-medium text-foreground transition-opacity hover:opacity-60"
                >
                  {CONTACT_PHONE_DISPLAY}
                </a>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="label-caps inline-block text-gold transition-opacity hover:opacity-70"
                >
                  Message on WhatsApp ↗
                </a>
              </div>
              <p className="text-muted-foreground">
                Denver · Geneva · Abu Dhabi
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <CalendlyEmbed />
        </Reveal>
      </div>
    </section>
  )
}
