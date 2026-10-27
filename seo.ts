import type { Plugin } from 'vite'
import { landingContent } from './src/data/landingContent.ts'

const { brandName, parishName, nav, hero, groups, activities, contact } = landingContent
const title = `${brandName} · ${parishName}`

/** Pública del deploy: SITE_URL manda, luego el dominio de producción de Vercel. */
export function siteUrl(): string {
  const url =
    process.env.SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL && `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`) ??
    'https://pagina-aca.vercel.app'
  return url.replace(/\/$/, '')
}

function llmsTxt(site: string) {
  return `# ${title}

> ${hero.subtitle}

${contact.info.address}. WhatsApp ${contact.info.whatsapp}, teléfono ${contact.info.phone}, ${contact.info.email}.

## Páginas

${nav.map((n) => `- [${n.label}](${site}${n.to}): ${n.hint}`).join('\n')}

## Grupos

${groups.items.map((g) => `- ${g.name}: ${g.description}`).join('\n')}

## Actividades

${activities.list.map((a) => `- ${a}`).join('\n')}
`
}

const robotsTxt = (site: string) => `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`

const sitemapXml = (site: string) =>
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${nav
    .map((n) => `  <url><loc>${site}${n.to}</loc></url>`)
    .join('\n')}\n</urlset>\n`

function jsonLd(site: string) {
  const { info } = contact
  const [streetAddress, , addressLocality, addressRegion] = info.address.split(', ')
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: `${brandName} · ${info.parishName}`,
    description: hero.subtitle,
    url: `${site}/`,
    image: `${site}/og.png`,
    telephone: info.phoneLink,
    email: info.email,
    address: { '@type': 'PostalAddress', streetAddress, addressLocality, addressRegion, addressCountry: 'AR' },
    hasMap: info.mapsUrl,
    sameAs: [info.facebook, info.youtube, info.instagram],
  }
  // '<' escapado para que el JSON no pueda cerrar el <script>.
  return `<script type="application/ld+json">${JSON.stringify(data).replaceAll('<', '\\u003c')}</script>`
}

export function seo(): Plugin {
  const site = siteUrl()
  const files: Record<string, string> = {
    'robots.txt': robotsTxt(site),
    'sitemap.xml': sitemapXml(site),
    'llms.txt': llmsTxt(site),
  }
  return {
    name: 'seo',
    transformIndexHtml: (html) => html.replaceAll('%SITE_URL%', site).replace('</head>', `${jsonLd(site)}</head>`),
    // En dev el fallback SPA respondería index.html para estas rutas.
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const name = req.url?.split('?')[0].slice(1) ?? ''
        if (!(name in files)) return next()
        res.setHeader('Content-Type', name.endsWith('.xml') ? 'application/xml' : 'text/plain; charset=utf-8')
        res.end(files[name])
      })
    },
    generateBundle() {
      for (const [fileName, source] of Object.entries(files)) this.emitFile({ type: 'asset', fileName, source })
    },
  }
}
