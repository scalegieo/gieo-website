'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useParams, notFound } from 'next/navigation'
import { Reveal } from '@/components/reveal'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { getCaseStudy } from '@/lib/case-studies'
import { siteDomain } from '@/lib/site-domain'

export default function CaseStudyPage() {
  const params = useParams()
  const slug = typeof params.slug === 'string' ? params.slug : ''
  const project = getCaseStudy(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="bg-background pt-20">
      <section className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
        <Reveal>
          <Link
            href="/work"
            data-cursor="hover"
            className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Work
          </Link>
        </Reveal>
      </section>

      <section className="pb-24 pt-8 md:pb-32">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <Reveal>
            <h1 className="font-heading text-[clamp(3rem,8vw,6rem)] italic leading-[0.92] tracking-tight">
              {project.name}
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-wrap gap-8 border-y border-border/40 py-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-accent/70">Industry</p>
                <p className="mt-1 text-sm font-medium">{project.industry}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-accent/70">Location</p>
                <p className="mt-1 text-sm font-medium">{project.location}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-accent/70">Timeline</p>
                <p className="mt-1 text-sm font-medium">{project.timeline}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-accent/70">Services</p>
                <p className="mt-1 text-sm font-medium">{project.services.join(' • ')}</p>
              </div>
              <div>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="hover"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gold transition-opacity hover:opacity-70"
                >
                  Visit {siteDomain(project.url)}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-5 md:px-10">
        <Reveal delay={0.2}>
          <div className="relative mx-auto aspect-video max-w-[1400px] overflow-hidden rounded-2xl border border-border/40 bg-surface-2">
            <Image
              src={project.image}
              alt={`${project.name} website`}
              fill
              className="object-cover object-top"
              sizes="(max-width: 1400px) 100vw, 1400px"
              priority
            />
          </div>
        </Reveal>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-16 px-5 md:grid-cols-[1fr_2fr] md:gap-24 md:px-10">
          <div className="space-y-16">
            <Reveal>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.22em] text-accent">The Problem</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.problem}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.22em] text-accent">The Strategy</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.strategy}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div>
                <h3 className="text-[11px] uppercase tracking-[0.22em] text-accent">The System</h3>
                <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                  {project.system}
                </p>
              </div>
            </Reveal>
          </div>

          <div className="space-y-16">
            <Reveal delay={0.15}>
              <div>
                <h3 className="mb-8 font-heading text-3xl italic tracking-tight">What We Built</h3>
                <div className="grid gap-6 sm:grid-cols-2">
                  {project.deliverables.map((d) => (
                    <div key={d.title} className="border border-border/40 bg-surface-1 p-6">
                      <h4 className="font-semibold">{d.title}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div>
                <h3 className="mb-8 font-heading text-3xl italic tracking-tight">The Impact</h3>
                <div className="grid gap-6 sm:grid-cols-3">
                  {project.results.map((r) => (
                    <div key={r.label} className="border border-border/40 bg-background p-6 text-center">
                      <p className="text-4xl font-bold text-foreground">{r.metric}</p>
                      <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-muted-foreground">{r.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {project.ads && (
        <section className="border-y border-border/40 bg-surface-2 surface-noise py-24 md:py-32">
          <div className="mx-auto max-w-[1400px] px-5 md:px-10">
            <Reveal>
              <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Paid Media</p>
              <h2 className="mt-3 font-heading text-[clamp(2rem,4vw,3rem)] italic tracking-tight">
                {project.ads.headline}
              </h2>
            </Reveal>

            <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_1.2fr]">
              <Reveal delay={0.08}>
                <div className="space-y-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Channels</p>
                    <p className="mt-2 text-sm font-medium">{project.ads.channels.join(' · ')}</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.16em] text-muted-foreground">Campaigns</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.ads.campaigns}</p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 border-t border-border/40 pt-6">
                    <div>
                      <p className="text-2xl font-bold text-gold">{project.ads.roas}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">ROAS</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{project.ads.spend}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">Ad Spend</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{project.ads.cpa}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">CPA</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div className="border border-gold/20 bg-background/60 p-8">
                  <p className="text-[10px] uppercase tracking-[0.16em] text-gold">Campaign Highlights</p>
                  <ul className="mt-6 space-y-4">
                    {project.ads.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-2 h-px w-4 shrink-0 bg-gold/60" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      )}
    </main>
  )
}
