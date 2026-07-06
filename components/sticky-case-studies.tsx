'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValueEvent, type MotionValue } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { PlusButton } from '@/components/plus-button'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

type CaseStudy = {
  name: string
  slug: string
  category: string
  problem: string
  tags: string[]
  image: string
}

const caseStudies: CaseStudy[] = [
  {
    name: 'Atlas Wellness',
    slug: 'atlas-wellness',
    category: 'HEALTH & WELLNESS',
    problem:
      'Manual booking, no follow-up system, losing 40% of leads to competitors.',
    tags: ['Website', 'CRM', 'AI Bot', 'Automation'],
    image: '/case-studies/atlas-wellness.png',
  },
  {
    name: 'BuildFlow',
    slug: 'buildflow',
    category: 'CONSTRUCTION & CONTRACTING',
    problem:
      'No online presence, zero inbound leads, relying entirely on word-of-mouth.',
    tags: ['Brand', 'Website', 'SEO System'],
    image: '/case-studies/buildflow.png',
  },
  {
    name: 'Northwind Retail',
    slug: 'northwind-retail',
    category: 'E-COMMERCE',
    problem:
      'Cart abandonment at 78%, no email flows, disconnected ad spend from revenue.',
    tags: ['E-Commerce', 'Automation', 'Email/SMS'],
    image: '/case-studies/northwind-retail.png',
  },
]

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener('change', update)
    return () => mq.removeEventListener('change', update)
  }, [])

  return isMobile
}

function SlideContent({ study }: { study: CaseStudy }) {
  return (
    <div className="grid h-full grid-cols-1 items-center gap-8 md:grid-cols-[2fr_3fr] md:gap-12 lg:gap-16">
      <div className="flex flex-col justify-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
          {study.category}
        </p>
        <h3 className="mt-4 font-heading text-[clamp(2rem,4vw,3.5rem)] italic leading-[0.95] tracking-tight">
          {study.name}
        </h3>
        <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
          {study.problem}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="border border-border/60 px-3 py-1.5 text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          href={`/work/${study.slug}`}
          className="group mt-8 inline-flex w-fit items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gold transition-colors hover:text-gold-hover"
        >
          View Case Study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="relative aspect-[16/10] w-full overflow-hidden border border-border/40 bg-surface-2">
        <Image
          src={study.image}
          alt={`${study.name} project mockup`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 60vw"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
      </div>
    </div>
  )
}

function MobileStack() {
  return (
    <section id="work" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal>
          <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
            Selected Work
          </p>
          <h2 className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] italic leading-[0.92] tracking-tight">
            Systems Built.
            <br />
            Problems Solved.
          </h2>
        </Reveal>

        <div className="mt-16 flex flex-col gap-16">
          {caseStudies.map((study, i) => (
            <Reveal key={study.slug} delay={i * 0.08}>
              <SlideContent study={study} />
            </Reveal>
          ))}
        </div>

        <ViewAllProjects />
      </div>
    </section>
  )
}

function ViewAllProjects() {
  return (
    <Reveal delay={0.2}>
      <div className="mt-20 border-t border-border/40 pt-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          Explore the full portfolio
        </p>
        <h3 className="mt-4 font-heading text-3xl italic tracking-tight md:text-4xl">
          More systems. More results.
        </h3>
        <div className="mt-8 flex justify-center">
          <PlusButton href="/work" variant="outline">
            View All Projects
          </PlusButton>
        </div>
      </div>
    </Reveal>
  )
}

function ProgressIndicator({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 md:flex lg:right-10">
      {caseStudies.map((study, i) => (
        <div key={study.slug} className="flex items-center gap-3">
          <span
            className={cn(
              'text-[9px] uppercase tracking-[0.16em] transition-all duration-500 ease-premium',
              activeIndex === i
                ? 'text-gold opacity-100'
                : 'text-muted-foreground/40 opacity-0 lg:opacity-100',
            )}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <div
            className={cn(
              'transition-all duration-500 ease-premium',
              activeIndex === i
                ? 'h-12 w-px bg-gold'
                : 'h-6 w-px bg-border',
            )}
          />
        </div>
      ))}
    </div>
  )
}

function StickySlide({
  index,
  study,
  scrollYProgress,
}: {
  index: number
  study: CaseStudy
  scrollYProgress: MotionValue<number>
}) {
  const segment = 1 / caseStudies.length
  const start = index * segment
  const end = (index + 1) * segment
  const enterEnd = start + segment * 0.15
  const exitStart = end - segment * 0.15

  const opacity = useTransform(
    scrollYProgress,
    index === 0
      ? [0, enterEnd, exitStart, end]
      : [start, enterEnd, exitStart, end],
    index === 0
      ? [1, 1, 1, 0]
      : index === caseStudies.length - 1
        ? [0, 1, 1, 1]
        : [0, 1, 1, 0],
  )

  const y = useTransform(
    scrollYProgress,
    [start, enterEnd, exitStart, end],
    index === caseStudies.length - 1 ? [40, 0, 0, 0] : [40, 0, 0, -40],
  )

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex items-center px-5 md:px-10 lg:pr-20"
    >
      <div className="mx-auto w-full max-w-[1400px]">
        <SlideContent study={study} />
      </div>
    </motion.div>
  )
}

function DesktopStickyScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(
      caseStudies.length - 1,
      Math.floor(v * caseStudies.length),
    )
    setActiveIndex(idx)
  })

  return (
    <>
      <section
        id="work"
        ref={sectionRef}
        className="relative bg-background"
        style={{ height: '400vh' }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Section header — fixed at top */}
          <div className="absolute inset-x-0 top-0 z-20 bg-gradient-to-b from-background via-background/90 to-transparent px-5 pb-8 pt-28 md:px-10 md:pt-32">
            <div className="mx-auto max-w-[1400px]">
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
                Selected Work
              </p>
              <h2 className="mt-2 font-heading text-[clamp(2rem,4vw,3.5rem)] italic leading-[0.92] tracking-tight">
                Systems Built. Problems Solved.
              </h2>
            </div>
          </div>

          <ProgressIndicator activeIndex={activeIndex} />

          <div className="relative h-full pt-44 md:pt-48">
            {caseStudies.map((study, i) => (
              <StickySlide
                key={study.slug}
                index={i}
                study={study}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <ViewAllProjects />
        </div>
      </section>
    </>
  )
}

export function StickyCaseStudies() {
  const isMobile = useIsMobile()

  if (isMobile) {
    return <MobileStack />
  }

  return <DesktopStickyScroll />
}
