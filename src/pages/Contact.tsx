import { Instagram, Linkedin, MapPin, MessageCircle } from 'lucide-react'
import InstitutionalSection from '../components/InstitutionalSection'
import { contactContent } from '../data/content'
import { brand } from '../data/brand'
import { site } from '../data/site'
import type { SiteLocation } from '../data/site'

function mapsUrl(location: SiteLocation) {
  const address = [
    location.address,
    location.complement,
    location.district,
    `${location.city} - ${location.state}`,
    `CEP ${location.zipCode}`,
  ]
    .filter(Boolean)
    .join(', ')

  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
}

export default function Contact() {
  const whatsappUrl = `https://wa.me/${site.contact.whatsapp}?${new URLSearchParams({ text: contactContent.whatsapp.message })}`

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="container">
          <span className="eyebrow">{contactContent.hero.eyebrow}</span>
          <h1>{contactContent.hero.title}</h1>
          <p>{contactContent.hero.text}</p>
          <div className="contact-actions">
            <a
              className="btn primary contact-whatsapp"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={contactContent.whatsapp.ariaLabel}
            >
              <MessageCircle aria-hidden="true" size={24} />
              {contactContent.whatsapp.label}
            </a>
            <a className="contact-email" href={`mailto:${site.contact.email}`}>
              {site.contact.email}
            </a>
          </div>
          <span className="contact-channel-note">{contactContent.whatsapp.note}</span>
        </div>
      </section>
      <InstitutionalSection intro={contactContent.units}>
        <div className="contact-units">
          {site.locations.map((location) => (
            <article className="contact-unit" key={`${location.city}-${location.state}`}>
              <MapPin aria-hidden="true" size={24} />
              <span className="contact-unit-label">{location.name}</span>
              <h3>
                {location.city} - {location.state}
              </h3>
              <address>
                <span>{location.address}</span>
                {location.complement && <span>{location.complement}</span>}
                <span>{location.district}</span>
                <span>
                  {location.city} - {location.state}
                </span>
                <span>CEP {location.zipCode}</span>
              </address>
              <a href={mapsUrl(location)} target="_blank" rel="noopener noreferrer">
                Ver no mapa
              </a>
            </article>
          ))}
        </div>
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
