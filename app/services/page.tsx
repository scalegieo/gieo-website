'use client'

import { Reveal } from '@/components/reveal'
import { PlusButton } from '@/components/plus-button'
import { BookCallLink } from '@/components/book-call-link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

const pricingTiers = [
  {
    name: 'Core',
    price: '$800 – $10K',
    description: 'Websites, branding, and capture systems for businesses establishing their digital foundation.',
    items: ['Custom Websites', 'Landing Pages', 'Branding & Identity', 'Lead Capture & Booking'],
  },
  {
    name: 'Growth',
    price: '$1K – $25K+',
    description: 'AI systems, CRM automation, and visibility infrastructure that drive measurable revenue.',
    items: ['AI Chatbots', 'CRM & Automations', 'Email/SMS Systems', 'SEO & Funnels', 'Lead Generation'],
    featured: true,
  },
  {
    name: 'Business Support',
    price: 'Custom Scope',
    description: 'Launch support, strategy, and ongoing maintenance for long-term partnerships.',
    items: ['Business Launch', 'Strategy & Positioning', 'Ongoing Maintenance'],
  },
]

const cityServices = [
  {
    city: 'Denver, Colorado',
    description: 'Local SEO, Google Business optimization, and CRM systems for Colorado service businesses and contractors.',
  },
  {
    city: 'Geneva, Switzerland',
    description: 'Multilingual websites, EU-compliant automations, and premium brand systems for Swiss enterprises.',
  },
  {
    city: 'Abu Dhabi, UAE',
    description: 'High-conversion storefronts, Arabic/English interfaces, and growth infrastructure for Gulf market expansion.',
  },
]

/* ── Service Data ── */

const coreServices = [
  {
    title: 'Custom Websites',
    what: 'High-performance, conversion-focused websites designed and built from scratch — not templates reskinned with your logo.',
    why: 'Your website is the foundation of every digital system you build. If it doesn\'t convert, nothing downstream works.',
    problem: 'Most businesses run outdated, template-based sites that look generic and underperform. Visitors leave in seconds.',
    gets: 'A custom-designed, mobile-responsive website with clear user flows, strong calls to action, and infrastructure for SEO, tracking, and lead capture.',
    fit: 'The site becomes the conversion engine at the center of your CRM, automations, and marketing systems.',
  },
  {
    title: 'Landing Pages',
    what: 'Targeted landing pages engineered to convert specific traffic into booked calls, form fills, or purchases.',
    why: 'Generic pages kill ad spend. A focused landing page built for one offer, one audience, one action dramatically improves ROI.',
    problem: 'Sending paid traffic to a homepage with no clear path to conversion. Money spent, no results.',
    gets: 'Conversion-optimized landing pages with A/B testing capability, tracking pixels, and direct integration into your CRM pipeline.',
    fit: 'Landing pages plug directly into your ad funnels, email sequences, and CRM workflows.',
  },
  {
    title: 'Branding & Visual Identity',
    what: 'Logos, color systems, typography, and UI/UX guidelines that make your business look established and trustworthy.',
    why: 'First impressions are visual. A cohesive brand identity builds instant credibility before anyone reads a word.',
    problem: 'Inconsistent visuals across platforms, DIY logos, and no design system — making you look smaller than you are.',
    gets: 'A complete brand kit: logo, color palette, typography system, and usage guidelines you can apply everywhere.',
    fit: 'Your brand identity flows through your website, emails, social, proposals, and every client touchpoint.',
  },
  {
    title: 'Lead Capture Forms & Booking Systems',
    what: 'Custom lead capture forms and booking systems built around how your business actually operates.',
    why: 'Every missed form submission or booking friction is a lost client. Your intake system should work as hard as your marketing.',
    problem: 'Using generic contact forms with no follow-up, or booking tools that don\'t sync with your calendar or CRM.',
    gets: 'Custom intake forms, conditional logic, automated routing, and booking systems that sync with your calendar and CRM.',
    fit: 'Forms and bookings feed directly into your CRM, triggering automated follow-up sequences instantly.',
  },
]

