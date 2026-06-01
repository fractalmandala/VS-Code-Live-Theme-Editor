const { WORKBENCH_COLOR_CATEGORIES, WORKBENCH_COLOR_KEYS } = require('./colorRegistry');

const HEX_COLOR = /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/;

const DEFAULT_WORKBENCH_COLORS = {
  'editor.background': '#111318',
  'editor.foreground': '#d7dae0',
  'editorLineNumber.foreground': '#5e6572',
  'editorCursor.foreground': '#f4c95d',
  'editor.selectionBackground': '#294f7a',
  'editor.inactiveSelectionBackground': '#243447',
  'editor.lineHighlightBackground': '#1b1f2a',
  'editorWidget.background': '#1b1f2a',
  'sideBar.background': '#171a22',
  'sideBar.foreground': '#c6c9d1',
  'sideBarSectionHeader.background': '#202532',
  'activityBar.background': '#0d1017',
  'activityBar.foreground': '#f4c95d',
  'activityBarBadge.background': '#d96c75',
  'titleBar.activeBackground': '#0d1017',
  'titleBar.activeForeground': '#f4f4f5',
  'statusBar.background': '#234063',
  'statusBar.foreground': '#ffffff',
  'panel.background': '#151922',
  'panel.border': '#313849',
  'tab.activeBackground': '#111318',
  'tab.activeForeground': '#ffffff',
  'tab.inactiveBackground': '#1a1f2b',
  'tab.inactiveForeground': '#a8adba',
  'terminal.background': '#0f1218',
  'terminal.foreground': '#d7dae0',
  'input.background': '#202532',
  'input.foreground': '#f4f4f5',
  'button.background': '#3f6fa7',
  'button.foreground': '#ffffff'
};

const DEFAULT_TOKEN_COLORS = {
  comments: '#7a8494',
  strings: '#92c47f',
  keywords: '#d48bd1',
  numbers: '#f0b66f',
  types: '#6db7c7',
  functions: '#f4c95d',
  variables: '#d7dae0'
};

const TEXTMATE_TOKEN_CATEGORIES = [
  {
    name: 'Core syntax',
    tokens: [
      { id: 'comments', label: 'Comments', scopes: ['comment', 'punctuation.definition.comment'] },
      { id: 'strings', label: 'Strings', scopes: ['string', 'constant.other.symbol'] },
      { id: 'keywords', label: 'Keywords', scopes: ['keyword', 'storage.type', 'storage.modifier'] },
      { id: 'numbers', label: 'Numbers and constants', scopes: ['constant.numeric', 'constant.language'] },
      { id: 'types', label: 'Types and classes', scopes: ['entity.name.type', 'support.type', 'support.class'] },
      { id: 'functions', label: 'Functions', scopes: ['entity.name.function', 'support.function'] },
      { id: 'variables', label: 'Variables', scopes: ['variable', 'meta.definition.variable.name'] }
    ]
  },
  {
    name: 'Markup and punctuation',
    tokens: [
      { id: 'operators', label: 'Operators', scopes: ['keyword.operator', 'punctuation.separator', 'punctuation.terminator'] },
      { id: 'tags', label: 'Tags', scopes: ['entity.name.tag', 'punctuation.definition.tag'] },
      { id: 'attributes', label: 'Attributes', scopes: ['entity.other.attribute-name'] },
      { id: 'headings', label: 'Markdown headings', scopes: ['markup.heading', 'entity.name.section'] },
      { id: 'links', label: 'Links', scopes: ['markup.underline.link', 'string.other.link'] }
    ]
  },
  {
    name: 'Language helpers',
    tokens: [
      { id: 'parameters', label: 'Parameters', scopes: ['variable.parameter', 'meta.function.parameters'] },
      { id: 'properties', label: 'Properties', scopes: ['variable.other.property', 'support.variable.property'] },
      { id: 'decorators', label: 'Decorators', scopes: ['meta.decorator', 'entity.name.function.decorator'] },
      { id: 'regexp', label: 'Regular expressions', scopes: ['string.regexp', 'constant.character.escape'] },
      { id: 'invalid', label: 'Invalid and illegal', scopes: ['invalid', 'invalid.illegal'] }
    ]
  }
];

