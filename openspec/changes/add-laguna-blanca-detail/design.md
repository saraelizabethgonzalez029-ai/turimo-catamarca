## Context

Laguna Blanca already has a source photo and a summary in the catalog and overview pages. This change adds a dedicated public route; see `proposal.md` and `specs/laguna-blanca-detail/spec.md`.

## Goals / Non-Goals

**Goals:**
- Create a shareable detail route for Laguna Blanca.
- Reuse the verified image source with its attribution.
- Preserve the existing responsive visual language.

**Non-Goals:**
- Adding maps, reservations, provider data, or live travel conditions.
- Creating generic dynamic routes for every destination.
- Changing the home-page catalog.

## Decisions

### Use a dedicated static route

The page will be a static route for one destination, matching the existing Campo de Piedra Pómez detail-page pattern without premature content abstractions.

### Reuse the configured Wikimedia Commons photo

The page will use the existing Laguna Blanca external image URL and show its attribution and license, avoiding a new image host configuration.

## Risks / Trade-offs

- [Practical information becomes outdated] -> Keep recommendations general and avoid schedules or commercial claims.
- [Repeated page structure] -> Extract reusable components only when several individual pages share stable needs.

## Migration Plan

Deploy the new route independently. Rollback consists of removing the route because no persisted or external data changes.
