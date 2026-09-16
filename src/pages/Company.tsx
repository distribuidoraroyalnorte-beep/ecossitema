import CardGrid from '../components/Cards'
import Hero from '../components/Hero'
import InstitutionalSection from '../components/InstitutionalSection'
import SectionTitle from '../components/SectionTitle'
import { companyContent } from '../data/content'
import { site } from '../data/site'

export default function Company() {
  return (
    <>
      <Hero content={companyContent.hero} />
      <section className="section">
        <div className="container split">
          <div>
            <SectionTitle {...companyContent.history.intro} />
            {companyContent.history.paragraphs.map((paragraph) => (
              <p className="lead" key={paragraph}>
                {paragraph}
              </p>
            ))}
          </div>
          <div className="year-card">
            <span>{companyContent.history.yearLabel}</span>
            <strong>{site.since}</strong>
            <p>{companyContent.history.yearText}</p>
          </div>
        </div>
      </section>
      <InstitutionalSection intro={companyContent.principles.intro} tone="muted">
        <CardGrid items={companyContent.principles.cards} columns={3} />
      </InstitutionalSection>
      <InstitutionalSection intro={companyContent.structure}>
        <div className="location-cards">
          {site.locations.map((location) => (
            <article key={location.city}>
              <span>{location.label}</span>
              <h3>{location.city}</h3>
              <p>{location.state}</p>
            </article>
          ))}
        </div>
      </InstitutionalSection>
      <InstitutionalSection intro={companyContent.strengthsIntro} tone="dark">
        <CardGrid items={companyContent.strengths} columns={3} dark />
      </InstitutionalSection>
    </>
  )
}
