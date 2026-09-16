import type { ReactNode } from 'react'
import type { HeroContent } from '../data/content'
import ActionLink from './ActionLink'

type Props = { content: HeroContent; variant?: 'home' | 'page'; visual?: ReactNode }

function HeroTitle({ title, highlight }: Pick<HeroContent, 'title' | 'highlight'>) {
  if (!highlight || !title.includes(highlight)) return <>{title}</>
  const [before, after] = title.split(highlight)
  return (
    <>
      {before}
      <em>{highlight}</em>
      {after}
    </>
  )
}

export default function Hero({ content, variant = 'page', visual }: Props) {
  if (variant === 'home') {
    return (
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">{content.eyebrow}</span>
            <h1>
              <HeroTitle title={content.title} highlight={content.highlight} />
            </h1>
            <p>{content.text}</p>
            {content.actions && (
              <div className="hero-actions">
                {content.actions.map((action) => (
                  <ActionLink key={action.to} {...action} />
                ))}
              </div>
            )}
          </div>
          {visual}
        </div>
      </section>
    )
  }
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">{content.eyebrow}</span>
        <h1>
          <HeroTitle title={content.title} highlight={content.highlight} />
        </h1>
        <p>{content.text}</p>
        {content.actions && (
          <div className="hero-actions">
            {content.actions.map((action) => (
              <ActionLink key={action.to} {...action} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
