import type { ReactNode } from 'react'
import type { SectionIntro } from '../data/content'
import SectionTitle from './SectionTitle'

export default function InstitutionalSection({
  intro,
  tone = 'default',
  children,
}: {
  intro: SectionIntro
  tone?: 'default' | 'muted' | 'dark'
  children: ReactNode
}) {
  const className =
    tone === 'default' ? 'section' : tone === 'muted' ? 'section muted' : 'section dark-section'
  return (
    <section className={className}>
      <div className="container">
        <SectionTitle {...intro} light={tone === 'dark'} />
        {children}
      </div>
    </section>
  )
}
