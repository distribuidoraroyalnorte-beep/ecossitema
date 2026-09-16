import type { ActionContent } from '../data/content'
import type { BrandAsset } from '../data/brand'
import ActionLink from './ActionLink'
import BrandImage from './BrandImage'

type Props = {
  eyebrow?: string
  title: string
  paragraphs: string[]
  image?: BrandAsset | null
  action?: ActionContent
  reverse?: boolean
  tone?: 'paper' | 'warm' | 'navy'
}

export default function EditorialFeature({
  eyebrow,
  title,
  paragraphs,
  image,
  action,
  reverse = false,
  tone = 'paper',
}: Props) {
  return (
    <section className={`editorial-feature editorial-feature-${tone}`}>
      <div className={`container editorial-feature-grid ${reverse ? 'is-reversed' : ''}`}>
        <div className="editorial-feature-media">
          <BrandImage asset={image ?? null} />
        </div>
        <div className="editorial-feature-copy">
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {action && <ActionLink {...action} />}
        </div>
      </div>
    </section>
  )
}
