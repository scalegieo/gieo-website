'use client'

import { Reveal } from '@/components/reveal'

const steps = [
  {
    n: '01',
    title: 'Discovery',
    subtitle: 'Understand the terrain',
    body: 'We assess your current systems, competitive landscape, and highest-leverage opportunities across your market.',
  },
  {
    n: '02',
    title: 'Proposal',
    subtitle: 'Scope with clarity',
    body: 'A detailed proposal with deliverables, timeline, and project-based pricing — no guesswork, no padded retainers.',
  },
  {
    n: '03',
    title: 'Kickoff',
    subtitle: 'Align and activate',
    body: 'We establish communication channels, access, and milestones so everyone starts from the same blueprint.',
  },
  {
    n: '04',
    title: 'Sprints',
    subtitle: 'Build in focused cycles',
    body: 'Design and development happen in structured sprints with regular checkpoints and visible progress.',
  },
  {
    n: '05',
    title: 'QA',
    subtitle: 'Test everything',
    body: 'Cross-device testing, integration validation, and performance checks before anything goes live.',
  },
  {
    n: '06',
    title: 'Delivery',
    subtitle: 'Launch with confidence',
    body: 'We deploy, document, and hand off complete systems — websites, CRM, automations, all connected.',
  },
  {
    n: '07',
    title: 'Follow-up',
    subtitle: 'Stay in the loop',
    body: 'Post-launch support window to address questions, fix edge cases, and ensure smooth adoption.',
  },
  {
    n: '08',
    title: 'Optimize',
    subtitle: 'Compound the results',
    body: 'We monitor performance and refine systems for search visibility, conversion rates, and real outcomes.',
  },
]

export function Process() {
  return (
    <section className="border-t border-border/40 bg-surface-1 surface-noise py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex flex-col gap-3">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
              How We Work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="font-heading text-[clamp(2.5rem,5vw,4rem)] italic leading-none tracking-tight">
              Structured Delivery
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="mt-2 max-w-lg text-sm text-muted-foreground">
              Eight steps from discovery to optimization — a repeatable process
              that delivers consistent results across Denver, Geneva, and Abu Dhabi.
            </p>
          </Reveal>
        </div>

        {/* Desktop connector line */}
        <div className="relative mt-16 hidden md:block">
          <div className="absolute left-0 right-0 top-6 h-px bg-border/60" />
          <div className="absolute left-0 top-[22px] flex w-full justify-between px-[6%]">
            {steps.map((step) => (
              <div
                key={step.n}
                className="h-2 w-2 rounded-full border border-gold/40 bg-surface-1"
              />
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal key={step.n} delay={i * 0.06}>
              <div className="relative border-t border-border/60 pt-6">
                <div className="absolute left-0 top-0 h-px w-8 bg-gold" />
                <span className="text-2xl font-bold text-gold/40">{step.n}</span>
                <h3 className="mt-3 text-lg font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1 text-[12px] uppercase tracking-[0.14em] text-gold/60">
                  {step.subtitle}
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
