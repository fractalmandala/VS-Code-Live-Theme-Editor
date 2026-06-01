const vscode = require('vscode');
const {
  COMPLETE_SWIPE_SETTING_KEYS,
  DEFAULT_SEMANTIC_TOKEN_COLORS,
  DEFAULT_TEXTMATE_TOKEN_COLORS,
  DEFAULT_TOKEN_COLORS,
  DEFAULT_WORKBENCH_COLORS,
  MOST_USED_COLOR_ITEMS,
  SEMANTIC_TOKEN_CATEGORIES,
  SEMANTIC_TOKEN_KEYS,
  TEXTMATE_TOKEN_CATEGORIES,
  TEXTMATE_TOKEN_KEYS,
  TYPE_COLOR_CATEGORIES,
  WORKBENCH_COLOR_CATEGORIES,
  WORKBENCH_COLOR_KEYS,
  buildStarterTemplateConfiguration,
  buildColorCustomizations,
  buildSemanticTokenColorCustomizations,
  buildTokenColorCustomizations,
  buildThemeDocument,
  buildThemeFilename,
  isHexColor
} = require('./themeModel');
const { STARTER_TEMPLATES } = require('./starterTemplates');

function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('liveThemeEditor.open', () => {
      ThemeEditorPanel.createOrShow(context.extensionUri);
    })
  );
}

function deactivate() {}

class ThemeEditorPanel {
  static currentPanel;

  static createOrShow(extensionUri) {
    const column = vscode.window.activeTextEditor
      ? vscode.window.activeTextEditor.viewColumn
      : undefined;

    if (ThemeEditorPanel.currentPanel) {
      ThemeEditorPanel.currentPanel.panel.reveal(column);
      ThemeEditorPanel.currentPanel.postState();
      return;
    }

    const panel = vscode.window.createWebviewPanel(
      'liveThemeEditor',
      'Live Theme Editor',
      column || vscode.ViewColumn.One,
      {
        enableScripts: true,
        retainContextWhenHidden: true
      }
    );

    ThemeEditorPanel.currentPanel = new ThemeEditorPanel(panel, extensionUri);
  }

  constructor(panel, extensionUri) {
    this.panel = panel;
    this.extensionUri = extensionUri;
    this.undoStack = [];
    this.activeColorEdits = new Set();
    this.messageQueue = Promise.resolve();

    this.panel.webview.html = getWebviewHtml(this.panel.webview, extensionUri);
    this.panel.onDidDispose(() => this.dispose(), null);

    this.panel.webview.onDidReceiveMessage((message) => {
      this.messageQueue = this.messageQueue
        .then(() => this.handleMessage(message))
        .catch((error) => {
          vscode.window.showErrorMessage(`Live Theme Editor: ${error.message}`);
        });
    });

    this.postState();
  }

  dispose() {
    ThemeEditorPanel.currentPanel = undefined;
  }

  async handleMessage(message) {
    if (!message || typeof message.type !== 'string') {
      return;
    }

    if (message.type === 'ready') {
      this.postState();
      return;
    }

    if (message.type === 'updateWorkbenchColor') {
      await this.updateWorkbenchColor(message.key, message.value);
      return;
    }

    if (message.type === 'updateTokenColor') {
      await this.updateTokenColor(message.key, message.value);
      return;
    }

    if (message.type === 'updateSemanticTokenColor') {
      await this.updateSemanticTokenColor(message.key, message.value);
      return;
    }

    if (message.type === 'beginColorEdit') {
      this.beginColorEdit(message.source, message.key);
      return;
    }

    if (message.type === 'commitColorEdit') {
      this.commitColorEdit(message.source, message.key);
      return;
    }

    if (message.type === 'undo') {
      await this.undoLastChange();
      return;
    }

    if (message.type === 'applyStarterTemplate') {
      await this.applyStarterTemplate(message.id);
      return;
    }

    if (message.type === 'resetManagedColors') {
      await this.resetManagedColors();
      return;
    }

    if (message.type === 'completeSwipe') {
      await this.completeSwipe();
      return;
    }

    if (message.type === 'saveTheme') {
      await this.saveTheme(message.name);
      return;
    }

    if (message.type === 'exportTheme') {
      await this.saveTheme(message.name);
    }
  }

