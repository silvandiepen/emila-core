# AGENTS.md

`@emila/core` is deliberately small. It defines the schema DSL and the thin content client shared by Emila CMS and generated customer projects.

## Preserve these constraints

- No Cloudflare/D1/R2 code belongs here.
- No admin UI belongs here.
- No content persistence belongs here.
- The schema API must remain serializable/introspectable by `emila-cms`.
- Existing schema calls should remain backwards-compatible whenever possible.
- Localization and translation are schema metadata, not storage behavior in this package.
- The client should stay a thin HTTP client for the deep JSON content API.

## Main concepts

Field helpers currently include the primitives needed by the CMS such as strings, text, numbers, booleans, dates, files, selects, JSON and references. Groups are represented by schema hierarchy. Collections define repeatable child shapes.

`localized` controls whether a field has per-locale values. `translatable` controls whether the CMS may offer Workers AI translation for that field.

## Before pushing

```bash
pnpm install
pnpm typecheck
```

CI should stay green on `main`.
