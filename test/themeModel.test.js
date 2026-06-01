const assert = require('node:assert/strict');
const test = require('node:test');

const {
  COMPLETE_SWIPE_SETTING_KEYS,
  SEMANTIC_TOKEN_KEYS,
  TEXTMATE_TOKEN_KEYS,
  TYPE_COLOR_CATEGORIES,
  MOST_USED_COLOR_ITEMS,
  WORKBENCH_COLOR_CATEGORIES,
  WORKBENCH_COLOR_KEYS,
  buildColorCustomizations,
  buildSemanticTokenColorCustomizations,
  buildStarterTemplateConfiguration,
  buildTokenColorCustomizations,
  buildThemeDocument,
  buildThemeFilename,
  isHexColor
} = require('../src/themeModel');
const { STARTER_TEMPLATES } = require('../src/starterTemplates');

test('workbench registry includes comprehensive official color surface', () => {
  assert.equal(WORKBENCH_COLOR_CATEGORIES.length >= 50, true);
  assert.equal(WORKBENCH_COLOR_KEYS.length >= 800, true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('editor.background'), true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('button.border'), true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('sideBarTitle.background'), true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('sideBarStickyScroll.border'), true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('terminal.ansiYellow'), true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('terminal.selectionForeground'), true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('gitDecoration.ignoredResourceForeground'), true);
  assert.equal(WORKBENCH_COLOR_KEYS.includes('notebook.focusedCellBorder'), true);
});

test('buildColorCustomizations merges edited colors and preserves unrelated keys', () => {
  const current = {
    'editor.background': '#101010',
    'terminal.background': '#050505'
  };

  const result = buildColorCustomizations(current, {
    'editor.background': '#202020',
    'sideBar.background': '#181818'
  });

  assert.deepEqual(result, {
    'editor.background': '#202020',
    'terminal.background': '#050505',
    'sideBar.background': '#181818'
  });
});

test('buildColorCustomizations removes editor-managed keys when reset is requested', () => {
  const result = buildColorCustomizations(
    {
      'editor.background': '#101010',
      'terminal.background': '#050505',
      'activityBar.background': '#111111'
    },
    {},
    { resetManagedKeys: ['editor.background', 'activityBar.background'] }
  );

  assert.deepEqual(result, {
    'terminal.background': '#050505'
  });
});

test('buildThemeDocument creates installable VS Code theme JSON', () => {
  const doc = buildThemeDocument(
    'My Visual Theme',
    {
      'editor.background': '#121212',
      'editor.foreground': '#f2f2f2',
      'customExtension.border': '#334455'
    },
    {
      functions: '#ffcc00',
      textMateRules: [{ scope: 'markup.bold', settings: { fontStyle: 'bold', foreground: '#ffffff' } }]
    },
    { class: '#88ccff' }
  );

  assert.equal(doc.name, 'My Visual Theme');
  assert.equal(doc.type, 'dark');
  assert.equal(doc.colors['editor.background'], '#121212');
  assert.equal(doc.colors['customExtension.border'], '#334455');
  assert.equal(doc.semanticHighlighting, true);
  assert.equal(doc.semanticTokenColors.class, '#88ccff');
  assert.equal(doc.tokenColors.some((rule) => rule.scope === 'markup.bold'), true);
});

test('buildTokenColorCustomizations merges named syntax colors without removing other settings', () => {
  const result = buildTokenColorCustomizations(
    {
      textMateRules: [{ scope: 'markup.bold', settings: { fontStyle: 'bold' } }],
      comments: '#777777'
    },
    {
      comments: '#6a9955',
      strings: '#ce9178'
    }
  );

  assert.equal(result.comments, '#6a9955');
  assert.equal(result.strings, '#ce9178');
  assert.deepEqual(result.textMateRules, [
    { scope: 'markup.bold', settings: { fontStyle: 'bold' } }
  ]);
});

test('buildSemanticTokenColorCustomizations edits nested semantic token rules', () => {
  const result = buildSemanticTokenColorCustomizations(
    {
      enabled: true,
      rules: {
        class: '#336699',
        interface: '#123456'
      }
    },
    {
      class: '#abcdef',
      method: '#fedcba'
    },
    { resetManagedKeys: ['interface'] }
  );

  assert.equal(result.enabled, true);
  assert.deepEqual(result.rules, {
    class: '#abcdef',
    method: '#fedcba'
  });
});

test('token registries cover TextMate and semantic editing beyond common groups', () => {
  assert.equal(TEXTMATE_TOKEN_KEYS.includes('decorators'), true);
  assert.equal(TEXTMATE_TOKEN_KEYS.includes('invalid'), true);
  assert.equal(SEMANTIC_TOKEN_KEYS.includes('*.declaration'), true);
  assert.equal(SEMANTIC_TOKEN_KEYS.includes('typeParameter'), true);
});

test('most used group includes high-salience workbench and syntax colors first', () => {
  assert.equal(MOST_USED_COLOR_ITEMS.length, 15);
  assert.deepEqual(
    MOST_USED_COLOR_ITEMS.map((item) => item.id),
    [
      'editor.background',
      'editor.foreground',
      'sideBar.background',
      'activityBar.background',
      'statusBar.background',
      'panel.background',
      'tab.activeBackground',
      'terminal.background',
      'button.background',
      'comments',
      'strings',
      'keywords',
      'function',
      'class',
      'variable'
    ]
  );
  assert.equal(MOST_USED_COLOR_ITEMS.some((item) => item.source === 'workbench'), true);
  assert.equal(MOST_USED_COLOR_ITEMS.some((item) => item.source === 'textMate'), true);
  assert.equal(MOST_USED_COLOR_ITEMS.some((item) => item.source === 'semantic'), true);
});

