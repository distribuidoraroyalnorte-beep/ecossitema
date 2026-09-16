# Royal Norte — Site Institucional

V1 do site institucional da Royal Norte Distribuidora, desenvolvida em React + TypeScript + Vite.

## Objetivo

Manter a presença institucional pública da Royal Norte em uma aplicação moderna, responsiva e independente do Portal Royal Norte.

## Páginas

- `/` — Início
- `/empresa` — A Royal Norte
- `/atuacao` — Como atuamos
- `/marcas` — Marcas e segmentos
- `/cobertura` — Cobertura regional
- `/seja-cliente` — Captação de novos clientes
- `/parceiros` — Relacionamento com indústrias e parceiros
- `/contato` — Contatos e redes sociais
- `/privacidade` — Política de Privacidade

## Antes de publicar

Revise `src/data/site.ts` para dados permanentes e `src/data/content.ts` para textos das páginas:

1. Telefone oficial
2. WhatsApp comercial
3. E-mail institucional
4. Endereço oficial da sede
5. Lista definitiva de marcas representadas
6. Unidades / filiais ativas
7. Links de Instagram e LinkedIn

Os ativos oficiais devem ser adicionados em `src/assets` e referenciados em `src/data/brand.ts`.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Vite.

## Gerar versão de produção

```bash
npm run build
```

A pasta `dist/` será criada. Ela é o conteúdo que pode ser publicado em Locaweb, Hostinger, Netlify, Vercel, Cloudflare Pages ou outro provedor compatível com sites estáticos/SPAs.

## Observação sobre hospedagem

Como usa `BrowserRouter`, o provedor deve redirecionar rotas desconhecidas para `index.html`. Há exemplos no arquivo `DEPLOY.md`.

## Separação de aplicações

- `royalnorte.com.br` → site institucional
- `app.royalnorte.com.br` → Portal Royal Norte
- `api.royalnorte.com.br` → APIs do ecossistema

O Portal é acessado por um link externo e possui ciclo de desenvolvimento e publicação independente.
