import CardGrid from '../components/Cards'
import CTA from '../components/CTA'
import Hero from '../components/Hero'
import InstitutionalSection from '../components/InstitutionalSection'
import BrandLogoWall from '../components/BrandLogoWall'
import { partnerBrandsByName } from '../data/brands'
import { brandsContent } from '../data/content'
import { site } from '../data/site'

export default function Brands() {
  return (
    <>
      <Hero content={brandsContent.hero} />
      <InstitutionalSection intro={brandsContent.portfolio}>
        <div className="brand-portfolio-list">
          {site.brandPortfolios.map((portfolio) => (
            <section className="brand-portfolio-group" key={portfolio.code}>
              <div className="brand-portfolio-heading">
                <span>{portfolio.code}</span>
                <div>
                  <h2>{portfolio.state}</h2>
                  <p>{portfolio.description}</p>
                </div>
              </div>
              <BrandLogoWall
                brands={portfolio.brands.map(
                  (representedBrand) => partnerBrandsByName[representedBrand],
                )}
                label={`Marcas representadas no ${portfolio.state}`}
              />
            </section>
          ))}
        </div>
      </InstitutionalSection>
      <InstitutionalSection intro={brandsContent.audiences.intro} tone="muted">
        <CardGrid items={brandsContent.audiences.cards} />
      </InstitutionalSection>
      <CTA {...brandsContent.cta} />
    </>
  )
}
