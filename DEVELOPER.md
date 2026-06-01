# Developer Guide

This document explains how to build, modify, test, and package Live Theme Editor.

## Project Layout

```text
.
├── src/
│   ├── extension.js          # VS Code extension entrypoint and webview host
│   ├── themeModel.js         # color models, grouping, export builders
│   ├── colorRegistry.js      # generated workbench color registry
│   └── starterTemplates.js   # generated starter template bundle
├── media/
│   ├── editor.js             # webview client logic
│   └── editor.css            # webview styles
├── scripts/
│   ├── generate-color-registry.js
│   ├── import-starter-templates.js
│   └── write-companion-preview.js
├── themes/
│   └── live-theme-editor-base-color-theme.json
├── test/
│   └── themeModel.test.js
├── outputs/
│   └── live-theme-editor-0.1.0.vsix
├── package.json
├── package-lock.json
├── README.md
└── DEVELOPER.md
```

## Requirements

- Node.js compatible with the current `package-lock.json`.
- npm.
- A VS Code-compatible IDE for manual extension testing.

Install dependencies:

```bash
npm install
```

## Core Commands

Run tests:

```bash
npm test
```

Package the VSIX:

```bash
npm run package
```

Regenerate starter templates from local theme JSON files:

```bash
npm run import:templates
```

Regenerate the visual companion preview:

```bash
npm run companion
```

## Packaging

The package script writes the final VSIX to:

```text
outputs/live-theme-editor-0.1.0.vsix
```

The VSIX contents are controlled by `.vscodeignore`. Keep source files, media files, package metadata, the base theme, README, changelog, and license included. Keep development-only folders such as `node_modules`, `.superpowers`, and generated preview files excluded from published packages.

Before packaging:

```bash
npm test
node --check src/themeModel.js
node --check src/extension.js
node --check media/editor.js
node --check scripts/write-companion-preview.js
npm run package
```

## Extension Architecture

### `src/extension.js`

This is the VS Code extension host entrypoint.

Responsibilities:

- Registers `Live Theme Editor: Open`.
- Creates the webview panel.
- Sends current theme state to the webview.
- Receives edit messages from the webview.
- Writes live updates to VS Code-compatible settings.
- Maintains undo snapshots.
- Applies starter templates.
- Saves standalone theme JSON files.
- Handles reset and `Complete Swipe` actions.

Important settings written by the extension:

- `workbench.colorCustomizations`
- `editor.tokenColorCustomizations`
- `editor.semanticTokenColorCustomizations`

### `media/editor.js`

This is the browser-side webview controller.

Responsibilities:

- Renders the color UI.
- Handles group/type tab switching.
- Handles color swatch and hex input edits.
- Performs optimistic local preview updates.
- Sends changes to the extension host.
- Handles `Cmd+Z` / `Ctrl+Z` undo messages.

Use this file when changing interaction behavior.

### `media/editor.css`

This controls the webview visual design.

Important sections:

- Sidebar and starter template layout.
- Group/type tab appearance.
- Category grid layout.
- Color card layout.
- Responsive behavior.

Use this file for visual changes unless the DOM structure itself needs to change.

### `src/themeModel.js`

This contains the core data model.

Responsibilities:

- Default colors.
- TextMate token groups.
- Semantic token groups.
- `Most Used` color list.
- Type grouping classifier.
- Theme document builders.
- Reset/merge helpers.
- Filename normalization.

Use this file when adding new color groups, changing classification rules, or changing saved theme JSON behavior.

### `src/colorRegistry.js`

Generated comprehensive workbench color registry. Do not hand-edit unless absolutely necessary. Prefer regenerating through `scripts/generate-color-registry.js`.

### `src/starterTemplates.js`

Generated starter template bundle. Do not hand-edit. Regenerate it with:

```bash
npm run import:templates
```

## Adding Starter Templates

1. Add a source entry to `templateSources` in `scripts/import-starter-templates.js`.
2. Give it a stable `id`.
3. Give it a user-facing `label`.
4. Point `source` to the JSON theme file.
5. Run:

