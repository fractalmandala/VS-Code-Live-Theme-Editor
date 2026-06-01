const fs = require('node:fs');
const https = require('node:https');

const url = 'https://raw.githubusercontent.com/microsoft/vscode-docs/main/api/references/theme-color.md';

https
  .get(url, (response) => {
    let body = '';

    response.on('data', (chunk) => {
      body += chunk;
    });

    response.on('end', () => {
      const categories = [];
      let current = null;

      for (const line of body.split(/\r?\n/)) {
        const heading = line.match(/^##\s+(.+)/);
        if (heading && !['Color formats', 'Extension colors'].includes(heading[1])) {
          current = { name: heading[1], colors: [] };
          categories.push(current);
          continue;
        }

        const color = line.match(/^- `([^`]+)`: (.+)$/);
        if (color && current) {
          current.colors.push({
            id: color[1],
            label: toLabel(color[1]),
            description: color[2]
          });
        }
      }

      const populated = categories.filter((category) => category.colors.length);
      const keys = populated.flatMap((category) => category.colors.map((color) => color.id));
      const source = [
        '// Generated from the official VS Code theme color reference.',
        `// Source: ${url}`,
        '',
        `const WORKBENCH_COLOR_CATEGORIES = ${JSON.stringify(populated, null, 2)};`,
        '',
        'const WORKBENCH_COLOR_KEYS = WORKBENCH_COLOR_CATEGORIES.flatMap((category) => category.colors.map((color) => color.id));',
        '',
        'module.exports = { WORKBENCH_COLOR_CATEGORIES, WORKBENCH_COLOR_KEYS };',
        ''
      ].join('\n');

      fs.writeFileSync('src/colorRegistry.js', source);
      console.log(JSON.stringify({ categories: populated.length, colors: keys.length }, null, 2));
    });
  })
  .on('error', (error) => {
    console.error(error);
    process.exit(1);
  });

function toLabel(id) {
  return id
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[._]/g, ' ')
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}
