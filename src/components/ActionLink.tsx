import { ArrowRight, ExternalLink, Mail } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ActionContent } from '../data/content'

export default function ActionLink({
  label,
  to,
  style = 'primary',
  external,
  ariaLabel,
}: ActionContent) {
  const className = `btn ${style}`
  if (external) {
    const isMailto = to.startsWith('mailto:')
    return (
      <a
        className={className}
        href={to}
        target={isMailto ? undefined : '_blank'}
        rel={isMailto ? undefined : 'noopener noreferrer'}
        aria-label={ariaLabel ?? (isMailto ? `${label} por e-mail` : `${label}, abre em nova aba`)}
      >
        {label}{' '}
        {isMailto ? (
          <Mail aria-hidden="true" size={18} />
        ) : (
          <ExternalLink aria-hidden="true" size={17} />
        )}
      </a>
    )
  }
  return (
    <Link className={className} to={to}>
      {label} <ArrowRight size={18} />
    </Link>
  )
}
