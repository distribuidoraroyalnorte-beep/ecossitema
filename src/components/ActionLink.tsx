import { ArrowRight, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ActionContent } from '../data/content'

export default function ActionLink({ label, to, style = 'primary', external }: ActionContent) {
  const className = `btn ${style}`
  if (external) {
    return (
      <a className={className} href={to} target="_blank" rel="noopener noreferrer">
        {label} <ExternalLink size={17} />
      </a>
    )
  }
  return (
    <Link className={className} to={to}>
      {label} <ArrowRight size={18} />
    </Link>
  )
}