```bash
npm run import:templates
npm test
```

The importer supports theme JSON files that use an `include` field. Included colors, token colors, and semantic token colors are merged before generating `src/starterTemplates.js`.

After adding templates, update:

- `test/themeModel.test.js`
- `README.md`
- `CHANGELOG.md`

## Changing Color Grouping

### Source Groups

Source groups are the primary top-level groups:

- Most Used
- Workbench Colors
- TextMate Syntax Colors
- Semantic Token Colors

These are rendered in `media/editor.js` and supplied from `src/extension.js`.

### Type Groups

Type groups are built in `src/themeModel.js` through `TYPE_COLOR_CATEGORIES`.

Current type groups:

- Backgrounds, Foregrounds and Borders
- Interface Text Colors
- Editor Text Colors
- Terminal Colors
- Shadows, Shimmers, Hovers
- Others

When changing classification rules, update the tests in `test/themeModel.test.js` first.

## Editing the Webview UI

The webview HTML shell is generated in `getWebviewHtml()` inside `src/extension.js`.

Use `media/editor.js` for dynamic rendering and event handling.

Use `media/editor.css` for visual styling.

If you change the visual companion, update `scripts/write-companion-preview.js` as well. The companion is not part of the extension runtime; it is a local preview page used during design work.

## Live Editing Behavior

Color changes are optimistic:

1. The webview immediately updates local state and preview CSS.
2. The webview posts a message to the extension host.
3. The extension host writes the corresponding VS Code setting.

Undo snapshots are stored in `src/extension.js`. A color drag creates one undo snapshot for the edit gesture, rather than one snapshot per input event.

## Complete Swipe

`Complete Swipe` clears these global settings after modal confirmation:

- `workbench.colorCustomizations`
- `editor.tokenColorCustomizations`
- `editor.semanticTokenColorCustomizations`

The list lives in `COMPLETE_SWIPE_SETTING_KEYS` in `src/themeModel.js`.

## Saving Theme JSON

`Save Named Theme JSON` builds a standalone color theme document using `buildThemeDocument()` in `src/themeModel.js`.

The saved theme includes:

- Current workbench color customizations.
- Existing custom TextMate rules.
- Generated TextMate rules for the editor-managed token groups.
- Semantic token colors.

## Manual Testing

After installing the VSIX:

1. Run `Live Theme Editor: Open`.
2. Apply a starter template.
3. Change a workbench background color.
4. Change a TextMate syntax color.
5. Change a semantic token color.
6. Use `Cmd+Z` / `Ctrl+Z` to undo.
7. Switch between `View by Groups` and `View by Types`.
8. Confirm `Complete Swipe` prompts before clearing settings.
9. Save a named theme JSON and inspect the output.

## Separate Window Limitation

VS Code-compatible webviews open as editor tabs or editor columns. The extension can target a column, but the extension API does not provide a stable cross-IDE way to force a detached OS-level window.

Recommended workflow:

- Open Live Theme Editor beside the current editor.
- Split the editor area.
- Move or drag the webview tab manually if the host IDE supports it.

## Release Checklist

Before publishing:

1. Update `version` in `package.json`.
2. Update `CHANGELOG.md`.
3. Run `npm install`.
4. Run `npm test`.
5. Run syntax checks:

```bash
node --check src/themeModel.js
node --check src/extension.js
node --check media/editor.js
node --check scripts/write-companion-preview.js
```

6. Run `npm run package`.
7. Install the generated VSIX in a clean VS Code-compatible IDE.
8. Smoke test live edits, undo, starter templates, save JSON, reset, and complete swipe.

## Repository Hygiene

Do not commit:

- `node_modules/`
- `.DS_Store`
- `.superpowers/`
- Local screenshots
- Temporary preview output

Keep `outputs/` only if you intentionally want to attach built VSIX artifacts to the repo. Otherwise publish VSIX files through releases or marketplace upload flows.
