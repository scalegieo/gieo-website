'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    category: 'GEO',
    title: 'Why Generative Engine Optimization Is the Next SEO',
    href: '/blog',
  },
  {
    category: 'Strategy',
    title: 'The Real Cost of Disconnected Business Systems',
    href: '/blog',
  },
  {
    category: 'Automation',
    title: 'How AI Follow-Up Systems Convert 3× More Leads',
    href: '/blog',
  },
]

export function InsightsStrip() {
  return (
    <section className="border-b border-border/40 bg-surface-1">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="flex items-center gap-6 overflow-x-auto py-3 scrollbar-none">
          <span className="shrink-0 text-[10px] font-medium uppercase tracking-[0.2em] text-accent">
            Insights
          </span>
          <span className="h-4 w-px shrink-0 bg-border/60" />

          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              className="shrink-0"
            >
              <Link
                href={article.href}
                className="group flex items-center gap-3 text-[12px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
              >
                <span className="text-[10px] uppercase tracking-[0.12em] text-accent/70">
                  {article.category}
                </span>
                <span className="hidden sm:inline">{article.title}</span>
                <span className="sm:hidden">{article.title.slice(0, 35)}…</span>
                <ArrowRight className="h-2.5 w-2.5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
