'use client'

import Link from 'next/link'
import { Reveal } from '@/components/reveal'
import { ProjectCover } from '@/components/project-cover'
import { caseStudies, type CaseStudy } from '@/lib/case-studies'
import { siteDomain } from '@/lib/site-domain'
import { cn } from '@/lib/utils'
import { ArrowUpRight } from 'lucide-react'

type WorkProjectGridProps = {
  projects?: CaseStudy[]
  compact?: boolean
  showAdsBadge?: boolean
  title?: string
  subtitle?: string
}

export function WorkProjectGrid({
  projects = caseStudies,
  compact = false,
  showAdsBadge = true,
  title,
  subtitle,
}: WorkProjectGridProps) {
  return (
    <section className={cn('bg-background', compact ? 'py-16 md:py-24' : 'py-24 md:py-32')}>
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        {(title || !compact) && (
          <Reveal>
            <p className="mb-3 text-[11px] uppercase tracking-[0.22em] text-gold">
              {compact ? 'More Work' : 'All Projects'}
            </p>
            <h2 className="font-heading text-[clamp(2rem,4vw,3rem)] italic leading-[0.95] tracking-tight">
              {title ?? 'Websites, ads & systems'}
            </h2>
            {subtitle && (
              <p className="mt-4 max-w-xl text-sm text-muted-foreground">{subtitle}</p>
            )}
          </Reveal>
        )}

        <div
          className={cn(
            'grid grid-cols-1 gap-8 md:grid-cols-2',
            compact ? 'mt-0 md:gap-6' : 'mt-12 md:gap-x-8 md:gap-y-14',
          )}
        >
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.08}>
              <article className="group">
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="hover"
                  className="block"
                >
                  <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-2xl">
                    <ProjectCover project={project} className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]" />
                    {showAdsBadge && project.ads && (
                      <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-accent-foreground">
                        {project.ads.roas} ROAS
                      </span>
                    )}
                  </div>
                </Link>

                <div className="flex flex-col gap-2">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-accent/70">
                    {project.industry} · {project.location}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                    <Link
                      href={`/work/${project.slug}`}
                      data-cursor="hover"
                      className="transition-colors hover:text-accent"
                    >
                      {project.name}
                    </Link>
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground line-clamp-2">
                    {project.problem}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-border/60 bg-surface-1 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="hover"
                    className="mt-4 inline-flex w-fit items-center gap-1.5 border border-border/60 px-3 py-2 text-[10px] uppercase tracking-[0.14em] text-foreground transition-colors hover:border-gold/40 hover:text-gold"
                  >
                    Visit {siteDomain(project.url)}
                    <ArrowUpRight className="h-3 w-3" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
