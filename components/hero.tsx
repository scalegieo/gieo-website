'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'motion/react'
import { NewsMarquee } from '@/components/news-marquee'
import { CityClocksBar } from '@/components/city-clocks-bar'
import { PlusButton } from '@/components/plus-button'

const LOGO_VIDEO = '/video/gieo-logo-intro.mp4'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const videoOpacity = useTransform(scrollYProgress, [0, 0.3, 0.45], [1, 0.5, 0])
  const videoScale = useTransform(scrollYProgress, [0, 0.45], [1, 0.92])
  const videoY = useTransform(scrollYProgress, [0, 0.45], ['0%', '-4%'])

  const contentOpacity = useTransform(scrollYProgress, [0.12, 0.32], [0, 1])
  const contentY = useTransform(scrollYProgress, [0.12, 0.32], [48, 0])

  const wordmarkOpacity = useTransform(scrollYProgress, [0.2, 0.38], [0, 0.06])
  const wordmarkY = useTransform(scrollYProgress, [0.2, 0.38], ['2%', '0%'])

  const logoMarkOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1])
  const logoMarkY = useTransform(scrollYProgress, [0.15, 0.3], [24, 0])

  const footerOpacity = useTransform(scrollYProgress, [0.2, 0.38], [0, 1])
  const scrollHintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0])

  return (
    <section ref={ref} id="top" className="relative min-h-[220vh] bg-background">
      <div className="sticky top-0 flex h-screen min-h-[600px] flex-col overflow-x-clip">
        {/* Intro video — full landing animation */}
        <motion.div
          style={{ opacity: videoOpacity, scale: videoScale, y: videoY }}
          className="pointer-events-none absolute inset-0 flex items-center justify-center px-4 py-12 md:px-6 md:py-16"
        >
          <video
            autoPlay
            muted
            playsInline
            loop
            className="h-[min(88vh,920px)] w-full max-w-[min(96vw,1100px)] object-contain"
            aria-label="GIEO logo animation"
          >
            <source src={LOGO_VIDEO} type="video/mp4" />
          </video>
        </motion.div>

        {/* Large ghost wordmark — only after scroll */}
        <motion.div
          style={{ opacity: wordmarkOpacity, y: wordmarkY }}
          className="pointer-events-none absolute inset-x-0 top-[12vh] flex justify-center overflow-visible"
          aria-hidden
        >
          <span className="select-none text-[clamp(6rem,22vw,18rem)] font-semibold uppercase leading-none tracking-[-0.04em] text-foreground">
            GIEO
          </span>
        </motion.div>

        <div className="relative z-10 flex h-full flex-col justify-end px-5 pb-16 md:px-8 md:pb-20">
          {/* Headline + logo mark — hidden until scroll */}
          <motion.div style={{ opacity: contentOpacity, y: contentY }}>
            <motion.p
              style={{ opacity: logoMarkOpacity, y: logoMarkY }}
              className="mb-8 text-2xl font-semibold uppercase tracking-[0.14em] text-foreground md:text-4xl"
            >
              GIEO
            </motion.p>

            <p className="label-caps mb-6 text-muted-foreground">
              Digital Systems Agency — Denver · Geneva · Abu Dhabi
            </p>

            <h1 className="max-w-4xl font-heading text-[clamp(2.5rem,6vw,4.5rem)] italic leading-[1.05] tracking-tight">
              We make complex
              <br />
              digital simple.
            </h1>

            <p className="mt-4 label-caps text-muted-foreground">News</p>
          </motion.div>

          <motion.div
            style={{ opacity: footerOpacity }}
            className="mt-auto space-y-8 pt-16"
          >
            <NewsMarquee />
            <CityClocksBar />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: scrollHintOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
        >
          <motion.span
            className="label-caps text-[11px] font-medium tracking-[0.28em] text-foreground/80"
            animate={{ opacity: [0.55, 1, 0.55] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Scroll
          </motion.span>
          <motion.div
            className="flex flex-col items-center gap-1.5"
            animate={{ y: [0, 7, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <span className="h-8 w-px bg-foreground/50" />
            <span className="h-1.5 w-1.5 rounded-full bg-foreground/70" />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative bg-background px-5 py-24 md:px-8 md:py-32">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.25, 1, 0.5, 1] }}
            className="font-heading text-[clamp(1.5rem,3vw,2.25rem)] italic leading-relaxed text-foreground/80"
          >
            GIEO turns fragmented tools and manual workflows into integrated
            digital systems — custom websites, AI automation, and CRM infrastructure
            that compel action. For teams who know simple is trusted, and trust converts.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 1, 0.5, 1] }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            <PlusButton bookCall>
              Book a 30 Min Call
            </PlusButton>
            <Link
              href="/about"
              data-cursor="hover"
              className="label-caps inline-flex items-center gap-2 text-foreground transition-opacity hover:opacity-50"
            >
              More about GIEO ↗
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