const DEFAULT_TEXTMATE_TOKEN_COLORS = {
  ...DEFAULT_TOKEN_COLORS,
  operators: '#c8d3f5',
  tags: '#d96c75',
  attributes: '#f0b66f',
  headings: '#6db7c7',
  links: '#7aa2f7',
  parameters: '#e0af68',
  properties: '#73daca',
  decorators: '#bb9af7',
  regexp: '#ff9e64',
  invalid: '#ff5370'
};

const SEMANTIC_TOKEN_CATEGORIES = [
  {
    name: 'Declarations',
    tokens: ['namespace', 'type', 'class', 'enum', 'interface', 'struct', 'typeParameter', 'parameter']
  },
  {
    name: 'Symbols',
    tokens: ['variable', 'property', 'enumMember', 'event', 'function', 'method', 'macro', 'label']
  },
  {
    name: 'Literals and comments',
    tokens: ['comment', 'string', 'keyword', 'number', 'regexp', 'operator']
  },
  {
    name: 'Modifiers',
    tokens: [
      '*.declaration',
      '*.definition',
      '*.readonly',
      '*.static',
      '*.deprecated',
      '*.abstract',
      '*.async',
      '*.modification',
      '*.documentation',
      '*.defaultLibrary'
    ]
  }
].map((category) => ({
  name: category.name,
  tokens: category.tokens.map((id) => ({ id, label: toLabel(id) }))
}));

const SEMANTIC_TOKEN_KEYS = SEMANTIC_TOKEN_CATEGORIES.flatMap((category) => category.tokens.map((token) => token.id));

const DEFAULT_SEMANTIC_TOKEN_COLORS = {
  namespace: '#6db7c7',
  type: '#6db7c7',
  class: '#6db7c7',
  enum: '#6db7c7',
  interface: '#6db7c7',
  struct: '#6db7c7',
  typeParameter: '#6db7c7',
  parameter: '#e0af68',
  variable: '#d7dae0',
  property: '#73daca',
  enumMember: '#f0b66f',
  event: '#d96c75',
  function: '#f4c95d',
  method: '#f4c95d',
  macro: '#bb9af7',
  label: '#d48bd1',
  comment: '#7a8494',
  string: '#92c47f',
  keyword: '#d48bd1',
  number: '#f0b66f',
  regexp: '#ff9e64',
  operator: '#c8d3f5',
  '*.declaration': '#f4c95d',
  '*.definition': '#f4c95d',
  '*.readonly': '#a8adba',
  '*.static': '#bb9af7',
  '*.deprecated': '#7a8494',
  '*.abstract': '#6db7c7',
  '*.async': '#92c47f',
  '*.modification': '#d96c75',
  '*.documentation': '#7a8494',
  '*.defaultLibrary': '#73daca'
};

const TEXTMATE_TOKEN_KEYS = TEXTMATE_TOKEN_CATEGORIES.flatMap((category) => category.tokens.map((token) => token.id));

const COMPLETE_SWIPE_SETTING_KEYS = [
  'workbench.colorCustomizations',
  'editor.tokenColorCustomizations',
  'editor.semanticTokenColorCustomizations'
];

const MOST_USED_COLOR_ITEMS = [
  mostUsedWorkbench('editor.background', 'Editor Background', 'Primary editor canvas color.'),
  mostUsedWorkbench('editor.foreground', 'Editor Text', 'Default text color inside editors.'),
  mostUsedWorkbench('sideBar.background', 'Sidebar Background', 'Primary navigation and explorer background.'),
  mostUsedWorkbench('activityBar.background', 'Activity Bar Background', 'Outer IDE navigation rail.'),
  mostUsedWorkbench('statusBar.background', 'Status Bar Background', 'Bottom status surface.'),
  mostUsedWorkbench('panel.background', 'Panel Background', 'Terminal, output, problems, and bottom panel surface.'),
  mostUsedWorkbench('tab.activeBackground', 'Active Tab Background', 'Current editor tab color.'),
  mostUsedWorkbench('terminal.background', 'Terminal Background', 'Integrated terminal surface.'),
  mostUsedWorkbench('button.background', 'Button Background', 'Primary command button color.'),
  mostUsedTextMate('comments', 'Comments', 'Comment and documentation text color.'),
  mostUsedTextMate('strings', 'Strings', 'String literal color.'),
  mostUsedTextMate('keywords', 'Keywords', 'Language keyword color.'),
  mostUsedSemantic('function', 'Semantic Functions', 'Language-service function token color.'),
  mostUsedSemantic('class', 'Semantic Classes', 'Language-service class/type identity color.'),
  mostUsedSemantic('variable', 'Semantic Variables', 'Language-service variable token color.')
];

