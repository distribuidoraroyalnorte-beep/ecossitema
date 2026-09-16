import type { BrandAsset } from '../data/brand'
import BrandImage from './BrandImage'

export type BrandLogoItem = {
  name: string
  logo?: BrandAsset | null
  href?: string
}

type Props = {
  brands: readonly BrandLogoItem[]
  label?: string
  compact?: boolean
}

function BrandLogo({ brand }: { brand: BrandLogoItem }) {
  const content = (
    <>
      {brand.logo && (
        <div className="brand-logo-wall-media">
          <BrandImage asset={brand.logo} className="brand-logo-wall-image" alt="" />
        </div>
      )}
      <span className="brand-logo-wall-name">{brand.name}</span>
    </>
  )

  if (!brand.href) return <div className="brand-logo-wall-item">{content}</div>

  return (
    <a
      className="brand-logo-wall-item"
      href={brand.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${brand.name} (abre em nova aba)`}
    >
      {content}
    </a>
  )
}

export default function BrandLogoWall({
  brands,
  label = 'Marcas parceiras',
  compact = false,
}: Props) {
  return (
    <div
      className={`brand-logo-wall${compact ? ' is-compact' : ''}`}
      role="list"
      aria-label={label}
    >
      {brands.map((brand) => (
        <div key={brand.name} role="listitem">
          <BrandLogo brand={brand} />
        </div>
      ))}
    </div>
  )
}
