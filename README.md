# Live Theme Editor

Live Theme Editor is a VSIX extension by **Fractal Mandala** for VS Code, Cursor, TRAE, and other VSIX-compatible IDEs. It provides a live visual editor for workbench colors, TextMate syntax colors, and semantic token colors.

Color changes are applied immediately through:

- `workbench.colorCustomizations`
- `editor.tokenColorCustomizations`
- `editor.semanticTokenColorCustomizations`

Repository: https://www.github.com/fractalmandala/ide-theme-editor

## Features

- Live color editing inside the IDE.
- Comprehensive VS Code workbench color coverage.
- TextMate syntax and semantic token editing.
- `Most Used` view for high-impact theme colors.
- Source grouping by Workbench, TextMate, and Semantic colors.
- Type grouping by backgrounds/foregrounds/borders, interface text, editor text, terminal colors, effects, and other colors.
- Starter templates from JetBrains, GitHub, Xcode, Ayu, Lynx, and Delirium themes.
- Undo support with `Cmd+Z` / `Ctrl+Z`.
- Save the current configuration as a standalone theme JSON.
- Reset managed keys or perform a confirmed `Complete Swipe` of all color customizations.

## Install

Install the packaged VSIX from:

```text
outputs/live-theme-editor-0.1.0.vsix
```

In VS Code-compatible IDEs:

1. Open the command palette.
2. Run `Extensions: Install from VSIX...`.
3. Select `outputs/live-theme-editor-0.1.0.vsix`.
4. Run `Live Theme Editor: Open`.

## Usage

1. Open `Live Theme Editor: Open` from the command palette.
2. Pick a starter template or start from the current IDE colors.
3. Use `View by Groups` or `View by Types` to navigate colors.
4. Change colors with the swatch or hex input.
5. Use `Save Named Theme JSON` to export a theme JSON file.
6. Use `Reset Managed Keys` to remove only keys managed by the editor.
7. Use `Complete Swipe` to clear all color customization settings after confirmation.

## Starter Templates

Bundled starter templates include:

- JetBrains Dark
- JetBrains Light
- JetBrains New Dark Plus
- JetBrains New Dark VS
- JetBrains New Dark Modern
- GitHub Dark Default
- GitHub Light Default
- Xcode Default Dark
- Xcode Default Light
- Ayu Dark
- Ayu Dark Unbordered
- Ayu Light
- Ayu Light Unbordered
- Ayu Mirage
- Ayu Mirage Unbordered
- Lynx Dark
- Lynx Light
- Delirium Everforest Dark
- Delirium Everforest Light
- Delirium JetBrains Dark
- Delirium JetBrains Light
- Delirium Pumpkin Dark
- Delirium Pumpkin Lotus Leaf
- Delirium Pumpkin

## Build

```bash
npm install
npm test
npm run package
```

The packaged VSIX is written to:

```text
outputs/live-theme-editor-0.1.0.vsix
```

See [DEVELOPER.md](./DEVELOPER.md) for detailed build, modification, and packaging documentation.