const growthServices = [
  {
    title: 'AI Chatbots & Intake Bots',
    what: 'Chat and intake bots that answer questions, qualify leads, and book appointments 24/7 — trained on your business.',
    why: 'Prospects don\'t wait for business hours. An AI bot that sounds like you captures leads while you sleep.',
    problem: 'Losing leads outside business hours, or spending hours answering the same questions over and over.',
    gets: 'A custom-trained AI chatbot deployed on your website that qualifies leads, answers FAQs, and books calls automatically.',
    fit: 'The bot feeds qualified leads directly into your CRM with context, triggering the right follow-up sequence.',
  },
  {
    title: 'CRM Setup & Pipeline Design',
    what: 'Custom CRM configuration, pipeline design, and workflow automation built around your sales process.',
    why: 'A CRM isn\'t a database — it\'s an operating system for revenue. Set up wrong, it becomes expensive clutter.',
    problem: 'Leads falling through cracks, no visibility on pipeline stages, and manual data entry killing your team\'s time.',
    gets: 'A fully configured CRM with custom pipelines, deal stages, contact properties, automations, and reporting dashboards.',
    fit: 'Your CRM becomes the central nervous system connecting your website, forms, bots, email, and sales process.',
  },
  {
    title: 'Automations & Follow-Up Systems',
    what: 'Intelligent automations and CRM workflows that handle repetitive work in the background.',
    why: 'Manual follow-up is slow, inconsistent, and doesn\'t scale. Automations ensure no lead goes cold.',
    problem: 'Leads going cold because no one followed up in time. Repetitive tasks eating hours every week.',
    gets: 'Automated email/SMS sequences, task creation, pipeline movements, and multi-step workflows across your tools.',
    fit: 'Automations connect your CRM, email, booking, and chat systems into a single intelligent workflow.',
  },
  {
    title: 'Email & SMS Marketing',
    what: 'Strategic email and SMS campaigns, drip sequences, and broadcast systems that drive repeat business.',
    why: 'Your existing contacts are your highest-ROI audience. Email and SMS convert at rates social media can\'t touch.',
    problem: 'No email list strategy, sporadic sends, no segmentation, and no automated nurture sequences.',
    gets: 'Segmented lists, automated nurture sequences, broadcast templates, and performance dashboards.',
    fit: 'Email and SMS systems tie into your CRM segments and automation triggers for truly personalized outreach.',
  },
  {
    title: 'Lead Generation Systems',
    what: 'Demand capture infrastructure that identifies, attracts, and routes high-intent leads into your pipeline.',
    why: 'Relying on referrals alone caps your growth. A lead gen system creates predictable inbound flow.',
    problem: 'Inconsistent lead flow, no system for capturing demand, and over-reliance on word-of-mouth.',
    gets: 'Multi-channel lead capture across organic search, paid ads, social, and referral with CRM integration.',
    fit: 'Leads flow from multiple sources into a unified pipeline with automated qualification and routing.',
  },
  {
    title: 'SEO & Local Search',
    what: 'Technical SEO, local search optimization, and Google Business setup that drives organic discovery.',
    why: 'People searching for your service right now are the highest-intent leads possible. SEO captures that demand.',
    problem: 'Invisible on Google, no local listings optimized, and competitors outranking you for your own services.',
    gets: 'Technical SEO audit and fixes, keyword-optimized content, Google Business profile, and local citation building.',
    fit: 'SEO drives organic traffic to your website, which feeds into your lead capture and CRM systems.',
  },
  {
    title: 'Sales Funnels',
    what: 'Full-funnel systems that take a stranger from first click to booked call with every step tracked.',
    why: 'Without a funnel, you\'re hoping people figure out how to buy from you. A funnel engineers the path.',
    problem: 'Traffic with no conversion path, no retargeting, and no systematic way to move prospects toward a sale.',
    gets: 'Complete funnel architecture: ads → landing page → offer → capture → follow-up → close, with full tracking.',
    fit: 'Funnels integrate your ads, landing pages, CRM, email/SMS, and booking into one conversion machine.',
  },
  {
    title: 'AI Visibility & GEO',
    what: 'Generative engine optimization that positions your business to be recommended by AI tools.',
    why: 'AI assistants are becoming the new search. If AI tools don\'t know about your business, you\'re already losing.',
    problem: 'Your business doesn\'t appear in AI-generated recommendations, giving competitors the advantage.',
    gets: 'Content strategy, structured data, entity optimization, and citation building designed for AI discovery.',
    fit: 'GEO compounds your SEO efforts by extending your visibility into the AI-driven discovery layer.',
  },
]

