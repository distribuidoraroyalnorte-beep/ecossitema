import { Link } from 'react-router-dom'
import Hero from './Hero'
import { agendaPublicationDate, type HeroContent } from '../data/content'

type DocumentContent = {
  hero: HeroContent
  sections: {
    title: string
    paragraphs: string[]
    link?: { label: string; href: string }
  }[]
}

export default function AgendaDocument({ content }: { content: DocumentContent }) {
  return (
    <>
      <Hero content={content.hero} />
      <section className="section">
        <div className="container privacy-content agenda-content">
          <p className="lead">
            Publicado em <time dateTime="2026-10-21">{agendaPublicationDate}</time>.
          </p>
          {content.sections.map((section) => (
            <section key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.link && (
                <p>
                  <a href={section.link.href}>{section.link.label}</a>
                </p>
              )}
            </section>
          ))}
          <nav className="agenda-legal-links" aria-label="Navegação da Agenda">
            <Link to="/agenda/">Voltar à Agenda</Link>
            <Link to="/agenda/privacidade/">Política de Privacidade da Agenda</Link>
            <Link to="/agenda/termos/">Termos de Uso da Agenda</Link>
          </nav>
        </div>
      </section>
    </>
  )
}
