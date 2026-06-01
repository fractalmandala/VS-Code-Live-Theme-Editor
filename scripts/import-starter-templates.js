const fs = require('node:fs');
const path = require('node:path');
const { parse } = require('jsonc-parser');

const templateSources = [
  {
    id: 'jetbrains-dark',
    label: 'JetBrains Dark',
    source: '/Users/amrit/.trae/extensions/fogio.jetbrains-color-theme-1.0.3-universal/themes/dark-jetbrains-color-theme.json'
  },
  {
    id: 'jetbrains-light',
    label: 'JetBrains Light',
    source: '/Users/amrit/.trae/extensions/fogio.jetbrains-color-theme-1.0.3-universal/themes/light-jetbrains-color-theme.json'
  },
  {
    id: 'github-dark-default',
    label: 'GitHub Dark Default',
    source: '/Users/amrit/.trae/extensions/github.github-vscode-theme-6.3.5-universal/themes/dark-default.json'
  },
  {
    id: 'github-light-default',
    label: 'GitHub Light Default',
    source: '/Users/amrit/.trae/extensions/github.github-vscode-theme-6.3.5-universal/themes/light-default.json'
  },
  {
    id: 'jetbrains-new-dark-plus',
    label: 'JetBrains New Dark Plus',
    source: '/Users/amrit/.trae/extensions/mobalic.jetbrains-new-dark-0.0.1-universal/themes/dark_plus.json'
  },
  {
    id: 'jetbrains-new-dark-vs',
    label: 'JetBrains New Dark VS',
    source: '/Users/amrit/.trae/extensions/mobalic.jetbrains-new-dark-0.0.1-universal/themes/dark_vs.json'
  },
  {
    id: 'jetbrains-new-dark-modern',
    label: 'JetBrains New Dark Modern',
    source: '/Users/amrit/.trae/extensions/mobalic.jetbrains-new-dark-0.0.1-universal/themes/dark_modern.json'
  },
  {
    id: 'xcode-default-dark',
    label: 'Xcode Default Dark',
    source: '/Users/amrit/.trae/extensions/dez64ru.macos-modern-theme-2.3.18-universal/themes/color/big-sur-dark/xcode-default-dark.json'
  },
  {
    id: 'xcode-default-light',
    label: 'Xcode Default Light',
    source: '/Users/amrit/.trae/extensions/dez64ru.macos-modern-theme-2.3.18-universal/themes/color/big-sur-light/xcode-default.json'
  },
  {
    id: 'ayu-dark-unbordered',
    label: 'Ayu Dark Unbordered',
    source: '/Users/amrit/.trae/extensions/teabyii.ayu-1.1.12-universal/ayu-dark-unbordered.json'
  },
  {
    id: 'ayu-dark',
    label: 'Ayu Dark',
    source: '/Users/amrit/.trae/extensions/teabyii.ayu-1.1.12-universal/ayu-dark.json'
  },
  {
    id: 'ayu-light-unbordered',
    label: 'Ayu Light Unbordered',
    source: '/Users/amrit/.trae/extensions/teabyii.ayu-1.1.12-universal/ayu-light-unbordered.json'
  },
  {
    id: 'ayu-light',
    label: 'Ayu Light',
    source: '/Users/amrit/.trae/extensions/teabyii.ayu-1.1.12-universal/ayu-light.json'
  },
  {
    id: 'ayu-mirage-unbordered',
    label: 'Ayu Mirage Unbordered',
    source: '/Users/amrit/.trae/extensions/teabyii.ayu-1.1.12-universal/ayu-mirage-unbordered.json'
  },
  {
    id: 'ayu-mirage',
    label: 'Ayu Mirage',
    source: '/Users/amrit/.trae/extensions/teabyii.ayu-1.1.12-universal/ayu-mirage.json'
  },
  {
    id: 'lynx-dark',
    label: 'Lynx Dark',
    source: '/Users/amrit/.trae/extensions/bastndev.lynx-theme-5.2.1-universal/src/themes/01_Lynx-Dark-theme.json'
  },
  {
    id: 'lynx-light',
    label: 'Lynx Light',
    source: '/Users/amrit/.trae/extensions/bastndev.lynx-theme-5.2.1-universal/src/themes/02_Lynx-Light-theme.json'
  },
  {
    id: 'delirium-everforest-dark',
    label: 'Delirium Everforest Dark',
    source: '/Users/amrit/.trae/extensions/mr4torr.delirium-ui-2.4.0-universal/themes/delirium-theme-everforest-dark.json'
  },
  {
    id: 'delirium-everforest-light',
    label: 'Delirium Everforest Light',
    source: '/Users/amrit/.trae/extensions/mr4torr.delirium-ui-2.4.0-universal/themes/delirium-theme-everforest-light.json'
  },
  {
    id: 'delirium-jetbrain-dark',
    label: 'Delirium JetBrains Dark',
    source: '/Users/amrit/.trae/extensions/mr4torr.delirium-ui-2.4.0-universal/themes/delirium-theme-jetbrain-dark.json'
  },
  {
    id: 'delirium-jetbrain-light',
    label: 'Delirium JetBrains Light',
    source: '/Users/amrit/.trae/extensions/mr4torr.delirium-ui-2.4.0-universal/themes/delirium-theme-jetbrain-light.json'
  },
  {
    id: 'delirium-pumpkin-dark',
    label: 'Delirium Pumpkin Dark',
    source: '/Users/amrit/.trae/extensions/mr4torr.delirium-ui-2.4.0-universal/themes/delirium-theme-pumpkin-dark.json'
  },
  {
    id: 'delirium-pumpkin-lotus-leaf',
    label: 'Delirium Pumpkin Lotus Leaf',
    source: '/Users/amrit/.trae/extensions/mr4torr.delirium-ui-2.4.0-universal/themes/delirium-theme-pumpkin-lotus-leaf.json'
  },
  {
    id: 'delirium-pumpkin',
    label: 'Delirium Pumpkin',
    source: '/Users/amrit/.trae/extensions/mr4torr.delirium-ui-2.4.0-universal/themes/delirium-theme-pumpkin.json'
  }
];

