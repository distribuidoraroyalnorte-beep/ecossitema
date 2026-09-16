import type { ReactNode } from 'react'
import type { HeroContent } from '../data/content'
import ActionLink from './ActionLink'

type Props = {
  content: HeroContent
  media?: ReactNode
  trustContent?: ReactNode
}

export default function InstitutionalHero({ content, media, trustContent }: Props) {
  return (
    <section className="institutional-hero" aria-labelledby="institutional-hero-title">
      <div className="container institutional-hero-grid">
        <div className="institutional-hero-copy">
          <span className="eyebrow">{content.eyebrow}</span>
          <h1 id="institutional-hero-title">
            {content.highlight && content.title.includes(content.highlight) ? (
              <>
                {content.title.split(content.highlight)[0]}
                <em>{content.highlight}</em>
                {content.title.split(content.highlight)[1]}
              </>
            ) : (
              content.title
            )}
          </h1>
          <p>{content.text}</p>
          {content.actions && (
            <div className="hero-actions">
              {content.actions.map((action) => (
                <ActionLink key={`${action.to}-${action.label}`} {...action} />
              ))}
            </div>
          )}
          {trustContent && <div className="institutional-hero-trust">{trustContent}</div>}
        </div>
        {media && <div className="institutional-hero-media">{media}</div>}
      </div>
    </section>
  )
}
