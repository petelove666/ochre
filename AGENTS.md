# Agent instructions for Ochre

Ochre is a React + TypeScript UI component library (plain CSS custom properties for theming — see [src/stories/Theming.mdx](src/stories/Theming.mdx)).

## Use the Storybook MCP server

This repo has a Storybook MCP server configured at [.vscode/mcp.json](.vscode/mcp.json) (`ochre-storybook`, `http://localhost:6006/mcp`). It requires Storybook to be running (`npm run storybook`).

**Always prefer it over reading source or guessing** when working with UI components or stories:

- Call `list-all-documentation` to see every component and docs page that exists before creating a new one — don't duplicate an existing component.
- Call `get-documentation` for a component before using it, to see its real props, types, and example usage from its stories.
- **Never hallucinate a prop.** If a prop isn't shown in `get-documentation` or `get-documentation-for-story`, it does not exist — don't assume it based on naming conventions from other libraries.
- Use `get-storybook-story-instructions` before writing or editing any `*.stories.tsx` file.
- Use `preview-stories` after any change that affects how a component looks (component, story, CSS, theme tokens).
- Use `run-story-tests` after such changes to check for regressions and accessibility issues; fix failures before considering the work done.

## Project structure

- `src/components/<name>/Oc<Name>.tsx` + `.css` + `.stories.tsx` — one folder per component.
- `src/theme/` — design tokens and brand themes (see [Theming.mdx](src/stories/Theming.mdx) for the full architecture).
- Components must only read colors/spacing via `var(--oc-*)` tokens, never hard-coded values, so themes apply automatically.

## Commands

- `npm run storybook` — Storybook dev server (port 6006), required for the MCP server.
- `npm run build-storybook` — rebuilds `storybook-static/` (not `npm run build`, which builds the separate Vite app into `dist/`).
- `npm run dev` — the standalone Vite app (unrelated to Storybook).
