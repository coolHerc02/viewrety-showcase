# Roadmap

ViewRety is in active development. These milestones describe the current scope, not release dates or promises of production availability.

## Available in the private development application

- [x] PostgreSQL schema, Flyway migrations and read API contracts.
- [x] Isolated synthetic review demo with repositories, findings and filters.
- [x] Responsive Figma-led login and onboarding, with light and dark themes.
- [x] GitHub identity, personal workspace and repository installation selection.
- [x] Repository settings and signed webhook ingestion with duplicate handling.
- [x] Pull request snapshots and received review requests.

## Next: a complete local review journey

- [ ] Review the existing GitHub integration and address known issues.
- [ ] Add a transactional outbox, local queue and worker.
- [ ] Fetch the current pull request diff and enforce size limits.
- [ ] Run a deterministic analysis adapter before enabling a paid provider.
- [ ] Persist real job states and structured findings.
- [ ] Build the authenticated review dashboard and manual rerun flow.
- [ ] Exercise retries, crashes, cancellation, superseded changes and quotas.

## Then: quality and an invited alpha

- [ ] Evaluate an AI provider against known defects and clean changes.
- [ ] Publish GitHub Checks tied to the exact reviewed head SHA.
- [ ] Define policies, false-positive handling and audit events.
- [ ] Complete team invitations, memberships and role management.
- [ ] Invite a small group of developers and measure usefulness, latency and cost.

## Later: operations and deployment

- [ ] Choose hosting based on measured resource use and a sustainable budget.
- [ ] Add reproducible infrastructure and deployment configuration.
- [ ] Verify monitoring, backup/restore, migrations and rollback.
- [ ] Introduce staging and production when their requirements are met.

Automatic code changes, automatic merging, billing and integrations beyond GitHub are outside the initial version.

[Back to the project overview](../README.md)
