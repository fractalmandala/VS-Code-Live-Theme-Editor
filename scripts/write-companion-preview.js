const fs = require('node:fs');
const path = require('node:path');
const { WORKBENCH_COLOR_CATEGORIES } = require('../src/colorRegistry');
const {
  MOST_USED_COLOR_ITEMS,
  TYPE_COLOR_CATEGORIES,
  TEXTMATE_TOKEN_CATEGORIES,
  SEMANTIC_TOKEN_CATEGORIES,
  DEFAULT_WORKBENCH_COLORS,
  DEFAULT_TEXTMATE_TOKEN_COLORS,
  DEFAULT_SEMANTIC_TOKEN_COLORS
} = require('../src/themeModel');
const { STARTER_TEMPLATES } = require('../src/starterTemplates');

const outputDir = process.argv[2];

if (!outputDir) {
  console.error('Usage: node scripts/write-companion-preview.js <output-dir>');
  process.exit(1);
}

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Live Theme Editor Comprehensive Preview</title>
  <style>
    :root { color-scheme: dark; --main-bg: #121212; --sidebar-bg: #111111; --border: #2A2A2A; --text-main: #DBDBDB; --button-text: #FFFFFF; --box-bg: #0F100F; --button-bg: #095839; --button-secondary: #323232; }
    * { box-sizing: border-box; }
    body { margin: 0; background: var(--main-bg); color: var(--text-main); font-family: 'Google Sans', 'Product Sans', Arial, sans-serif; }
    .page { display: grid; grid-template-columns: 340px minmax(0, 1fr); min-height: 100vh; }
    aside { position: sticky; top: 0; height: 100vh; overflow: auto; padding: 38px; background: var(--sidebar-bg); border-right: 1px solid var(--border); scrollbar-color: var(--button-bg) transparent; scrollbar-width: thin; }
    aside::-webkit-scrollbar { width: 4px; }
    aside::-webkit-scrollbar-track { background: transparent; }
    aside::-webkit-scrollbar-thumb { background: var(--button-bg); }
    main { padding: 38px 36px 80px 42px; min-width: 0; background: var(--main-bg); }
    h1, h2, h3, p { margin: 0; }
    h1 { font-size: 20px; line-height: 1.25; }
    p { color: var(--text-main); font-size: 12px; line-height: 1.45; opacity: .82; }
    .brand-author { color: #04B25B; }
    .stack { display: grid; gap: 16px; margin-top: 16px; }
    input, button { font: inherit; }
    input[type="search"], input[type="text"] { width: 100%; min-height: 35px; padding: 8px 10px; border: 1px solid var(--border); border-radius: 0; color: var(--text-main); background: var(--box-bg); font-size: 12px; }
    button { min-height: 38px; border: 1px solid var(--border); border-radius: 0; color: var(--button-text); background: var(--button-bg); cursor: pointer; font-size: 12px; }
    button.secondary { background: var(--button-secondary); }
    button.danger { background: #c75c5c; }
    .stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 13px; margin: 66px 0 16px; }
    .stat { min-height: 54px; padding: 11px 16px; border: 1px solid var(--border); background: var(--box-bg); }
    .stat b { display: block; font-size: 15px; font-weight: 400; }
    .stat small { font-size: 10px; opacity: .72; }
    .starter-list { display: grid; gap: 12px; margin-top: 70px; }
    #starterTemplates { display: grid; gap: 12px; }
    .starter-label { margin-bottom: 14px; font-size: 12px; font-weight: 700; }
    .starter-card { display: grid; grid-template-columns: 40px 1fr; gap: 4px 10px; min-height: 64px; padding: 14px; border: 1px solid var(--border); color: var(--text-main); background: var(--box-bg); text-align: left; }
    .starter-card small { grid-column: 2; color: var(--text-main); opacity: .75; font-size: 10px; }
    .starter-card strong { font-size: 15px; font-weight: 400; }
    .starter-swatches { grid-row: span 2; display: grid; grid-template-columns: repeat(2, 13px); align-content: center; gap: 3px; }
    .starter-swatches i { display: block; width: 13px; height: 13px; border: 1px solid var(--border); }
    .view-toggle { min-height: auto; margin-bottom: 12px; padding: 0; border: 0; background: transparent; color: #FFFFFF; text-align: left; text-transform: uppercase; font-size: 12px; font-weight: 700; }
    .tabs { display: flex; flex-wrap: nowrap; gap: 16px; margin-bottom: 36px; overflow-x: auto; }
    .tab { flex: 0 0 auto; width: auto; min-width: max-content; min-height: 56px; padding: 0 18px; border: 0; background: var(--button-secondary); color: var(--text-main); font-size: 14px; font-weight: 400; text-align: center; white-space: nowrap; }
    .tab:hover, .tab.active { background: var(--button-bg); color: #FFFFFF; }
    .hidden { display: none !important; }
    .sections { display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 20px 26px; margin-top: 22px; align-items: start; }
    .sections.most-used { grid-template-columns: repeat(4, minmax(0, 1fr)); }
    details { border: 1px solid var(--border); overflow: hidden; background: var(--box-bg); }
    details[open] { grid-column: 1 / -1; }
    summary { display: flex; justify-content: space-between; align-items: center; gap: 12px; min-height: 40px; padding: 6px 12px; cursor: pointer; background: var(--box-bg); font-size: 15px; font-weight: 700; }
    summary strong { min-width: 0; overflow: visible; text-overflow: clip; white-space: normal; line-height: 1.25; }
    summary small { font-size: 12px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 14px; padding: 26px 36px 58px; border-top: 1px solid var(--border); }
    label.color { display: grid; grid-template-columns: 1fr; row-gap: 5px; align-items: stretch; min-height: 0; padding: 22px; border: 1px solid var(--border); background: var(--box-bg); }
    input[type="color"] { width: 100%; height: 42px; padding: 0; border: 0; background: transparent; }
    label.color input[type="text"] { min-height: 48px; margin-top: 5px; padding: 4px 8px; text-align: center; text-transform: uppercase; font-size: 14px; }
    .meta { display: grid; row-gap: 5px; min-width: 0; }
    .meta b, .meta small, .meta em { display: block; overflow: visible; text-overflow: clip; overflow-wrap: anywhere; }
    .meta b, .meta small { white-space: normal; }
    .meta b { font-size: 15px; font-weight: 400; line-height: 1.5; }
    .meta small, .meta em { color: var(--text-main); opacity: .7; font-size: 10px; line-height: 1.25; }
    .meta em { font-style: normal; display: block; }
  </style>
</head>
<body>
  <div class="page">
    <aside>
      <h1>Live Theme Editor</h1>
      <p style="margin-top:4px">Makes edits live, allows to save theme JSON. To clear data click "Complete Swipe" button. Created by <span class="brand-author">FractalMandala</span>.</p>
      <div class="stats">
        <div class="stat"><b>${countWorkbench()}</b><small>Workbench</small></div>
        <div class="stat"><b>${countTextMate()}</b><small>TextMate</small></div>
        <div class="stat"><b>${countSemantic()}</b><small>Semantic</small></div>
      </div>
      <div class="stack">
        <input id="themeName" type="text" value="My Live Theme" aria-label="Theme name">
        <input id="filter" type="search" placeholder="Filter sidebar, terminal, ignored, border...">
        <button id="download">Download Named Theme JSON</button>
        <button id="reset" class="secondary">Reset Preview Values</button>
        <button id="completeSwipe" class="danger">Complete Swipe</button>
      </div>
      <div class="starter-list">
        <div class="starter-label">Templates:</div>
        <div id="starterTemplates"></div>
      </div>
    </aside>
    <main>
      <button id="viewToggle" class="view-toggle">View by Types</button>
      <nav class="tabs" data-tab-set="groups" aria-label="Color groups">
        <button class="tab active" data-group-tab="mostUsed">Most Used</button>
        <button class="tab" data-group-tab="workbench">Workbench Colors</button>
        <button class="tab" data-group-tab="textMate">TextMate Syntax Colors</button>
        <button class="tab" data-group-tab="semantic">Semantic Token Colors</button>
      </nav>
      <nav class="tabs hidden" data-tab-set="types" aria-label="Color types">
        <button class="tab active" data-type-tab="structure">Backgrounds, Foregrounds and Borders</button>
        <button class="tab" data-type-tab="interfaceText">Interface Text Colors</button>
        <button class="tab" data-type-tab="editorText">Editor Text Colors</button>
        <button class="tab" data-type-tab="terminal">Terminal Colors</button>
        <button class="tab" data-type-tab="effects">Shadows, Shimmers, Hovers</button>
        <button class="tab" data-type-tab="other">Others</button>
      </nav>
      <div id="sections" class="sections"></div>
    </main>
  </div>
  <script>
    const workbenchCategories = ${JSON.stringify(WORKBENCH_COLOR_CATEGORIES)};
    const textMateCategories = ${JSON.stringify(TEXTMATE_TOKEN_CATEGORIES)};
    const semanticCategories = ${JSON.stringify(SEMANTIC_TOKEN_CATEGORIES)};
    const mostUsedItems = ${JSON.stringify(MOST_USED_COLOR_ITEMS)};
    const typeCategories = ${JSON.stringify(TYPE_COLOR_CATEGORIES)};
    const starterTemplates = ${JSON.stringify(STARTER_TEMPLATES.map(toCompanionTemplate))};
    const defaults = {
      workbench: ${JSON.stringify(DEFAULT_WORKBENCH_COLORS)},
      textMate: ${JSON.stringify(DEFAULT_TEXTMATE_TOKEN_COLORS)},
      semantic: ${JSON.stringify(DEFAULT_SEMANTIC_TOKEN_COLORS)}
    };
    const state = {
      workbench: { ...defaults.workbench },
      textMate: { ...defaults.textMate },
      semantic: { ...defaults.semantic }
    };
    const undoStack = [];
    const activeEdits = new Set();
    const sections = document.getElementById('sections');
    const filter = document.getElementById('filter');
    const root = document.documentElement;
    let viewMode = 'groups';
    let activeGroup = 'mostUsed';
    let activeType = 'structure';
    filter.addEventListener('input', render);
    for (const tab of document.querySelectorAll('[data-group-tab]')) {
      tab.addEventListener('click', () => {
        activeGroup = tab.dataset.groupTab;
        render();
      });
    }
    for (const tab of document.querySelectorAll('[data-type-tab]')) {
      tab.addEventListener('click', () => {
        activeType = tab.dataset.typeTab;
        render();
      });
    }
    document.getElementById('viewToggle').addEventListener('click', () => {
      viewMode = viewMode === 'groups' ? 'types' : 'groups';
      render();
    });
    document.addEventListener('keydown', (event) => {
      if ((event.metaKey || event.ctrlKey) && !event.shiftKey && event.key.toLowerCase() === 'z') {
        event.preventDefault();
        undoLastChange();
      }
    });
    document.getElementById('reset').addEventListener('click', () => {
      pushUndoSnapshot();
      state.workbench = { ...defaults.workbench };
      state.textMate = { ...defaults.textMate };
      state.semantic = { ...defaults.semantic };
      render();
      updatePreview();
    });
    document.getElementById('completeSwipe').addEventListener('click', () => {
      if (!window.confirm('Complete Swipe removes all VS Code theme color customizations from settings.json. Are you sure?')) return;
      pushUndoSnapshot();
      state.workbench = {};
      state.textMate = {};
      state.semantic = {};
      render();
      updatePreview();
    });
    document.getElementById('download').addEventListener('click', () => {
      const name = document.getElementById('themeName').value.trim() || 'My Live Theme';
      const theme = {
        name,
        type: 'dark',
        semanticHighlighting: true,
        colors: state.workbench,
        tokenColors: [],
        semanticTokenColors: state.semantic
      };
      const blob = new Blob([JSON.stringify(theme, null, 2) + '\\n'], { type: 'application/json' });
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = (name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'theme') + '-color-theme.json';
      a.click();
      URL.revokeObjectURL(a.href);
    });
    renderStarterTemplates();
    render();
    updatePreview();
    function renderStarterTemplates() {
      const container = document.getElementById('starterTemplates');
      for (const template of starterTemplates) {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'starter-card';
        button.innerHTML = '<span class="starter-swatches">' +
          '<i style="background:' + escapeHtml(template.preview.editor) + '"></i>' +
          '<i style="background:' + escapeHtml(template.preview.sidebar) + '"></i>' +
          '<i style="background:' + escapeHtml(template.preview.accent) + '"></i>' +
          '<i style="background:' + escapeHtml(template.preview.text) + '"></i>' +
          '</span><strong>' + escapeHtml(template.label) + '</strong><small>' +
          escapeHtml(template.type + ' · ' + template.colorCount + ' colors · ' + template.tokenCount + ' token rules') +
          '</small>';
        button.addEventListener('click', () => {
          pushUndoSnapshot();
          state.workbench = { ...template.colors };
          state.textMate = { ...defaults.textMate };
          state.semantic = { ...template.semanticTokenColors };
          document.getElementById('themeName').value = template.label + ' Custom';
          render();
          updatePreview();
        });
        container.append(button);
      }
    }
    function render() {
      const q = filter.value.trim().toLowerCase();
      sections.replaceChildren();
      sections.classList.toggle('most-used', viewMode === 'groups' && activeGroup === 'mostUsed');
      document.getElementById('viewToggle').textContent = viewMode === 'groups' ? 'View by Types' : 'View by Groups';
      document.querySelector('[data-tab-set="groups"]').classList.toggle('hidden', viewMode !== 'groups');
      document.querySelector('[data-tab-set="types"]').classList.toggle('hidden', viewMode !== 'types');
      for (const tab of document.querySelectorAll('[data-group-tab]')) {
        tab.classList.toggle('active', tab.dataset.groupTab === activeGroup);
      }
      for (const tab of document.querySelectorAll('[data-type-tab]')) {
        tab.classList.toggle('active', tab.dataset.typeTab === activeType);
      }
      let openedFilteredSection = false;
      if (viewMode === 'types') {
        renderType(activeType, q);
      } else if (activeGroup === 'mostUsed') {
        renderMostUsed(q, openedFilteredSection);
      } else if (activeGroup === 'workbench') {
        renderGroup(workbenchCategories, state.workbench, 'workbench', q, openedFilteredSection);
      } else if (activeGroup === 'textMate') {
        renderGroup(textMateCategories, state.textMate, 'textMate', q, openedFilteredSection);
      } else {
        renderGroup(semanticCategories, state.semantic, 'semantic', q, openedFilteredSection);
      }
    }
    function renderMostUsed(q, openedFilteredSection) {
      const items = mostUsedItems.filter((item) => matches({ name: 'Most Used' }, item, q));
      if (!items.length) return openedFilteredSection;
      for (const item of items) sections.append(row(item, valuesForSource(item.source), item.source));
      return openedFilteredSection;
    }
    function renderType(type, q) {
      const category = typeCategories.find((candidate) => candidate.id === type);
      if (!category) return;
      for (const item of category.items.filter((candidate) => matches(category, candidate, q))) {
        sections.append(row(item, valuesForSource(item.source), item.source));
      }
    }
    function renderGroup(categories, values, bucket, q, openedFilteredSection) {
      let addedAny = false;
      for (const category of categories) {
        const items = (category.colors || category.tokens).filter((item) => matches(category, item, q));
        if (!items.length) continue;
        addedAny = true;
        const details = document.createElement('details');
        details.dataset.accordion = 'theme-section';
        if (q && !openedFilteredSection) {
          details.open = true;
          openedFilteredSection = true;
        }
        const summary = document.createElement('summary');
        summary.innerHTML = '<strong>' + escapeHtml(category.name) + '</strong><small>' + items.length + '</small>';
        const grid = document.createElement('div');
        grid.className = 'grid';
        for (const item of items) grid.append(row(item, values, bucket));
        details.addEventListener('toggle', () => {
          closeOtherDetails(details);
        });
        details.append(summary, grid);
        sections.append(details);
      }
      return openedFilteredSection;
    }
    function closeOtherDetails(details) {
      if (!details.open) return;
      for (const sibling of sections.querySelectorAll('details[data-accordion="theme-section"]')) {
        if (sibling !== details) sibling.open = false;
      }
    }
    function valuesForSource(source) {
      if (source === 'textMate') return state.textMate;
      if (source === 'semantic') return state.semantic;
      return state.workbench;
    }
    function row(item, values, bucket) {
      const label = document.createElement('label');
      label.className = 'color';
      const value = valid(values[item.id]) ? values[item.id] : '#000000';
      const color = document.createElement('input');
      color.type = 'color';
      color.value = value.slice(0, 7);
      const text = document.createElement('input');
      text.type = 'text';
      text.value = value;
      const meta = document.createElement('span');
      meta.className = 'meta';
      meta.innerHTML = '<b>' + escapeHtml(item.label || item.id) + '</b><small>' + escapeHtml(item.id) + '</small>' + (item.description ? '<em>' + escapeHtml(item.description) + '</em>' : '');
      color.addEventListener('input', () => {
        beginEdit(bucket, item.id);
        text.value = color.value;
        values[item.id] = color.value;
        updatePreview();
      });
      color.addEventListener('pointerdown', () => beginEdit(bucket, item.id));
      color.addEventListener('focus', () => beginEdit(bucket, item.id));
      color.addEventListener('change', () => commitEdit(bucket, item.id));
      color.addEventListener('blur', () => commitEdit(bucket, item.id));
      text.addEventListener('input', () => {
        if (!valid(text.value)) return;
        beginEdit(bucket, item.id);
        values[item.id] = text.value;
        color.value = text.value.slice(0, 7);
        updatePreview();
      });
      text.addEventListener('focus', () => beginEdit(bucket, item.id));
      text.addEventListener('change', () => commitEdit(bucket, item.id));
      text.addEventListener('blur', () => commitEdit(bucket, item.id));
      label.append(color, meta, text);
      return label;
    }
    function updatePreview() {
    }
    function beginEdit(bucket, id) {
      const key = bucket + ':' + id;
      if (activeEdits.has(key)) return;
      pushUndoSnapshot();
      activeEdits.add(key);
    }
    function commitEdit(bucket, id) {
      activeEdits.delete(bucket + ':' + id);
    }
    function pushUndoSnapshot() {
      undoStack.push({
        workbench: { ...state.workbench },
        textMate: { ...state.textMate },
        semantic: { ...state.semantic }
      });
      if (undoStack.length > 50) undoStack.shift();
    }
    function undoLastChange() {
      const snapshot = undoStack.pop();
      if (!snapshot) return;
      activeEdits.clear();
      state.workbench = { ...snapshot.workbench };
      state.textMate = { ...snapshot.textMate };
      state.semantic = { ...snapshot.semantic };
      render();
      updatePreview();
    }
    function set(name, value) { if (valid(value)) root.style.setProperty(name, value); }
    function matches(category, item, q) {
      if (!q) return true;
      return [category.name, item.id, item.label, item.description, (item.scopes || []).join(' ')].filter(Boolean).join(' ').toLowerCase().includes(q);
    }
    function valid(value) { return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value || ''); }
    function escapeHtml(value) {
      return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
  </script>
</body>
</html>`;

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, 'live-theme-editor-comprehensive.html'), html);
console.log(path.join(outputDir, 'live-theme-editor-comprehensive.html'));

function countWorkbench() {
  return WORKBENCH_COLOR_CATEGORIES.flatMap((category) => category.colors).length;
}

function countTextMate() {
  return TEXTMATE_TOKEN_CATEGORIES.flatMap((category) => category.tokens).length;
}

function countSemantic() {
  return SEMANTIC_TOKEN_CATEGORIES.flatMap((category) => category.tokens).length;
}

function toCompanionTemplate(template) {
  return {
    id: template.id,
    label: template.label,
    type: template.type,
    colors: filterHexColors(template.colors || {}),
    tokenCount: Array.isArray(template.tokenColors) ? template.tokenColors.length : 0,
    colorCount: Object.keys(template.colors || {}).length,
    semanticTokenColors: template.semanticTokenColors || {},
    preview: {
      editor: template.colors?.['editor.background'] || template.colors?.foreground || '#111318',
      sidebar: template.colors?.['sideBar.background'] || template.colors?.['activityBar.background'] || '#171a22',
      accent: template.colors?.['button.background'] || template.colors?.['activityBarBadge.background'] || '#3f6fa7',
      text: template.colors?.['editor.foreground'] || template.colors?.foreground || '#d7dae0'
    }
  };
}

function filterHexColors(colors) {
  return Object.fromEntries(
    Object.entries(colors).filter(([, value]) => /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value || ''))
  );
}
