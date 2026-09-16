import { CheckCircle2 } from 'lucide-react'
import Hero from '../components/Hero'
import InquiryForm from '../components/InquiryForm'
import { customerContent } from '../data/content'

export default function BecomeClient() {
  return (
    <>
      <Hero content={customerContent.hero} />
      <section className="section">
        <div className="container form-layout">
          <div className="form-intro">
            <span className="eyebrow">{customerContent.intro.eyebrow}</span>
            <h2>{customerContent.intro.title}</h2>
            <p>{customerContent.intro.text}</p>
            <ul className="check-list">
              {customerContent.benefits.map((benefit) => (
                <li key={benefit}>
                  <CheckCircle2 />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <InquiryForm content={customerContent.form} />
        </div>
      </section>
    </>
  )
}
