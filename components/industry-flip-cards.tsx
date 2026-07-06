'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { industryCategories } from '@/lib/case-studies'

function cardLabelClass(label: string) {
  if (label === 'Startups') return 'text-xl md:text-2xl'
  if (label.length > 14) return 'text-base md:text-lg'
  return 'text-lg md:text-xl'
}

export function IndustryFlipCards() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null)

  useEffect(() => {
    if (flippedIndex !== null) return
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % industryCategories.length)
    }, 2400)
    return () => clearInterval(id)
  }, [flippedIndex])

  return (
    <section className="border-t border-border/40 bg-surface-1 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <p className="label-caps text-muted-foreground">And many more</p>
          <h2 className="mt-4 font-heading text-[clamp(2rem,4vw,3.5rem)] italic leading-[0.95] tracking-tight">
            Built for brands that demand more
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            From Swiss luxury real estate to Cabo fine dining — we build websites,
            run ads, and connect systems for teams across industries.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 md:gap-4">
          {industryCategories.map((industry, i) => {
            const isFlipped = flippedIndex === i
            const isHighlighted = flippedIndex === null && activeIndex === i

            return (
              <div
                key={industry.label}
                className="perspective-[1000px]"
                onMouseEnter={() => setFlippedIndex(i)}
                onMouseLeave={() => setFlippedIndex(null)}
                onFocus={() => setFlippedIndex(i)}
                onBlur={() => setFlippedIndex(null)}
              >
                <motion.div
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.65, ease: [0.25, 1, 0.5, 1] }}
                  className="relative h-32 md:h-36"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className={cn(
                      'absolute inset-0 flex items-center justify-center rounded-xl border bg-background p-3 backface-hidden transition-colors duration-500 md:p-4',
                      isHighlighted ? 'border-gold/50 gold-border-glow' : 'border-border/60',
                    )}
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span
                      className={cn(
                        'text-center font-heading italic leading-tight tracking-tight',
                        cardLabelClass(industry.label),
                      )}
                    >
                      {industry.label}
                    </span>
                  </div>

                  <div
                    className="absolute inset-0 flex items-center justify-center rounded-xl border border-gold/30 bg-surface-dark p-3 text-center md:p-4"
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <p className="text-[10px] leading-relaxed text-primary-foreground/70 md:text-[11px]">
                      {industry.back}
                    </p>
                  </div>
                </motion.div>
              </div>
            )
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.p
            key={flippedIndex ?? activeIndex}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.4 }}
            className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground"
          >
            {flippedIndex !== null
              ? industryCategories[flippedIndex].back
              : industryCategories[activeIndex].back}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  )
}