const supportServices = [
  {
    title: 'Business Launch Support',
    what: 'End-to-end digital setup for new businesses — from brand identity to live website to CRM.',
    why: 'Launching without infrastructure means scrambling later. We build it right from day one.',
    problem: 'New business with no website, no brand, no systems, and no idea where to start digitally.',
    gets: 'Complete digital foundation: brand, website, CRM, booking system, and basic automations — launch-ready.',
    fit: 'Everything is built as an integrated system from the start, not bolted together later.',
  },
  {
    title: 'Strategy & Positioning',
    what: 'Market positioning, messaging strategy, and competitive analysis to sharpen how your business is perceived.',
    why: 'The best systems in the world can\'t fix weak positioning. Strategy comes before execution.',
    problem: 'Unclear messaging, no differentiation, and competing on price instead of value.',
    gets: 'Clear positioning statement, messaging framework, competitive analysis, and strategic recommendations.',
    fit: 'Your positioning informs every page, every ad, every automation, and every client interaction.',
  },
  {
    title: 'Ongoing Maintenance & Support',
    what: 'Continuous site updates, system maintenance, performance monitoring, and strategic adjustments.',
    why: 'Digital infrastructure isn\'t set-and-forget. It needs ongoing attention to stay effective.',
    problem: 'Site slowly breaking, outdated content, no one monitoring performance or fixing issues.',
    gets: 'Monthly maintenance, priority support, performance reports, and proactive optimization recommendations.',
    fit: 'Ongoing support ensures all your systems stay connected, updated, and performing at their best.',
  },
]

/* ── FAQ Data ── */

const faqs = [
  {
    q: 'How does pricing work?',
    a: 'We don\'t use fixed packages. Every project is scoped individually based on what you actually need. We send a detailed proposal with clear deliverables and pricing before any work begins.',
  },
  {
    q: 'How long does a typical project take?',
    a: 'Most website projects take 2–4 weeks. Full system builds (website + CRM + automations + integrations) typically run 4–8 weeks. We provide a timeline in every proposal.',
  },
  {
    q: 'Do you work with businesses outside the US?',
    a: 'Yes. We work with teams worldwide. All communication happens digitally — video calls, shared workspaces, and async updates.',
  },
  {
    q: 'What if I only need one thing, not a full system?',
    a: 'That\'s fine. We build standalone websites, landing pages, and CRM setups. But we always design with future integration in mind so nothing needs to be rebuilt later.',
  },
  {
    q: 'Do you offer ongoing support after launch?',
    a: 'Yes. We offer monthly maintenance and support retainers for clients who want ongoing updates, monitoring, and optimization. Many of our clients stay with us long-term.',
  },
  {
    q: 'What platforms and tools do you use?',
    a: 'We\'re platform-agnostic and choose tools based on your needs. We work with Next.js, WordPress, Webflow, GoHighLevel, HubSpot, Zapier, Make, custom APIs, and more.',
  },
]

function FAQ({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-border/40">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-5 text-left"
      >
        <span className="pr-4 text-base font-medium">{faq.q}</span>
        <ChevronDown
          className={cn(
            'h-4 w-4 shrink-0 text-accent transition-transform duration-300',
            open && 'rotate-180',
          )}
        />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Service Card ── */

function ServiceCard({ service }: { service: typeof coreServices[0] }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <div className="border border-border/40 bg-surface-1 p-7 transition-all duration-400 hover:border-accent/30 hover:gold-border-glow md:p-8">
      <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.what}</p>
      <AnimatePresence>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-4 border-t border-border/30 pt-5">
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-accent">Why It Matters</p>
                <p className="mt-1 text-sm text-muted-foreground">{service.why}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-accent">The Problem</p>
                <p className="mt-1 text-sm text-muted-foreground">{service.problem}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-accent">What You Get</p>
                <p className="mt-1 text-sm text-muted-foreground">{service.gets}</p>
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-[0.16em] text-accent">How It Fits</p>
                <p className="mt-1 text-sm text-muted-foreground">{service.fit}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setExpanded((v) => !v)}
        className="mt-5 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-accent transition-colors hover:text-gold-hover"
      >
        {expanded ? 'Show Less' : 'Learn More'}
        <ArrowRight className={cn('h-3 w-3 transition-transform', expanded && 'rotate-90')} />
      </button>
    </div>
  )
}

