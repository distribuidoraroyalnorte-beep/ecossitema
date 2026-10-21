import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile, access } from 'node:fs/promises'
import { resolve } from 'node:path'

const cases = [
  [
    'agenda',
    ['Agenda Royal Norte Comercial', 'Página pública:', 'Sistema interno:', 'Google Calendar'],
  ],
  [
    'agenda/privacidade',
    [
      'Google Sheets',
      'Dados tratados',
      'Retenção e exclusão',
      'Uso Limitado das APIs Google',
      'comercial@royalnorte.com.br',
    ],
  ],
  [
    'agenda/termos',
    [
      'Credenciais e confidencialidade',
      'Informações e convidados',
      'Manutenção e disponibilidade',
      'Legislação e atualizações',
    ],
  ],
]
for (const [route, required] of cases) {
  test(route + ' has real, styled public content in initial HTML', async () => {
    const html = await readFile(resolve('dist', route, 'index.html'), 'utf8')
    const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0]
    assert.ok(main, 'semantic main content')
    for (const text of required) assert.ok(main.includes(text), 'missing public text: ' + text)
    assert.equal((html.match(/<h1\b/g) || []).length, 1)
    assert.match(html, /<header\b/)
    assert.match(html, /<footer\b/)
    assert.match(html, /data-prerendered="agenda"/)
    assert.ok(html.includes('href="https://royalnortedistribuidora.com.br/' + route + '/"'))
    assert.ok(main.includes('href="/agenda/privacidade/"'))
    assert.ok(main.includes('href="/agenda/termos/"'))
    assert.doesNotMatch(main, /<form\b|script\.google\.com|docs\.google\.com\/spreadsheets/i)
    for (const match of html.matchAll(/(?:src|href)="(\/assets\/[^"]+)"/g))
      await access(resolve('dist', decodeURIComponent(match[1].slice(1))))
  })
}
test('institutional entry remains the original React SPA and metadata', async () => {
  const html = await readFile('dist/index.html', 'utf8')
  assert.match(html, /<title>Royal Norte Distribuidora<\/title>/)
  assert.match(html, /<div id="root"><\/div>/)
  assert.doesNotMatch(html, /data-prerendered/)
})
