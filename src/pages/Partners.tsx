import CardGrid from '../components/Cards'
import ActionLink from '../components/ActionLink'
import Hero from '../components/Hero'
import InstitutionalSection from '../components/InstitutionalSection'
import { partnersContent } from '../data/content'
import { contactLinks, site } from '../data/site'

export default function Partners() {
  return (
    <div className="conversion-page">
      <Hero content={partnersContent.hero} />
      <InstitutionalSection intro={partnersContent.value.intro}>
        <CardGrid items={partnersContent.value.cards} />
      </InstitutionalSection>
      <section className="section muted">
        <div className="container conversion-panel">
          <div className="conversion-intro">
            <span className="eyebrow">{partnersContent.intro.eyebrow}</span>
            <h2>{partnersContent.intro.title}</h2>
            <p>{partnersContent.intro.text}</p>
          </div>
          <div className="conversion-panel-actions">
            <ActionLink
              label="Quero falar sobre parceria"
              to={contactLinks.partnershipEmail}
              external
            />
            <a className="conversion-email" href={contactLinks.partnershipEmail}>
              {site.contact.email}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
