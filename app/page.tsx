import type { Metadata } from 'next'
import { Hero } from '@/components/hero'
import { WorkScroll } from '@/components/work-scroll'
import { WorkProjectGrid } from '@/components/work-project-grid'
import { IndustryFlipCards } from '@/components/industry-flip-cards'
import { Services } from '@/components/services'
import { WhyGieo } from '@/components/why-gieo'
import { Process } from '@/components/process'
import { Contact } from '@/components/contact'
import { caseStudies } from '@/lib/case-studies'
import { buildPageMetadata } from '@/lib/seo'

export const metadata: Metadata = buildPageMetadata({
  title: 'GIEO — Digital Systems Agency | Denver · Geneva · Abu Dhabi',
  description:
    'GIEO is the digital systems agency for custom websites, AI automation, CRM, and paid growth. Denver · Geneva · Abu Dhabi · worldwide. Book a 30-minute call.',
  path: '/',
})

export default function Page() {
  const moreProjects = caseStudies.filter((p) => !p.featured)

  return (
    <main className="bg-background">
      <Hero />
      <WorkScroll />
      <WorkProjectGrid
        projects={moreProjects}
        compact
        showAdsBadge
        title="Plus four more launches"
        subtitle="Hotels, restaurants, design-build, and luxury real estate — each with a live site and full case study."
      />
      <IndustryFlipCards />
      <Services />
      <WhyGieo />
      <Process />
      <Contact />
    </main>
  )
}
