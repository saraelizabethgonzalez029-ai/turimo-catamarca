## Context

The Campo de Piedra Pómez page currently introduces the destination and offers visit recommendations. See `proposal.md` for the motivation and `specs/visitor-guide/spec.md` for the behavior contract.

## Goals / Non-Goals

**Goals:**
- Provide useful sample planning context in the existing destination page.
- Distinguish informative samples from booking or availability claims.
- Keep the page self-contained and responsive.

**Non-Goals:**
- Listing commercial providers, prices, contact details, or real-time capacity.
- Enabling reservations or payments.
- Adding maps, filters, or data integrations.

## Decisions

### Use clearly labeled sample information

The guide will group nearby places, local food, lodging, and tours into concise cards. A visible note will tell visitors to confirm services and schedules locally, avoiding misleading operational claims.

### Keep tour status informational

The tours area will state that guided tours may be available instead of reporting a fixed schedule or availability. A provider directory is deferred until verified information is available.

## Risks / Trade-offs

- [Sample content could be mistaken for confirmed service availability] -> Present an explicit orientative-information notice alongside the guide.
- [Visitors need provider details] -> Defer provider listings until the project can verify and maintain them.

## Migration Plan

Deploy the new guide section with the destination page. Rollback consists of removing the section because no persisted or external data changes.
