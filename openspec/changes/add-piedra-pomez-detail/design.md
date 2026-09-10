## Context

The application currently has a static home-page catalog and a local SVG illustration for Campo de Piedra Pomez. See `proposal.md` for the motivation and the delta specs for behavior requirements.

## Goals / Non-Goals

**Goals:**
- Add one clear, shareable route for the first destination detail experience.
- Reuse the existing visual language and image asset from the catalog.
- Keep content local and simple while providing useful visit context.

**Non-Goals:**
- Creating a generic dynamic route for every catalog entry.
- Adding maps, reservations, contact forms, or live travel information.
- Introducing an external content source or data model.

## Decisions

### Create a dedicated static route

The page will use a route dedicated to Campo de Piedra Pomez rather than a parameterized route. Only one destination requires a detail page now, and a dedicated route avoids prematurely building generic content infrastructure.

### Link from the existing highlighted card

The Campo de Piedra Pomez catalog entry will provide the navigation entry point. This keeps discovery in the catalog and ensures the new page does not become an isolated route.

### Use a sourced destination photograph

The Campo de Piedra Pomez hero will use a Wikimedia Commons photograph and display its attribution and license. This improves visual authenticity while keeping the image source explicit and restricted to the configured image URL.

## Risks / Trade-offs

- [Information becomes outdated] -> Keep practical copy concise and avoid time-sensitive claims.
- [Additional detail pages repeat structure] -> Generalize into reusable components only when a later change adds more destinations.
- [Users lack exact navigation data] -> Defer maps and transport directions to a future enhancement.
- [Remote photographs can be unavailable] -> Keep the allowed source URLs narrowly configured and retain the local illustrations as fallback assets for future use.

## Migration Plan

Deploy the new public route and catalog link together. Rollback consists of removing the route and restoring the catalog entry because no persisted data is changed.
