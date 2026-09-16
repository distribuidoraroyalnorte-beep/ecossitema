# Guia de publicação

## 1. Build

```bash
npm install
npm run build
```

Publique o conteúdo gerado em `dist/`.

## 2. Opções de hospedagem

### Hospedagem tradicional (Locaweb, Hostinger etc.)

Envie o conteúdo de `dist/` para a pasta pública (`public_html`, `www` ou equivalente).

Como este site usa rotas SPA, em servidor Apache crie `.htaccess` na pasta pública:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>
```

### Vercel / Netlify / Cloudflare Pages

- Framework: Vite
- Build command: `npm run build`
- Output: `dist`

## 3. DNS

Depois de escolher a hospedagem:

- apontar `royalnortedistribuidora.com.br` e `www.royalnortedistribuidora.com.br` para o provedor;
- ativar SSL/HTTPS;
- manter `app.royalnorte.com.br` apontando exclusivamente para o Portal Royal Norte.

## 4. Checklist de go-live

- [ ] Logo oficial
- [ ] Telefone / WhatsApp comercial
- [ ] E-mail institucional
- [ ] Endereço correto
- [ ] Marcas validadas
- [ ] Texto aprovado pela diretoria/comercial
- [ ] Política de privacidade (se houver captura persistente de dados)
- [ ] Formulário conectado ao canal oficial
- [ ] Google Analytics / Search Console, se desejado
- [ ] Favicon / Open Graph conferidos
- [ ] DNS e HTTPS testados
- [ ] Mobile testado