  postState() {
    const config = vscode.workspace.getConfiguration();
    const colors = config.get('workbench.colorCustomizations') || {};
    const tokenColors = config.get('editor.tokenColorCustomizations') || {};
    const semanticTokenColors = config.get('editor.semanticTokenColorCustomizations') || {};

    this.panel.webview.postMessage({
      type: 'state',
      colors: { ...DEFAULT_WORKBENCH_COLORS, ...pick(colors, WORKBENCH_COLOR_KEYS) },
      textMateTokens: { ...DEFAULT_TEXTMATE_TOKEN_COLORS, ...pick(tokenColors, TEXTMATE_TOKEN_KEYS) },
      semanticTokens: {
        ...DEFAULT_SEMANTIC_TOKEN_COLORS,
        ...pick(semanticTokenColors.rules || {}, SEMANTIC_TOKEN_KEYS)
      },
      mostUsedItems: MOST_USED_COLOR_ITEMS,
      colorCategories: WORKBENCH_COLOR_CATEGORIES,
      textMateTokenCategories: TEXTMATE_TOKEN_CATEGORIES,
      semanticTokenCategories: SEMANTIC_TOKEN_CATEGORIES,
      typeColorCategories: TYPE_COLOR_CATEGORIES,
      starterTemplates: STARTER_TEMPLATES.map((template) => ({
        id: template.id,
        label: template.label,
        name: template.name,
        type: template.type,
        colorCount: Object.keys(template.colors || {}).length,
        tokenCount: Array.isArray(template.tokenColors) ? template.tokenColors.length : 0,
        semanticCount: Object.keys(template.semanticTokenColors || {}).length,
        preview: pickPreviewColors(template.colors || {})
      }))
    });
  }

  async updateWorkbenchColor(key, value) {
    if (!WORKBENCH_COLOR_KEYS.includes(key) || !isHexColor(value)) {
      return;
    }

    this.ensureUndoSnapshotForColorEdit('workbench', key);
    const config = vscode.workspace.getConfiguration();
    const current = config.get('workbench.colorCustomizations') || {};
    const next = buildColorCustomizations(current, { [key]: value });
    await config.update('workbench.colorCustomizations', next, vscode.ConfigurationTarget.Global);
  }

  async updateTokenColor(key, value) {
    if (!TEXTMATE_TOKEN_KEYS.includes(key) || !isHexColor(value)) {
      return;
    }

    this.ensureUndoSnapshotForColorEdit('textMate', key);
    const config = vscode.workspace.getConfiguration();
    const current = config.get('editor.tokenColorCustomizations') || {};
    const next = buildTokenColorCustomizations(current, { [key]: value });
    await config.update('editor.tokenColorCustomizations', next, vscode.ConfigurationTarget.Global);
  }

  async updateSemanticTokenColor(key, value) {
    if (!SEMANTIC_TOKEN_KEYS.includes(key) || !isHexColor(value)) {
      return;
    }

    this.ensureUndoSnapshotForColorEdit('semantic', key);
    const config = vscode.workspace.getConfiguration();
    const current = config.get('editor.semanticTokenColorCustomizations') || {};
    const next = buildSemanticTokenColorCustomizations(current, { [key]: value });
    await config.update('editor.semanticTokenColorCustomizations', next, vscode.ConfigurationTarget.Global);
  }