const TYPE_COLOR_CATEGORIES = buildTypeColorCategories();

function isHexColor(value) {
  return typeof value === 'string' && HEX_COLOR.test(value);
}

function buildColorCustomizations(current = {}, edits = {}, options = {}) {
  const next = { ...current };

  for (const key of options.resetManagedKeys || []) {
    delete next[key];
  }

  for (const [key, value] of Object.entries(edits)) {
    if (isHexColor(value)) {
      next[key] = value;
    }
  }

  return next;
}

function buildTokenColorCustomizations(current = {}, edits = {}, options = {}) {
  const next = { ...current };

  for (const key of options.resetManagedKeys || []) {
    delete next[key];
  }

  for (const [key, value] of Object.entries(edits)) {
    if (isHexColor(value)) {
      next[key] = value;
    }
  }

  return next;
}

function buildSemanticTokenColorCustomizations(current = {}, edits = {}, options = {}) {
  const next = { ...current, rules: { ...(current.rules || {}) } };

  for (const key of options.resetManagedKeys || []) {
    delete next.rules[key];
  }

  for (const [key, value] of Object.entries(edits)) {
    if (isHexColor(value)) {
      next.rules[key] = value;
    }
  }

  return next;
}

function buildStarterTemplateConfiguration(template) {
  return {
    workbenchColorCustomizations: pickHexColors(template.colors || {}),
    tokenColorCustomizations: {
      textMateRules: Array.isArray(template.tokenColors) ? template.tokenColors : []
    },
    semanticTokenColorCustomizations: {
      enabled: true,
      rules: template.semanticTokenColors || {}
    }
  };
}

function buildThemeDocument(name, colors = {}, tokenColors = {}, semanticTokenColors = {}) {
  const syntax = { ...DEFAULT_TEXTMATE_TOKEN_COLORS, ...tokenColors };
  const semantic = { ...DEFAULT_SEMANTIC_TOKEN_COLORS, ...semanticTokenColors };
  const customTextMateRules = Array.isArray(tokenColors.textMateRules) ? tokenColors.textMateRules : [];
  const generatedTokenRules = TEXTMATE_TOKEN_CATEGORIES.flatMap((category) =>
    category.tokens.map((token) => ({
      scope: token.scopes,
      settings: { foreground: syntax[token.id] }
    }))
  );

  return {
    name,
    type: 'dark',
    semanticHighlighting: true,
    colors: { ...colors },
    tokenColors: [...customTextMateRules, ...generatedTokenRules],
    semanticTokenColors: semantic
  };
}

