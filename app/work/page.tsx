'use client'

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { WorkProjectGrid } from '@/components/work-project-grid'
import { IndustryFlipCards } from '@/components/industry-flip-cards'

export default function WorkPage() {
  return (
    <main className="bg-background pt-20">
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-accent">
              Portfolio
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-heading text-[clamp(2.5rem,6vw,5rem)] italic leading-[0.92] tracking-tight">
              Selected works,
              <br />
              ads &amp; systems built.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From Mirzam&apos;s e-commerce in Dubai to YLEM&apos;s Awwwards-nominated
              launch and Luxury Places&apos; Swiss property portal — we build websites,
              run paid media, and connect the systems behind growth.
            </p>
          </Reveal>
        </div>
      </section>

      <WorkProjectGrid />

      <IndustryFlipCards />
    </main>
  )
}
