import Hero from '../components/Hero'
import ActionLink from '../components/ActionLink'
import { agendaContent } from '../data/content'

export default function Agenda() {
  return (
    <>
      <Hero content={agendaContent.hero} />
      <section className="section">
        <div className="container privacy-content agenda-content">
          <p className="agenda-access-notice">
            <strong>{agendaContent.accessNotice}</strong>
          </p>
          <p className="lead">{agendaContent.introduction}</p>
          <section aria-labelledby="agenda-features">
            <h2 id="agenda-features">{agendaContent.featuresTitle}</h2>
            <ul className="agenda-features">
              {agendaContent.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          <section aria-labelledby="agenda-google">
            <h2 id="agenda-google">{agendaContent.googleTitle}</h2>
            <p>{agendaContent.googleText}</p>
          </section>
          <section aria-labelledby="agenda-legal">
            <h2 id="agenda-legal">{agendaContent.legalTitle}</h2>
            <p>{agendaContent.legalText}</p>
            <nav className="agenda-legal-links" aria-label="Documentos da Agenda">
              {agendaContent.legalLinks.map((link) => (
                <ActionLink key={link.to} {...link} />
              ))}
            </nav>
          </section>
        </div>
      </section>
    </>
  )
}
