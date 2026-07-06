'use client'

import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'motion/react'
import { ProjectCover } from '@/components/project-cover'
import { featuredCaseStudies } from '@/lib/case-studies'
import { siteDomain } from '@/lib/site-domain'
import { ArrowUpRight } from 'lucide-react'

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

function MobileWorkList() {
  return (
    <section id="work" className="bg-background px-5 py-24 md:px-8">
      <p className="label-caps mb-8 text-muted-foreground">Featured Work</p>
      <div className="flex flex-col gap-12">
        {featuredCaseStudies.map((project) => (
          <article key={project.slug} className="group">
            <Link
              href={`/work/${project.slug}`}
              data-cursor="hover"
              className="block"
            >
              <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                <ProjectCover
                  project={project}
                  className="h-full w-full transition-transform duration-700 group-hover:scale-[1.02]"
                  size="large"
                />
                {project.ads && (
                  <span className="absolute right-4 top-4 rounded-full bg-gold px-3 py-1 text-[9px] font-medium uppercase tracking-[0.14em] text-accent-foreground">
                    {project.ads.roas} ROAS
                  </span>
                )}
              </div>
              <h3 className="font-heading text-3xl italic">{project.name}</h3>
              <p className="mt-2 label-caps text-muted-foreground">
                {project.tags.join(' · ')}
              </p>
            </Link>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="hover"
              className="mt-4 inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.14em] text-foreground/60 transition-colors hover:text-gold"
            >
              Visit {siteDomain(project.url)}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}

function DesktopWorkScroll() {
  const sectionRef = useRef<HTMLElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const projects = featuredCaseStudies

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(projects.length - 1, Math.floor(v * projects.length))
    setActiveIndex(idx)
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1])

  return (
    <section
      ref={sectionRef}
      id="work"
      className="relative bg-background"
      style={{ height: `${projects.length * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen overflow-hidden">
        <div className="relative z-10 flex w-full flex-col justify-center px-5 md:w-1/2 md:px-8 lg:px-16">
          <p className="label-caps mb-8 text-muted-foreground">Featured Work</p>

          <div className="relative">
            {projects.map((project, i) => {
              const isActive = activeIndex === i
              return (
                <div key={project.slug} className="block py-1">
                  <Link
                    href={`/work/${project.slug}`}
                    data-cursor="hover"
                    className="block"
                  >
                    <motion.h3
                      animate={{
                        opacity: isActive ? 1 : 0.12,
                        x: isActive ? 0 : -8,
                      }}
                      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
                      className="font-heading text-[clamp(2.5rem,5vw,4.5rem)] italic leading-[1.1] tracking-tight"
                    >
                      {project.name}
                    </motion.h3>
                  </Link>

                  <motion.div
                    animate={{
                      opacity: isActive ? 1 : 0,
                      height: isActive ? 'auto' : 0,
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 label-caps text-muted-foreground">
                      {project.industry} · {project.location}
                    </p>
                    <p className="mt-2 max-w-md text-sm text-muted-foreground">
                      {project.tags.join(' · ')}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-4">
                      <Link
                        href={`/work/${project.slug}`}
                        data-cursor="hover"
                        className="label-caps text-foreground/60 transition-colors hover:text-foreground"
                      >
                        View case study ↗
                      </Link>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-cursor="hover"
                        className="label-caps text-gold/80 transition-colors hover:text-gold"
                      >
                        Visit {siteDomain(project.url)} ↗
                      </a>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="absolute inset-y-0 right-0 hidden w-1/2 md:block">
          <motion.div
            style={{ scale: imageScale, opacity: imageOpacity }}
            className="relative h-full w-full p-8 pl-0"
          >
            {projects.map((project, i) => (
              <motion.div
                key={project.slug}
                animate={{ opacity: activeIndex === i ? 1 : 0 }}
                transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1] }}
                className="absolute inset-8 left-0 overflow-hidden rounded-2xl"
              >
                <ProjectCover project={project} className="h-full w-full" priority={i === 0} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export function WorkScroll() {
  const isMobile = useIsMobile()
  if (isMobile) return <MobileWorkList />
  return <DesktopWorkScroll />
}
