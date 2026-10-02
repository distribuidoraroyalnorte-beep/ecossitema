import { CheckCircle2 } from 'lucide-react'
import Hero from '../components/Hero'
import { customerContent } from '../data/content'
import { site } from '../data/site'

export default function BecomeClient() {
  return (
    <div className="conversion-page">
      <Hero content={customerContent.hero} />
      <section className="section">
        <div className="container conversion-layout">
          <div className="conversion-intro">
            <span className="eyebrow">{customerContent.intro.eyebrow}</span>
            <h2>{customerContent.intro.title}</h2>
            <p>{customerContent.intro.text}</p>
            <strong className="conversion-contact">{site.contact.phone}</strong>
          </div>
          <ul className="check-list conversion-benefits">
            {customerContent.benefits.map((benefit) => (
              <li key={benefit}>
                <CheckCircle2 aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
