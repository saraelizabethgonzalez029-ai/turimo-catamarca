## Context

The home-page catalog already contains summary cards and images for the three destinations. This change adds a shared public route for expanded content; see `proposal.md` and `specs/destination-overview/spec.md`.

## Goals / Non-Goals

**Goals:**
- Create one shareable overview route for the three requested destinations.
- Reuse the established visual language, image sources, and responsive card presentation.
- Keep each destination's information easy to compare.

**Non-Goals:**
- Adding individual routes for each of the three destinations.
- Adding bookings, maps, live travel information, or new external dependencies.
- Replacing the main catalog.

## Decisions

### Use a dedicated static overview route

The page will be a static route with three expanded destination sections. This matches the requested single-screen scope and avoids building dynamic routing or content infrastructure prematurely.

### Reuse existing image sources with attribution

Laguna Blanca and Cuesta del Portezuelo will reuse their configured Wikimedia Commons photos and credits. El Rodadero will retain its existing local illustration because no verified real photo is currently configured.

## Risks / Trade-offs

- [Repeated content diverges from catalog summaries] -> Keep the overview descriptions concise and focused on distinct destination context.
- [El Rodadero has no configured photo] -> Preserve the current labeled illustration until a verified image source is available.

## Migration Plan

Deploy the new route independently. Rollback consists of removing the route because no persisted data or external integrations change.
