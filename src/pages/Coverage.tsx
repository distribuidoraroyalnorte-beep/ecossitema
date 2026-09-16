import CardGrid from '../components/Cards'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import InstitutionalSection from '../components/InstitutionalSection'
import { coverageContent } from '../data/content'
import { site } from '../data/site'

export default function Coverage() {
  return (
    <>
      <Hero content={coverageContent.hero} />
      <InstitutionalSection intro={coverageContent.presence}>
        <div className="location-cards">
          {site.brandPortfolios.map((portfolio) => (
            <article key={portfolio.code}>
              <span>{portfolio.code}</span>
              <h3>{portfolio.state}</h3>
              <p>{portfolio.description}</p>
            </article>
          ))}
        </div>
      </InstitutionalSection>
      <InstitutionalSection intro={coverageContent.knowledge.intro} tone="muted">
        <CardGrid items={coverageContent.knowledge.cards} columns={3} />
      </InstitutionalSection>
      <CTA {...coverageContent.cta} />
    </>
  )
}
