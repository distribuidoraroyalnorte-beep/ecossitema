import { Link } from 'react-router-dom'
import { notFoundContent } from '../data/content'

export default function NotFound() {
  return (
    <section className="not-found">
      <div>
        <span>{notFoundContent.code}</span>
        <h1>{notFoundContent.title}</h1>
        <p>{notFoundContent.text}</p>
        <Link className="btn primary" to="/">
          {notFoundContent.action}
        </Link>
      </div>
    </section>
  )
}
