import { Link } from 'react-router-dom'
import ActionLink from '../components/ActionLink'
import BrandImage from '../components/BrandImage'
import BrandLogoWall from '../components/BrandLogoWall'
import CardGrid from '../components/Cards'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import InstitutionalSection from '../components/InstitutionalSection'
import SectionTitle from '../components/SectionTitle'
import coverageMap from '../assets/images/mapa-cobertura.png'
import { brand } from '../data/brand'
import { featuredPartnerBrands } from '../data/brands'
import { homeContent } from '../data/content'

export default function Home() {
  return (
    <>
      <Hero
        content={homeContent.hero}
        variant="home"
        visual={
          <figure className="hero-operation-media">
            <BrandImage asset={brand.assets.images.homeHero} loading="eager" fetchPriority="high" />
          </figure>
        }
      />
      <InstitutionalSection intro={homeContent.capabilities.intro}>
        <CardGrid items={homeContent.capabilities.cards} />
      </InstitutionalSection>
      <InstitutionalSection intro={homeContent.brands.intro} tone="muted">
        <BrandLogoWall brands={featuredPartnerBrands} compact />
        <div className="center">
          <Link className="text-link" to={homeContent.brands.link.to}>
            {homeContent.brands.link.label}
          </Link>
        </div>
      </InstitutionalSection>
      <section className="section dark-section">
        <div className="container coverage-grid">
          <div className="coverage-copy">
            <SectionTitle {...homeContent.coverage.intro} light />
            <ActionLink {...homeContent.coverage.action} />
          </div>
          <figure className="coverage-map">
            <img
              src={coverageMap}
              alt="Mapa destacando Pará, Amapá e Maranhão, estados de atuação da Royal Norte."
              width="1254"
              height="1254"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
      <CTA {...homeContent.cta} />
    </>
  )
}
