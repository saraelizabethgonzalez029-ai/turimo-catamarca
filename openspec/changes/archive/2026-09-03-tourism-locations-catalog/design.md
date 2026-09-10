## Context

The project is a new Next.js application whose home page still contains the starter template. See `proposal.md` for the motivation and `specs/tourism-catalog/spec.md` for the behavior contract.

## Goals / Non-Goals

**Goals:**
- Deliver a self-contained public catalog on the existing home page.
- Make the initial content easy to replace with an API or content source in a later iteration.
- Preserve a clear hierarchy from the tourism introduction to individual place cards.

**Non-Goals:**
- Creating routes for individual places.
- Adding search, filters, maps, favorites, or a management interface.
- Persisting catalog data in a database or external service.

## Decisions

### Keep the initial catalog data in the home-page module

The small curated data set will be represented locally alongside the catalog view, keeping the first release dependency-free and straightforward to evolve. A database or remote API is deferred because the catalog has no editing or dynamic-content requirement yet.

### Use responsive card-based presentation

Each place will be shown as a visual card with the required information, and the collection will adapt from a single-column layout on narrow screens to multiple columns on wider screens. This provides consistent scanning without introducing individual detail pages in the initial scope.

### Use local static image assets

Representative images will be stored in `public/` and rendered through the application image component. This avoids external image host configuration and ensures the sample catalog remains available without a network content dependency.

## Risks / Trade-offs

- [Curated local content becomes outdated] -> Keep the place data in one clearly identifiable collection so it can later move to a content source.
- [Static images increase repository size] -> Use a small number of appropriately sized, optimized image assets.
- [The catalog does not support content administration] -> Treat this as an explicit first-version boundary; a later change can introduce persistence and CRUD operations.

## Migration Plan

Deploy as a replacement for the default home-page content. Rollback consists of restoring the current home-page implementation because this change has no persisted data or external integrations.
