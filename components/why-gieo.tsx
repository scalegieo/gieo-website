'use client'

import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

const rows: { label: string; agency: string; freelancer: string; gieo: string }[] = [
  {
    label: 'Who Builds It',
    agency: 'Multiple layers of people',
    freelancer: 'One person juggling',
    gieo: 'Senior in-house builders',
  },
  {
    label: 'Scope',
    agency: 'Marketing deliverables',
    freelancer: 'One-off builds',
    gieo: 'Full infrastructure, end to end',
  },
  {
    label: 'Communication',
    agency: 'Account manager buffer',
    freelancer: 'Direct but limited',
    gieo: 'Direct access to your builders',
  },
  {
    label: 'Pricing',
    agency: 'Padded retainers',
    freelancer: 'Hourly guesswork',
    gieo: 'Project-scoped, invoiced to fit',
  },
  {
    label: 'Post-Launch',
    agency: 'Handoff and goodbye',
    freelancer: 'Maybe available',
    gieo: 'Ongoing partnership & support',
  },
  {
    label: 'Systems Integration',
    agency: 'Disconnected tools',
    freelancer: 'Not their job',
    gieo: 'Everything connected by design',
  },
]

export function WhyGieo() {
  return (
    <section id="why" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
          <div>
            <Reveal>
              <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
                The Difference
              </p>
              <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] italic leading-[0.92] tracking-tight">
                Why
                <br />
                GIEO?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
                More strategic than a freelancer. More practical than a traditional
                agency. Operating across Denver, Geneva, and Abu Dhabi — GIEO builds
                integrated systems, not disconnected deliverables.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <div className="overflow-hidden border border-border/60">
              <div className="grid grid-cols-[1.1fr_1fr_1fr_1.2fr] border-b border-border/60 text-[10px] uppercase tracking-[0.14em] text-muted-foreground md:text-[11px]">
                <span className="p-4" />
                <span className="p-4">Agency</span>
                <span className="p-4">Freelancer</span>
                <span className="bg-gold/8 p-4 font-medium text-gold">GIEO</span>
              </div>
              {rows.map((row, i) => (
                <div
                  key={row.label}
                  className={cn(
                    'grid grid-cols-[1.1fr_1fr_1fr_1.2fr] items-center text-[12px] md:text-sm',
                    i !== rows.length - 1 && 'border-b border-border/40',
                  )}
                >
                  <span className="p-4 text-[10px] uppercase tracking-[0.12em] text-muted-foreground/60 md:text-[11px]">
                    {row.label}
                  </span>
                  <span className="p-4 text-muted-foreground/60">{row.agency}</span>
                  <span className="p-4 text-muted-foreground/60">{row.freelancer}</span>
                  <span className="h-full bg-gold/8 p-4 font-medium text-foreground">
                    {row.gieo}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
