import type { ActionContent } from '../data/content'
import ActionLink from './ActionLink'

type Props = { eyebrow: string; title: string; text: string; actions: ActionContent[] }

export default function CTA({ eyebrow, title, text, actions }: Props) {
  return (
    <section className="section">
      <div className="container cta-panel">
        <div>
          <span className="eyebrow">{eyebrow}</span>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-actions">
          {actions.map((action) => (
            <ActionLink key={action.to} {...action} />
          ))}
        </div>
      </div>
    </section>
  )
}
