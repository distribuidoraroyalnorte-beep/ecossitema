import Hero from '../components/Hero'
import { privacyContent } from '../data/content'

export default function Privacy() {
  return (
    <>
      <Hero content={privacyContent.hero} />
      <section className="section">
        <div className="container privacy-content">
          <p className="lead">{privacyContent.updatedAt}</p>
          {privacyContent.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
        </div>
      </section>
    </>
  )
}
