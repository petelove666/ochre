# Ochre

Ochre is a React based UI library intended to demonstrate my approach to design systems.

The library is currently very small, with the focus is on setting the groundwork for theming, and documentation through Storybook.


Storybook: https://petelove.com/ochre/

## AI integrations

- **[AGENTS.md](AGENTS.md)** — instructions for AI coding agents working in this repo (component conventions, theming rules, build commands).

- **Storybook MCP server** — while `npm run storybook` is running, `@storybook/addon-mcp` exposes an MCP server at `http://localhost:6006/mcp`, letting AI agents query real component docs/props and run story tests instead of guessing.
Registered for VS Code in [.vscode/mcp.json](.vscode/mcp.json); other editors/tools need their own MCP client config pointing at the same URL.

- **[.agents/skills/new-ochre-component](.agents/skills/new-ochre-component/SKILL.md)** — an on-demand skill for scaffolding a new `Oc<Name>` component (`.jsx` + `.css` + `.stories.jsx`) following this repo's conventions.

