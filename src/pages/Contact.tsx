import { Instagram, Linkedin } from 'lucide-react'
import CardGrid from '../components/Cards'
import Hero from '../components/Hero'
import InstitutionalSection from '../components/InstitutionalSection'
import { contactContent } from '../data/content'
import { brand } from '../data/brand'

export default function Contact() {
  return (
    <>
      <Hero content={contactContent.hero} />
      <InstitutionalSection intro={contactContent.channels}>
        <CardGrid items={contactContent.cards} columns={3} />
      </InstitutionalSection>
      <section className="section muted">
        <div className="container social-panel">
          <div>
            <h2>{contactContent.social.title}</h2>
            <p>{contactContent.social.text}</p>
          </div>
          <div>
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              <Instagram /> Instagram
            </a>
            <a
              href={brand.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn ghost"
            >
              <Linkedin /> LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
