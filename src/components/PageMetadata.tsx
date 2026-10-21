import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { agendaMetadata, institutionalMetadata, siteOrigin } from '../data/page-metadata'

export default function PageMetadata() {
  const { pathname } = useLocation()
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '') || '/'
    const agenda = agendaMetadata[path]
    const metadata = agenda ?? institutionalMetadata
    const url = `${siteOrigin}${path}${agenda ? '/' : ''}`
    document.title = metadata.title
    const meta = (attribute: 'name' | 'property', name: string, value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, name)
        document.head.appendChild(element)
      }
      element.content = value
    }
    meta('name', 'description', metadata.description)
    meta('property', 'og:title', metadata.title)
    meta(
      'property',
      'og:description',
      agenda?.description ?? institutionalMetadata.shareDescription,
    )
    meta('property', 'og:url', url)
    meta('name', 'twitter:title', metadata.title)
    meta(
      'name',
      'twitter:description',
      agenda?.description ?? institutionalMetadata.shareDescription,
    )
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [pathname])
  return null
}
