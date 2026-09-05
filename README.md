# Emila Core

Private Emila.dev product and control plane.

This repository is **not** the reusable CMS. The standalone/open-source product lives in `silvandiepen/emila-cms`.

Emila Core owns:

- emila.dev marketing
- account/dashboard UI
- GitHub App integration
- Cloudflare OAuth integration
- schema/setup wizard
- project generation
- D1/R2/Worker provisioning
- Cloudflare Builds orchestration
- the single Emila MCP/ChatGPT gateway
- encrypted per-project agent credentials
- future billing/team/product infrastructure

It provisions and configures Emila CMS in the customer's own GitHub and Cloudflare accounts.

## Repository boundary

`emila-cms` must remain independently cloneable and deployable. Core may consume or copy its template, but CMS must never depend on this private repository.

The existing `packages/core` and `packages/client` directories are legacy bootstrap code and should be removed after the v3 control-plane migration. Their schema/client functionality now belongs to `emila-cms`.

See `MIGRATION_PLAN.md` for the one-time consolidation from `silvandiepen/emila:v3`.