  async resetManagedColors() {
    this.pushUndoSnapshot();
    const config = vscode.workspace.getConfiguration();
    const currentColors = config.get('workbench.colorCustomizations') || {};
    const currentTokens = config.get('editor.tokenColorCustomizations') || {};
    const currentSemanticTokens = config.get('editor.semanticTokenColorCustomizations') || {};

    await config.update(
      'workbench.colorCustomizations',
      buildColorCustomizations(currentColors, {}, { resetManagedKeys: WORKBENCH_COLOR_KEYS }),
      vscode.ConfigurationTarget.Global
    );
    await config.update(
      'editor.tokenColorCustomizations',
      buildTokenColorCustomizations(currentTokens, {}, { resetManagedKeys: TEXTMATE_TOKEN_KEYS }),
      vscode.ConfigurationTarget.Global
    );
    await config.update(
      'editor.semanticTokenColorCustomizations',
      buildSemanticTokenColorCustomizations(currentSemanticTokens, {}, { resetManagedKeys: SEMANTIC_TOKEN_KEYS }),
      vscode.ConfigurationTarget.Global
    );
    this.postState();
  }

  async completeSwipe() {
    const choice = await vscode.window.showWarningMessage(
      'Complete Swipe removes all VS Code theme color customizations from your global settings.json. This clears workbench colors, TextMate token colors, and semantic token colors.',
      { modal: true },
      'Complete Swipe'
    );

    if (choice !== 'Complete Swipe') {
      return;
    }

    this.pushUndoSnapshot();
    const config = vscode.workspace.getConfiguration();
    for (const key of COMPLETE_SWIPE_SETTING_KEYS) {
      await config.update(key, undefined, vscode.ConfigurationTarget.Global);
    }
    vscode.window.showInformationMessage('Complete Swipe cleared all theme color customizations.');
    this.postState();
  }

  async applyStarterTemplate(id) {
    const template = STARTER_TEMPLATES.find((candidate) => candidate.id === id);
    if (!template) {
      return;
    }

    this.pushUndoSnapshot();
    const config = vscode.workspace.getConfiguration();
    const templateConfig = buildStarterTemplateConfiguration(template);

    await config.update(
      'workbench.colorCustomizations',
      templateConfig.workbenchColorCustomizations,
      vscode.ConfigurationTarget.Global
    );
    await config.update(
      'editor.tokenColorCustomizations',
      templateConfig.tokenColorCustomizations,
      vscode.ConfigurationTarget.Global
    );
    await config.update(
      'editor.semanticTokenColorCustomizations',
      templateConfig.semanticTokenColorCustomizations,
      vscode.ConfigurationTarget.Global
    );

    vscode.window.showInformationMessage(`Applied starter template "${template.label}".`);
    this.postState();
  }

  beginColorEdit(source, key) {
    if (!source || !key) {
      return;
    }

    this.ensureUndoSnapshotForColorEdit(source, key);
  }

  commitColorEdit(source, key) {
    this.activeColorEdits.delete(colorEditId(source, key));
  }

  ensureUndoSnapshotForColorEdit(source, key) {
    const id = colorEditId(source, key);
    if (this.activeColorEdits.has(id)) {
      return;
    }

    this.pushUndoSnapshot();
    this.activeColorEdits.add(id);
  }

  pushUndoSnapshot() {
    const snapshot = readThemeSettingsSnapshot();
    const previous = this.undoStack[this.undoStack.length - 1];
    if (previous && stableStringify(previous) === stableStringify(snapshot)) {
      return;
    }

    this.undoStack.push(snapshot);
    if (this.undoStack.length > 50) {
      this.undoStack.shift();
    }
  }

  async undoLastChange() {
    const snapshot = this.undoStack.pop();
    if (!snapshot) {
      vscode.window.showInformationMessage('Live Theme Editor: nothing to undo.');
      return;
    }

    this.activeColorEdits.clear();
    await applyThemeSettingsSnapshot(snapshot);
    this.postState();
  }