function buildThemeFilename(name) {
  const slug = String(name || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

  return `${slug || 'live-theme-editor-export'}-color-theme.json`;
}

function pickHexColors(colors) {
  return Object.fromEntries(
    Object.entries(colors).filter(([, value]) => isHexColor(value))
  );
}

function mostUsedWorkbench(id, label, description) {
  return { id, label, description, source: 'workbench', messageType: 'updateWorkbenchColor' };
}

function mostUsedTextMate(id, label, description) {
  return { id, label, description, source: 'textMate', messageType: 'updateTokenColor' };
}

function mostUsedSemantic(id, label, description) {
  return { id, label, description, source: 'semantic', messageType: 'updateSemanticTokenColor' };
}

function buildTypeColorCategories() {
  const categories = [
    { id: 'structure', name: 'Backgrounds, Foregrounds and Borders', items: [] },
    { id: 'interfaceText', name: 'Interface Text Colors', items: [] },
    { id: 'editorText', name: 'Editor Text Colors', items: [] },
    { id: 'terminal', name: 'Terminal Colors', items: [] },
    { id: 'effects', name: 'Shadows, Shimmers, Hovers', items: [] },
    { id: 'other', name: 'Others', items: [] }
  ];
  const byId = Object.fromEntries(categories.map((category) => [category.id, category]));

  for (const item of WORKBENCH_COLOR_CATEGORIES.flatMap((category) => category.colors || [])) {
    byId[classifyWorkbenchColor(item.id)].items.push({
      ...item,
      source: 'workbench',
      messageType: 'updateWorkbenchColor'
    });
  }

  for (const item of TEXTMATE_TOKEN_CATEGORIES.flatMap((category) => category.tokens || [])) {
    byId.editorText.items.push({
      ...item,
      source: 'textMate',
      messageType: 'updateTokenColor'
    });
  }

  for (const item of SEMANTIC_TOKEN_CATEGORIES.flatMap((category) => category.tokens || [])) {
    byId.editorText.items.push({
      ...item,
      source: 'semantic',
      messageType: 'updateSemanticTokenColor'
    });
  }

  return categories;
}

function classifyWorkbenchColor(id) {
  const lower = id.toLowerCase();

  if (lower.startsWith('terminal.')) {
    return 'terminal';
  }

  if (isEditorTextWorkbenchColor(lower)) {
    return 'editorText';
  }

  if (isEffectWorkbenchColor(lower)) {
    return 'effects';
  }

  if (isInterfaceTextWorkbenchColor(lower)) {
    return 'interfaceText';
  }

  if (lower.includes('background') || lower.includes('border') || lower.includes('foreground')) {
    return 'structure';
  }

  return 'other';
}

function isEditorTextWorkbenchColor(lower) {
  return lower.startsWith('editor.') ||
    lower.startsWith('editorlinenumber.') ||
    lower.startsWith('editorcursor.') ||
    lower.startsWith('editorbracket') ||
    lower.startsWith('editorinlayhint.') ||
    lower.startsWith('editorcodelens.') ||
    lower.startsWith('editorunicodehighlight.') ||
    lower.startsWith('editorwordhighlight.') ||
    lower.startsWith('editoroverviewruler.') ||
    lower.startsWith('minimap.') ||
    lower.includes('editor.foreground') ||
    lower.includes('editorline');
}

function isInterfaceTextWorkbenchColor(lower) {
  return lower.includes('foreground') ||
    lower.includes('text') ||
    lower.includes('description') ||
    lower.includes('icon') ||
    lower.includes('placeholder') ||
    lower.includes('decoration') ||
    lower.includes('badge');
}

function isEffectWorkbenchColor(lower) {
  return lower.includes('shadow') ||
    lower.includes('hover') ||
    lower.includes('highlight') ||
    lower.includes('shimmer') ||
    lower.includes('glow') ||
    lower.includes('sash') ||
    lower.includes('focus') ||
    lower.includes('active') ||
    lower.includes('selection') ||
    lower.includes('dropbackground');
}

function toLabel(id) {
  return id
    .replace(/^\*\./, 'Any ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[._]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

module.exports = {
  COMPLETE_SWIPE_SETTING_KEYS,
  DEFAULT_SEMANTIC_TOKEN_COLORS,
  DEFAULT_TOKEN_COLORS,
  DEFAULT_TEXTMATE_TOKEN_COLORS,
  DEFAULT_WORKBENCH_COLORS,
  MOST_USED_COLOR_ITEMS,
  SEMANTIC_TOKEN_CATEGORIES,
  SEMANTIC_TOKEN_KEYS,
  TEXTMATE_TOKEN_CATEGORIES,
  TEXTMATE_TOKEN_KEYS,
  TYPE_COLOR_CATEGORIES,
  WORKBENCH_COLOR_CATEGORIES,
  WORKBENCH_COLOR_KEYS,
  buildColorCustomizations,
  buildSemanticTokenColorCustomizations,
  buildStarterTemplateConfiguration,
  buildTokenColorCustomizations,
  buildThemeDocument,
  buildThemeFilename,
  isHexColor
};
