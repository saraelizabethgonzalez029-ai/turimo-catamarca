## Why

The catalog introduces Campo de Piedra Pomez but only offers a brief summary, leaving visitors without the context needed to plan a visit. A focused detail page provides the first deeper destination experience while keeping the application simple.

## What Changes

- Add a public detail page for Campo de Piedra Pomez.
- Present an expanded description, location, practical visit recommendations, and a representative image.
- Add a clear way to return from the detail page to the main catalog.
- Make the Campo de Piedra Pomez card in the catalog open its detail page.

## Capabilities

### New Capabilities
- `tourism-place-detail`: Public destination detail pages, initially for Campo de Piedra Pomez.

### Modified Capabilities
- `tourism-catalog`: Allow visitors to open a detail page from the Campo de Piedra Pomez catalog entry.

## Impact

- Affected code: `app/page.tsx` and a new route under `app/` for the destination detail page.
- Uses existing local image assets and does not add APIs, persistence, or dependencies.
