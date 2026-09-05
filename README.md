# Emila Core

Reusable code-first primitives for Emila.

## Schema DSL

```ts
import { defineCMS, string, text, file, boolean, collection } from '@emila/core'

export default defineCMS({
  locales: {
    default: 'en',
    supported: ['en', 'nl', 'mt'],
    autoTranslate: true,
  },
  schema: {
    website: {
      kind: 'group',
      children: {
        title: string({ localized: true, translatable: true }),
        projects: collection({
          title: string({ localized: true, translatable: true }),
          description: text({ localized: true, translatable: true }),
          image: file(),
          featured: boolean(),
        }),
      },
    },
  },
})
```

Schema structure stays in Git. Content values stay in the CMS database.

## Client

```ts
import { createEmilaClient } from '@emila/core/client'

const cms = createEmilaClient({
  baseUrl: 'https://cms.example.com',
  locale: 'en',
})

const homepage = await cms.get('website/homepage')
```

The client is deliberately thin. It talks to the deep JSON API exposed by Emila CMS.

## Repositories

- `emila-core`: schema DSL and reusable client
- `emila-cms`: Vue admin, Cloudflare Worker, D1, R2, auth and Workers AI translation
