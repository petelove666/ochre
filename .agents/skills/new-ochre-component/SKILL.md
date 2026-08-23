---
name: new-ochre-component
description: 'Scaffold a new Ochre UI component (Oc<Name>.tsx + .css + .stories.tsx). Use when asked to create, add, or scaffold a new component, or a new "Oc*" component, for the Ochre design system.'
---

# New Ochre Component

Scaffolds the standard three-file component folder used throughout `src/components/` and wires it into Storybook correctly.

## Before you start

1. Call `list-all-documentation` (Storybook MCP) to confirm a component with this purpose doesn't already exist — reuse/extend instead of duplicating.
2. Call `get-storybook-story-instructions` (Storybook MCP) to load the current story-writing conventions — treat it as the source of truth over this skill's stories template if they ever conflict.

## Procedure

1. Create a folder `src/components/<name>/` (lowercase, e.g. `src/components/toggle/`).
2. Create `Oc<Name>.tsx` — see [component template](./assets/OcComponent.tsx.template). Define a `Oc<Name>Props` interface and adjust it to fit the component's actual behavior; keep it a plain function component exporting both a named and default export.
3. Create `Oc<Name>.css` — see [css template](./assets/OcComponent.css.template). Only reference existing `--oc-*` tokens (see `src/theme/tokens/*.css` and [src/stories/Theming.mdx](/src/stories/Theming.mdx)) with a hard-coded fallback. Do not introduce a new token unless genuinely necessary; if you do, add it to `theme/tokens/global.css` or both `theme/tokens/light.css` and `theme/tokens/dark.css`.
4. Create `Oc<Name>.stories.tsx` — see [stories template](./assets/OcComponent.stories.tsx.template). Follow the loaded story instructions for coverage (states, interactions, a11y) rather than just the minimal template shape.
5. If the component needs to be used in the standalone app, import it in [src/App.tsx](/src/App.tsx).

## After scaffolding

1. Call `preview-stories` for the new stories and include every returned URL in your response.
2. Call `run-story-tests` for the new stories; fix any failures (including accessibility violations — confirm with the user first for visual/design changes) before finishing.