  async saveTheme(name) {
    const themeName = normalizeThemeName(name);
    const config = vscode.workspace.getConfiguration();
    const colors = config.get('workbench.colorCustomizations') || {};
    const tokens = config.get('editor.tokenColorCustomizations') || {};
    const semanticTokens = (config.get('editor.semanticTokenColorCustomizations') || {}).rules || {};
    const theme = buildThemeDocument(themeName, colors, tokens, semanticTokens);
    const baseUri = vscode.workspace.workspaceFolders?.[0]?.uri || vscode.Uri.file(require('os').homedir());
    const uri = await vscode.window.showSaveDialog({
      defaultUri: vscode.Uri.joinPath(baseUri, buildThemeFilename(themeName)),
      filters: { 'VS Code Color Theme': ['json'] }
    });

    if (!uri) {
      return;
    }

    await vscode.workspace.fs.writeFile(uri, Buffer.from(`${JSON.stringify(theme, null, 2)}\n`, 'utf8'));
    vscode.window.showInformationMessage(`Saved theme "${themeName}".`);
  }
}

function colorEditId(source, key) {
  return `${source}:${key}`;
}

function readThemeSettingsSnapshot() {
  const config = vscode.workspace.getConfiguration();
  return {
    workbenchColorCustomizations: clonePlainObject(config.get('workbench.colorCustomizations') || {}),
    tokenColorCustomizations: clonePlainObject(config.get('editor.tokenColorCustomizations') || {}),
    semanticTokenColorCustomizations: clonePlainObject(config.get('editor.semanticTokenColorCustomizations') || {})
  };
}

async function applyThemeSettingsSnapshot(snapshot) {
  const config = vscode.workspace.getConfiguration();
  await config.update(
    'workbench.colorCustomizations',
    snapshot.workbenchColorCustomizations,
    vscode.ConfigurationTarget.Global
  );
  await config.update(
    'editor.tokenColorCustomizations',
    snapshot.tokenColorCustomizations,
    vscode.ConfigurationTarget.Global
  );
  await config.update(
    'editor.semanticTokenColorCustomizations',
    snapshot.semanticTokenColorCustomizations,
    vscode.ConfigurationTarget.Global
  );
}

function clonePlainObject(value) {
  return JSON.parse(JSON.stringify(value || {}));
}

function stableStringify(value) {
  if (!value || typeof value !== 'object') {
    return JSON.stringify(value);
  }

  if (Array.isArray(value)) {
    return `[${value.map((item) => stableStringify(item)).join(',')}]`;
  }

  return `{${Object.keys(value)
    .sort()
    .map((key) => `${JSON.stringify(key)}:${stableStringify(value[key])}`)
    .join(',')}}`;
}

function normalizeThemeName(name) {
  const trimmed = String(name || '').trim();
  return trimmed || 'Live Theme Editor Export';
}

function pick(source, keys) {
  return keys.reduce((result, key) => {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      result[key] = source[key];
    }
    return result;
  }, {});
}

function pickPreviewColors(colors) {
  return {
    editor: colors['editor.background'] || colors['foreground'] || '#111318',
    sidebar: colors['sideBar.background'] || colors['activityBar.background'] || '#171a22',
    accent: colors['button.background'] || colors['activityBarBadge.background'] || '#3f6fa7',
    text: colors['editor.foreground'] || colors.foreground || '#d7dae0'
  };
}

function getWebviewHtml(webview, extensionUri) {
  const stylesUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'editor.css'));
  const scriptUri = webview.asWebviewUri(vscode.Uri.joinPath(extensionUri, 'media', 'editor.js'));
  const nonce = String(Date.now());

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src ${webview.cspSource}; script-src 'nonce-${nonce}';">
  <link href="${stylesUri}" rel="stylesheet">
  <title>Live Theme Editor</title>