/* ── Page ── */

export default function ServicesPage() {
  return (
    <main className="bg-background pt-20">
      {/* Hero */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-accent">
              Services
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-heading text-[clamp(2.5rem,6vw,5rem)] italic leading-[0.92] tracking-tight">
              The digital infrastructure
              <br />
              behind serious growth.
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We don&apos;t just make websites. We build the systems businesses
              need across Denver, Geneva, and Abu Dhabi — to look legitimate,
              capture demand, follow up, operate better, and scale.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="border-y border-border/40 bg-surface-1 py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
              Pricing
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
              Project-based. No retainers.
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {pricingTiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 0.08}>
                <div
                  className={cn(
                    'flex h-full flex-col border p-8',
                    tier.featured
                      ? 'border-gold/40 bg-surface-2 gold-border-glow'
                      : 'border-border/40 bg-background/40',
                  )}
                >
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-xl font-semibold">{tier.name}</h3>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-gold">
                      {tier.price}
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground">{tier.description}</p>
                  <ul className="mt-6 flex-1 space-y-2">
                    {tier.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="h-px w-3 bg-gold/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8">
                    <PlusButton bookCall variant={tier.featured ? 'solid' : 'outline'}>
                      Book a 30 Min Call
                    </PlusButton>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <div className="mt-12 flex justify-center">
              <PlusButton bookCall variant="solid">
                Book a 30 Min Call
              </PlusButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Geo-targeted services */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
              Local Expertise
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
              Services by region
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {cityServices.map((cs, i) => (
              <Reveal key={cs.city} delay={i * 0.08}>
                <div className="border border-border/40 p-8 transition-all hover:border-gold/30">
                  <h3 className="text-lg font-semibold">{cs.city}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {cs.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section id="websites" className="scroll-mt-24 bg-surface-2 surface-noise py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">
              Core Services
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
              Websites, Brand & Capture
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {coreServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Growth Systems */}
      <section id="systems" className="scroll-mt-24 bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">
              Growth Systems
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
              Automation, AI & Visibility
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            {growthServices.map((s, i) => (
              <Reveal key={s.title} delay={(i % 2) * 0.06}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business Support */}
      <section id="growth" className="scroll-mt-24 bg-surface-1 surface-noise py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">
              Business Support
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
              Launch, Strategy & Maintenance
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3">
            {supportServices.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <ServiceCard service={s} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Engagements Work */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">
              Engagement Model
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
              How it works
            </h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              { n: '01', title: 'Discovery Call', body: '15 minutes. We learn what you need, what you have, and where the gaps are.' },
              { n: '02', title: 'Proposal & Scope', body: 'We send a detailed proposal with deliverables, timeline, and pricing. No guesswork.' },
              { n: '03', title: 'Build & Integrate', body: 'We design, build, and integrate everything. You get updates and checkpoints throughout.' },
              { n: '04', title: 'Launch & Support', body: 'We deploy, monitor, and stand behind the work. Ongoing support available.' },
            ].map((step, i) => (
              <Reveal key={step.n} delay={i * 0.08}>
                <div className="border-t border-border/60 pt-6">
                  <div className="absolute left-0 top-0 h-px w-8 bg-accent" />
                  <span className="text-2xl font-bold text-accent/40">{step.n}</span>
                  <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface-2 surface-noise py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,340px)_1fr] md:gap-16">
            <div>
              <Reveal>
                <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-accent">FAQ</p>
                <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
                  Common
                  <br />
                  Questions
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  If your question isn&apos;t here, book a call and ask us directly.
                </p>
                <div className="mt-6">
                  <PlusButton bookCall variant="outline">
                    Book a 30 Min Call
                  </PlusButton>
                </div>
              </Reveal>
            </div>
            <Reveal delay={0.1}>
              <div className="border-t border-border/40">
                {faqs.map((faq) => (
                  <FAQ key={faq.q} faq={faq} />
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
