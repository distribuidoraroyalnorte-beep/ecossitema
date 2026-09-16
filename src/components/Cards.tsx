import { Link } from 'react-router-dom'
import type { CardContent } from '../data/content'
import Icon from './Icon'

type LinkedCard = CardContent & { to?: string; label?: string }

export function InfoCard({ icon, eyebrow, title, text, to, label }: LinkedCard) {
  return (
    <article className="icon-card">
      <Icon name={icon} />
      {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
      <h3>{title}</h3>
      <p>{text}</p>
      {to && label && (
        <Link className="text-link" to={to}>
          {label}
        </Link>
      )}
    </article>
  )
}

export default function CardGrid({
  items,
  columns = 4,
  dark = false,
}: {
  items: readonly LinkedCard[]
  columns?: 3 | 4
  dark?: boolean
}) {
  return (
    <div className={`cards-${columns}${dark ? ' dark-cards' : ''}`}>
      {items.map((item) => (
        <InfoCard key={item.title} {...item} />
      ))}
    </div>
  )
}
