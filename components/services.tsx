'use client'

import { Reveal } from '@/components/reveal'
import { PlusButton } from '@/components/plus-button'
import { cn } from '@/lib/utils'

const tiers = [
  {
    name: 'Core',
    price: '$800 – $10K',
    description:
      'Websites, branding, and capture systems — the foundation every business needs to look legitimate and convert traffic.',
    services: [
      'Custom Websites',
      'Landing Pages',
      'Branding & Visual Identity',
      'Lead Capture Forms & Booking',
    ],
    featured: false,
  },
  {
    name: 'Growth',
    price: '$1K – $25K+',
    description:
      'AI systems, CRM automation, and visibility infrastructure that turn your website into a revenue engine.',
    services: [
      'AI Chatbots & Intake Bots',
      'CRM Setup & Pipeline Design',
      'Automations & Follow-Up',
      'Email, SMS & Dashboards',
      'Lead Generation & SEO',
      'Sales Funnels & AI Visibility',
    ],
    featured: true,
  },
  {
    name: 'Business Support',
    price: 'Custom Scope',
    description:
      'Launch support, strategy, and ongoing maintenance for teams that want a long-term digital partner.',
    services: [
      'Business Launch Support',
      'Strategy & Positioning',
      'Ongoing Maintenance & Support',
    ],
    featured: false,
  },
]

export function Services() {
  return (
    <section id="services" className="bg-surface-2 surface-noise">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
              What We Build
            </p>
            <h2 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] italic leading-[0.92] tracking-tight text-balance">
              Everything digital.
              <br />
              Built properly.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              From Denver to Geneva to Abu Dhabi — one accountable team for
              strategy, design, build, and growth. No retainers. Project-scoped
              pricing.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {tiers.map((tier, i) => (
            <Reveal key={tier.name} delay={i * 0.1}>
              <div
                className={cn(
                  'group flex h-full flex-col border p-8 transition-all duration-500 ease-premium md:p-9',
                  tier.featured
                    ? 'border-gold/40 bg-surface-1 gold-border-glow'
                    : 'border-border/40 bg-background/40 hover:border-gold/30 hover:gold-border-glow',
                )}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    {tier.name}
                  </h3>
                  <span className="text-[11px] uppercase tracking-[0.14em] text-gold">
                    {tier.price}
                  </span>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {tier.description}
                </p>

                <ul className="mt-6 flex-1 space-y-2.5">
                  {tier.services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-2 h-px w-3 shrink-0 bg-gold/60" />
                      {service}
                    </li>
                  ))}
                </ul>

                <PlusButton bookCall variant={tier.featured ? 'solid' : 'outline'} className="mt-8">
                  Book a 30 Min Call
                </PlusButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
