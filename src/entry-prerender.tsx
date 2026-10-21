import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import App from './App'
import { agendaMetadata, siteOrigin } from './data/page-metadata'

// Build-only contract: every value consumed by the writer comes from render().
// Metadata stays in the SSR dependency graph instead of relying on re-exports.
export function render() {
  return Object.entries(agendaMetadata).map(([path, metadata]) => ({
    path,
    metadata,
    siteOrigin,
    markup: renderToString(
      <StrictMode>
        <StaticRouter location={path + '/'}>
          <App />
        </StaticRouter>
      </StrictMode>,
    ),
  }))
}
