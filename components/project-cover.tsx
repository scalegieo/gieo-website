'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { CaseStudy } from '@/lib/case-studies'

type ProjectCoverProps = {
  project: Pick<
    CaseStudy,
    'name' | 'industry' | 'location' | 'coverFrom' | 'coverTo' | 'tags' | 'image' | 'imageObjectPosition'
  >
  className?: string
  size?: 'default' | 'large'
  priority?: boolean
}

export function ProjectCover({
  project,
  className,
  size = 'default',
  priority = false,
}: ProjectCoverProps) {
  return (
    <div className={cn('relative overflow-hidden bg-surface-2', className)}>
      {project.image ? (
        <>
          <Image
            src={project.image}
            alt={`${project.name} website`}
            fill
            priority={priority}
            className={cn(
              'object-cover',
              project.imageObjectPosition === 'center' ? 'object-center' : 'object-top',
            )}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
        </>
      ) : (
        <>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(135deg, ${project.coverFrom} 0%, ${project.coverTo} 100%)`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        </>
      )}

      <div className="relative flex h-full min-h-[200px] flex-col justify-between p-6 md:p-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/20 bg-black/30 px-2.5 py-1 text-[9px] uppercase tracking-[0.14em] text-white/90 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/60">
            {project.location}
          </p>
          <p
            className={cn(
              'mt-2 font-heading italic leading-none tracking-tight text-white',
              size === 'large'
                ? 'text-[clamp(2rem,4vw,3.5rem)]'
                : 'text-2xl md:text-3xl',
            )}
          >
            {project.name}
          </p>
          <p className="mt-2 text-[11px] uppercase tracking-[0.14em] text-white/70">
            {project.industry}
          </p>
        </div>
      </div>
    </div>
  )
}