</head>
<body>
  <main class="shell">
    <aside class="rail">
      <div class="brand">
        <h1>Live Theme Editor</h1>
        <p>Makes edits live, allows to save theme JSON. To clear data click "Complete Swipe" button. Created by <span class="brand-author">FractalMandala</span>.</p>
      </div>
      <div class="stats">
        <div class="stat"><strong>${WORKBENCH_COLOR_KEYS.length}</strong><span>workbench</span></div>
        <div class="stat"><strong>${TEXTMATE_TOKEN_KEYS.length}</strong><span>textmate</span></div>
        <div class="stat"><strong>${SEMANTIC_TOKEN_KEYS.length}</strong><span>semantic</span></div>
      </div>
      <div class="actions">
        <input id="themeName" type="text" value="My Live Theme" aria-label="Theme name">
        <button id="exportTheme" type="button">Save Named Theme JSON</button>
        <button id="resetTheme" type="button" class="secondary">Reset Managed Keys</button>
        <button id="completeSwipe" type="button" class="danger">Complete Swipe</button>
      </div>
      <div class="tools">
        <input id="filterInput" type="search" placeholder="Filter colors, borders, foregrounds...">
      </div>
      <section class="starter-section" aria-label="Starter templates">
        <div class="section-heading compact-heading">
          <h2>Starter Templates</h2>
          <p>Apply a complete theme config, then tweak it live.</p>
        </div>
        <div id="starterTemplates" class="starter-list"></div>
      </section>
    </aside>
    <section class="editor">
      <button id="viewModeToggle" class="view-mode-toggle" type="button">View by Types</button>
      <nav class="group-tabs" data-tab-set="groups" aria-label="Color groups">
        <button class="group-tab active" type="button" data-group-tab="mostUsed">Most Used</button>
        <button class="group-tab" type="button" data-group-tab="workbench">Workbench Colors</button>
        <button class="group-tab" type="button" data-group-tab="textMate">TextMate Syntax Colors</button>
        <button class="group-tab" type="button" data-group-tab="semantic">Semantic Token Colors</button>
      </nav>
      <nav class="group-tabs hidden" data-tab-set="types" aria-label="Color types">
        <button class="group-tab active" type="button" data-type-tab="structure">Backgrounds, Foregrounds and Borders</button>
        <button class="group-tab" type="button" data-type-tab="interfaceText">Interface Text Colors</button>
        <button class="group-tab" type="button" data-type-tab="editorText">Editor Text Colors</button>
        <button class="group-tab" type="button" data-type-tab="terminal">Terminal Colors</button>
        <button class="group-tab" type="button" data-type-tab="effects">Shadows, Shimmers, Hovers</button>
        <button class="group-tab" type="button" data-type-tab="other">Others</button>
      </nav>
      <section class="group-panel active" data-group-panel="mostUsed">
        <div id="mostUsedColors" class="category-list most-used-list compact"></div>
      </section>
      <section class="group-panel" data-group-panel="workbench">
        <div id="workbenchColors" class="category-list"></div>
      </section>
      <section class="group-panel" data-group-panel="textMate">
        <div id="textMateTokens" class="category-list compact"></div>
      </section>
      <section class="group-panel" data-group-panel="semantic">
        <div id="semanticTokens" class="category-list compact"></div>
      </section>
      <section class="group-panel" data-type-panel="structure">
        <div class="category-list" data-type-list="structure"></div>
      </section>
      <section class="group-panel" data-type-panel="interfaceText">
        <div class="category-list" data-type-list="interfaceText"></div>
      </section>
      <section class="group-panel" data-type-panel="editorText">
        <div class="category-list" data-type-list="editorText"></div>
      </section>
      <section class="group-panel" data-type-panel="terminal">
        <div class="category-list" data-type-list="terminal"></div>
      </section>
      <section class="group-panel" data-type-panel="effects">
        <div class="category-list" data-type-list="effects"></div>
      </section>
      <section class="group-panel" data-type-panel="other">
        <div class="category-list" data-type-list="other"></div>
      </section>
    </section>
  </main>
  <script nonce="${nonce}" src="${scriptUri}"></script>
</body>
</html>`;
}

module.exports = { activate, deactivate };
