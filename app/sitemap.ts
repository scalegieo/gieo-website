import type { MetadataRoute } from 'next'
import { caseStudies } from '@/lib/case-studies'
import { absoluteUrl, SITE_URL } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl('/'), lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: absoluteUrl('/about'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/services'), lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: absoluteUrl('/work'), lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: absoluteUrl('/contact'), lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: absoluteUrl('/blog'), lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: absoluteUrl('/reach-out'), lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ]

  const caseStudyRoutes: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: absoluteUrl(`/work/${study.slug}`),
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: study.featured ? 0.8 : 0.7,
  }))

  return [...staticRoutes, ...caseStudyRoutes]
}

export { SITE_URL }
