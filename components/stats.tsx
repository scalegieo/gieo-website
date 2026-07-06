'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, useInView } from 'motion/react'
import { Reveal } from '@/components/reveal'

type Stat = { prefix?: string; value: number; suffix: string; label: string }

const stats: Stat[] = [
  { prefix: '$', value: 12, suffix: 'M+', label: 'Combined Client Revenue' },
  { value: 3, suffix: 'M+', label: 'People Reached By Our Work' },
  { value: 80, suffix: '+', label: 'Projects Shipped' },
  { value: 98, suffix: '%', label: 'Client Retention Rate' },
]

function Counter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const controls = animate(0, stat.value, {
      duration: 1.8,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, stat.value])

  return (
    <span ref={ref} className="tabular-nums">
      {stat.prefix}
      {display}
      {stat.suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className="bg-surface-1 surface-noise">
      <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <Reveal>
          <p className="mb-16 text-[11px] uppercase tracking-[0.22em] text-accent">
            By the Numbers
          </p>
        </Reveal>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-start">
                <h3 className="text-[clamp(2.5rem,6vw,4.5rem)] font-bold leading-none tracking-tight text-foreground">
                  <Counter stat={stat} />
                </h3>
                <div className="mt-4 h-px w-12 bg-accent/40" />
                <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
