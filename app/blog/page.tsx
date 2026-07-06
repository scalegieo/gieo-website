'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'motion/react'
import { X } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { NewsletterForm } from '@/components/newsletter-form'

interface Section {
  heading?: string
  text: string
  bullets?: string[]
}

interface Article {
  title: string
  category: string
  date: string
  readTime: string
  excerpt: string
  content: {
    subtitle?: string
    sections: Section[]
  }
}

const categories = [
  'All',
  'AI',
  'CRM',
  'Design',
  'Integrations',
  'Marketing',
  'SEO',
]

const articles: Article[] = [
  {
    title: 'Why Generative Engine Optimization Is the Next SEO',
    category: 'SEO',
    date: 'Oct 24, 2024',
    readTime: '5 min read',
    excerpt: 'As search engines evolve into AI-driven answering engines, optimizing for ten blue links is no longer enough. Here is how GEO changes the game.',
    content: {
      subtitle: 'How search is transforming from ten blue links to synthesized AI answers, and what it means for your business traffic.',
      sections: [
        {
          heading: 'The Shift to Answer Engines',
          text: 'Traditional search engines are rapidly evolving into AI answer engines. With the introduction of Google\'s Search Generative Experience, Perplexity, and ChatGPT Search, users are no longer clicking through a list of links to find information. Instead, AI synthesizes answers directly on the search page, citing only a few key sources.',
        },
        {
          heading: 'What is Generative Engine Optimization (GEO)?',
          text: 'GEO is the practice of optimizing your digital footprint so that Large Language Models (LLMs) select, trust, and synthesize your content into their final responses. Unlike SEO, which focuses on keyword density and backlinks, GEO focuses on structured authority, clear direct answers, and contextual credibility.',
        },
        {
          heading: 'Key Strategies for GEO Success',
          text: 'To stay visible in the age of AI search, businesses must implement several core optimization strategies:',
          bullets: [
            'Direct Answer Formatting: Structure your content to explicitly answer common questions in the first 2-3 sentences.',
            'Authoritative Citations: Provide clear, cite-worthy statistics and original insights that LLMs can extract.',
            'High Information Density: LLMs prefer comprehensive, semantically rich pages over thin, keyword-stuffed articles.',
            'Sentiment and Brand Authority: Ensure your brand is mentioned positively across multiple independent platforms.',
          ],
        },
      ],
    },
  },
  {
    title: 'The Real Cost of Disconnected Business Systems',
    category: 'Design',
    date: 'Oct 18, 2024',
    readTime: '4 min read',
    excerpt: 'When your website, CRM, and email marketing don\'t communicate, you bleed revenue. We break down the hidden costs of tool silos.',
    content: {
      subtitle: 'Why software silos are silently draining your revenue, and how a unified integration ecosystem drives exponential growth.',
      sections: [
        {
          heading: 'The Hidden Tax of Software Silos',
          text: 'Most scaling companies use dozens of specialized tools: a CRM for sales, an email platform for marketing, separate billing software, and custom spreadsheets for tracking. When these platforms do not talk to each other, it creates friction that directly harms your bottom line.',
        },
        {
          heading: 'Where the Revenue Leaks Occur',
          text: 'Without deep integration, businesses suffer from three critical inefficiencies:',
          bullets: [
            'Lost Leads: Inquiries get stuck or delayed in transfer between forms and your CRM, allowing competitors to strike first.',
            'Blind Advertising: Marketing teams optimize campaigns based on clicks rather than closed sales data.',
            'Manual Overload: Staff waste hours typing data from one tool to another, introducing high rates of human error.',
          ],
        },
        {
          heading: 'Building a Connected Infrastructure',
          text: 'By linking your website, CRM, and communication tools into a unified ecosystem, you automate tracking and customer nurturing. Data flows instantly, letting your sales team focus on relationships instead of administrative entry.',
        },
      ],
    },
  },
  {
    title: 'How AI Follow-Up Systems Convert 3× More Leads',
    category: 'CRM',
    date: 'Oct 12, 2024',
    readTime: '6 min read',
    excerpt: 'Speed to lead is everything. Discover how implementing an automated AI follow-up sequence can dramatically increase your conversion rates.',
    content: {
      subtitle: 'In modern sales, speed-to-lead is everything. Discover how automated AI systems engage, qualify, and convert leads in minutes.',
      sections: [
        {
          heading: 'The Speed-to-Lead Imperative',
          text: 'Studies consistently show that responding to a lead within 5 minutes increases conversion rates by over 300% compared to responding in 30 minutes. Yet, most businesses take hours or even days to reply. In a fast-paced market, delayed responses mean lost customers.',
        },
        {
          heading: 'How Automated AI Follow-Up Solves the Problem',
          text: 'Automated follow-up systems use intelligent triggers and AI agents to engage incoming inquiries instantly:',
          bullets: [
            '24/7 Availability: Engage leads instantly, even on weekends or late at night.',
            'Contextual Conversational Qualifying: Ask qualifying questions via email or SMS to assess lead quality automatically.',
            'Instant Hand-offs: Alert your human sales team the exact moment a high-intent lead is warmed up and ready to book.',
          ],
        },
        {
          heading: 'Consistent Nurture without Human Fatigue',
          text: 'Humans get busy, tired, or forgetful. AI follow-up workflows execute relentlessly, ensuring every single lead receives multiple structured, highly personalized touchpoints over weeks without adding to your payroll.',
        },
      ],
    },
  },
  {
    title: 'Designing for Trust: Why Premium Aesthetics Matter',
    category: 'Design',
    date: 'Oct 05, 2024',
    readTime: '4 min read',
    excerpt: 'In a crowded market, visual polish isn\'t just about looking good—it\'s a fundamental trust signal that justifies premium pricing.',
    content: {
      subtitle: 'How visual polish, deliberate typography, and smooth micro-animations serve as silent trust signals that justify premium pricing.',
      sections: [
        {
          heading: 'The 50-Millisecond Impression',
          text: 'Research shows it takes users less than 50 milliseconds to form an opinion about your website, which determines whether they stay or leave. A generic, basic design immediately signals amateur operations, while a polished, premium aesthetic builds instant authority.',
        },
        {
          heading: 'Aesthetics as a Business Lever',
          text: 'Design isn\'t just about looking pretty; it directly affects customer behavior and perceived value:',
          bullets: [
            'Higher Conversion Rates: Clear visual hierarchies guide the user\'s eye naturally toward primary action buttons.',
            'Premium Price Justification: Clients are willing to pay more when your brand presentation looks elite and professional.',
            'Brand Recall: Memorable layouts and curated color palettes make your business stand out from generic competitors.',
          ],
        },
        {
          heading: 'The Details of Elite Design',
          text: 'True premium design relies on deliberate layout choices: ample whitespace, elegant typography pairing, smooth animations, and interactive hover feedback that makes the interface feel responsive and alive.',
        },
      ],
    },
  },
  {
    title: '5 CRM Automations Every Service Business Needs',
    category: 'CRM',
    date: 'Sep 28, 2024',
    readTime: '7 min read',
    excerpt: 'Stop doing manual data entry. These five simple automations will save you hours per week and ensure no lead falls through the cracks.',
    content: {
      subtitle: 'Stop doing repetitive administrative tasks. Free up your team and scale operations with these five essential workflows.',
      sections: [
        {
          heading: 'Evolving Past Manual Admin',
          text: 'If your team is manually creating tasks, copying client info, or drafting repetitive emails, you are bottlenecking your growth. A modern CRM should act as an active operator in your business, handling repetitive workflows automatically.',
        },
        {
          heading: 'The Five Core Automations',
          text: 'Implementing these five sequences will immediately streamline your service business:',
          bullets: [
            'Automated Lead Routing: Instantly assign leads to team members based on territory, availability, or specialty.',
            'Deal State Reminders: Automatically alert account managers if a deal stays in the same pipeline stage for too long.',
            'Post-Purchase Onboarding: Send welcome packages, contract links, and invoice details immediately upon closing a deal.',
            'Automated Review Harvesting: Trigger feedback and Google Review requests exactly 7 days after project completion.',
            'Re-engagement Sequences: Automatically reach out to cold leads or past clients after 3-6 months of inactivity.',
          ],
        },
      ],
    },
  },
  {
    title: 'Anatomy of a High-Converting Landing Page',
    category: 'Marketing',
    date: 'Sep 20, 2024',
    readTime: '5 min read',
    excerpt: 'We analyze the core components that turn a generic landing page into a high-performing conversion engine for paid traffic.',
    content: {
      subtitle: 'A deep dive into the layouts, content ordering, and visual triggers that turn paid traffic into active leads.',
      sections: [
        {
          heading: 'The Purpose of a Landing Page',
          text: 'Unlike standard websites that offer multiple navigation paths, a high-converting landing page has one single objective: to get the visitor to take one specific action. Whether downloading a guide or booking a call, every element must align to support that goal.',
        },
        {
          heading: 'Critical Layout Components',
          text: 'Every successful landing page follows a proven structural anatomy:',
          bullets: [
            'The Clear Hook: A bold headline stating the exact value proposition and who it is for within 3 seconds.',
            'Social Proof: Placing logos of trusted partners or client testimonials high on the page to build immediate credibility.',
            'Frictionless Forms: Keeping fields to an absolute minimum—every additional form field reduces conversions.',
            'Single Primary CTA: Ensuring there is only one clear action option, repeated strategically as the user scrolls.',
          ],
        },
        {
          heading: 'Performance Optimization',
          text: 'Even the best-designed page will fail if it loads slowly. Page speed, mobile optimization, and accessibility are fundamental conversion factors that directly impact ad performance and user bounce rates.',
        },
      ],
    },
  },
]

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

  // Lock page scroll while article modal is open (native scroll — no Lenis on /blog)
  useEffect(() => {
    if (!selectedArticle) return

    const scrollY = window.scrollY
    document.body.style.position = 'fixed'
    document.body.style.top = `-${scrollY}px`
    document.body.style.left = '0'
    document.body.style.right = '0'
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.left = ''
      document.body.style.right = ''
      document.body.style.overflow = ''
      window.scrollTo(0, scrollY)
    }
  }, [selectedArticle])

  const filteredArticles = selectedCategory === 'All'
    ? articles
    : articles.filter(article => article.category === selectedCategory)

  return (
    <main className="bg-background pt-20">
      {/* Hero Section */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-accent">
              Insights &amp; Editorial
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="max-w-3xl font-heading text-[clamp(2.5rem,6vw,5rem)] italic leading-[0.92] tracking-tight">
              Thoughts on growth,
              <br />
              systems, and scale.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Category Tabs Section */}
      <section className="border-y border-border/40 bg-surface-1 py-6">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="flex flex-wrap gap-x-6 gap-y-3 justify-start items-center">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`text-[11px] uppercase tracking-[0.16em] transition-colors cursor-pointer py-1 ${
                    isActive ? 'text-accent font-medium' : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {cat}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Articles Grid Section */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article, i) => (
                <Reveal key={article.title} delay={(i % 3) * 0.1}>
                  <button
                    onClick={() => setSelectedArticle(article)}
                    className="group block h-full w-full text-left border border-border/40 bg-surface-1 p-6 transition-all duration-300 hover:border-accent/40 cursor-pointer hover:shadow-lg rounded-sm"
                  >
                    <div className="mb-4 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
                      <span className="text-accent/80">{article.category}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-semibold tracking-tight transition-colors group-hover:text-accent">
                      {article.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {article.excerpt}
                    </p>
                    <div className="mt-8 text-[11px] text-muted-foreground/60">
                      {article.date}
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 text-muted-foreground text-sm">
              No articles found in this category.
            </div>
          )}
        </div>
      </section>

      {/* Newsletter signup */}
      <section className="border-t border-border/40 bg-surface-2 surface-noise py-24 md:py-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Stay Updated
              </p>
              <h2 className="mt-4 font-heading text-3xl italic tracking-tight md:text-4xl">
                Systems thinking, delivered monthly.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                AI, CRM, design, and growth insights from the GIEO team across
                Denver, Geneva, and Abu Dhabi.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <NewsletterForm
                variant="light"
                className="mt-8"
                inputClassName="flex-1 border px-4 py-3"
                successMessage="You're on the list. Welcome aboard."
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Article Modal Overlay */}
      <AnimatePresence>
        {selectedArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-center bg-background/90 backdrop-blur-md p-4 sm:items-center md:p-6"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-sm border border-border/80 bg-surface-1 shadow-2xl gold-border-glow surface-noise sm:max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute right-4 top-4 z-10 rounded-full p-2 text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground cursor-pointer"
                aria-label="Close article"
              >
                <X className="h-5 w-5" />
              </button>

              <div
                data-lenis-prevent
                className="overflow-y-auto overscroll-contain p-6 md:p-12 [-webkit-overflow-scrolling:touch]"
              >
              {/* Category */}
              <div className="mb-3 text-[10px] uppercase tracking-[0.16em] text-accent">
                {selectedArticle.category}
              </div>

              {/* Title */}
              <h2 className="mb-4 font-heading text-3xl italic leading-tight text-foreground md:text-5xl">
                {selectedArticle.title}
              </h2>

              {/* Meta */}
              <div className="mb-8 flex gap-4 border-b border-border/40 pb-6 text-xs text-muted-foreground">
                <span>{selectedArticle.date}</span>
                <span>•</span>
                <span>{selectedArticle.readTime}</span>
              </div>

              {/* Content Subtitle */}
              {selectedArticle.content.subtitle && (
                <p className="mb-8 border-l-2 border-accent pl-4 text-lg font-light italic leading-relaxed text-foreground/90 md:text-xl">
                  {selectedArticle.content.subtitle}
                </p>
              )}

              {/* Sections */}
              <div className="space-y-8 text-base leading-relaxed text-muted-foreground md:text-lg">
                {selectedArticle.content.sections.map((section, idx) => (
                  <div key={idx}>
                    {section.heading && (
                      <h4 className="mb-3 mt-6 text-lg font-semibold tracking-tight text-foreground md:text-xl">
                        {section.heading}
                      </h4>
                    )}
                    <p className="mb-4">{section.text}</p>
                    {section.bullets && (
                      <ul className="mb-4 mt-3 list-disc space-y-2 pl-5 text-muted-foreground/90">
                        {section.bullets.map((bullet, bIdx) => (
                          <li key={bIdx}>{bullet}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 border-t border-border/40 pt-8">
                <div className="relative overflow-hidden rounded-sm border border-accent/20 bg-surface-2 p-6 text-center md:p-10">
                  <div className="absolute -left-16 -top-16 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />
                  <div className="absolute -bottom-16 -right-16 h-32 w-32 rounded-full bg-accent/5 blur-3xl" />

                  <h3 className="mb-3 font-heading text-2xl italic text-foreground md:text-3xl">
                    How does this apply to your business?
                  </h3>
                  <p className="mx-auto mb-6 max-w-lg text-sm text-muted-foreground">
                    We specialize in engineering custom websites, CRM systems, and AI-driven client-acquisition flows tailored to these exact strategies. Let&apos;s build yours.
                  </p>
                  <Link
                    href="/reach-out"
                    onClick={() => setSelectedArticle(null)}
                    data-cursor="hover"
                    className="inline-flex items-center justify-center rounded-sm bg-gold px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground shadow-md transition-colors hover:bg-gold-hover"
                  >
                    Reach out to see how this could affect your business
                  </Link>
                </div>
              </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