test('type color categories classify structure, interface text, editor text, and other colors', () => {
  assert.deepEqual(TYPE_COLOR_CATEGORIES.map((category) => category.id), [
    'structure',
    'interfaceText',
    'editorText',
    'terminal',
    'effects',
    'other'
  ]);

  const byId = Object.fromEntries(TYPE_COLOR_CATEGORIES.map((category) => [category.id, category.items]));
  assert.equal(byId.structure.some((item) => item.id === 'sideBar.background'), true);
  assert.equal(byId.structure.some((item) => item.id === 'panel.border'), true);
  assert.equal(byId.interfaceText.some((item) => item.id === 'sideBar.foreground'), true);
  assert.equal(byId.editorText.some((item) => item.id === 'editor.foreground'), true);
  assert.equal(byId.editorText.some((item) => item.id === 'comments' && item.source === 'textMate'), true);
  assert.equal(byId.editorText.some((item) => item.id === 'class' && item.source === 'semantic'), true);
  assert.equal(byId.terminal.some((item) => item.id === 'terminal.background'), true);
  assert.equal(byId.terminal.some((item) => item.id === 'terminal.ansiGreen'), true);
  assert.equal(byId.effects.some((item) => item.id === 'widget.shadow'), true);
  assert.equal(byId.effects.some((item) => item.id === 'list.hoverBackground'), true);
  assert.equal(byId.other.some((item) => item.id === 'button.separator'), true);
  assert.equal(
    TYPE_COLOR_CATEGORIES.reduce((count, category) => count + category.items.length, 0) >=
      WORKBENCH_COLOR_KEYS.length + TEXTMATE_TOKEN_KEYS.length + SEMANTIC_TOKEN_KEYS.length,
    true
  );
});

test('isHexColor accepts VS Code hex formats and rejects invalid values', () => {
  assert.equal(isHexColor('#abc'), true);
  assert.equal(isHexColor('#abcd'), true);
  assert.equal(isHexColor('#abcdef'), true);
  assert.equal(isHexColor('#ABCDEF'), true);
  assert.equal(isHexColor('#abcdef80'), true);
  assert.equal(isHexColor('#12345'), false);
  assert.equal(isHexColor('abcdef'), false);
  assert.equal(isHexColor('#12xx45'), false);
});

test('buildThemeFilename creates a safe color theme filename from a user theme name', () => {
  assert.equal(buildThemeFilename('Deep Sidebar / Terminal'), 'deep-sidebar-terminal-color-theme.json');
  assert.equal(buildThemeFilename(''), 'live-theme-editor-export-color-theme.json');
});

test('starter templates include imported local theme families', () => {
  assert.equal(STARTER_TEMPLATES.length, 24);
  for (const id of [
    'github-dark-default',
    'github-light-default',
    'jetbrains-dark',
    'jetbrains-light',
    'jetbrains-new-dark-plus',
    'jetbrains-new-dark-vs',
    'jetbrains-new-dark-modern',
    'xcode-default-dark',
    'xcode-default-light',
    'ayu-dark-unbordered',
    'ayu-dark',
    'ayu-light-unbordered',
    'ayu-light',
    'ayu-mirage-unbordered',
    'ayu-mirage',
    'lynx-dark',
    'lynx-light',
    'delirium-everforest-dark',
    'delirium-everforest-light',
    'delirium-jetbrain-dark',
    'delirium-jetbrain-light',
    'delirium-pumpkin-dark',
    'delirium-pumpkin-lotus-leaf',
    'delirium-pumpkin'
  ]) {
    assert.equal(STARTER_TEMPLATES.some((template) => template.id === id), true);
  }
  assert.equal(
    STARTER_TEMPLATES.every((template) => (
      Object.keys(template.colors).length > 0 ||
      template.tokenColors.length > 0 ||
      Object.keys(template.semanticTokenColors).length > 0
    )),
    true
  );
});

test('buildStarterTemplateConfiguration converts a theme into live editor settings', () => {
  const config = buildStarterTemplateConfiguration({
    name: 'Example',
    colors: {
      'editor.background': '#101010',
      'gitDecoration.conflictingResourceForeground': 'default'
    },
    tokenColors: [{ scope: 'comment', settings: { foreground: '#777777' } }],
    semanticTokenColors: {
      class: '#abcdef',
      function: { foreground: '#fedcba', bold: true }
    }
  });

  assert.deepEqual(config.workbenchColorCustomizations, {
    'editor.background': '#101010'
  });
  assert.deepEqual(config.tokenColorCustomizations, {
    textMateRules: [{ scope: 'comment', settings: { foreground: '#777777' } }]
  });
  assert.deepEqual(config.semanticTokenColorCustomizations, {
    enabled: true,
    rules: {
      class: '#abcdef',
      function: { foreground: '#fedcba', bold: true }
    }
  });
});

test('complete swipe targets every VS Code color customization setting', () => {
  assert.deepEqual(COMPLETE_SWIPE_SETTING_KEYS, [
    'workbench.colorCustomizations',
    'editor.tokenColorCustomizations',
    'editor.semanticTokenColorCustomizations'
  ]);
});
