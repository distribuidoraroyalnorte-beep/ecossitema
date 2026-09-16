import CardGrid from '../components/Cards'
import Hero from '../components/Hero'
import InquiryForm from '../components/InquiryForm'
import InstitutionalSection from '../components/InstitutionalSection'
import { partnersContent } from '../data/content'

export default function Partners() {
  return (
    <>
      <Hero content={partnersContent.hero} />
      <InstitutionalSection intro={partnersContent.value.intro}>
        <CardGrid items={partnersContent.value.cards} />
      </InstitutionalSection>
      <section className="section muted">
        <div className="container form-layout">
          <div className="form-intro">
            <span className="eyebrow">{partnersContent.intro.eyebrow}</span>
            <h2>{partnersContent.intro.title}</h2>
            <p>{partnersContent.intro.text}</p>
          </div>
          <InquiryForm content={partnersContent.form} />
        </div>
      </section>
    </>
  )
}
