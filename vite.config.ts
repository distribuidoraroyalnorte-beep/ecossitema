import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { agendaMetadata, siteOrigin } from './src/data/page-metadata.ts'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'agenda-page-metadata',
      enforce: 'post',
      generateBundle: {
        order: 'post',
        handler(_options, bundle) {
          const index = bundle['index.html']
          if (!index || index.type !== 'asset') throw new Error('Missing built index.html')
          const escape = (value: string) =>
            value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
          for (const [path, metadata] of Object.entries(agendaMetadata)) {
            let html = String(index.source)
            html = html.replace(/<title>[^<]*<\/title>/, `<title>${escape(metadata.title)}</title>`)
            for (const [selector, value] of [
              ['name="description"', metadata.description],
              ['property="og:title"', metadata.title],
              ['property="og:description"', metadata.description],
              ['property="og:url"', `${siteOrigin}${path}`],
            ]) {
              html = html.replace(
                new RegExp(`(<meta\\s+${selector}\\s+content=")[^"]*("\\s*\\/?>)`),
                `$1${escape(value)}$2`,
              )
            }
            html = html.replace(
              /(<link rel="canonical" href=")[^"]*("\s*\/?>)/,
              `$1${siteOrigin}${path}$2`,
            )
            html = html.replace(
              '</head>',
              `<meta name="twitter:title" content="${escape(metadata.title)}" /><meta name="twitter:description" content="${escape(metadata.description)}" /></head>`,
            )
            this.emitFile({ type: 'asset', fileName: `${path.slice(1)}/index.html`, source: html })
          }
        },
      },
    },
  ],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
