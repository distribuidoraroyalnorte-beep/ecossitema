import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
export { agendaMetadata, siteOrigin } from './data/page-metadata'

// Build-only entry. Same application, components and content as the browser.
export function render(pathname: string) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={pathname}>
        <App />
      </StaticRouter>
    </StrictMode>,
  )
}
