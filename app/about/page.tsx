'use client'

import { useEffect, useState } from 'react'
import { Reveal } from '@/components/reveal'
import { CITIES_DISPLAY } from '@/lib/constants'

const locations = [
  { city: 'Denver', country: 'Colorado, USA', timezone: 'America/Denver' },
  { city: 'Geneva', country: 'Switzerland', timezone: 'Europe/Zurich' },
  { city: 'Abu Dhabi', country: 'UAE', timezone: 'Asia/Dubai' },
]

function CityClock({ city, country, timezone }: { city: string; country: string; timezone: string }) {
  const [time, setTime] = useState('')

  useEffect(() => {
    const format = () => {
      setTime(
        new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date()),
      )
    }
    format()
    const id = setInterval(format, 30000)
    return () => clearInterval(id)
  }, [timezone])

  return (
    <div className="border border-border/40 bg-surface-1 p-8 transition-all duration-500 hover:border-gold/30">
      <p className="text-[11px] uppercase tracking-[0.22em] text-gold">{city}</p>
      <p className="mt-1 text-sm text-muted-foreground">{country}</p>
      <p className="mt-6 font-heading text-4xl italic tracking-tight md:text-5xl">
        {time || '—:—'}
      </p>
    </div>
  )
}

export default function AboutPage() {
  return (
    <main className="bg-background pt-20">
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-gold">
              About GIEO
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,5rem)] italic leading-[0.92] tracking-tight">
              We build the systems behind serious businesses.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              GIEO is a digital systems agency operating across Denver, Geneva, and
              Abu Dhabi. We believe a beautiful website without a backend system is
              just a digital brochure. We build engines.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Tri-city presence */}
      <section className="border-y border-border/40 bg-surface-2 surface-noise py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Global Presence
            </p>
            <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3.5rem)] italic tracking-tight">
              {CITIES_DISPLAY}
            </h2>
            <p className="mt-4 max-w-lg text-sm text-muted-foreground">
              Three time zones. One standard of delivery. Whether you&apos;re scaling
              in Colorado, Switzerland, or the UAE — we bring the same structured
              approach to every engagement.
            </p>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.city} delay={i * 0.1}>
                <CityClock {...loc} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-2 surface-noise py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 md:grid-cols-[1fr_1fr] md:px-10">
          <Reveal>
            <h2 className="font-heading text-4xl italic tracking-tight md:text-5xl">
              Why infrastructure matters
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>
                Most businesses try to solve growth problems with marketing alone. They buy ads, redesign their logo, or hire a social media manager. But when the leads actually arrive, the system breaks.
              </p>
              <p>
                Forms go unanswered. Bookings require manual email ping-pong. CRM data is messy or non-existent. The marketing worked, but the infrastructure failed.
              </p>
              <p className="font-medium text-foreground">
                We approach digital presence differently.
              </p>
              <p>
                Before we worry about driving traffic, we ensure the infrastructure is in place to capture, nurture, and close that traffic. We build websites that act as the front door to a much larger, automated machine.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <h2 className="mb-16 font-heading text-4xl italic tracking-tight md:text-5xl">
              What we believe
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: 'Systems over silos', desc: 'Your website, CRM, and marketing should talk to each other. Disconnected tools create friction and lose revenue.' },
              { title: 'Performance over fluff', desc: 'If a design element doesn\'t serve a purpose or improve conversion, it doesn\'t belong. We build for outcomes, not just aesthetics.' },
              { title: 'Automation is leverage', desc: 'If a task happens more than three times, it should be automated. We build systems that give you your time back.' },
              { title: 'Data beats intuition', desc: 'We don\'t guess. We set up tracking, analytics, and dashboards so every decision is informed by real user behavior.' },
              { title: 'Partnerships over projects', desc: 'We don\'t do the "handoff and disappear" routine. We stick around to optimize, maintain, and scale the systems we build.' },
              { title: 'Premium is standard', desc: 'Everything we touch should feel expensive, intentional, and perfectly engineered. Quality is never compromised.' },
            ].map((value, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="relative border-t border-border/40 pt-6">
                  <div className="absolute left-0 top-0 h-px w-8 bg-gold" />
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">{value.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
