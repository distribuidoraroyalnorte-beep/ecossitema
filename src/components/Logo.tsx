import { Link } from 'react-router-dom'
import { brand } from '../data/brand'
import BrandImage from './BrandImage'

export default function Logo() {
  const logo = brand.assets.logo.primary
  return (
    <Link to="/" className="brand" aria-label={`${brand.company.shortName} - Início`}>
      <BrandImage asset={logo} className="brand-logo" loading="eager" />
      {!logo && (
        <span className="brand-text">
          <strong>{brand.company.shortName}</strong>
          <small>{brand.company.descriptor}</small>
        </span>
      )}
    </Link>
  )
}
