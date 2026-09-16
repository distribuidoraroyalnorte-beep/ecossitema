import type { ActionContent } from '../data/content'
import ActionLink from './ActionLink'

export type DualCTAItem = {
  eyebrow?: string
  title: string
  text: string
  action: ActionContent
}

type Props = {
  primary: DualCTAItem
  secondary: DualCTAItem
  ariaLabel?: string
}

function CTAColumn({ item }: { item: DualCTAItem }) {
  return (
    <article className="dual-cta-column">
      {item.eyebrow && <span className="eyebrow">{item.eyebrow}</span>}
      <h2>{item.title}</h2>
      <p>{item.text}</p>
      <ActionLink {...item.action} />
    </article>
  )
}

export default function DualCTA({
  primary,
  secondary,
  ariaLabel = 'Fale com a Royal Norte',
}: Props) {
  return (
    <section className="dual-cta" aria-label={ariaLabel}>
      <div className="container dual-cta-grid">
        <CTAColumn item={primary} />
        <CTAColumn item={secondary} />
      </div>
    </section>
  )
}
