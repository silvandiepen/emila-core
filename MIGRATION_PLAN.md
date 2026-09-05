# Emila 3 repository consolidation

Target architecture:

- `emila-cms` is the open-source standalone CMS. It owns the schema DSL, content client, CMS admin, Cloudflare Worker runtime, D1/R2 integration, authentication, localization, Workers AI translation, files, collections and direct agent API.
- `emila-core` is the private Emila.dev product. It owns marketing, dashboard, onboarding, GitHub and Cloudflare connections, project generation/provisioning, the Emila MCP gateway and future billing.
- `emila` is legacy. The `v3` branch is a migration source only and must not receive new product work after consolidation.

## Migration procedure

1. Move the `emila:v3` control-plane/dashboard/marketing implementation into this repository.
2. Remove any duplicated CMS runtime/schema implementation from this repository and consume/template `silvandiepen/emila-cms` instead.
3. Change template bootstrap references from `silvandiepen/emila-cms` only where required for the consolidated layout. Do not fork CMS logic into core.
4. Move migrations `0030_emila_v3_control_plane.sql`, `0031_emila_v3_connections.sql`, and `0032_emila_v3_mcp.sql` into this repository's control-plane migrations.
5. Move `HANDOFF_V3.md` and the current v3 architecture documentation here and update all repository names.
6. Re-run typecheck, tests and production build.
7. Run the real-account E2E checklist.
8. Once verified, archive/freeze the old `emila:v3` branch.

`emila-cms` must remain independently cloneable/deployable and open source. `emila-core` must remain private.