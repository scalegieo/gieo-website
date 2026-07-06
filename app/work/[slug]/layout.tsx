import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getCaseStudy } from '@/lib/case-studies'
import { buildPageMetadata } from '@/lib/seo'

type Props = {
  params: Promise<{ slug: string }>
  children: React.ReactNode
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getCaseStudy(slug)
  if (!project) return {}

  return buildPageMetadata({
    title: `${project.name} — GIEO Case Study`,
    description: `${project.problem.slice(0, 155)}… Built by GIEO.`,
    path: `/work/${project.slug}`,
    keywords: ['GIEO', project.name, project.industry, ...project.tags, 'GIEO case study'],
  })
}

export default async function CaseStudyLayout({ params, children }: Props) {
  const { slug } = await params
  if (!getCaseStudy(slug)) notFound()
  return children
}