const templates = templateSources.map((template) => {
  const parsed = readTheme(template.source);

  return {
    id: template.id,
    label: template.label,
    name: parsed.name || template.label,
    type: parsed.type || inferType(template.id),
    colors: parsed.colors || {},
    tokenColors: Array.isArray(parsed.tokenColors) ? parsed.tokenColors : [],
    semanticTokenColors: parsed.semanticTokenColors || {}
  };
});

const output = [
  '// Generated from local starter theme files.',
  '// Run scripts/import-starter-templates.js to refresh.',
  '',
  `const STARTER_TEMPLATES = ${JSON.stringify(templates, null, 2)};`,
  '',
  'module.exports = { STARTER_TEMPLATES };',
  ''
].join('\n');

fs.writeFileSync(path.join('src', 'starterTemplates.js'), output);
console.log(JSON.stringify(templates.map((template) => ({
  id: template.id,
  colors: Object.keys(template.colors).length,
  tokenColors: template.tokenColors.length,
  semanticTokenColors: Object.keys(template.semanticTokenColors).length
})), null, 2));

function inferType(id) {
  return id.includes('light') ? 'light' : 'dark';
}

function readTheme(source, seen = new Set()) {
  if (seen.has(source)) {
    throw new Error(`Circular theme include detected for ${source}`);
  }

  seen.add(source);
  const errors = [];
  const raw = fs.readFileSync(source, 'utf8');
  const parsed = parse(raw, errors, { allowTrailingComma: true, disallowComments: false });

  if (errors.length) {
    throw new Error(`Failed to parse ${source}: ${JSON.stringify(errors)}`);
  }

  if (!parsed.include) {
    return parsed;
  }

  const included = readTheme(path.resolve(path.dirname(source), parsed.include), seen);
  return {
    ...included,
    ...parsed,
    colors: {
      ...(included.colors || {}),
      ...(parsed.colors || {})
    },
    tokenColors: [
      ...(Array.isArray(included.tokenColors) ? included.tokenColors : []),
      ...(Array.isArray(parsed.tokenColors) ? parsed.tokenColors : [])
    ],
    semanticTokenColors: {
      ...(included.semanticTokenColors || {}),
      ...(parsed.semanticTokenColors || {})
    }
  };
}
