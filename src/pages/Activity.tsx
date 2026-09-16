import CardGrid from '../components/Cards'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import InstitutionalSection from '../components/InstitutionalSection'
import { activityContent } from '../data/content'

export default function Activity() {
  return (
    <>
      <Hero content={activityContent.hero} />
      <InstitutionalSection intro={activityContent.services.intro}>
        <CardGrid items={activityContent.services.cards} />
      </InstitutionalSection>
      <InstitutionalSection intro={activityContent.channels.intro} tone="muted">
        <CardGrid items={activityContent.channels.cards} />
      </InstitutionalSection>
      <InstitutionalSection intro={activityContent.steps.intro}>
        <CardGrid items={activityContent.steps.cards} />
      </InstitutionalSection>
      <CTA {...activityContent.cta} />
    </>
  )
}
