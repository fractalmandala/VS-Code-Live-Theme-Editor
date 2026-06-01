(function () {
  const vscode = acquireVsCodeApi();
  const mostUsedColors = document.getElementById('mostUsedColors');
  const workbench = document.getElementById('workbenchColors');
  const textMateTokens = document.getElementById('textMateTokens');
  const semanticTokens = document.getElementById('semanticTokens');
  const starterTemplates = document.getElementById('starterTemplates');
  const completeSwipeButton = document.getElementById('completeSwipe');
  const exportButton = document.getElementById('exportTheme');
  const resetButton = document.getElementById('resetTheme');
  const filterInput = document.getElementById('filterInput');
  const themeName = document.getElementById('themeName');
  const viewModeToggle = document.getElementById('viewModeToggle');
  const groupTabSet = document.querySelector('[data-tab-set="groups"]');
  const typeTabSet = document.querySelector('[data-tab-set="types"]');
  const groupTabs = [...document.querySelectorAll('[data-group-tab]')];
  const groupPanels = [...document.querySelectorAll('[data-group-panel]')];
  const typeTabs = [...document.querySelectorAll('[data-type-tab]')];
  const typePanels = [...document.querySelectorAll('[data-type-panel]')];
  let latestState = null;
  let viewMode = 'groups';
  let activeGroup = 'mostUsed';
  let activeType = 'structure';

  window.addEventListener('message', (event) => {
    if (event.data.type !== 'state') {
      return;
    }

    latestState = event.data;
    render();
  });

  filterInput.addEventListener('input', render);

  exportButton.addEventListener('click', () => {
    vscode.postMessage({ type: 'saveTheme', name: themeName.value });
  });

  resetButton.addEventListener('click', () => {
    vscode.postMessage({ type: 'resetManagedColors' });
  });

  completeSwipeButton.addEventListener('click', () => {
    vscode.postMessage({ type: 'completeSwipe' });
  });

  for (const tab of groupTabs) {
    tab.addEventListener('click', () => {
      setActiveGroup(tab.dataset.groupTab);
    });
  }

  for (const tab of typeTabs) {
    tab.addEventListener('click', () => {
      setActiveType(tab.dataset.typeTab);
    });
  }

  viewModeToggle.addEventListener('click', () => {
    viewMode = viewMode === 'groups' ? 'types' : 'groups';
    syncViewMode();
  });

  document.addEventListener('keydown', (event) => {
    if ((event.metaKey || event.ctrlKey) && !event.shiftKey && event.key.toLowerCase() === 'z') {
      event.preventDefault();
      vscode.postMessage({ type: 'undo' });
    }
  });

  vscode.postMessage({ type: 'ready' });

  function render() {
    if (!latestState) {
      return;
    }

    const query = filterInput.value.trim().toLowerCase();
    renderMostUsed(latestState.mostUsedItems || [], query);
    renderCategories(workbench, latestState.colorCategories, latestState.colors, 'updateWorkbenchColor', query);
    renderCategories(textMateTokens, latestState.textMateTokenCategories, latestState.textMateTokens, 'updateTokenColor', query);
    renderCategories(semanticTokens, latestState.semanticTokenCategories, latestState.semanticTokens, 'updateSemanticTokenColor', query);
    renderTypeCategories(latestState.typeColorCategories || [], query);
    renderStarterTemplates(latestState.starterTemplates || []);
    syncViewMode();
    updatePreview(latestState.colors, latestState.textMateTokens, latestState.semanticTokens);
  }

  function syncViewMode() {
    viewModeToggle.textContent = viewMode === 'groups' ? 'View by Types' : 'View by Groups';
    groupTabSet.classList.toggle('hidden', viewMode !== 'groups');
    typeTabSet.classList.toggle('hidden', viewMode !== 'types');

    if (viewMode === 'groups') {
      setActiveGroup(activeGroup);
      for (const panel of typePanels) {
        panel.classList.remove('active');
      }
    } else {
      setActiveType(activeType);
      for (const panel of groupPanels) {
        panel.classList.remove('active');
      }
    }
  }

  function setActiveGroup(group) {
    activeGroup = group || 'mostUsed';
    for (const tab of groupTabs) {
      const isActive = tab.dataset.groupTab === activeGroup;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    }
    for (const panel of groupPanels) {
      panel.classList.toggle('active', viewMode === 'groups' && panel.dataset.groupPanel === activeGroup);
    }
  }

  function setActiveType(type) {
    activeType = type || 'structure';
    for (const tab of typeTabs) {
      const isActive = tab.dataset.typeTab === activeType;
      tab.classList.toggle('active', isActive);
      tab.setAttribute('aria-selected', String(isActive));
    }
    for (const panel of typePanels) {
      panel.classList.toggle('active', viewMode === 'types' && panel.dataset.typePanel === activeType);
    }
  }

  function renderMostUsed(items, query) {
    mostUsedColors.replaceChildren();
    const filteredItems = items.filter((item) => matchesQuery({ name: 'Most Used' }, item, query));

    for (const item of filteredItems) {
      mostUsedColors.append(createColorRow(item, getMostUsedValue(item), item.messageType));
    }
  }

  function getMostUsedValue(item) {
    if (item.source === 'textMate') {
      return latestState.textMateTokens[item.id];
    }
    if (item.source === 'semantic') {
      return latestState.semanticTokens[item.id];
    }
    return latestState.colors[item.id];
  }

  function renderStarterTemplates(templates) {
    starterTemplates.replaceChildren();

    for (const template of templates) {
      const button = document.createElement('button');
      button.type = 'button';
      button.className = 'starter-card';

      const swatches = document.createElement('span');
      swatches.className = 'starter-swatches';
      for (const color of [template.preview.editor, template.preview.sidebar, template.preview.accent, template.preview.text]) {
        const swatch = document.createElement('i');
        swatch.style.background = color;
        swatches.append(swatch);
      }

      const title = document.createElement('strong');
      title.textContent = template.label;

      const meta = document.createElement('small');
      meta.textContent = `${template.type} · ${template.colorCount} colors · ${template.tokenCount} token rules · ${template.semanticCount} semantic`;

      button.addEventListener('click', () => {
        vscode.postMessage({ type: 'applyStarterTemplate', id: template.id });
      });

      button.append(swatches, title, meta);
      starterTemplates.append(button);
    }
  }

  function renderTypeCategories(categories, query) {
    for (const category of categories) {
      const container = document.querySelector(`[data-type-list="${category.id}"]`);
      if (!container) {
        continue;
      }

      container.replaceChildren();
      for (const item of category.items.filter((candidate) => matchesQuery(category, candidate, query))) {
        container.append(createColorRow(item, getItemValue(item), item.messageType));
      }
    }
  }

  function renderCategories(container, categories, values, messageType, query) {
    container.replaceChildren();

    for (const category of categories) {
      const items = getItems(category).filter((item) => matchesQuery(category, item, query));
      if (!items.length) {
        continue;
      }

      const section = document.createElement('section');
      section.className = 'color-category collapsed';

      const heading = document.createElement('button');
      heading.className = 'category-heading';
      heading.type = 'button';
      heading.setAttribute('aria-expanded', 'false');
      heading.innerHTML = `<span>${escapeHtml(category.name)}</span><small>${items.length}</small>`;

      const grid = document.createElement('div');
      grid.className = 'color-grid';

      heading.addEventListener('click', () => {
        const shouldOpen = section.classList.contains('collapsed');
        closeSiblingCategories(container);

        if (shouldOpen) {
          section.classList.remove('collapsed');
          section.classList.add('open');
          heading.setAttribute('aria-expanded', 'true');
        }
      });

      for (const item of items) {
        grid.append(createColorRow(item, values[item.id], messageType));
      }

      section.append(heading, grid);
      container.append(section);
    }
  }

  function closeSiblingCategories(container) {
    for (const category of container.querySelectorAll('.color-category')) {
      category.classList.add('collapsed');
      category.classList.remove('open');
      const heading = category.querySelector('.category-heading');
      if (heading) {
        heading.setAttribute('aria-expanded', 'false');
      }
    }
  }

  function getItems(category) {
    return category.colors || category.tokens || [];
  }

  function getItemValue(item) {
    if (item.source === 'textMate') {
      return latestState.textMateTokens[item.id];
    }
    if (item.source === 'semantic') {
      return latestState.semanticTokens[item.id];
    }
    return latestState.colors[item.id];
  }

  function matchesQuery(category, item, query) {
    if (!query) {
      return true;
    }

    return [category.name, item.id, item.label, item.description, (item.scopes || []).join(' ')]
      .filter(Boolean)
      .join(' ')
      .toLowerCase()
      .includes(query);
  }

  function createColorRow(item, value, messageType) {
    const color = isHexColor(value) ? value : '#000000';
    const pickerValue = toColorInputValue(color);
    const row = document.createElement('label');
    row.className = 'color-row';

    const swatch = document.createElement('input');
    swatch.type = 'color';
    swatch.value = pickerValue;
    swatch.setAttribute('aria-label', item.label || item.id);

    const text = document.createElement('input');
    text.type = 'text';
    text.value = color;
    text.spellcheck = false;
    text.pattern = '#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})';
    text.setAttribute('aria-label', `${item.label || item.id} hex value`);

    const meta = document.createElement('span');
    meta.className = 'color-meta';
    const description = item.description || (item.scopes ? item.scopes.join(', ') : '');
    meta.innerHTML = [
      `<strong>${escapeHtml(item.label || item.id)}</strong>`,
      `<small>${escapeHtml(item.id)}</small>`,
      description ? `<em>${escapeHtml(description)}</em>` : ''
    ].join('');

    swatch.addEventListener('input', () => {
      text.value = swatch.value;
      applyLocalColor(messageType, item.id, swatch.value);
      sendColor(messageType, item.id, swatch.value);
    });
    swatch.addEventListener('pointerdown', () => beginColorEdit(messageType, item.id));
    swatch.addEventListener('focus', () => beginColorEdit(messageType, item.id));
    swatch.addEventListener('change', () => commitColorEdit(messageType, item.id));
    swatch.addEventListener('blur', () => commitColorEdit(messageType, item.id));

    text.addEventListener('input', () => {
      if (!isHexColor(text.value)) {
        row.classList.add('invalid');
        return;
      }

      row.classList.remove('invalid');
      swatch.value = toColorInputValue(text.value);
      applyLocalColor(messageType, item.id, text.value);
      sendColor(messageType, item.id, text.value);
    });
    text.addEventListener('focus', () => beginColorEdit(messageType, item.id));
    text.addEventListener('change', () => commitColorEdit(messageType, item.id));
    text.addEventListener('blur', () => commitColorEdit(messageType, item.id));

    row.append(swatch, meta, text);
    return row;
  }

  function sendColor(type, key, value) {
    vscode.postMessage({ type, key, value });
  }

  function beginColorEdit(type, key) {
    vscode.postMessage({ type: 'beginColorEdit', source: colorEditSource(type), key });
  }

  function commitColorEdit(type, key) {
    vscode.postMessage({ type: 'commitColorEdit', source: colorEditSource(type), key });
  }

  function applyLocalColor(type, key, value) {
    if (!latestState || !isHexColor(value)) {
      return;
    }

    if (type === 'updateTokenColor') {
      latestState.textMateTokens[key] = value;
    } else if (type === 'updateSemanticTokenColor') {
      latestState.semanticTokens[key] = value;
    } else {
      latestState.colors[key] = value;
    }

    updatePreview(latestState.colors, latestState.textMateTokens, latestState.semanticTokens);
  }

  function colorEditSource(type) {
    if (type === 'updateTokenColor') {
      return 'textMate';
    }
    if (type === 'updateSemanticTokenColor') {
      return 'semantic';
    }
    return 'workbench';
  }

  function updatePreview(colors, tokenColors, semantic) {
    const root = document.documentElement;
    const set = (name, value) => root.style.setProperty(name, value);

    set('--editor-bg', colors['editor.background']);
    set('--editor-fg', colors['editor.foreground']);
    set('--activity-bg', colors['activityBar.background']);
    set('--sidebar-bg', colors['sideBar.background']);
    set('--sidebar-fg', colors['sideBar.foreground']);
    set('--panel-border', colors['panel.border']);
    set('--comment', semantic.comment || tokenColors.comments);
    set('--string', semantic.string || tokenColors.strings);
    set('--keyword', semantic.keyword || tokenColors.keywords);
    set('--number', semantic.number || tokenColors.numbers);
    set('--type', semantic.type || tokenColors.types);
    set('--function', semantic.function || tokenColors.functions);
    set('--variable', semantic.variable || tokenColors.variables);
  }

  function isHexColor(value) {
    return /^#(?:[0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(value || '');
  }

  function toColorInputValue(value) {
    if (/^#[0-9a-fA-F]{3,4}$/.test(value)) {
      return `#${value[1]}${value[1]}${value[2]}${value[2]}${value[3]}${value[3]}`;
    }

    return value.slice(0, 7);
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
})();
