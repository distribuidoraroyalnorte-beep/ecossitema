import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { render } from '../node_modules/.cache/agenda-prerender/entry-prerender.mjs'

const template = await readFile(resolve('dist/index.html'), 'utf8')
const escape = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
for (const { path, markup, metadata, siteOrigin } of render()) {
  const url = siteOrigin + path + '/'
  let html = template.replace(
    /<title>[^<]*<\/title>/,
    '<title>' + escape(metadata.title) + '</title>',
  )
  for (const [selector, value] of [
    ['name="description"', metadata.description],
    ['property="og:title"', metadata.title],
    ['property="og:description"', metadata.description],
    ['property="og:url"', url],
  ]) {
    html = html.replace(
      new RegExp('(<meta\\s+' + selector + '\\s+content=")[^"]*("\\s*\\/?>)'),
      '$1' + escape(value) + '$2',
    )
  }
  html = html.replace(/(<link rel="canonical" href=")[^"]*("\s*\/?>)/, '$1' + url + '$2')
  html = html.replace(
    '</head>',
    '<meta name="twitter:title" content="' +
      escape(metadata.title) +
      '" /><meta name="twitter:description" content="' +
      escape(metadata.description) +
      '" /></head>',
  )
  if (!markup.includes('<main') || !markup.includes('<h1') || !markup.includes('<footer'))
    throw new Error('Incomplete prerender: ' + path)
  // Callback replacement preserves literal dollar characters from rendered content.
  html = html.replace(
    '<div id="root"></div>',
    () => '<div id="root" data-prerendered="agenda">' + markup + '</div>',
  )
  const directory = resolve('dist', path.slice(1))
  await mkdir(directory, { recursive: true })
  await writeFile(resolve(directory, 'index.html'), html)
  console.log('Prerendered ' + path + '/ with ' + markup.length + ' characters of public HTML')
}
