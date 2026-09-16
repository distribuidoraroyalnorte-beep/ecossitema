import { Instagram, Linkedin, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { footerContent, footerNavigation, site } from '../data/site'
import { brand } from '../data/brand'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>{brand.company.slogan}</p>
          <div className="socials">
            <a
              href={brand.social.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a href={brand.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
        <div>
          <h4>{footerContent.navigationTitle}</h4>
          {footerNavigation.slice(0, 4).map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h4>{footerContent.institutionalTitle}</h4>
          {footerNavigation.slice(4).map((item) => (
            <Link key={item.to} to={item.to}>
              {item.label}
            </Link>
          ))}
        </div>
        <div>
          <h4>{footerContent.locationTitle}</h4>
          <span className="inline">
            <MapPin size={16} /> {site.contact.address}
          </span>
          <span>{footerContent.locationText}</span>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {brand.company.name}. {footerContent.rights}
        </span>
        <Link to="/privacidade">{footerContent.privacyLabel}</Link>
      </div>
    </footer>
  )
}
