## Purpose

Provide a concise public catalog that helps visitors discover tourist places in Catamarca and understand their main characteristics at a glance.

## ADDED Requirements

### Requirement: Public tourism catalog
The system SHALL display a public catalog of tourist places in the province of Catamarca on the home page.

#### Scenario: Visitor opens the catalog
- **WHEN** a visitor opens the home page
- **THEN** the visitor sees a collection of tourist places in Catamarca

### Requirement: Place information
The system SHALL present each cataloged place with its name, locality, category, short description, and representative image.

#### Scenario: Visitor reviews a place
- **WHEN** a visitor views a place in the catalog
- **THEN** the visitor can identify its name, locality, category, description, and image

### Requirement: Responsive catalog access
The system SHALL keep the catalog content legible and accessible on mobile and desktop viewport sizes.

#### Scenario: Visitor uses a mobile device
- **WHEN** a visitor opens the catalog on a narrow viewport
- **THEN** the place information remains visible without requiring horizontal page scrolling
