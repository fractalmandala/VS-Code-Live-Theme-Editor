// Generated from local starter theme files.
// Run scripts/import-starter-templates.js to refresh.

const STARTER_TEMPLATES = [
  {
    "id": "jetbrains-dark",
    "label": "JetBrains Dark",
    "name": "JetBrains Dark",
    "type": "dark",
    "colors": {
      "titleBar.activeBackground": "#2b2d30",
      "titleBar.inactiveBackground": "#3c3f41",
      "titleBar.border": "#3c3f41",
      "editor.background": "#1e1f22",
      "editor.lineHighlightBackground": "#3e435240",
      "editor.inactiveSelectionBackground": "#43454afe",
      "editor.selectionBackground": "#214283",
      "editorLineNumber.foreground": "#444953",
      "editorLineNumber.activeForeground": "#9b9fa8",
      "editorRuler.foreground": "#464646",
      "editorGutter.background": "#1e1f22",
      "editorGroup.border": "#505050",
      "editorGroupHeader.tabsBorder": "#323438",
      "editorGroupHeader.tabsBackground": "#1e1f22",
      "editorCodeLens.foreground": "#6a6e78",
      "editorIndentGuide.background1": "#2c2f32",
      "editorIndentGuide.activeBackground1": "#54565c",
      "editor.stackFrameHighlightBackground": "#72293680",
      "debugTokenExpression.name": "#c69165",
      "debugTokenExpression.value": "#BCBEC4",
      "debugTokenExpression.string": "#BCBEC4",
      "debugTokenExpression.boolean": "#BCBEC4",
      "debugTokenExpression.number": "#BCBEC4",
      "debugTokenExpression.error": "#BCBEC4",
      "debugTokenExpression.type": "#BCBEC4",
      "debugIcon.breakpointCurrentStackframeForeground": "#c69165",
      "debugIcon.breakpointForeground": "#db5c5c",
      "debugIcon.startForeground": "#87cd83",
      "debugIcon.pauseForeground": "#87cd83",
      "debugIcon.stopForeground": "#e6816e",
      "debugIcon.disconnectForeground": "#e6816e",
      "debugIcon.restartForeground": "#87cd83",
      "debugIcon.stepOverForeground": "#ced0d6",
      "debugIcon.stepIntoForeground": "#ced0d6",
      "debugIcon.stepOutForeground": "#ced0d6",
      "debugIcon.continueForeground": "#87cd83",
      "debugIcon.stepBackForeground": "#ced0d6",
      "debugToolBar.background": "#393b40",
      "debugConsole.infoForeground": "#56A8F5",
      "debugConsole.warningForeground": "#E0BB65",
      "debugConsole.errorForeground": "#F75464",
      "debugConsole.sourceForeground": "#BCBEC4",
      "tab.border": "#555555",
      "tab.hoverBackground": "#26282e",
      "tab.hoverForeground": "#dcdfe4",
      "tab.unfocusedHoverBackground": "#606466",
      "tab.activeBorder": "#3574f0",
      "tab.activeBackground": "#1e1f22",
      "tab.inactiveForeground": "#babcc1",
      "tab.unfocusedActiveForeground": "#BBBBBB",
      "tab.unfocusedInactiveForeground": "#BBBBBB",
      "tab.inactiveBackground": "#1e1f22",
      "breadcrumb.background": "#1e1f22",
      "sideBarSectionHeader.background": "#43454a",
      "sideBarSectionHeader.border": "#43454a",
      "sideBar.border": "#2b2d30",
      "sideBar.foreground": "#ced0d6",
      "sideBar.background": "#2b2d30",
      "list.dropBackground": "#474B4D",
      "panel.border": "#2b2d30",
      "panelTitle.activeBorder": "#3574f0",
      "panelTitle.activeForeground": "#dfe1e5",
      "panel.background": "#2b2d30",
      "activityBar.border": "#1e1f22",
      "activityBar.background": "#2b2d30",
      "activityBar.foreground": "#ced0d6",
      "terminal.background": "#1E1F22",
      "terminal.foreground": "#BCBEC4",
      "terminal.ansiBlack": "#000000",
      "terminal.ansiBlue": "#3993D4",
      "terminal.ansiBrightBlack": "#595959",
      "terminal.ansiBrightBlue": "#1FB0FF",
      "terminal.ansiBrightCyan": "#00E5E5",
      "terminal.ansiBrightGreen": "#4FC414",
      "terminal.ansiBrightMagenta": "#ED7EED",
      "terminal.ansiBrightRed": "#FF4050",
      "terminal.ansiBrightWhite": "#FFFFFF",
      "terminal.ansiBrightYellow": "#E5BF00",
      "terminal.ansiCyan": "#00A3A3",
      "terminal.ansiGreen": "#5C962C",
      "terminal.ansiMagenta": "#A771BF",
      "terminal.ansiRed": "#F0524F",
      "terminal.ansiWhite": "#808080",
      "terminal.ansiYellow": "#A68A0D",
      "terminal.tab.activeBorder": "#3474f4",
      "statusBar.foreground": "#9da0a8",
      "statusBar.debuggingForeground": "#cccccc",
      "statusBar.background": "#2b2d30",
      "statusBar.debuggingBackground": "#864d30",
      "statusBar.noFolderBackground": "#313335",
      "statusBar.border": "#1e1f22",
      "statusBar.noFolderBorder": "#1e1f22",
      "statusBar.debuggingBorder": "#1e1f22",
      "menu.foreground": "#bdbfc3",
      "menu.border": "#3c3d42",
      "menu.background": "#2b2d30",
      "list.hoverBackground": "#43454a",
      "list.inactiveSelectionBackground": "#43454a",
      "list.activeSelectionForeground": "#d2e1e5",
      "list.activeSelectionBackground": "#2e436e",
      "input.border": "#646464",
      "input.background": "#45494A",
      "input.foreground": "#BBBBBB",
      "dropdown.listBackground": "#646464",
      "dropdown.foreground": "#BBBBBB",
      "dropdown.border": "#646464",
      "editorWidget.background": "#313335",
      "editorWidget.border": "#464646",
      "editorSuggestWidget.background": "#3C3F41",
      "settings.headerForeground": "#BBBBBB",
      "editorInlayHint.background": "#2d2e32",
      "editorInlayHint.foreground": "#70787a",
      "editorInlayHint.parameterBackground": "#2d2e32",
      "editorInlayHint.parameterForeground": "#70787a",
      "editorInlayHint.typeBackground": "#2d2e32",
      "editorInlayHint.typeForeground": "#70787a",
      "button.background": "#3574f0",
      "button.foreground": "#f7f7fd",
      "button.hoverBackground": "#4982f1",
      "button.secondaryBackground": "#2b2d30",
      "button.secondaryForeground": "#d0dbe4",
      "button.secondaryHoverBackground": "#3f4246",
      "button.border": "#4e5157",
      "minimap.findMatchHighlight": "#84fefed1",
      "minimap.errorHighlight": "#fe5768d1",
      "minimap.warningHighlight": "#ffcd59ba",
      "editorOverviewRuler.findMatchForeground": "#84fefed1",
      "editorOverviewRuler.errorForeground": "#fe5768d1",
      "editorOverviewRuler.warningForeground": "#ffcd59ba",
      "editorError.foreground": "#c45464",
      "editorWarning.foreground": "#BA9752",
      "editorInfo.foreground": "#3592C4",
      "editorHint.foreground": "#7EC482",
      "diffEditor.insertedTextBackground": "#2a794280",
      "diffEditor.removedTextBackground": "#7c352480",
      "diffEditor.insertedLineBackground": "#24472C80",
      "diffEditor.removedLineBackground": "#46252280",
      "gitDecoration.addedResourceForeground": "#619250",
      "gitDecoration.modifiedResourceForeground": "#5c8eba",
      "gitDecoration.deletedResourceForeground": "#d06658",
      "gitDecoration.renamedResourceForeground": "#619250",
      "gitDecoration.untrackedResourceForeground": "#619250",
      "gitDecoration.ignoredResourceForeground": "#848504",
      "gitDecoration.stageModifiedResourceForeground": "#5c8eba",
      "gitDecoration.stageDeletedResourceForeground": "#d06658",
      "gitDecoration.conflictingResourceForeground": "default",
      "gitDecoration.submoduleResourceForeground": "default",
      "git.blame.editorDecorationForeground": "default",
      "editor.findMatchBackground": "#04738c80",
      "editor.findMatchBorder": "#ced0d6",
      "editor.findMatchHighlightBackground": "#04738c80",
      "editor.findMatchHighlightBorder": "#165e70",
      "editorBracketMatch.background": "#43454a",
      "editorBracketHighlight.foreground1": "#BCBEC4",
      "editorBracketHighlight.foreground2": "#BCBEC4",
      "editorBracketHighlight.foreground3": "#BCBEC4",
      "editorBracketHighlight.foreground4": "#BCBEC4",
      "editorBracketHighlight.foreground5": "#BCBEC4",
      "editorBracketHighlight.foreground6": "#BCBEC4",
      "editorBracketHighlight.unexpectedBracket.foreground": "#d64d5b",
      "commandCenter.foreground": "#ced0d6",
      "commandCenter.activeForeground": "#dcdfe4",
      "commandCenter.background": "#2b2d30",
      "commandCenter.activeBackground": "#393b40",
      "commandCenter.border": "#1e1f22",
      "commandCenter.activeBorder": "#3574f0",
      "commandCenter.inactiveForeground": "#6a6e78",
      "commandCenter.inactiveBorder": "#1e1f22",
      "profileBadge.background": "#3574f0",
      "profileBadge.foreground": "#f7f7fd",
      "editorStickyScroll.background": "#1e1f22",
      "editorStickyScrollHover.background": "#26282e",
      "editor.linkedEditingBackground": "#256fff70",
      "editorLineNumber.dimmedForeground": "#3a3d44",
      "chat.requestBackground": "#2b2d30",
      "chat.requestBorder": "#43454a",
      "chat.slashCommandBackground": "#214283",
      "chat.slashCommandForeground": "#56A8F5",
      "chat.avatarBackground": "#393b40",
      "chat.avatarForeground": "#ced0d6",
      "chat.editedFileForeground": "#c69165",
      "inlineChat.background": "#2b2d30",
      "inlineChat.border": "#43454a",
      "inlineChat.foreground": "#bcbec4",
      "inlineChat.shadow": "#00000050",
      "inlineChatInput.background": "#45494a",
      "inlineChatInput.border": "#646464",
      "inlineChatInput.focusBorder": "#3574f0",
      "inlineChatInput.placeholderForeground": "#6a6e78",
      "inlineChatDiff.inserted": "#2a794233",
      "inlineChatDiff.removed": "#7c352433",
      "notebook.editorBackground": "#1e1f22",
      "notebook.cellBorderColor": "#2b2d30",
      "notebook.cellEditorBackground": "#1e1f22",
      "notebook.cellHoverBackground": "#3e435240",
      "notebook.cellInsertionIndicator": "#3574f0",
      "notebook.cellStatusBarItemHoverBackground": "#43454a",
      "notebook.cellToolbarSeparator": "#2b2d30",
      "notebook.focusedCellBackground": "#2e313a80",
      "notebook.focusedCellBorder": "#3574f0",
      "notebook.focusedEditorBorder": "#3574f0",
      "notebook.inactiveFocusedCellBorder": "#43454a",
      "notebook.inactiveSelectedCellBorder": "#43454a",
      "notebook.outputContainerBackgroundColor": "#26282e",
      "notebook.outputContainerBorderColor": "#2b2d30",
      "notebook.selectedCellBackground": "#32364066",
      "notebook.selectedCellBorder": "#3574f0",
      "notebook.symbolHighlightBackground": "#3e435240",
      "notebookScrollbarSlider.activeBackground": "#5d6164",
      "notebookScrollbarSlider.background": "#3c3f41",
      "notebookScrollbarSlider.hoverBackground": "#4d5052",
      "notebookStatusErrorIcon.foreground": "#c45464",
      "notebookStatusRunningIcon.foreground": "#56A8F5",
      "notebookStatusSuccessIcon.foreground": "#7EC482",
      "testing.iconErrored": "#c45464",
      "testing.iconFailed": "#c45464",
      "testing.iconPassed": "#7EC482",
      "testing.iconQueued": "#BA9752",
      "testing.iconSkipped": "#6a6e78",
      "testing.iconUnset": "#6a6e78",
      "testing.runAction": "#7EC482",
      "charts.foreground": "#bcbec4",
      "charts.lines": "#43454a",
      "charts.red": "#c45464",
      "charts.blue": "#56A8F5",
      "charts.yellow": "#BA9752",
      "charts.orange": "#c69165",
      "charts.green": "#7EC482",
      "charts.purple": "#C77DBB",
      "scm.historyItemAdditionsForeground": "#619250",
      "scm.historyItemDeletionsForeground": "#d06658",
      "scm.historyItemStatisticsBorder": "#43454a",
      "scm.historyItemSelectedStatisticsBorder": "#3574f0"
    },
    "tokenColors": [
      {
        "scope": [
          "text"
        ],
        "settings": {
          "foreground": "#BABABA"
        }
      },
      {
        "scope": [
          "source"
        ],
        "settings": {
          "foreground": "#bcbec4"
        }
      },
      {
        "scope": "emphasis",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "strong",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "comment"
        ],
        "settings": {
          "foreground": "#7a7e85"
        }
      },
      {
        "scope": [
          "comment.block.documentation"
        ],
        "settings": {
          "foreground": "#4a6f59",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "string.quoted"
        ],
        "settings": {
          "foreground": "#5b9c71"
        }
      },
      {
        "scope": "constant.numeric",
        "settings": {
          "foreground": "#279cb2",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "constant.character.escape"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "variable.parameter.url",
          "string.url"
        ],
        "settings": {
          "foreground": "#287BDE"
        }
      },
      {
        "scope": "constant.regexp",
        "settings": {
          "foreground": "#646695"
        }
      },
      {
        "scope": [
          "constant.keyword",
          "constant.language"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "meta.var storage.type"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": "support.function.builtin",
        "settings": {
          "foreground": "#747dc2"
        }
      },
      {
        "scope": "variable.language.special",
        "settings": {
          "foreground": "#94558d"
        }
      },
      {
        "scope": "variable.language",
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "support.constant.handlebars"
        ],
        "settings": {
          "foreground": "#ad9665",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "support.type.primitive"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.python variable.parameter.function.language.special"
        ],
        "settings": {
          "foreground": "#94558d",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.python meta.function-call.arguments variable.parameter.function-call"
        ],
        "settings": {
          "foreground": "#aa4926"
        }
      },
      {
        "scope": [
          "source.python constant.language",
          "source.python constant.character.escape",
          "source.python keyword.operator.logical",
          "source.python constant.character.format.placeholder.other",
          "source.python meta.function storage.type.function ",
          "source.python meta.class storage.type.class",
          "source.python storage.type.class",
          "source.python keyword.control.flow",
          "source.python keyword.control.import",
          "source.python storage.type.format",
          "source.python storage.modifier"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.python support.function.magic",
          "source.python support.variable.magic"
        ],
        "settings": {
          "foreground": "#b200b2"
        }
      },
      {
        "name": "Python block comments/multi-line strings",
        "scope": [
          "source.python string.quoted"
        ],
        "settings": {
          "foreground": "#6aab73",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.python string.quoted.docstring",
          "source.python string.quoted.docstring punctuation.definition.string.begin",
          "source.python string.quoted.docstring punctuation.definition.string.end"
        ],
        "settings": {
          "foreground": "#5f826b",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Python decorators",
        "scope": [
          "source.python meta.function.decorator support.type",
          "source.python meta.function.decorator entity.name.function.decorator "
        ],
        "settings": {
          "foreground": "#adad57"
        }
      },
      {
        "name": "Python support types",
        "scope": [
          "source.python support.type",
          "source.python meta.function-call.arguments support.type",
          "source.python meta.function-call support.function.builtin",
          "source.python meta.item-access meta.item-access.arguments support.type"
        ],
        "settings": {
          "foreground": "#767ec3"
        }
      },
      {
        "name": "Python functions",
        "scope": [
          "source.python entity.name.function"
        ],
        "settings": {
          "foreground": "#56a8f5",
          "fontStyle": ""
        }
      },
      {
        "name": "Python binary strings",
        "scope": [
          "source.python string.quoted.binary.single",
          "source.python string.quoted.binary.single punctuation.definition.string.begin",
          "source.python string.quoted.binary.single punctuation.definition.string.end",
          "source.python string.quoted.binary.single storage.type.string"
        ],
        "settings": {
          "foreground": "#a5c261",
          "fontStyle": ""
        }
      },
      {
        "name": "Python inherited classes, reserved language variables",
        "scope": [
          "source.python support.type.exception",
          "source.python meta.class.inheritance support.type.exception",
          "source.python meta.class.inheritance support.type.metaclass"
        ],
        "settings": {
          "foreground": "#767ec3"
        }
      },
      {
        "name": "brackets of XML tags",
        "scope": [
          "text.xml punctuation.definition.tag",
          "text.xml keyword.other"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "scope": [
          "text.xml entity.name.tag.localname"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "scope": [
          "text.xml entity.name.tag.namespace",
          "text.xml entity.other.attribute-name.namespace"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "text.xml string"
        ],
        "settings": {
          "foreground": "#6A8759"
        }
      },
      {
        "scope": [
          "text.xml constant.character.entity"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "text.xml string.unquoted.cdata"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "HTML embedded block closing tag brackets",
        "scope": [
          "text.html meta.tag.metadata.script.end punctuation.definition.tag.begin source",
          "text.html meta.tag.metadata.style.end punctuation.definition.tag.begin source"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "name": "HTML tag brackets",
        "scope": [
          "text.html punctuation.definition.tag.begin",
          "text.html punctuation.definition.tag.end"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "scope": [
          "text.html meta.tag entity.name.tag",
          "text.html entity.name.tag.inline.any",
          "text.html entity.name.tag.block.any"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "scope": [
          "text.html meta.tag punctuation",
          "text.html meta.tag string.unquoted",
          "text.html meta.tag string.quoted",
          "text.html meta.attribute.style.html meta.embedded.line.css source.css"
        ],
        "settings": {
          "foreground": "#588f66"
        }
      },
      {
        "scope": [
          "text.html constant"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "text.html meta.tag.custom entity.name.tag"
        ],
        "settings": {
          "foreground": "#2FBAA3"
        }
      },
      {
        "scope": "text.html constant.character.escape",
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "text.html.jinja keyword.control"
        ],
        "settings": {
          "foreground": "#AD9665",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "text.html.jinja entity.other.jinja.delimiter.variable",
          "text.html.jinja entity.other.jinja.delimiter.tag",
          "text.html.jinja variable.entity.other.jinja.delimiter",
          "text.html.jinja meta.attribute.unrecognized.{{.html",
          "text.html.jinja meta.attribute.unrecognized.}}.html"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "text.html.django keyword.control"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "text.html.django entity.other.django.delimiter.variable"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "text.html.django entity.other.django.delimiter.tag"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "text.html.django meta.tag"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "scope": [
          "text.html.django meta.tag entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#BABABA"
        }
      },
      {
        "scope": [
          "entity.tag.tagbraces"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "text.html.django storage.type.templatetag keyword.operator.django",
          "text.html.django storage.type.templatetag keyword.control.tag-name",
          "text.html.django storage.type.customtemplatetag constant.other.tag.name"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "source.css constant",
        "settings": {
          "foreground": "#6897BB"
        }
      },
      {
        "scope": [
          "support.type.property-name.css"
        ],
        "settings": {
          "foreground": "#BABABA"
        }
      },
      {
        "scope": [
          "source.css variable.parameter.url"
        ],
        "settings": {
          "foreground": "#5C92FF"
        }
      },
      {
        "scope": [
          "meta.at-rule.import.css",
          "meta.at-rule.font-face.css",
          "entity.name.tag.css",
          "punctuation.terminator.rule.css",
          "punctuation.separator.css",
          "punctuation.separator.list.comma.css",
          "keyword.control.at-rule.media.css"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "constant.other.color.rgb-value.hex.css"
        ],
        "settings": {
          "foreground": "#56A8F5",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.css keyword.other.unit",
          "support.constant.property-value.css"
        ],
        "settings": {
          "foreground": "#6AAB73",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "constant.other.unicode-range.css",
          "source.css support.function",
          "punctuation.section.function.css",
          "meta.selector.css",
          "keyword.operator.logical.and.media.css"
        ],
        "settings": {
          "foreground": "#D5B778",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "meta.property-value.css"
        ],
        "settings": {
          "foreground": "#588f66",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "punctuation.definition.variable.less",
          "variable.other.less"
        ],
        "settings": {
          "foreground": "#D0D0FF"
        }
      },
      {
        "scope": [
          "source.css.less entity.other.attribute-name.class.mixin.css",
          "source.css.less constant.other.unicode-range.css"
        ],
        "settings": {
          "foreground": "#A5C261"
        }
      },
      {
        "scope": [
          "source.css.less meta.property-list.css meta.property-value.css entity.name.tag.css",
          "source.css.less meta.property-list.css meta.property-value.css constant.numeric.css"
        ],
        "settings": {
          "foreground": "#588f66"
        }
      },
      {
        "scope": [
          "keyword.other.DML.sql",
          "keyword.other.alias.sql",
          "keyword.other.order.sql",
          "keyword.other.sql",
          "storage.type.sql",
          "source.sql keyword",
          "keyword.other.DDL",
          "source.sql support",
          "support.function.logical.sql",
          "storage.modifier.sql"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "support.function.aggregate.sql",
          "support.function.analytic.sql"
        ],
        "settings": {
          "foreground": "#3d85cc",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "constant.other.table-name.sql"
        ],
        "settings": {
          "foreground": "#aa6b8c"
        }
      },
      {
        "scope": [
          "text.html.markdown markup.heading",
          "text.html.markdown markup.heading.setext"
        ],
        "settings": {
          "foreground": "#99688a",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.paragraph meta.link.inet markup.underline.link"
        ],
        "settings": {
          "foreground": "#4a88c3"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.reference constant.other.reference"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.reference punctuation.definition.constant"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.inet punctuation"
        ],
        "settings": {
          "foreground": "#287BDE"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.inline punctuation.definition.string"
        ],
        "settings": {
          "foreground": "#287BDE"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.paragraph meta.link.reference punctuation.definition.string"
        ],
        "settings": {
          "foreground": "#287BDE"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.reference markup.underline.link"
        ],
        "settings": {
          "foreground": "#4a88c3",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.inline markup.underline.link"
        ],
        "settings": {
          "foreground": "#4a88c3",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.reference string.other.link.description.title"
        ],
        "settings": {
          "foreground": "#808080",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.link.reference string.other.link.title",
          "text.html.markdown meta.reference.link.inline",
          "text.html.markdown meta.reference.link constant.other"
        ],
        "settings": {
          "foreground": "#4a88c3"
        }
      },
      {
        "scope": [
          "text.html.markdown punctuation.definition.bold",
          "text.html.markdown punctuation.definition.italic",
          "text.html.markdown punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#af7353"
        }
      },
      {
        "scope": [
          "text.html.markdown markup.fenced_code.block",
          "text.html.markdown markup.raw.block",
          "text.html.markdown markup.inline.raw"
        ],
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.statement.command.shell"
        ],
        "settings": {
          "foreground": "#6D9CBE"
        }
      },
      {
        "scope": [
          "text.html.markdown meta.statement.command.name.shell",
          "text.html.markdown support.function.builtin.shell"
        ],
        "settings": {
          "foreground": "#917747"
        }
      },
      {
        "scope": [
          "punctuation.definition.markdown",
          "punctuation.definition.list.begin.markdown",
          "punctuation.definition.heading.markdown",
          "punctuation.definition.link.title.begin.markdown",
          "punctuation.definition.link.title.end.markdown",
          "punctuation.definition.metadata.markdown",
          "punctuation.definition.link.description.begin.markdown",
          "punctuation.definition.link.description.end.markdown",
          "fenced_code.block.language.markdown",
          "punctuation.definition.table.markdown",
          "punctuation.separator.table.markdown",
          "text.html.markdown meta.separator.markdown",
          "constant.character.escape.markdown"
        ],
        "settings": {
          "foreground": "#af7353"
        }
      },
      {
        "scope": [
          "text.html.markdown markup.quote",
          "text.html.markdown markup.quote meta.paragraph",
          "text.html.markdown markup.quote heading"
        ],
        "settings": {
          "foreground": "#6A8759",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "text.html.markdown beginning.punctuation.definition.quote"
        ],
        "settings": {
          "foreground": "#608b4e"
        }
      },
      {
        "scope": [
          "text.html.markdown beginning.punctuation.definition.list"
        ],
        "settings": {
          "foreground": "#6796e6"
        }
      },
      {
        "scope": [
          "markup.heading.restructuredtext"
        ],
        "settings": {
          "foreground": "#6897BB"
        }
      },
      {
        "scope": [
          "support.directive.restructuredtext",
          "punctuation.separator.key-value.restructuredtext",
          "meta.link.footnote.def.restructuredtext constant.other.footnote.link.restructuredtext",
          "entity.name.tag.restructuredtext",
          "markup.other.command.restructuredtext"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.shell support.function.builtin",
          "source.shell keyword",
          "source.shell punctuation.definition.subshell.single",
          "source.shell punctuation.separator.statement.background",
          "source.shell punctuation.definition.string.heredoc.delimiter",
          "source.shell punctuation.definition.variable.shell"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.shell meta.function entity.name.function"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.shell entity.name.command",
          "source.shell punctuation.definition.evaluation.backticks"
        ],
        "settings": {
          "foreground": "#C57633"
        }
      },
      {
        "scope": [
          "source.shell variable.other.normal"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "JSON keys",
        "scope": [
          "source.json meta.structure.dictionary support.type.property-name"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "name": "JSON strings",
        "scope": [
          "source.json string.quoted.double"
        ],
        "settings": {
          "foreground": "#6A8759"
        }
      },
      {
        "name": "JSON punctuation",
        "scope": [
          "source.json constant.language",
          "source.json constant.character.escape"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "name": "JSON comments",
        "scope": [
          "source.json comment.block",
          "source.json comment.block.documentation"
        ],
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "name": "JSON strings",
        "scope": [
          "source.json string.quoted.double"
        ],
        "settings": {
          "foreground": "#6A8759"
        }
      },
      {
        "scope": [
          "source.json constant.character.escape.js"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.js string.regexp"
        ],
        "settings": {
          "foreground": "#9876AA",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.js keyword.operator.new.js",
          "source.js keyword.operator.expression.js",
          "source.js keyword.operator.cast.js",
          "source.js keyword.operator.sizeof.js"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "name": "Javascript storage types",
        "scope": [
          "source.js storage.type.class",
          "source.js storage.type.interface"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "name": "Javascript decorators",
        "scope": [
          "source.js meta.decorator entity.name.function",
          "source.js punctuation.decorator"
        ],
        "settings": {
          "foreground": "#BBB529"
        }
      },
      {
        "scope": [
          "entity.name.function.js",
          "source.js meta.function meta.definition.function.js entity.name.function",
          "source.js meta.function.expression.js entity.name.function"
        ],
        "settings": {
          "foreground": "#4784b8"
        }
      },
      {
        "scope": [
          "source.js variable.other.property"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "source.js meta.object.member variable.other.property",
          "source.js variable.other.object.property"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "name": "Javascript strings",
        "scope": [
          "source.js string.quoted.single",
          "source.js string.quoted.double"
        ],
        "settings": {
          "foreground": "#6A8759"
        }
      },
      {
        "scope": [
          "source.powershell keyword.control",
          "source.powershell storage.type",
          "source.powershell support.variable.automatic"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.powershell support.variable.automatic variable.other.member"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "source.powershell entity.name.function",
          "source.powershell support.function"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "scope": [
          "source.batchfile keyword.control.repeat",
          "source.batchfile keyword.control.statement",
          "source.batchfile keyword.control.conditional",
          "source.batchfile keyword.command",
          "source.batchfile keyword.operator.at",
          "source.batchfile keyword.operator.logical",
          "source.batchfile keyword.operator.comparison",
          "source.batchfile keyword.operator.assignment",
          "source.batchfile keyword.operator.arithmetic",
          "source.batchfile keyword.operator.redirection",
          "source.batchfile keyword.other.special-method"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.batchfile keyword.other.special-method"
        ],
        "settings": {
          "foreground": "#ad9665"
        }
      },
      {
        "scope": [
          "source.batchfile keyword.command.rem"
        ],
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": [
          "source.reg entity.name.function.section.delete entity.section",
          "source.reg entity.name.function.section.delete punctuation.definition.section",
          "source.reg keyword.operator.arithmetic.minus"
        ],
        "settings": {
          "foreground": "#BBB529"
        }
      },
      {
        "scope": [
          "source.reg entity.name.function.section.add entity.section",
          "source.reg entity.name.function.section.add punctuation.definition.section"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.reg keyword.control.import",
          "source.reg punctuation.definition.equals"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "source.ini entity.name.section"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.ini keyword"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "source.toml keyword.key",
          "source.toml entity.other",
          "support.type.property-name.toml"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "support.type.property-name.table.toml",
          "support.type.property-name.array.toml"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.toml string.quoted.single.basic.line"
        ],
        "settings": {
          "foreground": "#5B9C71"
        }
      },
      {
        "scope": [
          "source.toml constant.character.escape"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.yaml string.unquoted entity.name.tag"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.yaml entity.name",
          "source.yaml variable.other"
        ],
        "settings": {
          "foreground": "#E8BF6A"
        }
      },
      {
        "scope": [
          "source.yaml comment.line"
        ],
        "settings": {
          "foreground": "#4a6f59"
        }
      },
      {
        "name": "Typescript punctuation",
        "scope": [
          "source.ts punctuation.separator.comma",
          "source.ts punctuation.terminator.statement"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "name": "Typescript builtins",
        "scope": [
          "source.ts storage.type",
          "source.ts storage.modifier",
          "source.ts keyword.control",
          "source.ts keyword.operator.expression",
          "source.ts keyword.operator.new"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "name": "Typescript decorators",
        "scope": [
          "source.ts punctuation.decorator",
          "source.ts meta.decorator entity.name.function"
        ],
        "settings": {
          "foreground": "#BBB529"
        }
      },
      {
        "name": "Typescript class members",
        "scope": [
          "source.ts meta.class variable.other.object.property",
          "source.ts meta.class variable.other.property",
          "source.ts meta.class variable.object.property",
          "source.ts meta.class variable.other.property"
        ],
        "settings": {
          "foreground": "#9876AA",
          "fontStyle": ""
        }
      },
      {
        "name": "Typescript variables",
        "scope": [
          "source.ts meta.class variable.other.object.property",
          "source.ts meta.class variable.other.property",
          "source.ts meta.class variable.object.property",
          "source.ts meta.class variable.other.property"
        ],
        "settings": {
          "foreground": "#9876AA",
          "fontStyle": ""
        }
      },
      {
        "name": "Typescript function names",
        "scope": [
          "source.ts meta.function-call entity.name.function",
          "source.ts meta.definition.method entity.name.function",
          "source.ts meta.definition.function entity.name.function",
          "source.ts meta.function entity.name.function",
          "source.ts meta.definition.variable entity.name.function"
        ],
        "settings": {
          "foreground": "#ad9665",
          "fontStyle": ""
        }
      },
      {
        "scope": "invalid",
        "settings": {
          "foreground": "#FA6675"
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": "#6796e6"
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": "#cd9731"
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "#f44747"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": "#b267e6"
        }
      },
      {
        "scope": [
          "string.regexp",
          "string.regexp constant.character",
          "string.regexp storage.type.string",
          "string.regexp punctuation.definition.string.begin",
          "string.regexp punctuation.definition.string.end"
        ],
        "settings": {
          "foreground": "#d16969",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string.regexp entity.name.tag"
        ],
        "settings": {
          "foreground": "#F23B7A",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string.regexp support.other.parenthesis",
          "string.regexp punctuation.character.set"
        ],
        "settings": {
          "foreground": "#E8BF6A",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string.regexp keyword.operator"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "string.regexp keyword.operator.quantifier"
        ],
        "settings": {
          "foreground": "#6897BB",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.env string.quoted constant.character.escape"
        ],
        "settings": {
          "foreground": "#6a8759"
        }
      },
      {
        "scope": [
          "source.env string.quoted string.interpolated"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.dockerfile keyword.other.special-method",
          "source.dockerfile punctuation.separator.statement.and.shell"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.dockerfile variable"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "entity.name.image.stage.dockerfile"
        ],
        "settings": {
          "foreground": "#3e83c9"
        }
      },
      {
        "scope": [
          "constant.numeric.version.dockerfile"
        ],
        "settings": {
          "foreground": "#279CB2"
        }
      },
      {
        "scope": [
          "source.dockerfile punctuation.definition.variable variable",
          "punctuation.separator.version.dockerfile",
          "punctuation.separator.version.dockerfile constant.numeric.version.dockerfile"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.dockerfile entity.name.command.shell"
        ],
        "settings": {
          "foreground": "#b77651"
        }
      },
      {
        "scope": "support.function.git-rebase",
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": "constant.sha.git-rebase",
        "settings": {
          "foreground": "#b5cea8"
        }
      },
      {
        "scope": [
          "source.makefile support",
          "source.makefile keyword",
          "source.makefile constant.character.escape.continuation",
          "source.makefile punctuation.definition.variable"
        ],
        "settings": {
          "foreground": "#a47f60"
        }
      },
      {
        "scope": [
          "punctuation.separator.key-value.makefile",
          "source.makefile punctuation.separator.key-value",
          "keyword.control.@.makefile",
          "source.makefile variable",
          "variable.language.makefile"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.makefile entity.name.function.target"
        ],
        "settings": {
          "foreground": "#418fe0"
        }
      },
      {
        "scope": [
          "source.makefile meta.scope.target"
        ],
        "settings": {
          "foreground": "#a1ac56"
        }
      },
      {
        "scope": "source.makefile comment",
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.control.import.go",
          "keyword.const.go",
          "keyword.type.go",
          "keyword.interface.go",
          "keyword.function.go",
          "keyword.var.go",
          "keyword.control.go",
          "keyword.struct.go",
          "keyword.channel.go",
          "keyword.map.go",
          "source.go keyword.package",
          "source.go keyword.control.import",
          "source.go keyword.const",
          "source.go keyword.type",
          "source.go keyword.interface",
          "source.go keyword.function",
          "source.go keyword.var",
          "source.go keyword.control",
          "source.go keyword.struct",
          "source.go keyword.channel",
          "source.go keyword.map"
        ],
        "settings": {
          "foreground": "#b77651"
        }
      },
      {
        "scope": [
          "entity.name.type.package.go",
          "source.go entity.name.type.package",
          "variable.other.import.go",
          "source.go variable.other.import"
        ],
        "settings": {
          "foreground": "#94a261"
        }
      },
      {
        "scope": [
          "constant.other.placeholder.go",
          "source.go constant.other.placeholder"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "entity.name.function.go",
          "source.go entity.name.function"
        ],
        "settings": {
          "foreground": "#3e83c9"
        }
      },
      {
        "scope": [
          "entity.name.function.support.go",
          "source.go entity.name.function.support"
        ],
        "settings": {
          "foreground": "#9d865a"
        }
      },
      {
        "scope": [
          "storage.type.byte.go",
          "storage.type.numeric.go",
          "storage.type.error.go",
          "storage.type.boolean.go",
          "storage.type.rune.go",
          "storage.type.string.go",
          "entity.name.function.support.builtin.go",
          "entity.name.type.any.go",
          "constant.language.null.go",
          "constant.language.boolean.go",
          "source.go storage.type.byte",
          "source.go storage.type.numeric",
          "source.go storage.type.error",
          "source.go storage.type.boolean",
          "source.go storage.type.rune",
          "source.go storage.type.string",
          "source.go entity.name.function.support.builtin",
          "source.go entity.name.type.any",
          "source.go constant.language.null",
          "source.go constant.language.boolean"
        ],
        "settings": {
          "foreground": "#b6632b"
        }
      },
      {
        "scope": [
          "entity.name.type.go",
          "source.go entity.name.type"
        ],
        "settings": {
          "foreground": "#5996a3"
        }
      },
      {
        "scope": [
          "constant.numeric.hexadecimal.go",
          "keyword.other.unit.hexadecimal.go",
          "constant.numeric.binary.go",
          "keyword.other.unit.binary.go",
          "source.go constant.numeric.hexadecimal",
          "source.go keyword.other.unit.hexadecimal",
          "source.go constant.numeric.binary",
          "source.go keyword.other.unit.binary"
        ],
        "settings": {
          "foreground": "#279CB2"
        }
      },
      {
        "scope": [
          "source.go constant.character.escape"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "go.mod keyword"
        ],
        "settings": {
          "foreground": "#ad734d"
        }
      },
      {
        "scope": [
          "go.mod constant.language",
          "go.sum constant.language"
        ],
        "settings": {
          "foreground": "#27989d"
        }
      },
      {
        "scope": [
          "source.groovy constant",
          "constant.language.groovy"
        ],
        "settings": {
          "foreground": "#ae7396",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "meta.method-call.groovy meta.method.groovy",
          "source.groovy meta.method-call meta.method",
          "source.groovy entity.name.function.java"
        ],
        "settings": {
          "foreground": "#3e83c9"
        }
      },
      {
        "scope": [
          "source.groovy",
          "source.groovy punctuation",
          "source.groovy keyword.operator"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.groovy storage",
          "source.groovy keyword"
        ],
        "settings": {
          "foreground": "#b77853"
        }
      },
      {
        "scope": [
          "comment.line.double-slash.groovy",
          "punctuation.definition.comment.groovy",
          "source.groovy comment.line.double-slash",
          "source.groovy punctuation.definition.comment"
        ],
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": [
          "source.groovy support.function"
        ],
        "settings": {
          "foreground": "#9d865a"
        }
      },
      {
        "scope": [
          "source.groovy constant.character.escape"
        ],
        "settings": {
          "foreground": "#c48d69"
        }
      },
      {
        "scope": [
          "source.http keyword.control",
          "source.http keyword.other"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.http http.filevariable string.other"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.http http.headers entity.name.tag"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "source.http http.headers keyword.other"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.rst markup.heading"
        ],
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": [
          "source.rst keyword"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.rst markup.italic"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "source.rst markup.bold"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "source.rst entity.name.tag"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "text.log log.debug"
        ],
        "settings": {
          "foreground": "#299999"
        }
      },
      {
        "scope": [
          "text.log log.info"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "text.log log.warning"
        ],
        "settings": {
          "foreground": "#E0BB65"
        }
      },
      {
        "scope": [
          "text.log log.error"
        ],
        "settings": {
          "foreground": "#F75464"
        }
      },
      {
        "scope": [
          "text.log log.date"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "text.log constant.language"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.pip-requirements entity.name.class"
        ],
        "settings": {
          "foreground": "#b17655"
        }
      },
      {
        "scope": [
          "source.pip-requirements constant.numeric"
        ],
        "settings": {
          "foreground": "#5a955f"
        }
      },
      {
        "scope": [
          "source.rust meta.attribute"
        ],
        "settings": {
          "foreground": "#B3AE60"
        }
      },
      {
        "scope": [
          "source.rust keyword",
          "source.rust storage",
          "source.rust entity.name.type.numeric",
          "source.rust entity.name.type.primitive",
          "source.rust punctuation.definition.interpolation"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.rust keyword.operator",
          "source.rust meta.interpolation"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.rust constant",
          "source.rust entity.name.type.option"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "source.rust string.quoted"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.rust meta.function.definition entity.name.function"
        ],
        "settings": {
          "foreground": "#57AAF7"
        }
      },
      {
        "scope": [
          "source.rust entity.name.function.macro",
          "source.rust keyword.operator.macro.dollar",
          "source.rust meta.macro variable.other.metavariable.specifier"
        ],
        "settings": {
          "foreground": "#FFC66D"
        }
      },
      {
        "scope": [
          "source.rust comment.line.documentation"
        ],
        "settings": {
          "foreground": "#5F826B"
        }
      },
      {
        "scope": [
          "source.rust entity.name.type.lifetime",
          "source.rust punctuation.definition.lifetime"
        ],
        "settings": {
          "foreground": "#20999D"
        }
      },
      {
        "scope": [
          "comment.line.documentation.rust"
        ],
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": [
          "text.csv rainbow1"
        ],
        "settings": {
          "foreground": "#BABABA"
        }
      },
      {
        "scope": [
          "text.csv keyword.rainbow2"
        ],
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": [
          "text.csv entity.name.function.rainbow3"
        ],
        "settings": {
          "foreground": "#3d85d6"
        }
      },
      {
        "scope": [
          "text.csv comment.rainbow4"
        ],
        "settings": {
          "foreground": "#00A3A3"
        }
      },
      {
        "scope": [
          "text.csv string.rainbow5"
        ],
        "settings": {
          "foreground": "#5C962C"
        }
      },
      {
        "scope": [
          "text.csv variable.parameter.rainbow6"
        ],
        "settings": {
          "foreground": "#A771BF"
        }
      },
      {
        "scope": [
          "text.csv constant.numeric.rainbow7"
        ],
        "settings": {
          "foreground": "#F0524F"
        }
      },
      {
        "scope": [
          "text.csv entity.name.type.rainbow8"
        ],
        "settings": {
          "foreground": "#A68A0D"
        }
      },
      {
        "scope": [
          "text.csv markup.bold.rainbow9"
        ],
        "settings": {
          "foreground": "#FF941A"
        }
      },
      {
        "scope": [
          "text.csv invalid.rainbow10"
        ],
        "settings": {
          "foreground": "#955AE0"
        }
      },
      {
        "scope": [
          "source.css.less keyword"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.css.less string.quoted"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.css.less support.other.variable"
        ],
        "settings": {
          "foreground": "#D0D0FF"
        }
      },
      {
        "scope": [
          "source.css.less entity.other.attribute-name",
          "source.css.less support.unicode-range",
          "source.css.less support.unicode-range constant.codepoint-range",
          "source.css.less entity.name.tag"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "source.css.less keyword.operator.arithmetic",
          "source.css.less entity.other.attribute-name.pseudo-element punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.css.less constant.other.color"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.css.less constant.numeric"
        ],
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": [
          "source.css.scss comment"
        ],
        "settings": {
          "foreground": "#BC9455"
        }
      },
      {
        "scope": [
          "source.css.scss variable"
        ],
        "settings": {
          "foreground": "#6D9CBE"
        }
      },
      {
        "scope": [
          "source.css.scss keyword"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.css.scss support.constant",
          "source.css.scss entity.name.tag.css",
          "source.css.scss entity.name.function",
          "source.css.scss entity.other.attribute-name",
          "source.css.scss entity.name.tag.reference"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "source.css.scss keyword.operator.arithmetic",
          "source.css.scss punctuation.terminator.rule.css",
          "source.css.scss entity.other.attribute-name punctuation"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.css.scss support.constant.color"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.css.scss keyword.control.at-rule.mixin"
        ],
        "settings": {
          "foreground": "#D0D0FF"
        }
      },
      {
        "scope": [
          "source.sass comment"
        ],
        "settings": {
          "foreground": "#BC9455"
        }
      },
      {
        "scope": [
          "source.sass variable"
        ],
        "settings": {
          "foreground": "#6D9CBE"
        }
      },
      {
        "scope": [
          "source.sass keyword"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.sass keyword.control.unit"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.sass constant.character"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.sass constant.language.color"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.sass entity.other.attribute-name",
          "source.sass entity.name.tag.css",
          "source.sass entity.other.attribute-selector",
          "source.sass support.function.name",
          "source.sass entity.other.inherited-class.placeholder-selector"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "source.sass keyword.control.unit"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.puppet storage.type",
          "source.puppet keyword"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.puppet variable.other",
          "source.puppet punctuation.section.embedded.begin",
          "source.puppet punctuation.section.embedded.end"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "source.asm keyword"
        ],
        "settings": {
          "foreground": "#CDA3E6"
        }
      },
      {
        "scope": [
          "source.asm entity.directive",
          "source.asm entity.name.section"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.asm entity.name.function"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "source.asm constant",
          "source.asm constant.numeric",
          "source.asm constant.language"
        ],
        "settings": {
          "foreground": "#2a9d9d"
        }
      },
      {
        "scope": [
          "source.proto keyword",
          "source.proto constant",
          "source.proto storage.modifier",
          "constant.language.proto"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.proto string",
          "string.quoted.double.proto"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.proto storage.type"
        ],
        "settings": {
          "foreground": "#CC7832"
        }
      },
      {
        "scope": [
          "source.dart keyword",
          "source.dart storage.type.primitive",
          "source.dart storage.modifier"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.dart string"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.dart keyword.operator.assignment",
          "source.dart keyword.operator.arithmetic",
          "source.dart comment.block.documentation variable.name",
          "source.dart keyword.operator.ternary",
          "source.dart keyword.operator"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.dart entity.name.function"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.dart storage.type.annotation"
        ],
        "settings": {
          "foreground": "#B3AE60"
        }
      },
      {
        "scope": [
          "source.dart support.class"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "source.php keyword.control",
          "source.php keyword.other",
          "source.php storage.type",
          "source.php storage.modifier",
          "source.php support.function.construct"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.php variable",
          "source.php variable.language.this"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "source.php string.unquoted.heredoc"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "source.php keyword.operator.heredoc",
          "source.php punctuation.definition.arguments.begin.bracket",
          "source.php punctuation.definition.arguments.end.bracket",
          "source.php string.unquoted.heredoc punctuation.definition"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.php meta.attribute"
        ],
        "settings": {
          "foreground": "#B3AE60"
        }
      },
      {
        "scope": [
          "source.php constant.other",
          "source.php constant.language"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "source.php comment.block.documentation keyword.other"
        ],
        "settings": {
          "foreground": "#67A37C"
        }
      },
      {
        "scope": [
          "source.php entity.name.function",
          "source.php support.function.constructor"
        ],
        "settings": {
          "foreground": "#57AAF7"
        }
      },
      {
        "scope": [
          "source.php entity.name.variable.parameter"
        ],
        "settings": {
          "foreground": "#467CDA"
        }
      },
      {
        "scope": [
          "source.php constant.numeric"
        ],
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": [
          "source.php variable.other.property"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "source.php string.interpolated"
        ],
        "settings": {
          "foreground": "#A5C25C"
        }
      },
      {
        "scope": "meta.struct-tag.pair.go support.type.property-name.json",
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": "meta.struct-tag.pair.go punctuation.separator.dictionary.key-value.json",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "meta.struct-tag.pair.go string.quoted.double.json",
        "settings": {
          "foreground": "#6A8759"
        }
      },
      {
        "scope": "entity.name.type.dbml",
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": "keyword.dbml",
        "settings": {
          "foreground": "#C48D69"
        }
      },
      {
        "scope": "source.c keyword.control.directive",
        "settings": {
          "foreground": "#B3AE60"
        }
      },
      {
        "scope": "source.c string.quoted",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "source.c entity.name.function.preprocessor",
        "settings": {
          "foreground": "#908B25"
        }
      },
      {
        "scope": [
          "source.c keyword",
          "source.c storage.type",
          "source.c storage.modifier",
          "source.c variable.other.object.access"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "source.c variable.other.object.access",
        "settings": {
          "foreground": "#9373A5"
        }
      },
      {
        "scope": [
          "source.c keyword.operator",
          "source.c storage.modifier.array.bracket.square"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.c comment.block.documentation"
        ],
        "settings": {
          "foreground": "#5F826B"
        }
      },
      {
        "scope": [
          "source.c comment.block.documentation storage.type.class.doxygen"
        ],
        "settings": {
          "foreground": "#5F826B",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "source.c comment.block.documentation variable.parameter"
        ],
        "settings": {
          "foreground": "#5F826B",
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "source.c entity.name.function"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.c keyword.operator.bitwise.shift"
        ],
        "settings": {
          "foreground": "#5F8C8A"
        }
      },
      {
        "scope": "source.cpp keyword.control.directive",
        "settings": {
          "foreground": "#B3AE60"
        }
      },
      {
        "scope": "source.cpp string.quoted",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "source.cpp entity.name.function.preprocessor",
        "settings": {
          "foreground": "#908B25"
        }
      },
      {
        "scope": [
          "source.cpp keyword",
          "source.cpp storage.type",
          "source.cpp storage.modifier",
          "source.cpp variable.other.object.access"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.cpp variable.other.object.access",
          "source.cpp variable.other.property"
        ],
        "settings": {
          "foreground": "#9373A5"
        }
      },
      {
        "scope": "source.cpp variable.other.property",
        "settings": {
          "foreground": "#9373A5"
        }
      },
      {
        "scope": [
          "source.cpp keyword.operator",
          "source.cpp storage.modifier.array.bracket.square",
          "source.cpp storage.modifier.reference"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.cpp comment.block.documentation"
        ],
        "settings": {
          "foreground": "#5F826B"
        }
      },
      {
        "scope": [
          "source.cpp comment.block.documentation storage.type.class.doxygen"
        ],
        "settings": {
          "foreground": "#5F826B",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "source.cpp comment.block.documentation variable.parameter"
        ],
        "settings": {
          "foreground": "#5F826B",
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "source.cpp entity.name.function"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.cpp keyword.operator.bitwise.shift"
        ],
        "settings": {
          "foreground": "#5F8C8A"
        }
      },
      {
        "scope": [
          "source.cpp entity.name.namespace",
          "source.cpp entity.name.scope-resolution",
          "source.cpp entity.name.type.struct",
          "source.cpp entity.name.type.class"
        ],
        "settings": {
          "foreground": "#B5B6E3"
        }
      },
      {
        "scope": [
          "source.cpp constant.numeric",
          "source.cpp keyword.other.unit.suffix",
          "source.cpp keyword.other.suffix.literal.built-in"
        ],
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": [
          "source.java keyword",
          "source.java storage.modifier",
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.java storage.modifier.import",
          "source.java keyword.operator.assignment",
          "source.java keyword.operator.arithmetic",
          "source.java keyword.operator.increment-decrement"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.java comment.block.javadoc"
        ],
        "settings": {
          "foreground": "#5F826B",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "source.java comment.block.javadoc keyword"
        ],
        "settings": {
          "foreground": "#67A37C"
        }
      },
      {
        "scope": [
          "source.java comment.block.javadoc variable"
        ],
        "settings": {
          "foreground": "#ABADB3",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.java storage.type.annotation",
          "source.java punctuation.definition.annotation"
        ],
        "settings": {
          "foreground": "#B3AE60"
        }
      },
      {
        "scope": [
          "source.java storage.type"
        ],
        "settings": {
          "foreground": "#16BAAC"
        }
      },
      {
        "scope": [
          "source.java entity.name.function"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.java variable.other.object.property",
          "source.java constant.other.enum"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "source.kotlin keyword",
          "source.kotlin storage.modifier",
          "source.kotlin support.class",
          "source.kotlin storage.type"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.kotlin comment.block"
        ],
        "settings": {
          "foreground": "#5F826B"
        }
      },
      {
        "scope": [
          "source.kotlin storage.type.annotation"
        ],
        "settings": {
          "foreground": "#B3AE60"
        }
      },
      {
        "scope": [
          "source.kotlin keyword.operator",
          "source.kotlin entity.string.template.element"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "source.kotlin entity.name.function"
        ],
        "settings": {
          "foreground": "#56A8F5"
        }
      },
      {
        "scope": [
          "source.kotlin support.function"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "source.kotlin punctuation.definition.keyword",
          "source.kotlin punctuation.section.block"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "source.cs entity.name.function"
        ],
        "settings": {
          "foreground": "#56a8f5",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.cs entity.name.type"
        ],
        "settings": {
          "foreground": "#9876AA"
        }
      },
      {
        "scope": [
          "source.cs variable.other.object.property",
          "source.cs entity.name.variable.property"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "source.cs storage.modifier",
          "source.cs storage.type",
          "source.cs keyword.type",
          "source.cs keyword.control"
        ],
        "settings": {
          "foreground": "#c48d69",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "text.tex.latex comment"
        ],
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": [
          "text.tex.latex keyword",
          "text.tex.latex support.function"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "text.tex.latex support.class.math.block"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "text.tex.latex support.class.math.block constant"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      }
    ],
    "semanticTokenColors": {
      "namespace": "#BCBEC4",
      "class": "#BCBEC4",
      "struct": "#BCBEC4",
      "interface": "#BCBEC4",
      "enum": "#BCBEC4",
      "enumMember": "#C77DBB",
      "typeParameter": "#16BAAC",
      "type": "#BCBEC4",
      "type.defaultLibrary": "#2AACB8",
      "class.defaultLibrary": "#2AACB8",
      "function": "#57AAF7",
      "function.defaultLibrary": "#57AAF7",
      "method": "#57AAF7",
      "method.static": {
        "fontStyle": "italic"
      },
      "decorator": "#B3AE60",
      "macro": "#B3AE60",
      "variable": "#BCBEC4",
      "variable.readonly": "#9876AA",
      "variable.readonly.defaultLibrary": "#9876AA",
      "variable.defaultLibrary": "#9876AA",
      "parameter": "#BCBEC4",
      "property": "#C77DBB",
      "property.readonly": "#C77DBB",
      "property.static": {
        "fontStyle": "italic"
      },
      "field": "#C77DBB",
      "selfParameter": "#94558D",
      "builtinConstant": "#9876AA",
      "keyword": "#CF8E6D",
      "modifier": "#CF8E6D",
      "operator": "#BCBEC4",
      "number": "#56A8F5",
      "string": "#6AAB73",
      "regexp": "#E8BF6A",
      "comment": "#7A7E85",
      "*.deprecated": {
        "strikethrough": true
      },
      "*.abstract": {
        "fontStyle": "italic"
      },
      "*.static": {
        "fontStyle": "italic"
      },
      "*.documentation": "#5F826B"
    }
  },
  {
    "id": "jetbrains-light",
    "label": "JetBrains Light",
    "name": "JetBrains Light",
    "type": "light",
    "colors": {
      "foreground": "#6c707e",
      "focusBorder": "#3574f0",
      "selection.background": "#d4e2ff",
      "scrollbar.shadow": "#dddddd",
      "activityBar.foreground": "#47484d",
      "activityBar.background": "#f7f8fa",
      "activityBar.inactiveForeground": "#6c707e",
      "activityBarBadge.foreground": "#ffffff",
      "activityBarBadge.background": "#3574f0",
      "activityBar.border": "#ebecf0",
      "activityBar.activeBackground": "#f7f8fa",
      "sideBar.background": "#f7f8fa",
      "sideBar.foreground": "#2b202d",
      "sideBarSectionHeader.background": "#00000000",
      "sideBarSectionHeader.foreground": "#000000",
      "sideBarSectionHeader.border": "#61616130",
      "sideBarTitle.foreground": "#000000",
      "sideBar.border": "#ebecf0",
      "list.inactiveSelectionBackground": "#dfe1e5",
      "list.inactiveSelectionForeground": "#182040",
      "list.hoverBackground": "#dfe1e5",
      "list.hoverForeground": "#182040",
      "list.activeSelectionBackground": "#d4e2ff",
      "list.activeSelectionForeground": "#182040",
      "tree.indentGuidesStroke": "#ebecf0",
      "list.dropBackground": "#d4e2ff",
      "list.highlightForeground": "#3574f0",
      "list.focusBackground": "#d4e2ff",
      "list.focusForeground": "#182040",
      "listFilterWidget.background": "#efc1ad",
      "listFilterWidget.outline": "#00000000",
      "listFilterWidget.noMatchesOutline": "#be1100",
      "statusBar.foreground": "#ffffff",
      "statusBar.background": "#007acc",
      "statusBarItem.hoverBackground": "#ffffff1f",
      "statusBar.debuggingBackground": "#cc6633",
      "statusBar.debuggingForeground": "#ffffff",
      "statusBar.noFolderBackground": "#68217a",
      "statusBar.noFolderForeground": "#ffffff",
      "statusBarItem.remoteBackground": "#16825d",
      "statusBarItem.remoteForeground": "#ffffff",
      "titleBar.activeBackground": "#dddddd",
      "titleBar.activeForeground": "#333333",
      "titleBar.inactiveBackground": "#dddddd99",
      "titleBar.inactiveForeground": "#33333399",
      "titleBar.border": "#00000000",
      "menubar.selectionForeground": "#1b1b1b",
      "menubar.selectionBackground": "#0000001a",
      "menu.foreground": "#1b1b1b",
      "menu.background": "#ffffff",
      "menu.selectionForeground": "#ffffff",
      "menu.selectionBackground": "#d4e2ff",
      "menu.selectionBorder": "#00000000",
      "menu.separatorBackground": "#edeef1",
      "menu.border": "#c9cbd1",
      "button.background": "#3574f0",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#0062a3",
      "button.secondaryForeground": "#000000",
      "button.secondaryBackground": "#dfe1e5",
      "button.secondaryHoverBackground": "#c4cad3",
      "input.background": "#ffffff",
      "input.border": "#00000000",
      "input.foreground": "#1a2a3e",
      "inputOption.activeBackground": "#0090f133",
      "inputOption.activeBorder": "#007acc00",
      "inputOption.activeForeground": "#1a2a3e",
      "input.placeholderForeground": "#767676",
      "textLink.foreground": "#006ab1",
      "editor.background": "#ffffff",
      "editor.foreground": "#000000",
      "editorLineNumber.foreground": "#aeb3c2",
      "editorCursor.foreground": "#000000",
      "editorCursor.background": "#ffffff",
      "editor.selectionBackground": "#a8d4fc",
      "editor.inactiveSelectionBackground": "#cbd7e380",
      "editorWhitespace.foreground": "#33333333",
      "editor.selectionHighlightBackground": "#d2cdf866",
      "editor.selectionHighlightBorder": "#edebfc",
      "editor.findMatchBackground": "#f9aa0081",
      "editor.findMatchBorder": "#000000",
      "editor.findMatchHighlightBackground": "#f9aa0081",
      "editor.findMatchHighlightBorder": "#ffffff00",
      "editor.findRangeHighlightBackground": "#b4b4b44d",
      "editor.findRangeHighlightBorder": "#ffffff00",
      "editor.rangeHighlightBackground": "#fdff0033",
      "editor.rangeHighlightBorder": "#ffffff00",
      "editor.hoverHighlightBackground": "#add6ff26",
      "editor.wordHighlightStrongBackground": "#d2cdf866",
      "editor.wordHighlightBackground": "#57575740",
      "editor.lineHighlightBackground": "#ffffff0A",
      "editor.lineHighlightBorder": "#eeeeee",
      "editorLineNumber.activeForeground": "#75799a",
      "editorLink.activeForeground": "#315fbd",
      "editorIndentGuide.background1": "#d3d3d3",
      "editorIndentGuide.activeBackground1": "#939393",
      "editorRuler.foreground": "#d3d3d3",
      "editorBracketMatch.background": "#0064001a",
      "editorBracketMatch.border": "#b9b9b9",
      "editor.foldBackground": "#add6ff4d",
      "editorOverviewRuler.background": "#25252500",
      "editorOverviewRuler.border": "#7f7f7f4d",
      "editorError.foreground": "#da4337",
      "editorError.background": "#B73A3400",
      "editorError.border": "#ffffff00",
      "editorWarning.foreground": "#e9a700",
      "editorWarning.background": "#A9904000",
      "editorWarning.border": "#ffffff00",
      "editorInfo.foreground": "#75beff",
      "editorInfo.background": "#4490BF00",
      "editorInfo.border": "#4490BF00",
      "editorGutter.background": "#ffffff",
      "editorGutter.modifiedBackground": "#66afe0",
      "editorGutter.addedBackground": "#81b88b",
      "editorGutter.deletedBackground": "#ca4b51",
      "editorGutter.foldingControlForeground": "#424242",
      "editorCodeLens.foreground": "#999999",
      "editorGroup.border": "#e7e7e7",
      "diffEditor.insertedTextBackground": "#9bb95533",
      "diffEditor.removedTextBackground": "#ff000033",
      "diffEditor.border": "#d7d7d7",
      "panel.background": "#ffffff",
      "panel.border": "#80808059",
      "panelTitle.activeBorder": "#4d84f2",
      "panelTitle.activeForeground": "#424242",
      "panelTitle.inactiveForeground": "#424242bf",
      "badge.background": "#c4c4c4",
      "badge.foreground": "#333333",
      "terminal.foreground": "#333333",
      "terminal.selectionBackground": "#a6d2ff80",
      "terminalCursor.background": "#ffffff",
      "terminalCursor.foreground": "#202020",
      "terminal.border": "#80808059",
      "terminal.ansiBlack": "#000000",
      "terminal.ansiBlue": "#0451a5",
      "terminal.ansiBrightBlack": "#666666",
      "terminal.ansiBrightBlue": "#0451a5",
      "terminal.ansiBrightCyan": "#0598bc",
      "terminal.ansiBrightGreen": "#14ce14",
      "terminal.ansiBrightMagenta": "#bc05bc",
      "terminal.ansiBrightRed": "#cd3131",
      "terminal.ansiBrightWhite": "#a5a5a5",
      "terminal.ansiBrightYellow": "#b5ba00",
      "terminal.ansiCyan": "#0598bc",
      "terminal.ansiGreen": "#00bc00",
      "terminal.ansiMagenta": "#bc05bc",
      "terminal.ansiRed": "#cd3131",
      "terminal.ansiWhite": "#555555",
      "terminal.ansiYellow": "#949800",
      "breadcrumb.background": "#ffffff",
      "breadcrumb.foreground": "#616161cc",
      "breadcrumb.focusForeground": "#4e4e4e",
      "editorGroupHeader.tabsBackground": "#f3f3f3",
      "tab.activeForeground": "#333333",
      "tab.border": "#f3f3f3",
      "tab.activeBackground": "#ffffff",
      "tab.activeBorder": "#00000000",
      "tab.activeBorderTop": "#00000000",
      "tab.inactiveBackground": "#ececec",
      "tab.inactiveForeground": "#333333b3",
      "scrollbarSlider.background": "#dddddf80",
      "scrollbarSlider.hoverBackground": "#cacaccb3",
      "scrollbarSlider.activeBackground": "#cacaccd9",
      "progressBar.background": "#3574f0",
      "widget.shadow": "#00000029",
      "editorWidget.foreground": "#616161",
      "editorWidget.background": "#f3f3f3",
      "editorWidget.resizeBorder": "#c7c7c7",
      "pickerGroup.border": "#cccedb",
      "pickerGroup.foreground": "#0066bf",
      "debugToolBar.background": "#f3f3f3",
      "debugToolBar.border": "#d5d5d5",
      "notifications.foreground": "#616161",
      "notifications.background": "#f7f8fa",
      "notificationToast.border": "#d5d5d5",
      "notificationsErrorIcon.foreground": "#cf5b56",
      "notificationsWarningIcon.foreground": "#d9cfad",
      "notificationsInfoIcon.foreground": "#75beff",
      "notificationCenter.border": "#d5d5d5",
      "notificationCenterHeader.foreground": "#616161",
      "notificationCenterHeader.background": "#e7e7e7",
      "notifications.border": "#e7e7e7",
      "gitDecoration.addedResourceForeground": "#007f00",
      "gitDecoration.conflictingResourceForeground": "#6c6cc4",
      "gitDecoration.deletedResourceForeground": "#cd0000",
      "gitDecoration.ignoredResourceForeground": "#8e8e90",
      "gitDecoration.modifiedResourceForeground": "#a66f00",
      "gitDecoration.stageDeletedResourceForeground": "#cd0000",
      "gitDecoration.stageModifiedResourceForeground": "#a66f00",
      "gitDecoration.submoduleResourceForeground": "#00007f",
      "gitDecoration.untrackedResourceForeground": "#007f00",
      "editorMarkerNavigation.background": "#ffffff",
      "editorMarkerNavigationError.background": "#e51400",
      "editorMarkerNavigationWarning.background": "#e9a700",
      "editorMarkerNavigationInfo.background": "#75beff",
      "merge.currentHeaderBackground": "#4ac7ad80",
      "merge.currentContentBackground": "#70d3bf40",
      "merge.incomingHeaderBackground": "#4e9fff80",
      "merge.incomingContentBackground": "#70b3ff40",
      "merge.commonHeaderBackground": "#80808080",
      "merge.commonContentBackground": "#97979740",
      "editorSuggestWidget.background": "#ffffff",
      "editorSuggestWidget.border": "#b9bdc9",
      "editorSuggestWidget.foreground": "#27282e",
      "editorSuggestWidget.highlightForeground": "#4373ef",
      "editorSuggestWidget.selectedBackground": "#dfe1e5",
      "editorHoverWidget.foreground": "#27282e",
      "editorHoverWidget.background": "#ffffff",
      "editorHoverWidget.border": "#b9bdc9",
      "peekView.border": "#007acc",
      "peekViewEditor.background": "#f2f8fc",
      "peekViewEditorGutter.background": "#f2f8fc",
      "peekViewEditor.matchHighlightBackground": "#f5d802de",
      "peekViewEditor.matchHighlightBorder": "#dbc417",
      "peekViewResult.background": "#f3f3f3",
      "peekViewResult.fileForeground": "#1e1e1e",
      "peekViewResult.lineForeground": "#646465",
      "peekViewResult.matchHighlightBackground": "#ea5c004d",
      "peekViewResult.selectionBackground": "#3399ff33",
      "peekViewResult.selectionForeground": "#6c6c6c",
      "peekViewTitle.background": "#ffffff",
      "peekViewTitleDescription.foreground": "#616161e6",
      "peekViewTitleLabel.foreground": "#333333",
      "icon.foreground": "#6c707e",
      "checkbox.background": "#ffffff",
      "checkbox.foreground": "#1a2a3e",
      "checkbox.border": "#00000000",
      "dropdown.background": "#ffffff",
      "dropdown.foreground": "#1a2a3e",
      "dropdown.border": "#00000000",
      "minimapGutter.addedBackground": "#04721880",
      "minimapGutter.modifiedBackground": "#007acb99",
      "minimapGutter.deletedBackground": "#b40009b4",
      "minimap.findMatchHighlight": "#f9aa0081",
      "minimap.selectionHighlight": "#52a9f980",
      "minimap.errorHighlight": "#d00f00c8",
      "minimap.warningHighlight": "#e9a700fe",
      "minimap.background": "#ffffff",
      "sideBar.dropBackground": "#d4e2ff",
      "editorGroup.emptyBackground": "#ffffff",
      "panelSection.border": "#80808059",
      "statusBarItem.activeBackground": "#FFFFFF25",
      "settings.headerForeground": "#6c707e",
      "settings.focusedRowBackground": "#ffffff07",
      "walkThrough.embeddedEditorBackground": "#00000050",
      "breadcrumb.activeSelectionForeground": "#4e4e4e",
      "editorGutter.commentRangeForeground": "#424242",
      "debugExceptionWidget.background": "#f3f3f3",
      "debugExceptionWidget.border": "#d5d5d5",
      "commandCenter.foreground": "#47484d",
      "commandCenter.activeForeground": "#1b1b1b",
      "commandCenter.background": "#f7f8fa",
      "commandCenter.activeBackground": "#dfe1e5",
      "commandCenter.border": "#ebecf0",
      "commandCenter.activeBorder": "#3574f0",
      "commandCenter.inactiveForeground": "#6c707e",
      "commandCenter.inactiveBorder": "#ebecf0",
      "profileBadge.background": "#3574f0",
      "profileBadge.foreground": "#ffffff",
      "editorStickyScroll.background": "#ffffff",
      "editorStickyScrollHover.background": "#f3f3f3",
      "editor.linkedEditingBackground": "#548bff40",
      "editorLineNumber.dimmedForeground": "#d3d6df",
      "chat.requestBackground": "#f7f8fa",
      "chat.requestBorder": "#ebecf0",
      "chat.slashCommandBackground": "#d4e2ff",
      "chat.slashCommandForeground": "#0033B3",
      "chat.avatarBackground": "#dfe1e5",
      "chat.avatarForeground": "#47484d",
      "chat.editedFileForeground": "#a66f00",
      "inlineChat.background": "#f7f8fa",
      "inlineChat.border": "#ebecf0",
      "inlineChat.foreground": "#1a2a3e",
      "inlineChat.shadow": "#00000029",
      "inlineChatInput.background": "#ffffff",
      "inlineChatInput.border": "#b9bdc9",
      "inlineChatInput.focusBorder": "#3574f0",
      "inlineChatInput.placeholderForeground": "#767676",
      "inlineChatDiff.inserted": "#9bb95533",
      "inlineChatDiff.removed": "#ff000033",
      "notebook.editorBackground": "#ffffff",
      "notebook.cellBorderColor": "#ebecf0",
      "notebook.cellEditorBackground": "#ffffff",
      "notebook.cellHoverBackground": "#dfe3eb40",
      "notebook.cellInsertionIndicator": "#3574f0",
      "notebook.cellStatusBarItemHoverBackground": "#dfe1e5",
      "notebook.cellToolbarSeparator": "#ebecf0",
      "notebook.focusedCellBackground": "#e5f1f980",
      "notebook.focusedCellBorder": "#3574f0",
      "notebook.focusedEditorBorder": "#3574f0",
      "notebook.inactiveFocusedCellBorder": "#dfe1e5",
      "notebook.inactiveSelectedCellBorder": "#dfe1e5",
      "notebook.outputContainerBackgroundColor": "#f7f8fa",
      "notebook.outputContainerBorderColor": "#ebecf0",
      "notebook.selectedCellBackground": "#dfeef866",
      "notebook.selectedCellBorder": "#3574f0",
      "notebook.symbolHighlightBackground": "#fcd47e33",
      "notebookScrollbarSlider.activeBackground": "#cacaccd9",
      "notebookScrollbarSlider.background": "#dddddf80",
      "notebookScrollbarSlider.hoverBackground": "#cacaccb3",
      "notebookStatusErrorIcon.foreground": "#cd0000",
      "notebookStatusRunningIcon.foreground": "#0033B3",
      "notebookStatusSuccessIcon.foreground": "#007f00",
      "testing.iconErrored": "#cd0000",
      "testing.iconFailed": "#cd0000",
      "testing.iconPassed": "#007f00",
      "testing.iconQueued": "#a66f00",
      "testing.iconSkipped": "#8e8e90",
      "testing.iconUnset": "#8e8e90",
      "testing.runAction": "#007f00",
      "charts.foreground": "#080808",
      "charts.lines": "#ebecf0",
      "charts.red": "#cd0000",
      "charts.blue": "#0033B3",
      "charts.yellow": "#9E880D",
      "charts.orange": "#cc6633",
      "charts.green": "#067D17",
      "charts.purple": "#871094",
      "scm.historyItemAdditionsForeground": "#007f00",
      "scm.historyItemDeletionsForeground": "#cd0000",
      "scm.historyItemStatisticsBorder": "#ebecf0",
      "scm.historyItemSelectedStatisticsBorder": "#3574f0"
    },
    "tokenColors": [
      {
        "scope": [
          "text"
        ],
        "settings": {
          "foreground": "#080808"
        }
      },
      {
        "scope": [
          "source"
        ],
        "settings": {
          "foreground": "#080808"
        }
      },
      {
        "scope": "emphasis",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "strong",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "comment"
        ],
        "settings": {
          "foreground": "#8C8C8C"
        }
      },
      {
        "scope": [
          "comment.block.documentation"
        ],
        "settings": {
          "foreground": "#8C8C8C",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "string.quoted"
        ],
        "settings": {
          "foreground": "#067D17"
        }
      },
      {
        "scope": "constant.numeric",
        "settings": {
          "foreground": "#1750EB",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "constant.character.escape"
        ],
        "settings": {
          "foreground": "#0037A6"
        }
      },
      {
        "scope": [
          "variable.parameter.url",
          "string.url"
        ],
        "settings": {
          "foreground": "#006DCC"
        }
      },
      {
        "scope": "constant.regexp",
        "settings": {
          "foreground": "#646695"
        }
      },
      {
        "scope": [
          "constant.keyword",
          "constant.language"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "meta.var storage.type"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": "support.function.builtin",
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": [
          "variable.language.special",
          "support.function.magic"
        ],
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": "variable.language",
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "support.type.primitive"
        ],
        "settings": {
          "foreground": "#0033B3",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "entity.name.type.package",
          "variable.other.import"
        ],
        "settings": {
          "foreground": "#94a261"
        }
      },
      {
        "scope": [
          "constant.other.placeholder"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "entity.name.function.support",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#9E880D"
        }
      },
      {
        "scope": [
          "storage.type",
          "entity.name.function.support.builtin",
          "constant.language"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#1750EB"
        }
      },
      {
        "scope": [
          "constant.character.escape"
        ],
        "settings": {
          "foreground": "#0033B3",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "entity.name.type.class",
          "entity.name.type.interface",
          "entity.name.type.struct",
          "entity.name.type.enum",
          "entity.other.inherited-class",
          "support.class",
          "support.type"
        ],
        "settings": {
          "foreground": "#000000"
        }
      },
      {
        "scope": [
          "variable.other.enummember",
          "variable.other.constant",
          "entity.name.constant",
          "constant.other"
        ],
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": [
          "variable.other.property",
          "variable.other.object.property",
          "meta.definition.property",
          "meta.field"
        ],
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": [
          "storage.modifier",
          "storage.modifier.access",
          "keyword.control",
          "keyword.operator.new",
          "keyword.other"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "meta.annotation",
          "punctuation.definition.annotation",
          "storage.type.annotation",
          "meta.declaration.annotation"
        ],
        "settings": {
          "foreground": "#9E880D"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "foreground": "#0033B3",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#067D17"
        }
      },
      {
        "scope": [
          "markup.inserted",
          "markup.inserted.diff"
        ],
        "settings": {
          "foreground": "#067D17"
        }
      },
      {
        "scope": [
          "markup.deleted",
          "markup.deleted.diff"
        ],
        "settings": {
          "foreground": "#cd0000"
        }
      },
      {
        "scope": "invalid",
        "settings": {
          "foreground": "#cd0000"
        }
      },
      {
        "scope": "invalid.deprecated",
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": [
          "source.java keyword",
          "source.java storage.modifier",
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "source.java storage.modifier.import",
          "source.java keyword.operator.assignment",
          "source.java keyword.operator.arithmetic",
          "source.java keyword.operator.increment-decrement"
        ],
        "settings": {
          "foreground": "#080808"
        }
      },
      {
        "scope": [
          "source.java comment.block.javadoc"
        ],
        "settings": {
          "foreground": "#8C8C8C",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "source.java comment.block.javadoc keyword"
        ],
        "settings": {
          "foreground": "#8C8C8C",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "source.java comment.block.javadoc variable"
        ],
        "settings": {
          "foreground": "#080808",
          "fontStyle": ""
        }
      },
      {
        "scope": [
          "source.java storage.type.annotation",
          "source.java punctuation.definition.annotation"
        ],
        "settings": {
          "foreground": "#9E880D"
        }
      },
      {
        "scope": [
          "source.java storage.type"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "source.java entity.name.function"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "source.java variable.other.object.property",
          "source.java constant.other.enum"
        ],
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": [
          "source.kotlin keyword",
          "source.kotlin storage.modifier",
          "source.kotlin support.class",
          "source.kotlin storage.type",
          "source.kotlin punctuation.definition.keyword",
          "source.kotlin punctuation.section.block"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "source.kotlin comment.block"
        ],
        "settings": {
          "foreground": "#8C8C8C"
        }
      },
      {
        "scope": [
          "source.kotlin storage.type.annotation"
        ],
        "settings": {
          "foreground": "#9E880D"
        }
      },
      {
        "scope": [
          "source.kotlin keyword.operator",
          "source.kotlin entity.string.template.element"
        ],
        "settings": {
          "foreground": "#080808"
        }
      },
      {
        "scope": [
          "source.kotlin entity.name.function"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "source.kotlin support.function"
        ],
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "source.c keyword.control.directive",
          "source.cpp keyword.control.directive",
          "source.c entity.name.function.preprocessor",
          "source.cpp entity.name.function.preprocessor"
        ],
        "settings": {
          "foreground": "#9E880D"
        }
      },
      {
        "scope": [
          "source.c string.quoted",
          "source.cpp string.quoted"
        ],
        "settings": {
          "foreground": "#067D17"
        }
      },
      {
        "scope": [
          "source.c keyword",
          "source.c storage.type",
          "source.c storage.modifier",
          "source.cpp keyword",
          "source.cpp storage.type",
          "source.cpp storage.modifier"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "source.c variable.other.object.access",
          "source.cpp variable.other.object.access",
          "source.cpp variable.other.property"
        ],
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": [
          "source.c keyword.operator",
          "source.c storage.modifier.array.bracket.square",
          "source.cpp keyword.operator",
          "source.cpp storage.modifier.array.bracket.square",
          "source.cpp storage.modifier.reference"
        ],
        "settings": {
          "foreground": "#080808"
        }
      },
      {
        "scope": [
          "source.c comment.block.documentation",
          "source.cpp comment.block.documentation"
        ],
        "settings": {
          "foreground": "#8C8C8C",
          "fontStyle": "italic"
        }
      },
      {
        "scope": [
          "source.c comment.block.documentation storage.type.class.doxygen",
          "source.cpp comment.block.documentation storage.type.class.doxygen"
        ],
        "settings": {
          "foreground": "#8C8C8C",
          "fontStyle": "bold"
        }
      },
      {
        "scope": [
          "source.c entity.name.function",
          "source.cpp entity.name.function"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "source.cpp entity.name.namespace",
          "source.cpp entity.name.scope-resolution",
          "source.cpp entity.name.type.struct",
          "source.cpp entity.name.type.class"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "source.cpp constant.numeric",
          "source.cpp keyword.other.unit.suffix",
          "source.cpp keyword.other.suffix.literal.built-in"
        ],
        "settings": {
          "foreground": "#1750EB"
        }
      },
      {
        "scope": [
          "source.cs entity.name.function"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "source.cs entity.name.type"
        ],
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": [
          "source.cs variable.other.object.property",
          "source.cs entity.name.variable.property"
        ],
        "settings": {
          "foreground": "#871094"
        }
      },
      {
        "scope": [
          "source.cs storage.modifier",
          "source.cs storage.type",
          "source.cs keyword.type",
          "source.cs keyword.control"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "text.tex.latex comment"
        ],
        "settings": {
          "foreground": "#8C8C8C"
        }
      },
      {
        "scope": [
          "text.tex.latex keyword",
          "text.tex.latex support.function"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "text.tex.latex support.class.math.block"
        ],
        "settings": {
          "foreground": "#067D17"
        }
      },
      {
        "scope": [
          "text.tex.latex support.class.math.block constant"
        ],
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": "entity.name.type.dbml",
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": "keyword.dbml",
        "settings": {
          "foreground": "#0033B3"
        }
      },
      {
        "scope": [
          "text.log log.debug"
        ],
        "settings": {
          "foreground": "#00627A"
        }
      },
      {
        "scope": [
          "text.log log.info"
        ],
        "settings": {
          "foreground": "#1750EB"
        }
      },
      {
        "scope": [
          "text.log log.warning"
        ],
        "settings": {
          "foreground": "#9E880D"
        }
      },
      {
        "scope": [
          "text.log log.error"
        ],
        "settings": {
          "foreground": "#cd0000"
        }
      },
      {
        "scope": [
          "text.log log.date"
        ],
        "settings": {
          "foreground": "#067D17"
        }
      },
      {
        "scope": [
          "text.log constant.language"
        ],
        "settings": {
          "foreground": "#080808"
        }
      }
    ],
    "semanticTokenColors": {
      "namespace": "#000000",
      "class": "#000000",
      "struct": "#000000",
      "interface": "#000000",
      "enum": "#000000",
      "enumMember": "#871094",
      "typeParameter": "#20999D",
      "type": "#000000",
      "type.defaultLibrary": "#00627A",
      "class.defaultLibrary": "#00627A",
      "function": "#00627A",
      "function.defaultLibrary": "#00627A",
      "method": "#00627A",
      "method.static": {
        "fontStyle": "italic"
      },
      "decorator": "#9E880D",
      "macro": "#9E880D",
      "variable": "#080808",
      "variable.readonly": "#871094",
      "variable.readonly.defaultLibrary": "#871094",
      "variable.defaultLibrary": "#871094",
      "parameter": "#080808",
      "property": "#871094",
      "property.readonly": "#871094",
      "property.static": {
        "fontStyle": "italic"
      },
      "field": "#871094",
      "selfParameter": "#0033B3",
      "builtinConstant": "#871094",
      "keyword": "#0033B3",
      "modifier": "#0033B3",
      "operator": "#080808",
      "number": "#1750EB",
      "string": "#067D17",
      "regexp": "#9E880D",
      "comment": "#8C8C8C",
      "*.deprecated": {
        "strikethrough": true
      },
      "*.abstract": {
        "fontStyle": "italic"
      },
      "*.static": {
        "fontStyle": "italic"
      }
    }
  },
  {
    "id": "github-dark-default",
    "label": "GitHub Dark Default",
    "name": "GitHub Dark Default",
    "type": "dark",
    "colors": {
      "focusBorder": "#1f6feb",
      "foreground": "#e6edf3",
      "descriptionForeground": "#7d8590",
      "errorForeground": "#f85149",
      "textLink.foreground": "#2f81f7",
      "textLink.activeForeground": "#2f81f7",
      "textBlockQuote.background": "#010409",
      "textBlockQuote.border": "#30363d",
      "textCodeBlock.background": "#6e768166",
      "textPreformat.foreground": "#7d8590",
      "textPreformat.background": "#6e768166",
      "textSeparator.foreground": "#21262d",
      "icon.foreground": "#7d8590",
      "keybindingLabel.foreground": "#e6edf3",
      "button.background": "#238636",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#2ea043",
      "button.secondaryBackground": "#282e33",
      "button.secondaryForeground": "#c9d1d9",
      "button.secondaryHoverBackground": "#30363d",
      "checkbox.background": "#161b22",
      "checkbox.border": "#30363d",
      "dropdown.background": "#161b22",
      "dropdown.border": "#30363d",
      "dropdown.foreground": "#e6edf3",
      "dropdown.listBackground": "#161b22",
      "input.background": "#0d1117",
      "input.border": "#30363d",
      "input.foreground": "#e6edf3",
      "input.placeholderForeground": "#6e7681",
      "badge.foreground": "#ffffff",
      "badge.background": "#1f6feb",
      "progressBar.background": "#1f6feb",
      "titleBar.activeForeground": "#7d8590",
      "titleBar.activeBackground": "#0d1117",
      "titleBar.inactiveForeground": "#7d8590",
      "titleBar.inactiveBackground": "#010409",
      "titleBar.border": "#30363d",
      "activityBar.foreground": "#e6edf3",
      "activityBar.inactiveForeground": "#7d8590",
      "activityBar.background": "#0d1117",
      "activityBarBadge.foreground": "#ffffff",
      "activityBarBadge.background": "#1f6feb",
      "activityBar.activeBorder": "#f78166",
      "activityBar.border": "#30363d",
      "sideBar.foreground": "#e6edf3",
      "sideBar.background": "#010409",
      "sideBar.border": "#30363d",
      "sideBarTitle.foreground": "#e6edf3",
      "sideBarSectionHeader.foreground": "#e6edf3",
      "sideBarSectionHeader.background": "#010409",
      "sideBarSectionHeader.border": "#30363d",
      "list.hoverForeground": "#e6edf3",
      "list.inactiveSelectionForeground": "#e6edf3",
      "list.activeSelectionForeground": "#e6edf3",
      "list.hoverBackground": "#6e76811a",
      "list.inactiveSelectionBackground": "#6e768166",
      "list.activeSelectionBackground": "#6e768166",
      "list.focusForeground": "#e6edf3",
      "list.focusBackground": "#388bfd26",
      "list.inactiveFocusBackground": "#388bfd26",
      "list.highlightForeground": "#2f81f7",
      "tree.indentGuidesStroke": "#21262d",
      "notificationCenterHeader.foreground": "#7d8590",
      "notificationCenterHeader.background": "#161b22",
      "notifications.foreground": "#e6edf3",
      "notifications.background": "#161b22",
      "notifications.border": "#30363d",
      "notificationsErrorIcon.foreground": "#f85149",
      "notificationsWarningIcon.foreground": "#d29922",
      "notificationsInfoIcon.foreground": "#2f81f7",
      "pickerGroup.border": "#30363d",
      "pickerGroup.foreground": "#7d8590",
      "quickInput.background": "#161b22",
      "quickInput.foreground": "#e6edf3",
      "statusBar.foreground": "#7d8590",
      "statusBar.background": "#0d1117",
      "statusBar.border": "#30363d",
      "statusBar.focusBorder": "#1f6feb80",
      "statusBar.noFolderBackground": "#0d1117",
      "statusBar.debuggingForeground": "#ffffff",
      "statusBar.debuggingBackground": "#da3633",
      "statusBarItem.prominentBackground": "#6e768166",
      "statusBarItem.remoteForeground": "#e6edf3",
      "statusBarItem.remoteBackground": "#30363d",
      "statusBarItem.hoverBackground": "#e6edf314",
      "statusBarItem.activeBackground": "#e6edf31f",
      "statusBarItem.focusBorder": "#1f6feb",
      "editorGroupHeader.tabsBackground": "#010409",
      "editorGroupHeader.tabsBorder": "#30363d",
      "editorGroup.border": "#30363d",
      "tab.activeForeground": "#e6edf3",
      "tab.inactiveForeground": "#7d8590",
      "tab.inactiveBackground": "#010409",
      "tab.activeBackground": "#0d1117",
      "tab.hoverBackground": "#0d1117",
      "tab.unfocusedHoverBackground": "#6e76811a",
      "tab.border": "#30363d",
      "tab.unfocusedActiveBorderTop": "#30363d",
      "tab.activeBorder": "#0d1117",
      "tab.unfocusedActiveBorder": "#0d1117",
      "tab.activeBorderTop": "#f78166",
      "breadcrumb.foreground": "#7d8590",
      "breadcrumb.focusForeground": "#e6edf3",
      "breadcrumb.activeSelectionForeground": "#7d8590",
      "breadcrumbPicker.background": "#161b22",
      "editor.foreground": "#e6edf3",
      "editor.background": "#0d1117",
      "editorWidget.background": "#161b22",
      "editor.foldBackground": "#6e76811a",
      "editor.lineHighlightBackground": "#6e76811a",
      "editorLineNumber.foreground": "#6e7681",
      "editorLineNumber.activeForeground": "#e6edf3",
      "editorIndentGuide.background": "#e6edf31f",
      "editorIndentGuide.activeBackground": "#e6edf33d",
      "editorWhitespace.foreground": "#484f58",
      "editorCursor.foreground": "#2f81f7",
      "editor.findMatchBackground": "#9e6a03",
      "editor.findMatchHighlightBackground": "#f2cc6080",
      "editor.linkedEditingBackground": "#2f81f712",
      "editor.selectionHighlightBackground": "#3fb95040",
      "editor.wordHighlightBackground": "#6e768180",
      "editor.wordHighlightBorder": "#6e768199",
      "editor.wordHighlightStrongBackground": "#6e76814d",
      "editor.wordHighlightStrongBorder": "#6e768199",
      "editorBracketMatch.background": "#3fb95040",
      "editorBracketMatch.border": "#3fb95099",
      "editorInlayHint.background": "#8b949e33",
      "editorInlayHint.foreground": "#7d8590",
      "editorInlayHint.typeBackground": "#8b949e33",
      "editorInlayHint.typeForeground": "#7d8590",
      "editorInlayHint.paramBackground": "#8b949e33",
      "editorInlayHint.paramForeground": "#7d8590",
      "editorGutter.modifiedBackground": "#bb800966",
      "editorGutter.addedBackground": "#2ea04366",
      "editorGutter.deletedBackground": "#f8514966",
      "diffEditor.insertedLineBackground": "#23863626",
      "diffEditor.insertedTextBackground": "#3fb9504d",
      "diffEditor.removedLineBackground": "#da363326",
      "diffEditor.removedTextBackground": "#ff7b724d",
      "scrollbar.shadow": "#484f5833",
      "scrollbarSlider.background": "#8b949e33",
      "scrollbarSlider.hoverBackground": "#8b949e3d",
      "scrollbarSlider.activeBackground": "#8b949e47",
      "editorOverviewRuler.border": "#010409",
      "minimapSlider.background": "#8b949e33",
      "minimapSlider.hoverBackground": "#8b949e3d",
      "minimapSlider.activeBackground": "#8b949e47",
      "panel.background": "#010409",
      "panel.border": "#30363d",
      "panelTitle.activeBorder": "#f78166",
      "panelTitle.activeForeground": "#e6edf3",
      "panelTitle.inactiveForeground": "#7d8590",
      "panelInput.border": "#30363d",
      "debugIcon.breakpointForeground": "#f85149",
      "debugConsole.infoForeground": "#8b949e",
      "debugConsole.warningForeground": "#d29922",
      "debugConsole.errorForeground": "#ffa198",
      "debugConsole.sourceForeground": "#e3b341",
      "debugConsoleInputIcon.foreground": "#bc8cff",
      "debugTokenExpression.name": "#79c0ff",
      "debugTokenExpression.value": "#a5d6ff",
      "debugTokenExpression.string": "#a5d6ff",
      "debugTokenExpression.boolean": "#56d364",
      "debugTokenExpression.number": "#56d364",
      "debugTokenExpression.error": "#ffa198",
      "symbolIcon.arrayForeground": "#f0883e",
      "symbolIcon.booleanForeground": "#58a6ff",
      "symbolIcon.classForeground": "#f0883e",
      "symbolIcon.colorForeground": "#79c0ff",
      "symbolIcon.constructorForeground": "#d2a8ff",
      "symbolIcon.enumeratorForeground": "#f0883e",
      "symbolIcon.enumeratorMemberForeground": "#58a6ff",
      "symbolIcon.eventForeground": "#6e7681",
      "symbolIcon.fieldForeground": "#f0883e",
      "symbolIcon.fileForeground": "#d29922",
      "symbolIcon.folderForeground": "#d29922",
      "symbolIcon.functionForeground": "#bc8cff",
      "symbolIcon.interfaceForeground": "#f0883e",
      "symbolIcon.keyForeground": "#58a6ff",
      "symbolIcon.keywordForeground": "#ff7b72",
      "symbolIcon.methodForeground": "#bc8cff",
      "symbolIcon.moduleForeground": "#ff7b72",
      "symbolIcon.namespaceForeground": "#ff7b72",
      "symbolIcon.nullForeground": "#58a6ff",
      "symbolIcon.numberForeground": "#3fb950",
      "symbolIcon.objectForeground": "#f0883e",
      "symbolIcon.operatorForeground": "#79c0ff",
      "symbolIcon.packageForeground": "#f0883e",
      "symbolIcon.propertyForeground": "#f0883e",
      "symbolIcon.referenceForeground": "#58a6ff",
      "symbolIcon.snippetForeground": "#58a6ff",
      "symbolIcon.stringForeground": "#79c0ff",
      "symbolIcon.structForeground": "#f0883e",
      "symbolIcon.textForeground": "#79c0ff",
      "symbolIcon.typeParameterForeground": "#79c0ff",
      "symbolIcon.unitForeground": "#58a6ff",
      "symbolIcon.variableForeground": "#f0883e",
      "symbolIcon.constantForeground": [
        "#aff5b4",
        "#7ee787",
        "#56d364",
        "#3fb950",
        "#2ea043",
        "#238636",
        "#196c2e",
        "#0f5323",
        "#033a16",
        "#04260f"
      ],
      "terminal.foreground": "#e6edf3",
      "terminal.ansiBlack": "#484f58",
      "terminal.ansiRed": "#ff7b72",
      "terminal.ansiGreen": "#3fb950",
      "terminal.ansiYellow": "#d29922",
      "terminal.ansiBlue": "#58a6ff",
      "terminal.ansiMagenta": "#bc8cff",
      "terminal.ansiCyan": "#39c5cf",
      "terminal.ansiWhite": "#b1bac4",
      "terminal.ansiBrightBlack": "#6e7681",
      "terminal.ansiBrightRed": "#ffa198",
      "terminal.ansiBrightGreen": "#56d364",
      "terminal.ansiBrightYellow": "#e3b341",
      "terminal.ansiBrightBlue": "#79c0ff",
      "terminal.ansiBrightMagenta": "#d2a8ff",
      "terminal.ansiBrightCyan": "#56d4dd",
      "terminal.ansiBrightWhite": "#ffffff",
      "editorBracketHighlight.foreground1": "#79c0ff",
      "editorBracketHighlight.foreground2": "#56d364",
      "editorBracketHighlight.foreground3": "#e3b341",
      "editorBracketHighlight.foreground4": "#ffa198",
      "editorBracketHighlight.foreground5": "#ff9bce",
      "editorBracketHighlight.foreground6": "#d2a8ff",
      "editorBracketHighlight.unexpectedBracket.foreground": "#7d8590",
      "gitDecoration.addedResourceForeground": "#3fb950",
      "gitDecoration.modifiedResourceForeground": "#d29922",
      "gitDecoration.deletedResourceForeground": "#f85149",
      "gitDecoration.untrackedResourceForeground": "#3fb950",
      "gitDecoration.ignoredResourceForeground": "#6e7681",
      "gitDecoration.conflictingResourceForeground": "#db6d28",
      "gitDecoration.submoduleResourceForeground": "#7d8590",
      "debugToolBar.background": "#161b22",
      "editor.stackFrameHighlightBackground": "#bb800966",
      "editor.focusedStackFrameHighlightBackground": "#2ea04366",
      "peekViewEditor.matchHighlightBackground": "#bb800966",
      "peekViewResult.matchHighlightBackground": "#bb800966",
      "peekViewEditor.background": "#6e76811a",
      "peekViewResult.background": "#0d1117",
      "settings.headerForeground": "#e6edf3",
      "settings.modifiedItemIndicator": "#bb800966",
      "welcomePage.buttonBackground": "#21262d",
      "welcomePage.buttonHoverBackground": "#30363d"
    },
    "tokenColors": [
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        "settings": {
          "foreground": "#8b949e"
        }
      },
      {
        "scope": [
          "constant.other.placeholder",
          "constant.character"
        ],
        "settings": {
          "foreground": "#ff7b72"
        }
      },
      {
        "scope": [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity"
        ],
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings": {
          "foreground": "#ffa657"
        }
      },
      {
        "scope": [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        "settings": {
          "foreground": "#e6edf3"
        }
      },
      {
        "scope": "entity.name.function",
        "settings": {
          "foreground": "#d2a8ff"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings": {
          "foreground": "#7ee787"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#ff7b72"
        }
      },
      {
        "scope": [
          "storage",
          "storage.type"
        ],
        "settings": {
          "foreground": "#ff7b72"
        }
      },
      {
        "scope": [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        "settings": {
          "foreground": "#e6edf3"
        }
      },
      {
        "scope": [
          "string",
          "string punctuation.section.embedded source"
        ],
        "settings": {
          "foreground": "#a5d6ff"
        }
      },
      {
        "scope": "support",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "meta.property-name",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "variable",
        "settings": {
          "foreground": "#ffa657"
        }
      },
      {
        "scope": "variable.other",
        "settings": {
          "foreground": "#e6edf3"
        }
      },
      {
        "scope": "invalid.broken",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#ffa198"
        }
      },
      {
        "scope": "invalid.deprecated",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#ffa198"
        }
      },
      {
        "scope": "invalid.illegal",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#ffa198"
        }
      },
      {
        "scope": "invalid.unimplemented",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#ffa198"
        }
      },
      {
        "scope": "carriage-return",
        "settings": {
          "fontStyle": "italic underline",
          "background": "#ff7b72",
          "foreground": "#f0f6fc",
          "content": "^M"
        }
      },
      {
        "scope": "message.error",
        "settings": {
          "foreground": "#ffa198"
        }
      },
      {
        "scope": "string variable",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": [
          "source.regexp",
          "string.regexp"
        ],
        "settings": {
          "foreground": "#a5d6ff"
        }
      },
      {
        "scope": [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition"
        ],
        "settings": {
          "foreground": "#a5d6ff"
        }
      },
      {
        "scope": "string.regexp constant.character.escape",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#7ee787"
        }
      },
      {
        "scope": "support.constant",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "support.variable",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "support.type.property-name.json",
        "settings": {
          "foreground": "#7ee787"
        }
      },
      {
        "scope": "meta.module-reference",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#ffa657"
        }
      },
      {
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "markup.quote",
        "settings": {
          "foreground": "#7ee787"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#e6edf3"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#e6edf3"
        }
      },
      {
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "markup.strikethrough"
        ],
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        "settings": {
          "background": "#490202",
          "foreground": "#ffa198"
        }
      },
      {
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#ff7b72"
        }
      },
      {
        "scope": [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        "settings": {
          "background": "#04260f",
          "foreground": "#7ee787"
        }
      },
      {
        "scope": [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        "settings": {
          "background": "#5a1e02",
          "foreground": "#ffa657"
        }
      },
      {
        "scope": [
          "markup.ignored",
          "markup.untracked"
        ],
        "settings": {
          "foreground": "#161b22",
          "background": "#79c0ff"
        }
      },
      {
        "scope": "meta.diff.range",
        "settings": {
          "foreground": "#d2a8ff",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "meta.separator",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": "meta.output",
        "settings": {
          "foreground": "#79c0ff"
        }
      },
      {
        "scope": [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote"
        ],
        "settings": {
          "foreground": "#8b949e"
        }
      },
      {
        "scope": "brackethighlighter.unmatched",
        "settings": {
          "foreground": "#ffa198"
        }
      },
      {
        "scope": [
          "constant.other.reference.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#a5d6ff"
        }
      }
    ],
    "semanticTokenColors": {}
  },
  {
    "id": "github-light-default",
    "label": "GitHub Light Default",
    "name": "GitHub Light Default",
    "type": "light",
    "colors": {
      "focusBorder": "#0969da",
      "foreground": "#1f2328",
      "descriptionForeground": "#656d76",
      "errorForeground": "#cf222e",
      "textLink.foreground": "#0969da",
      "textLink.activeForeground": "#0969da",
      "textBlockQuote.background": "#f6f8fa",
      "textBlockQuote.border": "#d0d7de",
      "textCodeBlock.background": "#afb8c133",
      "textPreformat.foreground": "#656d76",
      "textPreformat.background": "#afb8c133",
      "textSeparator.foreground": "#d8dee4",
      "icon.foreground": "#656d76",
      "keybindingLabel.foreground": "#1f2328",
      "button.background": "#1f883d",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#1a7f37",
      "button.secondaryBackground": "#ebecf0",
      "button.secondaryForeground": "#24292f",
      "button.secondaryHoverBackground": "#f3f4f6",
      "checkbox.background": "#f6f8fa",
      "checkbox.border": "#d0d7de",
      "dropdown.background": "#ffffff",
      "dropdown.border": "#d0d7de",
      "dropdown.foreground": "#1f2328",
      "dropdown.listBackground": "#ffffff",
      "input.background": "#ffffff",
      "input.border": "#d0d7de",
      "input.foreground": "#1f2328",
      "input.placeholderForeground": "#6e7781",
      "badge.foreground": "#ffffff",
      "badge.background": "#0969da",
      "progressBar.background": "#0969da",
      "titleBar.activeForeground": "#656d76",
      "titleBar.activeBackground": "#ffffff",
      "titleBar.inactiveForeground": "#656d76",
      "titleBar.inactiveBackground": "#f6f8fa",
      "titleBar.border": "#d0d7de",
      "activityBar.foreground": "#1f2328",
      "activityBar.inactiveForeground": "#656d76",
      "activityBar.background": "#ffffff",
      "activityBarBadge.foreground": "#ffffff",
      "activityBarBadge.background": "#0969da",
      "activityBar.activeBorder": "#fd8c73",
      "activityBar.border": "#d0d7de",
      "sideBar.foreground": "#1f2328",
      "sideBar.background": "#f6f8fa",
      "sideBar.border": "#d0d7de",
      "sideBarTitle.foreground": "#1f2328",
      "sideBarSectionHeader.foreground": "#1f2328",
      "sideBarSectionHeader.background": "#f6f8fa",
      "sideBarSectionHeader.border": "#d0d7de",
      "list.hoverForeground": "#1f2328",
      "list.inactiveSelectionForeground": "#1f2328",
      "list.activeSelectionForeground": "#1f2328",
      "list.hoverBackground": "#eaeef280",
      "list.inactiveSelectionBackground": "#afb8c133",
      "list.activeSelectionBackground": "#afb8c133",
      "list.focusForeground": "#1f2328",
      "list.focusBackground": "#ddf4ff",
      "list.inactiveFocusBackground": "#ddf4ff",
      "list.highlightForeground": "#0969da",
      "tree.indentGuidesStroke": "#d8dee4",
      "notificationCenterHeader.foreground": "#656d76",
      "notificationCenterHeader.background": "#f6f8fa",
      "notifications.foreground": "#1f2328",
      "notifications.background": "#ffffff",
      "notifications.border": "#d0d7de",
      "notificationsErrorIcon.foreground": "#cf222e",
      "notificationsWarningIcon.foreground": "#9a6700",
      "notificationsInfoIcon.foreground": "#0969da",
      "pickerGroup.border": "#d0d7de",
      "pickerGroup.foreground": "#656d76",
      "quickInput.background": "#ffffff",
      "quickInput.foreground": "#1f2328",
      "statusBar.foreground": "#656d76",
      "statusBar.background": "#ffffff",
      "statusBar.border": "#d0d7de",
      "statusBar.focusBorder": "#0969da80",
      "statusBar.noFolderBackground": "#ffffff",
      "statusBar.debuggingForeground": "#ffffff",
      "statusBar.debuggingBackground": "#cf222e",
      "statusBarItem.prominentBackground": "#afb8c133",
      "statusBarItem.remoteForeground": "#1f2328",
      "statusBarItem.remoteBackground": "#eaeef2",
      "statusBarItem.hoverBackground": "#1f232814",
      "statusBarItem.activeBackground": "#1f23281f",
      "statusBarItem.focusBorder": "#0969da",
      "editorGroupHeader.tabsBackground": "#f6f8fa",
      "editorGroupHeader.tabsBorder": "#d0d7de",
      "editorGroup.border": "#d0d7de",
      "tab.activeForeground": "#1f2328",
      "tab.inactiveForeground": "#656d76",
      "tab.inactiveBackground": "#f6f8fa",
      "tab.activeBackground": "#ffffff",
      "tab.hoverBackground": "#ffffff",
      "tab.unfocusedHoverBackground": "#eaeef280",
      "tab.border": "#d0d7de",
      "tab.unfocusedActiveBorderTop": "#d0d7de",
      "tab.activeBorder": "#ffffff",
      "tab.unfocusedActiveBorder": "#ffffff",
      "tab.activeBorderTop": "#fd8c73",
      "breadcrumb.foreground": "#656d76",
      "breadcrumb.focusForeground": "#1f2328",
      "breadcrumb.activeSelectionForeground": "#656d76",
      "breadcrumbPicker.background": "#ffffff",
      "editor.foreground": "#1f2328",
      "editor.background": "#ffffff",
      "editorWidget.background": "#ffffff",
      "editor.foldBackground": "#6e77811a",
      "editor.lineHighlightBackground": "#eaeef280",
      "editorLineNumber.foreground": "#8c959f",
      "editorLineNumber.activeForeground": "#1f2328",
      "editorIndentGuide.background": "#1f23281f",
      "editorIndentGuide.activeBackground": "#1f23283d",
      "editorWhitespace.foreground": "#afb8c1",
      "editorCursor.foreground": "#0969da",
      "editor.findMatchBackground": "#bf8700",
      "editor.findMatchHighlightBackground": "#fae17d80",
      "editor.linkedEditingBackground": "#0969da12",
      "editor.selectionHighlightBackground": "#4ac26b40",
      "editor.wordHighlightBackground": "#eaeef280",
      "editor.wordHighlightBorder": "#afb8c199",
      "editor.wordHighlightStrongBackground": "#afb8c14d",
      "editor.wordHighlightStrongBorder": "#afb8c199",
      "editorBracketMatch.background": "#4ac26b40",
      "editorBracketMatch.border": "#4ac26b99",
      "editorInlayHint.background": "#afb8c133",
      "editorInlayHint.foreground": "#656d76",
      "editorInlayHint.typeBackground": "#afb8c133",
      "editorInlayHint.typeForeground": "#656d76",
      "editorInlayHint.paramBackground": "#afb8c133",
      "editorInlayHint.paramForeground": "#656d76",
      "editorGutter.modifiedBackground": "#d4a72c66",
      "editorGutter.addedBackground": "#4ac26b66",
      "editorGutter.deletedBackground": "#ff818266",
      "diffEditor.insertedLineBackground": "#aceebb4d",
      "diffEditor.insertedTextBackground": "#6fdd8b80",
      "diffEditor.removedLineBackground": "#ffcecb4d",
      "diffEditor.removedTextBackground": "#ff818266",
      "scrollbar.shadow": "#6e778133",
      "scrollbarSlider.background": "#8c959f33",
      "scrollbarSlider.hoverBackground": "#8c959f3d",
      "scrollbarSlider.activeBackground": "#8c959f47",
      "editorOverviewRuler.border": "#ffffff",
      "minimapSlider.background": "#8c959f33",
      "minimapSlider.hoverBackground": "#8c959f3d",
      "minimapSlider.activeBackground": "#8c959f47",
      "panel.background": "#f6f8fa",
      "panel.border": "#d0d7de",
      "panelTitle.activeBorder": "#fd8c73",
      "panelTitle.activeForeground": "#1f2328",
      "panelTitle.inactiveForeground": "#656d76",
      "panelInput.border": "#d0d7de",
      "debugIcon.breakpointForeground": "#cf222e",
      "debugConsole.infoForeground": "#57606a",
      "debugConsole.warningForeground": "#7d4e00",
      "debugConsole.errorForeground": "#cf222e",
      "debugConsole.sourceForeground": "#9a6700",
      "debugConsoleInputIcon.foreground": "#6639ba",
      "debugTokenExpression.name": "#0550ae",
      "debugTokenExpression.value": "#0a3069",
      "debugTokenExpression.string": "#0a3069",
      "debugTokenExpression.boolean": "#116329",
      "debugTokenExpression.number": "#116329",
      "debugTokenExpression.error": "#a40e26",
      "symbolIcon.arrayForeground": "#953800",
      "symbolIcon.booleanForeground": "#0550ae",
      "symbolIcon.classForeground": "#953800",
      "symbolIcon.colorForeground": "#0a3069",
      "symbolIcon.constructorForeground": "#3e1f79",
      "symbolIcon.enumeratorForeground": "#953800",
      "symbolIcon.enumeratorMemberForeground": "#0550ae",
      "symbolIcon.eventForeground": "#57606a",
      "symbolIcon.fieldForeground": "#953800",
      "symbolIcon.fileForeground": "#7d4e00",
      "symbolIcon.folderForeground": "#7d4e00",
      "symbolIcon.functionForeground": "#6639ba",
      "symbolIcon.interfaceForeground": "#953800",
      "symbolIcon.keyForeground": "#0550ae",
      "symbolIcon.keywordForeground": "#a40e26",
      "symbolIcon.methodForeground": "#6639ba",
      "symbolIcon.moduleForeground": "#a40e26",
      "symbolIcon.namespaceForeground": "#a40e26",
      "symbolIcon.nullForeground": "#0550ae",
      "symbolIcon.numberForeground": "#116329",
      "symbolIcon.objectForeground": "#953800",
      "symbolIcon.operatorForeground": "#0a3069",
      "symbolIcon.packageForeground": "#953800",
      "symbolIcon.propertyForeground": "#953800",
      "symbolIcon.referenceForeground": "#0550ae",
      "symbolIcon.snippetForeground": "#0550ae",
      "symbolIcon.stringForeground": "#0a3069",
      "symbolIcon.structForeground": "#953800",
      "symbolIcon.textForeground": "#0a3069",
      "symbolIcon.typeParameterForeground": "#0a3069",
      "symbolIcon.unitForeground": "#0550ae",
      "symbolIcon.variableForeground": "#953800",
      "symbolIcon.constantForeground": "#116329",
      "terminal.foreground": "#1f2328",
      "terminal.ansiBlack": "#24292f",
      "terminal.ansiRed": "#cf222e",
      "terminal.ansiGreen": "#116329",
      "terminal.ansiYellow": "#4d2d00",
      "terminal.ansiBlue": "#0969da",
      "terminal.ansiMagenta": "#8250df",
      "terminal.ansiCyan": "#1b7c83",
      "terminal.ansiWhite": "#6e7781",
      "terminal.ansiBrightBlack": "#57606a",
      "terminal.ansiBrightRed": "#a40e26",
      "terminal.ansiBrightGreen": "#1a7f37",
      "terminal.ansiBrightYellow": "#633c01",
      "terminal.ansiBrightBlue": "#218bff",
      "terminal.ansiBrightMagenta": "#a475f9",
      "terminal.ansiBrightCyan": "#3192aa",
      "terminal.ansiBrightWhite": "#8c959f",
      "editorBracketHighlight.foreground1": "#0969da",
      "editorBracketHighlight.foreground2": "#1a7f37",
      "editorBracketHighlight.foreground3": "#9a6700",
      "editorBracketHighlight.foreground4": "#cf222e",
      "editorBracketHighlight.foreground5": "#bf3989",
      "editorBracketHighlight.foreground6": "#8250df",
      "editorBracketHighlight.unexpectedBracket.foreground": "#656d76",
      "gitDecoration.addedResourceForeground": "#1a7f37",
      "gitDecoration.modifiedResourceForeground": "#9a6700",
      "gitDecoration.deletedResourceForeground": "#cf222e",
      "gitDecoration.untrackedResourceForeground": "#1a7f37",
      "gitDecoration.ignoredResourceForeground": "#6e7781",
      "gitDecoration.conflictingResourceForeground": "#bc4c00",
      "gitDecoration.submoduleResourceForeground": "#656d76",
      "debugToolBar.background": "#ffffff",
      "editor.stackFrameHighlightBackground": "#d4a72c66",
      "editor.focusedStackFrameHighlightBackground": "#4ac26b66",
      "settings.headerForeground": "#1f2328",
      "settings.modifiedItemIndicator": "#d4a72c66",
      "welcomePage.buttonBackground": "#f6f8fa",
      "welcomePage.buttonHoverBackground": "#f3f4f6"
    },
    "tokenColors": [
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.comment"
        ],
        "settings": {
          "foreground": "#6e7781"
        }
      },
      {
        "scope": [
          "constant.other.placeholder",
          "constant.character"
        ],
        "settings": {
          "foreground": "#cf222e"
        }
      },
      {
        "scope": [
          "constant",
          "entity.name.constant",
          "variable.other.constant",
          "variable.other.enummember",
          "variable.language",
          "entity"
        ],
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": [
          "entity.name",
          "meta.export.default",
          "meta.definition.variable"
        ],
        "settings": {
          "foreground": "#953800"
        }
      },
      {
        "scope": [
          "variable.parameter.function",
          "meta.jsx.children",
          "meta.block",
          "meta.tag.attributes",
          "entity.name.constant",
          "meta.object.member",
          "meta.embedded.expression"
        ],
        "settings": {
          "foreground": "#1f2328"
        }
      },
      {
        "scope": "entity.name.function",
        "settings": {
          "foreground": "#8250df"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "support.class.component"
        ],
        "settings": {
          "foreground": "#116329"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#cf222e"
        }
      },
      {
        "scope": [
          "storage",
          "storage.type"
        ],
        "settings": {
          "foreground": "#cf222e"
        }
      },
      {
        "scope": [
          "storage.modifier.package",
          "storage.modifier.import",
          "storage.type.java"
        ],
        "settings": {
          "foreground": "#1f2328"
        }
      },
      {
        "scope": [
          "string",
          "string punctuation.section.embedded source"
        ],
        "settings": {
          "foreground": "#0a3069"
        }
      },
      {
        "scope": "support",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "meta.property-name",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "variable",
        "settings": {
          "foreground": "#953800"
        }
      },
      {
        "scope": "variable.other",
        "settings": {
          "foreground": "#1f2328"
        }
      },
      {
        "scope": "invalid.broken",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#82071e"
        }
      },
      {
        "scope": "invalid.deprecated",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#82071e"
        }
      },
      {
        "scope": "invalid.illegal",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#82071e"
        }
      },
      {
        "scope": "invalid.unimplemented",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#82071e"
        }
      },
      {
        "scope": "carriage-return",
        "settings": {
          "fontStyle": "italic underline",
          "background": "#cf222e",
          "foreground": "#f6f8fa",
          "content": "^M"
        }
      },
      {
        "scope": "message.error",
        "settings": {
          "foreground": "#82071e"
        }
      },
      {
        "scope": "string variable",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": [
          "source.regexp",
          "string.regexp"
        ],
        "settings": {
          "foreground": "#0a3069"
        }
      },
      {
        "scope": [
          "string.regexp.character-class",
          "string.regexp constant.character.escape",
          "string.regexp source.ruby.embedded",
          "string.regexp string.regexp.arbitrary-repitition"
        ],
        "settings": {
          "foreground": "#0a3069"
        }
      },
      {
        "scope": "string.regexp constant.character.escape",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#116329"
        }
      },
      {
        "scope": "support.constant",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "support.variable",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "support.type.property-name.json",
        "settings": {
          "foreground": "#116329"
        }
      },
      {
        "scope": "meta.module-reference",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#953800"
        }
      },
      {
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "markup.quote",
        "settings": {
          "foreground": "#116329"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#1f2328"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#1f2328"
        }
      },
      {
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": [
          "markup.strikethrough"
        ],
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": [
          "markup.deleted",
          "meta.diff.header.from-file",
          "punctuation.definition.deleted"
        ],
        "settings": {
          "background": "#ffebe9",
          "foreground": "#82071e"
        }
      },
      {
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#cf222e"
        }
      },
      {
        "scope": [
          "markup.inserted",
          "meta.diff.header.to-file",
          "punctuation.definition.inserted"
        ],
        "settings": {
          "background": "#dafbe1",
          "foreground": "#116329"
        }
      },
      {
        "scope": [
          "markup.changed",
          "punctuation.definition.changed"
        ],
        "settings": {
          "background": "#ffd8b5",
          "foreground": "#953800"
        }
      },
      {
        "scope": [
          "markup.ignored",
          "markup.untracked"
        ],
        "settings": {
          "foreground": "#eaeef2",
          "background": "#0550ae"
        }
      },
      {
        "scope": "meta.diff.range",
        "settings": {
          "foreground": "#8250df",
          "fontStyle": "bold"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "meta.separator",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#0550ae"
        }
      },
      {
        "scope": "meta.output",
        "settings": {
          "foreground": "#0550ae"
        }
      },
      {
        "scope": [
          "brackethighlighter.tag",
          "brackethighlighter.curly",
          "brackethighlighter.round",
          "brackethighlighter.square",
          "brackethighlighter.angle",
          "brackethighlighter.quote"
        ],
        "settings": {
          "foreground": "#57606a"
        }
      },
      {
        "scope": "brackethighlighter.unmatched",
        "settings": {
          "foreground": "#82071e"
        }
      },
      {
        "scope": [
          "constant.other.reference.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#0a3069"
        }
      }
    ],
    "semanticTokenColors": {}
  },
  {
    "id": "jetbrains-new-dark-plus",
    "label": "JetBrains New Dark Plus",
    "name": "Dark+",
    "type": "dark",
    "colors": {
      "checkbox.border": "#6B6B6B",
      "editor.background": "#1E1E1E",
      "editor.foreground": "#BCBEC4",
      "editor.inactiveSelectionBackground": "#3A3D41",
      "editorIndentGuide.background": "#404040",
      "editorIndentGuide.activeBackground": "#707070",
      "editor.selectionHighlightBackground": "#ADD6FF26",
      "list.dropBackground": "#383B3D",
      "activityBarBadge.background": "#007ACC",
      "sideBarTitle.foreground": "#BBBBBB",
      "input.placeholderForeground": "#A6A6A6",
      "menu.background": "#252526",
      "menu.foreground": "#BCBEC4",
      "menu.separatorBackground": "#454545",
      "menu.border": "#454545",
      "statusBarItem.remoteForeground": "#FFF",
      "statusBarItem.remoteBackground": "#16825D",
      "ports.iconRunningProcessForeground": "#369432",
      "sideBarSectionHeader.background": "#0000",
      "sideBarSectionHeader.border": "#ccc3",
      "tab.lastPinnedBorder": "#ccc3",
      "list.activeSelectionIconForeground": "#FFF",
      "terminal.inactiveSelectionBackground": "#3A3D41",
      "widget.border": "#303031"
    },
    "tokenColors": [
      {
        "scope": [
          "meta.embedded",
          "source.groovy.embedded",
          "string meta.image.inline.markdown"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "emphasis",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "strong",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": "header",
        "settings": {
          "foreground": "#000080"
        }
      },
      {
        "name": "Comments",
        "scope": [
          "comment",
          "string.quoted.docstring"
        ],
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": "constant.language",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "constant.numeric",
          "variable.other.enummember",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent"
        ],
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "constant.regexp",
        "settings": {
          "foreground": "#646695"
        }
      },
      {
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "entity.name.tag.css",
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.mixin.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "source.css.less entity.other.attribute-name.id",
          "entity.other.attribute-name.scss"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "invalid",
        "settings": {
          "foreground": "#FA6675"
        }
      },
      {
        "scope": "markup.underline",
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "markup.heading",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "markup.strikethrough",
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": "markup.inserted",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "markup.deleted",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "markup.changed",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "punctuation.definition.quote.begin.markdown",
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#6796e6"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "name": "brackets of XML/HTML tags",
        "scope": "punctuation.definition.tag",
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": [
          "meta.preprocessor",
          "entity.name.function.preprocessor"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "meta.preprocessor.string",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "meta.preprocessor.numeric",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "meta.structure.dictionary.key.python",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "storage",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "storage.type",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "storage.modifier",
          "keyword.operator.noexcept"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "string",
          "meta.embedded.assembly"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.tag",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.value",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.regexp",
        "settings": {
          "foreground": "#d16969"
        }
      },
      {
        "name": "String interpolation",
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "name": "Reset JavaScript string interpolation expression",
        "scope": [
          "meta.template.expression"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "support.type.vendored.property-name",
          "support.type.property-name",
          "variable.css",
          "variable.scss",
          "variable.other.less",
          "source.coffee.embedded"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.control",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.operator",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.alignof",
          "keyword.operator.typeid",
          "keyword.operator.alignas",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
          "keyword.operator.wordlike"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.other.unit",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "support.function.git-rebase",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "constant.sha.git-rebase",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "name": "coloring of the Java import and package identifiers",
        "scope": [
          "storage.modifier.import.java",
          "variable.language.wildcard.java",
          "storage.modifier.package.java"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "this.self",
        "scope": "variable.language",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "variable.argument.css",
          "punctuation.definition.tag",
          "entity.name.tag",
          "support.function.misc",
          "meta.function.variable.css",
          "meta.property-value.css support.function",
          "meta.selector.css",
          "entity.other.attribute-name.css"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "keyword.other.unit",
          "punctuation.separator.key-value.html",
          "meta.tag.attributes keyword.operator.assignment"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "support.type.property-name.css"
        ],
        "settings": {
          "foreground": "#BABABA"
        }
      },
      {
        "scope": [
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "meta.tag.custom entity.name.tag.html"
        ],
        "settings": {
          "foreground": "#2fbaa3"
        }
      },
      {
        "scope": [
          "comment.block.documentation",
          "comment.block.javadoc"
        ],
        "settings": {
          "foreground": "#5F826B"
        }
      },
      {
        "name": "Function declarations",
        "scope": [
          "entity.name.function",
          "support.function",
          "support.constant.handlebars",
          "source.powershell variable.other.member",
          "entity.name.operator.custom-literal"
        ],
        "settings": {
          "foreground": "#66A6FF"
        }
      },
      {
        "name": "Types declaration and references",
        "scope": [
          "support.class",
          "support.type",
          "entity.name.type",
          "entity.name.namespace",
          "entity.other.attribute",
          "entity.name.scope-resolution",
          "entity.name.class",
          "storage.type.numeric.go",
          "storage.type.byte.go",
          "storage.type.boolean.go",
          "storage.type.string.go",
          "storage.type.uintptr.go",
          "storage.type.error.go",
          "storage.type.rune.go",
          "storage.type.cs",
          "storage.type.generic.cs",
          "storage.type.modifier.cs",
          "storage.type.variable.cs",
          "storage.type.annotation.java",
          "storage.type.generic.java",
          "storage.type.java",
          "storage.type.object.array.java",
          "storage.type.primitive.array.java",
          "storage.type.primitive.java",
          "storage.type.token.java",
          "storage.type.groovy",
          "storage.type.annotation.groovy",
          "storage.type.parameters.groovy",
          "storage.type.generic.groovy",
          "storage.type.object.array.groovy",
          "storage.type.primitive.array.groovy",
          "storage.type.primitive.groovy"
        ],
        "settings": {
          "foreground": "#2FBAA3"
        }
      },
      {
        "name": "Types declaration and references, TS grammar specific",
        "scope": [
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "support.constant.math",
          "support.constant.dom",
          "support.constant.json",
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#2FBAA3"
        }
      },
      {
        "name": "Control flow / Special keywords",
        "scope": [
          "keyword.control",
          "source.cpp keyword.operator.new",
          "keyword.operator.delete",
          "keyword.other.using",
          "keyword.other.operator",
          "entity.name.operator"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "name": "Variable and parameter name",
        "scope": [
          "variable",
          "meta.definition.variable.name",
          "support.variable",
          "entity.name.variable",
          "constant.other.placeholder"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "Constants and enums",
        "scope": [
          "variable.other.constant",
          "variable.other.enummember"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "name": "Object keys, TS grammar specific",
        "scope": [
          "meta.object-literal.key"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "CSS property value",
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "support.constant.media-type",
          "support.constant.media",
          "constant.other.color.rgb-value",
          "constant.other.rgb-value",
          "support.constant.color"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "name": "Regular expression groups",
        "scope": [
          "punctuation.definition.group.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "keyword.operator.negation.regexp",
          "support.other.parenthesis.regexp"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp"
        ],
        "settings": {
          "foreground": "#d16969"
        }
      },
      {
        "scope": [
          "keyword.operator.or.regexp",
          "keyword.control.anchor.regexp"
        ],
        "settings": {
          "foreground": "#66A6FF"
        }
      },
      {
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "constant.character",
          "constant.other.option"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "constant.character.escape",
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "entity.name.label",
        "settings": {
          "foreground": "#C8C8C8"
        }
      }
    ],
    "semanticTokenColors": {
      "newOperator": "#CF8E6D",
      "stringLiteral": "#6AAB73",
      "customLiteral": "#66A6FF",
      "numberLiteral": "#2AACB8"
    }
  },
  {
    "id": "jetbrains-new-dark-vs",
    "label": "JetBrains New Dark VS",
    "name": "Dark (Visual Studio)",
    "type": "dark",
    "colors": {
      "checkbox.border": "#6B6B6B",
      "editor.background": "#1E1E1E",
      "editor.foreground": "#BCBEC4",
      "editor.inactiveSelectionBackground": "#3A3D41",
      "editorIndentGuide.background": "#404040",
      "editorIndentGuide.activeBackground": "#707070",
      "editor.selectionHighlightBackground": "#ADD6FF26",
      "list.dropBackground": "#383B3D",
      "activityBarBadge.background": "#007ACC",
      "sideBarTitle.foreground": "#BBBBBB",
      "input.placeholderForeground": "#A6A6A6",
      "menu.background": "#252526",
      "menu.foreground": "#BCBEC4",
      "menu.separatorBackground": "#454545",
      "menu.border": "#454545",
      "statusBarItem.remoteForeground": "#FFF",
      "statusBarItem.remoteBackground": "#16825D",
      "ports.iconRunningProcessForeground": "#369432",
      "sideBarSectionHeader.background": "#0000",
      "sideBarSectionHeader.border": "#ccc3",
      "tab.lastPinnedBorder": "#ccc3",
      "list.activeSelectionIconForeground": "#FFF",
      "terminal.inactiveSelectionBackground": "#3A3D41",
      "widget.border": "#303031"
    },
    "tokenColors": [
      {
        "scope": [
          "meta.embedded",
          "source.groovy.embedded",
          "string meta.image.inline.markdown"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "emphasis",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "strong",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": "header",
        "settings": {
          "foreground": "#000080"
        }
      },
      {
        "name": "Comments",
        "scope": [
          "comment",
          "string.quoted.docstring"
        ],
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": "constant.language",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "constant.numeric",
          "variable.other.enummember",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent"
        ],
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "constant.regexp",
        "settings": {
          "foreground": "#646695"
        }
      },
      {
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "entity.name.tag.css",
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.mixin.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "source.css.less entity.other.attribute-name.id",
          "entity.other.attribute-name.scss"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "invalid",
        "settings": {
          "foreground": "#FA6675"
        }
      },
      {
        "scope": "markup.underline",
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "markup.heading",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "markup.strikethrough",
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": "markup.inserted",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "markup.deleted",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "markup.changed",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "punctuation.definition.quote.begin.markdown",
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#6796e6"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "name": "brackets of XML/HTML tags",
        "scope": "punctuation.definition.tag",
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": [
          "meta.preprocessor",
          "entity.name.function.preprocessor"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "meta.preprocessor.string",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "meta.preprocessor.numeric",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "meta.structure.dictionary.key.python",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "storage",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "storage.type",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "storage.modifier",
          "keyword.operator.noexcept"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "string",
          "meta.embedded.assembly"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.tag",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.value",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.regexp",
        "settings": {
          "foreground": "#d16969"
        }
      },
      {
        "name": "String interpolation",
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "name": "Reset JavaScript string interpolation expression",
        "scope": [
          "meta.template.expression"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "support.type.vendored.property-name",
          "support.type.property-name",
          "variable.css",
          "variable.scss",
          "variable.other.less",
          "source.coffee.embedded"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.control",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.operator",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.alignof",
          "keyword.operator.typeid",
          "keyword.operator.alignas",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
          "keyword.operator.wordlike"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.other.unit",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "support.function.git-rebase",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "constant.sha.git-rebase",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "name": "coloring of the Java import and package identifiers",
        "scope": [
          "storage.modifier.import.java",
          "variable.language.wildcard.java",
          "storage.modifier.package.java"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "this.self",
        "scope": "variable.language",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "variable.argument.css",
          "punctuation.definition.tag",
          "entity.name.tag",
          "support.function.misc",
          "meta.function.variable.css",
          "meta.property-value.css support.function",
          "meta.selector.css",
          "entity.other.attribute-name.css"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "keyword.other.unit",
          "punctuation.separator.key-value.html",
          "meta.tag.attributes keyword.operator.assignment"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "support.type.property-name.css"
        ],
        "settings": {
          "foreground": "#BABABA"
        }
      },
      {
        "scope": [
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "meta.tag.custom entity.name.tag.html"
        ],
        "settings": {
          "foreground": "#2fbaa3"
        }
      },
      {
        "scope": [
          "comment.block.documentation",
          "comment.block.javadoc"
        ],
        "settings": {
          "foreground": "#5F826B"
        }
      }
    ],
    "semanticTokenColors": {
      "newOperator": "#BCBEC4",
      "stringLiteral": "#6AAB73",
      "customLiteral": "#BCBEC4",
      "numberLiteral": "#2AACB8"
    }
  },
  {
    "id": "jetbrains-new-dark-modern",
    "label": "JetBrains New Dark Modern",
    "name": "Default Dark Modern",
    "type": "dark",
    "colors": {
      "checkbox.border": "#ffffff1f",
      "editor.background": "#1E1F22",
      "editor.foreground": "#BCBEC4",
      "editor.inactiveSelectionBackground": "#3A3D41",
      "editorIndentGuide.background": "#404040",
      "editorIndentGuide.activeBackground": "#707070",
      "editor.selectionHighlightBackground": "#ADD6FF26",
      "list.dropBackground": "#383B3D",
      "activityBarBadge.background": "#0078d4",
      "sideBarTitle.foreground": "#BCBEC4",
      "input.placeholderForeground": "#ffffff79",
      "menu.background": "#1E1F22",
      "menu.foreground": "#BCBEC4",
      "menu.separatorBackground": "#454545",
      "menu.border": "#454545",
      "statusBarItem.remoteForeground": "#ffffff",
      "statusBarItem.remoteBackground": "#0078d4",
      "ports.iconRunningProcessForeground": "#369432",
      "sideBarSectionHeader.background": "#181818",
      "sideBarSectionHeader.border": "#ffffff15",
      "tab.lastPinnedBorder": "#ccc3",
      "list.activeSelectionIconForeground": "#ffffff",
      "terminal.inactiveSelectionBackground": "#3A3D41",
      "widget.border": "#ffffff15",
      "activityBar.activeBorder": "#0078d4",
      "activityBar.background": "#181818",
      "activityBar.border": "#ffffff15",
      "activityBar.foreground": "#d7d7d7",
      "activityBar.inactiveForeground": "#ffffff80",
      "activityBarBadge.foreground": "#ffffff",
      "badge.background": "#0078d4",
      "badge.foreground": "#ffffff",
      "button.background": "#0078d4",
      "button.border": "#ffffff12",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#0078d4e6",
      "button.secondaryBackground": "#FFFFFF0F",
      "button.secondaryForeground": "#BCBEC4",
      "button.secondaryHoverBackground": "#ffffff15",
      "checkbox.background": "#313131",
      "debugToolBar.background": "#181818",
      "descriptionForeground": "#8b949e",
      "diffEditor.insertedLineBackground": "#23863633",
      "diffEditor.insertedTextBackground": "#2386364d",
      "diffEditor.removedLineBackground": "#da363333",
      "diffEditor.removedTextBackground": "#da36334d",
      "dropdown.background": "#313131",
      "dropdown.border": "#ffffff1f",
      "dropdown.foreground": "#BCBEC4",
      "dropdown.listBackground": "#313131",
      "editor.findMatchBackground": "#9e6a03",
      "editorGroup.border": "#ffffff17",
      "editorGroupHeader.tabsBackground": "#181818",
      "editorGroupHeader.tabsBorder": "#ffffff15",
      "editorGutter.addedBackground": "#2ea043",
      "editorGutter.deletedBackground": "#f85149",
      "editorGutter.modifiedBackground": "#0078d4",
      "editorInlayHint.background": "#8b949e33",
      "editorInlayHint.foreground": "#8b949e",
      "editorInlayHint.typeBackground": "#8b949e33",
      "editorInlayHint.typeForeground": "#8b949e",
      "editorLineNumber.activeForeground": "#BCBEC4",
      "editorLineNumber.foreground": "#6e7681",
      "editorOverviewRuler.border": "#010409",
      "editorWidget.background": "#1E1F22",
      "errorForeground": "#f85149",
      "focusBorder": "#0078d4",
      "foreground": "#BCBEC4",
      "icon.foreground": "#BCBEC4",
      "input.background": "#2a2a2a",
      "input.border": "#ffffff1f",
      "input.foreground": "#BCBEC4",
      "inputOption.activeBackground": "#2489db82",
      "inputOption.activeBorder": "#2488db",
      "keybindingLabel.foreground": "#BCBEC4",
      "list.activeSelectionBackground": "#323232",
      "list.activeSelectionForeground": "#ffffff",
      "notificationCenterHeader.background": "#1E1F22",
      "notificationCenterHeader.foreground": "#BCBEC4",
      "notifications.background": "#1E1F22",
      "notifications.border": "#ffffff15",
      "notifications.foreground": "#BCBEC4",
      "panel.background": "#181818",
      "panel.border": "#ffffff15",
      "panelInput.border": "#ffffff15",
      "panelTitle.activeBorder": "#0078d4",
      "panelTitle.activeForeground": "#BCBEC4",
      "panelTitle.inactiveForeground": "#8b949e",
      "peekViewEditor.background": "#1E1F22",
      "peekViewEditor.matchHighlightBackground": "#bb800966",
      "peekViewResult.background": "#1E1F22",
      "peekViewResult.matchHighlightBackground": "#bb800966",
      "pickerGroup.border": "#ffffff15",
      "pickerGroup.foreground": "#8b949e",
      "progressBar.background": "#0078d4",
      "quickInput.background": "#1E1F22",
      "quickInput.foreground": "#BCBEC4",
      "scrollbar.shadow": "#484f5833",
      "scrollbarSlider.activeBackground": "#6e768187",
      "scrollbarSlider.background": "#6e768133",
      "scrollbarSlider.hoverBackground": "#6e768145",
      "settings.dropdownBackground": "#313131",
      "settings.dropdownBorder": "#ffffff1f",
      "settings.headerForeground": "#ffffff",
      "settings.modifiedItemIndicator": "#bb800966",
      "sideBar.background": "#181818",
      "sideBar.border": "#ffffff15",
      "sideBar.foreground": "#BCBEC4",
      "sideBarSectionHeader.foreground": "#BCBEC4",
      "statusBar.background": "#181818",
      "statusBar.border": "#ffffff15",
      "statusBar.debuggingBackground": "#0078d4",
      "statusBar.debuggingForeground": "#ffffff",
      "statusBar.focusBorder": "#0078d4",
      "statusBar.foreground": "#BCBEC4",
      "statusBar.noFolderBackground": "#1E1F22",
      "statusBarItem.focusBorder": "#0078d4",
      "statusBarItem.prominentBackground": "#6e768166",
      "tab.activeBackground": "#1E1F22",
      "tab.activeBorder": "#1E1F22",
      "tab.activeBorderTop": "#0078d4",
      "tab.activeForeground": "#ffffff",
      "tab.border": "#ffffff15",
      "tab.hoverBackground": "#1E1F22",
      "tab.inactiveBackground": "#181818",
      "tab.inactiveForeground": "#ffffff80",
      "tab.unfocusedActiveBorder": "#1E1F22",
      "tab.unfocusedActiveBorderTop": "#ffffff15",
      "tab.unfocusedHoverBackground": "#6e76811a",
      "terminal.foreground": "#BCBEC4",
      "terminal.tab.activeBorder": "#0078d4",
      "textBlockQuote.background": "#010409",
      "textBlockQuote.border": "#ffffff14",
      "textCodeBlock.background": "#6e768166",
      "textLink.activeForeground": "#40A6FF",
      "textLink.foreground": "#40A6FF",
      "textSeparator.foreground": "#21262d",
      "titleBar.activeBackground": "#181818",
      "titleBar.activeForeground": "#BCBEC4",
      "titleBar.border": "#ffffff15",
      "titleBar.inactiveBackground": "#1E1F22",
      "titleBar.inactiveForeground": "#8b949e",
      "welcomePage.tileBackground": "#ffffff0f",
      "welcomePage.progress.foreground": "#0078d4"
    },
    "tokenColors": [
      {
        "scope": [
          "meta.embedded",
          "source.groovy.embedded",
          "string meta.image.inline.markdown"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "emphasis",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "strong",
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "scope": "header",
        "settings": {
          "foreground": "#000080"
        }
      },
      {
        "name": "Comments",
        "scope": [
          "comment",
          "string.quoted.docstring"
        ],
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": "constant.language",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "constant.numeric",
          "variable.other.enummember",
          "keyword.operator.plus.exponent",
          "keyword.operator.minus.exponent"
        ],
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "constant.regexp",
        "settings": {
          "foreground": "#646695"
        }
      },
      {
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "entity.name.tag.css",
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class.css",
          "entity.other.attribute-name.class.mixin.css",
          "entity.other.attribute-name.id.css",
          "entity.other.attribute-name.parent-selector.css",
          "entity.other.attribute-name.pseudo-class.css",
          "entity.other.attribute-name.pseudo-element.css",
          "source.css.less entity.other.attribute-name.id",
          "entity.other.attribute-name.scss"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "invalid",
        "settings": {
          "foreground": "#FA6675"
        }
      },
      {
        "scope": "markup.underline",
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "scope": "markup.bold",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "markup.heading",
        "settings": {
          "fontStyle": "bold",
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "markup.italic",
        "settings": {
          "fontStyle": "italic"
        }
      },
      {
        "scope": "markup.strikethrough",
        "settings": {
          "fontStyle": "strikethrough"
        }
      },
      {
        "scope": "markup.inserted",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "markup.deleted",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "markup.changed",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "punctuation.definition.quote.begin.markdown",
        "settings": {
          "foreground": "#7A7E85"
        }
      },
      {
        "scope": "punctuation.definition.list.begin.markdown",
        "settings": {
          "foreground": "#6796e6"
        }
      },
      {
        "scope": "markup.inline.raw",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "name": "brackets of XML/HTML tags",
        "scope": "punctuation.definition.tag",
        "settings": {
          "foreground": "#808080"
        }
      },
      {
        "scope": [
          "meta.preprocessor",
          "entity.name.function.preprocessor"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "meta.preprocessor.string",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "meta.preprocessor.numeric",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": "meta.structure.dictionary.key.python",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "meta.diff.header",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "storage",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "storage.type",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "storage.modifier",
          "keyword.operator.noexcept"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "string",
          "meta.embedded.assembly"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.tag",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.value",
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": "string.regexp",
        "settings": {
          "foreground": "#d16969"
        }
      },
      {
        "name": "String interpolation",
        "scope": [
          "punctuation.definition.template-expression.begin",
          "punctuation.definition.template-expression.end",
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "name": "Reset JavaScript string interpolation expression",
        "scope": [
          "meta.template.expression"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "support.type.vendored.property-name",
          "support.type.property-name",
          "variable.css",
          "variable.scss",
          "variable.other.less",
          "source.coffee.embedded"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "keyword",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.control",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.operator",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": [
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.operator.cast",
          "keyword.operator.sizeof",
          "keyword.operator.alignof",
          "keyword.operator.typeid",
          "keyword.operator.alignas",
          "keyword.operator.instanceof",
          "keyword.operator.logical.python",
          "keyword.operator.wordlike"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "keyword.other.unit",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "scope": [
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "support.function.git-rebase",
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "scope": "constant.sha.git-rebase",
        "settings": {
          "foreground": "#2AACB8"
        }
      },
      {
        "name": "coloring of the Java import and package identifiers",
        "scope": [
          "storage.modifier.import.java",
          "variable.language.wildcard.java",
          "storage.modifier.package.java"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "this.self",
        "scope": "variable.language",
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": [
          "variable.argument.css",
          "punctuation.definition.tag",
          "entity.name.tag",
          "support.function.misc",
          "meta.function.variable.css",
          "meta.property-value.css support.function",
          "meta.selector.css",
          "entity.other.attribute-name.css"
        ],
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "keyword.other.unit",
          "punctuation.separator.key-value.html",
          "meta.tag.attributes keyword.operator.assignment"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "support.type.property-name.css"
        ],
        "settings": {
          "foreground": "#BABABA"
        }
      },
      {
        "scope": [
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "scope": [
          "meta.tag.custom entity.name.tag.html"
        ],
        "settings": {
          "foreground": "#2fbaa3"
        }
      },
      {
        "scope": [
          "comment.block.documentation",
          "comment.block.javadoc"
        ],
        "settings": {
          "foreground": "#5F826B"
        }
      },
      {
        "name": "Function declarations",
        "scope": [
          "entity.name.function",
          "support.function",
          "support.constant.handlebars",
          "source.powershell variable.other.member",
          "entity.name.operator.custom-literal"
        ],
        "settings": {
          "foreground": "#66A6FF"
        }
      },
      {
        "name": "Types declaration and references",
        "scope": [
          "support.class",
          "support.type",
          "entity.name.type",
          "entity.name.namespace",
          "entity.other.attribute",
          "entity.name.scope-resolution",
          "entity.name.class",
          "storage.type.numeric.go",
          "storage.type.byte.go",
          "storage.type.boolean.go",
          "storage.type.string.go",
          "storage.type.uintptr.go",
          "storage.type.error.go",
          "storage.type.rune.go",
          "storage.type.cs",
          "storage.type.generic.cs",
          "storage.type.modifier.cs",
          "storage.type.variable.cs",
          "storage.type.annotation.java",
          "storage.type.generic.java",
          "storage.type.java",
          "storage.type.object.array.java",
          "storage.type.primitive.array.java",
          "storage.type.primitive.java",
          "storage.type.token.java",
          "storage.type.groovy",
          "storage.type.annotation.groovy",
          "storage.type.parameters.groovy",
          "storage.type.generic.groovy",
          "storage.type.object.array.groovy",
          "storage.type.primitive.array.groovy",
          "storage.type.primitive.groovy"
        ],
        "settings": {
          "foreground": "#2FBAA3"
        }
      },
      {
        "name": "Types declaration and references, TS grammar specific",
        "scope": [
          "meta.type.cast.expr",
          "meta.type.new.expr",
          "support.constant.math",
          "support.constant.dom",
          "support.constant.json",
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#2FBAA3"
        }
      },
      {
        "name": "Control flow / Special keywords",
        "scope": [
          "keyword.control",
          "source.cpp keyword.operator.new",
          "keyword.operator.delete",
          "keyword.other.using",
          "keyword.other.operator",
          "entity.name.operator"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "name": "Variable and parameter name",
        "scope": [
          "variable",
          "meta.definition.variable.name",
          "support.variable",
          "entity.name.variable",
          "constant.other.placeholder"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "Constants and enums",
        "scope": [
          "variable.other.constant",
          "variable.other.enummember"
        ],
        "settings": {
          "foreground": "#C77DBB"
        }
      },
      {
        "name": "Object keys, TS grammar specific",
        "scope": [
          "meta.object-literal.key"
        ],
        "settings": {
          "foreground": "#BCBEC4"
        }
      },
      {
        "name": "CSS property value",
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "support.constant.media-type",
          "support.constant.media",
          "constant.other.color.rgb-value",
          "constant.other.rgb-value",
          "support.constant.color"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "name": "Regular expression groups",
        "scope": [
          "punctuation.definition.group.regexp",
          "punctuation.definition.group.assertion.regexp",
          "punctuation.definition.character-class.regexp",
          "punctuation.character.set.begin.regexp",
          "punctuation.character.set.end.regexp",
          "keyword.operator.negation.regexp",
          "support.other.parenthesis.regexp"
        ],
        "settings": {
          "foreground": "#6AAB73"
        }
      },
      {
        "scope": [
          "constant.character.character-class.regexp",
          "constant.other.character-class.set.regexp",
          "constant.other.character-class.regexp",
          "constant.character.set.regexp"
        ],
        "settings": {
          "foreground": "#d16969"
        }
      },
      {
        "scope": [
          "keyword.operator.or.regexp",
          "keyword.control.anchor.regexp"
        ],
        "settings": {
          "foreground": "#66A6FF"
        }
      },
      {
        "scope": "keyword.operator.quantifier.regexp",
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": [
          "constant.character",
          "constant.other.option"
        ],
        "settings": {
          "foreground": "#CF8E6D"
        }
      },
      {
        "scope": "constant.character.escape",
        "settings": {
          "foreground": "#D5B778"
        }
      },
      {
        "scope": "entity.name.label",
        "settings": {
          "foreground": "#C8C8C8"
        }
      }
    ],
    "semanticTokenColors": {
      "newOperator": "#CF8E6D",
      "stringLiteral": "#6AAB73",
      "customLiteral": "#66A6FF",
      "numberLiteral": "#2AACB8"
    }
  },
  {
    "id": "xcode-default-dark",
    "label": "Xcode Default Dark",
    "name": "MacOS Modern Dark - Xcode Default Big Sur",
    "type": "dark",
    "colors": {
      "activityBar.activeBackground": "#45464a57",
      "activityBar.activeBorder": "#128cff",
      "activityBar.activeFocusBorder": "#128cff",
      "activityBar.background": "#353333",
      "activityBar.border": "#101010",
      "activityBar.foreground": "#128cff",
      "activityBar.inactiveForeground": "#c2c0c0",
      "activityBarBadge.background": "#128cff",
      "badge.background": "#128cff",
      "badge.foreground": "#ffffff",
      "button.background": "#128cff",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#128cff",
      "descriptionForeground": "#777777",
      "dropdown.background": "#403e3e",
      "dropdown.border": "#bfbfbf",
      "dropdown.foreground": "#dedede",
      "dropdown.listBackground": "#ffffff",
      "editor.background": "#232222",
      "editor.foreground": "#ffffffd8",
      "editor.inactiveSelectionBackground": "#6e6e6e",
      "editor.lineHighlightBackground": "#403e3e",
      "editor.selectionBackground": "#6e6e6e",
      "editor.selectionHighlightBackground": "#6e6e6e80",
      "editor.wordHighlightBackground": "#6e6e6e80",
      "editor.wordHighlightStrongBackground": "#6e6e6e80",
      "editorError.border": "#ff000000",
      "editorError.foreground": "#e21515",
      "editorGroup.border": "#3e3c3c",
      "editorGroup.dropBackground": "#555555",
      "editorGroup.emptyBackground": "#403e3e",
      "editorGroup.focusedEmptyBorder": "#00000000",
      "editorGroupHeader.border": "#3e3c3c",
      "editorGroupHeader.noTabsBackground": "#2c2c2b",
      "editorGroupHeader.tabsBackground": "#2c2c2b",
      "editorGroupHeader.tabsBorder": "#3e3c3c",
      "editorGutter.addedBackground": "#4dbf57",
      "editorGutter.background": "#ff000000",
      "editorGutter.deletedBackground": "#e21515",
      "editorGutter.modifiedBackground": "#128cff",
      "editorHint.border": "#ff000000",
      "editorHint.foreground": "#128cff",
      "editorInfo.border": "#ff000000",
      "editorInfo.foreground": "#4dbf57",
      "editorLineNumber.activeForeground": "#ffffffd8",
      "editorLineNumber.foreground": "#747478",
      "editorOverviewRuler.addedForeground": "#4dbf57",
      "editorOverviewRuler.border": "#ff000000",
      "editorOverviewRuler.bracketMatchForeground": "#6e6e6e80",
      "editorOverviewRuler.deletedForeground": "#e21515",
      "editorOverviewRuler.errorForeground": "#e21515",
      "editorOverviewRuler.findMatchForeground": "#6e6e6e80",
      "editorOverviewRuler.infoForeground": "#128cff",
      "editorOverviewRuler.modifiedForeground": "#128cff",
      "editorOverviewRuler.rangeHighlightForeground": "#6e6e6e80",
      "editorOverviewRuler.selectionHighlightForeground": "#6e6e6e80",
      "editorOverviewRuler.warningForeground": "#ffc501",
      "editorOverviewRuler.wordHighlightForeground": "#6e6e6e80",
      "editorOverviewRuler.wordHighlightStrongForeground": "#6e6e6e80",
      "editorPane.background": "#1e1e1e",
      "editorUnnecessaryCode.opacity": "#000000c0",
      "editorWarning.border": "#ff000000",
      "editorWarning.foreground": "#ffc501",
      "editorWidget.background": "#2c2c2b",
      "focusBorder": "#3675a2",
      "foreground": "#a3a2a2",
      "input.background": "#403e3e",
      "input.border": "#515151",
      "input.foreground": "#dedede",
      "inputOption.activeBackground": "#4f4d4d",
      "list.activeSelectionBackground": "#464646",
      "list.focusOutline": "#464646",
      "list.focusBackground": "#464646",
      "list.hoverBackground": "#464646",
      "list.inactiveFocusBackground": "#464646",
      "list.inactiveSelectionBackground": "#464646",
      "minimap.background": "#00000079",
      "panel.background": "#2c2c2b",
      "panelInput.border": "#101010",
      "panelSection.border": "#101010",
      "panelSectionHeader.border": "#101010",
      "quickInput.background": "#101010",
      "quickInput.foreground": "#dedede",
      "selection.background": "#4f4d4d",
      "sideBar.background": "#353333",
      "sideBar.border": "#101010",
      "sideBar.dropBackground": "#353333",
      "sideBar.foreground": "#dedede",
      "sideBarSectionHeader.background": "#35333350",
      "sideBarSectionHeader.border": "#f9f5f500",
      "sideBarSectionHeader.foreground": "#b4b3b3",
      "sideBarTitle.foreground": "#7d7c7c",
      "statusBar.background": "#403e3e",
      "statusBar.border": "#101010",
      "statusBar.debuggingBackground": "#403e3e",
      "statusBar.foreground": "#b4b3b3",
      "statusBar.noFolderBackground": "#403e3e",
      "tab.activeBackground": "#403e3e",
      "tab.activeBorder": "#101010",
      "tab.activeBorderTop": "#403e3e",
      "tab.activeForeground": "#ebebeb",
      "tab.border": "#474646",
      "tab.inactiveBackground": "#2c2c2b",
      "tab.inactiveForeground": "#9f9f9e",
      "tab.unfocusedActiveBackground": "#403e3e",
      "tab.unfocusedActiveBorder": "#101010",
      "tab.unfocusedActiveForeground": "#ebebeb",
      "tab.unfocusedInactiveBackground": "#2c2c2b",
      "tab.unfocusedInactiveForeground": "#9f9f9e",
      "textBlockQuote.background": "#ff000000",
      "textBlockQuote.border": "#ff000000",
      "textCodeBlock.background": "#ff000000",
      "titleBar.activeBackground": "#403e3e",
      "titleBar.activeForeground": "#dedede",
      "titleBar.border": "#101010",
      "titleBar.inactiveBackground": "#403e3e",
      "titleBar.inactiveForeground": "#acacab",
      "widget.shadow": "#403e3e"
    },
    "tokenColors": [
      {
        "name": "Comment",
        "scope": "comment",
        "settings": {
          "foreground": "#6C7986"
        }
      },
      {
        "name": "String",
        "scope": "string",
        "settings": {
          "foreground": "#FC6A5D"
        }
      },
      {
        "name": "Number",
        "scope": "constant.numeric",
        "settings": {
          "foreground": "#9686F5"
        }
      },
      {
        "name": "Built-in constant",
        "scope": "constant.language",
        "settings": {
          "foreground": "#9686F5"
        }
      },
      {
        "name": "User-defined constant",
        "scope": [
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#9686F5"
        }
      },
      {
        "name": "Variable",
        "scope": "variable",
        "settings": {
          "fontStyle": "",
          "foreground": "#53A5FB"
        }
      },
      {
        "name": "Keyword",
        "scope": "keyword",
        "settings": {
          "foreground": "#FC5FA3"
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "fontStyle": "",
          "foreground": "#FC5FA3"
        }
      },
      {
        "name": "Markup bold",
        "scope": [
          "markup.bold",
          "markdown.bold"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#9686F5"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markdown.heading"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#9686F5"
        }
      },
      {
        "name": "Markup italic",
        "scope": [
          "markup.italic",
          "markdown.italic"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#FC5FA3"
        }
      },
      {
        "name": "Markup quote",
        "scope": [
          "markup.quote",
          "markdown.quote"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#FC5FA3"
        }
      },
      {
        "name": "Storage type",
        "scope": "storage.type",
        "settings": {
          "foreground": "#91D462"
        }
      },
      {
        "name": "Class name",
        "scope": "entity.name.class",
        "settings": {
          "foreground": "#91D462"
        }
      },
      {
        "name": "Inherited class",
        "scope": "entity.other.inherited-class",
        "settings": {
          "foreground": "#91D462"
        }
      },
      {
        "name": "Function name",
        "scope": "entity.name.function",
        "settings": {
          "fontStyle": "",
          "foreground": "#91D462"
        }
      },
      {
        "name": "Function argument",
        "scope": "variable.parameter",
        "settings": {
          "foreground": "#FD8F3F"
        }
      },
      {
        "name": "Tag name",
        "scope": "entity.name.tag",
        "settings": {
          "fontStyle": "",
          "foreground": "#FC5FA3"
        }
      },
      {
        "name": "Tag attribute",
        "scope": "entity.other.attribute-name",
        "settings": {
          "fontStyle": "",
          "foreground": "#75B492"
        }
      },
      {
        "name": "Library function",
        "scope": "support.function",
        "settings": {
          "fontStyle": "",
          "foreground": "#7AC8B6"
        }
      },
      {
        "name": "Library constant",
        "scope": "support.constant",
        "settings": {
          "fontStyle": "",
          "foreground": "#7AC8B6"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class"
        ],
        "settings": {
          "foreground": "#7AC8B6"
        }
      },
      {
        "name": "Library variable",
        "scope": "support.other.variable",
        "settings": {
          "fontStyle": "",
          "foreground": "#746DB0"
        }
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": "#6796e6"
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": "#cd9731"
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "#f44747"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": "#b267e6"
        }
      }
    ],
    "semanticTokenColors": {}
  },
  {
    "id": "xcode-default-light",
    "label": "Xcode Default Light",
    "name": "MacOS Modern - Xcode Default Big Sur",
    "type": "light",
    "colors": {
      "activityBar.activeBackground": "#d3d3d564",
      "activityBar.activeBorder": "#128cff",
      "activityBar.activeFocusBorder": "#128cff",
      "activityBar.background": "#e6e6e5",
      "activityBar.border": "#dcdcdb",
      "activityBar.foreground": "#128cff",
      "activityBar.inactiveForeground": "#686969",
      "activityBarBadge.background": "#128cff",
      "badge.background": "#128cff",
      "badge.foreground": "#ffffff",
      "button.background": "#128cff",
      "button.foreground": "#ffffff",
      "button.hoverBackground": "#128cff",
      "descriptionForeground": "#2e2e2e",
      "dropdown.background": "#ffffff",
      "dropdown.border": "#bfbfbf",
      "dropdown.foreground": "#222222",
      "dropdown.listBackground": "#ffffff",
      "editor.background": "#ffffff",
      "editor.findMatchBackground": "#a8ac94",
      "editor.findMatchHighlightBackground": "#128cff44",
      "editor.findRangeHighlightBackground": "#b4b4b44d",
      "editor.foreground": "#000000",
      "editor.lineHighlightBackground": "#eeeeee",
      "editor.selectionBackground": "#b5d5ff",
      "editorCursor.foreground": "#000000",
      "editorGroup.border": "#e1e2e2",
      "editorGroup.dropBackground": "#0369d922",
      "editorGroup.emptyBackground": "#f7f7f6",
      "editorGroupHeader.border": "#e1e2e2",
      "editorGroupHeader.noTabsBackground": "#e9e9e8",
      "editorGroupHeader.tabsBackground": "#e9e9e8",
      "editorGroupHeader.tabsBorder": "#e1e2e2",
      "editorIndentGuide.activeBackground": "#d7d8d7",
      "editorIndentGuide.background": "#e5e5e5",
      "editorLineNumber.activeForeground": "#666666",
      "editorLineNumber.foreground": "#bbbbbb",
      "editorWhitespace.foreground": "#bfbfbf",
      "editorWidget.background": "#f2f2f2",
      "errorForeground": "#ff0000",
      "focusBorder": "#ffffff",
      "foreground": "#434343",
      "input.background": "#fcfcfc",
      "input.border": "#bfbfbf",
      "input.foreground": "#222222",
      "inputOption.activeBackground": "#E7E7E7",
      "list.activeSelectionBackground": "#cedeef",
      "list.activeSelectionForeground": "#2e2e2e",
      "list.dropBackground": "#dedcde",
      "list.errorForeground": "#2e2e2e",
      "list.focusBackground": "#dedcdeaa",
      "list.focusForeground": "#000000",
      "list.highlightForeground": "#2e2e2e",
      "list.hoverForeground": "#2e2e2e",
      "list.inactiveFocusBackground": "#dbdbdb",
      "list.inactiveSelectionBackground": "#dbdbdb",
      "list.inactiveSelectionForeground": "#2e2d2e",
      "list.invalidItemForeground": "#2e2e2e",
      "list.warningForeground": "#2e2e2e",
      "minimap.background": "#ffffff79",
      "selection.background": "#cedeef",
      "sideBar.background": "#f8f8f7",
      "sideBar.border": "#e5e5e5",
      "sideBar.dropBackground": "#f8f8f721",
      "sideBar.foreground": "#434343",
      "sideBarSectionHeader.background": "#f8f8f73f",
      "sideBarSectionHeader.border": "#f9f5f500",
      "sideBarSectionHeader.foreground": "#666666",
      "sideBarTitle.foreground": "#444444",
      "statusBar.background": "#f6f6f5",
      "statusBar.border": "#dfdfde",
      "statusBar.debuggingBackground": "#ededed",
      "statusBar.foreground": "#666666",
      "statusBar.noFolderBackground": "#ededed",
      "tab.activeBackground": "#f7f7f6",
      "tab.activeBorder": "#e1e2e2",
      "tab.activeForeground": "#434343",
      "tab.activeBorderTop": "#e2e2e2",
      "tab.border": "#dad9d9",
      "tab.inactiveBackground": "#e9e9e8",
      "tab.inactiveForeground": "#686969",
      "tab.unfocusedActiveBackground": "#f7f7f6",
      "tab.unfocusedActiveBorder": "#e1e2e2",
      "tab.unfocusedActiveForeground": "#434343",
      "tab.unfocusedInactiveBackground": "#e9e9e8",
      "tab.unfocusedInactiveForeground": "#686969",
      "textBlockQuote.background": "#ff000000",
      "textBlockQuote.border": "#ff000000",
      "textCodeBlock.background": "#ff000000",
      "titleBar.activeBackground": "#e7e7e6",
      "titleBar.activeForeground": "#232323",
      "titleBar.border": "#dcdcdb",
      "titleBar.inactiveBackground": "#f7f7f6",
      "titleBar.inactiveForeground": "#acacab",
      "widget.shadow": "#dddddd"
    },
    "tokenColors": [
      {
        "name": "Comment",
        "scope": "comment",
        "settings": {
          "foreground": "#008E00"
        }
      },
      {
        "name": "Preprocessor Statements",
        "scope": [
          "meta.preprocessor",
          "keyword.control.import"
        ],
        "settings": {
          "foreground": "#7D4726"
        }
      },
      {
        "name": "String",
        "scope": "string",
        "settings": {
          "foreground": "#DF0002"
        }
      },
      {
        "name": "Number",
        "scope": "constant.numeric",
        "settings": {
          "foreground": "#3A00DC"
        }
      },
      {
        "name": "Built-in constant",
        "scope": "constant.language",
        "settings": {
          "foreground": "#C800A4"
        }
      },
      {
        "name": "User-defined constant",
        "scope": [
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#275A5E"
        }
      },
      {
        "name": "Variable",
        "scope": [
          "variable.language",
          "variable.other"
        ],
        "settings": {
          "foreground": "#C800A4"
        }
      },
      {
        "name": "Keyword",
        "scope": "keyword",
        "settings": {
          "foreground": "#C800A4"
        }
      },
      {
        "name": "Storage",
        "scope": "storage",
        "settings": {
          "foreground": "#C900A4"
        }
      },
      {
        "name": "Class name",
        "scope": "entity.name.class",
        "settings": {
          "foreground": "#438288"
        }
      },
      {
        "name": "Markup bold",
        "scope": [
          "markup.bold",
          "markdown.bold"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#438288"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markdown.heading"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#438288"
        }
      },
      {
        "name": "Markup italic",
        "scope": [
          "markup.italic",
          "markdown.italic"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#C900A4"
        }
      },
      {
        "name": "Markup quote",
        "scope": [
          "markup.quote",
          "markdown.quote"
        ],
        "settings": {
          "fontStyle": "",
          "foreground": "#C900A4"
        }
      },
      {
        "name": "Inherited class",
        "scope": "entity.other.inherited-class",
        "settings": {}
      },
      {
        "name": "Function name",
        "scope": "entity.name.function",
        "settings": {}
      },
      {
        "name": "Function argument",
        "scope": "variable.parameter",
        "settings": {}
      },
      {
        "name": "Tag name",
        "scope": "entity.name.tag",
        "settings": {
          "foreground": "#790EAD"
        }
      },
      {
        "name": "Tag attribute",
        "scope": "entity.other.attribute-name",
        "settings": {
          "foreground": "#450084"
        }
      },
      {
        "name": "Library function",
        "scope": "support.function",
        "settings": {
          "foreground": "#450084"
        }
      },
      {
        "name": "Library constant",
        "scope": "support.constant",
        "settings": {
          "foreground": "#450084"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class"
        ],
        "settings": {
          "foreground": "#790EAD"
        }
      },
      {
        "name": "Library variable",
        "scope": "support.other.variable",
        "settings": {
          "foreground": "#790EAD"
        }
      },
      {
        "name": "Invalid",
        "scope": "invalid",
        "settings": {}
      },
      {
        "scope": "token.info-token",
        "settings": {
          "foreground": "#316bcd"
        }
      },
      {
        "scope": "token.warn-token",
        "settings": {
          "foreground": "#cd9731"
        }
      },
      {
        "scope": "token.error-token",
        "settings": {
          "foreground": "#cd3131"
        }
      },
      {
        "scope": "token.debug-token",
        "settings": {
          "foreground": "#800080"
        }
      }
    ],
    "semanticTokenColors": {}
  },
  {
    "id": "ayu-dark-unbordered",
    "label": "Ayu Dark Unbordered",
    "name": "Ayu Dark Unbordered",
    "type": "dark",
    "colors": {
      "focusBorder": "#e6b450",
      "foreground": "#5a6378",
      "disabledForeground": "#5a637880",
      "widget.border": "#1b1f29",
      "widget.shadow": "#00000080",
      "selection.background": "#3388ff40",
      "icon.foreground": "#5a6378",
      "errorForeground": "#d95757",
      "descriptionForeground": "#5a6378",
      "textBlockQuote.background": "#141821",
      "textLink.foreground": "#e6b450",
      "textLink.activeForeground": "#e6b450",
      "textPreformat.foreground": "#bfbdb6",
      "toolbar.hoverBackground": "#47526640",
      "button.background": "#e6b450",
      "button.foreground": "#765b24",
      "button.border": "#765b241a",
      "button.separator": "#765b244d",
      "button.hoverBackground": "#deae4d",
      "button.secondaryBackground": "#5a637833",
      "button.secondaryForeground": "#bfbdb6",
      "button.secondaryHoverBackground": "#5a637880",
      "dropdown.background": "#141821",
      "dropdown.foreground": "#5a6378",
      "dropdown.border": "#1b1f29",
      "input.background": "#10141c",
      "input.border": "#5a637833",
      "input.foreground": "#bfbdb6",
      "input.placeholderForeground": "#5a637880",
      "inputOption.hoverBackground": "#5a637833",
      "inputOption.activeBorder": "#e6b45033",
      "inputOption.activeBackground": "#e6b4501a",
      "inputOption.activeForeground": "#e6b450",
      "inputValidation.errorBackground": "#10141c",
      "inputValidation.errorBorder": "#d95757",
      "inputValidation.infoBackground": "#0d1017",
      "inputValidation.infoBorder": "#39bae6",
      "inputValidation.warningBackground": "#0d1017",
      "inputValidation.warningBorder": "#ffb454",
      "scrollbar.shadow": "#1b1f2900",
      "scrollbarSlider.background": "#5a637866",
      "scrollbarSlider.hoverBackground": "#5a637899",
      "scrollbarSlider.activeBackground": "#5a6378b3",
      "badge.background": "#e6b45033",
      "badge.foreground": "#e6b450",
      "progressBar.background": "#e6b450",
      "list.activeSelectionBackground": "#47526640",
      "list.activeSelectionForeground": "#bfbdb6",
      "list.focusBackground": "#47526640",
      "list.focusForeground": "#bfbdb6",
      "list.focusOutline": "#47526640",
      "list.highlightForeground": "#e6b450",
      "list.deemphasizedForeground": "#d95757",
      "list.hoverBackground": "#47526640",
      "list.inactiveSelectionBackground": "#47526633",
      "list.inactiveSelectionForeground": "#5a6378",
      "list.invalidItemForeground": "#5a63784d",
      "list.errorForeground": "#d95757",
      "tree.indentGuidesStroke": "#5a6378a1",
      "listFilterWidget.background": "#141821",
      "listFilterWidget.outline": "#e6b450",
      "listFilterWidget.noMatchesOutline": "#d95757",
      "list.filterMatchBackground": "#43392180",
      "list.filterMatchBorder": "#4c412680",
      "activityBar.background": "#0d1017",
      "activityBar.foreground": "#5a6378cc",
      "activityBar.inactiveForeground": "#5a637899",
      "activityBar.border": "#0d1017",
      "activityBar.activeBorder": "#e6b450",
      "activityBarBadge.background": "#e6b450",
      "activityBarBadge.foreground": "#765b24",
      "activityBarTop.foreground": "#697184",
      "activityBarTop.activeBorder": "#e6b450",
      "sideBar.background": "#0d1017",
      "sideBar.border": "#0d1017",
      "sideBarTitle.foreground": "#5a6378",
      "sideBarSectionHeader.background": "#0d1017",
      "sideBarSectionHeader.foreground": "#5a6378",
      "sideBarSectionHeader.border": "#0d1017",
      "sideBarStickyScroll.border": "#1b1f29",
      "sideBarStickyScroll.shadow": "#00000080",
      "minimap.background": "#0d1017",
      "minimap.selectionHighlight": "#3388ff40",
      "minimap.errorHighlight": "#d95757",
      "minimap.findMatchHighlight": "#4c4126",
      "minimapGutter.addedBackground": "#70bf56",
      "minimapGutter.modifiedBackground": "#73b8ff",
      "minimapGutter.deletedBackground": "#f26d78",
      "editorGroup.border": "#1b1f29",
      "editorGroup.background": "#141821",
      "editorGroupHeader.noTabsBackground": "#0d1017",
      "editorGroupHeader.tabsBackground": "#0d1017",
      "editorGroupHeader.tabsBorder": "#0d1017",
      "tab.activeBackground": "#0d1017",
      "tab.activeForeground": "#bfbdb6",
      "tab.border": "#0d1017",
      "tab.activeBorder": "#e6b450",
      "tab.unfocusedActiveBorder": "#5a6378",
      "tab.inactiveBackground": "#0d1017",
      "tab.inactiveForeground": "#5a6378",
      "tab.unfocusedActiveForeground": "#5a6378",
      "tab.unfocusedInactiveForeground": "#5a6378",
      "editor.background": "#0d1017",
      "editor.foreground": "#bfbdb6",
      "editorLineNumber.foreground": "#5a6378a6",
      "editorLineNumber.activeForeground": "#5a6378",
      "editorCursor.foreground": "#e6b450",
      "editor.inactiveSelectionBackground": "#80b5ff26",
      "editor.selectionBackground": "#3388ff40",
      "editor.selectionHighlightBackground": "#70bf5626",
      "editor.selectionHighlightBorder": "#70bf5600",
      "editor.wordHighlightBackground": "#73b8ff14",
      "editor.wordHighlightStrongBackground": "#70bf5614",
      "editor.wordHighlightBorder": "#73b8ff80",
      "editor.wordHighlightStrongBorder": "#70bf5680",
      "editor.findMatchBackground": "#4c4126",
      "editor.findMatchHighlightBackground": "#4c412680",
      "editor.rangeHighlightBackground": "#4c412633",
      "editor.lineHighlightBackground": "#161a24",
      "editorLink.activeForeground": "#e6b450",
      "editorWhitespace.foreground": "#5a6378a6",
      "editorIndentGuide.background": "#5a637842",
      "editorIndentGuide.activeBackground": "#5a6378a1",
      "editorInlayHint.foreground": "#bfbdb680",
      "editorRuler.foreground": "#5a637842",
      "editorCodeLens.foreground": "#5a6673",
      "editorBracketMatch.background": "#5a63784d",
      "editorBracketMatch.border": "#5a63784d",
      "editor.snippetTabstopHighlightBackground": "#70bf5633",
      "editorOverviewRuler.border": "#1b1f29",
      "editorOverviewRuler.modifiedForeground": "#73b8ff",
      "editorOverviewRuler.addedForeground": "#70bf56",
      "editorOverviewRuler.deletedForeground": "#f26d78",
      "editorOverviewRuler.errorForeground": "#d95757",
      "editorOverviewRuler.warningForeground": "#e6b450",
      "editorOverviewRuler.bracketMatchForeground": "#5a6378b3",
      "editorOverviewRuler.wordHighlightForeground": "#73b8ff66",
      "editorOverviewRuler.wordHighlightStrongForeground": "#70bf5666",
      "editorOverviewRuler.findMatchForeground": "#4c4126",
      "editorError.foreground": "#d95757",
      "editorWarning.foreground": "#e6b450",
      "editorGutter.modifiedBackground": "#73b8ff",
      "editorGutter.addedBackground": "#70bf56",
      "editorGutter.deletedBackground": "#f26d78",
      "diffEditor.insertedTextBackground": "#70bf561f",
      "diffEditor.removedTextBackground": "#f26d781f",
      "diffEditor.diagonalFill": "#1b1f29",
      "editorWidget.background": "#141821",
      "editorWidget.border": "#1b1f29",
      "editorWidget.resizeBorder": "#141821",
      "editorHoverWidget.background": "#141821",
      "editorHoverWidget.border": "#1b1f29",
      "editorSuggestWidget.background": "#141821",
      "editorSuggestWidget.border": "#1b1f29",
      "editorSuggestWidget.highlightForeground": "#e6b450",
      "editorSuggestWidget.selectedBackground": "#47526640",
      "editorStickyScroll.border": "#1b1f29",
      "editorStickyScroll.shadow": "#00000080",
      "editorStickyScrollHover.background": "#47526633",
      "debugExceptionWidget.border": "#1b1f29",
      "debugExceptionWidget.background": "#141821",
      "editorMarkerNavigation.background": "#141821",
      "peekView.border": "#47526640",
      "peekViewTitle.background": "#47526640",
      "peekViewTitleDescription.foreground": "#5a6378",
      "peekViewTitleLabel.foreground": "#bfbdb6",
      "peekViewEditor.background": "#141821",
      "peekViewEditor.matchHighlightBackground": "#4c412680",
      "peekViewEditor.matchHighlightBorder": "#43392180",
      "peekViewResult.background": "#141821",
      "peekViewResult.fileForeground": "#bfbdb6",
      "peekViewResult.lineForeground": "#5a6378",
      "peekViewResult.matchHighlightBackground": "#4c412680",
      "peekViewResult.selectionBackground": "#47526640",
      "panel.background": "#0d1017",
      "panel.border": "#1b1f29",
      "panelTitle.activeBorder": "#e6b450",
      "panelTitle.activeForeground": "#bfbdb6",
      "panelTitle.inactiveForeground": "#5a6378",
      "panelStickyScroll.border": "#1b1f29",
      "panelStickyScroll.shadow": "#00000080",
      "statusBar.background": "#0d1017",
      "statusBar.foreground": "#5a6378",
      "statusBar.border": "#0d1017",
      "statusBar.debuggingBackground": "#f29668",
      "statusBar.debuggingForeground": "#10141c",
      "statusBar.noFolderBackground": "#141821",
      "statusBarItem.activeBackground": "#5a637833",
      "statusBarItem.hoverBackground": "#5a637833",
      "statusBarItem.prominentBackground": "#1b1f29",
      "statusBarItem.prominentHoverBackground": "#00000030",
      "statusBarItem.remoteBackground": "#e6b450",
      "statusBarItem.remoteForeground": "#765b24",
      "titleBar.activeBackground": "#0d1017",
      "titleBar.inactiveBackground": "#0d1017",
      "titleBar.activeForeground": "#5a6378",
      "titleBar.inactiveForeground": "#5a6378b3",
      "titleBar.border": "#0d1017",
      "menu.foreground": "#5a6378",
      "menu.selectionBackground": "#47526633",
      "menu.selectionBorder": "#47526640",
      "menu.background": "#0f131a",
      "menu.border": "#1b1f29",
      "menu.separatorBackground": "#1b1f29",
      "extensionButton.prominentForeground": "#765b24",
      "extensionButton.prominentBackground": "#e6b450",
      "extensionButton.prominentHoverBackground": "#e2b14f",
      "pickerGroup.border": "#1b1f29",
      "pickerGroup.foreground": "#5a637880",
      "debugToolBar.background": "#141821",
      "debugIcon.breakpointForeground": "#f29668",
      "debugIcon.breakpointDisabledForeground": "#f2966880",
      "debugConsoleInputIcon.foreground": "#e6b450",
      "welcomePage.tileBackground": "#0d1017",
      "welcomePage.tileShadow": "#00000080",
      "welcomePage.progress.background": "#161a24",
      "welcomePage.buttonBackground": "#e6b45066",
      "walkThrough.embeddedEditorBackground": "#141821",
      "gitDecoration.modifiedResourceForeground": "#73b8ff",
      "gitDecoration.deletedResourceForeground": "#f26d78",
      "gitDecoration.untrackedResourceForeground": "#70bf56",
      "gitDecoration.ignoredResourceForeground": "#5a637880",
      "gitDecoration.conflictingResourceForeground": "",
      "gitDecoration.submoduleResourceForeground": "#d2a6ff",
      "settings.headerForeground": "#bfbdb6",
      "settings.modifiedItemIndicator": "#73b8ff",
      "keybindingLabel.background": "#5a63781a",
      "keybindingLabel.foreground": "#bfbdb6",
      "keybindingLabel.border": "#bfbdb61a",
      "keybindingLabel.bottomBorder": "#bfbdb61a",
      "terminal.background": "#0d1017",
      "terminal.foreground": "#bfbdb6",
      "terminal.ansiBlack": "#1b1f29",
      "terminal.ansiRed": "#f06b73",
      "terminal.ansiGreen": "#70bf56",
      "terminal.ansiYellow": "#fdb04c",
      "terminal.ansiBlue": "#4fbfff",
      "terminal.ansiMagenta": "#d0a1ff",
      "terminal.ansiCyan": "#93e2c8",
      "terminal.ansiWhite": "#c7c7c7",
      "terminal.ansiBrightBlack": "#686868",
      "terminal.ansiBrightRed": "#f07178",
      "terminal.ansiBrightGreen": "#aad94c",
      "terminal.ansiBrightYellow": "#ffb454",
      "terminal.ansiBrightBlue": "#59c2ff",
      "terminal.ansiBrightMagenta": "#d2a6ff",
      "terminal.ansiBrightCyan": "#95e6cb",
      "terminal.ansiBrightWhite": "#ffffff",
      "terminalCommandGuide.foreground": "#5a63784d",
      "terminalStickyScroll.border": "#1b1f29",
      "terminalStickyScroll.shadow": "#00000080",
      "terminalStickyScrollHover.background": "#47526633",
      "commandCenter.foreground": "#5a6378",
      "commandCenter.activeForeground": "#5a6378",
      "commandCenter.background": "#10141c",
      "commandCenter.activeBackground": "#47526640",
      "commandCenter.border": "#1b1f29",
      "commandCenter.inactiveBorder": "#1b1f29",
      "commandCenter.activeBorder": "#47526600",
      "actionBar.toggledBackground": "#47526640",
      "profileBadge.background": "#e6b450",
      "profileBadge.foreground": "#765b24",
      "chat.requestBorder": "#47526640",
      "chat.requestBackground": "#0d1017",
      "chat.requestBubbleBackground": "#47526633",
      "chat.requestBubbleHoverBackground": "#47526640",
      "chat.slashCommandBackground": "#39bae633",
      "chat.slashCommandForeground": "#39bae6",
      "chat.editedFileForeground": "#73b8ff",
      "chat.checkpointSeparator": "#5a6673",
      "inlineChat.background": "#141821",
      "inlineChat.foreground": "#bfbdb6",
      "inlineChat.border": "#1b1f29",
      "inlineChat.shadow": "#00000080",
      "inlineChatInput.border": "#1b1f29",
      "inlineChatInput.focusBorder": "#e6b450b3",
      "inlineChatInput.placeholderForeground": "#5a637880",
      "inlineChatInput.background": "#10141c",
      "inlineChatDiff.inserted": "#70bf5633",
      "inlineChatDiff.removed": "#f26d7833",
      "inlineEdit.gutterIndicator.background": "#1b1f29",
      "inlineEdit.gutterIndicator.primaryBorder": "#e6b450",
      "inlineEdit.gutterIndicator.primaryForeground": "#e6b450",
      "inlineEdit.gutterIndicator.primaryBackground": "#e6b4501a",
      "inlineEdit.gutterIndicator.secondaryBorder": "#5a637880",
      "inlineEdit.gutterIndicator.secondaryForeground": "#5a6378",
      "inlineEdit.gutterIndicator.secondaryBackground": "#5a63781a",
      "inlineEdit.gutterIndicator.successfulBorder": "#70bf56",
      "inlineEdit.gutterIndicator.successfulForeground": "#70bf56",
      "inlineEdit.gutterIndicator.successfulBackground": "#70bf561a",
      "inlineEdit.originalBackground": "#f26d781a",
      "inlineEdit.modifiedBackground": "#70bf561a",
      "inlineEdit.originalChangedLineBackground": "#f26d7826",
      "inlineEdit.originalChangedTextBackground": "#f26d7840",
      "inlineEdit.modifiedChangedLineBackground": "#70bf5626",
      "inlineEdit.modifiedChangedTextBackground": "#70bf5640",
      "inlineEdit.originalBorder": "#f26d7880",
      "inlineEdit.modifiedBorder": "#70bf5680",
      "multiDiffEditor.headerBackground": "#141821",
      "multiDiffEditor.background": "#0d1017",
      "multiDiffEditor.border": "#1b1f29",
      "symbolIcon.arrayForeground": "#59c2ff",
      "symbolIcon.booleanForeground": "#d2a6ff",
      "symbolIcon.classForeground": "#59c2ff",
      "symbolIcon.colorForeground": "#e6c08a",
      "symbolIcon.constantForeground": "#d2a6ff",
      "symbolIcon.constructorForeground": "#ffb454",
      "symbolIcon.enumeratorForeground": "#59c2ff",
      "symbolIcon.enumeratorMemberForeground": "#d2a6ff",
      "symbolIcon.eventForeground": "#e6c08a",
      "symbolIcon.fieldForeground": "#f07178",
      "symbolIcon.fileForeground": "#5a6378",
      "symbolIcon.folderForeground": "#5a6378",
      "symbolIcon.functionForeground": "#ffb454",
      "symbolIcon.interfaceForeground": "#59c2ff",
      "symbolIcon.keyForeground": "#39bae6",
      "symbolIcon.keywordForeground": "#ff8f40",
      "symbolIcon.methodForeground": "#ffb454",
      "symbolIcon.moduleForeground": "#aad94c",
      "symbolIcon.namespaceForeground": "#aad94c",
      "symbolIcon.nullForeground": "#d2a6ff",
      "symbolIcon.numberForeground": "#d2a6ff",
      "symbolIcon.objectForeground": "#59c2ff",
      "symbolIcon.operatorForeground": "#f29668",
      "symbolIcon.packageForeground": "#aad94c",
      "symbolIcon.propertyForeground": "#f07178",
      "symbolIcon.referenceForeground": "#59c2ff",
      "symbolIcon.snippetForeground": "#e6c08a",
      "symbolIcon.stringForeground": "#aad94c",
      "symbolIcon.structForeground": "#59c2ff",
      "symbolIcon.textForeground": "#bfbdb6",
      "symbolIcon.typeParameterForeground": "#59c2ff",
      "symbolIcon.unitForeground": "#d2a6ff",
      "symbolIcon.variableForeground": "#bfbdb6"
    },
    "tokenColors": [
      {
        "settings": {
          "background": "#0d1017",
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Comment",
        "scope": [
          "comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#5a6673"
        }
      },
      {
        "name": "String",
        "scope": [
          "string",
          "constant.other.symbol"
        ],
        "settings": {
          "foreground": "#aad94c"
        }
      },
      {
        "name": "Regular Expressions and Escape Characters",
        "scope": [
          "string.regexp",
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Number",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#d2a6ff"
        }
      },
      {
        "name": "Built-in constants",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#d2a6ff"
        }
      },
      {
        "name": "Variable",
        "scope": [
          "variable",
          "variable.parameter.function-call"
        ],
        "settings": {
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Member Variable",
        "scope": [
          "variable.member"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "Language variable",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Storage",
        "scope": [
          "storage"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Operators",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#f29668"
        }
      },
      {
        "name": "Separators like ; or ,",
        "scope": [
          "punctuation.separator",
          "punctuation.terminator"
        ],
        "settings": {
          "foreground": "#bfbdb6b3"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "punctuation.section"
        ],
        "settings": {
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Accessor",
        "scope": [
          "punctuation.accessor"
        ],
        "settings": {
          "foreground": "#f29668"
        }
      },
      {
        "name": "JavaScript/TypeScript interpolation punctuation",
        "scope": [
          "punctuation.definition.template-expression"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Ruby interpolation punctuation",
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Interpolation text",
        "scope": [
          "meta.embedded"
        ],
        "settings": {
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Types fixes",
        "scope": [
          "source.java storage.type",
          "source.haskell storage.type",
          "source.c storage.type"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "Inherited class type",
        "scope": [
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Lambda arrow",
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Java primitive variable types",
        "scope": [
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Function name",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "Function arguments",
        "scope": [
          "variable.parameter",
          "meta.parameter"
        ],
        "settings": {
          "foreground": "#d2a6ff"
        }
      },
      {
        "name": "Function call",
        "scope": [
          "variable.function",
          "variable.annotation",
          "meta.function-call.generic",
          "support.function.go"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "Library function",
        "scope": [
          "support.function",
          "support.macro"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "Imports and packages",
        "scope": [
          "entity.name.import",
          "entity.name.package"
        ],
        "settings": {
          "foreground": "#aad94c"
        }
      },
      {
        "name": "Entity name",
        "scope": [
          "entity.name"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "Tag start/end",
        "scope": [
          "punctuation.definition.tag.end",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": "#39bae680"
        }
      },
      {
        "name": "Tag attribute",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "CSS pseudo-class",
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Library constant",
        "scope": [
          "support.constant"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f29668"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class",
          "source.go storage.type"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Decorators/annotation",
        "scope": [
          "meta.decorator variable.other",
          "meta.decorator punctuation.decorator",
          "storage.type.annotation",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#e6c08a"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#d95757"
        }
      },
      {
        "name": "diff.header",
        "scope": [
          "meta.diff",
          "meta.diff.header"
        ],
        "settings": {
          "foreground": "#c594c5"
        }
      },
      {
        "name": "Ruby class methods",
        "scope": [
          "source.ruby variable.other.readwrite"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "CSS tag names",
        "scope": [
          "source.css entity.name.tag",
          "source.sass entity.name.tag",
          "source.scss entity.name.tag",
          "source.less entity.name.tag",
          "source.stylus entity.name.tag"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "CSS browser prefix",
        "scope": [
          "source.css support.type",
          "source.sass support.type",
          "source.scss support.type",
          "source.less support.type",
          "source.stylus support.type"
        ],
        "settings": {
          "foreground": "#5a6673"
        }
      },
      {
        "name": "CSS Properties",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "fontStyle": "normal",
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Search Results Numbers",
        "scope": [
          "constant.numeric.line-number.find-in-files - match"
        ],
        "settings": {
          "foreground": "#5a6673"
        }
      },
      {
        "name": "Search Results Match Numbers",
        "scope": [
          "constant.numeric.line-number.match"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Search Results Lines",
        "scope": [
          "entity.name.filename.find-in-files"
        ],
        "settings": {
          "foreground": "#aad94c"
        }
      },
      {
        "scope": [
          "message.error"
        ],
        "settings": {
          "foreground": "#d95757"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#aad94c"
        }
      },
      {
        "name": "Markup links",
        "scope": [
          "markup.underline.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Markup Italic/Emphasis",
        "scope": [
          "markup.italic",
          "emphasis"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f07178"
        }
      },
      {
        "name": "Markup Bold",
        "scope": [
          "markup.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f07178"
        }
      },
      {
        "name": "Markup Underline",
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Markup Bold/italic",
        "scope": [
          "markup.italic markup.bold",
          "markup.bold markup.italic"
        ],
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Markup Code",
        "scope": [
          "markup.raw"
        ],
        "settings": {
          "background": "#bfbdb605"
        }
      },
      {
        "name": "Markup Code Inline",
        "scope": [
          "markup.raw.inline"
        ],
        "settings": {
          "background": "#bfbdb60f"
        }
      },
      {
        "name": "Markdown Separator",
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "fontStyle": "bold",
          "background": "#bfbdb60f",
          "foreground": "#5a6673"
        }
      },
      {
        "name": "Markup Blockquote",
        "scope": [
          "markup.quote"
        ],
        "settings": {
          "foreground": "#95e6cb",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markup List Bullet",
        "scope": [
          "markup.list punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "Markup added",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": "#70bf56"
        }
      },
      {
        "name": "Markup modified",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": "#73b8ff"
        }
      },
      {
        "name": "Markup removed",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": "#f26d78"
        }
      },
      {
        "name": "Markup Strike",
        "scope": [
          "markup.strike"
        ],
        "settings": {
          "foreground": "#e6c08a"
        }
      },
      {
        "name": "Markup strong",
        "scope": [
          "markup.strong"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup Table",
        "scope": [
          "markup.table"
        ],
        "settings": {
          "background": "#bfbdb60f",
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Markup Raw Inline",
        "scope": [
          "text.html.markdown markup.inline.raw"
        ],
        "settings": {
          "foreground": "#f29668"
        }
      },
      {
        "name": "Markdown - Line Break",
        "scope": [
          "text.html.markdown meta.dummy.line-break"
        ],
        "settings": {
          "background": "#5a6673",
          "foreground": "#5a6673"
        }
      },
      {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
          "punctuation.definition.markdown"
        ],
        "settings": {
          "background": "#bfbdb6",
          "foreground": "#5a6673"
        }
      }
    ],
    "semanticTokenColors": {
      "class": "#59c2ff",
      "class.defaultLibrary": "#39bae6",
      "enum": "#59c2ff",
      "enum.defaultLibrary": "#39bae6",
      "interface": "#39bae6",
      "interface.defaultLibrary": {
        "foreground": "#39bae6",
        "italic": true
      },
      "struct": "#59c2ff",
      "struct.defaultLibrary": "#39bae6",
      "type": "#59c2ff",
      "type.defaultLibrary": "#39bae6",
      "enumMember": "#95e6cb",
      "event": "#f29668",
      "function": "#ffb454",
      "method": "#ffb454",
      "macro": "#e6c08a",
      "comment": "#5a6673",
      "string": "#aad94c",
      "keyword": "#ff8f40",
      "number": "#d2a6ff",
      "regexp": "#95e6cb",
      "operator": "#f29668"
    }
  },
  {
    "id": "ayu-dark",
    "label": "Ayu Dark",
    "name": "Ayu Dark",
    "type": "dark",
    "colors": {
      "focusBorder": "#e6b450",
      "foreground": "#5a6378",
      "disabledForeground": "#5a637880",
      "widget.border": "#1b1f29",
      "widget.shadow": "#00000080",
      "selection.background": "#3388ff40",
      "icon.foreground": "#5a6378",
      "errorForeground": "#d95757",
      "descriptionForeground": "#5a6378",
      "textBlockQuote.background": "#141821",
      "textLink.foreground": "#e6b450",
      "textLink.activeForeground": "#e6b450",
      "textPreformat.foreground": "#bfbdb6",
      "toolbar.hoverBackground": "#47526640",
      "button.background": "#e6b450",
      "button.foreground": "#765b24",
      "button.border": "#765b241a",
      "button.separator": "#765b244d",
      "button.hoverBackground": "#deae4d",
      "button.secondaryBackground": "#5a637833",
      "button.secondaryForeground": "#bfbdb6",
      "button.secondaryHoverBackground": "#5a637880",
      "dropdown.background": "#141821",
      "dropdown.foreground": "#5a6378",
      "dropdown.border": "#1b1f29",
      "input.background": "#10141c",
      "input.border": "#5a637833",
      "input.foreground": "#bfbdb6",
      "input.placeholderForeground": "#5a637880",
      "inputOption.hoverBackground": "#5a637833",
      "inputOption.activeBorder": "#e6b45033",
      "inputOption.activeBackground": "#e6b4501a",
      "inputOption.activeForeground": "#e6b450",
      "inputValidation.errorBackground": "#10141c",
      "inputValidation.errorBorder": "#d95757",
      "inputValidation.infoBackground": "#0d1017",
      "inputValidation.infoBorder": "#39bae6",
      "inputValidation.warningBackground": "#0d1017",
      "inputValidation.warningBorder": "#ffb454",
      "scrollbar.shadow": "#1b1f2900",
      "scrollbarSlider.background": "#5a637866",
      "scrollbarSlider.hoverBackground": "#5a637899",
      "scrollbarSlider.activeBackground": "#5a6378b3",
      "badge.background": "#e6b45033",
      "badge.foreground": "#e6b450",
      "progressBar.background": "#e6b450",
      "list.activeSelectionBackground": "#47526640",
      "list.activeSelectionForeground": "#bfbdb6",
      "list.focusBackground": "#47526640",
      "list.focusForeground": "#bfbdb6",
      "list.focusOutline": "#47526640",
      "list.highlightForeground": "#e6b450",
      "list.deemphasizedForeground": "#d95757",
      "list.hoverBackground": "#47526640",
      "list.inactiveSelectionBackground": "#47526633",
      "list.inactiveSelectionForeground": "#5a6378",
      "list.invalidItemForeground": "#5a63784d",
      "list.errorForeground": "#d95757",
      "tree.indentGuidesStroke": "#5a6378a1",
      "listFilterWidget.background": "#141821",
      "listFilterWidget.outline": "#e6b450",
      "listFilterWidget.noMatchesOutline": "#d95757",
      "list.filterMatchBackground": "#43392180",
      "list.filterMatchBorder": "#4c412680",
      "activityBar.background": "#0d1017",
      "activityBar.foreground": "#5a6378cc",
      "activityBar.inactiveForeground": "#5a637899",
      "activityBar.border": "#1b1f29",
      "activityBar.activeBorder": "#e6b450",
      "activityBarBadge.background": "#e6b450",
      "activityBarBadge.foreground": "#765b24",
      "activityBarTop.foreground": "#697184",
      "activityBarTop.activeBorder": "#e6b450",
      "sideBar.background": "#0d1017",
      "sideBar.border": "#1b1f29",
      "sideBarTitle.foreground": "#5a6378",
      "sideBarSectionHeader.background": "#0d1017",
      "sideBarSectionHeader.foreground": "#5a6378",
      "sideBarSectionHeader.border": "#1b1f29",
      "sideBarStickyScroll.border": "#1b1f29",
      "sideBarStickyScroll.shadow": "#00000080",
      "minimap.background": "#10141c",
      "minimap.selectionHighlight": "#3388ff40",
      "minimap.errorHighlight": "#d95757",
      "minimap.findMatchHighlight": "#4c4126",
      "minimapGutter.addedBackground": "#70bf56",
      "minimapGutter.modifiedBackground": "#73b8ff",
      "minimapGutter.deletedBackground": "#f26d78",
      "editorGroup.border": "#1b1f29",
      "editorGroup.background": "#141821",
      "editorGroupHeader.noTabsBackground": "#0d1017",
      "editorGroupHeader.tabsBackground": "#0d1017",
      "editorGroupHeader.tabsBorder": "#1b1f29",
      "tab.activeBackground": "#10141c",
      "tab.activeForeground": "#bfbdb6",
      "tab.border": "#1b1f29",
      "tab.activeBorder": "#10141c",
      "tab.activeBorderTop": "#e6b450",
      "tab.unfocusedActiveBorderTop": "#5a6378",
      "tab.inactiveBackground": "#0d1017",
      "tab.inactiveForeground": "#5a6378",
      "tab.unfocusedActiveForeground": "#5a6378",
      "tab.unfocusedInactiveForeground": "#5a6378",
      "editor.background": "#10141c",
      "editor.foreground": "#bfbdb6",
      "editorLineNumber.foreground": "#5a6378a6",
      "editorLineNumber.activeForeground": "#5a6378",
      "editorCursor.foreground": "#e6b450",
      "editor.inactiveSelectionBackground": "#80b5ff26",
      "editor.selectionBackground": "#3388ff40",
      "editor.selectionHighlightBackground": "#70bf5626",
      "editor.selectionHighlightBorder": "#70bf5600",
      "editor.wordHighlightBackground": "#73b8ff14",
      "editor.wordHighlightStrongBackground": "#70bf5614",
      "editor.wordHighlightBorder": "#73b8ff80",
      "editor.wordHighlightStrongBorder": "#70bf5680",
      "editor.findMatchBackground": "#4c4126",
      "editor.findMatchHighlightBackground": "#4c412680",
      "editor.rangeHighlightBackground": "#4c412633",
      "editor.lineHighlightBackground": "#161a24",
      "editorLink.activeForeground": "#e6b450",
      "editorWhitespace.foreground": "#5a6378a6",
      "editorIndentGuide.background": "#5a637842",
      "editorIndentGuide.activeBackground": "#5a6378a1",
      "editorInlayHint.foreground": "#bfbdb680",
      "editorRuler.foreground": "#5a637842",
      "editorCodeLens.foreground": "#5a6673",
      "editorBracketMatch.background": "#5a63784d",
      "editorBracketMatch.border": "#5a63784d",
      "editor.snippetTabstopHighlightBackground": "#70bf5633",
      "editorOverviewRuler.border": "#1b1f29",
      "editorOverviewRuler.modifiedForeground": "#73b8ff",
      "editorOverviewRuler.addedForeground": "#70bf56",
      "editorOverviewRuler.deletedForeground": "#f26d78",
      "editorOverviewRuler.errorForeground": "#d95757",
      "editorOverviewRuler.warningForeground": "#e6b450",
      "editorOverviewRuler.bracketMatchForeground": "#5a6378b3",
      "editorOverviewRuler.wordHighlightForeground": "#73b8ff66",
      "editorOverviewRuler.wordHighlightStrongForeground": "#70bf5666",
      "editorOverviewRuler.findMatchForeground": "#4c4126",
      "editorError.foreground": "#d95757",
      "editorWarning.foreground": "#e6b450",
      "editorGutter.modifiedBackground": "#73b8ff",
      "editorGutter.addedBackground": "#70bf56",
      "editorGutter.deletedBackground": "#f26d78",
      "diffEditor.insertedTextBackground": "#70bf561f",
      "diffEditor.removedTextBackground": "#f26d781f",
      "diffEditor.diagonalFill": "#1b1f29",
      "editorWidget.background": "#141821",
      "editorWidget.border": "#1b1f29",
      "editorWidget.resizeBorder": "#141821",
      "editorHoverWidget.background": "#141821",
      "editorHoverWidget.border": "#1b1f29",
      "editorSuggestWidget.background": "#141821",
      "editorSuggestWidget.border": "#1b1f29",
      "editorSuggestWidget.highlightForeground": "#e6b450",
      "editorSuggestWidget.selectedBackground": "#47526640",
      "editorStickyScroll.border": "#1b1f29",
      "editorStickyScroll.shadow": "#00000080",
      "editorStickyScrollHover.background": "#47526633",
      "debugExceptionWidget.border": "#1b1f29",
      "debugExceptionWidget.background": "#141821",
      "editorMarkerNavigation.background": "#141821",
      "peekView.border": "#47526640",
      "peekViewTitle.background": "#47526640",
      "peekViewTitleDescription.foreground": "#5a6378",
      "peekViewTitleLabel.foreground": "#bfbdb6",
      "peekViewEditor.background": "#141821",
      "peekViewEditor.matchHighlightBackground": "#4c412680",
      "peekViewEditor.matchHighlightBorder": "#43392180",
      "peekViewResult.background": "#141821",
      "peekViewResult.fileForeground": "#bfbdb6",
      "peekViewResult.lineForeground": "#5a6378",
      "peekViewResult.matchHighlightBackground": "#4c412680",
      "peekViewResult.selectionBackground": "#47526640",
      "panel.background": "#0d1017",
      "panel.border": "#1b1f29",
      "panelTitle.activeBorder": "#e6b450",
      "panelTitle.activeForeground": "#bfbdb6",
      "panelTitle.inactiveForeground": "#5a6378",
      "panelStickyScroll.border": "#1b1f29",
      "panelStickyScroll.shadow": "#00000080",
      "statusBar.background": "#0d1017",
      "statusBar.foreground": "#5a6378",
      "statusBar.border": "#1b1f29",
      "statusBar.debuggingBackground": "#f29668",
      "statusBar.debuggingForeground": "#10141c",
      "statusBar.noFolderBackground": "#141821",
      "statusBarItem.activeBackground": "#5a637833",
      "statusBarItem.hoverBackground": "#5a637833",
      "statusBarItem.prominentBackground": "#1b1f29",
      "statusBarItem.prominentHoverBackground": "#00000030",
      "statusBarItem.remoteBackground": "#e6b450",
      "statusBarItem.remoteForeground": "#765b24",
      "titleBar.activeBackground": "#0d1017",
      "titleBar.inactiveBackground": "#0d1017",
      "titleBar.activeForeground": "#5a6378",
      "titleBar.inactiveForeground": "#5a6378b3",
      "titleBar.border": "#1b1f29",
      "menu.foreground": "#5a6378",
      "menu.selectionBackground": "#47526633",
      "menu.selectionBorder": "#47526640",
      "menu.background": "#0f131a",
      "menu.border": "#1b1f29",
      "menu.separatorBackground": "#1b1f29",
      "extensionButton.prominentForeground": "#765b24",
      "extensionButton.prominentBackground": "#e6b450",
      "extensionButton.prominentHoverBackground": "#e2b14f",
      "pickerGroup.border": "#1b1f29",
      "pickerGroup.foreground": "#5a637880",
      "debugToolBar.background": "#141821",
      "debugIcon.breakpointForeground": "#f29668",
      "debugIcon.breakpointDisabledForeground": "#f2966880",
      "debugConsoleInputIcon.foreground": "#e6b450",
      "welcomePage.tileBackground": "#0d1017",
      "welcomePage.tileShadow": "#00000080",
      "welcomePage.progress.background": "#161a24",
      "welcomePage.buttonBackground": "#e6b45066",
      "walkThrough.embeddedEditorBackground": "#141821",
      "gitDecoration.modifiedResourceForeground": "#73b8ff",
      "gitDecoration.deletedResourceForeground": "#f26d78",
      "gitDecoration.untrackedResourceForeground": "#70bf56",
      "gitDecoration.ignoredResourceForeground": "#5a637880",
      "gitDecoration.conflictingResourceForeground": "",
      "gitDecoration.submoduleResourceForeground": "#d2a6ff",
      "settings.headerForeground": "#bfbdb6",
      "settings.modifiedItemIndicator": "#73b8ff",
      "keybindingLabel.background": "#5a63781a",
      "keybindingLabel.foreground": "#bfbdb6",
      "keybindingLabel.border": "#bfbdb61a",
      "keybindingLabel.bottomBorder": "#bfbdb61a",
      "terminal.background": "#0d1017",
      "terminal.foreground": "#bfbdb6",
      "terminal.ansiBlack": "#1b1f29",
      "terminal.ansiRed": "#f06b73",
      "terminal.ansiGreen": "#70bf56",
      "terminal.ansiYellow": "#fdb04c",
      "terminal.ansiBlue": "#4fbfff",
      "terminal.ansiMagenta": "#d0a1ff",
      "terminal.ansiCyan": "#93e2c8",
      "terminal.ansiWhite": "#c7c7c7",
      "terminal.ansiBrightBlack": "#686868",
      "terminal.ansiBrightRed": "#f07178",
      "terminal.ansiBrightGreen": "#aad94c",
      "terminal.ansiBrightYellow": "#ffb454",
      "terminal.ansiBrightBlue": "#59c2ff",
      "terminal.ansiBrightMagenta": "#d2a6ff",
      "terminal.ansiBrightCyan": "#95e6cb",
      "terminal.ansiBrightWhite": "#ffffff",
      "terminalCommandGuide.foreground": "#5a63784d",
      "terminalStickyScroll.border": "#1b1f29",
      "terminalStickyScroll.shadow": "#00000080",
      "terminalStickyScrollHover.background": "#47526633",
      "commandCenter.foreground": "#5a6378",
      "commandCenter.activeForeground": "#5a6378",
      "commandCenter.background": "#10141c",
      "commandCenter.activeBackground": "#47526640",
      "commandCenter.border": "#1b1f29",
      "commandCenter.inactiveBorder": "#1b1f29",
      "commandCenter.activeBorder": "#47526600",
      "actionBar.toggledBackground": "#47526640",
      "profileBadge.background": "#e6b450",
      "profileBadge.foreground": "#765b24",
      "chat.requestBorder": "#47526640",
      "chat.requestBackground": "#0d1017",
      "chat.requestBubbleBackground": "#47526633",
      "chat.requestBubbleHoverBackground": "#47526640",
      "chat.slashCommandBackground": "#39bae633",
      "chat.slashCommandForeground": "#39bae6",
      "chat.editedFileForeground": "#73b8ff",
      "chat.checkpointSeparator": "#5a6673",
      "inlineChat.background": "#141821",
      "inlineChat.foreground": "#bfbdb6",
      "inlineChat.border": "#1b1f29",
      "inlineChat.shadow": "#00000080",
      "inlineChatInput.border": "#1b1f29",
      "inlineChatInput.focusBorder": "#e6b450b3",
      "inlineChatInput.placeholderForeground": "#5a637880",
      "inlineChatInput.background": "#10141c",
      "inlineChatDiff.inserted": "#70bf5633",
      "inlineChatDiff.removed": "#f26d7833",
      "inlineEdit.gutterIndicator.background": "#1b1f29",
      "inlineEdit.gutterIndicator.primaryBorder": "#e6b450",
      "inlineEdit.gutterIndicator.primaryForeground": "#e6b450",
      "inlineEdit.gutterIndicator.primaryBackground": "#e6b4501a",
      "inlineEdit.gutterIndicator.secondaryBorder": "#5a637880",
      "inlineEdit.gutterIndicator.secondaryForeground": "#5a6378",
      "inlineEdit.gutterIndicator.secondaryBackground": "#5a63781a",
      "inlineEdit.gutterIndicator.successfulBorder": "#70bf56",
      "inlineEdit.gutterIndicator.successfulForeground": "#70bf56",
      "inlineEdit.gutterIndicator.successfulBackground": "#70bf561a",
      "inlineEdit.originalBackground": "#f26d781a",
      "inlineEdit.modifiedBackground": "#70bf561a",
      "inlineEdit.originalChangedLineBackground": "#f26d7826",
      "inlineEdit.originalChangedTextBackground": "#f26d7840",
      "inlineEdit.modifiedChangedLineBackground": "#70bf5626",
      "inlineEdit.modifiedChangedTextBackground": "#70bf5640",
      "inlineEdit.originalBorder": "#f26d7880",
      "inlineEdit.modifiedBorder": "#70bf5680",
      "multiDiffEditor.headerBackground": "#141821",
      "multiDiffEditor.background": "#0d1017",
      "multiDiffEditor.border": "#1b1f29",
      "symbolIcon.arrayForeground": "#59c2ff",
      "symbolIcon.booleanForeground": "#d2a6ff",
      "symbolIcon.classForeground": "#59c2ff",
      "symbolIcon.colorForeground": "#e6c08a",
      "symbolIcon.constantForeground": "#d2a6ff",
      "symbolIcon.constructorForeground": "#ffb454",
      "symbolIcon.enumeratorForeground": "#59c2ff",
      "symbolIcon.enumeratorMemberForeground": "#d2a6ff",
      "symbolIcon.eventForeground": "#e6c08a",
      "symbolIcon.fieldForeground": "#f07178",
      "symbolIcon.fileForeground": "#5a6378",
      "symbolIcon.folderForeground": "#5a6378",
      "symbolIcon.functionForeground": "#ffb454",
      "symbolIcon.interfaceForeground": "#59c2ff",
      "symbolIcon.keyForeground": "#39bae6",
      "symbolIcon.keywordForeground": "#ff8f40",
      "symbolIcon.methodForeground": "#ffb454",
      "symbolIcon.moduleForeground": "#aad94c",
      "symbolIcon.namespaceForeground": "#aad94c",
      "symbolIcon.nullForeground": "#d2a6ff",
      "symbolIcon.numberForeground": "#d2a6ff",
      "symbolIcon.objectForeground": "#59c2ff",
      "symbolIcon.operatorForeground": "#f29668",
      "symbolIcon.packageForeground": "#aad94c",
      "symbolIcon.propertyForeground": "#f07178",
      "symbolIcon.referenceForeground": "#59c2ff",
      "symbolIcon.snippetForeground": "#e6c08a",
      "symbolIcon.stringForeground": "#aad94c",
      "symbolIcon.structForeground": "#59c2ff",
      "symbolIcon.textForeground": "#bfbdb6",
      "symbolIcon.typeParameterForeground": "#59c2ff",
      "symbolIcon.unitForeground": "#d2a6ff",
      "symbolIcon.variableForeground": "#bfbdb6"
    },
    "tokenColors": [
      {
        "settings": {
          "background": "#0d1017",
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Comment",
        "scope": [
          "comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#5a6673"
        }
      },
      {
        "name": "String",
        "scope": [
          "string",
          "constant.other.symbol"
        ],
        "settings": {
          "foreground": "#aad94c"
        }
      },
      {
        "name": "Regular Expressions and Escape Characters",
        "scope": [
          "string.regexp",
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Number",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#d2a6ff"
        }
      },
      {
        "name": "Built-in constants",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#d2a6ff"
        }
      },
      {
        "name": "Variable",
        "scope": [
          "variable",
          "variable.parameter.function-call"
        ],
        "settings": {
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Member Variable",
        "scope": [
          "variable.member"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "Language variable",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Storage",
        "scope": [
          "storage"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Operators",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#f29668"
        }
      },
      {
        "name": "Separators like ; or ,",
        "scope": [
          "punctuation.separator",
          "punctuation.terminator"
        ],
        "settings": {
          "foreground": "#bfbdb6b3"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "punctuation.section"
        ],
        "settings": {
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Accessor",
        "scope": [
          "punctuation.accessor"
        ],
        "settings": {
          "foreground": "#f29668"
        }
      },
      {
        "name": "JavaScript/TypeScript interpolation punctuation",
        "scope": [
          "punctuation.definition.template-expression"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Ruby interpolation punctuation",
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Interpolation text",
        "scope": [
          "meta.embedded"
        ],
        "settings": {
          "foreground": "#bfbdb6"
        }
      },
      {
        "name": "Types fixes",
        "scope": [
          "source.java storage.type",
          "source.haskell storage.type",
          "source.c storage.type"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "Inherited class type",
        "scope": [
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Lambda arrow",
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Java primitive variable types",
        "scope": [
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Function name",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "Function arguments",
        "scope": [
          "variable.parameter",
          "meta.parameter"
        ],
        "settings": {
          "foreground": "#d2a6ff"
        }
      },
      {
        "name": "Function call",
        "scope": [
          "variable.function",
          "variable.annotation",
          "meta.function-call.generic",
          "support.function.go"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "Library function",
        "scope": [
          "support.function",
          "support.macro"
        ],
        "settings": {
          "foreground": "#f07178"
        }
      },
      {
        "name": "Imports and packages",
        "scope": [
          "entity.name.import",
          "entity.name.package"
        ],
        "settings": {
          "foreground": "#aad94c"
        }
      },
      {
        "name": "Entity name",
        "scope": [
          "entity.name"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "Tag start/end",
        "scope": [
          "punctuation.definition.tag.end",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": "#39bae680"
        }
      },
      {
        "name": "Tag attribute",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "CSS pseudo-class",
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Library constant",
        "scope": [
          "support.constant"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f29668"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class",
          "source.go storage.type"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Decorators/annotation",
        "scope": [
          "meta.decorator variable.other",
          "meta.decorator punctuation.decorator",
          "storage.type.annotation",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#e6c08a"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#d95757"
        }
      },
      {
        "name": "diff.header",
        "scope": [
          "meta.diff",
          "meta.diff.header"
        ],
        "settings": {
          "foreground": "#c594c5"
        }
      },
      {
        "name": "Ruby class methods",
        "scope": [
          "source.ruby variable.other.readwrite"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "CSS tag names",
        "scope": [
          "source.css entity.name.tag",
          "source.sass entity.name.tag",
          "source.scss entity.name.tag",
          "source.less entity.name.tag",
          "source.stylus entity.name.tag"
        ],
        "settings": {
          "foreground": "#59c2ff"
        }
      },
      {
        "name": "CSS browser prefix",
        "scope": [
          "source.css support.type",
          "source.sass support.type",
          "source.scss support.type",
          "source.less support.type",
          "source.stylus support.type"
        ],
        "settings": {
          "foreground": "#5a6673"
        }
      },
      {
        "name": "CSS Properties",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "fontStyle": "normal",
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Search Results Numbers",
        "scope": [
          "constant.numeric.line-number.find-in-files - match"
        ],
        "settings": {
          "foreground": "#5a6673"
        }
      },
      {
        "name": "Search Results Match Numbers",
        "scope": [
          "constant.numeric.line-number.match"
        ],
        "settings": {
          "foreground": "#ff8f40"
        }
      },
      {
        "name": "Search Results Lines",
        "scope": [
          "entity.name.filename.find-in-files"
        ],
        "settings": {
          "foreground": "#aad94c"
        }
      },
      {
        "scope": [
          "message.error"
        ],
        "settings": {
          "foreground": "#d95757"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#aad94c"
        }
      },
      {
        "name": "Markup links",
        "scope": [
          "markup.underline.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Markup Italic/Emphasis",
        "scope": [
          "markup.italic",
          "emphasis"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f07178"
        }
      },
      {
        "name": "Markup Bold",
        "scope": [
          "markup.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f07178"
        }
      },
      {
        "name": "Markup Underline",
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Markup Bold/italic",
        "scope": [
          "markup.italic markup.bold",
          "markup.bold markup.italic"
        ],
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Markup Code",
        "scope": [
          "markup.raw"
        ],
        "settings": {
          "background": "#bfbdb605"
        }
      },
      {
        "name": "Markup Code Inline",
        "scope": [
          "markup.raw.inline"
        ],
        "settings": {
          "background": "#bfbdb60f"
        }
      },
      {
        "name": "Markdown Separator",
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "fontStyle": "bold",
          "background": "#bfbdb60f",
          "foreground": "#5a6673"
        }
      },
      {
        "name": "Markup Blockquote",
        "scope": [
          "markup.quote"
        ],
        "settings": {
          "foreground": "#95e6cb",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markup List Bullet",
        "scope": [
          "markup.list punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#ffb454"
        }
      },
      {
        "name": "Markup added",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": "#70bf56"
        }
      },
      {
        "name": "Markup modified",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": "#73b8ff"
        }
      },
      {
        "name": "Markup removed",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": "#f26d78"
        }
      },
      {
        "name": "Markup Strike",
        "scope": [
          "markup.strike"
        ],
        "settings": {
          "foreground": "#e6c08a"
        }
      },
      {
        "name": "Markup strong",
        "scope": [
          "markup.strong"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup Table",
        "scope": [
          "markup.table"
        ],
        "settings": {
          "background": "#bfbdb60f",
          "foreground": "#39bae6"
        }
      },
      {
        "name": "Markup Raw Inline",
        "scope": [
          "text.html.markdown markup.inline.raw"
        ],
        "settings": {
          "foreground": "#f29668"
        }
      },
      {
        "name": "Markdown - Line Break",
        "scope": [
          "text.html.markdown meta.dummy.line-break"
        ],
        "settings": {
          "background": "#5a6673",
          "foreground": "#5a6673"
        }
      },
      {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
          "punctuation.definition.markdown"
        ],
        "settings": {
          "background": "#bfbdb6",
          "foreground": "#5a6673"
        }
      }
    ],
    "semanticTokenColors": {
      "class": "#59c2ff",
      "class.defaultLibrary": "#39bae6",
      "enum": "#59c2ff",
      "enum.defaultLibrary": "#39bae6",
      "interface": "#39bae6",
      "interface.defaultLibrary": {
        "foreground": "#39bae6",
        "italic": true
      },
      "struct": "#59c2ff",
      "struct.defaultLibrary": "#39bae6",
      "type": "#59c2ff",
      "type.defaultLibrary": "#39bae6",
      "enumMember": "#95e6cb",
      "event": "#f29668",
      "function": "#ffb454",
      "method": "#ffb454",
      "macro": "#e6c08a",
      "comment": "#5a6673",
      "string": "#aad94c",
      "keyword": "#ff8f40",
      "number": "#d2a6ff",
      "regexp": "#95e6cb",
      "operator": "#f29668"
    }
  },
  {
    "id": "ayu-light-unbordered",
    "label": "Ayu Light Unbordered",
    "name": "Ayu Light Unbordered",
    "type": "light",
    "colors": {
      "focusBorder": "#f29718",
      "foreground": "#828e9f",
      "disabledForeground": "#828e9f80",
      "widget.border": "#6b7d8f1f",
      "widget.shadow": "#6b7d8f12",
      "selection.background": "#035bd626",
      "icon.foreground": "#828e9f",
      "errorForeground": "#e65050",
      "descriptionForeground": "#828e9f",
      "textBlockQuote.background": "#fafafa",
      "textLink.foreground": "#f29718",
      "textLink.activeForeground": "#f29718",
      "textPreformat.foreground": "#5c6166",
      "toolbar.hoverBackground": "#6b7d8f24",
      "button.background": "#f29718",
      "button.foreground": "#7e4b01",
      "button.border": "#7e4b011a",
      "button.separator": "#7e4b014d",
      "button.hoverBackground": "#ea9216",
      "button.secondaryBackground": "#828e9f33",
      "button.secondaryForeground": "#5c6166",
      "button.secondaryHoverBackground": "#828e9f80",
      "dropdown.background": "#fafafa",
      "dropdown.foreground": "#828e9f",
      "dropdown.border": "#6b7d8f1f",
      "input.background": "#fcfcfc",
      "input.border": "#828e9f33",
      "input.foreground": "#5c6166",
      "input.placeholderForeground": "#828e9f80",
      "inputOption.hoverBackground": "#828e9f33",
      "inputOption.activeBorder": "#f2971833",
      "inputOption.activeBackground": "#f297181a",
      "inputOption.activeForeground": "#f29718",
      "inputValidation.errorBackground": "#fcfcfc",
      "inputValidation.errorBorder": "#e65050",
      "inputValidation.infoBackground": "#f8f9fa",
      "inputValidation.infoBorder": "#55b4d4",
      "inputValidation.warningBackground": "#f8f9fa",
      "inputValidation.warningBorder": "#eba400",
      "scrollbar.shadow": "#6b7d8f00",
      "scrollbarSlider.background": "#828e9f66",
      "scrollbarSlider.hoverBackground": "#828e9f99",
      "scrollbarSlider.activeBackground": "#828e9fb3",
      "badge.background": "#f2971833",
      "badge.foreground": "#ea9216",
      "progressBar.background": "#f29718",
      "list.activeSelectionBackground": "#6b7d8f24",
      "list.activeSelectionForeground": "#5c6166",
      "list.focusBackground": "#6b7d8f24",
      "list.focusForeground": "#5c6166",
      "list.focusOutline": "#6b7d8f24",
      "list.highlightForeground": "#f29718",
      "list.deemphasizedForeground": "#e65050",
      "list.hoverBackground": "#6b7d8f24",
      "list.inactiveSelectionBackground": "#6b7d8f1f",
      "list.inactiveSelectionForeground": "#828e9f",
      "list.invalidItemForeground": "#828e9f4d",
      "list.errorForeground": "#e65050",
      "tree.indentGuidesStroke": "#828e9f59",
      "listFilterWidget.background": "#fafafa",
      "listFilterWidget.outline": "#f29718",
      "listFilterWidget.noMatchesOutline": "#e65050",
      "list.filterMatchBackground": "#fad77880",
      "list.filterMatchBorder": "#ffe29480",
      "activityBar.background": "#f8f9fa",
      "activityBar.foreground": "#828e9fcc",
      "activityBar.inactiveForeground": "#828e9f99",
      "activityBar.border": "#f8f9fa",
      "activityBar.activeBorder": "#f29718",
      "activityBarBadge.background": "#f29718",
      "activityBarBadge.foreground": "#7e4b01",
      "activityBarTop.foreground": "#788597",
      "activityBarTop.activeBorder": "#f29718",
      "sideBar.background": "#f8f9fa",
      "sideBar.border": "#f8f9fa",
      "sideBarTitle.foreground": "#828e9f",
      "sideBarSectionHeader.background": "#f8f9fa",
      "sideBarSectionHeader.foreground": "#828e9f",
      "sideBarSectionHeader.border": "#f8f9fa",
      "sideBarStickyScroll.border": "#6b7d8f1f",
      "sideBarStickyScroll.shadow": "#6b7d8f12",
      "minimap.background": "#f8f9fa",
      "minimap.selectionHighlight": "#035bd626",
      "minimap.errorHighlight": "#e65050",
      "minimap.findMatchHighlight": "#ffe294",
      "minimapGutter.addedBackground": "#6cbf43",
      "minimapGutter.modifiedBackground": "#478acc",
      "minimapGutter.deletedBackground": "#ff7383",
      "editorGroup.border": "#6b7d8f1f",
      "editorGroup.background": "#fafafa",
      "editorGroupHeader.noTabsBackground": "#f8f9fa",
      "editorGroupHeader.tabsBackground": "#f8f9fa",
      "editorGroupHeader.tabsBorder": "#f8f9fa",
      "tab.activeBackground": "#f8f9fa",
      "tab.activeForeground": "#5c6166",
      "tab.border": "#f8f9fa",
      "tab.activeBorder": "#f29718",
      "tab.unfocusedActiveBorder": "#828e9f",
      "tab.inactiveBackground": "#f8f9fa",
      "tab.inactiveForeground": "#828e9f",
      "tab.unfocusedActiveForeground": "#828e9f",
      "tab.unfocusedInactiveForeground": "#828e9f",
      "editor.background": "#f8f9fa",
      "editor.foreground": "#5c6166",
      "editorLineNumber.foreground": "#828e9f66",
      "editorLineNumber.activeForeground": "#828e9fcc",
      "editorCursor.foreground": "#f29718",
      "editor.inactiveSelectionBackground": "#035bd612",
      "editor.selectionBackground": "#035bd626",
      "editor.selectionHighlightBackground": "#6cbf4326",
      "editor.selectionHighlightBorder": "#6cbf4300",
      "editor.wordHighlightBackground": "#478acc14",
      "editor.wordHighlightStrongBackground": "#6cbf4314",
      "editor.wordHighlightBorder": "#478acc80",
      "editor.wordHighlightStrongBorder": "#6cbf4380",
      "editor.findMatchBackground": "#ffe294",
      "editor.findMatchHighlightBackground": "#ffe29480",
      "editor.rangeHighlightBackground": "#ffe29433",
      "editor.lineHighlightBackground": "#828e9f1a",
      "editorLink.activeForeground": "#f29718",
      "editorWhitespace.foreground": "#828e9f66",
      "editorIndentGuide.background": "#828e9f2e",
      "editorIndentGuide.activeBackground": "#828e9f59",
      "editorInlayHint.foreground": "#5c616680",
      "editorRuler.foreground": "#828e9f2e",
      "editorCodeLens.foreground": "#adaeb1",
      "editorBracketMatch.background": "#828e9f4d",
      "editorBracketMatch.border": "#828e9f4d",
      "editor.snippetTabstopHighlightBackground": "#6cbf4333",
      "editorOverviewRuler.border": "#6b7d8f1f",
      "editorOverviewRuler.modifiedForeground": "#478acc",
      "editorOverviewRuler.addedForeground": "#6cbf43",
      "editorOverviewRuler.deletedForeground": "#ff7383",
      "editorOverviewRuler.errorForeground": "#e65050",
      "editorOverviewRuler.warningForeground": "#f29718",
      "editorOverviewRuler.bracketMatchForeground": "#828e9fb3",
      "editorOverviewRuler.wordHighlightForeground": "#478acc66",
      "editorOverviewRuler.wordHighlightStrongForeground": "#6cbf4366",
      "editorOverviewRuler.findMatchForeground": "#ffe294",
      "editorError.foreground": "#e65050",
      "editorWarning.foreground": "#f29718",
      "editorGutter.modifiedBackground": "#478acc",
      "editorGutter.addedBackground": "#6cbf43",
      "editorGutter.deletedBackground": "#ff7383",
      "diffEditor.insertedTextBackground": "#6cbf431f",
      "diffEditor.removedTextBackground": "#ff73831f",
      "diffEditor.diagonalFill": "#6b7d8f1f",
      "editorWidget.background": "#fafafa",
      "editorWidget.border": "#6b7d8f1f",
      "editorWidget.resizeBorder": "#fafafa",
      "editorHoverWidget.background": "#fafafa",
      "editorHoverWidget.border": "#6b7d8f1f",
      "editorSuggestWidget.background": "#fafafa",
      "editorSuggestWidget.border": "#6b7d8f1f",
      "editorSuggestWidget.highlightForeground": "#f29718",
      "editorSuggestWidget.selectedBackground": "#6b7d8f24",
      "editorStickyScroll.border": "#6b7d8f1f",
      "editorStickyScroll.shadow": "#6b7d8f12",
      "editorStickyScrollHover.background": "#6b7d8f1f",
      "debugExceptionWidget.border": "#6b7d8f1f",
      "debugExceptionWidget.background": "#fafafa",
      "editorMarkerNavigation.background": "#fafafa",
      "peekView.border": "#6b7d8f24",
      "peekViewTitle.background": "#6b7d8f24",
      "peekViewTitleDescription.foreground": "#828e9f",
      "peekViewTitleLabel.foreground": "#5c6166",
      "peekViewEditor.background": "#fafafa",
      "peekViewEditor.matchHighlightBackground": "#ffe29480",
      "peekViewEditor.matchHighlightBorder": "#fad77880",
      "peekViewResult.background": "#fafafa",
      "peekViewResult.fileForeground": "#5c6166",
      "peekViewResult.lineForeground": "#828e9f",
      "peekViewResult.matchHighlightBackground": "#ffe29480",
      "peekViewResult.selectionBackground": "#6b7d8f24",
      "panel.background": "#f8f9fa",
      "panel.border": "#6b7d8f1f",
      "panelTitle.activeBorder": "#f29718",
      "panelTitle.activeForeground": "#5c6166",
      "panelTitle.inactiveForeground": "#828e9f",
      "panelStickyScroll.border": "#6b7d8f1f",
      "panelStickyScroll.shadow": "#6b7d8f12",
      "statusBar.background": "#f8f9fa",
      "statusBar.foreground": "#828e9f",
      "statusBar.border": "#f8f9fa",
      "statusBar.debuggingBackground": "#f2a191",
      "statusBar.debuggingForeground": "#fcfcfc",
      "statusBar.noFolderBackground": "#fafafa",
      "statusBarItem.activeBackground": "#828e9f33",
      "statusBarItem.hoverBackground": "#828e9f33",
      "statusBarItem.prominentBackground": "#6b7d8f1f",
      "statusBarItem.prominentHoverBackground": "#00000030",
      "statusBarItem.remoteBackground": "#f29718",
      "statusBarItem.remoteForeground": "#7e4b01",
      "titleBar.activeBackground": "#f8f9fa",
      "titleBar.inactiveBackground": "#f8f9fa",
      "titleBar.activeForeground": "#828e9f",
      "titleBar.inactiveForeground": "#828e9fb3",
      "titleBar.border": "#f8f9fa",
      "menu.foreground": "#828e9f",
      "menu.selectionBackground": "#6b7d8f1f",
      "menu.selectionBorder": "#6b7d8f24",
      "menu.background": "#ffffff",
      "menu.border": "#6b7d8f1f",
      "menu.separatorBackground": "#6b7d8f1f",
      "extensionButton.prominentForeground": "#7e4b01",
      "extensionButton.prominentBackground": "#f29718",
      "extensionButton.prominentHoverBackground": "#ee9417",
      "pickerGroup.border": "#6b7d8f1f",
      "pickerGroup.foreground": "#828e9f80",
      "debugToolBar.background": "#fafafa",
      "debugIcon.breakpointForeground": "#f2a191",
      "debugIcon.breakpointDisabledForeground": "#f2a19180",
      "debugConsoleInputIcon.foreground": "#f29718",
      "welcomePage.tileBackground": "#f8f9fa",
      "welcomePage.tileShadow": "#6b7d8f12",
      "welcomePage.progress.background": "#828e9f1a",
      "welcomePage.buttonBackground": "#f2971866",
      "walkThrough.embeddedEditorBackground": "#fafafa",
      "gitDecoration.modifiedResourceForeground": "#478acc",
      "gitDecoration.deletedResourceForeground": "#ff7383",
      "gitDecoration.untrackedResourceForeground": "#6cbf43",
      "gitDecoration.ignoredResourceForeground": "#828e9f80",
      "gitDecoration.conflictingResourceForeground": "",
      "gitDecoration.submoduleResourceForeground": "#a37acc",
      "settings.headerForeground": "#5c6166",
      "settings.modifiedItemIndicator": "#478acc",
      "keybindingLabel.background": "#828e9f1a",
      "keybindingLabel.foreground": "#5c6166",
      "keybindingLabel.border": "#5c61661a",
      "keybindingLabel.bottomBorder": "#5c61661a",
      "terminal.background": "#f8f9fa",
      "terminal.foreground": "#5c6166",
      "terminal.ansiBlack": "#000000",
      "terminal.ansiRed": "#f06b6c",
      "terminal.ansiGreen": "#6cbf43",
      "terminal.ansiYellow": "#e7a100",
      "terminal.ansiBlue": "#21a1e2",
      "terminal.ansiMagenta": "#a176cb",
      "terminal.ansiCyan": "#4abc96",
      "terminal.ansiWhite": "#c7c7c7",
      "terminal.ansiBrightBlack": "#686868",
      "terminal.ansiBrightRed": "#f07171",
      "terminal.ansiBrightGreen": "#86b300",
      "terminal.ansiBrightYellow": "#eba400",
      "terminal.ansiBrightBlue": "#22a4e6",
      "terminal.ansiBrightMagenta": "#a37acc",
      "terminal.ansiBrightCyan": "#4cbf99",
      "terminal.ansiBrightWhite": "#d1d1d1",
      "terminalCommandGuide.foreground": "#828e9f4d",
      "terminalStickyScroll.border": "#6b7d8f1f",
      "terminalStickyScroll.shadow": "#6b7d8f12",
      "terminalStickyScrollHover.background": "#6b7d8f1f",
      "commandCenter.foreground": "#828e9f",
      "commandCenter.activeForeground": "#828e9f",
      "commandCenter.background": "#fcfcfc",
      "commandCenter.activeBackground": "#6b7d8f24",
      "commandCenter.border": "#6b7d8f1f",
      "commandCenter.inactiveBorder": "#6b7d8f1f",
      "commandCenter.activeBorder": "#6b7d8f00",
      "actionBar.toggledBackground": "#6b7d8f24",
      "profileBadge.background": "#f29718",
      "profileBadge.foreground": "#7e4b01",
      "chat.requestBorder": "#6b7d8f24",
      "chat.requestBackground": "#f8f9fa",
      "chat.requestBubbleBackground": "#6b7d8f1f",
      "chat.requestBubbleHoverBackground": "#6b7d8f24",
      "chat.slashCommandBackground": "#55b4d433",
      "chat.slashCommandForeground": "#55b4d4",
      "chat.editedFileForeground": "#478acc",
      "chat.checkpointSeparator": "#adaeb1",
      "inlineChat.background": "#fafafa",
      "inlineChat.foreground": "#5c6166",
      "inlineChat.border": "#6b7d8f1f",
      "inlineChat.shadow": "#6b7d8f12",
      "inlineChatInput.border": "#6b7d8f1f",
      "inlineChatInput.focusBorder": "#f29718b3",
      "inlineChatInput.placeholderForeground": "#828e9f80",
      "inlineChatInput.background": "#fcfcfc",
      "inlineChatDiff.inserted": "#6cbf4333",
      "inlineChatDiff.removed": "#ff738333",
      "inlineEdit.gutterIndicator.background": "#6b7d8f1f",
      "inlineEdit.gutterIndicator.primaryBorder": "#f29718",
      "inlineEdit.gutterIndicator.primaryForeground": "#f29718",
      "inlineEdit.gutterIndicator.primaryBackground": "#f297181a",
      "inlineEdit.gutterIndicator.secondaryBorder": "#828e9f80",
      "inlineEdit.gutterIndicator.secondaryForeground": "#828e9f",
      "inlineEdit.gutterIndicator.secondaryBackground": "#828e9f1a",
      "inlineEdit.gutterIndicator.successfulBorder": "#6cbf43",
      "inlineEdit.gutterIndicator.successfulForeground": "#6cbf43",
      "inlineEdit.gutterIndicator.successfulBackground": "#6cbf431a",
      "inlineEdit.originalBackground": "#ff73831a",
      "inlineEdit.modifiedBackground": "#6cbf431a",
      "inlineEdit.originalChangedLineBackground": "#ff738326",
      "inlineEdit.originalChangedTextBackground": "#ff738340",
      "inlineEdit.modifiedChangedLineBackground": "#6cbf4326",
      "inlineEdit.modifiedChangedTextBackground": "#6cbf4340",
      "inlineEdit.originalBorder": "#ff738380",
      "inlineEdit.modifiedBorder": "#6cbf4380",
      "multiDiffEditor.headerBackground": "#fafafa",
      "multiDiffEditor.background": "#f8f9fa",
      "multiDiffEditor.border": "#6b7d8f1f",
      "symbolIcon.arrayForeground": "#22a4e6",
      "symbolIcon.booleanForeground": "#a37acc",
      "symbolIcon.classForeground": "#22a4e6",
      "symbolIcon.colorForeground": "#e59645",
      "symbolIcon.constantForeground": "#a37acc",
      "symbolIcon.constructorForeground": "#eba400",
      "symbolIcon.enumeratorForeground": "#22a4e6",
      "symbolIcon.enumeratorMemberForeground": "#a37acc",
      "symbolIcon.eventForeground": "#e59645",
      "symbolIcon.fieldForeground": "#f07171",
      "symbolIcon.fileForeground": "#828e9f",
      "symbolIcon.folderForeground": "#828e9f",
      "symbolIcon.functionForeground": "#eba400",
      "symbolIcon.interfaceForeground": "#22a4e6",
      "symbolIcon.keyForeground": "#55b4d4",
      "symbolIcon.keywordForeground": "#fa8532",
      "symbolIcon.methodForeground": "#eba400",
      "symbolIcon.moduleForeground": "#86b300",
      "symbolIcon.namespaceForeground": "#86b300",
      "symbolIcon.nullForeground": "#a37acc",
      "symbolIcon.numberForeground": "#a37acc",
      "symbolIcon.objectForeground": "#22a4e6",
      "symbolIcon.operatorForeground": "#f2a191",
      "symbolIcon.packageForeground": "#86b300",
      "symbolIcon.propertyForeground": "#f07171",
      "symbolIcon.referenceForeground": "#22a4e6",
      "symbolIcon.snippetForeground": "#e59645",
      "symbolIcon.stringForeground": "#86b300",
      "symbolIcon.structForeground": "#22a4e6",
      "symbolIcon.textForeground": "#5c6166",
      "symbolIcon.typeParameterForeground": "#22a4e6",
      "symbolIcon.unitForeground": "#a37acc",
      "symbolIcon.variableForeground": "#5c6166"
    },
    "tokenColors": [
      {
        "settings": {
          "background": "#f8f9fa",
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Comment",
        "scope": [
          "comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "String",
        "scope": [
          "string",
          "constant.other.symbol"
        ],
        "settings": {
          "foreground": "#86b300"
        }
      },
      {
        "name": "Regular Expressions and Escape Characters",
        "scope": [
          "string.regexp",
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#4cbf99"
        }
      },
      {
        "name": "Number",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#a37acc"
        }
      },
      {
        "name": "Built-in constants",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#a37acc"
        }
      },
      {
        "name": "Variable",
        "scope": [
          "variable",
          "variable.parameter.function-call"
        ],
        "settings": {
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Member Variable",
        "scope": [
          "variable.member"
        ],
        "settings": {
          "foreground": "#f07171"
        }
      },
      {
        "name": "Language variable",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Storage",
        "scope": [
          "storage"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Operators",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#f2a191"
        }
      },
      {
        "name": "Separators like ; or ,",
        "scope": [
          "punctuation.separator",
          "punctuation.terminator"
        ],
        "settings": {
          "foreground": "#5c6166b3"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "punctuation.section"
        ],
        "settings": {
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Accessor",
        "scope": [
          "punctuation.accessor"
        ],
        "settings": {
          "foreground": "#f2a191"
        }
      },
      {
        "name": "JavaScript/TypeScript interpolation punctuation",
        "scope": [
          "punctuation.definition.template-expression"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Ruby interpolation punctuation",
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Interpolation text",
        "scope": [
          "meta.embedded"
        ],
        "settings": {
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Types fixes",
        "scope": [
          "source.java storage.type",
          "source.haskell storage.type",
          "source.c storage.type"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "Inherited class type",
        "scope": [
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Lambda arrow",
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Java primitive variable types",
        "scope": [
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Function name",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "Function arguments",
        "scope": [
          "variable.parameter",
          "meta.parameter"
        ],
        "settings": {
          "foreground": "#a37acc"
        }
      },
      {
        "name": "Function call",
        "scope": [
          "variable.function",
          "variable.annotation",
          "meta.function-call.generic",
          "support.function.go"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "Library function",
        "scope": [
          "support.function",
          "support.macro"
        ],
        "settings": {
          "foreground": "#f07171"
        }
      },
      {
        "name": "Imports and packages",
        "scope": [
          "entity.name.import",
          "entity.name.package"
        ],
        "settings": {
          "foreground": "#86b300"
        }
      },
      {
        "name": "Entity name",
        "scope": [
          "entity.name"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "Tag start/end",
        "scope": [
          "punctuation.definition.tag.end",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": "#55b4d480"
        }
      },
      {
        "name": "Tag attribute",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "CSS pseudo-class",
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#4cbf99"
        }
      },
      {
        "name": "Library constant",
        "scope": [
          "support.constant"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f2a191"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class",
          "source.go storage.type"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Decorators/annotation",
        "scope": [
          "meta.decorator variable.other",
          "meta.decorator punctuation.decorator",
          "storage.type.annotation",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#e59645"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#e65050"
        }
      },
      {
        "name": "diff.header",
        "scope": [
          "meta.diff",
          "meta.diff.header"
        ],
        "settings": {
          "foreground": "#c594c5"
        }
      },
      {
        "name": "Ruby class methods",
        "scope": [
          "source.ruby variable.other.readwrite"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "CSS tag names",
        "scope": [
          "source.css entity.name.tag",
          "source.sass entity.name.tag",
          "source.scss entity.name.tag",
          "source.less entity.name.tag",
          "source.stylus entity.name.tag"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "CSS browser prefix",
        "scope": [
          "source.css support.type",
          "source.sass support.type",
          "source.scss support.type",
          "source.less support.type",
          "source.stylus support.type"
        ],
        "settings": {
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "CSS Properties",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "fontStyle": "normal",
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Search Results Numbers",
        "scope": [
          "constant.numeric.line-number.find-in-files - match"
        ],
        "settings": {
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "Search Results Match Numbers",
        "scope": [
          "constant.numeric.line-number.match"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Search Results Lines",
        "scope": [
          "entity.name.filename.find-in-files"
        ],
        "settings": {
          "foreground": "#86b300"
        }
      },
      {
        "scope": [
          "message.error"
        ],
        "settings": {
          "foreground": "#e65050"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#86b300"
        }
      },
      {
        "name": "Markup links",
        "scope": [
          "markup.underline.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Markup Italic/Emphasis",
        "scope": [
          "markup.italic",
          "emphasis"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f07171"
        }
      },
      {
        "name": "Markup Bold",
        "scope": [
          "markup.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f07171"
        }
      },
      {
        "name": "Markup Underline",
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Markup Bold/italic",
        "scope": [
          "markup.italic markup.bold",
          "markup.bold markup.italic"
        ],
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Markup Code",
        "scope": [
          "markup.raw"
        ],
        "settings": {
          "background": "#5c616605"
        }
      },
      {
        "name": "Markup Code Inline",
        "scope": [
          "markup.raw.inline"
        ],
        "settings": {
          "background": "#5c61660f"
        }
      },
      {
        "name": "Markdown Separator",
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "fontStyle": "bold",
          "background": "#5c61660f",
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "Markup Blockquote",
        "scope": [
          "markup.quote"
        ],
        "settings": {
          "foreground": "#4cbf99",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markup List Bullet",
        "scope": [
          "markup.list punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "Markup added",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": "#6cbf43"
        }
      },
      {
        "name": "Markup modified",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": "#478acc"
        }
      },
      {
        "name": "Markup removed",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": "#ff7383"
        }
      },
      {
        "name": "Markup Strike",
        "scope": [
          "markup.strike"
        ],
        "settings": {
          "foreground": "#e59645"
        }
      },
      {
        "name": "Markup strong",
        "scope": [
          "markup.strong"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup Table",
        "scope": [
          "markup.table"
        ],
        "settings": {
          "background": "#5c61660f",
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Markup Raw Inline",
        "scope": [
          "text.html.markdown markup.inline.raw"
        ],
        "settings": {
          "foreground": "#f2a191"
        }
      },
      {
        "name": "Markdown - Line Break",
        "scope": [
          "text.html.markdown meta.dummy.line-break"
        ],
        "settings": {
          "background": "#adaeb1",
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
          "punctuation.definition.markdown"
        ],
        "settings": {
          "background": "#5c6166",
          "foreground": "#adaeb1"
        }
      }
    ],
    "semanticTokenColors": {
      "class": "#22a4e6",
      "class.defaultLibrary": "#55b4d4",
      "enum": "#22a4e6",
      "enum.defaultLibrary": "#55b4d4",
      "interface": "#55b4d4",
      "interface.defaultLibrary": {
        "foreground": "#55b4d4",
        "italic": true
      },
      "struct": "#22a4e6",
      "struct.defaultLibrary": "#55b4d4",
      "type": "#22a4e6",
      "type.defaultLibrary": "#55b4d4",
      "enumMember": "#4cbf99",
      "event": "#f2a191",
      "function": "#eba400",
      "method": "#eba400",
      "macro": "#e59645",
      "comment": "#adaeb1",
      "string": "#86b300",
      "keyword": "#fa8532",
      "number": "#a37acc",
      "regexp": "#4cbf99",
      "operator": "#f2a191"
    }
  },
  {
    "id": "ayu-light",
    "label": "Ayu Light",
    "name": "Ayu Light",
    "type": "light",
    "colors": {
      "focusBorder": "#f29718",
      "foreground": "#828e9f",
      "disabledForeground": "#828e9f80",
      "widget.border": "#6b7d8f1f",
      "widget.shadow": "#6b7d8f12",
      "selection.background": "#035bd626",
      "icon.foreground": "#828e9f",
      "errorForeground": "#e65050",
      "descriptionForeground": "#828e9f",
      "textBlockQuote.background": "#fafafa",
      "textLink.foreground": "#f29718",
      "textLink.activeForeground": "#f29718",
      "textPreformat.foreground": "#5c6166",
      "toolbar.hoverBackground": "#6b7d8f24",
      "button.background": "#f29718",
      "button.foreground": "#7e4b01",
      "button.border": "#7e4b011a",
      "button.separator": "#7e4b014d",
      "button.hoverBackground": "#ea9216",
      "button.secondaryBackground": "#828e9f33",
      "button.secondaryForeground": "#5c6166",
      "button.secondaryHoverBackground": "#828e9f80",
      "dropdown.background": "#fafafa",
      "dropdown.foreground": "#828e9f",
      "dropdown.border": "#6b7d8f1f",
      "input.background": "#fcfcfc",
      "input.border": "#828e9f33",
      "input.foreground": "#5c6166",
      "input.placeholderForeground": "#828e9f80",
      "inputOption.hoverBackground": "#828e9f33",
      "inputOption.activeBorder": "#f2971833",
      "inputOption.activeBackground": "#f297181a",
      "inputOption.activeForeground": "#f29718",
      "inputValidation.errorBackground": "#fcfcfc",
      "inputValidation.errorBorder": "#e65050",
      "inputValidation.infoBackground": "#f8f9fa",
      "inputValidation.infoBorder": "#55b4d4",
      "inputValidation.warningBackground": "#f8f9fa",
      "inputValidation.warningBorder": "#eba400",
      "scrollbar.shadow": "#6b7d8f00",
      "scrollbarSlider.background": "#828e9f66",
      "scrollbarSlider.hoverBackground": "#828e9f99",
      "scrollbarSlider.activeBackground": "#828e9fb3",
      "badge.background": "#f2971833",
      "badge.foreground": "#ea9216",
      "progressBar.background": "#f29718",
      "list.activeSelectionBackground": "#6b7d8f24",
      "list.activeSelectionForeground": "#5c6166",
      "list.focusBackground": "#6b7d8f24",
      "list.focusForeground": "#5c6166",
      "list.focusOutline": "#6b7d8f24",
      "list.highlightForeground": "#f29718",
      "list.deemphasizedForeground": "#e65050",
      "list.hoverBackground": "#6b7d8f24",
      "list.inactiveSelectionBackground": "#6b7d8f1f",
      "list.inactiveSelectionForeground": "#828e9f",
      "list.invalidItemForeground": "#828e9f4d",
      "list.errorForeground": "#e65050",
      "tree.indentGuidesStroke": "#828e9f59",
      "listFilterWidget.background": "#fafafa",
      "listFilterWidget.outline": "#f29718",
      "listFilterWidget.noMatchesOutline": "#e65050",
      "list.filterMatchBackground": "#fad77880",
      "list.filterMatchBorder": "#ffe29480",
      "activityBar.background": "#f8f9fa",
      "activityBar.foreground": "#828e9fcc",
      "activityBar.inactiveForeground": "#828e9f99",
      "activityBar.border": "#6b7d8f1f",
      "activityBar.activeBorder": "#f29718",
      "activityBarBadge.background": "#f29718",
      "activityBarBadge.foreground": "#7e4b01",
      "activityBarTop.foreground": "#788597",
      "activityBarTop.activeBorder": "#f29718",
      "sideBar.background": "#f8f9fa",
      "sideBar.border": "#6b7d8f1f",
      "sideBarTitle.foreground": "#828e9f",
      "sideBarSectionHeader.background": "#f8f9fa",
      "sideBarSectionHeader.foreground": "#828e9f",
      "sideBarSectionHeader.border": "#6b7d8f1f",
      "sideBarStickyScroll.border": "#6b7d8f1f",
      "sideBarStickyScroll.shadow": "#6b7d8f12",
      "minimap.background": "#fcfcfc",
      "minimap.selectionHighlight": "#035bd626",
      "minimap.errorHighlight": "#e65050",
      "minimap.findMatchHighlight": "#ffe294",
      "minimapGutter.addedBackground": "#6cbf43",
      "minimapGutter.modifiedBackground": "#478acc",
      "minimapGutter.deletedBackground": "#ff7383",
      "editorGroup.border": "#6b7d8f1f",
      "editorGroup.background": "#fafafa",
      "editorGroupHeader.noTabsBackground": "#f8f9fa",
      "editorGroupHeader.tabsBackground": "#f8f9fa",
      "editorGroupHeader.tabsBorder": "#6b7d8f1f",
      "tab.activeBackground": "#fcfcfc",
      "tab.activeForeground": "#5c6166",
      "tab.border": "#6b7d8f1f",
      "tab.activeBorder": "#fcfcfc",
      "tab.activeBorderTop": "#f29718",
      "tab.unfocusedActiveBorderTop": "#828e9f",
      "tab.inactiveBackground": "#f8f9fa",
      "tab.inactiveForeground": "#828e9f",
      "tab.unfocusedActiveForeground": "#828e9f",
      "tab.unfocusedInactiveForeground": "#828e9f",
      "editor.background": "#fcfcfc",
      "editor.foreground": "#5c6166",
      "editorLineNumber.foreground": "#828e9f66",
      "editorLineNumber.activeForeground": "#828e9fcc",
      "editorCursor.foreground": "#f29718",
      "editor.inactiveSelectionBackground": "#035bd612",
      "editor.selectionBackground": "#035bd626",
      "editor.selectionHighlightBackground": "#6cbf4326",
      "editor.selectionHighlightBorder": "#6cbf4300",
      "editor.wordHighlightBackground": "#478acc14",
      "editor.wordHighlightStrongBackground": "#6cbf4314",
      "editor.wordHighlightBorder": "#478acc80",
      "editor.wordHighlightStrongBorder": "#6cbf4380",
      "editor.findMatchBackground": "#ffe294",
      "editor.findMatchHighlightBackground": "#ffe29480",
      "editor.rangeHighlightBackground": "#ffe29433",
      "editor.lineHighlightBackground": "#828e9f1a",
      "editorLink.activeForeground": "#f29718",
      "editorWhitespace.foreground": "#828e9f66",
      "editorIndentGuide.background": "#828e9f2e",
      "editorIndentGuide.activeBackground": "#828e9f59",
      "editorInlayHint.foreground": "#5c616680",
      "editorRuler.foreground": "#828e9f2e",
      "editorCodeLens.foreground": "#adaeb1",
      "editorBracketMatch.background": "#828e9f4d",
      "editorBracketMatch.border": "#828e9f4d",
      "editor.snippetTabstopHighlightBackground": "#6cbf4333",
      "editorOverviewRuler.border": "#6b7d8f1f",
      "editorOverviewRuler.modifiedForeground": "#478acc",
      "editorOverviewRuler.addedForeground": "#6cbf43",
      "editorOverviewRuler.deletedForeground": "#ff7383",
      "editorOverviewRuler.errorForeground": "#e65050",
      "editorOverviewRuler.warningForeground": "#f29718",
      "editorOverviewRuler.bracketMatchForeground": "#828e9fb3",
      "editorOverviewRuler.wordHighlightForeground": "#478acc66",
      "editorOverviewRuler.wordHighlightStrongForeground": "#6cbf4366",
      "editorOverviewRuler.findMatchForeground": "#ffe294",
      "editorError.foreground": "#e65050",
      "editorWarning.foreground": "#f29718",
      "editorGutter.modifiedBackground": "#478acc",
      "editorGutter.addedBackground": "#6cbf43",
      "editorGutter.deletedBackground": "#ff7383",
      "diffEditor.insertedTextBackground": "#6cbf431f",
      "diffEditor.removedTextBackground": "#ff73831f",
      "diffEditor.diagonalFill": "#6b7d8f1f",
      "editorWidget.background": "#fafafa",
      "editorWidget.border": "#6b7d8f1f",
      "editorWidget.resizeBorder": "#fafafa",
      "editorHoverWidget.background": "#fafafa",
      "editorHoverWidget.border": "#6b7d8f1f",
      "editorSuggestWidget.background": "#fafafa",
      "editorSuggestWidget.border": "#6b7d8f1f",
      "editorSuggestWidget.highlightForeground": "#f29718",
      "editorSuggestWidget.selectedBackground": "#6b7d8f24",
      "editorStickyScroll.border": "#6b7d8f1f",
      "editorStickyScroll.shadow": "#6b7d8f12",
      "editorStickyScrollHover.background": "#6b7d8f1f",
      "debugExceptionWidget.border": "#6b7d8f1f",
      "debugExceptionWidget.background": "#fafafa",
      "editorMarkerNavigation.background": "#fafafa",
      "peekView.border": "#6b7d8f24",
      "peekViewTitle.background": "#6b7d8f24",
      "peekViewTitleDescription.foreground": "#828e9f",
      "peekViewTitleLabel.foreground": "#5c6166",
      "peekViewEditor.background": "#fafafa",
      "peekViewEditor.matchHighlightBackground": "#ffe29480",
      "peekViewEditor.matchHighlightBorder": "#fad77880",
      "peekViewResult.background": "#fafafa",
      "peekViewResult.fileForeground": "#5c6166",
      "peekViewResult.lineForeground": "#828e9f",
      "peekViewResult.matchHighlightBackground": "#ffe29480",
      "peekViewResult.selectionBackground": "#6b7d8f24",
      "panel.background": "#f8f9fa",
      "panel.border": "#6b7d8f1f",
      "panelTitle.activeBorder": "#f29718",
      "panelTitle.activeForeground": "#5c6166",
      "panelTitle.inactiveForeground": "#828e9f",
      "panelStickyScroll.border": "#6b7d8f1f",
      "panelStickyScroll.shadow": "#6b7d8f12",
      "statusBar.background": "#f8f9fa",
      "statusBar.foreground": "#828e9f",
      "statusBar.border": "#6b7d8f1f",
      "statusBar.debuggingBackground": "#f2a191",
      "statusBar.debuggingForeground": "#fcfcfc",
      "statusBar.noFolderBackground": "#fafafa",
      "statusBarItem.activeBackground": "#828e9f33",
      "statusBarItem.hoverBackground": "#828e9f33",
      "statusBarItem.prominentBackground": "#6b7d8f1f",
      "statusBarItem.prominentHoverBackground": "#00000030",
      "statusBarItem.remoteBackground": "#f29718",
      "statusBarItem.remoteForeground": "#7e4b01",
      "titleBar.activeBackground": "#f8f9fa",
      "titleBar.inactiveBackground": "#f8f9fa",
      "titleBar.activeForeground": "#828e9f",
      "titleBar.inactiveForeground": "#828e9fb3",
      "titleBar.border": "#6b7d8f1f",
      "menu.foreground": "#828e9f",
      "menu.selectionBackground": "#6b7d8f1f",
      "menu.selectionBorder": "#6b7d8f24",
      "menu.background": "#ffffff",
      "menu.border": "#6b7d8f1f",
      "menu.separatorBackground": "#6b7d8f1f",
      "extensionButton.prominentForeground": "#7e4b01",
      "extensionButton.prominentBackground": "#f29718",
      "extensionButton.prominentHoverBackground": "#ee9417",
      "pickerGroup.border": "#6b7d8f1f",
      "pickerGroup.foreground": "#828e9f80",
      "debugToolBar.background": "#fafafa",
      "debugIcon.breakpointForeground": "#f2a191",
      "debugIcon.breakpointDisabledForeground": "#f2a19180",
      "debugConsoleInputIcon.foreground": "#f29718",
      "welcomePage.tileBackground": "#f8f9fa",
      "welcomePage.tileShadow": "#6b7d8f12",
      "welcomePage.progress.background": "#828e9f1a",
      "welcomePage.buttonBackground": "#f2971866",
      "walkThrough.embeddedEditorBackground": "#fafafa",
      "gitDecoration.modifiedResourceForeground": "#478acc",
      "gitDecoration.deletedResourceForeground": "#ff7383",
      "gitDecoration.untrackedResourceForeground": "#6cbf43",
      "gitDecoration.ignoredResourceForeground": "#828e9f80",
      "gitDecoration.conflictingResourceForeground": "",
      "gitDecoration.submoduleResourceForeground": "#a37acc",
      "settings.headerForeground": "#5c6166",
      "settings.modifiedItemIndicator": "#478acc",
      "keybindingLabel.background": "#828e9f1a",
      "keybindingLabel.foreground": "#5c6166",
      "keybindingLabel.border": "#5c61661a",
      "keybindingLabel.bottomBorder": "#5c61661a",
      "terminal.background": "#f8f9fa",
      "terminal.foreground": "#5c6166",
      "terminal.ansiBlack": "#000000",
      "terminal.ansiRed": "#f06b6c",
      "terminal.ansiGreen": "#6cbf43",
      "terminal.ansiYellow": "#e7a100",
      "terminal.ansiBlue": "#21a1e2",
      "terminal.ansiMagenta": "#a176cb",
      "terminal.ansiCyan": "#4abc96",
      "terminal.ansiWhite": "#c7c7c7",
      "terminal.ansiBrightBlack": "#686868",
      "terminal.ansiBrightRed": "#f07171",
      "terminal.ansiBrightGreen": "#86b300",
      "terminal.ansiBrightYellow": "#eba400",
      "terminal.ansiBrightBlue": "#22a4e6",
      "terminal.ansiBrightMagenta": "#a37acc",
      "terminal.ansiBrightCyan": "#4cbf99",
      "terminal.ansiBrightWhite": "#d1d1d1",
      "terminalCommandGuide.foreground": "#828e9f4d",
      "terminalStickyScroll.border": "#6b7d8f1f",
      "terminalStickyScroll.shadow": "#6b7d8f12",
      "terminalStickyScrollHover.background": "#6b7d8f1f",
      "commandCenter.foreground": "#828e9f",
      "commandCenter.activeForeground": "#828e9f",
      "commandCenter.background": "#fcfcfc",
      "commandCenter.activeBackground": "#6b7d8f24",
      "commandCenter.border": "#6b7d8f1f",
      "commandCenter.inactiveBorder": "#6b7d8f1f",
      "commandCenter.activeBorder": "#6b7d8f00",
      "actionBar.toggledBackground": "#6b7d8f24",
      "profileBadge.background": "#f29718",
      "profileBadge.foreground": "#7e4b01",
      "chat.requestBorder": "#6b7d8f24",
      "chat.requestBackground": "#f8f9fa",
      "chat.requestBubbleBackground": "#6b7d8f1f",
      "chat.requestBubbleHoverBackground": "#6b7d8f24",
      "chat.slashCommandBackground": "#55b4d433",
      "chat.slashCommandForeground": "#55b4d4",
      "chat.editedFileForeground": "#478acc",
      "chat.checkpointSeparator": "#adaeb1",
      "inlineChat.background": "#fafafa",
      "inlineChat.foreground": "#5c6166",
      "inlineChat.border": "#6b7d8f1f",
      "inlineChat.shadow": "#6b7d8f12",
      "inlineChatInput.border": "#6b7d8f1f",
      "inlineChatInput.focusBorder": "#f29718b3",
      "inlineChatInput.placeholderForeground": "#828e9f80",
      "inlineChatInput.background": "#fcfcfc",
      "inlineChatDiff.inserted": "#6cbf4333",
      "inlineChatDiff.removed": "#ff738333",
      "inlineEdit.gutterIndicator.background": "#6b7d8f1f",
      "inlineEdit.gutterIndicator.primaryBorder": "#f29718",
      "inlineEdit.gutterIndicator.primaryForeground": "#f29718",
      "inlineEdit.gutterIndicator.primaryBackground": "#f297181a",
      "inlineEdit.gutterIndicator.secondaryBorder": "#828e9f80",
      "inlineEdit.gutterIndicator.secondaryForeground": "#828e9f",
      "inlineEdit.gutterIndicator.secondaryBackground": "#828e9f1a",
      "inlineEdit.gutterIndicator.successfulBorder": "#6cbf43",
      "inlineEdit.gutterIndicator.successfulForeground": "#6cbf43",
      "inlineEdit.gutterIndicator.successfulBackground": "#6cbf431a",
      "inlineEdit.originalBackground": "#ff73831a",
      "inlineEdit.modifiedBackground": "#6cbf431a",
      "inlineEdit.originalChangedLineBackground": "#ff738326",
      "inlineEdit.originalChangedTextBackground": "#ff738340",
      "inlineEdit.modifiedChangedLineBackground": "#6cbf4326",
      "inlineEdit.modifiedChangedTextBackground": "#6cbf4340",
      "inlineEdit.originalBorder": "#ff738380",
      "inlineEdit.modifiedBorder": "#6cbf4380",
      "multiDiffEditor.headerBackground": "#fafafa",
      "multiDiffEditor.background": "#f8f9fa",
      "multiDiffEditor.border": "#6b7d8f1f",
      "symbolIcon.arrayForeground": "#22a4e6",
      "symbolIcon.booleanForeground": "#a37acc",
      "symbolIcon.classForeground": "#22a4e6",
      "symbolIcon.colorForeground": "#e59645",
      "symbolIcon.constantForeground": "#a37acc",
      "symbolIcon.constructorForeground": "#eba400",
      "symbolIcon.enumeratorForeground": "#22a4e6",
      "symbolIcon.enumeratorMemberForeground": "#a37acc",
      "symbolIcon.eventForeground": "#e59645",
      "symbolIcon.fieldForeground": "#f07171",
      "symbolIcon.fileForeground": "#828e9f",
      "symbolIcon.folderForeground": "#828e9f",
      "symbolIcon.functionForeground": "#eba400",
      "symbolIcon.interfaceForeground": "#22a4e6",
      "symbolIcon.keyForeground": "#55b4d4",
      "symbolIcon.keywordForeground": "#fa8532",
      "symbolIcon.methodForeground": "#eba400",
      "symbolIcon.moduleForeground": "#86b300",
      "symbolIcon.namespaceForeground": "#86b300",
      "symbolIcon.nullForeground": "#a37acc",
      "symbolIcon.numberForeground": "#a37acc",
      "symbolIcon.objectForeground": "#22a4e6",
      "symbolIcon.operatorForeground": "#f2a191",
      "symbolIcon.packageForeground": "#86b300",
      "symbolIcon.propertyForeground": "#f07171",
      "symbolIcon.referenceForeground": "#22a4e6",
      "symbolIcon.snippetForeground": "#e59645",
      "symbolIcon.stringForeground": "#86b300",
      "symbolIcon.structForeground": "#22a4e6",
      "symbolIcon.textForeground": "#5c6166",
      "symbolIcon.typeParameterForeground": "#22a4e6",
      "symbolIcon.unitForeground": "#a37acc",
      "symbolIcon.variableForeground": "#5c6166"
    },
    "tokenColors": [
      {
        "settings": {
          "background": "#f8f9fa",
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Comment",
        "scope": [
          "comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "String",
        "scope": [
          "string",
          "constant.other.symbol"
        ],
        "settings": {
          "foreground": "#86b300"
        }
      },
      {
        "name": "Regular Expressions and Escape Characters",
        "scope": [
          "string.regexp",
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#4cbf99"
        }
      },
      {
        "name": "Number",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#a37acc"
        }
      },
      {
        "name": "Built-in constants",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#a37acc"
        }
      },
      {
        "name": "Variable",
        "scope": [
          "variable",
          "variable.parameter.function-call"
        ],
        "settings": {
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Member Variable",
        "scope": [
          "variable.member"
        ],
        "settings": {
          "foreground": "#f07171"
        }
      },
      {
        "name": "Language variable",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Storage",
        "scope": [
          "storage"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Operators",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#f2a191"
        }
      },
      {
        "name": "Separators like ; or ,",
        "scope": [
          "punctuation.separator",
          "punctuation.terminator"
        ],
        "settings": {
          "foreground": "#5c6166b3"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "punctuation.section"
        ],
        "settings": {
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Accessor",
        "scope": [
          "punctuation.accessor"
        ],
        "settings": {
          "foreground": "#f2a191"
        }
      },
      {
        "name": "JavaScript/TypeScript interpolation punctuation",
        "scope": [
          "punctuation.definition.template-expression"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Ruby interpolation punctuation",
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Interpolation text",
        "scope": [
          "meta.embedded"
        ],
        "settings": {
          "foreground": "#5c6166"
        }
      },
      {
        "name": "Types fixes",
        "scope": [
          "source.java storage.type",
          "source.haskell storage.type",
          "source.c storage.type"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "Inherited class type",
        "scope": [
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Lambda arrow",
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Java primitive variable types",
        "scope": [
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Function name",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "Function arguments",
        "scope": [
          "variable.parameter",
          "meta.parameter"
        ],
        "settings": {
          "foreground": "#a37acc"
        }
      },
      {
        "name": "Function call",
        "scope": [
          "variable.function",
          "variable.annotation",
          "meta.function-call.generic",
          "support.function.go"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "Library function",
        "scope": [
          "support.function",
          "support.macro"
        ],
        "settings": {
          "foreground": "#f07171"
        }
      },
      {
        "name": "Imports and packages",
        "scope": [
          "entity.name.import",
          "entity.name.package"
        ],
        "settings": {
          "foreground": "#86b300"
        }
      },
      {
        "name": "Entity name",
        "scope": [
          "entity.name"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "Tag start/end",
        "scope": [
          "punctuation.definition.tag.end",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": "#55b4d480"
        }
      },
      {
        "name": "Tag attribute",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "CSS pseudo-class",
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#4cbf99"
        }
      },
      {
        "name": "Library constant",
        "scope": [
          "support.constant"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f2a191"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class",
          "source.go storage.type"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Decorators/annotation",
        "scope": [
          "meta.decorator variable.other",
          "meta.decorator punctuation.decorator",
          "storage.type.annotation",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#e59645"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#e65050"
        }
      },
      {
        "name": "diff.header",
        "scope": [
          "meta.diff",
          "meta.diff.header"
        ],
        "settings": {
          "foreground": "#c594c5"
        }
      },
      {
        "name": "Ruby class methods",
        "scope": [
          "source.ruby variable.other.readwrite"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "CSS tag names",
        "scope": [
          "source.css entity.name.tag",
          "source.sass entity.name.tag",
          "source.scss entity.name.tag",
          "source.less entity.name.tag",
          "source.stylus entity.name.tag"
        ],
        "settings": {
          "foreground": "#22a4e6"
        }
      },
      {
        "name": "CSS browser prefix",
        "scope": [
          "source.css support.type",
          "source.sass support.type",
          "source.scss support.type",
          "source.less support.type",
          "source.stylus support.type"
        ],
        "settings": {
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "CSS Properties",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "fontStyle": "normal",
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Search Results Numbers",
        "scope": [
          "constant.numeric.line-number.find-in-files - match"
        ],
        "settings": {
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "Search Results Match Numbers",
        "scope": [
          "constant.numeric.line-number.match"
        ],
        "settings": {
          "foreground": "#fa8532"
        }
      },
      {
        "name": "Search Results Lines",
        "scope": [
          "entity.name.filename.find-in-files"
        ],
        "settings": {
          "foreground": "#86b300"
        }
      },
      {
        "scope": [
          "message.error"
        ],
        "settings": {
          "foreground": "#e65050"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#86b300"
        }
      },
      {
        "name": "Markup links",
        "scope": [
          "markup.underline.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Markup Italic/Emphasis",
        "scope": [
          "markup.italic",
          "emphasis"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f07171"
        }
      },
      {
        "name": "Markup Bold",
        "scope": [
          "markup.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f07171"
        }
      },
      {
        "name": "Markup Underline",
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Markup Bold/italic",
        "scope": [
          "markup.italic markup.bold",
          "markup.bold markup.italic"
        ],
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Markup Code",
        "scope": [
          "markup.raw"
        ],
        "settings": {
          "background": "#5c616605"
        }
      },
      {
        "name": "Markup Code Inline",
        "scope": [
          "markup.raw.inline"
        ],
        "settings": {
          "background": "#5c61660f"
        }
      },
      {
        "name": "Markdown Separator",
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "fontStyle": "bold",
          "background": "#5c61660f",
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "Markup Blockquote",
        "scope": [
          "markup.quote"
        ],
        "settings": {
          "foreground": "#4cbf99",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markup List Bullet",
        "scope": [
          "markup.list punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#eba400"
        }
      },
      {
        "name": "Markup added",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": "#6cbf43"
        }
      },
      {
        "name": "Markup modified",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": "#478acc"
        }
      },
      {
        "name": "Markup removed",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": "#ff7383"
        }
      },
      {
        "name": "Markup Strike",
        "scope": [
          "markup.strike"
        ],
        "settings": {
          "foreground": "#e59645"
        }
      },
      {
        "name": "Markup strong",
        "scope": [
          "markup.strong"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup Table",
        "scope": [
          "markup.table"
        ],
        "settings": {
          "background": "#5c61660f",
          "foreground": "#55b4d4"
        }
      },
      {
        "name": "Markup Raw Inline",
        "scope": [
          "text.html.markdown markup.inline.raw"
        ],
        "settings": {
          "foreground": "#f2a191"
        }
      },
      {
        "name": "Markdown - Line Break",
        "scope": [
          "text.html.markdown meta.dummy.line-break"
        ],
        "settings": {
          "background": "#adaeb1",
          "foreground": "#adaeb1"
        }
      },
      {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
          "punctuation.definition.markdown"
        ],
        "settings": {
          "background": "#5c6166",
          "foreground": "#adaeb1"
        }
      }
    ],
    "semanticTokenColors": {
      "class": "#22a4e6",
      "class.defaultLibrary": "#55b4d4",
      "enum": "#22a4e6",
      "enum.defaultLibrary": "#55b4d4",
      "interface": "#55b4d4",
      "interface.defaultLibrary": {
        "foreground": "#55b4d4",
        "italic": true
      },
      "struct": "#22a4e6",
      "struct.defaultLibrary": "#55b4d4",
      "type": "#22a4e6",
      "type.defaultLibrary": "#55b4d4",
      "enumMember": "#4cbf99",
      "event": "#f2a191",
      "function": "#eba400",
      "method": "#eba400",
      "macro": "#e59645",
      "comment": "#adaeb1",
      "string": "#86b300",
      "keyword": "#fa8532",
      "number": "#a37acc",
      "regexp": "#4cbf99",
      "operator": "#f2a191"
    }
  },
  {
    "id": "ayu-mirage-unbordered",
    "label": "Ayu Mirage Unbordered",
    "name": "Ayu Mirage Unbordered",
    "type": "dark",
    "colors": {
      "focusBorder": "#ffcc66",
      "foreground": "#707a8c",
      "disabledForeground": "#707a8c80",
      "widget.border": "#171b24",
      "widget.shadow": "#00000033",
      "selection.background": "#409fff40",
      "icon.foreground": "#707a8c",
      "errorForeground": "#ff6666",
      "descriptionForeground": "#707a8c",
      "textBlockQuote.background": "#282e3b",
      "textLink.foreground": "#ffcc66",
      "textLink.activeForeground": "#ffcc66",
      "textPreformat.foreground": "#cccac2",
      "toolbar.hoverBackground": "#63759926",
      "button.background": "#ffcc66",
      "button.foreground": "#735923",
      "button.border": "#7359231a",
      "button.separator": "#7359234d",
      "button.hoverBackground": "#f9c55d",
      "button.secondaryBackground": "#707a8c33",
      "button.secondaryForeground": "#cccac2",
      "button.secondaryHoverBackground": "#707a8c80",
      "dropdown.background": "#282e3b",
      "dropdown.foreground": "#707a8c",
      "dropdown.border": "#171b24",
      "input.background": "#242936",
      "input.border": "#707a8c33",
      "input.foreground": "#cccac2",
      "input.placeholderForeground": "#707a8c80",
      "inputOption.hoverBackground": "#707a8c33",
      "inputOption.activeBorder": "#ffcc6633",
      "inputOption.activeBackground": "#ffcc661a",
      "inputOption.activeForeground": "#ffcc66",
      "inputValidation.errorBackground": "#242936",
      "inputValidation.errorBorder": "#ff6666",
      "inputValidation.infoBackground": "#1f2430",
      "inputValidation.infoBorder": "#5ccfe6",
      "inputValidation.warningBackground": "#1f2430",
      "inputValidation.warningBorder": "#ffcd66",
      "scrollbar.shadow": "#171b2400",
      "scrollbarSlider.background": "#707a8c66",
      "scrollbarSlider.hoverBackground": "#707a8c99",
      "scrollbarSlider.activeBackground": "#707a8cb3",
      "badge.background": "#ffcc6633",
      "badge.foreground": "#ffcc66",
      "progressBar.background": "#ffcc66",
      "list.activeSelectionBackground": "#63759926",
      "list.activeSelectionForeground": "#cccac2",
      "list.focusBackground": "#63759926",
      "list.focusForeground": "#cccac2",
      "list.focusOutline": "#63759926",
      "list.highlightForeground": "#ffcc66",
      "list.deemphasizedForeground": "#ff6666",
      "list.hoverBackground": "#63759926",
      "list.inactiveSelectionBackground": "#69758c1f",
      "list.inactiveSelectionForeground": "#707a8c",
      "list.invalidItemForeground": "#707a8c4d",
      "list.errorForeground": "#ff6666",
      "tree.indentGuidesStroke": "#707a8c70",
      "listFilterWidget.background": "#282e3b",
      "listFilterWidget.outline": "#ffcc66",
      "listFilterWidget.noMatchesOutline": "#ff6666",
      "list.filterMatchBackground": "#6a614966",
      "list.filterMatchBorder": "#73695066",
      "activityBar.background": "#1f2430",
      "activityBar.foreground": "#707a8ccc",
      "activityBar.inactiveForeground": "#707a8c99",
      "activityBar.border": "#1f2430",
      "activityBar.activeBorder": "#ffcc66",
      "activityBarBadge.background": "#ffcc66",
      "activityBarBadge.foreground": "#735923",
      "activityBarTop.foreground": "#808999",
      "activityBarTop.activeBorder": "#ffcc66",
      "sideBar.background": "#1f2430",
      "sideBar.border": "#1f2430",
      "sideBarTitle.foreground": "#707a8c",
      "sideBarSectionHeader.background": "#1f2430",
      "sideBarSectionHeader.foreground": "#707a8c",
      "sideBarSectionHeader.border": "#1f2430",
      "sideBarStickyScroll.border": "#171b24",
      "sideBarStickyScroll.shadow": "#00000033",
      "minimap.background": "#1f2430",
      "minimap.selectionHighlight": "#409fff40",
      "minimap.errorHighlight": "#ff6666",
      "minimap.findMatchHighlight": "#736950",
      "minimapGutter.addedBackground": "#87d96c",
      "minimapGutter.modifiedBackground": "#80bfff",
      "minimapGutter.deletedBackground": "#f27983",
      "editorGroup.border": "#171b24",
      "editorGroup.background": "#282e3b",
      "editorGroupHeader.noTabsBackground": "#1f2430",
      "editorGroupHeader.tabsBackground": "#1f2430",
      "editorGroupHeader.tabsBorder": "#1f2430",
      "tab.activeBackground": "#1f2430",
      "tab.activeForeground": "#cccac2",
      "tab.border": "#1f2430",
      "tab.activeBorder": "#ffcc66",
      "tab.unfocusedActiveBorder": "#707a8c",
      "tab.inactiveBackground": "#1f2430",
      "tab.inactiveForeground": "#707a8c",
      "tab.unfocusedActiveForeground": "#707a8c",
      "tab.unfocusedInactiveForeground": "#707a8c",
      "editor.background": "#1f2430",
      "editor.foreground": "#cccac2",
      "editorLineNumber.foreground": "#707a8c80",
      "editorLineNumber.activeForeground": "#707a8c",
      "editorCursor.foreground": "#ffcc66",
      "editor.inactiveSelectionBackground": "#409fff21",
      "editor.selectionBackground": "#409fff40",
      "editor.selectionHighlightBackground": "#87d96c26",
      "editor.selectionHighlightBorder": "#87d96c00",
      "editor.wordHighlightBackground": "#80bfff14",
      "editor.wordHighlightStrongBackground": "#87d96c14",
      "editor.wordHighlightBorder": "#80bfff80",
      "editor.wordHighlightStrongBorder": "#87d96c80",
      "editor.findMatchBackground": "#736950",
      "editor.findMatchHighlightBackground": "#73695066",
      "editor.rangeHighlightBackground": "#73695033",
      "editor.lineHighlightBackground": "#1a1f29",
      "editorLink.activeForeground": "#ffcc66",
      "editorWhitespace.foreground": "#707a8c80",
      "editorIndentGuide.background": "#707a8c3b",
      "editorIndentGuide.activeBackground": "#707a8c70",
      "editorInlayHint.foreground": "#cccac280",
      "editorRuler.foreground": "#707a8c3b",
      "editorCodeLens.foreground": "#6e7c8f",
      "editorBracketMatch.background": "#707a8c4d",
      "editorBracketMatch.border": "#707a8c4d",
      "editor.snippetTabstopHighlightBackground": "#87d96c33",
      "editorOverviewRuler.border": "#171b24",
      "editorOverviewRuler.modifiedForeground": "#80bfff",
      "editorOverviewRuler.addedForeground": "#87d96c",
      "editorOverviewRuler.deletedForeground": "#f27983",
      "editorOverviewRuler.errorForeground": "#ff6666",
      "editorOverviewRuler.warningForeground": "#ffcc66",
      "editorOverviewRuler.bracketMatchForeground": "#707a8cb3",
      "editorOverviewRuler.wordHighlightForeground": "#80bfff66",
      "editorOverviewRuler.wordHighlightStrongForeground": "#87d96c66",
      "editorOverviewRuler.findMatchForeground": "#736950",
      "editorError.foreground": "#ff6666",
      "editorWarning.foreground": "#ffcc66",
      "editorGutter.modifiedBackground": "#80bfff",
      "editorGutter.addedBackground": "#87d96c",
      "editorGutter.deletedBackground": "#f27983",
      "diffEditor.insertedTextBackground": "#87d96c1f",
      "diffEditor.removedTextBackground": "#f279831f",
      "diffEditor.diagonalFill": "#171b24",
      "editorWidget.background": "#282e3b",
      "editorWidget.border": "#171b24",
      "editorWidget.resizeBorder": "#282e3b",
      "editorHoverWidget.background": "#282e3b",
      "editorHoverWidget.border": "#171b24",
      "editorSuggestWidget.background": "#282e3b",
      "editorSuggestWidget.border": "#171b24",
      "editorSuggestWidget.highlightForeground": "#ffcc66",
      "editorSuggestWidget.selectedBackground": "#63759926",
      "editorStickyScroll.border": "#171b24",
      "editorStickyScroll.shadow": "#00000033",
      "editorStickyScrollHover.background": "#69758c1f",
      "debugExceptionWidget.border": "#171b24",
      "debugExceptionWidget.background": "#282e3b",
      "editorMarkerNavigation.background": "#282e3b",
      "peekView.border": "#63759926",
      "peekViewTitle.background": "#63759926",
      "peekViewTitleDescription.foreground": "#707a8c",
      "peekViewTitleLabel.foreground": "#cccac2",
      "peekViewEditor.background": "#282e3b",
      "peekViewEditor.matchHighlightBackground": "#73695066",
      "peekViewEditor.matchHighlightBorder": "#6a614966",
      "peekViewResult.background": "#282e3b",
      "peekViewResult.fileForeground": "#cccac2",
      "peekViewResult.lineForeground": "#707a8c",
      "peekViewResult.matchHighlightBackground": "#73695066",
      "peekViewResult.selectionBackground": "#63759926",
      "panel.background": "#1f2430",
      "panel.border": "#171b24",
      "panelTitle.activeBorder": "#ffcc66",
      "panelTitle.activeForeground": "#cccac2",
      "panelTitle.inactiveForeground": "#707a8c",
      "panelStickyScroll.border": "#171b24",
      "panelStickyScroll.shadow": "#00000033",
      "statusBar.background": "#1f2430",
      "statusBar.foreground": "#707a8c",
      "statusBar.border": "#1f2430",
      "statusBar.debuggingBackground": "#f29e74",
      "statusBar.debuggingForeground": "#242936",
      "statusBar.noFolderBackground": "#282e3b",
      "statusBarItem.activeBackground": "#707a8c33",
      "statusBarItem.hoverBackground": "#707a8c33",
      "statusBarItem.prominentBackground": "#171b24",
      "statusBarItem.prominentHoverBackground": "#00000030",
      "statusBarItem.remoteBackground": "#ffcc66",
      "statusBarItem.remoteForeground": "#735923",
      "titleBar.activeBackground": "#1f2430",
      "titleBar.inactiveBackground": "#1f2430",
      "titleBar.activeForeground": "#707a8c",
      "titleBar.inactiveForeground": "#707a8cb3",
      "titleBar.border": "#1f2430",
      "menu.foreground": "#707a8c",
      "menu.selectionBackground": "#69758c1f",
      "menu.selectionBorder": "#63759926",
      "menu.background": "#1c212c",
      "menu.border": "#171b24",
      "menu.separatorBackground": "#171b24",
      "extensionButton.prominentForeground": "#735923",
      "extensionButton.prominentBackground": "#ffcc66",
      "extensionButton.prominentHoverBackground": "#fcc85f",
      "pickerGroup.border": "#171b24",
      "pickerGroup.foreground": "#707a8c80",
      "debugToolBar.background": "#282e3b",
      "debugIcon.breakpointForeground": "#f29e74",
      "debugIcon.breakpointDisabledForeground": "#f29e7480",
      "debugConsoleInputIcon.foreground": "#ffcc66",
      "welcomePage.tileBackground": "#1f2430",
      "welcomePage.tileShadow": "#00000033",
      "welcomePage.progress.background": "#1a1f29",
      "welcomePage.buttonBackground": "#ffcc6666",
      "walkThrough.embeddedEditorBackground": "#282e3b",
      "gitDecoration.modifiedResourceForeground": "#80bfff",
      "gitDecoration.deletedResourceForeground": "#f27983",
      "gitDecoration.untrackedResourceForeground": "#87d96c",
      "gitDecoration.ignoredResourceForeground": "#707a8c80",
      "gitDecoration.conflictingResourceForeground": "",
      "gitDecoration.submoduleResourceForeground": "#dfbfff",
      "settings.headerForeground": "#cccac2",
      "settings.modifiedItemIndicator": "#80bfff",
      "keybindingLabel.background": "#707a8c1a",
      "keybindingLabel.foreground": "#cccac2",
      "keybindingLabel.border": "#cccac21a",
      "keybindingLabel.bottomBorder": "#cccac21a",
      "terminal.background": "#1f2430",
      "terminal.foreground": "#cccac2",
      "terminal.ansiBlack": "#171b24",
      "terminal.ansiRed": "#f28273",
      "terminal.ansiGreen": "#87d96c",
      "terminal.ansiYellow": "#fcca60",
      "terminal.ansiBlue": "#6acdff",
      "terminal.ansiMagenta": "#ddbbff",
      "terminal.ansiCyan": "#93e2c8",
      "terminal.ansiWhite": "#c7c7c7",
      "terminal.ansiBrightBlack": "#686868",
      "terminal.ansiBrightRed": "#f28779",
      "terminal.ansiBrightGreen": "#d5ff80",
      "terminal.ansiBrightYellow": "#ffcd66",
      "terminal.ansiBrightBlue": "#73d0ff",
      "terminal.ansiBrightMagenta": "#dfbfff",
      "terminal.ansiBrightCyan": "#95e6cb",
      "terminal.ansiBrightWhite": "#ffffff",
      "terminalCommandGuide.foreground": "#707a8c4d",
      "terminalStickyScroll.border": "#171b24",
      "terminalStickyScroll.shadow": "#00000033",
      "terminalStickyScrollHover.background": "#69758c1f",
      "commandCenter.foreground": "#707a8c",
      "commandCenter.activeForeground": "#707a8c",
      "commandCenter.background": "#242936",
      "commandCenter.activeBackground": "#63759926",
      "commandCenter.border": "#171b24",
      "commandCenter.inactiveBorder": "#171b24",
      "commandCenter.activeBorder": "#63759900",
      "actionBar.toggledBackground": "#63759926",
      "profileBadge.background": "#ffcc66",
      "profileBadge.foreground": "#735923",
      "chat.requestBorder": "#63759926",
      "chat.requestBackground": "#1f2430",
      "chat.requestBubbleBackground": "#69758c1f",
      "chat.requestBubbleHoverBackground": "#63759926",
      "chat.slashCommandBackground": "#5ccfe633",
      "chat.slashCommandForeground": "#5ccfe6",
      "chat.editedFileForeground": "#80bfff",
      "chat.checkpointSeparator": "#6e7c8f",
      "inlineChat.background": "#282e3b",
      "inlineChat.foreground": "#cccac2",
      "inlineChat.border": "#171b24",
      "inlineChat.shadow": "#00000033",
      "inlineChatInput.border": "#171b24",
      "inlineChatInput.focusBorder": "#ffcc66b3",
      "inlineChatInput.placeholderForeground": "#707a8c80",
      "inlineChatInput.background": "#242936",
      "inlineChatDiff.inserted": "#87d96c33",
      "inlineChatDiff.removed": "#f2798333",
      "inlineEdit.gutterIndicator.background": "#171b24",
      "inlineEdit.gutterIndicator.primaryBorder": "#ffcc66",
      "inlineEdit.gutterIndicator.primaryForeground": "#ffcc66",
      "inlineEdit.gutterIndicator.primaryBackground": "#ffcc661a",
      "inlineEdit.gutterIndicator.secondaryBorder": "#707a8c80",
      "inlineEdit.gutterIndicator.secondaryForeground": "#707a8c",
      "inlineEdit.gutterIndicator.secondaryBackground": "#707a8c1a",
      "inlineEdit.gutterIndicator.successfulBorder": "#87d96c",
      "inlineEdit.gutterIndicator.successfulForeground": "#87d96c",
      "inlineEdit.gutterIndicator.successfulBackground": "#87d96c1a",
      "inlineEdit.originalBackground": "#f279831a",
      "inlineEdit.modifiedBackground": "#87d96c1a",
      "inlineEdit.originalChangedLineBackground": "#f2798326",
      "inlineEdit.originalChangedTextBackground": "#f2798340",
      "inlineEdit.modifiedChangedLineBackground": "#87d96c26",
      "inlineEdit.modifiedChangedTextBackground": "#87d96c40",
      "inlineEdit.originalBorder": "#f2798380",
      "inlineEdit.modifiedBorder": "#87d96c80",
      "multiDiffEditor.headerBackground": "#282e3b",
      "multiDiffEditor.background": "#1f2430",
      "multiDiffEditor.border": "#171b24",
      "symbolIcon.arrayForeground": "#73d0ff",
      "symbolIcon.booleanForeground": "#dfbfff",
      "symbolIcon.classForeground": "#73d0ff",
      "symbolIcon.colorForeground": "#d9be98",
      "symbolIcon.constantForeground": "#dfbfff",
      "symbolIcon.constructorForeground": "#ffcd66",
      "symbolIcon.enumeratorForeground": "#73d0ff",
      "symbolIcon.enumeratorMemberForeground": "#dfbfff",
      "symbolIcon.eventForeground": "#d9be98",
      "symbolIcon.fieldForeground": "#f28779",
      "symbolIcon.fileForeground": "#707a8c",
      "symbolIcon.folderForeground": "#707a8c",
      "symbolIcon.functionForeground": "#ffcd66",
      "symbolIcon.interfaceForeground": "#73d0ff",
      "symbolIcon.keyForeground": "#5ccfe6",
      "symbolIcon.keywordForeground": "#ffa659",
      "symbolIcon.methodForeground": "#ffcd66",
      "symbolIcon.moduleForeground": "#d5ff80",
      "symbolIcon.namespaceForeground": "#d5ff80",
      "symbolIcon.nullForeground": "#dfbfff",
      "symbolIcon.numberForeground": "#dfbfff",
      "symbolIcon.objectForeground": "#73d0ff",
      "symbolIcon.operatorForeground": "#f29e74",
      "symbolIcon.packageForeground": "#d5ff80",
      "symbolIcon.propertyForeground": "#f28779",
      "symbolIcon.referenceForeground": "#73d0ff",
      "symbolIcon.snippetForeground": "#d9be98",
      "symbolIcon.stringForeground": "#d5ff80",
      "symbolIcon.structForeground": "#73d0ff",
      "symbolIcon.textForeground": "#cccac2",
      "symbolIcon.typeParameterForeground": "#73d0ff",
      "symbolIcon.unitForeground": "#dfbfff",
      "symbolIcon.variableForeground": "#cccac2"
    },
    "tokenColors": [
      {
        "settings": {
          "background": "#1f2430",
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Comment",
        "scope": [
          "comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "String",
        "scope": [
          "string",
          "constant.other.symbol"
        ],
        "settings": {
          "foreground": "#d5ff80"
        }
      },
      {
        "name": "Regular Expressions and Escape Characters",
        "scope": [
          "string.regexp",
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Number",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#dfbfff"
        }
      },
      {
        "name": "Built-in constants",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#dfbfff"
        }
      },
      {
        "name": "Variable",
        "scope": [
          "variable",
          "variable.parameter.function-call"
        ],
        "settings": {
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Member Variable",
        "scope": [
          "variable.member"
        ],
        "settings": {
          "foreground": "#f28779"
        }
      },
      {
        "name": "Language variable",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Storage",
        "scope": [
          "storage"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Operators",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#f29e74"
        }
      },
      {
        "name": "Separators like ; or ,",
        "scope": [
          "punctuation.separator",
          "punctuation.terminator"
        ],
        "settings": {
          "foreground": "#cccac2b3"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "punctuation.section"
        ],
        "settings": {
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Accessor",
        "scope": [
          "punctuation.accessor"
        ],
        "settings": {
          "foreground": "#f29e74"
        }
      },
      {
        "name": "JavaScript/TypeScript interpolation punctuation",
        "scope": [
          "punctuation.definition.template-expression"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Ruby interpolation punctuation",
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Interpolation text",
        "scope": [
          "meta.embedded"
        ],
        "settings": {
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Types fixes",
        "scope": [
          "source.java storage.type",
          "source.haskell storage.type",
          "source.c storage.type"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "Inherited class type",
        "scope": [
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Lambda arrow",
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Java primitive variable types",
        "scope": [
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Function name",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "Function arguments",
        "scope": [
          "variable.parameter",
          "meta.parameter"
        ],
        "settings": {
          "foreground": "#dfbfff"
        }
      },
      {
        "name": "Function call",
        "scope": [
          "variable.function",
          "variable.annotation",
          "meta.function-call.generic",
          "support.function.go"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "Library function",
        "scope": [
          "support.function",
          "support.macro"
        ],
        "settings": {
          "foreground": "#f28779"
        }
      },
      {
        "name": "Imports and packages",
        "scope": [
          "entity.name.import",
          "entity.name.package"
        ],
        "settings": {
          "foreground": "#d5ff80"
        }
      },
      {
        "name": "Entity name",
        "scope": [
          "entity.name"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "Tag start/end",
        "scope": [
          "punctuation.definition.tag.end",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": "#5ccfe680"
        }
      },
      {
        "name": "Tag attribute",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "CSS pseudo-class",
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Library constant",
        "scope": [
          "support.constant"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f29e74"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class",
          "source.go storage.type"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Decorators/annotation",
        "scope": [
          "meta.decorator variable.other",
          "meta.decorator punctuation.decorator",
          "storage.type.annotation",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#d9be98"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#ff6666"
        }
      },
      {
        "name": "diff.header",
        "scope": [
          "meta.diff",
          "meta.diff.header"
        ],
        "settings": {
          "foreground": "#c594c5"
        }
      },
      {
        "name": "Ruby class methods",
        "scope": [
          "source.ruby variable.other.readwrite"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "CSS tag names",
        "scope": [
          "source.css entity.name.tag",
          "source.sass entity.name.tag",
          "source.scss entity.name.tag",
          "source.less entity.name.tag",
          "source.stylus entity.name.tag"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "CSS browser prefix",
        "scope": [
          "source.css support.type",
          "source.sass support.type",
          "source.scss support.type",
          "source.less support.type",
          "source.stylus support.type"
        ],
        "settings": {
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "CSS Properties",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "fontStyle": "normal",
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Search Results Numbers",
        "scope": [
          "constant.numeric.line-number.find-in-files - match"
        ],
        "settings": {
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "Search Results Match Numbers",
        "scope": [
          "constant.numeric.line-number.match"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Search Results Lines",
        "scope": [
          "entity.name.filename.find-in-files"
        ],
        "settings": {
          "foreground": "#d5ff80"
        }
      },
      {
        "scope": [
          "message.error"
        ],
        "settings": {
          "foreground": "#ff6666"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#d5ff80"
        }
      },
      {
        "name": "Markup links",
        "scope": [
          "markup.underline.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Markup Italic/Emphasis",
        "scope": [
          "markup.italic",
          "emphasis"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f28779"
        }
      },
      {
        "name": "Markup Bold",
        "scope": [
          "markup.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f28779"
        }
      },
      {
        "name": "Markup Underline",
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Markup Bold/italic",
        "scope": [
          "markup.italic markup.bold",
          "markup.bold markup.italic"
        ],
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Markup Code",
        "scope": [
          "markup.raw"
        ],
        "settings": {
          "background": "#cccac205"
        }
      },
      {
        "name": "Markup Code Inline",
        "scope": [
          "markup.raw.inline"
        ],
        "settings": {
          "background": "#cccac20f"
        }
      },
      {
        "name": "Markdown Separator",
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "fontStyle": "bold",
          "background": "#cccac20f",
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "Markup Blockquote",
        "scope": [
          "markup.quote"
        ],
        "settings": {
          "foreground": "#95e6cb",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markup List Bullet",
        "scope": [
          "markup.list punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "Markup added",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": "#87d96c"
        }
      },
      {
        "name": "Markup modified",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": "#80bfff"
        }
      },
      {
        "name": "Markup removed",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": "#f27983"
        }
      },
      {
        "name": "Markup Strike",
        "scope": [
          "markup.strike"
        ],
        "settings": {
          "foreground": "#d9be98"
        }
      },
      {
        "name": "Markup strong",
        "scope": [
          "markup.strong"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup Table",
        "scope": [
          "markup.table"
        ],
        "settings": {
          "background": "#cccac20f",
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Markup Raw Inline",
        "scope": [
          "text.html.markdown markup.inline.raw"
        ],
        "settings": {
          "foreground": "#f29e74"
        }
      },
      {
        "name": "Markdown - Line Break",
        "scope": [
          "text.html.markdown meta.dummy.line-break"
        ],
        "settings": {
          "background": "#6e7c8f",
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
          "punctuation.definition.markdown"
        ],
        "settings": {
          "background": "#cccac2",
          "foreground": "#6e7c8f"
        }
      }
    ],
    "semanticTokenColors": {
      "class": "#73d0ff",
      "class.defaultLibrary": "#5ccfe6",
      "enum": "#73d0ff",
      "enum.defaultLibrary": "#5ccfe6",
      "interface": "#5ccfe6",
      "interface.defaultLibrary": {
        "foreground": "#5ccfe6",
        "italic": true
      },
      "struct": "#73d0ff",
      "struct.defaultLibrary": "#5ccfe6",
      "type": "#73d0ff",
      "type.defaultLibrary": "#5ccfe6",
      "enumMember": "#95e6cb",
      "event": "#f29e74",
      "function": "#ffcd66",
      "method": "#ffcd66",
      "macro": "#d9be98",
      "comment": "#6e7c8f",
      "string": "#d5ff80",
      "keyword": "#ffa659",
      "number": "#dfbfff",
      "regexp": "#95e6cb",
      "operator": "#f29e74"
    }
  },
  {
    "id": "ayu-mirage",
    "label": "Ayu Mirage",
    "name": "Ayu Mirage",
    "type": "dark",
    "colors": {
      "focusBorder": "#ffcc66",
      "foreground": "#707a8c",
      "disabledForeground": "#707a8c80",
      "widget.border": "#171b24",
      "widget.shadow": "#00000033",
      "selection.background": "#409fff40",
      "icon.foreground": "#707a8c",
      "errorForeground": "#ff6666",
      "descriptionForeground": "#707a8c",
      "textBlockQuote.background": "#282e3b",
      "textLink.foreground": "#ffcc66",
      "textLink.activeForeground": "#ffcc66",
      "textPreformat.foreground": "#cccac2",
      "toolbar.hoverBackground": "#63759926",
      "button.background": "#ffcc66",
      "button.foreground": "#735923",
      "button.border": "#7359231a",
      "button.separator": "#7359234d",
      "button.hoverBackground": "#f9c55d",
      "button.secondaryBackground": "#707a8c33",
      "button.secondaryForeground": "#cccac2",
      "button.secondaryHoverBackground": "#707a8c80",
      "dropdown.background": "#282e3b",
      "dropdown.foreground": "#707a8c",
      "dropdown.border": "#171b24",
      "input.background": "#242936",
      "input.border": "#707a8c33",
      "input.foreground": "#cccac2",
      "input.placeholderForeground": "#707a8c80",
      "inputOption.hoverBackground": "#707a8c33",
      "inputOption.activeBorder": "#ffcc6633",
      "inputOption.activeBackground": "#ffcc661a",
      "inputOption.activeForeground": "#ffcc66",
      "inputValidation.errorBackground": "#242936",
      "inputValidation.errorBorder": "#ff6666",
      "inputValidation.infoBackground": "#1f2430",
      "inputValidation.infoBorder": "#5ccfe6",
      "inputValidation.warningBackground": "#1f2430",
      "inputValidation.warningBorder": "#ffcd66",
      "scrollbar.shadow": "#171b2400",
      "scrollbarSlider.background": "#707a8c66",
      "scrollbarSlider.hoverBackground": "#707a8c99",
      "scrollbarSlider.activeBackground": "#707a8cb3",
      "badge.background": "#ffcc6633",
      "badge.foreground": "#ffcc66",
      "progressBar.background": "#ffcc66",
      "list.activeSelectionBackground": "#63759926",
      "list.activeSelectionForeground": "#cccac2",
      "list.focusBackground": "#63759926",
      "list.focusForeground": "#cccac2",
      "list.focusOutline": "#63759926",
      "list.highlightForeground": "#ffcc66",
      "list.deemphasizedForeground": "#ff6666",
      "list.hoverBackground": "#63759926",
      "list.inactiveSelectionBackground": "#69758c1f",
      "list.inactiveSelectionForeground": "#707a8c",
      "list.invalidItemForeground": "#707a8c4d",
      "list.errorForeground": "#ff6666",
      "tree.indentGuidesStroke": "#707a8c70",
      "listFilterWidget.background": "#282e3b",
      "listFilterWidget.outline": "#ffcc66",
      "listFilterWidget.noMatchesOutline": "#ff6666",
      "list.filterMatchBackground": "#6a614966",
      "list.filterMatchBorder": "#73695066",
      "activityBar.background": "#1f2430",
      "activityBar.foreground": "#707a8ccc",
      "activityBar.inactiveForeground": "#707a8c99",
      "activityBar.border": "#171b24",
      "activityBar.activeBorder": "#ffcc66",
      "activityBarBadge.background": "#ffcc66",
      "activityBarBadge.foreground": "#735923",
      "activityBarTop.foreground": "#808999",
      "activityBarTop.activeBorder": "#ffcc66",
      "sideBar.background": "#1f2430",
      "sideBar.border": "#171b24",
      "sideBarTitle.foreground": "#707a8c",
      "sideBarSectionHeader.background": "#1f2430",
      "sideBarSectionHeader.foreground": "#707a8c",
      "sideBarSectionHeader.border": "#171b24",
      "sideBarStickyScroll.border": "#171b24",
      "sideBarStickyScroll.shadow": "#00000033",
      "minimap.background": "#242936",
      "minimap.selectionHighlight": "#409fff40",
      "minimap.errorHighlight": "#ff6666",
      "minimap.findMatchHighlight": "#736950",
      "minimapGutter.addedBackground": "#87d96c",
      "minimapGutter.modifiedBackground": "#80bfff",
      "minimapGutter.deletedBackground": "#f27983",
      "editorGroup.border": "#171b24",
      "editorGroup.background": "#282e3b",
      "editorGroupHeader.noTabsBackground": "#1f2430",
      "editorGroupHeader.tabsBackground": "#1f2430",
      "editorGroupHeader.tabsBorder": "#171b24",
      "tab.activeBackground": "#242936",
      "tab.activeForeground": "#cccac2",
      "tab.border": "#171b24",
      "tab.activeBorder": "#242936",
      "tab.activeBorderTop": "#ffcc66",
      "tab.unfocusedActiveBorderTop": "#707a8c",
      "tab.inactiveBackground": "#1f2430",
      "tab.inactiveForeground": "#707a8c",
      "tab.unfocusedActiveForeground": "#707a8c",
      "tab.unfocusedInactiveForeground": "#707a8c",
      "editor.background": "#242936",
      "editor.foreground": "#cccac2",
      "editorLineNumber.foreground": "#707a8c80",
      "editorLineNumber.activeForeground": "#707a8c",
      "editorCursor.foreground": "#ffcc66",
      "editor.inactiveSelectionBackground": "#409fff21",
      "editor.selectionBackground": "#409fff40",
      "editor.selectionHighlightBackground": "#87d96c26",
      "editor.selectionHighlightBorder": "#87d96c00",
      "editor.wordHighlightBackground": "#80bfff14",
      "editor.wordHighlightStrongBackground": "#87d96c14",
      "editor.wordHighlightBorder": "#80bfff80",
      "editor.wordHighlightStrongBorder": "#87d96c80",
      "editor.findMatchBackground": "#736950",
      "editor.findMatchHighlightBackground": "#73695066",
      "editor.rangeHighlightBackground": "#73695033",
      "editor.lineHighlightBackground": "#1a1f29",
      "editorLink.activeForeground": "#ffcc66",
      "editorWhitespace.foreground": "#707a8c80",
      "editorIndentGuide.background": "#707a8c3b",
      "editorIndentGuide.activeBackground": "#707a8c70",
      "editorInlayHint.foreground": "#cccac280",
      "editorRuler.foreground": "#707a8c3b",
      "editorCodeLens.foreground": "#6e7c8f",
      "editorBracketMatch.background": "#707a8c4d",
      "editorBracketMatch.border": "#707a8c4d",
      "editor.snippetTabstopHighlightBackground": "#87d96c33",
      "editorOverviewRuler.border": "#171b24",
      "editorOverviewRuler.modifiedForeground": "#80bfff",
      "editorOverviewRuler.addedForeground": "#87d96c",
      "editorOverviewRuler.deletedForeground": "#f27983",
      "editorOverviewRuler.errorForeground": "#ff6666",
      "editorOverviewRuler.warningForeground": "#ffcc66",
      "editorOverviewRuler.bracketMatchForeground": "#707a8cb3",
      "editorOverviewRuler.wordHighlightForeground": "#80bfff66",
      "editorOverviewRuler.wordHighlightStrongForeground": "#87d96c66",
      "editorOverviewRuler.findMatchForeground": "#736950",
      "editorError.foreground": "#ff6666",
      "editorWarning.foreground": "#ffcc66",
      "editorGutter.modifiedBackground": "#80bfff",
      "editorGutter.addedBackground": "#87d96c",
      "editorGutter.deletedBackground": "#f27983",
      "diffEditor.insertedTextBackground": "#87d96c1f",
      "diffEditor.removedTextBackground": "#f279831f",
      "diffEditor.diagonalFill": "#171b24",
      "editorWidget.background": "#282e3b",
      "editorWidget.border": "#171b24",
      "editorWidget.resizeBorder": "#282e3b",
      "editorHoverWidget.background": "#282e3b",
      "editorHoverWidget.border": "#171b24",
      "editorSuggestWidget.background": "#282e3b",
      "editorSuggestWidget.border": "#171b24",
      "editorSuggestWidget.highlightForeground": "#ffcc66",
      "editorSuggestWidget.selectedBackground": "#63759926",
      "editorStickyScroll.border": "#171b24",
      "editorStickyScroll.shadow": "#00000033",
      "editorStickyScrollHover.background": "#69758c1f",
      "debugExceptionWidget.border": "#171b24",
      "debugExceptionWidget.background": "#282e3b",
      "editorMarkerNavigation.background": "#282e3b",
      "peekView.border": "#63759926",
      "peekViewTitle.background": "#63759926",
      "peekViewTitleDescription.foreground": "#707a8c",
      "peekViewTitleLabel.foreground": "#cccac2",
      "peekViewEditor.background": "#282e3b",
      "peekViewEditor.matchHighlightBackground": "#73695066",
      "peekViewEditor.matchHighlightBorder": "#6a614966",
      "peekViewResult.background": "#282e3b",
      "peekViewResult.fileForeground": "#cccac2",
      "peekViewResult.lineForeground": "#707a8c",
      "peekViewResult.matchHighlightBackground": "#73695066",
      "peekViewResult.selectionBackground": "#63759926",
      "panel.background": "#1f2430",
      "panel.border": "#171b24",
      "panelTitle.activeBorder": "#ffcc66",
      "panelTitle.activeForeground": "#cccac2",
      "panelTitle.inactiveForeground": "#707a8c",
      "panelStickyScroll.border": "#171b24",
      "panelStickyScroll.shadow": "#00000033",
      "statusBar.background": "#1f2430",
      "statusBar.foreground": "#707a8c",
      "statusBar.border": "#171b24",
      "statusBar.debuggingBackground": "#f29e74",
      "statusBar.debuggingForeground": "#242936",
      "statusBar.noFolderBackground": "#282e3b",
      "statusBarItem.activeBackground": "#707a8c33",
      "statusBarItem.hoverBackground": "#707a8c33",
      "statusBarItem.prominentBackground": "#171b24",
      "statusBarItem.prominentHoverBackground": "#00000030",
      "statusBarItem.remoteBackground": "#ffcc66",
      "statusBarItem.remoteForeground": "#735923",
      "titleBar.activeBackground": "#1f2430",
      "titleBar.inactiveBackground": "#1f2430",
      "titleBar.activeForeground": "#707a8c",
      "titleBar.inactiveForeground": "#707a8cb3",
      "titleBar.border": "#171b24",
      "menu.foreground": "#707a8c",
      "menu.selectionBackground": "#69758c1f",
      "menu.selectionBorder": "#63759926",
      "menu.background": "#1c212c",
      "menu.border": "#171b24",
      "menu.separatorBackground": "#171b24",
      "extensionButton.prominentForeground": "#735923",
      "extensionButton.prominentBackground": "#ffcc66",
      "extensionButton.prominentHoverBackground": "#fcc85f",
      "pickerGroup.border": "#171b24",
      "pickerGroup.foreground": "#707a8c80",
      "debugToolBar.background": "#282e3b",
      "debugIcon.breakpointForeground": "#f29e74",
      "debugIcon.breakpointDisabledForeground": "#f29e7480",
      "debugConsoleInputIcon.foreground": "#ffcc66",
      "welcomePage.tileBackground": "#1f2430",
      "welcomePage.tileShadow": "#00000033",
      "welcomePage.progress.background": "#1a1f29",
      "welcomePage.buttonBackground": "#ffcc6666",
      "walkThrough.embeddedEditorBackground": "#282e3b",
      "gitDecoration.modifiedResourceForeground": "#80bfff",
      "gitDecoration.deletedResourceForeground": "#f27983",
      "gitDecoration.untrackedResourceForeground": "#87d96c",
      "gitDecoration.ignoredResourceForeground": "#707a8c80",
      "gitDecoration.conflictingResourceForeground": "",
      "gitDecoration.submoduleResourceForeground": "#dfbfff",
      "settings.headerForeground": "#cccac2",
      "settings.modifiedItemIndicator": "#80bfff",
      "keybindingLabel.background": "#707a8c1a",
      "keybindingLabel.foreground": "#cccac2",
      "keybindingLabel.border": "#cccac21a",
      "keybindingLabel.bottomBorder": "#cccac21a",
      "terminal.background": "#1f2430",
      "terminal.foreground": "#cccac2",
      "terminal.ansiBlack": "#171b24",
      "terminal.ansiRed": "#f28273",
      "terminal.ansiGreen": "#87d96c",
      "terminal.ansiYellow": "#fcca60",
      "terminal.ansiBlue": "#6acdff",
      "terminal.ansiMagenta": "#ddbbff",
      "terminal.ansiCyan": "#93e2c8",
      "terminal.ansiWhite": "#c7c7c7",
      "terminal.ansiBrightBlack": "#686868",
      "terminal.ansiBrightRed": "#f28779",
      "terminal.ansiBrightGreen": "#d5ff80",
      "terminal.ansiBrightYellow": "#ffcd66",
      "terminal.ansiBrightBlue": "#73d0ff",
      "terminal.ansiBrightMagenta": "#dfbfff",
      "terminal.ansiBrightCyan": "#95e6cb",
      "terminal.ansiBrightWhite": "#ffffff",
      "terminalCommandGuide.foreground": "#707a8c4d",
      "terminalStickyScroll.border": "#171b24",
      "terminalStickyScroll.shadow": "#00000033",
      "terminalStickyScrollHover.background": "#69758c1f",
      "commandCenter.foreground": "#707a8c",
      "commandCenter.activeForeground": "#707a8c",
      "commandCenter.background": "#242936",
      "commandCenter.activeBackground": "#63759926",
      "commandCenter.border": "#171b24",
      "commandCenter.inactiveBorder": "#171b24",
      "commandCenter.activeBorder": "#63759900",
      "actionBar.toggledBackground": "#63759926",
      "profileBadge.background": "#ffcc66",
      "profileBadge.foreground": "#735923",
      "chat.requestBorder": "#63759926",
      "chat.requestBackground": "#1f2430",
      "chat.requestBubbleBackground": "#69758c1f",
      "chat.requestBubbleHoverBackground": "#63759926",
      "chat.slashCommandBackground": "#5ccfe633",
      "chat.slashCommandForeground": "#5ccfe6",
      "chat.editedFileForeground": "#80bfff",
      "chat.checkpointSeparator": "#6e7c8f",
      "inlineChat.background": "#282e3b",
      "inlineChat.foreground": "#cccac2",
      "inlineChat.border": "#171b24",
      "inlineChat.shadow": "#00000033",
      "inlineChatInput.border": "#171b24",
      "inlineChatInput.focusBorder": "#ffcc66b3",
      "inlineChatInput.placeholderForeground": "#707a8c80",
      "inlineChatInput.background": "#242936",
      "inlineChatDiff.inserted": "#87d96c33",
      "inlineChatDiff.removed": "#f2798333",
      "inlineEdit.gutterIndicator.background": "#171b24",
      "inlineEdit.gutterIndicator.primaryBorder": "#ffcc66",
      "inlineEdit.gutterIndicator.primaryForeground": "#ffcc66",
      "inlineEdit.gutterIndicator.primaryBackground": "#ffcc661a",
      "inlineEdit.gutterIndicator.secondaryBorder": "#707a8c80",
      "inlineEdit.gutterIndicator.secondaryForeground": "#707a8c",
      "inlineEdit.gutterIndicator.secondaryBackground": "#707a8c1a",
      "inlineEdit.gutterIndicator.successfulBorder": "#87d96c",
      "inlineEdit.gutterIndicator.successfulForeground": "#87d96c",
      "inlineEdit.gutterIndicator.successfulBackground": "#87d96c1a",
      "inlineEdit.originalBackground": "#f279831a",
      "inlineEdit.modifiedBackground": "#87d96c1a",
      "inlineEdit.originalChangedLineBackground": "#f2798326",
      "inlineEdit.originalChangedTextBackground": "#f2798340",
      "inlineEdit.modifiedChangedLineBackground": "#87d96c26",
      "inlineEdit.modifiedChangedTextBackground": "#87d96c40",
      "inlineEdit.originalBorder": "#f2798380",
      "inlineEdit.modifiedBorder": "#87d96c80",
      "multiDiffEditor.headerBackground": "#282e3b",
      "multiDiffEditor.background": "#1f2430",
      "multiDiffEditor.border": "#171b24",
      "symbolIcon.arrayForeground": "#73d0ff",
      "symbolIcon.booleanForeground": "#dfbfff",
      "symbolIcon.classForeground": "#73d0ff",
      "symbolIcon.colorForeground": "#d9be98",
      "symbolIcon.constantForeground": "#dfbfff",
      "symbolIcon.constructorForeground": "#ffcd66",
      "symbolIcon.enumeratorForeground": "#73d0ff",
      "symbolIcon.enumeratorMemberForeground": "#dfbfff",
      "symbolIcon.eventForeground": "#d9be98",
      "symbolIcon.fieldForeground": "#f28779",
      "symbolIcon.fileForeground": "#707a8c",
      "symbolIcon.folderForeground": "#707a8c",
      "symbolIcon.functionForeground": "#ffcd66",
      "symbolIcon.interfaceForeground": "#73d0ff",
      "symbolIcon.keyForeground": "#5ccfe6",
      "symbolIcon.keywordForeground": "#ffa659",
      "symbolIcon.methodForeground": "#ffcd66",
      "symbolIcon.moduleForeground": "#d5ff80",
      "symbolIcon.namespaceForeground": "#d5ff80",
      "symbolIcon.nullForeground": "#dfbfff",
      "symbolIcon.numberForeground": "#dfbfff",
      "symbolIcon.objectForeground": "#73d0ff",
      "symbolIcon.operatorForeground": "#f29e74",
      "symbolIcon.packageForeground": "#d5ff80",
      "symbolIcon.propertyForeground": "#f28779",
      "symbolIcon.referenceForeground": "#73d0ff",
      "symbolIcon.snippetForeground": "#d9be98",
      "symbolIcon.stringForeground": "#d5ff80",
      "symbolIcon.structForeground": "#73d0ff",
      "symbolIcon.textForeground": "#cccac2",
      "symbolIcon.typeParameterForeground": "#73d0ff",
      "symbolIcon.unitForeground": "#dfbfff",
      "symbolIcon.variableForeground": "#cccac2"
    },
    "tokenColors": [
      {
        "settings": {
          "background": "#1f2430",
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Comment",
        "scope": [
          "comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "String",
        "scope": [
          "string",
          "constant.other.symbol"
        ],
        "settings": {
          "foreground": "#d5ff80"
        }
      },
      {
        "name": "Regular Expressions and Escape Characters",
        "scope": [
          "string.regexp",
          "constant.character",
          "constant.other"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Number",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#dfbfff"
        }
      },
      {
        "name": "Built-in constants",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#dfbfff"
        }
      },
      {
        "name": "Variable",
        "scope": [
          "variable",
          "variable.parameter.function-call"
        ],
        "settings": {
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Member Variable",
        "scope": [
          "variable.member"
        ],
        "settings": {
          "foreground": "#f28779"
        }
      },
      {
        "name": "Language variable",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Storage",
        "scope": [
          "storage"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Keyword",
        "scope": [
          "keyword"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Operators",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#f29e74"
        }
      },
      {
        "name": "Separators like ; or ,",
        "scope": [
          "punctuation.separator",
          "punctuation.terminator"
        ],
        "settings": {
          "foreground": "#cccac2b3"
        }
      },
      {
        "name": "Punctuation",
        "scope": [
          "punctuation.section"
        ],
        "settings": {
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Accessor",
        "scope": [
          "punctuation.accessor"
        ],
        "settings": {
          "foreground": "#f29e74"
        }
      },
      {
        "name": "JavaScript/TypeScript interpolation punctuation",
        "scope": [
          "punctuation.definition.template-expression"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Ruby interpolation punctuation",
        "scope": [
          "punctuation.section.embedded"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Interpolation text",
        "scope": [
          "meta.embedded"
        ],
        "settings": {
          "foreground": "#cccac2"
        }
      },
      {
        "name": "Types fixes",
        "scope": [
          "source.java storage.type",
          "source.haskell storage.type",
          "source.c storage.type"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "Inherited class type",
        "scope": [
          "entity.other.inherited-class"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Lambda arrow",
        "scope": [
          "storage.type.function"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Java primitive variable types",
        "scope": [
          "source.java storage.type.primitive"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Function name",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "Function arguments",
        "scope": [
          "variable.parameter",
          "meta.parameter"
        ],
        "settings": {
          "foreground": "#dfbfff"
        }
      },
      {
        "name": "Function call",
        "scope": [
          "variable.function",
          "variable.annotation",
          "meta.function-call.generic",
          "support.function.go"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "Library function",
        "scope": [
          "support.function",
          "support.macro"
        ],
        "settings": {
          "foreground": "#f28779"
        }
      },
      {
        "name": "Imports and packages",
        "scope": [
          "entity.name.import",
          "entity.name.package"
        ],
        "settings": {
          "foreground": "#d5ff80"
        }
      },
      {
        "name": "Entity name",
        "scope": [
          "entity.name"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "Tag",
        "scope": [
          "entity.name.tag",
          "meta.tag.sgml"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "Tag start/end",
        "scope": [
          "punctuation.definition.tag.end",
          "punctuation.definition.tag.begin",
          "punctuation.definition.tag"
        ],
        "settings": {
          "foreground": "#5ccfe680"
        }
      },
      {
        "name": "Tag attribute",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "CSS pseudo-class",
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#95e6cb"
        }
      },
      {
        "name": "Library constant",
        "scope": [
          "support.constant"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f29e74"
        }
      },
      {
        "name": "Library class/type",
        "scope": [
          "support.type",
          "support.class",
          "source.go storage.type"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Decorators/annotation",
        "scope": [
          "meta.decorator variable.other",
          "meta.decorator punctuation.decorator",
          "storage.type.annotation",
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#d9be98"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#ff6666"
        }
      },
      {
        "name": "diff.header",
        "scope": [
          "meta.diff",
          "meta.diff.header"
        ],
        "settings": {
          "foreground": "#c594c5"
        }
      },
      {
        "name": "Ruby class methods",
        "scope": [
          "source.ruby variable.other.readwrite"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "CSS tag names",
        "scope": [
          "source.css entity.name.tag",
          "source.sass entity.name.tag",
          "source.scss entity.name.tag",
          "source.less entity.name.tag",
          "source.stylus entity.name.tag"
        ],
        "settings": {
          "foreground": "#73d0ff"
        }
      },
      {
        "name": "CSS browser prefix",
        "scope": [
          "source.css support.type",
          "source.sass support.type",
          "source.scss support.type",
          "source.less support.type",
          "source.stylus support.type"
        ],
        "settings": {
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "CSS Properties",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "fontStyle": "normal",
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Search Results Numbers",
        "scope": [
          "constant.numeric.line-number.find-in-files - match"
        ],
        "settings": {
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "Search Results Match Numbers",
        "scope": [
          "constant.numeric.line-number.match"
        ],
        "settings": {
          "foreground": "#ffa659"
        }
      },
      {
        "name": "Search Results Lines",
        "scope": [
          "entity.name.filename.find-in-files"
        ],
        "settings": {
          "foreground": "#d5ff80"
        }
      },
      {
        "scope": [
          "message.error"
        ],
        "settings": {
          "foreground": "#ff6666"
        }
      },
      {
        "name": "Markup heading",
        "scope": [
          "markup.heading",
          "markup.heading entity.name"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#d5ff80"
        }
      },
      {
        "name": "Markup links",
        "scope": [
          "markup.underline.link",
          "string.other.link"
        ],
        "settings": {
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Markup Italic/Emphasis",
        "scope": [
          "markup.italic",
          "emphasis"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f28779"
        }
      },
      {
        "name": "Markup Bold",
        "scope": [
          "markup.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#f28779"
        }
      },
      {
        "name": "Markup Underline",
        "scope": [
          "markup.underline"
        ],
        "settings": {
          "fontStyle": "underline"
        }
      },
      {
        "name": "Markup Bold/italic",
        "scope": [
          "markup.italic markup.bold",
          "markup.bold markup.italic"
        ],
        "settings": {
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Markup Code",
        "scope": [
          "markup.raw"
        ],
        "settings": {
          "background": "#cccac205"
        }
      },
      {
        "name": "Markup Code Inline",
        "scope": [
          "markup.raw.inline"
        ],
        "settings": {
          "background": "#cccac20f"
        }
      },
      {
        "name": "Markdown Separator",
        "scope": [
          "meta.separator"
        ],
        "settings": {
          "fontStyle": "bold",
          "background": "#cccac20f",
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "Markup Blockquote",
        "scope": [
          "markup.quote"
        ],
        "settings": {
          "foreground": "#95e6cb",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markup List Bullet",
        "scope": [
          "markup.list punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#ffcd66"
        }
      },
      {
        "name": "Markup added",
        "scope": [
          "markup.inserted"
        ],
        "settings": {
          "foreground": "#87d96c"
        }
      },
      {
        "name": "Markup modified",
        "scope": [
          "markup.changed"
        ],
        "settings": {
          "foreground": "#80bfff"
        }
      },
      {
        "name": "Markup removed",
        "scope": [
          "markup.deleted"
        ],
        "settings": {
          "foreground": "#f27983"
        }
      },
      {
        "name": "Markup Strike",
        "scope": [
          "markup.strike"
        ],
        "settings": {
          "foreground": "#d9be98"
        }
      },
      {
        "name": "Markup strong",
        "scope": [
          "markup.strong"
        ],
        "settings": {
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markup Table",
        "scope": [
          "markup.table"
        ],
        "settings": {
          "background": "#cccac20f",
          "foreground": "#5ccfe6"
        }
      },
      {
        "name": "Markup Raw Inline",
        "scope": [
          "text.html.markdown markup.inline.raw"
        ],
        "settings": {
          "foreground": "#f29e74"
        }
      },
      {
        "name": "Markdown - Line Break",
        "scope": [
          "text.html.markdown meta.dummy.line-break"
        ],
        "settings": {
          "background": "#6e7c8f",
          "foreground": "#6e7c8f"
        }
      },
      {
        "name": "Markdown - Raw Block Fenced",
        "scope": [
          "punctuation.definition.markdown"
        ],
        "settings": {
          "background": "#cccac2",
          "foreground": "#6e7c8f"
        }
      }
    ],
    "semanticTokenColors": {
      "class": "#73d0ff",
      "class.defaultLibrary": "#5ccfe6",
      "enum": "#73d0ff",
      "enum.defaultLibrary": "#5ccfe6",
      "interface": "#5ccfe6",
      "interface.defaultLibrary": {
        "foreground": "#5ccfe6",
        "italic": true
      },
      "struct": "#73d0ff",
      "struct.defaultLibrary": "#5ccfe6",
      "type": "#73d0ff",
      "type.defaultLibrary": "#5ccfe6",
      "enumMember": "#95e6cb",
      "event": "#f29e74",
      "function": "#ffcd66",
      "method": "#ffcd66",
      "macro": "#d9be98",
      "comment": "#6e7c8f",
      "string": "#d5ff80",
      "keyword": "#ffa659",
      "number": "#dfbfff",
      "regexp": "#95e6cb",
      "operator": "#f29e74"
    }
  },
  {
    "id": "lynx-dark",
    "label": "Lynx Dark",
    "name": "Lynx Dark Theme",
    "type": "dark",
    "colors": {
      "titleBar.activeBackground": "#090c0a",
      "titleBar.activeForeground": "#e8f0ec",
      "titleBar.inactiveBackground": "#060806",
      "titleBar.inactiveForeground": "#3d5c48",
      "commandCenter.background": "#060806",
      "commandCenter.border": "#1a3d26",
      "commandCenter.activeBackground": "#0d1a10",
      "menu.background": "#0b1410",
      "menu.foreground": "#d4ead8",
      "menu.border": "#1a3d26",
      "menu.selectionBackground": "#00d88250",
      "menu.selectionForeground": "#00d882",
      "menu.separatorBackground": "#1e3d28",
      "menubar.selectionBackground": "#00d88228",
      "menubar.selectionForeground": "#00d882",
      "menu.selectionBorder": "#00d882",
      "menubar.selectionBorder": "#00d882",
      "list.hoverBackground": "#0f2018b8",
      "list.hoverForeground": "#d4ead8",
      "list.dropBackground": "#000000",
      "banner.background": "#0d1a10",
      "banner.foreground": "#e8f0ec",
      "banner.iconForeground": "#00d882",
      "activityBar.background": "#080c09",
      "activityBar.foreground": "#c8dcd0",
      "activityBar.border": "#080c09",
      "activityBarTop.inactiveForeground": "#2e4a38",
      "activityBarBadge.background": "#00d882",
      "activityBarBadge.foreground": "#040a06",
      "activityBar.activeBorder": "#00ff9d",
      "activityBar.activeBackground": "#00d88230",
      "activityBar.activeFocusBorder": "#00ff9d",
      "activityBarTop.foreground": "#00d882",
      "list.warningForeground": "#f59e0b",
      "list.errorForeground": "#ff5c6a",
      "list.invalidItemForeground": "#ff5c6a",
      "tree.indentGuidesStroke": "#00d88240",
      "list.activeSelectionBackground": "#00d88230",
      "list.activeSelectionForeground": "#e8f0ec",
      "list.inactiveSelectionForeground": "#b8ccbe",
      "list.inactiveSelectionBackground": "#111611",
      "list.focusBackground": "#1a3028",
      "list.focusForeground": "#d4ead8",
      "list.focusOutline": "#00d882",
      "contrastActiveBorder": "#00000000",
      "sideBar.background": "#080c09",
      "sideBar.foreground": "#8ea898",
      "sideBarSectionHeader.background": "#060806",
      "sideBarTitle.foreground": "#c8dcd0",
      "sideBarSectionHeader.foreground": "#00d882",
      "button.background": "#00d882",
      "button.foreground": "#020a04",
      "button.hoverBackground": "#00b86e",
      "button.secondaryBackground": "#00d882",
      "button.secondaryForeground": "#ffffff",
      "button.secondaryHoverBackground": "#08a969",
      "toolbar.hoverBackground": "#ffffff18",
      "editorHoverWidget.border": "#1a3020",
      "editorHoverWidget.foreground": "#d4ead8",
      "editorHoverWidget.background": "#0b1410",
      "editorHoverWidget.statusBarBackground": "#0f1c14",
      "gitDecoration.modifiedResourceForeground": "#00d882",
      "gitDecoration.conflictingResourceForeground": "#4db8ff",
      "gitDecoration.deletedResourceForeground": "#ff6878",
      "gitDecoration.ignoredResourceForeground": "#3a4a3abe",
      "gitDecoration.untrackedResourceForeground": "#13ff3e",
      "gitDecoration.stageModifiedResourceForeground": "#f5c842",
      "gitDecoration.stageDeletedResourceForeground": "#f5c842",
      "gitDecoration.submoduleResourceForeground": "#f5c842",
      "gitDecoration.renamedResourceForeground": "#e8d060",
      "gitDecoration.addedResourceForeground": "#e8d060",
      "editorGhostText.foreground": "#2e4a38",
      "editorGutter.deletedBackground": "#ff5c6a",
      "editorGutter.modifiedBackground": "#4dc9ff",
      "editor.background": "#080c09",
      "editor.foreground": "#d4ead8",
      "editor.lineHighlightBackground": "#ffffff08",
      "editor.foldBackground": "#00d88210",
      "editor.lineHighlightBorder": "#ffffff0d",
      "editor.selectionBackground": "#00d88250",
      "editor.rangeHighlightBackground": "#4dc9ff12",
      "editor.linkedEditingBackground": "#00d88228",
      "editor.wordHighlightBackground": "#f5c84228",
      "editor.wordHighlightStrongBackground": "#85b3ff28",
      "editor.selectionHighlightBackground": "#f5c84220",
      "editorIndentGuide.background1": "#1e3d2835",
      "editorIndentGuide.activeBackground1": "#00d88245",
      "editorGroupHeader.tabsBackground": "#060806",
      "editorGroupHeader.tabsBorder": "#0f2018",
      "editorGroupHeader.border": "#0a1410",
      "tab.border": "#0f2018",
      "tab.activeBackground": "#0b140c",
      "tab.activeBorderTop": "#00d882",
      "tab.activeForeground": "#e8f0ec",
      "tab.activeBorder": "#0b140c",
      "tab.inactiveBackground": "#060806",
      "tab.inactiveForeground": "#3d5c48",
      "tab.hoverBackground": "#0f2018",
      "tab.hoverForeground": "#b8ccbe",
      "tab.hoverBorder": "#0f2018",
      "tab.unfocusedActiveForeground": "#6a8a74",
      "tab.unfocusedInactiveForeground": "#2e4a38",
      "breadcrumb.background": "#0b140c",
      "breadcrumb.foreground": "#5a7a64",
      "breadcrumbPicker.background": "#0b140c",
      "breadcrumb.focusForeground": "#00ff9d",
      "breadcrumb.activeSelectionForeground": "#00ff9d",
      "editorStickyScrollHover.background": "#111611",
      "scrollbarSlider.background": "#00d88228",
      "scrollbarSlider.hoverBackground": "#00d88240",
      "scrollbarSlider.activeBackground": "#00d88258",
      "scrollbar.shadow": "#00000028",
      "minimap.background": "#060806",
      "minimap.errorHighlight": "#ff5c6a",
      "minimap.warningHighlight": "#f5c842",
      "minimap.findMatchHighlight": "#00d882b0",
      "minimap.selectionHighlight": "#00ff9d50",
      "minimapSlider.background": "#00d88230",
      "minimapSlider.hoverBackground": "#00d88245",
      "minimapSlider.activeBackground": "#00d88255",
      "editorLineNumber.activeForeground": "#00d882",
      "editorLineNumber.foreground": "#1e3d28",
      "editorSuggestWidget.background": "#0b1410",
      "editorSuggestWidget.foreground": "#c8dcd0",
      "editorSuggestWidget.border": "#1a3020",
      "editorSuggestWidget.highlightForeground": "#00ff9d",
      "editorSuggestWidget.selectedBackground": "#00d88240",
      "editorSuggestWidget.selectedForeground": "#e8f0ec",
      "editorSuggestWidget.focusHighlightForeground": "#00ff9d",
      "editorWidget.resizeBorder": "#00d882",
      "editorWidget.border": "#1a3d26",
      "widget.border": "#1a3d26",
      "widget.shadow": "#00000058",
      "diffEditor.insertedTextBackground": "#00d88220",
      "diffEditor.removedTextBackground": "#ff687818",
      "diffEditor.insertedLineBackground": "#00d88210",
      "diffEditor.removedLineBackground": "#ff687810",
      "diffEditor.diagonalFill": "#ffffff20",
      "input.background": "#0b1410",
      "input.foreground": "#d4ead8",
      "input.border": "#1a3d26",
      "input.placeholderForeground": "#3d5c48",
      "focusBorder": "#00d882",
      "editorCursor.foreground": "#00ff9d",
      "disabledForeground": "#3d5c48",
      "chat.avatarBackground": "#111611",
      "icon.foreground": "#c8dcd0",
      "chat.avatarForeground": "#e8f0ec",
      "foreground": "#d4ead8",
      "chat.requestBorder": "#1a3020",
      "editorWidget.foreground": "#c8dcd0",
      "peekViewTitleDescription.foreground": "#00d882",
      "editorGutter.addedBackground": "#00d882",
      "inputOption.activeBackground": "#00d88250",
      "inputOption.activeForeground": "#e8f0ec",
      "progressBar.background": "#00d882",
      "editorWidget.background": "#0b1410",
      "quickInputList.focusBackground": "#00d88260",
      "list.highlightForeground": "#00ff9d",
      "quickInput.background": "#0b1410",
      "quickInput.foreground": "#d4ead8",
      "quickInputList.focusIconForeground": "#e8f0ec",
      "quickInputList.focusForeground": "#e8f0ec",
      "keybindingLabel.foreground": "#e8f0ec",
      "keybindingLabel.background": "#1a3020",
      "keybindingLabel.border": "#00000000",
      "keybindingLabel.bottomBorder": "#00d882",
      "panel.background": "#060806",
      "panel.border": "#1a3d2660",
      "panelTitle.activeBorder": "#00d882",
      "panelTitle.activeForeground": "#e8f0ec",
      "panelTitle.inactiveForeground": "#3d5c48",
      "panelSection.border": "#1a3d26",
      "panelSection.dropBackground": "#00d88230",
      "panelSectionHeader.background": "#0f1c14",
      "panelSectionHeader.foreground": "#00d882",
      "terminal.background": "#060806",
      "terminal.foreground": "#c8dcd0",
      "terminal.ansiBlack": "#0a0c0a",
      "terminal.ansiBlue": "#4db8ff",
      "terminal.ansiBrightBlack": "#3d5c48",
      "terminal.ansiBrightBlue": "#7de4ff",
      "terminal.ansiBrightCyan": "#4de5f0",
      "terminal.ansiBrightGreen": "#00ff9d",
      "terminal.ansiBrightMagenta": "#d4a5ff",
      "terminal.ansiBrightRed": "#ff7888",
      "terminal.ansiBrightWhite": "#e8f0ec",
      "terminal.ansiBrightYellow": "#f5c842",
      "terminal.ansiCyan": "#00e8c8",
      "terminal.ansiGreen": "#00d882",
      "terminal.ansiMagenta": "#c870ff",
      "terminal.ansiRed": "#ff5c6a",
      "terminal.ansiWhite": "#c8dcd0",
      "terminal.ansiYellow": "#f5c842",
      "terminalCursor.background": "#060806",
      "terminalCursor.foreground": "#00d882",
      "terminal.selectionBackground": "#00d88245",
      "notifications.background": "#0b1410",
      "notifications.foreground": "#d4ead8",
      "notifications.border": "#1a3d26",
      "notificationCenter.border": "#1a3d26",
      "notificationCenterHeader.background": "#0f1c14",
      "notificationCenterHeader.foreground": "#00d882",
      "notificationToast.border": "#1a3d26",
      "notificationsErrorIcon.foreground": "#ff5c6a",
      "notificationsWarningIcon.foreground": "#f5c842",
      "notificationsInfoIcon.foreground": "#00d882",
      "notificationLink.foreground": "#00d882",
      "dropdown.background": "#0b1410",
      "dropdown.foreground": "#d4ead8",
      "dropdown.border": "#1a3d26",
      "debugToolBar.background": "#0a1810",
      "dropdown.listBackground": "#0f1c14",
      "debugToolBar.border": "#1a3020",
      "statusBar.background": "#060806",
      "statusBar.foreground": "#2e6a4a",
      "statusBar.debuggingBackground": "#0a1c12",
      "statusBar.debuggingForeground": "#d4ead8",
      "statusBar.noFolderBackground": "#00000000",
      "statusBarItem.hoverBackground": "#0f1c14",
      "statusBar.noFolderForeground": "#3d5c48",
      "statusBarItem.hoverForeground": "#d4ead8",
      "statusBarItem.activeBackground": "#00d88215",
      "statusBarItem.remoteBackground": "#009960",
      "statusBarItem.remoteForeground": "#e8f0ec",
      "statusBarItem.remoteHoverForeground": "#ffffff",
      "statusBarItem.prominentBackground": "#1a3020",
      "extensionIcon.verifiedForeground": "#00d882",
      "textPreformat.foreground": "#f5c842",
      "textLink.foreground": "#00d882",
      "textLink.activeForeground": "#00ff9d",
      "textBlockQuote.background": "#0b1410b0",
      "textBlockQuote.border": "#00d88260",
      "textCodeBlock.background": "#0b1410",
      "titleBar.border": "#00000000",
      "sideBarSectionHeader.border": "#00000000",
      "sideBar.border": "#0f201870",
      "editorOverviewRuler.border": "#0f201870",
      "statusBar.border": "#00000000",
      "selection.background": "#1a4830",
      "editor.findMatchBackground": "#a05a20cc",
      "editor.findMatchBorder": "#e8903a",
      "editor.findMatchHighlightBackground": "#7a4010d8",
      "editor.findMatchHighlightBorder": "#e8a060",
      "editor.findRangeHighlightBackground": "#e8903a35",
      "editorOverviewRuler.findMatchForeground": "#00d88270",
      "editorOverviewRuler.rangeHighlightForeground": "#00ff9d70",
      "inputValidation.errorBackground": "#ff5c6a20",
      "inputValidation.errorForeground": "#ff5c6a",
      "inputValidation.errorBorder": "#ff5c6a",
      "inputValidation.warningBackground": "#f5c84220",
      "inputValidation.warningForeground": "#f5c842",
      "inputValidation.warningBorder": "#f5c842",
      "inputValidation.infoBackground": "#4dc9ff20",
      "inputValidation.infoForeground": "#4dc9ff",
      "inputValidation.infoBorder": "#4dc9ff",
      "editorBracketHighlight.foreground1": "#f5c842",
      "editorBracketHighlight.foreground2": "#c870ff",
      "editorBracketHighlight.foreground3": "#4db8ff",
      "editorBracketHighlight.foreground4": "#ff8c6a",
      "editorBracketHighlight.foreground5": "#ff6888",
      "editorBracketHighlight.foreground6": "#00e8c8",
      "editorBracketMatch.background": "#00d88225",
      "editorBracketMatch.border": "#00d88270",
      "editorBracketHighlight.unexpectedBracket.foreground": "#ff5c6a",
      "editorInlayHint.background": "#050e0750",
      "editorInlayHint.foreground": "#2e5a40",
      "editorInlayHint.typeForeground": "#00c87a",
      "editorInlayHint.typeBackground": "#001a1060",
      "editorInlayHint.parameterForeground": "#9d70e8",
      "editorInlayHint.parameterBackground": "#10082008",
      "editorStickyScroll.background": "#0b1410",
      "editorStickyScroll.border": "#1a3020",
      "editorStickyScroll.shadow": "#00000088",
      "testing.iconFailed": "#ff5c6a",
      "testing.iconErrored": "#f5c842",
      "testing.iconPassed": "#00d882",
      "testing.iconQueued": "#f5c842",
      "testing.iconSkipped": "#3d5c48",
      "testing.iconUnset": "#2e4a38",
      "testing.peekBorder": "#00d882",
      "testing.peekHeaderBackground": "#0b1410",
      "testing.message.error.lineBackground": "#ff5c6a28",
      "merge.currentHeaderBackground": "#00d88235",
      "merge.currentContentBackground": "#00d88218",
      "merge.incomingHeaderBackground": "#4db8ff35",
      "merge.incomingContentBackground": "#4db8ff18",
      "merge.border": "#00d882",
      "merge.commonContentBackground": "#f5c84218",
      "merge.commonHeaderBackground": "#f5c84235",
      "symbolIcon.arrayForeground": "#f5c842",
      "symbolIcon.booleanForeground": "#ff8c6a",
      "symbolIcon.classForeground": "#00d882",
      "symbolIcon.colorForeground": "#c870ff",
      "symbolIcon.constantForeground": "#00ff9d",
      "symbolIcon.constructorForeground": "#4dc9ff",
      "symbolIcon.enumeratorForeground": "#f5c842",
      "symbolIcon.enumeratorMemberForeground": "#00d882",
      "symbolIcon.eventForeground": "#ff5c6a",
      "symbolIcon.fieldForeground": "#4db8ff",
      "symbolIcon.fileForeground": "#c8dcd0",
      "symbolIcon.folderForeground": "#f5c842",
      "symbolIcon.functionForeground": "#00d882",
      "symbolIcon.interfaceForeground": "#4dc9ff",
      "symbolIcon.keyForeground": "#c870ff",
      "symbolIcon.keywordForeground": "#00d882",
      "symbolIcon.methodForeground": "#4dc9ff",
      "symbolIcon.moduleForeground": "#f5c842",
      "symbolIcon.namespaceForeground": "#f5a060",
      "symbolIcon.nullForeground": "#ff5c6a",
      "symbolIcon.numberForeground": "#00d882",
      "symbolIcon.objectForeground": "#f5c842",
      "symbolIcon.operatorForeground": "#00e8c8",
      "symbolIcon.packageForeground": "#f5a060",
      "symbolIcon.propertyForeground": "#4db8ff",
      "symbolIcon.referenceForeground": "#ff8c6a",
      "symbolIcon.snippetForeground": "#00d882",
      "symbolIcon.stringForeground": "#00c87a",
      "symbolIcon.structForeground": "#4dc9ff",
      "symbolIcon.textForeground": "#c8dcd0",
      "symbolIcon.typeParameterForeground": "#c870ff",
      "symbolIcon.unitForeground": "#00e8c8",
      "symbolIcon.variableForeground": "#4db8ff",
      "settings.headerForeground": "#e8f0ec",
      "settings.modifiedItemIndicator": "#00d882",
      "settings.dropdownBackground": "#0b1410",
      "settings.dropdownForeground": "#d4ead8",
      "settings.dropdownBorder": "#1a3020",
      "settings.dropdownListBorder": "#00d882",
      "settings.checkboxBackground": "#0b1410",
      "settings.checkboxForeground": "#00d882",
      "settings.checkboxBorder": "#1a3020",
      "settings.textInputBackground": "#0b1410",
      "settings.textInputForeground": "#d4ead8",
      "settings.textInputBorder": "#1a3020",
      "settings.numberInputBackground": "#0b1410",
      "settings.numberInputForeground": "#d4ead8",
      "settings.numberInputBorder": "#1a3020",
      "problemsErrorIcon.foreground": "#ff5c6a",
      "problemsWarningIcon.foreground": "#f5c842",
      "problemsInfoIcon.foreground": "#4dc9ff",
      "charts.foreground": "#c8dcd0",
      "charts.lines": "#1a3020",
      "charts.red": "#ff3a4a",
      "charts.blue": "#00d882",
      "charts.yellow": "#f5c842",
      "charts.green": "#00ff9d",
      "charts.orange": "#ff8c6a",
      "charts.purple": "#c870ff",
      "editorGroup.border": "#1a3020",
      "sash.hoverBorder": "#00d882",
      "editorGroup.dropBackground": "#00d88218",
      "editorGroup.emptyBackground": "#060806",
      "editorGroup.focusedEmptyBorder": "#00d882",
      "editorGroupHeader.noTabsBackground": "#060806",
      "peekView.border": "#00d882",
      "peekViewEditor.background": "#0b1410",
      "peekViewEditor.matchHighlightBackground": "#00d88235",
      "peekViewEditor.matchHighlightBorder": "#00d882",
      "peekViewEditorGutter.background": "#0b1410",
      "peekViewResult.background": "#060806",
      "peekViewResult.fileForeground": "#c8dcd0",
      "peekViewResult.lineForeground": "#3d5c48",
      "peekViewResult.matchHighlightBackground": "#00d88235",
      "peekViewResult.selectionBackground": "#1a3020",
      "peekViewResult.selectionForeground": "#d4ead8",
      "peekViewTitle.background": "#060806",
      "peekViewTitleLabel.foreground": "#d4ead8",
      "debugIcon.pauseForeground": "#f5c842",
      "debugIcon.stopForeground": "#ff5c6a",
      "debugIcon.restartForeground": "#4dc9ff"
    },
    "tokenColors": [
      {
        "name": "Comment — Line",
        "scope": [
          "comment.line",
          "punctuation.definition.comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#1e4a30"
        }
      },
      {
        "name": "Comment — Block",
        "scope": "comment.block",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#1e4a30"
        }
      },
      {
        "name": "Comment — Documentation",
        "scope": [
          "comment.block.documentation",
          "comment.line.documentation"
        ],
        "settings": {
          "fontStyle": "italic bold",
          "foreground": "#285a3c"
        }
      },
      {
        "name": "Astro String Quoted",
        "scope": [
          "string.quoted.astro"
        ],
        "settings": {
          "foreground": "#00a86a"
        }
      },
      {
        "name": "Astro Source",
        "scope": [
          "source.astro"
        ],
        "settings": {
          "foreground": "#c8dcd0"
        }
      },
      {
        "name": "Keywords Control",
        "scope": [
          "keyword.control"
        ],
        "settings": {
          "foreground": "#ff8040",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keywords Control Flow",
        "scope": [
          "keyword.control.flow",
          "keyword.control.conditional",
          "keyword.control.loop"
        ],
        "settings": {
          "foreground": "#ff5fa8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keywords Control New",
        "scope": [
          "keyword.control.new",
          "keyword.operator.new"
        ],
        "settings": {
          "foreground": "#ff5fa8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keywords Import/Export",
        "scope": [
          "keyword.control.import",
          "keyword.control.export",
          "keyword.control.from"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "Keywords Async/Await",
        "scope": [
          "keyword.control.async",
          "keyword.control.await"
        ],
        "settings": {
          "foreground": "#4db8ff",
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Keywords Other",
        "scope": [
          "keyword.other"
        ],
        "settings": {
          "foreground": "#ff8040"
        }
      },
      {
        "name": "Storage Type",
        "scope": [
          "storage.type"
        ],
        "settings": {
          "foreground": "#ff8040",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Storage Type Annotation",
        "scope": [
          "storage.type.annotation"
        ],
        "settings": {
          "foreground": "#8878f8"
        }
      },
      {
        "name": "Storage Type Generic",
        "scope": [
          "storage.type.generic"
        ],
        "settings": {
          "foreground": "#00e87a"
        }
      },
      {
        "name": "Storage Type Function Arrow",
        "scope": [
          "storage.type.function.arrow"
        ],
        "settings": {
          "foreground": "#c8dcd0"
        }
      },
      {
        "name": "Storage Modifier",
        "scope": [
          "storage.modifier"
        ],
        "settings": {
          "foreground": "#ff8040",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Storage Modifier Import",
        "scope": [
          "storage.modifier.import"
        ],
        "settings": {
          "foreground": "#6a8a78"
        }
      },
      {
        "name": "Keyword Operator",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#8ab0a0"
        }
      },
      {
        "name": "Keyword Operator Assignment",
        "scope": [
          "keyword.operator.assignment"
        ],
        "settings": {
          "foreground": "#8ab0a0",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keyword Operator Expression",
        "scope": [
          "keyword.operator.expression"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "Keyword Operator Logical",
        "scope": [
          "keyword.operator.logical"
        ],
        "settings": {
          "foreground": "#a870fa",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keyword Operator Comparison",
        "scope": [
          "keyword.operator.comparison"
        ],
        "settings": {
          "foreground": "#a870fa"
        }
      },
      {
        "name": "Keyword Operator Rest/Spread",
        "scope": [
          "keyword.operator.rest",
          "keyword.operator.spread"
        ],
        "settings": {
          "foreground": "#00e8c8"
        }
      },
      {
        "name": "Keyword Operator Type Annotation",
        "scope": [
          "keyword.operator.type.annotation"
        ],
        "settings": {
          "foreground": "#8ab0a0"
        }
      },
      {
        "name": "Keyword Operator Ternary",
        "scope": [
          "keyword.operator.ternary"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "Punctuation General",
        "scope": [
          "punctuation.accessor",
          "punctuation.bracket",
          "punctuation.definition",
          "punctuation.definition.block",
          "punctuation.definition.parameters",
          "punctuation.definition.string",
          "punctuation.section",
          "punctuation.separator",
          "punctuation.separator.dot-access",
          "punctuation.terminator.statement"
        ],
        "settings": {
          "foreground": "#4a7060"
        }
      },
      {
        "name": "Punctuation Definition Annotation",
        "scope": [
          "punctuation.definition.annotation"
        ],
        "settings": {
          "foreground": "#8878f8"
        }
      },
      {
        "name": "Variables General",
        "scope": [
          "variable.other",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#c8dcd0"
        }
      },
      {
        "name": "Block Level Variables",
        "scope": [
          "meta.block variable.other"
        ],
        "settings": {
          "foreground": "#b8ccc0"
        }
      },
      {
        "name": "Variables Constant",
        "scope": [
          "variable.other.constant"
        ],
        "settings": {
          "foreground": "#4db8ff",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Variables Read-only",
        "scope": [
          "variable.other.readonly"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Variables Macro Argument",
        "scope": [
          "variable.other.macro.argument"
        ],
        "settings": {
          "foreground": "#a870fa"
        }
      },
      {
        "name": "Variables Parameter",
        "scope": [
          "variable.parameter",
          "variable.parameter.probably"
        ],
        "settings": {
          "foreground": "#ff7a90",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Variables Language",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "foreground": "#ff5fa8",
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Variables Destructuring",
        "scope": [
          "meta.object.property",
          "meta.object-binding-pattern-variable"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Function Names",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#00d882",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Method Names",
        "scope": [
          "entity.name.method"
        ],
        "settings": {
          "foreground": "#38c4e8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Constructor Function",
        "scope": [
          "entity.name.function.constructor"
        ],
        "settings": {
          "foreground": "#f5c842",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Meta Function Call",
        "scope": [
          "meta.function-call"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Meta Definition Function",
        "scope": [
          "meta.definition.function"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Meta Definition Method",
        "scope": [
          "meta.definition.method"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Meta Definition Property",
        "scope": [
          "meta.definition.property"
        ],
        "settings": {
          "foreground": "#5a8070"
        }
      },
      {
        "name": "String Quoted",
        "scope": [
          "string.quoted.single",
          "string.quoted.double"
        ],
        "settings": {
          "foreground": "#00b870"
        }
      },
      {
        "name": "String Template",
        "scope": [
          "string.template"
        ],
        "settings": {
          "foreground": "#00b870"
        }
      },
      {
        "name": "Template Literal Expressions",
        "scope": [
          "meta.template.expression"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "String Regex",
        "scope": [
          "string.regexp"
        ],
        "settings": {
          "foreground": "#00e8c8"
        }
      },
      {
        "name": "String Other Link",
        "scope": [
          "string.other.link"
        ],
        "settings": {
          "foreground": "#4db8ff"
        }
      },
      {
        "name": "Constant Numeric",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#00d882",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Constant Language",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#00e8c8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Constant Other Variable",
        "scope": [
          "constant.other.variable"
        ],
        "settings": {
          "foreground": "#00b870"
        }
      },
      {
        "name": "Constant Character Escape",
        "scope": [
          "constant.character.escape"
        ],
        "settings": {
          "foreground": "#00e8c8"
        }
      },
      {
        "name": "Entity Name Tag",
        "scope": [
          "entity.name.tag"
        ],
        "settings": {
          "foreground": "#ff5fa8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type",
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#00e87a",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Class",
        "scope": [
          "entity.name.type.class"
        ],
        "settings": {
          "foreground": "#00e87a",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Interface",
        "scope": [
          "entity.name.type.interface"
        ],
        "settings": {
          "foreground": "#4db8ff",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Enum",
        "scope": [
          "entity.name.type.enum"
        ],
        "settings": {
          "foreground": "#f5c842",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Module",
        "scope": [
          "entity.name.type.module"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Entity Other",
        "scope": [
          "entity.other"
        ],
        "settings": {
          "foreground": "#00e87a"
        }
      },
      {
        "name": "Entity Other Attribute Name",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#a870fa"
        }
      },
      {
        "name": "Entity Scope Name",
        "scope": [
          "entity.scope.name"
        ],
        "settings": {
          "foreground": "#4db8ff"
        }
      },
      {
        "name": "Support Type Primitive",
        "scope": [
          "support.type.primitive"
        ],
        "settings": {
          "foreground": "#ff8040",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Support Type Property Name",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Support Type Builtin",
        "scope": [
          "support.type.builtin"
        ],
        "settings": {
          "foreground": "#ff8040",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Support Function",
        "scope": [
          "support.function"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Support Class",
        "scope": [
          "support.class"
        ],
        "settings": {
          "foreground": "#00e87a"
        }
      },
      {
        "name": "Meta Brace",
        "scope": [
          "meta.brace"
        ],
        "settings": {
          "foreground": "#8ab0a0"
        }
      },
      {
        "name": "Meta Definition Variable",
        "scope": [
          "meta.definition.variable"
        ],
        "settings": {
          "foreground": "#5a8070"
        }
      },
      {
        "name": "Meta Import",
        "scope": [
          "meta.import"
        ],
        "settings": {
          "foreground": "#c8dcd0"
        }
      },
      {
        "name": "Import Module Path",
        "scope": [
          "meta.import string.quoted",
          "meta.import.from string.quoted",
          "meta.import.js string.quoted",
          "meta.import.ts string.quoted",
          "meta.import.astro string.quoted",
          "meta.import string.quoted.single",
          "meta.import string.quoted.double",
          "meta.import string.quoted.single.astro",
          "meta.import string.quoted.double.astro",
          "meta.import string.quoted.single.js",
          "meta.import string.quoted.double.js",
          "meta.import string.quoted.single.ts",
          "meta.import string.quoted.double.ts"
        ],
        "settings": {
          "foreground": "#ff7ac8"
        }
      },
      {
        "name": "Meta Object Literal Key",
        "scope": [
          "meta.object-literal.key"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "CSS Selector",
        "scope": [
          "entity.name.tag.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings": {
          "foreground": "#ff8040"
        }
      },
      {
        "name": "CSS Property Name",
        "scope": [
          "support.type.property-name.css"
        ],
        "settings": {
          "foreground": "#c8dcd0"
        }
      },
      {
        "name": "CSS Property Value",
        "scope": [
          "support.constant.property-value.css"
        ],
        "settings": {
          "foreground": "#00a868"
        }
      },
      {
        "name": "CSS ID Selector",
        "scope": [
          "entity.other.attribute-name.id.css"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "CSS Pseudo Class",
        "scope": [
          "entity.other.attribute-name.pseudo-class.css"
        ],
        "settings": {
          "foreground": "#a870fa"
        }
      },
      {
        "name": "JSON Key - Level 0",
        "scope": [
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "JSON Key - Level 1",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#a870fa"
        }
      },
      {
        "name": "JSON Key - Level 2",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#4db8ff"
        }
      },
      {
        "name": "JSON String",
        "scope": [
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#00a868"
        }
      },
      {
        "name": "YAML Key",
        "scope": [
          "entity.name.tag.yaml"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#ff5fa8",
          "fontStyle": "bold underline"
        }
      },
      {
        "name": "Invalid Deprecated",
        "scope": [
          "invalid.deprecated"
        ],
        "settings": {
          "foreground": "#ff7888"
        }
      },
      {
        "name": "Markdown Fenced Code Language",
        "scope": [
          "text.html.markdown fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#ff8040"
        }
      },
      {
        "name": "Markdown Bold",
        "scope": [
          "text.html.markdown markup.bold"
        ],
        "settings": {
          "foreground": "#ff5fa8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markdown Italic",
        "scope": [
          "text.html.markdown markup.italic"
        ],
        "settings": {
          "foreground": "#00b870",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markdown Strikethrough",
        "scope": [
          "text.html.markdown markup.strikethrough"
        ],
        "settings": {
          "foreground": "#ff5fa8",
          "fontStyle": "strikethrough"
        }
      },
      {
        "name": "Markdown Inline Raw String",
        "scope": [
          "text.html.markdown markup.inline.raw.string"
        ],
        "settings": {
          "foreground": "#f5c842"
        }
      },
      {
        "name": "Markdown Underline Link",
        "scope": [
          "text.html.markdown markup.underline.link"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Markdown Meta Paragraph",
        "scope": [
          "text.html.markdown meta.paragraph"
        ],
        "settings": {
          "foreground": "#c8dcd0"
        }
      },
      {
        "name": "Markdown Punctuation Definition Heading",
        "scope": [
          "text.html.markdown punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#4db8ff",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markdown Heading",
        "scope": [
          "text.html.markdown entity.name.section"
        ],
        "settings": {
          "foreground": "#00d882",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markdown String Other Link Title",
        "scope": [
          "text.html.markdown string.other.link.title"
        ],
        "settings": {
          "foreground": "#00b870"
        }
      },
      {
        "name": "Markdown Meta Separator",
        "scope": [
          "text.html.markdown meta.separator"
        ],
        "settings": {
          "foreground": "#1e4a30"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component.jsx",
          "support.class.component.tsx"
        ],
        "settings": {
          "foreground": "#f5c842",
          "fontStyle": "bold"
        }
      },
      {
        "name": "JSX Attribute",
        "scope": [
          "entity.other.attribute-name.jsx",
          "entity.other.attribute-name.tsx"
        ],
        "settings": {
          "foreground": "#a870fa"
        }
      },
      {
        "name": "JSX Tag Bracket",
        "scope": [
          "punctuation.definition.tag.jsx",
          "punctuation.definition.tag.tsx"
        ],
        "settings": {
          "foreground": "#4a7060"
        }
      },
      {
        "name": "TypeScript Type",
        "scope": [
          "entity.name.type.ts",
          "entity.name.type.tsx"
        ],
        "settings": {
          "foreground": "#00e87a",
          "fontStyle": "bold"
        }
      },
      {
        "name": "TypeScript Interface",
        "scope": [
          "entity.name.type.interface.ts",
          "entity.name.type.interface.tsx"
        ],
        "settings": {
          "foreground": "#4db8ff",
          "fontStyle": "bold"
        }
      },
      {
        "name": "TypeScript Type Alias",
        "scope": [
          "entity.name.type.alias.ts",
          "entity.name.type.alias.tsx"
        ],
        "settings": {
          "foreground": "#38c4e8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Decorator Symbol",
        "scope": [
          "punctuation.decorator"
        ],
        "settings": {
          "foreground": "#8878f8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Decorator Name",
        "scope": [
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#8878f8",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Python Magic Method",
        "scope": [
          "support.function.magic.python"
        ],
        "settings": {
          "foreground": "#a870fa",
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Python Built-in Function",
        "scope": [
          "support.function.builtin.python"
        ],
        "settings": {
          "foreground": "#38c4e8"
        }
      },
      {
        "name": "Lambda Arrow",
        "scope": [
          "storage.type.function.lambda"
        ],
        "settings": {
          "foreground": "#a870fa"
        }
      },
      {
        "name": "Generic Type Parameter",
        "scope": [
          "entity.name.type.parameter"
        ],
        "settings": {
          "foreground": "#c870ff"
        }
      },
      {
        "name": "Module Export Default",
        "scope": [
          "keyword.control.default"
        ],
        "settings": {
          "foreground": "#00e8c8",
          "fontStyle": "bold"
        }
      }
    ],
    "semanticTokenColors": {
      "namespace": {
        "foreground": "#f5903a",
        "fontStyle": "italic"
      },
      "class": {
        "foreground": "#00e87a",
        "fontStyle": "bold"
      },
      "enum": {
        "foreground": "#f5c842",
        "fontStyle": "bold"
      },
      "interface": {
        "foreground": "#4db8ff",
        "fontStyle": "bold italic"
      },
      "struct": {
        "foreground": "#00e87a",
        "fontStyle": "bold"
      },
      "typeParameter": {
        "foreground": "#c870ff",
        "fontStyle": "italic"
      },
      "type": {
        "foreground": "#00e87a",
        "fontStyle": "bold"
      },
      "parameter": {
        "foreground": "#ff7a90",
        "fontStyle": "italic"
      },
      "variable": "#c8dcd0",
      "variable.readonly": {
        "foreground": "#38c8e8",
        "fontStyle": "italic"
      },
      "variable.defaultLibrary": {
        "foreground": "#00e8c8",
        "fontStyle": "bold"
      },
      "property": "#4db8e8",
      "property.readonly": {
        "foreground": "#4db8e8",
        "fontStyle": "italic"
      },
      "enumMember": {
        "foreground": "#00e8c8",
        "fontStyle": "bold"
      },
      "event": {
        "foreground": "#ff60a8",
        "fontStyle": "italic"
      },
      "function": {
        "foreground": "#00d882",
        "fontStyle": "bold"
      },
      "method": {
        "foreground": "#38b8e8",
        "fontStyle": "bold"
      },
      "macro": {
        "foreground": "#c870ff",
        "fontStyle": "bold italic"
      },
      "decorator": {
        "foreground": "#8878f8",
        "fontStyle": "bold"
      },
      "label": {
        "foreground": "#f5c842"
      }
    }
  },
  {
    "id": "lynx-light",
    "label": "Lynx Light",
    "name": "Lynx Light Theme",
    "type": "light",
    "colors": {
      "titleBar.activeBackground": "#eaeaea",
      "titleBar.activeForeground": "#2d2d2d",
      "titleBar.inactiveBackground": "#f5f5f5",
      "titleBar.inactiveForeground": "#8a9a8a",
      "commandCenter.background": "#f5f5f5",
      "commandCenter.border": "#c0d0c0",
      "commandCenter.activeBackground": "#ffffff",
      "menu.background": "#f0f5f0",
      "menu.foreground": "#2d3d2d",
      "menu.border": "#c0d0c0",
      "menu.selectionBackground": "#47967155",
      "menu.selectionForeground": "#347534",
      "menu.separatorBackground": "#b0c0b0",
      "menubar.selectionBackground": "#47967135",
      "menubar.selectionForeground": "#347534",
      "menu.selectionBorder": "#479671",
      "menubar.selectionBorder": "#479671",
      "list.hoverBackground": "#e5f0e5ad",
      "list.hoverForeground": "#2d2d2d",
      "list.dropBackground": "#ffffff",
      "banner.background": "#f5faf5",
      "banner.foreground": "#2d2d2d",
      "banner.iconForeground": "#479671",
      "activityBar.background": "#eaeaea",
      "activityBar.foreground": "#2d2d2d",
      "activityBar.border": "#eaeaea",
      "activityBarTop.inactiveForeground": "#9aaa9a",
      "activityBarBadge.background": "#479671",
      "activityBarBadge.foreground": "#ffffff",
      "activityBar.activeBorder": "#347534",
      "activityBar.activeBackground": "#47967140",
      "activityBar.activeFocusBorder": "#347534",
      "activityBarTop.foreground": "#479671",
      "list.warningForeground": "#F59E0B",
      "list.errorForeground": "#d64545",
      "list.invalidItemForeground": "#d64545",
      "tree.indentGuidesStroke": "#47967150",
      "list.activeSelectionBackground": "#47967140",
      "list.activeSelectionForeground": "#000000",
      "list.inactiveSelectionForeground": "#2d2d2d",
      "list.inactiveSelectionBackground": "#e5e5e5",
      "list.focusBackground": "#d0e0d5",
      "list.focusForeground": "#2d3d2d",
      "list.focusOutline": "#479671",
      "contrastActiveBorder": "#00000000",
      "sideBar.background": "#eaeaea",
      "sideBar.foreground": "#4d5a5d",
      "sideBarSectionHeader.background": "#f5f5f5",
      "sideBarTitle.foreground": "#2d2d2d",
      "sideBarSectionHeader.foreground": "#479671",
      "button.background": "#408164",
      "button.foreground": "#2d3d2d",
      "button.hoverBackground": "#479671",
      "button.secondaryBackground": "#e5e5e5",
      "button.secondaryForeground": "#31875f",
      "button.secondaryHoverBackground": "#d9d9d9",
      "toolbar.hoverBackground": "#f5faf5",
      "editorHoverWidget.border": "#c5d5c5",
      "editorHoverWidget.foreground": "#2d2d2d",
      "editorHoverWidget.background": "#f5faf5",
      "editorHoverWidget.statusBarBackground": "#e5f0e5",
      "gitDecoration.modifiedResourceForeground": "#469b8b",
      "gitDecoration.conflictingResourceForeground": "#00a1fe90",
      "gitDecoration.deletedResourceForeground": "#f07177f5",
      "gitDecoration.ignoredResourceForeground": "#61616190",
      "gitDecoration.untrackedResourceForeground": "#287ce8",
      "gitDecoration.stageModifiedResourceForeground": "#f0ae34",
      "gitDecoration.stageDeletedResourceForeground": "#f0ae34",
      "gitDecoration.submoduleResourceForeground": "#f0ae34",
      "gitDecoration.renamedResourceForeground": "#f0ae34",
      "gitDecoration.addedResourceForeground": "#f0ae34",
      "editorGhostText.foreground": "#717171",
      "editorGutter.deletedBackground": "#d64545",
      "editorGutter.modifiedBackground": "#07daffb7",
      "editor.background": "#f4f4f4",
      "editor.foreground": "#2d2d2d",
      "editor.lineHighlightBackground": "#ffffff70",
      "editor.foldBackground": "#47967110",
      "editor.lineHighlightBorder": "#00000012",
      "editor.selectionBackground": "#47967160",
      "editor.rangeHighlightBackground": "#2d99ff15",
      "editor.linkedEditingBackground": "#47967130",
      "editor.wordHighlightBackground": "#c5952e30",
      "editor.wordHighlightStrongBackground": "#4573ff30",
      "editor.selectionHighlightBackground": "#c5952e25",
      "editorIndentGuide.background1": "#cecece40",
      "editorIndentGuide.activeBackground1": "#0D948850",
      "editorGroupHeader.tabsBackground": "#eaeaea",
      "editorGroupHeader.tabsBorder": "#d0e0d4",
      "editorGroupHeader.border": "#e0f0e0",
      "tab.border": "#d0e0d4",
      "tab.activeBackground": "#ffffff",
      "tab.activeBorderTop": "#479671",
      "tab.activeForeground": "#2d2d2d",
      "tab.activeBorder": "#f5faf5",
      "tab.inactiveBackground": "#eaeaea",
      "tab.inactiveForeground": "#8a9a8a",
      "tab.hoverBackground": "#eff5f0",
      "tab.hoverForeground": "#2d3d2d",
      "tab.hoverBorder": "#d0e0d4",
      "tab.unfocusedActiveForeground": "#6a7a6a",
      "tab.unfocusedInactiveForeground": "#a5b5a5",
      "breadcrumb.background": "#ffffff",
      "breadcrumb.foreground": "#656a65",
      "breadcrumbPicker.background": "#f5faf5",
      "breadcrumb.focusForeground": "#347534",
      "breadcrumb.activeSelectionForeground": "#347534",
      "editorStickyScrollHover.background": "#e5e5e5",
      "scrollbarSlider.background": "#7ab89740",
      "scrollbarSlider.hoverBackground": "#7ab89760",
      "scrollbarSlider.activeBackground": "#7ab89780",
      "scrollbar.shadow": "#ffffff18",
      "minimap.background": "#eaeaea",
      "minimap.errorHighlight": "#d64545",
      "minimap.warningHighlight": "#c5952e",
      "minimap.findMatchHighlight": "#4b8360cc",
      "minimap.selectionHighlight": "#55c55560",
      "minimapSlider.background": "#47967140",
      "minimapSlider.hoverBackground": "#47967150",
      "minimapSlider.activeBackground": "#47967160",
      "editorLineNumber.activeForeground": "#0D9488",
      "editorLineNumber.foreground": "#b3bcbb",
      "editorSuggestWidget.background": "#f0f5f0",
      "editorSuggestWidget.foreground": "#2d3d2d",
      "editorSuggestWidget.border": "#c5d5c5",
      "editorSuggestWidget.highlightForeground": "#347534",
      "editorSuggestWidget.selectedBackground": "#47967150",
      "editorSuggestWidget.selectedForeground": "#2d2d2d",
      "editorSuggestWidget.focusHighlightForeground": "#347534",
      "editorWidget.resizeBorder": "#479671",
      "editorWidget.border": "#c0d0c3",
      "widget.border": "#c0d0c3",
      "widget.shadow": "#a0a0a060",
      "diffEditor.insertedTextBackground": "#55d55525",
      "diffEditor.removedTextBackground": "#d5555520",
      "diffEditor.insertedLineBackground": "#55d55515",
      "diffEditor.removedLineBackground": "#d5555515",
      "diffEditor.diagonalFill": "#00000025",
      "input.background": "#f5f5f5",
      "input.foreground": "#2d2d2d",
      "input.border": "#c5d5c5",
      "input.placeholderForeground": "#8a9a8a",
      "focusBorder": "#479671",
      "editorCursor.foreground": "#656565",
      "disabledForeground": "#656a65",
      "chat.avatarBackground": "#e5e5e5",
      "icon.foreground": "#2d2d2d",
      "chat.avatarForeground": "#2d2d2d",
      "foreground": "#2d2d2d",
      "chat.requestBorder": "#b0c0b5",
      "editorWidget.foreground": "#2d2d2d",
      "peekViewTitleDescription.foreground": "#479671",
      "editorGutter.addedBackground": "#22c55e",
      "inputOption.activeBackground": "#47967160",
      "inputOption.activeForeground": "#2d2d2d",
      "progressBar.background": "#3a9a3a",
      "editorWidget.background": "#f5faf5",
      "quickInputList.focusBackground": "#5fc05c60",
      "list.highlightForeground": "#5fc05c",
      "quickInput.background": "#f5faf5",
      "quickInput.foreground": "#1a1a1a",
      "quickInputList.focusIconForeground": "#2d2d2d",
      "quickInputList.focusForeground": "#1a1a1a",
      "keybindingLabel.foreground": "#000000",
      "keybindingLabel.background": "#eaeaea",
      "keybindingLabel.border": "#cccccc00",
      "keybindingLabel.bottomBorder": "#5fc05c",
      "panel.background": "#eaeaea",
      "panel.border": "#a5a5a570",
      "panelTitle.activeBorder": "#347534",
      "panelTitle.activeForeground": "#2d2d2d",
      "panelTitle.inactiveForeground": "#656a65",
      "panelSection.border": "#c0d0c3",
      "panelSection.dropBackground": "#47967140",
      "panelSectionHeader.background": "#d0e0d4",
      "panelSectionHeader.foreground": "#3a9a3a",
      "terminal.background": "#f5f5f5",
      "terminal.foreground": "#2d3d2d",
      "terminal.ansiBlack": "#2d2d2d",
      "terminal.ansiBlue": "#4a90d9",
      "terminal.ansiBrightBlack": "#5a5a5a",
      "terminal.ansiBrightBlue": "#4dc9ff",
      "terminal.ansiBrightCyan": "#2db5c7",
      "terminal.ansiBrightGreen": "#2eb82e",
      "terminal.ansiBrightMagenta": "#a475ff",
      "terminal.ansiBrightRed": "#d55555",
      "terminal.ansiBrightWhite": "#2d2d2d",
      "terminal.ansiBrightYellow": "#c5952e",
      "terminal.ansiCyan": "#2d99ff",
      "terminal.ansiGreen": "#479671",
      "terminal.ansiMagenta": "#9475ff",
      "terminal.ansiRed": "#d64545",
      "terminal.ansiWhite": "#2d2d2d",
      "terminal.ansiYellow": "#c5952e",
      "terminalCursor.background": "#eaeaea",
      "terminalCursor.foreground": "#479671",
      "terminal.selectionBackground": "#2d66ff80",
      "notifications.background": "#e5e5e5",
      "notifications.foreground": "#2d2d2d",
      "notifications.border": "#c0d0c3",
      "notificationCenter.border": "#c0d0c3",
      "notificationCenterHeader.background": "#d0e0d4",
      "notificationCenterHeader.foreground": "#2eb82e",
      "notificationToast.border": "#c0d0c3",
      "notificationsErrorIcon.foreground": "#d64545",
      "notificationsWarningIcon.foreground": "#c5952e",
      "notificationsInfoIcon.foreground": "#479671",
      "notificationLink.foreground": "#479671",
      "dropdown.background": "#ffffff",
      "dropdown.foreground": "#000000",
      "dropdown.border": "#cccccc",
      "debugToolBar.background": "#ffffff",
      "dropdown.listBackground": "#f4f4f4",
      "debugToolBar.border": "#cccccc",
      "statusBar.background": "#eaeaea",
      "statusBar.foreground": "#616161",
      "statusBar.debuggingBackground": "#ffffff",
      "statusBar.debuggingForeground": "#000000",
      "statusBar.noFolderBackground": "#00000000",
      "statusBarItem.hoverBackground": "#eaeaea",
      "statusBar.noFolderForeground": "#61616f",
      "statusBarItem.hoverForeground": "#000000",
      "statusBarItem.activeBackground": "#f0717880",
      "statusBarItem.remoteBackground": "#4fc68e",
      "statusBarItem.remoteForeground": "#232323",
      "statusBarItem.remoteHoverForeground": "#000000",
      "statusBarItem.prominentBackground": "#ffffff",
      "extensionIcon.verifiedForeground": "#479671",
      "textPreformat.foreground": "#f05800",
      "textLink.foreground": "#038c43",
      "textLink.activeForeground": "#06da62",
      "textBlockQuote.background": "#e5e5e5",
      "textBlockQuote.border": "#c0d0c3",
      "textCodeBlock.background": "#f5faf5",
      "titleBar.border": "#00000000",
      "sideBarSectionHeader.border": "#00000000",
      "sideBar.border": "#c0d0c380",
      "editorOverviewRuler.border": "#c0d0c380",
      "statusBar.border": "#00000000",
      "selection.background": "#d0e5df",
      "editor.findMatchBackground": "#669933cc",
      "editor.findMatchBorder": "#4d7a26",
      "editor.findMatchHighlightBackground": "#85b35fe0",
      "editor.findMatchHighlightBorder": "#629742",
      "editor.findRangeHighlightBackground": "#4d7a2640",
      "editorOverviewRuler.findMatchForeground": "#55c55580",
      "editorOverviewRuler.rangeHighlightForeground": "#65d56580",
      "inputValidation.errorBackground": "#d6454525",
      "inputValidation.errorForeground": "#d64545",
      "inputValidation.errorBorder": "#d64545",
      "inputValidation.warningBackground": "#c5952e25",
      "inputValidation.warningForeground": "#c5952e",
      "inputValidation.warningBorder": "#c5952e",
      "inputValidation.infoBackground": "#2d99ff25",
      "inputValidation.infoForeground": "#2d99ff",
      "inputValidation.infoBorder": "#2d99ff",
      "editorBracketHighlight.foreground1": "#c5952e",
      "editorBracketHighlight.foreground2": "#9475ff",
      "editorBracketHighlight.foreground3": "#4573ff",
      "editorBracketHighlight.foreground4": "#ff6941",
      "editorBracketHighlight.foreground5": "#ff8391",
      "editorBracketHighlight.foreground6": "#4dc8ff",
      "editorBracketMatch.background": "#b5c5d050",
      "editorBracketMatch.border": "#5573a5",
      "editorBracketHighlight.unexpectedBracket.foreground": "#a4685a",
      "editorInlayHint.background": "#e8f0ec50",
      "editorInlayHint.foreground": "#5a7a5a",
      "editorInlayHint.typeForeground": "#1a6e4a",
      "editorInlayHint.typeBackground": "#d0ece050",
      "editorInlayHint.parameterForeground": "#6040a0",
      "editorInlayHint.parameterBackground": "#ebe8f40a",
      "editorStickyScroll.background": "#f5faf5",
      "editorStickyScroll.border": "#c5d5c5",
      "editorStickyScroll.shadow": "#00000090",
      "testing.iconFailed": "#d64545",
      "testing.iconErrored": "#c5952e",
      "testing.iconPassed": "#479671",
      "testing.iconQueued": "#c5952e",
      "testing.iconSkipped": "#656a65",
      "testing.iconUnset": "#8a9a8a",
      "testing.peekBorder": "#479671",
      "testing.peekHeaderBackground": "#f5faf5",
      "testing.message.error.lineBackground": "#d6454530",
      "merge.currentHeaderBackground": "#47967140",
      "merge.currentContentBackground": "#47967120",
      "merge.incomingHeaderBackground": "#4573ff40",
      "merge.incomingContentBackground": "#4573ff20",
      "merge.border": "#479671",
      "merge.commonContentBackground": "#c5952e20",
      "merge.commonHeaderBackground": "#c5952e40",
      "symbolIcon.arrayForeground": "#c5952e",
      "symbolIcon.booleanForeground": "#ff6941",
      "symbolIcon.classForeground": "#479671",
      "symbolIcon.colorForeground": "#9475ff",
      "symbolIcon.constantForeground": "#3a9a3a",
      "symbolIcon.constructorForeground": "#2d99ff",
      "symbolIcon.enumeratorForeground": "#c5952e",
      "symbolIcon.enumeratorMemberForeground": "#3a9a3a",
      "symbolIcon.eventForeground": "#d64545",
      "symbolIcon.fieldForeground": "#4573ff",
      "symbolIcon.fileForeground": "#2d2d2d",
      "symbolIcon.folderForeground": "#c5952e",
      "symbolIcon.functionForeground": "#2d99ff",
      "symbolIcon.interfaceForeground": "#4dc8ff",
      "symbolIcon.keyForeground": "#9475ff",
      "symbolIcon.keywordForeground": "#479671",
      "symbolIcon.methodForeground": "#2d99ff",
      "symbolIcon.moduleForeground": "#c5952e",
      "symbolIcon.namespaceForeground": "#c5952e",
      "symbolIcon.nullForeground": "#d64545",
      "symbolIcon.numberForeground": "#3a9a3a",
      "symbolIcon.objectForeground": "#c5952e",
      "symbolIcon.operatorForeground": "#4dc8ff",
      "symbolIcon.packageForeground": "#c5952e",
      "symbolIcon.propertyForeground": "#4573ff",
      "symbolIcon.referenceForeground": "#ff6941",
      "symbolIcon.snippetForeground": "#3a9a3a",
      "symbolIcon.stringForeground": "#3a9a3a",
      "symbolIcon.structForeground": "#2d99ff",
      "symbolIcon.textForeground": "#2d2d2d",
      "symbolIcon.typeParameterForeground": "#4dc8ff",
      "symbolIcon.unitForeground": "#4dc8ff",
      "symbolIcon.variableForeground": "#4573ff",
      "settings.headerForeground": "#2d2d2d",
      "settings.modifiedItemIndicator": "#479671",
      "settings.dropdownBackground": "#f5faf5",
      "settings.dropdownForeground": "#2d2d2d",
      "settings.dropdownBorder": "#c5d5c5",
      "settings.dropdownListBorder": "#479671",
      "settings.checkboxBackground": "#f5faf5",
      "settings.checkboxForeground": "#479671",
      "settings.checkboxBorder": "#c5d5c5",
      "settings.textInputBackground": "#f5faf5",
      "settings.textInputForeground": "#2d2d2d",
      "settings.textInputBorder": "#c5d5c5",
      "settings.numberInputBackground": "#f5faf5",
      "settings.numberInputForeground": "#2d2d2d",
      "settings.numberInputBorder": "#c5d5c5",
      "problemsErrorIcon.foreground": "#d64545",
      "problemsWarningIcon.foreground": "#c5952e",
      "problemsInfoIcon.foreground": "#2d99ff",
      "charts.foreground": "#2d3d2d",
      "charts.lines": "#c5d5c5",
      "charts.red": "#d52f2f",
      "charts.blue": "#479671",
      "charts.yellow": "#cc9915",
      "charts.green": "#22c55e",
      "charts.orange": "#ff6941",
      "charts.purple": "#9475ff",
      "editorGroup.border": "#c5d5c5",
      "sash.hoverBorder": "#479671",
      "editorGroup.dropBackground": "#47967120",
      "editorGroup.emptyBackground": "#f5f5f5",
      "editorGroup.focusedEmptyBorder": "#479671",
      "editorGroupHeader.noTabsBackground": "#eaeaea",
      "peekView.border": "#479671",
      "peekViewEditor.background": "#f5faf5",
      "peekViewEditor.matchHighlightBackground": "#47967140",
      "peekViewEditor.matchHighlightBorder": "#479671",
      "peekViewEditorGutter.background": "#f5faf5",
      "peekViewResult.background": "#eaeaea",
      "peekViewResult.fileForeground": "#2d2d2d",
      "peekViewResult.lineForeground": "#656a65",
      "peekViewResult.matchHighlightBackground": "#47967140",
      "peekViewResult.selectionBackground": "#c5d5c5",
      "peekViewResult.selectionForeground": "#2d2d2d",
      "peekViewTitle.background": "#f5f5f5",
      "peekViewTitleLabel.foreground": "#2d2d2d",
      "debugIcon.pauseForeground": "#c5952e",
      "debugIcon.stopForeground": "#d64545",
      "debugIcon.restartForeground": "#2d99ff"
    },
    "tokenColors": [
      {
        "name": "Comment — Line",
        "scope": [
          "comment.line",
          "punctuation.definition.comment"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#8c929a"
        }
      },
      {
        "name": "Comment — Block",
        "scope": "comment.block",
        "settings": {
          "fontStyle": "italic",
          "foreground": "#8c929a"
        }
      },
      {
        "name": "Comment — Documentation",
        "scope": [
          "comment.block.documentation",
          "comment.line.documentation"
        ],
        "settings": {
          "fontStyle": "italic bold",
          "foreground": "#7c828a"
        }
      },
      {
        "name": "Astro String Quoted",
        "scope": [
          "string.quoted.astro"
        ],
        "settings": {
          "foreground": "#1d6910"
        }
      },
      {
        "name": "Astro Source",
        "scope": [
          "source.astro"
        ],
        "settings": {
          "foreground": "#2d2d2d"
        }
      },
      {
        "name": "Keywords Control",
        "scope": [
          "keyword.control"
        ],
        "settings": {
          "foreground": "#7C3AED",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keywords Control Flow",
        "scope": [
          "keyword.control.flow",
          "keyword.control.conditional",
          "keyword.control.loop"
        ],
        "settings": {
          "foreground": "#c234ca",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keywords Control New",
        "scope": [
          "keyword.control.new",
          "keyword.operator.new"
        ],
        "settings": {
          "foreground": "#c234ca",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keywords Import/Export",
        "scope": [
          "keyword.control.import",
          "keyword.control.export",
          "keyword.control.from"
        ],
        "settings": {
          "foreground": "#D97706"
        }
      },
      {
        "name": "Keywords Async/Await",
        "scope": [
          "keyword.control.async",
          "keyword.control.await"
        ],
        "settings": {
          "foreground": "#0891B2",
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Keywords Other",
        "scope": [
          "keyword.other"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Storage Type",
        "scope": [
          "storage.type"
        ],
        "settings": {
          "foreground": "#7C3AED",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Storage Type Annotation",
        "scope": [
          "storage.type.annotation"
        ],
        "settings": {
          "foreground": "#0891B2"
        }
      },
      {
        "name": "Storage Type Generic",
        "scope": [
          "storage.type.generic"
        ],
        "settings": {
          "foreground": "#059669"
        }
      },
      {
        "name": "Storage Type Function Arrow",
        "scope": [
          "storage.type.function.arrow"
        ],
        "settings": {
          "foreground": "#1F2937"
        }
      },
      {
        "name": "Storage Modifier",
        "scope": [
          "storage.modifier"
        ],
        "settings": {
          "foreground": "#7C3AED",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Storage Modifier Import",
        "scope": [
          "storage.modifier.import"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Keyword Operator",
        "scope": [
          "keyword.operator"
        ],
        "settings": {
          "foreground": "#374151"
        }
      },
      {
        "name": "Keyword Operator Assignment",
        "scope": [
          "keyword.operator.assignment"
        ],
        "settings": {
          "foreground": "#374151",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keyword Operator Expression",
        "scope": [
          "keyword.operator.expression"
        ],
        "settings": {
          "foreground": "#D97706"
        }
      },
      {
        "name": "Keyword Operator Logical",
        "scope": [
          "keyword.operator.logical"
        ],
        "settings": {
          "foreground": "#7C3AED",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Keyword Operator Comparison",
        "scope": [
          "keyword.operator.comparison"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Keyword Operator Rest/Spread",
        "scope": [
          "keyword.operator.rest",
          "keyword.operator.spread"
        ],
        "settings": {
          "foreground": "#16A249"
        }
      },
      {
        "name": "Keyword Operator Type Annotation",
        "scope": [
          "keyword.operator.type.annotation"
        ],
        "settings": {
          "foreground": "#1F2937"
        }
      },
      {
        "name": "Keyword Operator Ternary",
        "scope": [
          "keyword.operator.ternary"
        ],
        "settings": {
          "foreground": "#D97706"
        }
      },
      {
        "name": "Punctuation General",
        "scope": [
          "punctuation.accessor",
          "punctuation.bracket",
          "punctuation.definition",
          "punctuation.definition.block",
          "punctuation.definition.parameters",
          "punctuation.definition.string",
          "punctuation.section",
          "punctuation.separator",
          "punctuation.separator.dot-access",
          "punctuation.terminator.statement"
        ],
        "settings": {
          "foreground": "#c234ca"
        }
      },
      {
        "name": "Punctuation Definition Annotation",
        "scope": [
          "punctuation.definition.annotation"
        ],
        "settings": {
          "foreground": "#0891B2"
        }
      },
      {
        "name": "Variables General",
        "scope": [
          "variable.other",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#d8b056"
        }
      },
      {
        "name": "Block Level Variables",
        "scope": [
          "meta.block variable.other"
        ],
        "settings": {
          "foreground": "#788494"
        }
      },
      {
        "name": "Variables Constant",
        "scope": [
          "variable.other.constant"
        ],
        "settings": {
          "foreground": "#0891B2",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Variables Read-only",
        "scope": [
          "variable.other.readonly"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Variables Macro Argument",
        "scope": [
          "variable.other.macro.argument"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Variables Parameter",
        "scope": [
          "variable.parameter",
          "variable.parameter.probably"
        ],
        "settings": {
          "foreground": "#04644f",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Variables Language",
        "scope": [
          "variable.language"
        ],
        "settings": {
          "foreground": "#C026D3",
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Variables Destructuring",
        "scope": [
          "meta.object.property",
          "meta.object-binding-pattern-variable"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Function Names",
        "scope": [
          "entity.name.function"
        ],
        "settings": {
          "foreground": "#0cd47a",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Method Names",
        "scope": [
          "entity.name.method"
        ],
        "settings": {
          "foreground": "#2563EB",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Constructor Function",
        "scope": [
          "entity.name.function.constructor"
        ],
        "settings": {
          "foreground": "#D97706",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Meta Function Call",
        "scope": [
          "meta.function-call"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Meta Definition Function",
        "scope": [
          "meta.definition.function"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Meta Definition Method",
        "scope": [
          "meta.definition.method"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Meta Definition Property",
        "scope": [
          "meta.definition.property"
        ],
        "settings": {
          "foreground": "#0F79AF"
        }
      },
      {
        "name": "String Quoted",
        "scope": [
          "string.quoted.single",
          "string.quoted.double"
        ],
        "settings": {
          "foreground": "#1d6910"
        }
      },
      {
        "name": "String Template",
        "scope": [
          "string.template"
        ],
        "settings": {
          "foreground": "#1d6910"
        }
      },
      {
        "name": "Template Literal Expressions",
        "scope": [
          "meta.template.expression"
        ],
        "settings": {
          "foreground": "#D97706"
        }
      },
      {
        "name": "String Regex",
        "scope": [
          "string.regexp"
        ],
        "settings": {
          "foreground": "#0891B2"
        }
      },
      {
        "name": "String Other Link",
        "scope": [
          "string.other.link"
        ],
        "settings": {
          "foreground": "#0891B2"
        }
      },
      {
        "name": "Constant Numeric",
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#04644f",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Constant Language",
        "scope": [
          "constant.language"
        ],
        "settings": {
          "foreground": "#16A249",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Constant Other Variable",
        "scope": [
          "constant.other.variable"
        ],
        "settings": {
          "foreground": "#1d6910"
        }
      },
      {
        "name": "Constant Character Escape",
        "scope": [
          "constant.character.escape"
        ],
        "settings": {
          "foreground": "#0891B2"
        }
      },
      {
        "name": "Entity Name Tag",
        "scope": [
          "entity.name.tag"
        ],
        "settings": {
          "foreground": "#DC2626",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type",
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#D97706",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Class",
        "scope": [
          "entity.name.type.class"
        ],
        "settings": {
          "foreground": "#D97706",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Interface",
        "scope": [
          "entity.name.type.interface"
        ],
        "settings": {
          "foreground": "#0891B2",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Enum",
        "scope": [
          "entity.name.type.enum"
        ],
        "settings": {
          "foreground": "#D97706",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Entity Name Type Module",
        "scope": [
          "entity.name.type.module"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Entity Other",
        "scope": [
          "entity.other"
        ],
        "settings": {
          "foreground": "#D97706"
        }
      },
      {
        "name": "Entity Other Attribute Name",
        "scope": [
          "entity.other.attribute-name"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Entity Scope Name",
        "scope": [
          "entity.scope.name"
        ],
        "settings": {
          "foreground": "#0891B2"
        }
      },
      {
        "name": "Support Type Primitive",
        "scope": [
          "support.type.primitive"
        ],
        "settings": {
          "foreground": "#7C3AED",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Support Type Property Name",
        "scope": [
          "support.type.property-name"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Support Type Builtin",
        "scope": [
          "support.type.builtin"
        ],
        "settings": {
          "foreground": "#7C3AED",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Support Function",
        "scope": [
          "support.function"
        ],
        "settings": {
          "foreground": "#0F79AF"
        }
      },
      {
        "name": "Support Class",
        "scope": [
          "support.class"
        ],
        "settings": {
          "foreground": "#D97706"
        }
      },
      {
        "name": "Meta Brace",
        "scope": [
          "meta.brace"
        ],
        "settings": {
          "foreground": "#1F2937"
        }
      },
      {
        "name": "Meta Definition Variable",
        "scope": [
          "meta.definition.variable"
        ],
        "settings": {
          "foreground": "#0F79AF"
        }
      },
      {
        "name": "Meta Import",
        "scope": [
          "meta.import"
        ],
        "settings": {
          "foreground": "#1F2937"
        }
      },
      {
        "name": "Import Module Path",
        "scope": [
          "meta.import string.quoted",
          "meta.import.from string.quoted",
          "meta.import.js string.quoted",
          "meta.import.ts string.quoted",
          "meta.import.astro string.quoted",
          "meta.import string.quoted.single",
          "meta.import string.quoted.double",
          "meta.import string.quoted.single.astro",
          "meta.import string.quoted.double.astro",
          "meta.import string.quoted.single.js",
          "meta.import string.quoted.double.js",
          "meta.import string.quoted.single.ts",
          "meta.import string.quoted.double.ts"
        ],
        "settings": {
          "foreground": "#c234ca"
        }
      },
      {
        "name": "Meta Object Literal Key",
        "scope": [
          "meta.object-literal.key"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "CSS Selector",
        "scope": [
          "entity.name.tag.css",
          "entity.other.attribute-name.class.css"
        ],
        "settings": {
          "foreground": "#0F79AF"
        }
      },
      {
        "name": "CSS Property Name",
        "scope": [
          "support.type.property-name.css"
        ],
        "settings": {
          "foreground": "#1F2937"
        }
      },
      {
        "name": "CSS Property Value",
        "scope": [
          "support.constant.property-value.css"
        ],
        "settings": {
          "foreground": "#1d6910"
        }
      },
      {
        "name": "CSS ID Selector",
        "scope": [
          "entity.other.attribute-name.id.css"
        ],
        "settings": {
          "foreground": "#EA580C"
        }
      },
      {
        "name": "CSS Pseudo Class",
        "scope": [
          "entity.other.attribute-name.pseudo-class.css"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "JSON Key - Level 0",
        "scope": [
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#EA580C"
        }
      },
      {
        "name": "JSON Key - Level 1",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#C026D3"
        }
      },
      {
        "name": "JSON Key - Level 2",
        "scope": [
          "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#0891B2"
        }
      },
      {
        "name": "JSON String",
        "scope": [
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#1d6910"
        }
      },
      {
        "name": "YAML Key",
        "scope": [
          "entity.name.tag.yaml"
        ],
        "settings": {
          "foreground": "#D97706"
        }
      },
      {
        "name": "Invalid",
        "scope": [
          "invalid"
        ],
        "settings": {
          "foreground": "#EF4444",
          "fontStyle": "bold underline"
        }
      },
      {
        "name": "Invalid Deprecated",
        "scope": [
          "invalid.deprecated"
        ],
        "settings": {
          "foreground": "#DC2626"
        }
      },
      {
        "name": "Markdown Fenced Code Language",
        "scope": [
          "text.html.markdown fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Markdown Bold",
        "scope": [
          "text.html.markdown markup.bold"
        ],
        "settings": {
          "foreground": "#DB2777",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markdown Italic",
        "scope": [
          "text.html.markdown markup.italic"
        ],
        "settings": {
          "foreground": "#DB2777",
          "fontStyle": "italic"
        }
      },
      {
        "name": "Markdown Strikethrough",
        "scope": [
          "text.html.markdown markup.strikethrough"
        ],
        "settings": {
          "foreground": "#DB2777",
          "fontStyle": "strikethrough"
        }
      },
      {
        "name": "Markdown Inline Raw String",
        "scope": [
          "text.html.markdown markup.inline.raw.string"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Markdown Underline Link",
        "scope": [
          "text.html.markdown markup.underline.link"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Markdown Meta Paragraph",
        "scope": [
          "text.html.markdown meta.paragraph"
        ],
        "settings": {
          "foreground": "#1F2937"
        }
      },
      {
        "name": "Markdown Punctuation Definition Heading",
        "scope": [
          "text.html.markdown punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#0891B2",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markdown Heading",
        "scope": [
          "text.html.markdown entity.name.section"
        ],
        "settings": {
          "foreground": "#059669",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Markdown String Other Link Title",
        "scope": [
          "text.html.markdown string.other.link.title"
        ],
        "settings": {
          "foreground": "#1d6910"
        }
      },
      {
        "name": "Markdown Meta Separator",
        "scope": [
          "text.html.markdown meta.separator"
        ],
        "settings": {
          "foreground": "#aaaaaa"
        }
      },
      {
        "name": "JSX Component",
        "scope": [
          "support.class.component.jsx",
          "support.class.component.tsx"
        ],
        "settings": {
          "foreground": "#d8b056",
          "fontStyle": "bold"
        }
      },
      {
        "name": "JSX Attribute",
        "scope": [
          "entity.other.attribute-name.jsx",
          "entity.other.attribute-name.tsx"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "JSX Tag Bracket",
        "scope": [
          "punctuation.definition.tag.jsx",
          "punctuation.definition.tag.tsx"
        ],
        "settings": {
          "foreground": "#1F2937"
        }
      },
      {
        "name": "TypeScript Type",
        "scope": [
          "entity.name.type.ts",
          "entity.name.type.tsx"
        ],
        "settings": {
          "foreground": "#D97706",
          "fontStyle": "bold"
        }
      },
      {
        "name": "TypeScript Interface",
        "scope": [
          "entity.name.type.interface.ts",
          "entity.name.type.interface.tsx"
        ],
        "settings": {
          "foreground": "#0891B2",
          "fontStyle": "bold"
        }
      },
      {
        "name": "TypeScript Type Alias",
        "scope": [
          "entity.name.type.alias.ts",
          "entity.name.type.alias.tsx"
        ],
        "settings": {
          "foreground": "#2563EB",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Decorator Symbol",
        "scope": [
          "punctuation.decorator"
        ],
        "settings": {
          "foreground": "#0891B2",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Decorator Name",
        "scope": [
          "entity.name.function.decorator"
        ],
        "settings": {
          "foreground": "#0891B2",
          "fontStyle": "bold"
        }
      },
      {
        "name": "Python Magic Method",
        "scope": [
          "support.function.magic.python"
        ],
        "settings": {
          "foreground": "#7C3AED",
          "fontStyle": "bold italic"
        }
      },
      {
        "name": "Python Built-in Function",
        "scope": [
          "support.function.builtin.python"
        ],
        "settings": {
          "foreground": "#2563EB"
        }
      },
      {
        "name": "Lambda Arrow",
        "scope": [
          "storage.type.function.lambda"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Generic Type Parameter",
        "scope": [
          "entity.name.type.parameter"
        ],
        "settings": {
          "foreground": "#7C3AED"
        }
      },
      {
        "name": "Module Export Default",
        "scope": [
          "keyword.control.default"
        ],
        "settings": {
          "foreground": "#16A249",
          "fontStyle": "bold"
        }
      }
    ],
    "semanticTokenColors": {
      "namespace": {
        "foreground": "#D97706",
        "fontStyle": "italic"
      },
      "class": {
        "foreground": "#0891B2",
        "fontStyle": "bold"
      },
      "enum": {
        "foreground": "#7C3AED",
        "fontStyle": "bold"
      },
      "interface": {
        "foreground": "#2563EB",
        "fontStyle": "bold italic"
      },
      "struct": {
        "foreground": "#0891B2",
        "fontStyle": "bold"
      },
      "typeParameter": {
        "foreground": "#7C3AED",
        "fontStyle": "italic"
      },
      "type": {
        "foreground": "#0891B2",
        "fontStyle": "bold"
      },
      "parameter": {
        "foreground": "#04644f",
        "fontStyle": "italic"
      },
      "variable": "#0F79AF",
      "variable.readonly": {
        "foreground": "#0F79AF",
        "fontStyle": "italic"
      },
      "variable.defaultLibrary": {
        "foreground": "#16A249",
        "fontStyle": "bold"
      },
      "property": "#0F79AF",
      "property.readonly": {
        "foreground": "#0F79AF",
        "fontStyle": "italic"
      },
      "enumMember": {
        "foreground": "#16A249",
        "fontStyle": "bold"
      },
      "event": {
        "foreground": "#DC2626",
        "fontStyle": "italic"
      },
      "function": {
        "foreground": "#2563EB",
        "fontStyle": "bold"
      },
      "method": {
        "foreground": "#0F79AF",
        "fontStyle": "bold"
      },
      "macro": {
        "foreground": "#7C3AED",
        "fontStyle": "bold italic"
      },
      "decorator": {
        "foreground": "#7C3AED",
        "fontStyle": "bold"
      },
      "label": {
        "foreground": "#D97706"
      }
    }
  },
  {
    "id": "delirium-everforest-dark",
    "label": "Delirium Everforest Dark",
    "name": "DeliriumTheme Everforest-dark",
    "type": "dark",
    "colors": {
      "contrastActiveBorder": "#00000000",
      "contrastBorder": "#00000000",
      "descriptionForeground": "#d2c6ab80",
      "disabledForeground": "#d2c6ab4d",
      "errorForeground": "#e67e80",
      "focusBorder": "#4a4a4d",
      "foreground": "#d2c6ab",
      "icon.foreground": "#d2c6ab4d",
      "selection.background": "#a7c08061",
      "activityBar.activeBackground": "#a7c08026",
      "activityBar.activeBorder": "#a7c080",
      "activityBar.background": "#131313",
      "activityBar.border": "#1f1f21",
      "activityBar.dropBorder": "#fefefe33",
      "activityBar.foreground": "#a7c080",
      "activityBar.inactiveForeground": "#565043",
      "activityBarBadge.background": "#a7c080",
      "activityBarBadge.foreground": "#131313",
      "activityBarTop.activeBorder": "#a7c080",
      "activityBarTop.dropBorder": "#fefefe33",
      "activityBarTop.foreground": "#a7c080",
      "activityBarTop.inactiveForeground": "#494640",
      "badge.background": "#a7c080",
      "badge.foreground": "#131313",
      "breadcrumb.background": "#181819",
      "breadcrumb.foreground": "#d3c6aacc",
      "breadcrumbPicker.background": "#242426",
      "button.background": "#a7c080cc",
      "button.border": "#ffffff26",
      "button.foreground": "#ffffffcc",
      "button.hoverBackground": "#a7c08099",
      "button.secondaryBackground": "#29292b",
      "button.secondaryForeground": "#d2c6abcc",
      "button.secondaryHoverBackground": "#313133",
      "button.separator": "#ffffff4d",
      "charts.blue": "#a7c080",
      "charts.foreground": "#d2c6ab",
      "charts.green": "#83c092",
      "charts.lines": "#d2c6ab",
      "charts.orange": "#d3c6aa",
      "charts.purple": "#dbbc7f",
      "charts.red": "#d699b6",
      "charts.yellow": "#e67e80",
      "checkbox.foreground": "#d2c6ab",
      "commandCenter.activeBackground": "#24242661",
      "commandCenter.activeForeground": "#d2c6ab8f",
      "commandCenter.background": "#181819",
      "commandCenter.border": "#1f1f21",
      "commandCenter.foreground": "#fefefe",
      "debugConsole.errorForeground": "#e67e80",
      "debugConsole.infoForeground": "#a7c080",
      "debugConsole.warningForeground": "#dbbc7f",
      "debugExceptionWidget.background": "#242426",
      "debugExceptionWidget.border": "#1f1f21",
      "debugIcon.breakpointCurrentStackframeForeground": "#e67e80",
      "debugIcon.breakpointDisabledForeground": "#e67e8080",
      "debugIcon.breakpointForeground": "#e67e80",
      "debugIcon.continueForeground": "#a7c080",
      "debugIcon.disconnectForeground": "#e67e80",
      "debugIcon.pauseForeground": "#e67e80",
      "debugIcon.restartForeground": "#83c092",
      "debugIcon.startForeground": "#83c092",
      "debugIcon.stepBackForeground": "#a7c080",
      "debugIcon.stepIntoForeground": "#a7c080",
      "debugIcon.stepOutForeground": "#a7c080",
      "debugIcon.stepOverForeground": "#a7c080",
      "debugIcon.stopForeground": "#e67e80",
      "debugToolBar.background": "#242622",
      "diffEditor.border": "#1f1f21",
      "diffEditor.diagonalFill": "#242426",
      "diffEditor.insertedLineBackground": "#75ce8b1a",
      "diffEditor.insertedTextBackground": "#75ce8b1a",
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.move.border": "#e67e804d",
      "diffEditor.moveActive.border": "#e67e80b3",
      "diffEditor.removedLineBackground": "#f272751a",
      "diffEditor.removedTextBackground": "#f272751a",
      "diffEditor.removedTextBorder": "#00000000",
      "diffEditor.unchangedCodeBackground": "#101010",
      "diffEditor.unchangedRegionBackground": "#101010",
      "diffEditor.unchangedRegionShadow": "#00000066",
      "diffEditorGutter.insertedLineBackground": "#00000000",
      "diffEditorGutter.removedLineBackground": "#00000000",
      "diffEditorOverview.insertedForeground": "#83c09226",
      "diffEditorOverview.removedForeground": "#e67e8030",
      "dropdown.background": "#1e1e20",
      "dropdown.border": "#3f3f3f",
      "dropdown.foreground": "#d2c6ab",
      "dropdown.listBackground": "#1e1e20",
      "editor.background": "#181819",
      "editor.findMatchBackground": "#a7c08030",
      "editor.findMatchBorder": "#a7c08061",
      "editor.findMatchHighlightBackground": "#a7c0803d",
      "editor.findMatchHighlightBorder": "#a7c0805c",
      "editor.foldBackground": "#00000033",
      "editor.foldPlaceholderForeground": "#fefefe",
      "editor.foreground": "#d2c6ab",
      "editor.hoverHighlightBackground": "#a7c0804d",
      "editor.inactiveSelectionBackground": "#a7c0804d",
      "editor.lineHighlightBackground": "#a7c0800f",
      "editor.lineHighlightBorder": "#a7c08008",
      "editor.linkedEditingBackground": "#abd36d33",
      "editor.rangeHighlightBackground": "#a7c0803d",
      "editor.selectionBackground": "#a7c0804d",
      "editor.selectionForeground": "#d2c6ab",
      "editor.selectionHighlightBackground": "#a7c08014",
      "editor.selectionHighlightBorder": "#a7c0804d",
      "editor.wordHighlightBackground": "#a7c08073",
      "editor.wordHighlightBorder": "#a7c0808a",
      "editor.wordHighlightStrongBackground": "#a7c0804d",
      "editorBracketHighlight.foreground1": "#e67e80",
      "editorBracketHighlight.foreground2": "#dbbc7f",
      "editorBracketHighlight.foreground3": "#a7c080",
      "editorBracketHighlight.foreground4": "#83c092",
      "editorBracketHighlight.foreground5": "#e69875",
      "editorBracketHighlight.foreground6": "#d3c6aa",
      "editorBracketHighlight.unexpectedBracket.foreground": "#e67e80",
      "editorBracketMatch.background": "#a7c0804d",
      "editorBracketMatch.border": "#a7c08073",
      "editorCodeLens.foreground": "#d2c6ab80",
      "editorCursor.background": "#232b16",
      "editorCursor.foreground": "#a7c080",
      "editorError.border": "#00000000",
      "editorError.foreground": "#e67e80",
      "editorGhostText.border": "#00000000",
      "editorGhostText.foreground": "#d2c6ab70",
      "editorGroup.border": "#1f1f21",
      "editorGroup.dropBackground": "#a7c08014",
      "editorGroupHeader.border": "#00000000",
      "editorGroupHeader.noTabsBackground": "#181819",
      "editorGroupHeader.tabsBackground": "#131313",
      "editorGroupHeader.tabsBorder": "#1f1f21",
      "editorGutter.addedBackground": "#83c092cc",
      "editorGutter.background": "#181819",
      "editorGutter.commentRangeForeground": "#242426",
      "editorGutter.deletedBackground": "#e67e80cc",
      "editorGutter.modifiedBackground": "#a7c080cc",
      "editorHoverWidget.background": "#242426",
      "editorHoverWidget.border": "#1f1f21",
      "editorIndentGuide.activeBackground1": "#d3c6aa33",
      "editorIndentGuide.background1": "#d3c6aa0d",
      "editorInfo.border": "#00000000",
      "editorInlayHint.background": "#d2c6ab1a",
      "editorInlayHint.foreground": "#d2c6abb3",
      "editorInlayHint.parameterBackground": "#d2c6ab1a",
      "editorInlayHint.parameterForeground": "#d3c6aab3",
      "editorInlayHint.typeBackground": "#d3c6aa1a",
      "editorInlayHint.typeForeground": "#d3c6aab3",
      "editorLineNumber.activeForeground": "#d3c6aa",
      "editorLineNumber.foreground": "#443f36",
      "editorLink.activeForeground": "#d2c6ab",
      "editorMarkerNavigation.background": "#131313",
      "editorMarkerNavigationError.background": "#e67e808f",
      "editorMarkerNavigationInfo.background": "#a7c0808f",
      "editorMarkerNavigationWarning.background": "#dbbc7f8f",
      "editorOverviewRuler.addedForeground": "#83c09280",
      "editorOverviewRuler.border": "#1f1f21",
      "editorOverviewRuler.deletedForeground": "#e67e8080",
      "editorOverviewRuler.errorForeground": "#e67e80",
      "editorOverviewRuler.incomingContentForeground": "#83c09280",
      "editorOverviewRuler.infoForeground": "#a7c08080",
      "editorOverviewRuler.modifiedForeground": "#a7c08080",
      "editorOverviewRuler.selectionHighlightForeground": "#a7c08080",
      "editorOverviewRuler.warningForeground": "#dbbc7f",
      "editorRuler.foreground": "#d3c6aa0d",
      "editorStickyScroll.shadow": "#00000066",
      "editorStickyScrollHover.background": "#1f1f21",
      "editorSuggestWidget.background": "#1d1d1e",
      "editorSuggestWidget.border": "#1f1f21",
      "editorSuggestWidget.foreground": "#d3c6aa",
      "editorSuggestWidget.highlightForeground": "#a7c080",
      "editorSuggestWidget.selectedBackground": "#313133",
      "editorSuggestWidget.selectedIconForeground": "#d2c6ab",
      "editorUnnecessaryCode.border": "#00000000",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.border": "#00000000",
      "editorWarning.foreground": "#dbbc7f",
      "editorWhitespace.foreground": "#fefefe60",
      "editorWidget.background": "#242426",
      "editorWidget.border": "#313133",
      "editorWidget.resizeBorder": "#a7c08050",
      "errorLens.errorForeground": "#e67e80fc",
      "errorLens.hintForeground": "#a7c080fc",
      "errorLens.infoForeground": "#a7c080fc",
      "errorLens.warningForeground": "#dbbc7ffc",
      "extensionButton.background": "#a7c08080",
      "extensionButton.foreground": "#dbe5cb",
      "extensionButton.hoverBackground": "#a7c08099",
      "extensionButton.prominentBackground": "#a7c0809d",
      "extensionButton.prominentHoverBackground": "#a7c080",
      "gitDecoration.conflictingResourceForeground": "#a7c080",
      "gitDecoration.deletedResourceForeground": "#e67e80",
      "gitDecoration.ignoredResourceForeground": "#fefefe4d",
      "gitDecoration.modifiedResourceForeground": "#a7c080",
      "gitDecoration.untrackedResourceForeground": "#83c092",
      "multiDiffEditor.border": "#1f1f21",
      "multiDiffEditor.headerBackground": "#242426",
      "scmGraph.foreground1": "#a7c080",
      "scmGraph.foreground2": "#dbbc7f",
      "scmGraph.foreground3": "#7fbbb3",
      "scmGraph.foreground4": "#e69875",
      "scmGraph.foreground5": "#d3c6aa",
      "scmGraph.historyItemBaseRefColor": "#83c092",
      "scmGraph.historyItemHoverAdditionsForeground": "#83c092",
      "scmGraph.historyItemHoverDefaultLabelBackground": "#d2c6ab",
      "scmGraph.historyItemHoverDefaultLabelForeground": "#989898",
      "scmGraph.historyItemHoverDeletionsForeground": "#e67e80",
      "scmGraph.historyItemHoverLabelForeground": "#989898",
      "scmGraph.historyItemRefColor": "#e67e80",
      "scmGraph.historyItemRemoteRefColor": "#a7c080",
      "inlineChat.background": "#242426",
      "inlineChat.border": "#313133",
      "inlineChatInput.background": "#1d1d1e",
      "inlineChatInput.border": "#313133",
      "inlineChatInput.focusBorder": "#4a4a4d",
      "inlineEdit.gutterIndicator.background": "#d2c6ab80",
      "inlineEdit.gutterIndicator.primaryBackground": "#d5292db3",
      "inlineEdit.gutterIndicator.primaryBorder": "#d5292d",
      "inlineEdit.gutterIndicator.primaryForeground": "#000000",
      "inlineEdit.gutterIndicator.secondaryBackground": "#759248b3",
      "inlineEdit.gutterIndicator.secondaryBorder": "#759248",
      "inlineEdit.gutterIndicator.secondaryForeground": "#000000",
      "inlineEdit.gutterIndicator.successfulBackground": "#4a935cb3",
      "inlineEdit.gutterIndicator.successfulBorder": "#4a935c",
      "inlineEdit.gutterIndicator.successfulForeground": "#000000",
      "inlineEdit.modifiedBackground": "#83c09226",
      "inlineEdit.modifiedBorder": "#83c092cc",
      "inlineEdit.modifiedChangedLineBackground": "#83c09214",
      "inlineEdit.modifiedChangedTextBackground": "#00000000",
      "inlineEdit.originalBackground": "#d699b626",
      "inlineEdit.originalBorder": "#d699b6cc",
      "inlineEdit.originalChangedLineBackground": "#d699b6cc",
      "inlineEdit.originalChangedTextBackground": "#00000000",
      "inlineEdit.tabWillAcceptModifiedBorder": "#83c092",
      "inlineEdit.tabWillAcceptOriginalBorder": "#d699b6",
      "input.background": "#1e1e20",
      "input.border": "#3f3f3f",
      "input.foreground": "#d2c6ab",
      "input.placeholderForeground": "#656565",
      "inputOption.activeBackground": "#636367",
      "inputOption.activeBorder": "#00000000",
      "inputOption.activeForeground": "#d2c6ab",
      "inputOption.hoverBackground": "#313133",
      "inputValidation.errorBackground": "#242426",
      "inputValidation.errorBorder": "#e67e80",
      "inputValidation.infoBackground": "#242426",
      "inputValidation.infoBorder": "#a7c080",
      "inputValidation.warningBackground": "#242426",
      "inputValidation.warningBorder": "#dbbc7f",
      "keybindingLabel.background": "#242426",
      "keybindingLabel.border": "#585858",
      "keybindingLabel.bottomBorder": "#585858",
      "keybindingLabel.foreground": "#8b8b8b",
      "list.activeSelectionBackground": "#a7c08033",
      "list.activeSelectionForeground": "#d2c6ab",
      "list.dropBackground": "#a7c08015",
      "list.errorForeground": "#e67e80",
      "list.focusBackground": "#a7c08040",
      "list.focusForeground": "#d2c6ab",
      "list.focusAndSelectionOutline": "#a7c080e6",
      "list.focusOutline": "#a7c080e6",
      "list.highlightForeground": "#a7c080",
      "list.hoverBackground": "#3d3d404d",
      "list.hoverForeground": "#f1f1f1",
      "list.inactiveSelectionBackground": "#bfd1a20d",
      "list.inactiveSelectionForeground": "#d2c6ab",
      "list.warningForeground": "#dbbc7f",
      "menu.background": "#242426",
      "menu.border": "#1f1f21",
      "menu.foreground": "#d3c6aa",
      "menu.selectionBackground": "#29292b",
      "menu.selectionForeground": "#e4ddcc",
      "menu.separatorBackground": "#1f1f2180",
      "menubar.selectionBackground": "#29292b",
      "menubar.selectionForeground": "#d3c6aa",
      "merge.border": "#1f1f21",
      "merge.commonContentBackground": "#e67e8030",
      "merge.commonHeaderBackground": "#e67e8080",
      "merge.currentContentBackground": "#83c09230",
      "merge.currentHeaderBackground": "#83c09280",
      "merge.incomingContentBackground": "#a7c08030",
      "merge.incomingHeaderBackground": "#a7c08080",
      "minimap.background": "#181819",
      "minimap.errorHighlight": "#e67e80",
      "minimap.findMatchHighlight": "#a7c080",
      "minimap.selectionHighlight": "#a7c080",
      "minimap.selectionOccurrenceHighlight": "#a7c080",
      "minimap.warningHighlight": "#dbbc7f",
      "minimapGutter.addedBackground": "#83c092",
      "minimapGutter.deletedBackground": "#e67e80",
      "minimapGutter.modifiedBackground": "#a7c080",
      "notificationCenterHeader.background": "#242426",
      "notificationCenterHeader.foreground": "#d2c6ab",
      "notificationLink.foreground": "#a7c080",
      "notifications.background": "#242426",
      "notifications.border": "#1f1f21",
      "notifications.foreground": "#d2c6ab",
      "notificationsErrorIcon.foreground": "#d699b6",
      "notificationsInfoIcon.foreground": "#a7c080",
      "notificationsWarningIcon.foreground": "#d3c6aa",
      "panel.background": "#161616",
      "panel.border": "#1f1f21",
      "panel.dropBorder": "#fefefe80",
      "panelInput.border": "#313133",
      "panelSection.border": "#1f1f21",
      "panelSectionHeader.background": "#1e1e1e",
      "panelSectionHeader.border": "#1f1f21",
      "panelSectionHeader.foreground": "#d2c6ab",
      "panelTitle.activeBorder": "#a7c080",
      "panelTitle.activeForeground": "#d3c6aa",
      "panelTitle.inactiveForeground": "#948c79",
      "peekView.border": "#1f1f21",
      "peekViewEditor.background": "#222223",
      "peekViewEditor.matchHighlightBackground": "#24242640",
      "peekViewEditor.matchHighlightBorder": "#00000000",
      "peekViewEditorGutter.background": "#222223",
      "peekViewEditorStickyScroll.background": "#1f1f21",
      "peekViewResult.background": "#1e1e20",
      "peekViewResult.fileForeground": "#d2c6ab",
      "peekViewResult.lineForeground": "#d2c6ab",
      "peekViewResult.matchHighlightBackground": "#a7c08080",
      "peekViewResult.selectionBackground": "#a7c08033",
      "peekViewResult.selectionForeground": "#d2c6ab",
      "peekViewTitle.background": "#242426",
      "peekViewTitleDescription.foreground": "#d2c6ab",
      "peekViewTitleLabel.foreground": "#d2c6ab",
      "pickerGroup.border": "#1f1f21",
      "pickerGroup.foreground": "#d2c6ab",
      "profileBadge.background": "#a7c080",
      "profileBadge.foreground": "#181819",
      "progressBar.background": "#a7c080",
      "quickInput.background": "#1f1f21",
      "quickInput.foreground": "#d2c6abb3",
      "quickInputList.focusBackground": "#a7c0801a",
      "quickInputList.focusForeground": "#ffffff",
      "quickInputList.focusIconForeground": "#d2c6ab",
      "quickInputTitle.background": "#131313",
      "sash.hoverBorder": "#a7c08050",
      "scrollbar.shadow": "#00000066",
      "scrollbarSlider.activeBackground": "#d2c6ab4d",
      "scrollbarSlider.background": "#d2c6ab26",
      "scrollbarSlider.hoverBackground": "#d2c6ab33",
      "settings.headerForeground": "#d2c6ab",
      "settings.modifiedItemIndicator": "#a7c080",
      "settings.settingsHeaderHoverForeground": "#d2c6ab",
      "sideBar.background": "#131313",
      "sideBar.border": "#1f1f21",
      "sideBar.foreground": "#d3c6aacc",
      "sideBarSectionHeader.background": "#131313",
      "sideBarSectionHeader.border": "#1f1f21",
      "sideBarSectionHeader.foreground": "#d2c6ab",
      "sideBarStickyScroll.background": "#0e0e0e",
      "sideBarStickyScroll.shadow": "#00000066",
      "sideBarTitle.foreground": "#fefefe",
      "statusBar.background": "#181819",
      "statusBar.border": "#1f1f21",
      "statusBar.debuggingBackground": "#31352c",
      "statusBar.debuggingForeground": "#adb183",
      "statusBar.foreground": "#d2c6ab80",
      "statusBar.noFolderBackground": "#131313",
      "statusBar.noFolderBorder": "#1f1f21",
      "statusBar.noFolderForeground": "#d2c6abcc",
      "statusBarItem.activeBackground": "#242426",
      "statusBarItem.compactHoverBackground": "#a7c080cc",
      "statusBarItem.hoverBackground": "#3f4535",
      "statusBarItem.hoverForeground": "#d2c6ab",
      "statusBarItem.prominentBackground": "#181819",
      "statusBarItem.prominentForeground": "#000000",
      "statusBarItem.prominentHoverBackground": "#313133",
      "statusBarItem.prominentHoverForeground": "#181819",
      "statusBarItem.errorBackground": "#e67e80",
      "statusBarItem.errorForeground": "#551012",
      "statusBarItem.errorHoverBackground": "#eea9aa",
      "statusBarItem.errorHoverForeground": "#181819",
      "statusBarItem.offlineBackground": "#dbbc7f",
      "statusBarItem.offlineForeground": "#473614",
      "statusBarItem.offlineHoverBackground": "#e6d1a7",
      "statusBarItem.offlineHoverForeground": "#181819",
      "statusBarItem.remoteBackground": "#e69875",
      "statusBarItem.remoteForeground": "#4e220e",
      "statusBarItem.remoteHoverBackground": "#eeb8a0",
      "statusBarItem.remoteHoverForeground": "#181819",
      "statusBarItem.warningBackground": "#dbbc7f",
      "statusBarItem.warningForeground": "#473614",
      "statusBarItem.warningHoverBackground": "#e6d1a7",
      "statusBarItem.warningHoverForeground": "#181819",
      "tab.activeBackground": "#181819",
      "tab.activeBorder": "#181819",
      "tab.hoverForeground": "#d3c6aa",
      "tab.activeBorderTop": "#a7c080",
      "tab.activeForeground": "#d2c6ab",
      "tab.border": "#1f1f21",
      "tab.hoverBackground": "#272729",
      "tab.inactiveBackground": "#131313",
      "tab.inactiveForeground": "#958c7a",
      "tab.lastPinnedBorder": "#1f1f21",
      "terminal.ansiBlack": "#181819",
      "terminal.ansiBlue": "#a7c080",
      "terminal.ansiBrightBlack": "#494949",
      "terminal.ansiBrightBlue": "#addd64",
      "terminal.ansiBrightCyan": "#fe8f5d",
      "terminal.ansiBrightGreen": "#67dc84",
      "terminal.ansiBrightMagenta": "#f4c466",
      "terminal.ansiBrightRed": "#fd676a",
      "terminal.ansiBrightWhite": "#f6f3ed",
      "terminal.ansiBrightYellow": "#fd676a",
      "terminal.ansiCyan": "#e69875",
      "terminal.ansiGreen": "#83c092",
      "terminal.ansiMagenta": "#dbbc7f",
      "terminal.ansiRed": "#e67e80",
      "terminal.ansiWhite": "#d2c6ab",
      "terminal.ansiYellow": "#e67e80",
      "terminal.background": "#161616",
      "terminal.foreground": "#d2c6ab",
      "terminal.selectionForeground": "#d2c6ab",
      "terminalCursor.background": "#181819",
      "terminalCursor.foreground": "#a7c080",
      "terminalStickyScrollHover.background": "#1f1f21",
      "textBlockQuote.background": "#a7c08033",
      "textBlockQuote.border": "#a7c080b9",
      "textCodeBlock.background": "#a7c08033",
      "textLink.activeForeground": "#a7c080",
      "textLink.foreground": "#a7c080",
      "textPreformat.background": "#31352c",
      "textPreformat.foreground": "#a7c080",
      "textSeparator.foreground": "#a7c080",
      "titleBar.activeBackground": "#131313",
      "titleBar.activeForeground": "#d2c6ab66",
      "titleBar.border": "#1f1f21",
      "titleBar.inactiveBackground": "#131313",
      "titleBar.inactiveForeground": "#d2c6ab66",
      "toolbar.activeBackground": "#fefefe80",
      "toolbar.hoverBackground": "#232323",
      "tree.indentGuidesStroke": "#d3c6aa33",
      "walkThrough.embeddedEditorBackground": "#181819",
      "welcomePage.progress.background": "#242426",
      "welcomePage.progress.foreground": "#a7c080",
      "welcomePage.tileBackground": "#d2c6ab1a",
      "welcomePage.tileBorder": "#d2c6ab33",
      "welcomePage.tileHoverBackground": "#d2c6ab33",
      "widget.shadow": "#00000033",
      "widget.border": "#3f3f3f"
    },
    "tokenColors": [
      {
        "scope": [
          "support.module.elm",
          "entity.other.inherited-class.python",
          "variable.other.object",
          "support.other.namespace.php",
          "entity.other.attribute-name.namespace.xml",
          "record.accessor",
          "entity.name.record.field.accessor",
          "storage.modifier.import.java",
          "storage.modifier.import.groovy",
          "meta.import.swift entity.name.type.swift",
          "meta.member.access.python",
          "variable.other.property.ts",
          "variable.other.property.js",
          "constant.language.symbol.elixir",
          "punctuation.tag.liquid support.class.liquid",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
          "source.cpp meta.block.class.cpp meta.body.class.cpp",
          "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.quoted.docstring.multi",
          "comment.block.documentation source"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#d3c6aa66"
        }
      },
      {
        "scope": [
          "meta.section.struct.go variable.other.field.go",
          "meta.section.struct.go variable.other.declaration.go",
          "source",
          "support",
          "constant.character.entity.named",
          "meta.jsx.children",
          "source.lua",
          "text.html.derivative",
          "source.graphql meta.selections variable.other.alias.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
          "source.graphql variable.arguments.graphql",
          "JSXNested"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "constant",
          "support.constant.core.php"
        ],
        "settings": {
          "foreground": "#d699b6"
        }
      },
      {
        "scope": [
          "entity.name.function.decorator",
          "meta.decorator entity.name.function",
          "meta.decorator punctuation.decorator",
          "punctuation.definition.decorator",
          "meta.decorator variable.other.readwrite.ts",
          "variable.parameter.gdscript",
          "entity.name.variable.parameter",
          "variable.parameter"
        ],
        "settings": {
          "foreground": "#dbbc7f"
        }
      },
      {
        "scope": [
          "keyword.control.export",
          "support.type.object.module",
          "support.module",
          "support.node",
          "support.other.module",
          "entity.name.type.module",
          "entity.name.type.class.module",
          "keyword.control.module"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "meta.definition.method",
          "meta.function-call",
          "meta.function",
          "meta.method.declaration",
          "meta.function-call support",
          "variable.language.super.ts",
          "source.directive",
          "meta.function-call.generic",
          "meta.method-call.static.php",
          "meta.method-call.php",
          "meta.class storage.type",
          "meta.method.groovy",
          "meta.bracket.square.access",
          "entity.name.function-call.elixir",
          "punctuation.output.liquid support.variable.liquid",
          "meta.function.echo.edge source.js keyword.operator.error-control.js",
          "entity.name.type.variant.gdscript",
          "entity.name.function.powershell",
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "keyword.control.import",
          "meta.module.name.elm support",
          "meta.import.elm support",
          "keyword.control.at-rule",
          "punctuation.definition.keyword",
          "variable.control.import.include",
          "keyword.other.import.java"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.operator.pointer.go",
          "keyword.control",
          "keyword.control.conditional",
          "storage.modifier",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.begin.blade",
          "keyword.end.blade",
          "keyword.blade",
          "keyword.type-alias",
          "keyword.type",
          "support.class.console",
          "keyword.other.await",
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
          "keyword.other.new",
          "keyword.other.phpdoc",
          "keyword.other.use.php",
          "keyword.operator.logical.python",
          "keyword.other.import.static.groovy",
          "keyword.other.import.groovy",
          "punctuation.definition.attribute.swift",
          "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
          "meta.directive.on.svelte entity.name.type.svelte",
          "keyword.other.special-method.elixir",
          "keyword.edge",
          "entity.name.function.edge",
          "support.constant.edge",
          "keyword.other.gdscript",
          "keyword.other.onready.gdscript",
          "source.graphql meta.fragment.graphql keyword.on.graphql",
          "source.graphql meta.type.interface.graphql keyword.implements.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
          "keyword.operator.class.php",
          "keyword.operator.spread.php",
          "keyword.operator.type.php",
          "keyword.operator.increment-decrement.php",
          "keyword.operator.increment-increment.php",
          "keyword.operator.string.php",
          "keyword.operator.ternary.php",
          "keyword.operator.variadic.php",
          "keyword.operator.nullable-type.php",
          "keyword.other.use-as.php",
          "keyword.import.go",
          "keyword.operator.address.go",
          "keyword.operator.null-coalescing",
          "keyword.operator.arrow",
          "keyword.struct.go",
          "keyword.operator.liquid",
          "keyword.operator.optional.ts",
          "keyword.cmake",
          "keyword.codetag.notation",
          "keyword.operator.pipe.shell"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "meta.object-literal.key",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "keyword.other.definition.ini",
          "support.type.property-name",
          "entity.name.tag.yaml",
          "storage.type.function.arrow.tsx"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "keyword.operator",
          "keyword.operator.comparison",
          "keyword.operator.lua",
          "keyword.operator.assignment",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.math"
        ],
        "settings": {
          "foreground": "#e69875"
        }
      },
      {
        "scope": [
          "keyword.operator.type.annotation.tsx",
          "punctuation",
          "attribute_value",
          "meta.brace",
          "punctuation.definition.parameters",
          "punctuation.definition.template-expression",
          "keyword.other",
          "punctuation.separator",
          "punctuation.definition.generic.begin",
          "punctuation.definition.generic.end",
          "meta.function.type-declaration",
          "keyword.other.colon.elm",
          "meta.record.field.elm keyword.other.elm",
          "keyword.other.period.elm",
          "meta.tag.xml",
          "meta.tag.preprocessor.xml",
          "punctuation.definition.block",
          "punctuation.accessor",
          "constant.name.attribute.tag.pug",
          "string.interpolated.pug",
          "keyword.other.whitespace.liquid",
          "meta.tag.template.block.twig",
          "meta.tag.template.value.twig",
          "begin.bracket",
          "end.bracket",
          "text.html.twig meta.tag.inline.any",
          "text.html.twig meta.tag.block.any",
          "support.function.construct.begin.blade",
          "support.function.construct.end.blade source.php",
          "support.function.construct.end.blade",
          "meta.function.echo.blade source.php",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "text.html.vue-html meta.tag.block.any",
          "keyword.operator.assignment.tsx",
          "meta.definition.method.signature.java",
          "meta.class.body.groovy",
          "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
          "punctuation.definition.list.begin.erlang",
          "meta.expression.parenthesized",
          "meta.definition.function.swift meta.parameter-clause.swift",
          "source.swift meta.function-call.swift",
          "punctuation.section.embedded.end.swift source.swift",
          "source.lua",
          "meta.function.lua",
          "punctuation.definition.keyword.svelte",
          "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
          "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
          "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
          "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
          "punctuation.output.liquid",
          "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
          "JSXAttrs keyword.operator.assignment.jsx",
          "meta.tag.attributes.js keyword.operator.assignment.js"
        ],
        "settings": {
          "foreground": "#d3c6aa66"
        }
      },
      {
        "scope": [
          "entity.name.package.go",
          "variable.language.this",
          "variable.language.special.self",
          "variable.parameter.function.language.special.self",
          "variable.language.this.php punctuation.definition.variable.php",
          "meta.class.body.php storage.type.php",
          "variable.parameter.function.swift entity.name.function.swift",
          "variable.other.jsdoc",
          "support.variable.drive.powershell",
          "entity.other.attribute.lua"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "storage",
          "meta.var.expr storage.type",
          "storage.type.function",
          "keyword.function",
          "storage.type.class",
          "storage.type.property",
          "keyword.other",
          "keyword.local.lua",
          "entity.name.class",
          "meta.function.lua keyword.control.lua",
          "storage.type.enum",
          "storage.type.type",
          "entity.name.type.class.java",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.name.type.class.groovy",
          "storage.type.rust",
          "entity.name.type.class.swift",
          "source.svelte meta.script.svelte source.ts entity.name.label.ts",
          "meta.directive.on.svelte keyword.control.svelte",
          "storage.type.const.gdscript",
          "storage.type.var.gdscript",
          "source.graphql declaration.meta.type keyword",
          "source.graphql meta.type.interface.graphql keyword.type.graphql",
          "source.graphql keyword.schema.graphql",
          "source.graphql keyword.operation.graphql",
          "source.graphql meta.enum.graphql keyword.enum.graphql",
          "source.graphql meta.fragment.graphql keyword.fragment.graphql",
          "storage.type.trait.php",
          "keyword.type.go",
          "keyword.var.go",
          "storage.type.powershell",
          "keyword.const.go",
          "keyword.storage.modifier"
        ],
        "settings": {
          "foreground": "#e69875"
        }
      },
      {
        "scope": [
          "storage.type.interface",
          "keyword.control.export.tsx"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "string",
          "string.template",
          "string.quoted.single",
          "punctuation.quasi.element",
          "string.other.link",
          "constant.character.escape.regexp",
          "variable.parameter.url",
          "constant.other.symbol.quoted.single.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
          "meta.import.ts punctuation.definition.variable.svelte",
          "punctuation.definition.string.end.html source.css-ignored-vscode",
          "text.html.edge punctuation.definition.variable.js",
          "string.unquoted.plain.out.yaml",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "punctuation.definition.string.end.html source.css",
          "string.quoted.double.html source.css",
          "punctuation.definition.subshell.single.shell",
          "punctuation.section.parenthese.shell"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "string.quoted.docstring.multi.python",
          "string.quoted.double.block.python punctuation.definition.string.end.python",
          "string.quoted.double.block.python punctuation.definition.string.begin.python",
          "string.quoted.double.block.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python"
        ],
        "settings": {
          "foreground": "#89b1accc"
        }
      },
      {
        "scope": [
          "entity.name.type.interface",
          "storage.type",
          "entity.other.inherited-class",
          "keyword.type",
          "storage.type.java",
          "storage.type.primitive.java",
          "storage.type.generic.java",
          "keyword.other.type",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php source.php",
          "punctuation.section.embedded.end.php",
          "storage.type.object.array.java",
          "storage.type.primitive.groovy",
          "storage.type.groovy",
          "meta.definition.type.body.swift meta.function-call.swift",
          "meta.definition.type.class.swift meta.inheritance-clause.swift",
          "variable.other.constant.elixir",
          "source.graphql declaration.meta.type support",
          "source.graphql meta.selections",
          "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
          "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
          "entity.name.type.class.php",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.other.alias.php",
          "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "punctuation.terminator",
          "support.variable",
          "meta.definition.variable",
          "variable",
          "variable.language",
          "entity.name.type.class.js",
          "entity.name.variable",
          "support.variable.magic",
          "meta.method.body",
          "entity.name.variable",
          "punctuation.definition.variable",
          "meta.class variable.object.property",
          "variable.other.constant entity.name.function",
          "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
          "meta.definition.variable.name.groovy",
          "meta.body.struct.cpp",
          "parameter.variable.function.elixir",
          "meta.directive.edge source.js",
          "meta.function.echo.edge source.js",
          "text.html.edge meta.function.echo.edge meta.function-call.js",
          "source.css variable.parameter.keyframe-list.css",
          "source.css meta.property-value.css",
          "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
          "source.css.scss meta.property-value.scss",
          "entity.name.variable.tuple-element",
          "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
          "support.variable.automatic.powershell",
          "storage.source.cmake",
          "entity.source.cmake"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "source.elm constant.type-constructor",
          "support.class"
        ],
        "settings": {
          "foreground": "#dbbc7f"
        }
      },
      {
        "scope": [
          "source.elm storage.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.other.html",
          "support.class.component.tsx",
          "support.class.component.html"
        ],
        "settings": {
          "foreground": "#e69875"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.to-file",
          "source.diff markup.inserted.diff",
          "source.diff punctuation.definition.to-file.diff",
          "source.diff punctuation.definition.inserted.diff"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.from-file.diff",
          "source.diff meta.diff.header.from-file",
          "source.diff markup.deleted.diff",
          "source.diff punctuation.definition.deleted.diff"
        ],
        "settings": {
          "foreground": "#d699b6"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.command"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.range.diff",
          "source.diff meta.diff.range.unified"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "support.variable.liquid",
          "support.class.liquid"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "text.html.basic entity.name",
          "source.js-ignored-vscode",
          "meta.embedded.block.blade constant.other.php",
          "meta.embedded.block.blade keyword.operator.comparison.php",
          "meta.embedded.block.blade keyword.operator.arithmetic.php",
          "meta.tag.start.svelte keyword.control.svelte",
          "meta.tag.end.svelte keyword.control.svelte"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "meta.tag.sgml.doctype.html",
          "punctuation.definition.tag",
          "meta.tag.block.any",
          "meta.tag.block.any.html",
          "meta.tag.inline.any",
          "source.css-ignored-vscode",
          "meta.tag.metadata.style.end.html",
          "text.html.vue invalid.illegal.character-not-allowed-here.html",
          "meta.tag.inline.i.start.html",
          "meta.tag.structure.div.start.html",
          "punctuation.definition.tag.end.html.vue",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": "#a7c080b3"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "entity.name.tag.liquid",
          "invalid.deprecated.entity.other.attribute-name",
          "meta.embedded.block.blade storage.type.php"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.raw.markdown",
          "markup.fenced_code.block.markdown",
          "markup.fenced_code.block.markdown punctuation",
          "markup.raw.block.markdown"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "entity.name.section",
          "markup.heading.setext"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "markup.underline.link",
          "markup.underline.link.image"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "markup.bold",
          "punctuation.definition.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "markup.strikethrough",
          "punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#d699b6"
        }
      },
      {
        "scope": [
          "markup.italic",
          "punctuation.definition.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "markup.quote",
          "markup.quote.markdown punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#dbbc7f"
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      },
      {
        "scope": [
          "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
          "meta.embedded.block.frontmatter punctuation.definition.tag.end",
          "meta.embedded.block.frontmatter string.unquoted.plain.out"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#fefefe"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#dbbc7f"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": "#dbbc7f"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.class punctuation.definition.entity",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#e69875"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#e69875"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "support.type.vendored.property-name",
          "meta.property-list entity.name.tag.css",
          "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
          "meta.property-list meta.property-name",
          "source.css.scss meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#d2c6ab"
        }
      },
      {
        "scope": [
          "source.css.scss entity.other.attribute-name.id ",
          "source.css entity.other.attribute-name.id ",
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag.reference",
          "meta.property-list"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "keyword.other.unit"
        ],
        "settings": {
          "foreground": "#d699b6"
        }
      },
      {
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "meta.property-value.css",
          "meta.attribute.style.html",
          "constant.language.null",
          "constant.language.boolean",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#d699b6"
        }
      },
      {
        "scope": [
          "entity.name.tag.css",
          "meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#a7c080"
        }
      }
    ],
    "semanticTokenColors": {
      "class.declaration": {
        "foreground": "#83c092"
      },
      "class.decorator": {
        "foreground": "#dbbc7f"
      },
      "enumMember": {
        "foreground": "#83c092"
      },
      "meta.decorator": {
        "foreground": "#dbbc7f"
      },
      "namespace": {
        "foreground": "#83c092"
      },
      "parameter": {
        "foreground": "#d3c6aa"
      },
      "property": {
        "foreground": "#d3c6aa"
      },
      "property.declaration": {
        "foreground": "#d3c6aa"
      },
      "variable": {
        "foreground": "#d3c6aa"
      },
      "variable.defaultLibrary": {
        "foreground": "#e69875"
      }
    }
  },
  {
    "id": "delirium-everforest-light",
    "label": "Delirium Everforest Light",
    "name": "DeliriumTheme Everforest-light",
    "type": "light",
    "colors": {
      "contrastActiveBorder": "#00000000",
      "contrastBorder": "#00000000",
      "descriptionForeground": "#515151cc",
      "disabledForeground": "#5151514d",
      "errorForeground": "#e67e80",
      "focusBorder": "#cccccc",
      "foreground": "#000000",
      "icon.foreground": "#0000004d",
      "selection.background": "#4d8d8561",
      "activityBar.activeBackground": "#4d8d8526",
      "activityBar.activeBorder": "#4d8d85",
      "activityBar.background": "#f6f6f6",
      "activityBar.border": "#ebebeb",
      "activityBar.dropBorder": "#51515133",
      "activityBar.foreground": "#4d8d85",
      "activityBar.inactiveForeground": "#bbc1be",
      "activityBarBadge.background": "#4d8d85",
      "activityBarBadge.foreground": "#f6f6f6",
      "activityBarTop.activeBorder": "#4d8d85",
      "activityBarTop.dropBorder": "#51515133",
      "activityBarTop.foreground": "#4d8d85",
      "activityBarTop.inactiveForeground": "#c7c7c7",
      "badge.background": "#4d8d85",
      "badge.foreground": "#f6f6f6",
      "breadcrumb.background": "#FFFFFF",
      "breadcrumb.foreground": "#515151cc",
      "breadcrumbPicker.background": "#ffffff",
      "button.background": "#4d8d85cc",
      "button.border": "#00000026",
      "button.foreground": "#000000cc",
      "button.hoverBackground": "#4d8d8599",
      "button.secondaryBackground": "#ededed",
      "button.secondaryForeground": "#515151",
      "button.secondaryHoverBackground": "#e6e6e6",
      "button.separator": "#0000004d",
      "charts.blue": "#6a8149",
      "charts.foreground": "#515151",
      "charts.green": "#538d61",
      "charts.lines": "#515151",
      "charts.orange": "#a79672",
      "charts.purple": "#b49557",
      "charts.red": "#ac6587",
      "charts.yellow": "#b95456",
      "checkbox.foreground": "#515151",
      "commandCenter.activeBackground": "#ffffff61",
      "commandCenter.activeForeground": "#0000008f",
      "commandCenter.background": "#FFFFFF",
      "commandCenter.border": "#ebebeb",
      "commandCenter.foreground": "#515151",
      "debugConsole.errorForeground": "#e67e80",
      "debugConsole.infoForeground": "#a7c080",
      "debugConsole.warningForeground": "#dbbc7f",
      "debugExceptionWidget.background": "#ffffff",
      "debugExceptionWidget.border": "#ebebeb",
      "debugIcon.breakpointCurrentStackframeForeground": "#e67e80",
      "debugIcon.breakpointDisabledForeground": "#e67e8080",
      "debugIcon.breakpointForeground": "#e67e80",
      "debugIcon.continueForeground": "#a7c080",
      "debugIcon.disconnectForeground": "#e67e80",
      "debugIcon.pauseForeground": "#e67e80",
      "debugIcon.restartForeground": "#83c092",
      "debugIcon.startForeground": "#83c092",
      "debugIcon.stepBackForeground": "#a7c080",
      "debugIcon.stepIntoForeground": "#a7c080",
      "debugIcon.stepOutForeground": "#a7c080",
      "debugIcon.stepOverForeground": "#a7c080",
      "debugIcon.stopForeground": "#e67e80",
      "debugToolBar.background": "#edf3f2",
      "diffEditor.border": "#ebebeb",
      "diffEditor.diagonalFill": "#ffffff",
      "diffEditor.insertedLineBackground": "#75ce8b1a",
      "diffEditor.insertedTextBackground": "#75ce8b1a",
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.move.border": "#b954564d",
      "diffEditor.moveActive.border": "#b95456b3",
      "diffEditor.removedLineBackground": "#f272751a",
      "diffEditor.removedTextBackground": "#f272751a",
      "diffEditor.removedTextBorder": "#00000000",
      "diffEditor.unchangedCodeBackground": "#f3f3f3",
      "diffEditor.unchangedRegionBackground": "#f3f3f3",
      "diffEditor.unchangedRegionShadow": "#00000012",
      "diffEditorGutter.insertedLineBackground": "#00000000",
      "diffEditorGutter.removedLineBackground": "#00000000",
      "diffEditorOverview.insertedForeground": "#83c09226",
      "diffEditorOverview.removedForeground": "#e67e8030",
      "dropdown.background": "#fafafa",
      "dropdown.border": "#e6e6e6",
      "dropdown.foreground": "#515151",
      "dropdown.listBackground": "#fafafa",
      "editor.background": "#FFFFFF",
      "editor.findMatchBackground": "#4d8d8530",
      "editor.findMatchBorder": "#4d8d8561",
      "editor.findMatchHighlightBackground": "#4d8d853d",
      "editor.findMatchHighlightBorder": "#4d8d855c",
      "editor.foldBackground": "#0000000d",
      "editor.foldPlaceholderForeground": "#515151",
      "editor.foreground": "#515151",
      "editor.hoverHighlightBackground": "#4d8d854d",
      "editor.inactiveSelectionBackground": "#4d8d854d",
      "editor.lineHighlightBackground": "#4d8d850f",
      "editor.lineHighlightBorder": "#4d8d8508",
      "editor.linkedEditingBackground": "#6e953533",
      "editor.rangeHighlightBackground": "#4d8d853d",
      "editor.selectionBackground": "#4d8d854d",
      "editor.selectionForeground": "#515151",
      "editor.selectionHighlightBackground": "#4d8d8514",
      "editor.selectionHighlightBorder": "#4d8d854d",
      "editor.wordHighlightBackground": "#4d8d851f",
      "editor.wordHighlightBorder": "#4d8d853d",
      "editor.wordHighlightStrongBackground": "#4d8d853d",
      "editorBracketHighlight.foreground1": "#b95456",
      "editorBracketHighlight.foreground2": "#b49557",
      "editorBracketHighlight.foreground3": "#6a8149",
      "editorBracketHighlight.foreground4": "#5a9f6b",
      "editorBracketHighlight.foreground5": "#DB704B",
      "editorBracketHighlight.foreground6": "#444b61",
      "editorBracketHighlight.unexpectedBracket.foreground": "#e67e80",
      "editorBracketMatch.background": "#4d8d854d",
      "editorBracketMatch.border": "#4d8d8573",
      "editorCodeLens.foreground": "#00000080",
      "editorCursor.background": "#e7f2f1",
      "editorCursor.foreground": "#4d8d85",
      "editorError.border": "#00000000",
      "editorError.foreground": "#e67e80",
      "editorGhostText.border": "#00000000",
      "editorGhostText.foreground": "#51515170",
      "editorGroup.border": "#ebebeb",
      "editorGroup.dropBackground": "#4d8d8514",
      "editorGroupHeader.border": "#00000000",
      "editorGroupHeader.noTabsBackground": "#FFFFFF",
      "editorGroupHeader.tabsBackground": "#f6f6f6",
      "editorGroupHeader.tabsBorder": "#ebebeb",
      "editorGutter.addedBackground": "#83c092cc",
      "editorGutter.background": "#FFFFFF",
      "editorGutter.commentRangeForeground": "#ffffff",
      "editorGutter.deletedBackground": "#e67e80cc",
      "editorGutter.modifiedBackground": "#a7c080cc",
      "editorHoverWidget.background": "#ffffff",
      "editorHoverWidget.border": "#ebebeb",
      "editorIndentGuide.activeBackground1": "#51515133",
      "editorIndentGuide.background1": "#5151510d",
      "editorInfo.border": "#00000000",
      "editorInlayHint.background": "#0000001a",
      "editorInlayHint.foreground": "#000000b3",
      "editorInlayHint.parameterBackground": "#0000001a",
      "editorInlayHint.parameterForeground": "#515151b3",
      "editorInlayHint.typeBackground": "#5151511a",
      "editorInlayHint.typeForeground": "#515151b3",
      "editorLineNumber.activeForeground": "#515151",
      "editorLineNumber.foreground": "#ced3d0",
      "editorLink.activeForeground": "#515151",
      "editorMarkerNavigation.background": "#f6f6f6",
      "editorMarkerNavigationError.background": "#e67e808f",
      "editorMarkerNavigationInfo.background": "#a7c0808f",
      "editorMarkerNavigationWarning.background": "#dbbc7f8f",
      "editorOverviewRuler.addedForeground": "#83c09280",
      "editorOverviewRuler.border": "#ebebeb",
      "editorOverviewRuler.deletedForeground": "#e67e8080",
      "editorOverviewRuler.errorForeground": "#e67e80",
      "editorOverviewRuler.incomingContentForeground": "#83c09280",
      "editorOverviewRuler.infoForeground": "#a7c08080",
      "editorOverviewRuler.modifiedForeground": "#a7c08080",
      "editorOverviewRuler.selectionHighlightForeground": "#4d8d8580",
      "editorOverviewRuler.warningForeground": "#dbbc7f",
      "editorRuler.foreground": "#5151510d",
      "editorStickyScroll.shadow": "#00000012",
      "editorStickyScrollHover.background": "#ffffff",
      "editorSuggestWidget.background": "#ffffff",
      "editorSuggestWidget.border": "#ebebeb",
      "editorSuggestWidget.foreground": "#515151",
      "editorSuggestWidget.highlightForeground": "#4d8d85",
      "editorSuggestWidget.selectedBackground": "#f2f2f2",
      "editorSuggestWidget.selectedIconForeground": "#515151",
      "editorUnnecessaryCode.border": "#00000000",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.border": "#00000000",
      "editorWarning.foreground": "#dbbc7f",
      "editorWhitespace.foreground": "#51515160",
      "editorWidget.background": "#ffffff",
      "editorWidget.border": "#e6e6e6",
      "editorWidget.resizeBorder": "#4d8d8550",
      "errorLens.errorForeground": "#e67e80fc",
      "errorLens.hintForeground": "#a7c080fc",
      "errorLens.infoForeground": "#a7c080fc",
      "errorLens.warningForeground": "#dbbc7ffc",
      "extensionButton.background": "#4d8d8580",
      "extensionButton.foreground": "#000000",
      "extensionButton.hoverBackground": "#4d8d8599",
      "extensionButton.prominentBackground": "#4d8d859d",
      "extensionButton.prominentHoverBackground": "#4d8d85",
      "gitDecoration.conflictingResourceForeground": "#4d8d85",
      "gitDecoration.deletedResourceForeground": "#e67e80",
      "gitDecoration.ignoredResourceForeground": "#5151514d",
      "gitDecoration.modifiedResourceForeground": "#a7c080",
      "gitDecoration.untrackedResourceForeground": "#83c092",
      "multiDiffEditor.border": "#ebebeb",
      "multiDiffEditor.headerBackground": "#f2f2f2",
      "scmGraph.foreground1": "#6a8149",
      "scmGraph.foreground2": "#b49557",
      "scmGraph.foreground3": "#4d8d85",
      "scmGraph.foreground4": "#DB704B",
      "scmGraph.foreground5": "#444b61",
      "scmGraph.historyItemBaseRefColor": "#5a9f6b",
      "scmGraph.historyItemHoverAdditionsForeground": "#83c092",
      "scmGraph.historyItemHoverDefaultLabelBackground": "#000000",
      "scmGraph.historyItemHoverDefaultLabelForeground": "#000000",
      "scmGraph.historyItemHoverDeletionsForeground": "#e67e80",
      "scmGraph.historyItemHoverLabelForeground": "#000000",
      "scmGraph.historyItemRefColor": "#b95456",
      "scmGraph.historyItemRemoteRefColor": "#6a8149",
      "inlineChat.background": "#ffffff",
      "inlineChat.border": "#e6e6e6",
      "inlineChatInput.background": "#ffffff",
      "inlineChatInput.border": "#e6e6e6",
      "inlineChatInput.focusBorder": "#cccccc",
      "inlineEdit.gutterIndicator.background": "#00000080",
      "inlineEdit.gutterIndicator.primaryBackground": "#d79c9eb3",
      "inlineEdit.gutterIndicator.primaryBorder": "#d79c9e00",
      "inlineEdit.gutterIndicator.primaryForeground": "#000000",
      "inlineEdit.gutterIndicator.secondaryBackground": "#84bcb5b3",
      "inlineEdit.gutterIndicator.secondaryBorder": "#84bcb500",
      "inlineEdit.gutterIndicator.secondaryForeground": "#000000",
      "inlineEdit.gutterIndicator.successfulBackground": "#c7e2cdb3",
      "inlineEdit.gutterIndicator.successfulBorder": "#c7e2cd00",
      "inlineEdit.gutterIndicator.successfulForeground": "#000000",
      "inlineEdit.modifiedBackground": "#83c09226",
      "inlineEdit.modifiedBorder": "#83c092cc",
      "inlineEdit.modifiedChangedLineBackground": "#83c09214",
      "inlineEdit.modifiedChangedTextBackground": "#00000000",
      "inlineEdit.originalBackground": "#ac658726",
      "inlineEdit.originalBorder": "#ac6587cc",
      "inlineEdit.originalChangedLineBackground": "#ac6587cc",
      "inlineEdit.originalChangedTextBackground": "#00000000",
      "inlineEdit.tabWillAcceptModifiedBorder": "#83c092",
      "inlineEdit.tabWillAcceptOriginalBorder": "#ac6587",
      "input.background": "#fafafa",
      "input.border": "#e6e6e6",
      "input.foreground": "#515151",
      "input.placeholderForeground": "#b3b3b3",
      "inputOption.activeBackground": "#b3b3b3",
      "inputOption.activeBorder": "#00000000",
      "inputOption.activeForeground": "#515151",
      "inputOption.hoverBackground": "#e6e6e6",
      "inputValidation.errorBackground": "#ffffff",
      "inputValidation.errorBorder": "#e67e80",
      "inputValidation.infoBackground": "#ffffff",
      "inputValidation.infoBorder": "#a7c080",
      "inputValidation.warningBackground": "#ffffff",
      "inputValidation.warningBorder": "#dbbc7f",
      "keybindingLabel.background": "#ffffff",
      "keybindingLabel.border": "#515151",
      "keybindingLabel.bottomBorder": "#515151",
      "keybindingLabel.foreground": "#000000",
      "list.activeSelectionBackground": "#4d8d851a",
      "list.activeSelectionForeground": "#515151",
      "list.dropBackground": "#4d8d8515",
      "list.errorForeground": "#e67e80",
      "list.focusBackground": "#4d8d8540",
      "list.focusForeground": "#000000",
      "list.focusAndSelectionOutline": "#4d8d85e6",
      "list.focusOutline": "#4d8d85e6",
      "list.highlightForeground": "#4d8d85",
      "list.hoverBackground": "#5151511a",
      "list.hoverForeground": "#000000",
      "list.inactiveSelectionBackground": "#3b6c660d",
      "list.inactiveSelectionForeground": "#515151",
      "list.warningForeground": "#dbbc7f",
      "menu.background": "#ffffff",
      "menu.border": "#ebebeb",
      "menu.foreground": "#515151",
      "menu.selectionBackground": "#f6f6f6",
      "menu.selectionForeground": "#1e1e1e",
      "menu.separatorBackground": "#ebebeb80",
      "menubar.selectionBackground": "#ededed",
      "menubar.selectionForeground": "#515151",
      "merge.border": "#ebebeb",
      "merge.commonContentBackground": "#b9545630",
      "merge.commonHeaderBackground": "#b9545680",
      "merge.currentContentBackground": "#83c09230",
      "merge.currentHeaderBackground": "#83c09280",
      "merge.incomingContentBackground": "#a7c08030",
      "merge.incomingHeaderBackground": "#a7c08080",
      "minimap.background": "#FFFFFF",
      "minimap.errorHighlight": "#e67e80",
      "minimap.findMatchHighlight": "#4d8d85",
      "minimap.selectionHighlight": "#4d8d85",
      "minimap.selectionOccurrenceHighlight": "#4d8d85",
      "minimap.warningHighlight": "#dbbc7f",
      "minimapGutter.addedBackground": "#83c092",
      "minimapGutter.deletedBackground": "#e67e80",
      "minimapGutter.modifiedBackground": "#a7c080",
      "notificationCenterHeader.background": "#ffffff",
      "notificationCenterHeader.foreground": "#515151",
      "notificationLink.foreground": "#4d8d85",
      "notifications.background": "#ffffff",
      "notifications.border": "#ebebeb",
      "notifications.foreground": "#000000",
      "notificationsErrorIcon.foreground": "#ac6587",
      "notificationsInfoIcon.foreground": "#6a8149",
      "notificationsWarningIcon.foreground": "#a79672",
      "panel.background": "#fafafa",
      "panel.border": "#ebebeb",
      "panel.dropBorder": "#51515180",
      "panelInput.border": "#e6e6e6",
      "panelSection.border": "#ebebeb",
      "panelSectionHeader.background": "#ededed",
      "panelSectionHeader.border": "#ebebeb",
      "panelSectionHeader.foreground": "#515151",
      "panelTitle.activeBorder": "#4d8d85",
      "panelTitle.activeForeground": "#515151",
      "panelTitle.inactiveForeground": "#808080",
      "peekView.border": "#ebebeb",
      "peekViewEditor.background": "#ffffff",
      "peekViewEditor.matchHighlightBackground": "#ffffff40",
      "peekViewEditor.matchHighlightBorder": "#00000000",
      "peekViewEditorGutter.background": "#ffffff",
      "peekViewEditorStickyScroll.background": "#ffffff",
      "peekViewResult.background": "#ffffff",
      "peekViewResult.fileForeground": "#515151",
      "peekViewResult.lineForeground": "#000000",
      "peekViewResult.matchHighlightBackground": "#4d8d8580",
      "peekViewResult.selectionBackground": "#4d8d8533",
      "peekViewResult.selectionForeground": "#515151",
      "peekViewTitle.background": "#ffffff",
      "peekViewTitleDescription.foreground": "#515151",
      "peekViewTitleLabel.foreground": "#515151",
      "pickerGroup.border": "#ebebeb",
      "pickerGroup.foreground": "#515151",
      "profileBadge.background": "#4d8d85",
      "profileBadge.foreground": "#FFFFFF",
      "progressBar.background": "#4d8d85",
      "quickInput.background": "#ffffff",
      "quickInput.foreground": "#000000",
      "quickInputList.focusBackground": "#4d8d851a",
      "quickInputList.focusForeground": "#000000",
      "quickInputList.focusIconForeground": "#515151",
      "quickInputTitle.background": "#f6f6f6",
      "sash.hoverBorder": "#4d8d8550",
      "scrollbar.shadow": "#00000012",
      "scrollbarSlider.activeBackground": "#5151514d",
      "scrollbarSlider.background": "#51515126",
      "scrollbarSlider.hoverBackground": "#51515133",
      "settings.headerForeground": "#515151",
      "settings.modifiedItemIndicator": "#4d8d85",
      "settings.settingsHeaderHoverForeground": "#515151",
      "sideBar.background": "#f6f6f6",
      "sideBar.border": "#ebebeb",
      "sideBar.foreground": "#515151cc",
      "sideBarSectionHeader.background": "#f6f6f6",
      "sideBarSectionHeader.border": "#ebebeb",
      "sideBarSectionHeader.foreground": "#515151",
      "sideBarStickyScroll.background": "#f1f1f1",
      "sideBarStickyScroll.shadow": "#00000012",
      "sideBarTitle.foreground": "#515151",
      "statusBar.background": "#FFFFFF",
      "statusBar.border": "#ebebeb",
      "statusBar.debuggingBackground": "#dbe8e5",
      "statusBar.debuggingForeground": "#424f4d",
      "statusBar.foreground": "#00000080",
      "statusBar.noFolderBackground": "#f6f6f6",
      "statusBar.noFolderBorder": "#ebebeb",
      "statusBar.noFolderForeground": "#000000cc",
      "statusBarItem.activeBackground": "#ffffff",
      "statusBarItem.compactHoverBackground": "#4d8d85cc",
      "statusBarItem.hoverBackground": "#c9dcd9",
      "statusBarItem.hoverForeground": "#515151",
      "statusBarItem.prominentBackground": "#FFFFFF",
      "statusBarItem.prominentForeground": "#ffffff",
      "statusBarItem.prominentHoverBackground": "#ffffff",
      "statusBarItem.prominentHoverForeground": "#ffffff",
      "statusBarItem.errorBackground": "#e67e80",
      "statusBarItem.errorForeground": "#ffffff",
      "statusBarItem.errorHoverBackground": "#eea9aa",
      "statusBarItem.errorHoverForeground": "#ffffff",
      "statusBarItem.offlineBackground": "#b49557",
      "statusBarItem.offlineForeground": "#ffffff",
      "statusBarItem.offlineHoverBackground": "#c4ab7a",
      "statusBarItem.offlineHoverForeground": "#ffffff",
      "statusBarItem.remoteBackground": "#DB704B",
      "statusBarItem.remoteForeground": "#ffffff",
      "statusBarItem.remoteHoverBackground": "#e49276",
      "statusBarItem.remoteHoverForeground": "#ffffff",
      "statusBarItem.warningBackground": "#dbbc7f",
      "statusBarItem.warningForeground": "#ffffff",
      "statusBarItem.warningHoverBackground": "#e6d1a7",
      "statusBarItem.warningHoverForeground": "#ffffff",
      "tab.activeBackground": "#FFFFFF",
      "tab.activeBorder": "#FFFFFF",
      "tab.hoverForeground": "#515151",
      "tab.activeBorderTop": "#4d8d85",
      "tab.activeForeground": "#515151",
      "tab.border": "#ebebeb",
      "tab.hoverBackground": "#f0f0f0",
      "tab.inactiveBackground": "#f6f6f6",
      "tab.inactiveForeground": "#818181",
      "tab.lastPinnedBorder": "#ebebeb",
      "terminal.ansiBlack": "#FFFFFF",
      "terminal.ansiBlue": "#a7c080",
      "terminal.ansiBrightBlack": "#c7c7c7",
      "terminal.ansiBrightBlue": "#addd64",
      "terminal.ansiBrightCyan": "#fb602b",
      "terminal.ansiBrightGreen": "#67dc84",
      "terminal.ansiBrightMagenta": "#d8a133",
      "terminal.ansiBrightRed": "#fd676a",
      "terminal.ansiBrightWhite": "#848484",
      "terminal.ansiBrightYellow": "#dd3033",
      "terminal.ansiCyan": "#DB704B",
      "terminal.ansiGreen": "#83c092",
      "terminal.ansiMagenta": "#b49557",
      "terminal.ansiRed": "#e67e80",
      "terminal.ansiWhite": "#515151",
      "terminal.ansiYellow": "#b95456",
      "terminal.background": "#fafafa",
      "terminal.foreground": "#515151",
      "terminal.selectionForeground": "#515151",
      "terminalCursor.background": "#FFFFFF",
      "terminalCursor.foreground": "#4d8d85",
      "terminalStickyScrollHover.background": "#ffffff",
      "textBlockQuote.background": "#a7c08033",
      "textBlockQuote.border": "#a7c080b9",
      "textCodeBlock.background": "#a7c08033",
      "textLink.activeForeground": "#a7c080",
      "textLink.foreground": "#4d8d85",
      "textPreformat.background": "#dbe8e5",
      "textPreformat.foreground": "#172a28",
      "textSeparator.foreground": "#4d8d85",
      "titleBar.activeBackground": "#f6f6f6",
      "titleBar.activeForeground": "#51515199",
      "titleBar.border": "#ebebeb",
      "titleBar.inactiveBackground": "#f6f6f6",
      "titleBar.inactiveForeground": "#51515199",
      "toolbar.activeBackground": "#51515180",
      "toolbar.hoverBackground": "#ededed",
      "tree.indentGuidesStroke": "#51515133",
      "walkThrough.embeddedEditorBackground": "#FFFFFF",
      "welcomePage.progress.background": "#ffffff",
      "welcomePage.progress.foreground": "#4d8d85",
      "welcomePage.tileBackground": "#0000001a",
      "welcomePage.tileBorder": "#00000033",
      "welcomePage.tileHoverBackground": "#00000033",
      "widget.shadow": "#0000000d",
      "widget.border": "#e6e6e6"
    },
    "tokenColors": [
      {
        "scope": [
          "support.module.elm",
          "entity.other.inherited-class.python",
          "variable.other.object",
          "support.other.namespace.php",
          "entity.other.attribute-name.namespace.xml",
          "record.accessor",
          "entity.name.record.field.accessor",
          "storage.modifier.import.java",
          "storage.modifier.import.groovy",
          "meta.import.swift entity.name.type.swift",
          "meta.member.access.python",
          "variable.other.property.ts",
          "variable.other.property.js",
          "constant.language.symbol.elixir",
          "punctuation.tag.liquid support.class.liquid",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
          "source.cpp meta.block.class.cpp meta.body.class.cpp",
          "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
        ],
        "settings": {
          "foreground": "#a79672"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#4d8d85"
        }
      },
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.quoted.docstring.multi",
          "comment.block.documentation source"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#51515166"
        }
      },
      {
        "scope": [
          "meta.section.struct.go variable.other.field.go",
          "meta.section.struct.go variable.other.declaration.go",
          "source",
          "support",
          "constant.character.entity.named",
          "meta.jsx.children",
          "source.lua",
          "text.html.derivative",
          "source.graphql meta.selections variable.other.alias.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
          "source.graphql variable.arguments.graphql",
          "JSXNested"
        ],
        "settings": {
          "foreground": "#515151"
        }
      },
      {
        "scope": [
          "constant",
          "support.constant.core.php"
        ],
        "settings": {
          "foreground": "#ac6587"
        }
      },
      {
        "scope": [
          "entity.name.function.decorator",
          "meta.decorator entity.name.function",
          "meta.decorator punctuation.decorator",
          "punctuation.definition.decorator",
          "meta.decorator variable.other.readwrite.ts",
          "variable.parameter.gdscript",
          "entity.name.variable.parameter",
          "variable.parameter"
        ],
        "settings": {
          "foreground": "#b49557"
        }
      },
      {
        "scope": [
          "keyword.control.export",
          "support.type.object.module",
          "support.module",
          "support.node",
          "support.other.module",
          "entity.name.type.module",
          "entity.name.type.class.module",
          "keyword.control.module"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "meta.definition.method",
          "meta.function-call",
          "meta.function",
          "meta.method.declaration",
          "meta.function-call support",
          "variable.language.super.ts",
          "source.directive",
          "meta.function-call.generic",
          "meta.method-call.static.php",
          "meta.method-call.php",
          "meta.class storage.type",
          "meta.method.groovy",
          "meta.bracket.square.access",
          "entity.name.function-call.elixir",
          "punctuation.output.liquid support.variable.liquid",
          "meta.function.echo.edge source.js keyword.operator.error-control.js",
          "entity.name.type.variant.gdscript",
          "entity.name.function.powershell",
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "keyword.control.import",
          "meta.module.name.elm support",
          "meta.import.elm support",
          "keyword.control.at-rule",
          "punctuation.definition.keyword",
          "variable.control.import.include",
          "keyword.other.import.java"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.operator.pointer.go",
          "keyword.control",
          "keyword.control.conditional",
          "storage.modifier",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.begin.blade",
          "keyword.end.blade",
          "keyword.blade",
          "keyword.type-alias",
          "keyword.type",
          "support.class.console",
          "keyword.other.await",
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
          "keyword.other.new",
          "keyword.other.phpdoc",
          "keyword.other.use.php",
          "keyword.operator.logical.python",
          "keyword.other.import.static.groovy",
          "keyword.other.import.groovy",
          "punctuation.definition.attribute.swift",
          "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
          "meta.directive.on.svelte entity.name.type.svelte",
          "keyword.other.special-method.elixir",
          "keyword.edge",
          "entity.name.function.edge",
          "support.constant.edge",
          "keyword.other.gdscript",
          "keyword.other.onready.gdscript",
          "source.graphql meta.fragment.graphql keyword.on.graphql",
          "source.graphql meta.type.interface.graphql keyword.implements.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
          "keyword.operator.class.php",
          "keyword.operator.spread.php",
          "keyword.operator.type.php",
          "keyword.operator.increment-decrement.php",
          "keyword.operator.increment-increment.php",
          "keyword.operator.string.php",
          "keyword.operator.ternary.php",
          "keyword.operator.variadic.php",
          "keyword.operator.nullable-type.php",
          "keyword.other.use-as.php",
          "keyword.import.go",
          "keyword.operator.address.go",
          "keyword.operator.null-coalescing",
          "keyword.operator.arrow",
          "keyword.struct.go",
          "keyword.operator.liquid",
          "keyword.operator.optional.ts",
          "keyword.cmake",
          "keyword.codetag.notation",
          "keyword.operator.pipe.shell"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "meta.object-literal.key",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#515151"
        }
      },
      {
        "scope": [
          "keyword.other.definition.ini",
          "support.type.property-name",
          "entity.name.tag.yaml",
          "storage.type.function.arrow.tsx"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "keyword.operator",
          "keyword.operator.comparison",
          "keyword.operator.lua",
          "keyword.operator.assignment",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.math"
        ],
        "settings": {
          "foreground": "#DB704B"
        }
      },
      {
        "scope": [
          "keyword.operator.type.annotation.tsx",
          "punctuation",
          "attribute_value",
          "meta.brace",
          "punctuation.definition.parameters",
          "punctuation.definition.template-expression",
          "keyword.other",
          "punctuation.separator",
          "punctuation.definition.generic.begin",
          "punctuation.definition.generic.end",
          "meta.function.type-declaration",
          "keyword.other.colon.elm",
          "meta.record.field.elm keyword.other.elm",
          "keyword.other.period.elm",
          "meta.tag.xml",
          "meta.tag.preprocessor.xml",
          "punctuation.definition.block",
          "punctuation.accessor",
          "constant.name.attribute.tag.pug",
          "string.interpolated.pug",
          "keyword.other.whitespace.liquid",
          "meta.tag.template.block.twig",
          "meta.tag.template.value.twig",
          "begin.bracket",
          "end.bracket",
          "text.html.twig meta.tag.inline.any",
          "text.html.twig meta.tag.block.any",
          "support.function.construct.begin.blade",
          "support.function.construct.end.blade source.php",
          "support.function.construct.end.blade",
          "meta.function.echo.blade source.php",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "text.html.vue-html meta.tag.block.any",
          "keyword.operator.assignment.tsx",
          "meta.definition.method.signature.java",
          "meta.class.body.groovy",
          "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
          "punctuation.definition.list.begin.erlang",
          "meta.expression.parenthesized",
          "meta.definition.function.swift meta.parameter-clause.swift",
          "source.swift meta.function-call.swift",
          "punctuation.section.embedded.end.swift source.swift",
          "source.lua",
          "meta.function.lua",
          "punctuation.definition.keyword.svelte",
          "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
          "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
          "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
          "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
          "punctuation.output.liquid",
          "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
          "JSXAttrs keyword.operator.assignment.jsx",
          "meta.tag.attributes.js keyword.operator.assignment.js"
        ],
        "settings": {
          "foreground": "#51515166"
        }
      },
      {
        "scope": [
          "entity.name.package.go",
          "variable.language.this",
          "variable.language.special.self",
          "variable.parameter.function.language.special.self",
          "variable.language.this.php punctuation.definition.variable.php",
          "meta.class.body.php storage.type.php",
          "variable.parameter.function.swift entity.name.function.swift",
          "variable.other.jsdoc",
          "support.variable.drive.powershell",
          "entity.other.attribute.lua"
        ],
        "settings": {
          "foreground": "#a79672"
        }
      },
      {
        "scope": [
          "storage",
          "meta.var.expr storage.type",
          "storage.type.function",
          "keyword.function",
          "storage.type.class",
          "storage.type.property",
          "keyword.other",
          "keyword.local.lua",
          "entity.name.class",
          "meta.function.lua keyword.control.lua",
          "storage.type.enum",
          "storage.type.type",
          "entity.name.type.class.java",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.name.type.class.groovy",
          "storage.type.rust",
          "entity.name.type.class.swift",
          "source.svelte meta.script.svelte source.ts entity.name.label.ts",
          "meta.directive.on.svelte keyword.control.svelte",
          "storage.type.const.gdscript",
          "storage.type.var.gdscript",
          "source.graphql declaration.meta.type keyword",
          "source.graphql meta.type.interface.graphql keyword.type.graphql",
          "source.graphql keyword.schema.graphql",
          "source.graphql keyword.operation.graphql",
          "source.graphql meta.enum.graphql keyword.enum.graphql",
          "source.graphql meta.fragment.graphql keyword.fragment.graphql",
          "storage.type.trait.php",
          "keyword.type.go",
          "keyword.var.go",
          "storage.type.powershell",
          "keyword.const.go",
          "keyword.storage.modifier"
        ],
        "settings": {
          "foreground": "#DB704B"
        }
      },
      {
        "scope": [
          "storage.type.interface",
          "keyword.control.export.tsx"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "string",
          "string.template",
          "string.quoted.single",
          "punctuation.quasi.element",
          "string.other.link",
          "constant.character.escape.regexp",
          "variable.parameter.url",
          "constant.other.symbol.quoted.single.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
          "meta.import.ts punctuation.definition.variable.svelte",
          "punctuation.definition.string.end.html source.css-ignored-vscode",
          "text.html.edge punctuation.definition.variable.js",
          "string.unquoted.plain.out.yaml",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "punctuation.definition.string.end.html source.css",
          "string.quoted.double.html source.css",
          "punctuation.definition.subshell.single.shell",
          "punctuation.section.parenthese.shell"
        ],
        "settings": {
          "foreground": "#538d61"
        }
      },
      {
        "scope": [
          "string.quoted.docstring.multi.python",
          "string.quoted.double.block.python punctuation.definition.string.end.python",
          "string.quoted.double.block.python punctuation.definition.string.begin.python",
          "string.quoted.double.block.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python"
        ],
        "settings": {
          "foreground": "#436460cc"
        }
      },
      {
        "scope": [
          "entity.name.type.interface",
          "storage.type",
          "entity.other.inherited-class",
          "keyword.type",
          "storage.type.java",
          "storage.type.primitive.java",
          "storage.type.generic.java",
          "keyword.other.type",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php source.php",
          "punctuation.section.embedded.end.php",
          "storage.type.object.array.java",
          "storage.type.primitive.groovy",
          "storage.type.groovy",
          "meta.definition.type.body.swift meta.function-call.swift",
          "meta.definition.type.class.swift meta.inheritance-clause.swift",
          "variable.other.constant.elixir",
          "source.graphql declaration.meta.type support",
          "source.graphql meta.selections",
          "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
          "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
          "entity.name.type.class.php",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.other.alias.php",
          "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
        ],
        "settings": {
          "foreground": "#5a9f6b"
        }
      },
      {
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#4d8d85"
        }
      },
      {
        "scope": [
          "punctuation.terminator",
          "support.variable",
          "meta.definition.variable",
          "variable",
          "variable.language",
          "entity.name.type.class.js",
          "entity.name.variable",
          "support.variable.magic",
          "meta.method.body",
          "entity.name.variable",
          "punctuation.definition.variable",
          "meta.class variable.object.property",
          "variable.other.constant entity.name.function",
          "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
          "meta.definition.variable.name.groovy",
          "meta.body.struct.cpp",
          "parameter.variable.function.elixir",
          "meta.directive.edge source.js",
          "meta.function.echo.edge source.js",
          "text.html.edge meta.function.echo.edge meta.function-call.js",
          "source.css variable.parameter.keyframe-list.css",
          "source.css meta.property-value.css",
          "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
          "source.css.scss meta.property-value.scss",
          "entity.name.variable.tuple-element",
          "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
          "support.variable.automatic.powershell",
          "storage.source.cmake",
          "entity.source.cmake"
        ],
        "settings": {
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "source.elm constant.type-constructor",
          "support.class"
        ],
        "settings": {
          "foreground": "#b49557"
        }
      },
      {
        "scope": [
          "source.elm storage.type"
        ],
        "settings": {
          "foreground": "#5a9f6b"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.other.html",
          "support.class.component.tsx",
          "support.class.component.html"
        ],
        "settings": {
          "foreground": "#DB704B"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.to-file",
          "source.diff markup.inserted.diff",
          "source.diff punctuation.definition.to-file.diff",
          "source.diff punctuation.definition.inserted.diff"
        ],
        "settings": {
          "foreground": "#538d61"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.from-file.diff",
          "source.diff meta.diff.header.from-file",
          "source.diff markup.deleted.diff",
          "source.diff punctuation.definition.deleted.diff"
        ],
        "settings": {
          "foreground": "#ac6587"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.command"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.range.diff",
          "source.diff meta.diff.range.unified"
        ],
        "settings": {
          "foreground": "#a79672"
        }
      },
      {
        "scope": [
          "support.variable.liquid",
          "support.class.liquid"
        ],
        "settings": {
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "text.html.basic entity.name",
          "source.js-ignored-vscode",
          "meta.embedded.block.blade constant.other.php",
          "meta.embedded.block.blade keyword.operator.comparison.php",
          "meta.embedded.block.blade keyword.operator.arithmetic.php",
          "meta.tag.start.svelte keyword.control.svelte",
          "meta.tag.end.svelte keyword.control.svelte"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "meta.tag.sgml.doctype.html",
          "punctuation.definition.tag",
          "meta.tag.block.any",
          "meta.tag.block.any.html",
          "meta.tag.inline.any",
          "source.css-ignored-vscode",
          "meta.tag.metadata.style.end.html",
          "text.html.vue invalid.illegal.character-not-allowed-here.html",
          "meta.tag.inline.i.start.html",
          "meta.tag.structure.div.start.html",
          "punctuation.definition.tag.end.html.vue",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": "#6a8149b3"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "entity.name.tag.liquid",
          "invalid.deprecated.entity.other.attribute-name",
          "meta.embedded.block.blade storage.type.php"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.raw.markdown",
          "markup.fenced_code.block.markdown",
          "markup.fenced_code.block.markdown punctuation",
          "markup.raw.block.markdown"
        ],
        "settings": {
          "foreground": "#5a9f6b"
        }
      },
      {
        "scope": [
          "fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#5a9f6b"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "entity.name.section",
          "markup.heading.setext"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "markup.underline.link",
          "markup.underline.link.image"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "markup.bold",
          "punctuation.definition.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "markup.strikethrough",
          "punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#ac6587"
        }
      },
      {
        "scope": [
          "markup.italic",
          "punctuation.definition.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#a79672"
        }
      },
      {
        "scope": [
          "markup.quote",
          "markup.quote.markdown punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#b49557"
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      },
      {
        "scope": [
          "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
          "meta.embedded.block.frontmatter punctuation.definition.tag.end",
          "meta.embedded.block.frontmatter string.unquoted.plain.out"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#515151"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#b49557"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": "#b49557"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.class punctuation.definition.entity",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#DB704B"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#DB704B"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "support.type.vendored.property-name",
          "meta.property-list entity.name.tag.css",
          "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
          "meta.property-list meta.property-name",
          "source.css.scss meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#515151"
        }
      },
      {
        "scope": [
          "source.css.scss entity.other.attribute-name.id ",
          "source.css entity.other.attribute-name.id ",
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#5a9f6b"
        }
      },
      {
        "scope": [
          "entity.name.tag.reference",
          "meta.property-list"
        ],
        "settings": {
          "foreground": "#a79672"
        }
      },
      {
        "scope": [
          "keyword.other.unit"
        ],
        "settings": {
          "foreground": "#ac6587"
        }
      },
      {
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "meta.property-value.css",
          "meta.attribute.style.html",
          "constant.language.null",
          "constant.language.boolean",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "#b95456"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#ac6587"
        }
      },
      {
        "scope": [
          "entity.name.tag.css",
          "meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#6a8149"
        }
      }
    ],
    "semanticTokenColors": {
      "class.declaration": {
        "foreground": "#5a9f6b"
      },
      "class.decorator": {
        "foreground": "#b49557"
      },
      "enumMember": {
        "foreground": "#5a9f6b"
      },
      "meta.decorator": {
        "foreground": "#b49557"
      },
      "namespace": {
        "foreground": "#538d61"
      },
      "parameter": {
        "foreground": "#515151"
      },
      "property": {
        "foreground": "#a79672"
      },
      "property.declaration": {
        "foreground": "#515151"
      },
      "variable": {
        "foreground": "#444b61"
      },
      "variable.defaultLibrary": {
        "foreground": "#DB704B"
      }
    }
  },
  {
    "id": "delirium-jetbrain-dark",
    "label": "Delirium JetBrains Dark",
    "name": "DeliriumTheme Jetbrain-dark",
    "type": "dark",
    "colors": {
      "contrastActiveBorder": "#00000000",
      "contrastBorder": "#00000000",
      "descriptionForeground": "#bbbbb580",
      "disabledForeground": "#bbbbb54d",
      "errorForeground": "#e67e80",
      "focusBorder": "#5b5f66",
      "foreground": "#bbbbb5",
      "icon.foreground": "#bbbbb54d",
      "selection.background": "#0077ff61",
      "activityBar.activeBackground": "#0077ff26",
      "activityBar.activeBorder": "#0077ff",
      "activityBar.background": "#26272a",
      "activityBar.border": "#323538",
      "activityBar.dropBorder": "#f8f8f733",
      "activityBar.foreground": "#0077ff",
      "activityBar.inactiveForeground": "#555d60",
      "activityBarBadge.background": "#0077ff",
      "activityBarBadge.foreground": "#26272a",
      "activityBarTop.activeBorder": "#0077ff",
      "activityBarTop.dropBorder": "#f8f8f733",
      "activityBarTop.foreground": "#0077ff",
      "activityBarTop.inactiveForeground": "#525455",
      "badge.background": "#0077ff",
      "badge.foreground": "#26272a",
      "breadcrumb.background": "#2b2d30",
      "breadcrumb.foreground": "#bcbcb4cc",
      "breadcrumbPicker.background": "#373a3d",
      "button.background": "#0077ffcc",
      "button.border": "#ffffff26",
      "button.foreground": "#ffffffcc",
      "button.hoverBackground": "#0077ff99",
      "button.secondaryBackground": "#3c3f43",
      "button.secondaryForeground": "#bbbbb5cc",
      "button.secondaryHoverBackground": "#43464b",
      "button.separator": "#ffffff4d",
      "charts.blue": "#7fb2b3",
      "charts.foreground": "#bbbbb5",
      "charts.green": "#bbab97",
      "charts.lines": "#bbbbb5",
      "charts.orange": "#7fb2b3",
      "charts.purple": "#baa2da",
      "charts.red": "#d78884",
      "charts.yellow": "#7eaadb",
      "checkbox.foreground": "#bbbbb5",
      "commandCenter.activeBackground": "#373a3d61",
      "commandCenter.activeForeground": "#bbbbb58f",
      "commandCenter.background": "#2b2d30",
      "commandCenter.border": "#323538",
      "commandCenter.foreground": "#f8f8f7",
      "debugConsole.errorForeground": "#e67e80",
      "debugConsole.infoForeground": "#a7c080",
      "debugConsole.warningForeground": "#dbbc7f",
      "debugExceptionWidget.background": "#373a3d",
      "debugExceptionWidget.border": "#323538",
      "debugIcon.breakpointCurrentStackframeForeground": "#e67e80",
      "debugIcon.breakpointDisabledForeground": "#e67e8080",
      "debugIcon.breakpointForeground": "#e67e80",
      "debugIcon.continueForeground": "#a7c080",
      "debugIcon.disconnectForeground": "#e67e80",
      "debugIcon.pauseForeground": "#e67e80",
      "debugIcon.restartForeground": "#83c092",
      "debugIcon.startForeground": "#83c092",
      "debugIcon.stepBackForeground": "#a7c080",
      "debugIcon.stepIntoForeground": "#a7c080",
      "debugIcon.stepOutForeground": "#a7c080",
      "debugIcon.stepOverForeground": "#a7c080",
      "debugIcon.stopForeground": "#e67e80",
      "debugToolBar.background": "#303442",
      "diffEditor.border": "#323538",
      "diffEditor.diagonalFill": "#373a3d",
      "diffEditor.insertedLineBackground": "#75ce8b1a",
      "diffEditor.insertedTextBackground": "#75ce8b1a",
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.move.border": "#7eaadb4d",
      "diffEditor.moveActive.border": "#7eaadbb3",
      "diffEditor.removedLineBackground": "#f272751a",
      "diffEditor.removedTextBackground": "#f272751a",
      "diffEditor.removedTextBorder": "#00000000",
      "diffEditor.unchangedCodeBackground": "#242527",
      "diffEditor.unchangedRegionBackground": "#242527",
      "diffEditor.unchangedRegionShadow": "#00000066",
      "diffEditorGutter.insertedLineBackground": "#00000000",
      "diffEditorGutter.removedLineBackground": "#00000000",
      "diffEditorOverview.insertedForeground": "#83c09226",
      "diffEditorOverview.removedForeground": "#e67e8030",
      "dropdown.background": "#313337",
      "dropdown.border": "#535454",
      "dropdown.foreground": "#bbbbb5",
      "dropdown.listBackground": "#313337",
      "editor.background": "#2b2d30",
      "editor.findMatchBackground": "#0077ff30",
      "editor.findMatchBorder": "#0077ff61",
      "editor.findMatchHighlightBackground": "#0077ff3d",
      "editor.findMatchHighlightBorder": "#0077ff5c",
      "editor.foldBackground": "#00000033",
      "editor.foldPlaceholderForeground": "#f8f8f7",
      "editor.foreground": "#bbbbb5",
      "editor.hoverHighlightBackground": "#0077ff4d",
      "editor.inactiveSelectionBackground": "#0077ff4d",
      "editor.lineHighlightBackground": "#0077ff0f",
      "editor.lineHighlightBorder": "#0077ff08",
      "editor.linkedEditingBackground": "#6bc6c733",
      "editor.rangeHighlightBackground": "#0077ff3d",
      "editor.selectionBackground": "#0077ff4d",
      "editor.selectionForeground": "#bbbbb5",
      "editor.selectionHighlightBackground": "#0077ff14",
      "editor.selectionHighlightBorder": "#0077ff4d",
      "editor.wordHighlightBackground": "#0077ff73",
      "editor.wordHighlightBorder": "#0077ff8a",
      "editor.wordHighlightStrongBackground": "#0077ff4d",
      "editorBracketHighlight.foreground1": "#7eaadb",
      "editorBracketHighlight.foreground2": "#baa2da",
      "editorBracketHighlight.foreground3": "#7fb2b3",
      "editorBracketHighlight.foreground4": "#baa2da",
      "editorBracketHighlight.foreground5": "#baa2da",
      "editorBracketHighlight.foreground6": "#bcbcb4",
      "editorBracketHighlight.unexpectedBracket.foreground": "#e67e80",
      "editorBracketMatch.background": "#0077ff4d",
      "editorBracketMatch.border": "#0077ff73",
      "editorCodeLens.foreground": "#bbbbb580",
      "editorCursor.background": "#ffffff",
      "editorCursor.foreground": "#0077ff",
      "editorError.border": "#00000000",
      "editorError.foreground": "#e67e80",
      "editorGhostText.border": "#00000000",
      "editorGhostText.foreground": "#bbbbb570",
      "editorGroup.border": "#323538",
      "editorGroup.dropBackground": "#0077ff14",
      "editorGroupHeader.border": "#00000000",
      "editorGroupHeader.noTabsBackground": "#2b2d30",
      "editorGroupHeader.tabsBackground": "#26272a",
      "editorGroupHeader.tabsBorder": "#323538",
      "editorGutter.addedBackground": "#83c092cc",
      "editorGutter.background": "#2b2d30",
      "editorGutter.commentRangeForeground": "#373a3d",
      "editorGutter.deletedBackground": "#e67e80cc",
      "editorGutter.modifiedBackground": "#a7c080cc",
      "editorHoverWidget.background": "#373a3d",
      "editorHoverWidget.border": "#323538",
      "editorIndentGuide.activeBackground1": "#bcbcb433",
      "editorIndentGuide.background1": "#bcbcb40d",
      "editorInfo.border": "#00000000",
      "editorInlayHint.background": "#bbbbb51a",
      "editorInlayHint.foreground": "#bbbbb5b3",
      "editorInlayHint.parameterBackground": "#bbbbb51a",
      "editorInlayHint.parameterForeground": "#bcbcb4b3",
      "editorInlayHint.typeBackground": "#bcbcb41a",
      "editorInlayHint.typeForeground": "#bcbcb4b3",
      "editorLineNumber.activeForeground": "#bcbcb4",
      "editorLineNumber.foreground": "#484f52",
      "editorLink.activeForeground": "#bbbbb5",
      "editorMarkerNavigation.background": "#26272a",
      "editorMarkerNavigationError.background": "#e67e808f",
      "editorMarkerNavigationInfo.background": "#a7c0808f",
      "editorMarkerNavigationWarning.background": "#dbbc7f8f",
      "editorOverviewRuler.addedForeground": "#83c09280",
      "editorOverviewRuler.border": "#323538",
      "editorOverviewRuler.deletedForeground": "#e67e8080",
      "editorOverviewRuler.errorForeground": "#e67e80",
      "editorOverviewRuler.incomingContentForeground": "#83c09280",
      "editorOverviewRuler.infoForeground": "#a7c08080",
      "editorOverviewRuler.modifiedForeground": "#a7c08080",
      "editorOverviewRuler.selectionHighlightForeground": "#0077ff80",
      "editorOverviewRuler.warningForeground": "#dbbc7f",
      "editorRuler.foreground": "#bcbcb40d",
      "editorStickyScroll.shadow": "#00000066",
      "editorStickyScrollHover.background": "#323538",
      "editorSuggestWidget.background": "#303235",
      "editorSuggestWidget.border": "#323538",
      "editorSuggestWidget.foreground": "#bcbcb4",
      "editorSuggestWidget.highlightForeground": "#0077ff",
      "editorSuggestWidget.selectedBackground": "#43464b",
      "editorSuggestWidget.selectedIconForeground": "#bbbbb5",
      "editorUnnecessaryCode.border": "#00000000",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.border": "#00000000",
      "editorWarning.foreground": "#dbbc7f",
      "editorWhitespace.foreground": "#f8f8f760",
      "editorWidget.background": "#373a3d",
      "editorWidget.border": "#43464b",
      "editorWidget.resizeBorder": "#0077ff50",
      "errorLens.errorForeground": "#e67e80fc",
      "errorLens.hintForeground": "#a7c080fc",
      "errorLens.infoForeground": "#a7c080fc",
      "errorLens.warningForeground": "#dbbc7ffc",
      "extensionButton.background": "#0077ff80",
      "extensionButton.foreground": "#70b3ff",
      "extensionButton.hoverBackground": "#0077ff99",
      "extensionButton.prominentBackground": "#0077ff9d",
      "extensionButton.prominentHoverBackground": "#0077ff",
      "gitDecoration.conflictingResourceForeground": "#0077ff",
      "gitDecoration.deletedResourceForeground": "#e67e80",
      "gitDecoration.ignoredResourceForeground": "#f8f8f74d",
      "gitDecoration.modifiedResourceForeground": "#a7c080",
      "gitDecoration.untrackedResourceForeground": "#83c092",
      "multiDiffEditor.border": "#323538",
      "multiDiffEditor.headerBackground": "#373a3d",
      "scmGraph.foreground1": "#7fb2b3",
      "scmGraph.foreground2": "#baa2da",
      "scmGraph.foreground3": "#7eaadb",
      "scmGraph.foreground4": "#baa2da",
      "scmGraph.foreground5": "#bcbcb4",
      "scmGraph.historyItemBaseRefColor": "#baa2da",
      "scmGraph.historyItemHoverAdditionsForeground": "#83c092",
      "scmGraph.historyItemHoverDefaultLabelBackground": "#bbbbb5",
      "scmGraph.historyItemHoverDefaultLabelForeground": "#99998a",
      "scmGraph.historyItemHoverDeletionsForeground": "#e67e80",
      "scmGraph.historyItemHoverLabelForeground": "#99998a",
      "scmGraph.historyItemRefColor": "#7eaadb",
      "scmGraph.historyItemRemoteRefColor": "#7fb2b3",
      "inlineChat.background": "#373a3d",
      "inlineChat.border": "#43464b",
      "inlineChatInput.background": "#303235",
      "inlineChatInput.border": "#43464b",
      "inlineChatInput.focusBorder": "#5b5f66",
      "inlineEdit.gutterIndicator.background": "#bbbbb580",
      "inlineEdit.gutterIndicator.primaryBackground": "#3576beb3",
      "inlineEdit.gutterIndicator.primaryBorder": "#3576be",
      "inlineEdit.gutterIndicator.primaryForeground": "#000000",
      "inlineEdit.gutterIndicator.secondaryBackground": "#004799b3",
      "inlineEdit.gutterIndicator.secondaryBorder": "#004799",
      "inlineEdit.gutterIndicator.secondaryForeground": "#000000",
      "inlineEdit.gutterIndicator.successfulBackground": "#4a935cb3",
      "inlineEdit.gutterIndicator.successfulBorder": "#4a935c",
      "inlineEdit.gutterIndicator.successfulForeground": "#000000",
      "inlineEdit.modifiedBackground": "#83c09226",
      "inlineEdit.modifiedBorder": "#83c092cc",
      "inlineEdit.modifiedChangedLineBackground": "#83c09214",
      "inlineEdit.modifiedChangedTextBackground": "#00000000",
      "inlineEdit.originalBackground": "#d7888426",
      "inlineEdit.originalBorder": "#d78884cc",
      "inlineEdit.originalChangedLineBackground": "#d78884cc",
      "inlineEdit.originalChangedTextBackground": "#00000000",
      "inlineEdit.tabWillAcceptModifiedBorder": "#83c092",
      "inlineEdit.tabWillAcceptOriginalBorder": "#d78884",
      "input.background": "#313337",
      "input.border": "#535454",
      "input.foreground": "#bbbbb5",
      "input.placeholderForeground": "#797a7b",
      "inputOption.activeBackground": "#737981",
      "inputOption.activeBorder": "#00000000",
      "inputOption.activeForeground": "#bbbbb5",
      "inputOption.hoverBackground": "#43464b",
      "inputValidation.errorBackground": "#373a3d",
      "inputValidation.errorBorder": "#e67e80",
      "inputValidation.infoBackground": "#373a3d",
      "inputValidation.infoBorder": "#a7c080",
      "inputValidation.warningBackground": "#373a3d",
      "inputValidation.warningBorder": "#dbbc7f",
      "keybindingLabel.background": "#373a3d",
      "keybindingLabel.border": "#6d6d6d",
      "keybindingLabel.bottomBorder": "#6d6d6d",
      "keybindingLabel.foreground": "#a0a0a0",
      "list.activeSelectionBackground": "#0077ff33",
      "list.activeSelectionForeground": "#bbbbb5",
      "list.dropBackground": "#0077ff15",
      "list.errorForeground": "#e67e80",
      "list.focusBackground": "#0077ff40",
      "list.focusForeground": "#bbbbb5",
      "list.focusAndSelectionOutline": "#0077ffe6",
      "list.focusOutline": "#0077ffe6",
      "list.highlightForeground": "#0077ff",
      "list.hoverBackground": "#4f54584d",
      "list.hoverForeground": "#ffffff",
      "list.inactiveSelectionBackground": "#3392ff0d",
      "list.inactiveSelectionForeground": "#bbbbb5",
      "list.warningForeground": "#dbbc7f",
      "menu.background": "#373a3d",
      "menu.border": "#323538",
      "menu.foreground": "#bcbcb4",
      "menu.selectionBackground": "#3c3f43",
      "menu.selectionForeground": "#d4d4cf",
      "menu.separatorBackground": "#32353880",
      "menubar.selectionBackground": "#3c3f43",
      "menubar.selectionForeground": "#bcbcb4",
      "merge.border": "#323538",
      "merge.commonContentBackground": "#7eaadb30",
      "merge.commonHeaderBackground": "#7eaadb80",
      "merge.currentContentBackground": "#83c09230",
      "merge.currentHeaderBackground": "#83c09280",
      "merge.incomingContentBackground": "#a7c08030",
      "merge.incomingHeaderBackground": "#a7c08080",
      "minimap.background": "#2b2d30",
      "minimap.errorHighlight": "#e67e80",
      "minimap.findMatchHighlight": "#0077ff",
      "minimap.selectionHighlight": "#0077ff",
      "minimap.selectionOccurrenceHighlight": "#0077ff",
      "minimap.warningHighlight": "#dbbc7f",
      "minimapGutter.addedBackground": "#83c092",
      "minimapGutter.deletedBackground": "#e67e80",
      "minimapGutter.modifiedBackground": "#a7c080",
      "notificationCenterHeader.background": "#373a3d",
      "notificationCenterHeader.foreground": "#bbbbb5",
      "notificationLink.foreground": "#0077ff",
      "notifications.background": "#373a3d",
      "notifications.border": "#323538",
      "notifications.foreground": "#bbbbb5",
      "notificationsErrorIcon.foreground": "#d78884",
      "notificationsInfoIcon.foreground": "#7fb2b3",
      "notificationsWarningIcon.foreground": "#7fb2b3",
      "panel.background": "#282a2d",
      "panel.border": "#323538",
      "panel.dropBorder": "#f8f8f780",
      "panelInput.border": "#43464b",
      "panelSection.border": "#323538",
      "panelSectionHeader.background": "#2f3235",
      "panelSectionHeader.border": "#323538",
      "panelSectionHeader.foreground": "#bbbbb5",
      "panelTitle.activeBorder": "#0077ff",
      "panelTitle.activeForeground": "#bcbcb4",
      "panelTitle.inactiveForeground": "#8c8d88",
      "peekView.border": "#323538",
      "peekViewEditor.background": "#35373b",
      "peekViewEditor.matchHighlightBackground": "#373a3d40",
      "peekViewEditor.matchHighlightBorder": "#00000000",
      "peekViewEditorGutter.background": "#35373b",
      "peekViewEditorStickyScroll.background": "#323538",
      "peekViewResult.background": "#313337",
      "peekViewResult.fileForeground": "#bbbbb5",
      "peekViewResult.lineForeground": "#bbbbb5",
      "peekViewResult.matchHighlightBackground": "#0077ff80",
      "peekViewResult.selectionBackground": "#0077ff33",
      "peekViewResult.selectionForeground": "#bbbbb5",
      "peekViewTitle.background": "#373a3d",
      "peekViewTitleDescription.foreground": "#bbbbb5",
      "peekViewTitleLabel.foreground": "#bbbbb5",
      "pickerGroup.border": "#323538",
      "pickerGroup.foreground": "#bbbbb5",
      "profileBadge.background": "#0077ff",
      "profileBadge.foreground": "#2b2d30",
      "progressBar.background": "#0077ff",
      "quickInput.background": "#323538",
      "quickInput.foreground": "#bbbbb5b3",
      "quickInputList.focusBackground": "#0077ff1a",
      "quickInputList.focusForeground": "#ffffff",
      "quickInputList.focusIconForeground": "#bbbbb5",
      "quickInputTitle.background": "#26272a",
      "sash.hoverBorder": "#0077ff50",
      "scrollbar.shadow": "#00000066",
      "scrollbarSlider.activeBackground": "#bbbbb54d",
      "scrollbarSlider.background": "#bbbbb526",
      "scrollbarSlider.hoverBackground": "#bbbbb533",
      "settings.headerForeground": "#bbbbb5",
      "settings.modifiedItemIndicator": "#0077ff",
      "settings.settingsHeaderHoverForeground": "#bbbbb5",
      "sideBar.background": "#26272a",
      "sideBar.border": "#323538",
      "sideBar.foreground": "#bcbcb4cc",
      "sideBarSectionHeader.background": "#26272a",
      "sideBarSectionHeader.border": "#323538",
      "sideBarSectionHeader.foreground": "#bbbbb5",
      "sideBarStickyScroll.background": "#212225",
      "sideBarStickyScroll.shadow": "#00000066",
      "sideBarTitle.foreground": "#f8f8f7",
      "statusBar.background": "#2b2d30",
      "statusBar.border": "#323538",
      "statusBar.debuggingBackground": "#333b55",
      "statusBar.debuggingForeground": "#828aab",
      "statusBar.foreground": "#bbbbb580",
      "statusBar.noFolderBackground": "#26272a",
      "statusBar.noFolderBorder": "#323538",
      "statusBar.noFolderForeground": "#bbbbb5cc",
      "statusBarItem.activeBackground": "#373a3d",
      "statusBarItem.compactHoverBackground": "#0077ffcc",
      "statusBarItem.hoverBackground": "#364268",
      "statusBarItem.hoverForeground": "#bbbbb5",
      "statusBarItem.prominentBackground": "#2b2d30",
      "statusBarItem.prominentForeground": "#000000",
      "statusBarItem.prominentHoverBackground": "#43464b",
      "statusBarItem.prominentHoverForeground": "#2b2d30",
      "statusBarItem.errorBackground": "#e67e80",
      "statusBarItem.errorForeground": "#551012",
      "statusBarItem.errorHoverBackground": "#eea9aa",
      "statusBarItem.errorHoverForeground": "#2b2d30",
      "statusBarItem.offlineBackground": "#baa2da",
      "statusBarItem.offlineForeground": "#3b2459",
      "statusBarItem.offlineHoverBackground": "#d5c6e9",
      "statusBarItem.offlineHoverForeground": "#2b2d30",
      "statusBarItem.remoteBackground": "#baa2da",
      "statusBarItem.remoteForeground": "#3b2459",
      "statusBarItem.remoteHoverBackground": "#d5c6e9",
      "statusBarItem.remoteHoverForeground": "#2b2d30",
      "statusBarItem.warningBackground": "#dbbc7f",
      "statusBarItem.warningForeground": "#473614",
      "statusBarItem.warningHoverBackground": "#e6d1a7",
      "statusBarItem.warningHoverForeground": "#2b2d30",
      "tab.activeBackground": "#2b2d30",
      "tab.activeBorder": "#2b2d30",
      "tab.hoverForeground": "#bcbcb4",
      "tab.activeBorderTop": "#0077ff",
      "tab.activeForeground": "#bbbbb5",
      "tab.border": "#323538",
      "tab.hoverBackground": "#393c40",
      "tab.inactiveBackground": "#26272a",
      "tab.inactiveForeground": "#8d8e8a",
      "tab.lastPinnedBorder": "#323538",
      "terminal.ansiBlack": "#2b2d30",
      "terminal.ansiBlue": "#a7c080",
      "terminal.ansiBrightBlack": "#585c63",
      "terminal.ansiBrightBlue": "#addd64",
      "terminal.ansiBrightCyan": "#b78fee",
      "terminal.ansiBrightGreen": "#67dc84",
      "terminal.ansiBrightMagenta": "#b78fee",
      "terminal.ansiBrightRed": "#fd676a",
      "terminal.ansiBrightWhite": "#ececea",
      "terminal.ansiBrightYellow": "#65a9f4",
      "terminal.ansiCyan": "#baa2da",
      "terminal.ansiGreen": "#83c092",
      "terminal.ansiMagenta": "#baa2da",
      "terminal.ansiRed": "#e67e80",
      "terminal.ansiWhite": "#bbbbb5",
      "terminal.ansiYellow": "#7eaadb",
      "terminal.background": "#282a2d",
      "terminal.foreground": "#bbbbb5",
      "terminal.selectionForeground": "#bbbbb5",
      "terminalCursor.background": "#2b2d30",
      "terminalCursor.foreground": "#0077ff",
      "terminalStickyScrollHover.background": "#323538",
      "textBlockQuote.background": "#a7c08033",
      "textBlockQuote.border": "#a7c080b9",
      "textCodeBlock.background": "#a7c08033",
      "textLink.activeForeground": "#0077ff",
      "textLink.foreground": "#0077ff",
      "textPreformat.background": "#333b55",
      "textPreformat.foreground": "#0077ff",
      "textSeparator.foreground": "#0077ff",
      "titleBar.activeBackground": "#26272a",
      "titleBar.activeForeground": "#bbbbb566",
      "titleBar.border": "#323538",
      "titleBar.inactiveBackground": "#26272a",
      "titleBar.inactiveForeground": "#bbbbb566",
      "toolbar.activeBackground": "#f8f8f780",
      "toolbar.hoverBackground": "#34373b",
      "tree.indentGuidesStroke": "#bcbcb433",
      "walkThrough.embeddedEditorBackground": "#2b2d30",
      "welcomePage.progress.background": "#373a3d",
      "welcomePage.progress.foreground": "#0077ff",
      "welcomePage.tileBackground": "#bbbbb51a",
      "welcomePage.tileBorder": "#bbbbb533",
      "welcomePage.tileHoverBackground": "#bbbbb533",
      "widget.shadow": "#00000033",
      "widget.border": "#535454"
    },
    "tokenColors": [
      {
        "scope": [
          "support.module.elm",
          "entity.other.inherited-class.python",
          "variable.other.object",
          "support.other.namespace.php",
          "entity.other.attribute-name.namespace.xml",
          "record.accessor",
          "entity.name.record.field.accessor",
          "storage.modifier.import.java",
          "storage.modifier.import.groovy",
          "meta.import.swift entity.name.type.swift",
          "meta.member.access.python",
          "variable.other.property.ts",
          "variable.other.property.js",
          "constant.language.symbol.elixir",
          "punctuation.tag.liquid support.class.liquid",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
          "source.cpp meta.block.class.cpp meta.body.class.cpp",
          "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.quoted.docstring.multi",
          "comment.block.documentation source"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#bcbcb466"
        }
      },
      {
        "scope": [
          "meta.section.struct.go variable.other.field.go",
          "meta.section.struct.go variable.other.declaration.go",
          "source",
          "support",
          "constant.character.entity.named",
          "meta.jsx.children",
          "source.lua",
          "text.html.derivative",
          "source.graphql meta.selections variable.other.alias.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
          "source.graphql variable.arguments.graphql",
          "JSXNested"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "constant",
          "support.constant.core.php"
        ],
        "settings": {
          "foreground": "#d78884"
        }
      },
      {
        "scope": [
          "entity.name.function.decorator",
          "meta.decorator entity.name.function",
          "meta.decorator punctuation.decorator",
          "punctuation.definition.decorator",
          "meta.decorator variable.other.readwrite.ts",
          "variable.parameter.gdscript",
          "entity.name.variable.parameter",
          "variable.parameter"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "keyword.control.export",
          "support.type.object.module",
          "support.module",
          "support.node",
          "support.other.module",
          "entity.name.type.module",
          "entity.name.type.class.module",
          "keyword.control.module"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "meta.definition.method",
          "meta.function-call",
          "meta.function",
          "meta.method.declaration",
          "meta.function-call support",
          "variable.language.super.ts",
          "source.directive",
          "meta.function-call.generic",
          "meta.method-call.static.php",
          "meta.method-call.php",
          "meta.class storage.type",
          "meta.method.groovy",
          "meta.bracket.square.access",
          "entity.name.function-call.elixir",
          "punctuation.output.liquid support.variable.liquid",
          "meta.function.echo.edge source.js keyword.operator.error-control.js",
          "entity.name.type.variant.gdscript",
          "entity.name.function.powershell",
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "keyword.control.import",
          "meta.module.name.elm support",
          "meta.import.elm support",
          "keyword.control.at-rule",
          "punctuation.definition.keyword",
          "variable.control.import.include",
          "keyword.other.import.java"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.operator.pointer.go",
          "keyword.control",
          "keyword.control.conditional",
          "storage.modifier",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.begin.blade",
          "keyword.end.blade",
          "keyword.blade",
          "keyword.type-alias",
          "keyword.type",
          "support.class.console",
          "keyword.other.await",
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
          "keyword.other.new",
          "keyword.other.phpdoc",
          "keyword.other.use.php",
          "keyword.operator.logical.python",
          "keyword.other.import.static.groovy",
          "keyword.other.import.groovy",
          "punctuation.definition.attribute.swift",
          "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
          "meta.directive.on.svelte entity.name.type.svelte",
          "keyword.other.special-method.elixir",
          "keyword.edge",
          "entity.name.function.edge",
          "support.constant.edge",
          "keyword.other.gdscript",
          "keyword.other.onready.gdscript",
          "source.graphql meta.fragment.graphql keyword.on.graphql",
          "source.graphql meta.type.interface.graphql keyword.implements.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
          "keyword.operator.class.php",
          "keyword.operator.spread.php",
          "keyword.operator.type.php",
          "keyword.operator.increment-decrement.php",
          "keyword.operator.increment-increment.php",
          "keyword.operator.string.php",
          "keyword.operator.ternary.php",
          "keyword.operator.variadic.php",
          "keyword.operator.nullable-type.php",
          "keyword.other.use-as.php",
          "keyword.import.go",
          "keyword.operator.address.go",
          "keyword.operator.null-coalescing",
          "keyword.operator.arrow",
          "keyword.struct.go",
          "keyword.operator.liquid",
          "keyword.operator.optional.ts",
          "keyword.cmake",
          "keyword.codetag.notation",
          "keyword.operator.pipe.shell"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "meta.object-literal.key",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "keyword.other.definition.ini",
          "support.type.property-name",
          "entity.name.tag.yaml",
          "storage.type.function.arrow.tsx"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "keyword.operator",
          "keyword.operator.comparison",
          "keyword.operator.lua",
          "keyword.operator.assignment",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.math"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "keyword.operator.type.annotation.tsx",
          "punctuation",
          "attribute_value",
          "meta.brace",
          "punctuation.definition.parameters",
          "punctuation.definition.template-expression",
          "keyword.other",
          "punctuation.separator",
          "punctuation.definition.generic.begin",
          "punctuation.definition.generic.end",
          "meta.function.type-declaration",
          "keyword.other.colon.elm",
          "meta.record.field.elm keyword.other.elm",
          "keyword.other.period.elm",
          "meta.tag.xml",
          "meta.tag.preprocessor.xml",
          "punctuation.definition.block",
          "punctuation.accessor",
          "constant.name.attribute.tag.pug",
          "string.interpolated.pug",
          "keyword.other.whitespace.liquid",
          "meta.tag.template.block.twig",
          "meta.tag.template.value.twig",
          "begin.bracket",
          "end.bracket",
          "text.html.twig meta.tag.inline.any",
          "text.html.twig meta.tag.block.any",
          "support.function.construct.begin.blade",
          "support.function.construct.end.blade source.php",
          "support.function.construct.end.blade",
          "meta.function.echo.blade source.php",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "text.html.vue-html meta.tag.block.any",
          "keyword.operator.assignment.tsx",
          "meta.definition.method.signature.java",
          "meta.class.body.groovy",
          "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
          "punctuation.definition.list.begin.erlang",
          "meta.expression.parenthesized",
          "meta.definition.function.swift meta.parameter-clause.swift",
          "source.swift meta.function-call.swift",
          "punctuation.section.embedded.end.swift source.swift",
          "source.lua",
          "meta.function.lua",
          "punctuation.definition.keyword.svelte",
          "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
          "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
          "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
          "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
          "punctuation.output.liquid",
          "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
          "JSXAttrs keyword.operator.assignment.jsx",
          "meta.tag.attributes.js keyword.operator.assignment.js"
        ],
        "settings": {
          "foreground": "#bcbcb466"
        }
      },
      {
        "scope": [
          "entity.name.package.go",
          "variable.language.this",
          "variable.language.special.self",
          "variable.parameter.function.language.special.self",
          "variable.language.this.php punctuation.definition.variable.php",
          "meta.class.body.php storage.type.php",
          "variable.parameter.function.swift entity.name.function.swift",
          "variable.other.jsdoc",
          "support.variable.drive.powershell",
          "entity.other.attribute.lua"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "storage",
          "meta.var.expr storage.type",
          "storage.type.function",
          "keyword.function",
          "storage.type.class",
          "storage.type.property",
          "keyword.other",
          "keyword.local.lua",
          "entity.name.class",
          "meta.function.lua keyword.control.lua",
          "storage.type.enum",
          "storage.type.type",
          "entity.name.type.class.java",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.name.type.class.groovy",
          "storage.type.rust",
          "entity.name.type.class.swift",
          "source.svelte meta.script.svelte source.ts entity.name.label.ts",
          "meta.directive.on.svelte keyword.control.svelte",
          "storage.type.const.gdscript",
          "storage.type.var.gdscript",
          "source.graphql declaration.meta.type keyword",
          "source.graphql meta.type.interface.graphql keyword.type.graphql",
          "source.graphql keyword.schema.graphql",
          "source.graphql keyword.operation.graphql",
          "source.graphql meta.enum.graphql keyword.enum.graphql",
          "source.graphql meta.fragment.graphql keyword.fragment.graphql",
          "storage.type.trait.php",
          "keyword.type.go",
          "keyword.var.go",
          "storage.type.powershell",
          "keyword.const.go",
          "keyword.storage.modifier"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "storage.type.interface",
          "keyword.control.export.tsx"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "string",
          "string.template",
          "string.quoted.single",
          "punctuation.quasi.element",
          "string.other.link",
          "constant.character.escape.regexp",
          "variable.parameter.url",
          "constant.other.symbol.quoted.single.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
          "meta.import.ts punctuation.definition.variable.svelte",
          "punctuation.definition.string.end.html source.css-ignored-vscode",
          "text.html.edge punctuation.definition.variable.js",
          "string.unquoted.plain.out.yaml",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "punctuation.definition.string.end.html source.css",
          "string.quoted.double.html source.css",
          "punctuation.definition.subshell.single.shell",
          "punctuation.section.parenthese.shell"
        ],
        "settings": {
          "foreground": "#bbab97"
        }
      },
      {
        "scope": [
          "string.quoted.docstring.multi.python",
          "string.quoted.double.block.python punctuation.definition.string.end.python",
          "string.quoted.double.block.python punctuation.definition.string.begin.python",
          "string.quoted.double.block.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python"
        ],
        "settings": {
          "foreground": "#86aad3cc"
        }
      },
      {
        "scope": [
          "entity.name.type.interface",
          "storage.type",
          "entity.other.inherited-class",
          "keyword.type",
          "storage.type.java",
          "storage.type.primitive.java",
          "storage.type.generic.java",
          "keyword.other.type",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php source.php",
          "punctuation.section.embedded.end.php",
          "storage.type.object.array.java",
          "storage.type.primitive.groovy",
          "storage.type.groovy",
          "meta.definition.type.body.swift meta.function-call.swift",
          "meta.definition.type.class.swift meta.inheritance-clause.swift",
          "variable.other.constant.elixir",
          "source.graphql declaration.meta.type support",
          "source.graphql meta.selections",
          "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
          "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
          "entity.name.type.class.php",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.other.alias.php",
          "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "punctuation.terminator",
          "support.variable",
          "meta.definition.variable",
          "variable",
          "variable.language",
          "entity.name.type.class.js",
          "entity.name.variable",
          "support.variable.magic",
          "meta.method.body",
          "entity.name.variable",
          "punctuation.definition.variable",
          "meta.class variable.object.property",
          "variable.other.constant entity.name.function",
          "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
          "meta.definition.variable.name.groovy",
          "meta.body.struct.cpp",
          "parameter.variable.function.elixir",
          "meta.directive.edge source.js",
          "meta.function.echo.edge source.js",
          "text.html.edge meta.function.echo.edge meta.function-call.js",
          "source.css variable.parameter.keyframe-list.css",
          "source.css meta.property-value.css",
          "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
          "source.css.scss meta.property-value.scss",
          "entity.name.variable.tuple-element",
          "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
          "support.variable.automatic.powershell",
          "storage.source.cmake",
          "entity.source.cmake"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "source.elm constant.type-constructor",
          "support.class"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "source.elm storage.type"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.other.html",
          "support.class.component.tsx",
          "support.class.component.html"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.to-file",
          "source.diff markup.inserted.diff",
          "source.diff punctuation.definition.to-file.diff",
          "source.diff punctuation.definition.inserted.diff"
        ],
        "settings": {
          "foreground": "#bbab97"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.from-file.diff",
          "source.diff meta.diff.header.from-file",
          "source.diff markup.deleted.diff",
          "source.diff punctuation.definition.deleted.diff"
        ],
        "settings": {
          "foreground": "#d78884"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.command"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.range.diff",
          "source.diff meta.diff.range.unified"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "support.variable.liquid",
          "support.class.liquid"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "text.html.basic entity.name",
          "source.js-ignored-vscode",
          "meta.embedded.block.blade constant.other.php",
          "meta.embedded.block.blade keyword.operator.comparison.php",
          "meta.embedded.block.blade keyword.operator.arithmetic.php",
          "meta.tag.start.svelte keyword.control.svelte",
          "meta.tag.end.svelte keyword.control.svelte"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "meta.tag.sgml.doctype.html",
          "punctuation.definition.tag",
          "meta.tag.block.any",
          "meta.tag.block.any.html",
          "meta.tag.inline.any",
          "source.css-ignored-vscode",
          "meta.tag.metadata.style.end.html",
          "text.html.vue invalid.illegal.character-not-allowed-here.html",
          "meta.tag.inline.i.start.html",
          "meta.tag.structure.div.start.html",
          "punctuation.definition.tag.end.html.vue",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": "#7fb2b3b3"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "entity.name.tag.liquid",
          "invalid.deprecated.entity.other.attribute-name",
          "meta.embedded.block.blade storage.type.php"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.raw.markdown",
          "markup.fenced_code.block.markdown",
          "markup.fenced_code.block.markdown punctuation",
          "markup.raw.block.markdown"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "entity.name.section",
          "markup.heading.setext"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "markup.underline.link",
          "markup.underline.link.image"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "markup.bold",
          "punctuation.definition.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "markup.strikethrough",
          "punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#d78884"
        }
      },
      {
        "scope": [
          "markup.italic",
          "punctuation.definition.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "markup.quote",
          "markup.quote.markdown punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
          "meta.embedded.block.frontmatter punctuation.definition.tag.end",
          "meta.embedded.block.frontmatter string.unquoted.plain.out"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f8f8f7"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.class punctuation.definition.entity",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "support.type.vendored.property-name",
          "meta.property-list entity.name.tag.css",
          "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
          "meta.property-list meta.property-name",
          "source.css.scss meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#bbbbb5"
        }
      },
      {
        "scope": [
          "source.css.scss entity.other.attribute-name.id ",
          "source.css entity.other.attribute-name.id ",
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#baa2da"
        }
      },
      {
        "scope": [
          "entity.name.tag.reference",
          "meta.property-list"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      },
      {
        "scope": [
          "keyword.other.unit"
        ],
        "settings": {
          "foreground": "#d78884"
        }
      },
      {
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "meta.property-value.css",
          "meta.attribute.style.html",
          "constant.language.null",
          "constant.language.boolean",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "#7eaadb"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#d78884"
        }
      },
      {
        "scope": [
          "entity.name.tag.css",
          "meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#7fb2b3"
        }
      }
    ],
    "semanticTokenColors": {
      "class.declaration": {
        "foreground": "#baa2da"
      },
      "class.decorator": {
        "foreground": "#baa2da"
      },
      "enumMember": {
        "foreground": "#baa2da"
      },
      "meta.decorator": {
        "foreground": "#baa2da"
      },
      "namespace": {
        "foreground": "#bbab97"
      },
      "parameter": {
        "foreground": "#bcbcb4"
      },
      "property": {
        "foreground": "#7fb2b3"
      },
      "property.declaration": {
        "foreground": "#bcbcb4"
      },
      "variable": {
        "foreground": "#bcbcb4"
      },
      "variable.defaultLibrary": {
        "foreground": "#baa2da"
      }
    }
  },
  {
    "id": "delirium-jetbrain-light",
    "label": "Delirium JetBrains Light",
    "name": "DeliriumTheme Jetbrain-light",
    "type": "light",
    "colors": {
      "contrastActiveBorder": "#00000000",
      "contrastBorder": "#00000000",
      "descriptionForeground": "#525252cc",
      "disabledForeground": "#5252524d",
      "errorForeground": "#e67e80",
      "focusBorder": "#c4c4c4",
      "foreground": "#000000",
      "icon.foreground": "#0000004d",
      "selection.background": "#0063d361",
      "activityBar.activeBackground": "#0063d326",
      "activityBar.activeBorder": "#0063d3",
      "activityBar.background": "#eeeeee",
      "activityBar.border": "#e3e3e3",
      "activityBar.dropBorder": "#444b6133",
      "activityBar.foreground": "#0063d3",
      "activityBar.inactiveForeground": "#b6bdb9",
      "activityBarBadge.background": "#0063d3",
      "activityBarBadge.foreground": "#eeeeee",
      "activityBarTop.activeBorder": "#0063d3",
      "activityBarTop.dropBorder": "#444b6133",
      "activityBarTop.foreground": "#0063d3",
      "activityBarTop.inactiveForeground": "#c2c2c2",
      "badge.background": "#0063d3",
      "badge.foreground": "#eeeeee",
      "breadcrumb.background": "#f7f7f7",
      "breadcrumb.foreground": "#444b61cc",
      "breadcrumbPicker.background": "#ffffff",
      "button.background": "#0063d3cc",
      "button.border": "#00000026",
      "button.foreground": "#000000cc",
      "button.hoverBackground": "#0063d399",
      "button.secondaryBackground": "#e5e5e5",
      "button.secondaryForeground": "#525252",
      "button.secondaryHoverBackground": "#dedede",
      "button.separator": "#0000004d",
      "charts.blue": "#008D90",
      "charts.foreground": "#525252",
      "charts.green": "#8C6C41",
      "charts.lines": "#525252",
      "charts.orange": "#008D90",
      "charts.purple": "#6B2FBA",
      "charts.red": "#AA3731",
      "charts.yellow": "#0063d3",
      "checkbox.foreground": "#525252",
      "commandCenter.activeBackground": "#fcfcfc61",
      "commandCenter.activeForeground": "#0000008f",
      "commandCenter.background": "#f7f7f7",
      "commandCenter.border": "#e3e3e3",
      "commandCenter.foreground": "#444b61",
      "debugConsole.errorForeground": "#e67e80",
      "debugConsole.infoForeground": "#a7c080",
      "debugConsole.warningForeground": "#dbbc7f",
      "debugExceptionWidget.background": "#fcfcfc",
      "debugExceptionWidget.border": "#e3e3e3",
      "debugIcon.breakpointCurrentStackframeForeground": "#e67e80",
      "debugIcon.breakpointDisabledForeground": "#e67e8080",
      "debugIcon.breakpointForeground": "#e67e80",
      "debugIcon.continueForeground": "#a7c080",
      "debugIcon.disconnectForeground": "#e67e80",
      "debugIcon.pauseForeground": "#e67e80",
      "debugIcon.restartForeground": "#83c092",
      "debugIcon.startForeground": "#83c092",
      "debugIcon.stepBackForeground": "#a7c080",
      "debugIcon.stepIntoForeground": "#a7c080",
      "debugIcon.stepOutForeground": "#a7c080",
      "debugIcon.stepOverForeground": "#a7c080",
      "debugIcon.stopForeground": "#e67e80",
      "debugToolBar.background": "#e5e7f4",
      "diffEditor.border": "#e3e3e3",
      "diffEditor.diagonalFill": "#ffffff",
      "diffEditor.insertedLineBackground": "#75ce8b1a",
      "diffEditor.insertedTextBackground": "#75ce8b1a",
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.move.border": "#0063d34d",
      "diffEditor.moveActive.border": "#0063d3b3",
      "diffEditor.removedLineBackground": "#f272751a",
      "diffEditor.removedTextBackground": "#f272751a",
      "diffEditor.removedTextBorder": "#00000000",
      "diffEditor.unchangedCodeBackground": "#ebebeb",
      "diffEditor.unchangedRegionBackground": "#ebebeb",
      "diffEditor.unchangedRegionShadow": "#00000012",
      "diffEditorGutter.insertedLineBackground": "#00000000",
      "diffEditorGutter.removedLineBackground": "#00000000",
      "diffEditorOverview.insertedForeground": "#83c09226",
      "diffEditorOverview.removedForeground": "#e67e8030",
      "dropdown.background": "#f2f2f2",
      "dropdown.border": "#dedede",
      "dropdown.foreground": "#525252",
      "dropdown.listBackground": "#f2f2f2",
      "editor.background": "#f7f7f7",
      "editor.findMatchBackground": "#0063d330",
      "editor.findMatchBorder": "#0063d361",
      "editor.findMatchHighlightBackground": "#0063d33d",
      "editor.findMatchHighlightBorder": "#0063d35c",
      "editor.foldBackground": "#0000000d",
      "editor.foldPlaceholderForeground": "#444b61",
      "editor.foreground": "#525252",
      "editor.hoverHighlightBackground": "#0063d34d",
      "editor.inactiveSelectionBackground": "#0063d34d",
      "editor.lineHighlightBackground": "#0063d30f",
      "editor.lineHighlightBorder": "#0063d308",
      "editor.linkedEditingBackground": "#008d9033",
      "editor.rangeHighlightBackground": "#0063d33d",
      "editor.selectionBackground": "#0063d34d",
      "editor.selectionForeground": "#525252",
      "editor.selectionHighlightBackground": "#0063d314",
      "editor.selectionHighlightBorder": "#0063d34d",
      "editor.wordHighlightBackground": "#0063d31f",
      "editor.wordHighlightBorder": "#0063d33d",
      "editor.wordHighlightStrongBackground": "#0063d33d",
      "editorBracketHighlight.foreground1": "#0063d3",
      "editorBracketHighlight.foreground2": "#6B2FBA",
      "editorBracketHighlight.foreground3": "#008D90",
      "editorBracketHighlight.foreground4": "#6B2FBA",
      "editorBracketHighlight.foreground5": "#6B2FBA",
      "editorBracketHighlight.foreground6": "#444b61",
      "editorBracketHighlight.unexpectedBracket.foreground": "#e67e80",
      "editorBracketMatch.background": "#0063d34d",
      "editorBracketMatch.border": "#0063d373",
      "editorCodeLens.foreground": "#00000080",
      "editorCursor.background": "#d3e8ff",
      "editorCursor.foreground": "#0063d3",
      "editorError.border": "#00000000",
      "editorError.foreground": "#e67e80",
      "editorGhostText.border": "#00000000",
      "editorGhostText.foreground": "#52525270",
      "editorGroup.border": "#e3e3e3",
      "editorGroup.dropBackground": "#0063d314",
      "editorGroupHeader.border": "#00000000",
      "editorGroupHeader.noTabsBackground": "#f7f7f7",
      "editorGroupHeader.tabsBackground": "#eeeeee",
      "editorGroupHeader.tabsBorder": "#e3e3e3",
      "editorGutter.addedBackground": "#83c092cc",
      "editorGutter.background": "#f7f7f7",
      "editorGutter.commentRangeForeground": "#fcfcfc",
      "editorGutter.deletedBackground": "#e67e80cc",
      "editorGutter.modifiedBackground": "#a7c080cc",
      "editorHoverWidget.background": "#fcfcfc",
      "editorHoverWidget.border": "#e3e3e3",
      "editorIndentGuide.activeBackground1": "#444b6133",
      "editorIndentGuide.background1": "#444b610d",
      "editorInfo.border": "#00000000",
      "editorInlayHint.background": "#0000001a",
      "editorInlayHint.foreground": "#000000b3",
      "editorInlayHint.parameterBackground": "#0000001a",
      "editorInlayHint.parameterForeground": "#444b61b3",
      "editorInlayHint.typeBackground": "#444b611a",
      "editorInlayHint.typeForeground": "#444b61b3",
      "editorLineNumber.activeForeground": "#444b61",
      "editorLineNumber.foreground": "#c5c7d2",
      "editorLink.activeForeground": "#525252",
      "editorMarkerNavigation.background": "#eeeeee",
      "editorMarkerNavigationError.background": "#e67e808f",
      "editorMarkerNavigationInfo.background": "#a7c0808f",
      "editorMarkerNavigationWarning.background": "#dbbc7f8f",
      "editorOverviewRuler.addedForeground": "#83c09280",
      "editorOverviewRuler.border": "#e3e3e3",
      "editorOverviewRuler.deletedForeground": "#e67e8080",
      "editorOverviewRuler.errorForeground": "#e67e80",
      "editorOverviewRuler.incomingContentForeground": "#83c09280",
      "editorOverviewRuler.infoForeground": "#a7c08080",
      "editorOverviewRuler.modifiedForeground": "#a7c08080",
      "editorOverviewRuler.selectionHighlightForeground": "#0063d380",
      "editorOverviewRuler.warningForeground": "#dbbc7f",
      "editorRuler.foreground": "#444b610d",
      "editorStickyScroll.shadow": "#00000012",
      "editorStickyScrollHover.background": "#ffffff",
      "editorSuggestWidget.background": "#fcfcfc",
      "editorSuggestWidget.border": "#e3e3e3",
      "editorSuggestWidget.foreground": "#444b61",
      "editorSuggestWidget.highlightForeground": "#0063d3",
      "editorSuggestWidget.selectedBackground": "#eaeaea",
      "editorSuggestWidget.selectedIconForeground": "#525252",
      "editorUnnecessaryCode.border": "#00000000",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.border": "#00000000",
      "editorWarning.foreground": "#dbbc7f",
      "editorWhitespace.foreground": "#444b6160",
      "editorWidget.background": "#fcfcfc",
      "editorWidget.border": "#dedede",
      "editorWidget.resizeBorder": "#0063d350",
      "errorLens.errorForeground": "#e67e80fc",
      "errorLens.hintForeground": "#a7c080fc",
      "errorLens.infoForeground": "#a7c080fc",
      "errorLens.warningForeground": "#dbbc7ffc",
      "extensionButton.background": "#0063d380",
      "extensionButton.foreground": "#000000",
      "extensionButton.hoverBackground": "#0063d399",
      "extensionButton.prominentBackground": "#0063d39d",
      "extensionButton.prominentHoverBackground": "#0063d3",
      "gitDecoration.conflictingResourceForeground": "#0063d3",
      "gitDecoration.deletedResourceForeground": "#e67e80",
      "gitDecoration.ignoredResourceForeground": "#444b614d",
      "gitDecoration.modifiedResourceForeground": "#a7c080",
      "gitDecoration.untrackedResourceForeground": "#83c092",
      "multiDiffEditor.border": "#e3e3e3",
      "multiDiffEditor.headerBackground": "#eaeaea",
      "scmGraph.foreground1": "#008D90",
      "scmGraph.foreground2": "#6B2FBA",
      "scmGraph.foreground3": "#0063d3",
      "scmGraph.foreground4": "#6B2FBA",
      "scmGraph.foreground5": "#444b61",
      "scmGraph.historyItemBaseRefColor": "#6B2FBA",
      "scmGraph.historyItemHoverAdditionsForeground": "#83c092",
      "scmGraph.historyItemHoverDefaultLabelBackground": "#000000",
      "scmGraph.historyItemHoverDefaultLabelForeground": "#000000",
      "scmGraph.historyItemHoverDeletionsForeground": "#e67e80",
      "scmGraph.historyItemHoverLabelForeground": "#000000",
      "scmGraph.historyItemRefColor": "#0063d3",
      "scmGraph.historyItemRemoteRefColor": "#008D90",
      "inlineChat.background": "#ffffff",
      "inlineChat.border": "#dedede",
      "inlineChatInput.background": "#fcfcfc",
      "inlineChatInput.border": "#dedede",
      "inlineChatInput.focusBorder": "#c4c4c4",
      "inlineEdit.gutterIndicator.background": "#00000080",
      "inlineEdit.gutterIndicator.primaryBackground": "#3a96ffb3",
      "inlineEdit.gutterIndicator.primaryBorder": "#3a96ff00",
      "inlineEdit.gutterIndicator.primaryForeground": "#000000",
      "inlineEdit.gutterIndicator.secondaryBackground": "#3a96ffb3",
      "inlineEdit.gutterIndicator.secondaryBorder": "#3a96ff00",
      "inlineEdit.gutterIndicator.secondaryForeground": "#000000",
      "inlineEdit.gutterIndicator.successfulBackground": "#c7e2cdb3",
      "inlineEdit.gutterIndicator.successfulBorder": "#c7e2cd00",
      "inlineEdit.gutterIndicator.successfulForeground": "#000000",
      "inlineEdit.modifiedBackground": "#83c09226",
      "inlineEdit.modifiedBorder": "#83c092cc",
      "inlineEdit.modifiedChangedLineBackground": "#83c09214",
      "inlineEdit.modifiedChangedTextBackground": "#00000000",
      "inlineEdit.originalBackground": "#aa373126",
      "inlineEdit.originalBorder": "#aa3731cc",
      "inlineEdit.originalChangedLineBackground": "#aa3731cc",
      "inlineEdit.originalChangedTextBackground": "#00000000",
      "inlineEdit.tabWillAcceptModifiedBorder": "#83c092",
      "inlineEdit.tabWillAcceptOriginalBorder": "#AA3731",
      "input.background": "#f2f2f2",
      "input.border": "#dedede",
      "input.foreground": "#525252",
      "input.placeholderForeground": "#ababab",
      "inputOption.activeBackground": "#ababab",
      "inputOption.activeBorder": "#00000000",
      "inputOption.activeForeground": "#525252",
      "inputOption.hoverBackground": "#dedede",
      "inputValidation.errorBackground": "#fcfcfc",
      "inputValidation.errorBorder": "#e67e80",
      "inputValidation.infoBackground": "#fcfcfc",
      "inputValidation.infoBorder": "#a7c080",
      "inputValidation.warningBackground": "#fcfcfc",
      "inputValidation.warningBorder": "#dbbc7f",
      "keybindingLabel.background": "#fcfcfc",
      "keybindingLabel.border": "#444b61",
      "keybindingLabel.bottomBorder": "#444b61",
      "keybindingLabel.foreground": "#000000",
      "list.activeSelectionBackground": "#0063d31a",
      "list.activeSelectionForeground": "#525252",
      "list.dropBackground": "#0063d315",
      "list.errorForeground": "#e67e80",
      "list.focusBackground": "#0063d340",
      "list.focusForeground": "#000000",
      "list.focusAndSelectionOutline": "#0063d3e6",
      "list.focusOutline": "#0063d3e6",
      "list.highlightForeground": "#0063d3",
      "list.hoverBackground": "#444b611a",
      "list.hoverForeground": "#000000",
      "list.inactiveSelectionBackground": "#004ba00d",
      "list.inactiveSelectionForeground": "#525252",
      "list.warningForeground": "#dbbc7f",
      "menu.background": "#fcfcfc",
      "menu.border": "#e3e3e3",
      "menu.foreground": "#444b61",
      "menu.selectionBackground": "#eeeeee",
      "menu.selectionForeground": "#1a1d25",
      "menu.separatorBackground": "#e3e3e380",
      "menubar.selectionBackground": "#e5e5e5",
      "menubar.selectionForeground": "#444b61",
      "merge.border": "#e3e3e3",
      "merge.commonContentBackground": "#0063d330",
      "merge.commonHeaderBackground": "#0063d380",
      "merge.currentContentBackground": "#83c09230",
      "merge.currentHeaderBackground": "#83c09280",
      "merge.incomingContentBackground": "#a7c08030",
      "merge.incomingHeaderBackground": "#a7c08080",
      "minimap.background": "#f7f7f7",
      "minimap.errorHighlight": "#e67e80",
      "minimap.findMatchHighlight": "#0063d3",
      "minimap.selectionHighlight": "#0063d3",
      "minimap.selectionOccurrenceHighlight": "#0063d3",
      "minimap.warningHighlight": "#dbbc7f",
      "minimapGutter.addedBackground": "#83c092",
      "minimapGutter.deletedBackground": "#e67e80",
      "minimapGutter.modifiedBackground": "#a7c080",
      "notificationCenterHeader.background": "#fcfcfc",
      "notificationCenterHeader.foreground": "#525252",
      "notificationLink.foreground": "#0063d3",
      "notifications.background": "#fcfcfc",
      "notifications.border": "#e3e3e3",
      "notifications.foreground": "#000000",
      "notificationsErrorIcon.foreground": "#AA3731",
      "notificationsInfoIcon.foreground": "#008D90",
      "notificationsWarningIcon.foreground": "#008D90",
      "panel.background": "#f2f2f2",
      "panel.border": "#e3e3e3",
      "panel.dropBorder": "#444b6180",
      "panelInput.border": "#dedede",
      "panelSection.border": "#e3e3e3",
      "panelSectionHeader.background": "#e5e5e5",
      "panelSectionHeader.border": "#e3e3e3",
      "panelSectionHeader.foreground": "#525252",
      "panelTitle.activeBorder": "#0063d3",
      "panelTitle.activeForeground": "#444b61",
      "panelTitle.inactiveForeground": "#75798a",
      "peekView.border": "#e3e3e3",
      "peekViewEditor.background": "#ffffff",
      "peekViewEditor.matchHighlightBackground": "#fcfcfc40",
      "peekViewEditor.matchHighlightBorder": "#00000000",
      "peekViewEditorGutter.background": "#ffffff",
      "peekViewEditorStickyScroll.background": "#ffffff",
      "peekViewResult.background": "#fdfdfd",
      "peekViewResult.fileForeground": "#525252",
      "peekViewResult.lineForeground": "#000000",
      "peekViewResult.matchHighlightBackground": "#0063d380",
      "peekViewResult.selectionBackground": "#0063d333",
      "peekViewResult.selectionForeground": "#525252",
      "peekViewTitle.background": "#ffffff",
      "peekViewTitleDescription.foreground": "#525252",
      "peekViewTitleLabel.foreground": "#525252",
      "pickerGroup.border": "#e3e3e3",
      "pickerGroup.foreground": "#525252",
      "profileBadge.background": "#0063d3",
      "profileBadge.foreground": "#f7f7f7",
      "progressBar.background": "#0063d3",
      "quickInput.background": "#ffffff",
      "quickInput.foreground": "#000000",
      "quickInputList.focusBackground": "#0063d31a",
      "quickInputList.focusForeground": "#000000",
      "quickInputList.focusIconForeground": "#525252",
      "quickInputTitle.background": "#eeeeee",
      "sash.hoverBorder": "#0063d350",
      "scrollbar.shadow": "#00000012",
      "scrollbarSlider.activeBackground": "#5252524d",
      "scrollbarSlider.background": "#52525226",
      "scrollbarSlider.hoverBackground": "#52525233",
      "settings.headerForeground": "#525252",
      "settings.modifiedItemIndicator": "#0063d3",
      "settings.settingsHeaderHoverForeground": "#525252",
      "sideBar.background": "#eeeeee",
      "sideBar.border": "#e3e3e3",
      "sideBar.foreground": "#444b61cc",
      "sideBarSectionHeader.background": "#eeeeee",
      "sideBarSectionHeader.border": "#e3e3e3",
      "sideBarSectionHeader.foreground": "#525252",
      "sideBarStickyScroll.background": "#e9e9e9",
      "sideBarStickyScroll.shadow": "#00000012",
      "sideBarTitle.foreground": "#444b61",
      "statusBar.background": "#f7f7f7",
      "statusBar.border": "#e3e3e3",
      "statusBar.debuggingBackground": "#d3d7f1",
      "statusBar.debuggingForeground": "#3e455d",
      "statusBar.foreground": "#00000080",
      "statusBar.noFolderBackground": "#eeeeee",
      "statusBar.noFolderBorder": "#e3e3e3",
      "statusBar.noFolderForeground": "#000000cc",
      "statusBarItem.activeBackground": "#fcfcfc",
      "statusBarItem.compactHoverBackground": "#0063d3cc",
      "statusBarItem.hoverBackground": "#c1c8ed",
      "statusBarItem.hoverForeground": "#525252",
      "statusBarItem.prominentBackground": "#f7f7f7",
      "statusBarItem.prominentForeground": "#f7f7f7",
      "statusBarItem.prominentHoverBackground": "#ffffff",
      "statusBarItem.prominentHoverForeground": "#f7f7f7",
      "statusBarItem.errorBackground": "#e67e80",
      "statusBarItem.errorForeground": "#f7f7f7",
      "statusBarItem.errorHoverBackground": "#eea9aa",
      "statusBarItem.errorHoverForeground": "#f7f7f7",
      "statusBarItem.offlineBackground": "#6B2FBA",
      "statusBarItem.offlineForeground": "#f7f7f7",
      "statusBarItem.offlineHoverBackground": "#854bd1",
      "statusBarItem.offlineHoverForeground": "#f7f7f7",
      "statusBarItem.remoteBackground": "#6B2FBA",
      "statusBarItem.remoteForeground": "#f7f7f7",
      "statusBarItem.remoteHoverBackground": "#854bd1",
      "statusBarItem.remoteHoverForeground": "#f7f7f7",
      "statusBarItem.warningBackground": "#dbbc7f",
      "statusBarItem.warningForeground": "#f7f7f7",
      "statusBarItem.warningHoverBackground": "#e6d1a7",
      "statusBarItem.warningHoverForeground": "#f7f7f7",
      "tab.activeBackground": "#f7f7f7",
      "tab.activeBorder": "#f7f7f7",
      "tab.hoverForeground": "#444b61",
      "tab.activeBorderTop": "#0063d3",
      "tab.activeForeground": "#525252",
      "tab.border": "#e3e3e3",
      "tab.hoverBackground": "#e8e8e8",
      "tab.inactiveBackground": "#eeeeee",
      "tab.inactiveForeground": "#767b8b",
      "tab.lastPinnedBorder": "#e3e3e3",
      "terminal.ansiBlack": "#f7f7f7",
      "terminal.ansiBlue": "#a7c080",
      "terminal.ansiBrightBlack": "#bfbfbf",
      "terminal.ansiBrightBlue": "#addd64",
      "terminal.ansiBrightCyan": "#660cdd",
      "terminal.ansiBrightGreen": "#67dc84",
      "terminal.ansiBrightMagenta": "#660cdd",
      "terminal.ansiBrightRed": "#fd676a",
      "terminal.ansiBrightWhite": "#858585",
      "terminal.ansiBrightYellow": "#0063d3",
      "terminal.ansiCyan": "#6B2FBA",
      "terminal.ansiGreen": "#83c092",
      "terminal.ansiMagenta": "#6B2FBA",
      "terminal.ansiRed": "#e67e80",
      "terminal.ansiWhite": "#525252",
      "terminal.ansiYellow": "#0063d3",
      "terminal.background": "#f2f2f2",
      "terminal.foreground": "#525252",
      "terminal.selectionForeground": "#525252",
      "terminalCursor.background": "#f7f7f7",
      "terminalCursor.foreground": "#0063d3",
      "terminalStickyScrollHover.background": "#ffffff",
      "textBlockQuote.background": "#a7c08033",
      "textBlockQuote.border": "#a7c080b9",
      "textCodeBlock.background": "#a7c08033",
      "textLink.activeForeground": "#0063d3",
      "textLink.foreground": "#0063d3",
      "textPreformat.background": "#d3d7f1",
      "textPreformat.foreground": "#001b3a",
      "textSeparator.foreground": "#0063d3",
      "titleBar.activeBackground": "#eeeeee",
      "titleBar.activeForeground": "#52525299",
      "titleBar.border": "#e3e3e3",
      "titleBar.inactiveBackground": "#eeeeee",
      "titleBar.inactiveForeground": "#52525299",
      "toolbar.activeBackground": "#444b6180",
      "toolbar.hoverBackground": "#e5e5e5",
      "tree.indentGuidesStroke": "#444b6133",
      "walkThrough.embeddedEditorBackground": "#f7f7f7",
      "welcomePage.progress.background": "#fcfcfc",
      "welcomePage.progress.foreground": "#0063d3",
      "welcomePage.tileBackground": "#0000001a",
      "welcomePage.tileBorder": "#00000033",
      "welcomePage.tileHoverBackground": "#00000033",
      "widget.shadow": "#0000000d",
      "widget.border": "#dedede"
    },
    "tokenColors": [
      {
        "scope": [
          "support.module.elm",
          "entity.other.inherited-class.python",
          "variable.other.object",
          "support.other.namespace.php",
          "entity.other.attribute-name.namespace.xml",
          "record.accessor",
          "entity.name.record.field.accessor",
          "storage.modifier.import.java",
          "storage.modifier.import.groovy",
          "meta.import.swift entity.name.type.swift",
          "meta.member.access.python",
          "variable.other.property.ts",
          "variable.other.property.js",
          "constant.language.symbol.elixir",
          "punctuation.tag.liquid support.class.liquid",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
          "source.cpp meta.block.class.cpp meta.body.class.cpp",
          "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.quoted.docstring.multi",
          "comment.block.documentation source"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#444b6166"
        }
      },
      {
        "scope": [
          "meta.section.struct.go variable.other.field.go",
          "meta.section.struct.go variable.other.declaration.go",
          "source",
          "support",
          "constant.character.entity.named",
          "meta.jsx.children",
          "source.lua",
          "text.html.derivative",
          "source.graphql meta.selections variable.other.alias.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
          "source.graphql variable.arguments.graphql",
          "JSXNested"
        ],
        "settings": {
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "constant",
          "support.constant.core.php"
        ],
        "settings": {
          "foreground": "#AA3731"
        }
      },
      {
        "scope": [
          "entity.name.function.decorator",
          "meta.decorator entity.name.function",
          "meta.decorator punctuation.decorator",
          "punctuation.definition.decorator",
          "meta.decorator variable.other.readwrite.ts",
          "variable.parameter.gdscript",
          "entity.name.variable.parameter",
          "variable.parameter"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "keyword.control.export",
          "support.type.object.module",
          "support.module",
          "support.node",
          "support.other.module",
          "entity.name.type.module",
          "entity.name.type.class.module",
          "keyword.control.module"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "meta.definition.method",
          "meta.function-call",
          "meta.function",
          "meta.method.declaration",
          "meta.function-call support",
          "variable.language.super.ts",
          "source.directive",
          "meta.function-call.generic",
          "meta.method-call.static.php",
          "meta.method-call.php",
          "meta.class storage.type",
          "meta.method.groovy",
          "meta.bracket.square.access",
          "entity.name.function-call.elixir",
          "punctuation.output.liquid support.variable.liquid",
          "meta.function.echo.edge source.js keyword.operator.error-control.js",
          "entity.name.type.variant.gdscript",
          "entity.name.function.powershell",
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "keyword.control.import",
          "meta.module.name.elm support",
          "meta.import.elm support",
          "keyword.control.at-rule",
          "punctuation.definition.keyword",
          "variable.control.import.include",
          "keyword.other.import.java"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.operator.pointer.go",
          "keyword.control",
          "keyword.control.conditional",
          "storage.modifier",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.begin.blade",
          "keyword.end.blade",
          "keyword.blade",
          "keyword.type-alias",
          "keyword.type",
          "support.class.console",
          "keyword.other.await",
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
          "keyword.other.new",
          "keyword.other.phpdoc",
          "keyword.other.use.php",
          "keyword.operator.logical.python",
          "keyword.other.import.static.groovy",
          "keyword.other.import.groovy",
          "punctuation.definition.attribute.swift",
          "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
          "meta.directive.on.svelte entity.name.type.svelte",
          "keyword.other.special-method.elixir",
          "keyword.edge",
          "entity.name.function.edge",
          "support.constant.edge",
          "keyword.other.gdscript",
          "keyword.other.onready.gdscript",
          "source.graphql meta.fragment.graphql keyword.on.graphql",
          "source.graphql meta.type.interface.graphql keyword.implements.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
          "keyword.operator.class.php",
          "keyword.operator.spread.php",
          "keyword.operator.type.php",
          "keyword.operator.increment-decrement.php",
          "keyword.operator.increment-increment.php",
          "keyword.operator.string.php",
          "keyword.operator.ternary.php",
          "keyword.operator.variadic.php",
          "keyword.operator.nullable-type.php",
          "keyword.other.use-as.php",
          "keyword.import.go",
          "keyword.operator.address.go",
          "keyword.operator.null-coalescing",
          "keyword.operator.arrow",
          "keyword.struct.go",
          "keyword.operator.liquid",
          "keyword.operator.optional.ts",
          "keyword.cmake",
          "keyword.codetag.notation",
          "keyword.operator.pipe.shell"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "meta.object-literal.key",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "keyword.other.definition.ini",
          "support.type.property-name",
          "entity.name.tag.yaml",
          "storage.type.function.arrow.tsx"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "keyword.operator",
          "keyword.operator.comparison",
          "keyword.operator.lua",
          "keyword.operator.assignment",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.math"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "keyword.operator.type.annotation.tsx",
          "punctuation",
          "attribute_value",
          "meta.brace",
          "punctuation.definition.parameters",
          "punctuation.definition.template-expression",
          "keyword.other",
          "punctuation.separator",
          "punctuation.definition.generic.begin",
          "punctuation.definition.generic.end",
          "meta.function.type-declaration",
          "keyword.other.colon.elm",
          "meta.record.field.elm keyword.other.elm",
          "keyword.other.period.elm",
          "meta.tag.xml",
          "meta.tag.preprocessor.xml",
          "punctuation.definition.block",
          "punctuation.accessor",
          "constant.name.attribute.tag.pug",
          "string.interpolated.pug",
          "keyword.other.whitespace.liquid",
          "meta.tag.template.block.twig",
          "meta.tag.template.value.twig",
          "begin.bracket",
          "end.bracket",
          "text.html.twig meta.tag.inline.any",
          "text.html.twig meta.tag.block.any",
          "support.function.construct.begin.blade",
          "support.function.construct.end.blade source.php",
          "support.function.construct.end.blade",
          "meta.function.echo.blade source.php",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "text.html.vue-html meta.tag.block.any",
          "keyword.operator.assignment.tsx",
          "meta.definition.method.signature.java",
          "meta.class.body.groovy",
          "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
          "punctuation.definition.list.begin.erlang",
          "meta.expression.parenthesized",
          "meta.definition.function.swift meta.parameter-clause.swift",
          "source.swift meta.function-call.swift",
          "punctuation.section.embedded.end.swift source.swift",
          "source.lua",
          "meta.function.lua",
          "punctuation.definition.keyword.svelte",
          "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
          "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
          "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
          "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
          "punctuation.output.liquid",
          "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
          "JSXAttrs keyword.operator.assignment.jsx",
          "meta.tag.attributes.js keyword.operator.assignment.js"
        ],
        "settings": {
          "foreground": "#444b6166"
        }
      },
      {
        "scope": [
          "entity.name.package.go",
          "variable.language.this",
          "variable.language.special.self",
          "variable.parameter.function.language.special.self",
          "variable.language.this.php punctuation.definition.variable.php",
          "meta.class.body.php storage.type.php",
          "variable.parameter.function.swift entity.name.function.swift",
          "variable.other.jsdoc",
          "support.variable.drive.powershell",
          "entity.other.attribute.lua"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "storage",
          "meta.var.expr storage.type",
          "storage.type.function",
          "keyword.function",
          "storage.type.class",
          "storage.type.property",
          "keyword.other",
          "keyword.local.lua",
          "entity.name.class",
          "meta.function.lua keyword.control.lua",
          "storage.type.enum",
          "storage.type.type",
          "entity.name.type.class.java",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.name.type.class.groovy",
          "storage.type.rust",
          "entity.name.type.class.swift",
          "source.svelte meta.script.svelte source.ts entity.name.label.ts",
          "meta.directive.on.svelte keyword.control.svelte",
          "storage.type.const.gdscript",
          "storage.type.var.gdscript",
          "source.graphql declaration.meta.type keyword",
          "source.graphql meta.type.interface.graphql keyword.type.graphql",
          "source.graphql keyword.schema.graphql",
          "source.graphql keyword.operation.graphql",
          "source.graphql meta.enum.graphql keyword.enum.graphql",
          "source.graphql meta.fragment.graphql keyword.fragment.graphql",
          "storage.type.trait.php",
          "keyword.type.go",
          "keyword.var.go",
          "storage.type.powershell",
          "keyword.const.go",
          "keyword.storage.modifier"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "storage.type.interface",
          "keyword.control.export.tsx"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "string",
          "string.template",
          "string.quoted.single",
          "punctuation.quasi.element",
          "string.other.link",
          "constant.character.escape.regexp",
          "variable.parameter.url",
          "constant.other.symbol.quoted.single.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
          "meta.import.ts punctuation.definition.variable.svelte",
          "punctuation.definition.string.end.html source.css-ignored-vscode",
          "text.html.edge punctuation.definition.variable.js",
          "string.unquoted.plain.out.yaml",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "punctuation.definition.string.end.html source.css",
          "string.quoted.double.html source.css",
          "punctuation.definition.subshell.single.shell",
          "punctuation.section.parenthese.shell"
        ],
        "settings": {
          "foreground": "#8C6C41"
        }
      },
      {
        "scope": [
          "string.quoted.docstring.multi.python",
          "string.quoted.double.block.python punctuation.definition.string.end.python",
          "string.quoted.double.block.python punctuation.definition.string.begin.python",
          "string.quoted.double.block.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python"
        ],
        "settings": {
          "foreground": "#084c98cc"
        }
      },
      {
        "scope": [
          "entity.name.type.interface",
          "storage.type",
          "entity.other.inherited-class",
          "keyword.type",
          "storage.type.java",
          "storage.type.primitive.java",
          "storage.type.generic.java",
          "keyword.other.type",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php source.php",
          "punctuation.section.embedded.end.php",
          "storage.type.object.array.java",
          "storage.type.primitive.groovy",
          "storage.type.groovy",
          "meta.definition.type.body.swift meta.function-call.swift",
          "meta.definition.type.class.swift meta.inheritance-clause.swift",
          "variable.other.constant.elixir",
          "source.graphql declaration.meta.type support",
          "source.graphql meta.selections",
          "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
          "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
          "entity.name.type.class.php",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.other.alias.php",
          "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "punctuation.terminator",
          "support.variable",
          "meta.definition.variable",
          "variable",
          "variable.language",
          "entity.name.type.class.js",
          "entity.name.variable",
          "support.variable.magic",
          "meta.method.body",
          "entity.name.variable",
          "punctuation.definition.variable",
          "meta.class variable.object.property",
          "variable.other.constant entity.name.function",
          "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
          "meta.definition.variable.name.groovy",
          "meta.body.struct.cpp",
          "parameter.variable.function.elixir",
          "meta.directive.edge source.js",
          "meta.function.echo.edge source.js",
          "text.html.edge meta.function.echo.edge meta.function-call.js",
          "source.css variable.parameter.keyframe-list.css",
          "source.css meta.property-value.css",
          "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
          "source.css.scss meta.property-value.scss",
          "entity.name.variable.tuple-element",
          "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
          "support.variable.automatic.powershell",
          "storage.source.cmake",
          "entity.source.cmake"
        ],
        "settings": {
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "source.elm constant.type-constructor",
          "support.class"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "source.elm storage.type"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.other.html",
          "support.class.component.tsx",
          "support.class.component.html"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.to-file",
          "source.diff markup.inserted.diff",
          "source.diff punctuation.definition.to-file.diff",
          "source.diff punctuation.definition.inserted.diff"
        ],
        "settings": {
          "foreground": "#8C6C41"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.from-file.diff",
          "source.diff meta.diff.header.from-file",
          "source.diff markup.deleted.diff",
          "source.diff punctuation.definition.deleted.diff"
        ],
        "settings": {
          "foreground": "#AA3731"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.command"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.range.diff",
          "source.diff meta.diff.range.unified"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "support.variable.liquid",
          "support.class.liquid"
        ],
        "settings": {
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "text.html.basic entity.name",
          "source.js-ignored-vscode",
          "meta.embedded.block.blade constant.other.php",
          "meta.embedded.block.blade keyword.operator.comparison.php",
          "meta.embedded.block.blade keyword.operator.arithmetic.php",
          "meta.tag.start.svelte keyword.control.svelte",
          "meta.tag.end.svelte keyword.control.svelte"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "meta.tag.sgml.doctype.html",
          "punctuation.definition.tag",
          "meta.tag.block.any",
          "meta.tag.block.any.html",
          "meta.tag.inline.any",
          "source.css-ignored-vscode",
          "meta.tag.metadata.style.end.html",
          "text.html.vue invalid.illegal.character-not-allowed-here.html",
          "meta.tag.inline.i.start.html",
          "meta.tag.structure.div.start.html",
          "punctuation.definition.tag.end.html.vue",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": "#008d90b3"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "entity.name.tag.liquid",
          "invalid.deprecated.entity.other.attribute-name",
          "meta.embedded.block.blade storage.type.php"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.raw.markdown",
          "markup.fenced_code.block.markdown",
          "markup.fenced_code.block.markdown punctuation",
          "markup.raw.block.markdown"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "entity.name.section",
          "markup.heading.setext"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "markup.underline.link",
          "markup.underline.link.image"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "markup.bold",
          "punctuation.definition.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "markup.strikethrough",
          "punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#AA3731"
        }
      },
      {
        "scope": [
          "markup.italic",
          "punctuation.definition.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "markup.quote",
          "markup.quote.markdown punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
          "meta.embedded.block.frontmatter punctuation.definition.tag.end",
          "meta.embedded.block.frontmatter string.unquoted.plain.out"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#444b61"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.class punctuation.definition.entity",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "support.type.vendored.property-name",
          "meta.property-list entity.name.tag.css",
          "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
          "meta.property-list meta.property-name",
          "source.css.scss meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#525252"
        }
      },
      {
        "scope": [
          "source.css.scss entity.other.attribute-name.id ",
          "source.css entity.other.attribute-name.id ",
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#6B2FBA"
        }
      },
      {
        "scope": [
          "entity.name.tag.reference",
          "meta.property-list"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      },
      {
        "scope": [
          "keyword.other.unit"
        ],
        "settings": {
          "foreground": "#AA3731"
        }
      },
      {
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "meta.property-value.css",
          "meta.attribute.style.html",
          "constant.language.null",
          "constant.language.boolean",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "#0063d3"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#AA3731"
        }
      },
      {
        "scope": [
          "entity.name.tag.css",
          "meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#008D90"
        }
      }
    ],
    "semanticTokenColors": {
      "class.declaration": {
        "foreground": "#6B2FBA"
      },
      "class.decorator": {
        "foreground": "#6B2FBA"
      },
      "enumMember": {
        "foreground": "#6B2FBA"
      },
      "meta.decorator": {
        "foreground": "#6B2FBA"
      },
      "namespace": {
        "foreground": "#8C6C41"
      },
      "parameter": {
        "foreground": "#444b61"
      },
      "property": {
        "foreground": "#008D90"
      },
      "property.declaration": {
        "foreground": "#444b61"
      },
      "variable": {
        "foreground": "#444b61"
      },
      "variable.defaultLibrary": {
        "foreground": "#6B2FBA"
      }
    }
  },
  {
    "id": "delirium-pumpkin-dark",
    "label": "Delirium Pumpkin Dark",
    "name": "DeliriumTheme Pumpkin-dark",
    "type": "dark",
    "colors": {
      "contrastActiveBorder": "#00000000",
      "contrastBorder": "#00000000",
      "descriptionForeground": "#c7c7a980",
      "disabledForeground": "#c7c7a94d",
      "errorForeground": "#e67e80",
      "focusBorder": "#4a4a4d",
      "foreground": "#c1c1af",
      "icon.foreground": "#c1c1af4d",
      "selection.background": "#f88d6f61",
      "activityBar.activeBackground": "#f88d6f26",
      "activityBar.activeBorder": "#f88d6f",
      "activityBar.background": "#131313",
      "activityBar.border": "#1f1f21",
      "activityBar.dropBorder": "#e2e2db33",
      "activityBar.foreground": "#f88d6f",
      "activityBar.inactiveForeground": "#525243",
      "activityBarBadge.background": "#f88d6f",
      "activityBarBadge.foreground": "#131313",
      "activityBarTop.activeBorder": "#f88d6f",
      "activityBarTop.dropBorder": "#e2e2db33",
      "activityBarTop.foreground": "#f88d6f",
      "activityBarTop.inactiveForeground": "#464640",
      "badge.background": "#f88d6f",
      "badge.foreground": "#131313",
      "breadcrumb.background": "#181819",
      "breadcrumb.foreground": "#bcbcb4cc",
      "breadcrumbPicker.background": "#242426",
      "button.background": "#f88d6fcc",
      "button.border": "#ffffff26",
      "button.foreground": "#ffffffcc",
      "button.hoverBackground": "#f88d6f99",
      "button.secondaryBackground": "#29292b",
      "button.secondaryForeground": "#c7c7a9cc",
      "button.secondaryHoverBackground": "#313133",
      "button.separator": "#ffffff4d",
      "charts.blue": "#85ab86",
      "charts.foreground": "#c7c7a9",
      "charts.green": "#7fbbb3",
      "charts.lines": "#c7c7a9",
      "charts.orange": "#cfbc93",
      "charts.purple": "#d3c6aa",
      "charts.red": "#e67e80",
      "charts.yellow": "#f88d6f",
      "checkbox.foreground": "#c7c7a9",
      "commandCenter.activeBackground": "#24242661",
      "commandCenter.activeForeground": "#c1c1af8f",
      "commandCenter.background": "#181819",
      "commandCenter.border": "#1f1f21",
      "commandCenter.foreground": "#e2e2db",
      "debugConsole.errorForeground": "#e67e80",
      "debugConsole.infoForeground": "#7fbbb3",
      "debugConsole.warningForeground": "#d3c6aa",
      "debugExceptionWidget.background": "#242426",
      "debugExceptionWidget.border": "#1f1f21",
      "debugIcon.breakpointCurrentStackframeForeground": "#e67e80",
      "debugIcon.breakpointDisabledForeground": "#e67e8080",
      "debugIcon.breakpointForeground": "#e67e80",
      "debugIcon.continueForeground": "#7fbbb3",
      "debugIcon.disconnectForeground": "#e67e80",
      "debugIcon.pauseForeground": "#e67e80",
      "debugIcon.restartForeground": "#83c092",
      "debugIcon.startForeground": "#83c092",
      "debugIcon.stepBackForeground": "#7fbbb3",
      "debugIcon.stepIntoForeground": "#7fbbb3",
      "debugIcon.stepOutForeground": "#7fbbb3",
      "debugIcon.stepOverForeground": "#7fbbb3",
      "debugIcon.stopForeground": "#e67e80",
      "debugToolBar.background": "#2b2221",
      "diffEditor.border": "#1f1f21",
      "diffEditor.diagonalFill": "#242426",
      "diffEditor.insertedLineBackground": "#75ce8b1a",
      "diffEditor.insertedTextBackground": "#75ce8b1a",
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.move.border": "#f88d6f4d",
      "diffEditor.moveActive.border": "#f88d6fb3",
      "diffEditor.removedLineBackground": "#f272751a",
      "diffEditor.removedTextBackground": "#f272751a",
      "diffEditor.removedTextBorder": "#00000000",
      "diffEditor.unchangedCodeBackground": "#101010",
      "diffEditor.unchangedRegionBackground": "#101010",
      "diffEditor.unchangedRegionShadow": "#00000066",
      "diffEditorGutter.insertedLineBackground": "#00000000",
      "diffEditorGutter.removedLineBackground": "#00000000",
      "diffEditorOverview.insertedForeground": "#83c09226",
      "diffEditorOverview.removedForeground": "#e67e8030",
      "dropdown.background": "#1e1e20",
      "dropdown.border": "#3f3f3f",
      "dropdown.foreground": "#c7c7a9",
      "dropdown.listBackground": "#1e1e20",
      "editor.background": "#181819",
      "editor.findMatchBackground": "#f88d6f30",
      "editor.findMatchBorder": "#f88d6f61",
      "editor.findMatchHighlightBackground": "#f88d6f3d",
      "editor.findMatchHighlightBorder": "#f88d6f5c",
      "editor.foldBackground": "#00000033",
      "editor.foldPlaceholderForeground": "#e2e2db",
      "editor.foreground": "#c7c7a9",
      "editor.hoverHighlightBackground": "#f88d6f4d",
      "editor.inactiveSelectionBackground": "#f88d6f4d",
      "editor.lineHighlightBackground": "#f88d6f0f",
      "editor.lineHighlightBorder": "#f88d6f08",
      "editor.linkedEditingBackground": "#70c07233",
      "editor.rangeHighlightBackground": "#f88d6f3d",
      "editor.selectionBackground": "#f88d6f4d",
      "editor.selectionForeground": "#c7c7a9",
      "editor.selectionHighlightBackground": "#f88d6f14",
      "editor.selectionHighlightBorder": "#f88d6f4d",
      "editor.wordHighlightBackground": "#f88d6f73",
      "editor.wordHighlightBorder": "#f88d6f8a",
      "editor.wordHighlightStrongBackground": "#f88d6f4d",
      "editorBracketHighlight.foreground1": "#f88d6f",
      "editorBracketHighlight.foreground2": "#d3c6aa",
      "editorBracketHighlight.foreground3": "#85ab86",
      "editorBracketHighlight.foreground4": "#83c092",
      "editorBracketHighlight.foreground5": "#e7a98c",
      "editorBracketHighlight.foreground6": "#d3c6aa",
      "editorBracketHighlight.unexpectedBracket.foreground": "#e67e80",
      "editorBracketMatch.background": "#f88d6f4d",
      "editorBracketMatch.border": "#f88d6f73",
      "editorCodeLens.foreground": "#c1c1af80",
      "editorCursor.background": "#631905",
      "editorCursor.foreground": "#f88d6f",
      "editorError.border": "#00000000",
      "editorError.foreground": "#e67e80",
      "editorGhostText.border": "#00000000",
      "editorGhostText.foreground": "#c7c7a970",
      "editorGroup.border": "#1f1f21",
      "editorGroup.dropBackground": "#f88d6f14",
      "editorGroupHeader.border": "#00000000",
      "editorGroupHeader.noTabsBackground": "#181819",
      "editorGroupHeader.tabsBackground": "#131313",
      "editorGroupHeader.tabsBorder": "#1f1f21",
      "editorGutter.addedBackground": "#83c092cc",
      "editorGutter.background": "#181819",
      "editorGutter.commentRangeForeground": "#242426",
      "editorGutter.deletedBackground": "#e67e80cc",
      "editorGutter.modifiedBackground": "#7fbbb3cc",
      "editorHoverWidget.background": "#242426",
      "editorHoverWidget.border": "#1f1f21",
      "editorIndentGuide.activeBackground1": "#bcbcb433",
      "editorIndentGuide.background1": "#bcbcb40d",
      "editorInfo.border": "#00000000",
      "editorInlayHint.background": "#c1c1af1a",
      "editorInlayHint.foreground": "#c1c1afb3",
      "editorInlayHint.parameterBackground": "#c1c1af1a",
      "editorInlayHint.parameterForeground": "#bcbcb4b3",
      "editorInlayHint.typeBackground": "#bcbcb41a",
      "editorInlayHint.typeForeground": "#bcbcb4b3",
      "editorLineNumber.activeForeground": "#bcbcb4",
      "editorLineNumber.foreground": "#3f3f38",
      "editorLink.activeForeground": "#c7c7a9",
      "editorMarkerNavigation.background": "#131313",
      "editorMarkerNavigationError.background": "#e67e808f",
      "editorMarkerNavigationInfo.background": "#7fbbb38f",
      "editorMarkerNavigationWarning.background": "#d3c6aa8f",
      "editorOverviewRuler.addedForeground": "#83c09280",
      "editorOverviewRuler.border": "#1f1f21",
      "editorOverviewRuler.deletedForeground": "#e67e8080",
      "editorOverviewRuler.errorForeground": "#e67e80",
      "editorOverviewRuler.incomingContentForeground": "#83c09280",
      "editorOverviewRuler.infoForeground": "#7fbbb380",
      "editorOverviewRuler.modifiedForeground": "#7fbbb380",
      "editorOverviewRuler.selectionHighlightForeground": "#f88d6f80",
      "editorOverviewRuler.warningForeground": "#d3c6aa",
      "editorRuler.foreground": "#bcbcb40d",
      "editorStickyScroll.shadow": "#00000066",
      "editorStickyScrollHover.background": "#1f1f21",
      "editorSuggestWidget.background": "#1d1d1e",
      "editorSuggestWidget.border": "#1f1f21",
      "editorSuggestWidget.foreground": "#bcbcb4",
      "editorSuggestWidget.highlightForeground": "#f88d6f",
      "editorSuggestWidget.selectedBackground": "#313133",
      "editorSuggestWidget.selectedIconForeground": "#c7c7a9",
      "editorUnnecessaryCode.border": "#00000000",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.border": "#00000000",
      "editorWarning.foreground": "#d3c6aa",
      "editorWhitespace.foreground": "#e2e2db60",
      "editorWidget.background": "#242426",
      "editorWidget.border": "#313133",
      "editorWidget.resizeBorder": "#f88d6f50",
      "errorLens.errorForeground": "#e67e80fc",
      "errorLens.hintForeground": "#7fbbb3fc",
      "errorLens.infoForeground": "#7fbbb3fc",
      "errorLens.warningForeground": "#d3c6aafc",
      "extensionButton.background": "#f88d6f80",
      "extensionButton.foreground": "#fde2da",
      "extensionButton.hoverBackground": "#f88d6f99",
      "extensionButton.prominentBackground": "#f88d6f9d",
      "extensionButton.prominentHoverBackground": "#f88d6f",
      "gitDecoration.conflictingResourceForeground": "#f88d6f",
      "gitDecoration.deletedResourceForeground": "#e67e80",
      "gitDecoration.ignoredResourceForeground": "#e2e2db4d",
      "gitDecoration.modifiedResourceForeground": "#7fbbb3",
      "gitDecoration.untrackedResourceForeground": "#83c092",
      "multiDiffEditor.border": "#1f1f21",
      "multiDiffEditor.headerBackground": "#242426",
      "scmGraph.foreground1": "#85ab86",
      "scmGraph.foreground2": "#d3c6aa",
      "scmGraph.foreground3": "#83c092",
      "scmGraph.foreground4": "#e7a98c",
      "scmGraph.foreground5": "#d3c6aa",
      "scmGraph.historyItemBaseRefColor": "#83c092",
      "scmGraph.historyItemHoverAdditionsForeground": "#83c092",
      "scmGraph.historyItemHoverDefaultLabelBackground": "#c1c1af",
      "scmGraph.historyItemHoverDefaultLabelForeground": "#85856c",
      "scmGraph.historyItemHoverDeletionsForeground": "#e67e80",
      "scmGraph.historyItemHoverLabelForeground": "#85856c",
      "scmGraph.historyItemRefColor": "#f88d6f",
      "scmGraph.historyItemRemoteRefColor": "#85ab86",
      "inlineChat.background": "#242426",
      "inlineChat.border": "#313133",
      "inlineChatInput.background": "#1d1d1e",
      "inlineChatInput.border": "#313133",
      "inlineChatInput.focusBorder": "#4a4a4d",
      "inlineEdit.gutterIndicator.background": "#c1c1af80",
      "inlineEdit.gutterIndicator.primaryBackground": "#f3400eb3",
      "inlineEdit.gutterIndicator.primaryBorder": "#f3400e",
      "inlineEdit.gutterIndicator.primaryForeground": "#000000",
      "inlineEdit.gutterIndicator.secondaryBackground": "#f3400eb3",
      "inlineEdit.gutterIndicator.secondaryBorder": "#f3400e",
      "inlineEdit.gutterIndicator.secondaryForeground": "#000000",
      "inlineEdit.gutterIndicator.successfulBackground": "#4a935cb3",
      "inlineEdit.gutterIndicator.successfulBorder": "#4a935c",
      "inlineEdit.gutterIndicator.successfulForeground": "#000000",
      "inlineEdit.modifiedBackground": "#83c09226",
      "inlineEdit.modifiedBorder": "#83c092cc",
      "inlineEdit.modifiedChangedLineBackground": "#83c09214",
      "inlineEdit.modifiedChangedTextBackground": "#00000000",
      "inlineEdit.originalBackground": "#e67e8026",
      "inlineEdit.originalBorder": "#e67e80cc",
      "inlineEdit.originalChangedLineBackground": "#e67e80cc",
      "inlineEdit.originalChangedTextBackground": "#00000000",
      "inlineEdit.tabWillAcceptModifiedBorder": "#83c092",
      "inlineEdit.tabWillAcceptOriginalBorder": "#e67e80",
      "input.background": "#1e1e20",
      "input.border": "#3f3f3f",
      "input.foreground": "#c7c7a9",
      "input.placeholderForeground": "#656565",
      "inputOption.activeBackground": "#636367",
      "inputOption.activeBorder": "#00000000",
      "inputOption.activeForeground": "#c7c7a9",
      "inputOption.hoverBackground": "#313133",
      "inputValidation.errorBackground": "#242426",
      "inputValidation.errorBorder": "#e67e80",
      "inputValidation.infoBackground": "#242426",
      "inputValidation.infoBorder": "#7fbbb3",
      "inputValidation.warningBackground": "#242426",
      "inputValidation.warningBorder": "#d3c6aa",
      "keybindingLabel.background": "#242426",
      "keybindingLabel.border": "#585858",
      "keybindingLabel.bottomBorder": "#585858",
      "keybindingLabel.foreground": "#8b8b8b",
      "list.activeSelectionBackground": "#f88d6f33",
      "list.activeSelectionForeground": "#c7c7a9",
      "list.dropBackground": "#f88d6f15",
      "list.errorForeground": "#e67e80",
      "list.focusBackground": "#f88d6f40",
      "list.focusForeground": "#c1c1af",
      "list.focusAndSelectionOutline": "#f88d6fe6",
      "list.focusOutline": "#f88d6fe6",
      "list.highlightForeground": "#f88d6f",
      "list.hoverBackground": "#3d3d404d",
      "list.hoverForeground": "#f1f1f1",
      "list.inactiveSelectionBackground": "#fab4a00d",
      "list.inactiveSelectionForeground": "#c7c7a9",
      "list.warningForeground": "#d3c6aa",
      "menu.background": "#242426",
      "menu.border": "#1f1f21",
      "menu.foreground": "#bcbcb4",
      "menu.selectionBackground": "#29292b",
      "menu.selectionForeground": "#d4d4cf",
      "menu.separatorBackground": "#1f1f2180",
      "menubar.selectionBackground": "#29292b",
      "menubar.selectionForeground": "#bcbcb4",
      "merge.border": "#1f1f21",
      "merge.commonContentBackground": "#f88d6f30",
      "merge.commonHeaderBackground": "#f88d6f80",
      "merge.currentContentBackground": "#83c09230",
      "merge.currentHeaderBackground": "#83c09280",
      "merge.incomingContentBackground": "#7fbbb330",
      "merge.incomingHeaderBackground": "#7fbbb380",
      "minimap.background": "#181819",
      "minimap.errorHighlight": "#e67e80",
      "minimap.findMatchHighlight": "#f88d6f",
      "minimap.selectionHighlight": "#f88d6f",
      "minimap.selectionOccurrenceHighlight": "#f88d6f",
      "minimap.warningHighlight": "#d3c6aa",
      "minimapGutter.addedBackground": "#83c092",
      "minimapGutter.deletedBackground": "#e67e80",
      "minimapGutter.modifiedBackground": "#7fbbb3",
      "notificationCenterHeader.background": "#242426",
      "notificationCenterHeader.foreground": "#c7c7a9",
      "notificationLink.foreground": "#f88d6f",
      "notifications.background": "#242426",
      "notifications.border": "#1f1f21",
      "notifications.foreground": "#c1c1af",
      "notificationsErrorIcon.foreground": "#e67e80",
      "notificationsInfoIcon.foreground": "#85ab86",
      "notificationsWarningIcon.foreground": "#cfbc93",
      "panel.background": "#161616",
      "panel.border": "#1f1f21",
      "panel.dropBorder": "#e2e2db80",
      "panelInput.border": "#313133",
      "panelSection.border": "#1f1f21",
      "panelSectionHeader.background": "#1e1e1e",
      "panelSectionHeader.border": "#1f1f21",
      "panelSectionHeader.foreground": "#c7c7a9",
      "panelTitle.activeBorder": "#f88d6f",
      "panelTitle.activeForeground": "#bcbcb4",
      "panelTitle.inactiveForeground": "#858580",
      "peekView.border": "#1f1f21",
      "peekViewEditor.background": "#222223",
      "peekViewEditor.matchHighlightBackground": "#24242640",
      "peekViewEditor.matchHighlightBorder": "#00000000",
      "peekViewEditorGutter.background": "#222223",
      "peekViewEditorStickyScroll.background": "#1f1f21",
      "peekViewResult.background": "#1e1e20",
      "peekViewResult.fileForeground": "#c7c7a9",
      "peekViewResult.lineForeground": "#c1c1af",
      "peekViewResult.matchHighlightBackground": "#f88d6f80",
      "peekViewResult.selectionBackground": "#f88d6f33",
      "peekViewResult.selectionForeground": "#c7c7a9",
      "peekViewTitle.background": "#242426",
      "peekViewTitleDescription.foreground": "#c7c7a9",
      "peekViewTitleLabel.foreground": "#c7c7a9",
      "pickerGroup.border": "#1f1f21",
      "pickerGroup.foreground": "#c7c7a9",
      "profileBadge.background": "#f88d6f",
      "profileBadge.foreground": "#181819",
      "progressBar.background": "#f88d6f",
      "quickInput.background": "#1f1f21",
      "quickInput.foreground": "#c7c7a9b3",
      "quickInputList.focusBackground": "#f88d6f1a",
      "quickInputList.focusForeground": "#ffffff",
      "quickInputList.focusIconForeground": "#c7c7a9",
      "quickInputTitle.background": "#131313",
      "sash.hoverBorder": "#f88d6f50",
      "scrollbar.shadow": "#00000066",
      "scrollbarSlider.activeBackground": "#c7c7a94d",
      "scrollbarSlider.background": "#c7c7a926",
      "scrollbarSlider.hoverBackground": "#c7c7a933",
      "settings.headerForeground": "#c7c7a9",
      "settings.modifiedItemIndicator": "#f88d6f",
      "settings.settingsHeaderHoverForeground": "#c7c7a9",
      "sideBar.background": "#131313",
      "sideBar.border": "#1f1f21",
      "sideBar.foreground": "#bcbcb4cc",
      "sideBarSectionHeader.background": "#131313",
      "sideBarSectionHeader.border": "#1f1f21",
      "sideBarSectionHeader.foreground": "#c7c7a9",
      "sideBarStickyScroll.background": "#0e0e0e",
      "sideBarStickyScroll.shadow": "#00000066",
      "sideBarTitle.foreground": "#e2e2db",
      "statusBar.background": "#181819",
      "statusBar.border": "#1f1f21",
      "statusBar.debuggingBackground": "#3f2d29",
      "statusBar.debuggingForeground": "#e2996c",
      "statusBar.foreground": "#c1c1af80",
      "statusBar.noFolderBackground": "#131313",
      "statusBar.noFolderBorder": "#1f1f21",
      "statusBar.noFolderForeground": "#c1c1afcc",
      "statusBarItem.activeBackground": "#242426",
      "statusBarItem.compactHoverBackground": "#f88d6fcc",
      "statusBarItem.hoverBackground": "#543831",
      "statusBarItem.hoverForeground": "#c7c7a9",
      "statusBarItem.prominentBackground": "#181819",
      "statusBarItem.prominentForeground": "#000000",
      "statusBarItem.prominentHoverBackground": "#313133",
      "statusBarItem.prominentHoverForeground": "#181819",
      "statusBarItem.errorBackground": "#e67e80",
      "statusBarItem.errorForeground": "#551012",
      "statusBarItem.errorHoverBackground": "#eea9aa",
      "statusBarItem.errorHoverForeground": "#181819",
      "statusBarItem.offlineBackground": "#d3c6aa",
      "statusBarItem.offlineForeground": "#53462b",
      "statusBarItem.offlineHoverBackground": "#e4ddcc",
      "statusBarItem.offlineHoverForeground": "#181819",
      "statusBarItem.remoteBackground": "#e7a98c",
      "statusBarItem.remoteForeground": "#602c14",
      "statusBarItem.remoteHoverBackground": "#f0c9b6",
      "statusBarItem.remoteHoverForeground": "#181819",
      "statusBarItem.warningBackground": "#d3c6aa",
      "statusBarItem.warningForeground": "#53462b",
      "statusBarItem.warningHoverBackground": "#e4ddcc",
      "statusBarItem.warningHoverForeground": "#181819",
      "tab.activeBackground": "#181819",
      "tab.activeBorder": "#181819",
      "tab.hoverForeground": "#bcbcb4",
      "tab.activeBorderTop": "#f88d6f",
      "tab.activeForeground": "#c7c7a9",
      "tab.border": "#1f1f21",
      "tab.hoverBackground": "#272729",
      "tab.inactiveBackground": "#131313",
      "tab.inactiveForeground": "#868681",
      "tab.lastPinnedBorder": "#1f1f21",
      "terminal.ansiBlack": "#181819",
      "terminal.ansiBlue": "#7fbbb3",
      "terminal.ansiBrightBlack": "#494949",
      "terminal.ansiBrightBlue": "#62d8c9",
      "terminal.ansiBrightCyan": "#fca177",
      "terminal.ansiBrightGreen": "#67dc84",
      "terminal.ansiBrightMagenta": "#e6cd97",
      "terminal.ansiBrightRed": "#fd676a",
      "terminal.ansiBrightWhite": "#efefe7",
      "terminal.ansiBrightYellow": "#ff8968",
      "terminal.ansiCyan": "#e7a98c",
      "terminal.ansiGreen": "#83c092",
      "terminal.ansiMagenta": "#d3c6aa",
      "terminal.ansiRed": "#e67e80",
      "terminal.ansiWhite": "#c7c7a9",
      "terminal.ansiYellow": "#f88d6f",
      "terminal.background": "#161616",
      "terminal.foreground": "#c7c7a9",
      "terminal.selectionForeground": "#c7c7a9",
      "terminalCursor.background": "#181819",
      "terminalCursor.foreground": "#f88d6f",
      "terminalStickyScrollHover.background": "#1f1f21",
      "textBlockQuote.background": "#7fbbb333",
      "textBlockQuote.border": "#7fbbb3b9",
      "textCodeBlock.background": "#7fbbb333",
      "textLink.activeForeground": "#f88d6f",
      "textLink.foreground": "#f88d6f",
      "textPreformat.background": "#3f2d29",
      "textPreformat.foreground": "#f88d6f",
      "textSeparator.foreground": "#f88d6f",
      "titleBar.activeBackground": "#131313",
      "titleBar.activeForeground": "#c7c7a966",
      "titleBar.border": "#1f1f21",
      "titleBar.inactiveBackground": "#131313",
      "titleBar.inactiveForeground": "#c7c7a966",
      "toolbar.activeBackground": "#e2e2db80",
      "toolbar.hoverBackground": "#232323",
      "tree.indentGuidesStroke": "#bcbcb433",
      "walkThrough.embeddedEditorBackground": "#181819",
      "welcomePage.progress.background": "#242426",
      "welcomePage.progress.foreground": "#f88d6f",
      "welcomePage.tileBackground": "#c1c1af1a",
      "welcomePage.tileBorder": "#c1c1af33",
      "welcomePage.tileHoverBackground": "#c1c1af33",
      "widget.shadow": "#00000033",
      "widget.border": "#3f3f3f"
    },
    "tokenColors": [
      {
        "scope": [
          "support.module.elm",
          "entity.other.inherited-class.python",
          "variable.other.object",
          "support.other.namespace.php",
          "entity.other.attribute-name.namespace.xml",
          "record.accessor",
          "entity.name.record.field.accessor",
          "storage.modifier.import.java",
          "storage.modifier.import.groovy",
          "meta.import.swift entity.name.type.swift",
          "meta.member.access.python",
          "variable.other.property.ts",
          "variable.other.property.js",
          "constant.language.symbol.elixir",
          "punctuation.tag.liquid support.class.liquid",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
          "source.cpp meta.block.class.cpp meta.body.class.cpp",
          "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.quoted.docstring.multi",
          "comment.block.documentation source"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#bcbcb466"
        }
      },
      {
        "scope": [
          "meta.section.struct.go variable.other.field.go",
          "meta.section.struct.go variable.other.declaration.go",
          "source",
          "support",
          "constant.character.entity.named",
          "meta.jsx.children",
          "source.lua",
          "text.html.derivative",
          "source.graphql meta.selections variable.other.alias.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
          "source.graphql variable.arguments.graphql",
          "JSXNested"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "constant",
          "support.constant.core.php"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "entity.name.function.decorator",
          "meta.decorator entity.name.function",
          "meta.decorator punctuation.decorator",
          "punctuation.definition.decorator",
          "meta.decorator variable.other.readwrite.ts",
          "variable.parameter.gdscript",
          "entity.name.variable.parameter",
          "variable.parameter"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "keyword.control.export",
          "support.type.object.module",
          "support.module",
          "support.node",
          "support.other.module",
          "entity.name.type.module",
          "entity.name.type.class.module",
          "keyword.control.module"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "meta.definition.method",
          "meta.function-call",
          "meta.function",
          "meta.method.declaration",
          "meta.function-call support",
          "variable.language.super.ts",
          "source.directive",
          "meta.function-call.generic",
          "meta.method-call.static.php",
          "meta.method-call.php",
          "meta.class storage.type",
          "meta.method.groovy",
          "meta.bracket.square.access",
          "entity.name.function-call.elixir",
          "punctuation.output.liquid support.variable.liquid",
          "meta.function.echo.edge source.js keyword.operator.error-control.js",
          "entity.name.type.variant.gdscript",
          "entity.name.function.powershell",
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "keyword.control.import",
          "meta.module.name.elm support",
          "meta.import.elm support",
          "keyword.control.at-rule",
          "punctuation.definition.keyword",
          "variable.control.import.include",
          "keyword.other.import.java"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.operator.pointer.go",
          "keyword.control",
          "keyword.control.conditional",
          "storage.modifier",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.begin.blade",
          "keyword.end.blade",
          "keyword.blade",
          "keyword.type-alias",
          "keyword.type",
          "support.class.console",
          "keyword.other.await",
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
          "keyword.other.new",
          "keyword.other.phpdoc",
          "keyword.other.use.php",
          "keyword.operator.logical.python",
          "keyword.other.import.static.groovy",
          "keyword.other.import.groovy",
          "punctuation.definition.attribute.swift",
          "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
          "meta.directive.on.svelte entity.name.type.svelte",
          "keyword.other.special-method.elixir",
          "keyword.edge",
          "entity.name.function.edge",
          "support.constant.edge",
          "keyword.other.gdscript",
          "keyword.other.onready.gdscript",
          "source.graphql meta.fragment.graphql keyword.on.graphql",
          "source.graphql meta.type.interface.graphql keyword.implements.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
          "keyword.operator.class.php",
          "keyword.operator.spread.php",
          "keyword.operator.type.php",
          "keyword.operator.increment-decrement.php",
          "keyword.operator.increment-increment.php",
          "keyword.operator.string.php",
          "keyword.operator.ternary.php",
          "keyword.operator.variadic.php",
          "keyword.operator.nullable-type.php",
          "keyword.other.use-as.php",
          "keyword.import.go",
          "keyword.operator.address.go",
          "keyword.operator.null-coalescing",
          "keyword.operator.arrow",
          "keyword.struct.go",
          "keyword.operator.liquid",
          "keyword.operator.optional.ts",
          "keyword.cmake",
          "keyword.codetag.notation",
          "keyword.operator.pipe.shell"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "meta.object-literal.key",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "keyword.other.definition.ini",
          "support.type.property-name",
          "entity.name.tag.yaml",
          "storage.type.function.arrow.tsx"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "keyword.operator",
          "keyword.operator.comparison",
          "keyword.operator.lua",
          "keyword.operator.assignment",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.math"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "keyword.operator.type.annotation.tsx",
          "punctuation",
          "attribute_value",
          "meta.brace",
          "punctuation.definition.parameters",
          "punctuation.definition.template-expression",
          "keyword.other",
          "punctuation.separator",
          "punctuation.definition.generic.begin",
          "punctuation.definition.generic.end",
          "meta.function.type-declaration",
          "keyword.other.colon.elm",
          "meta.record.field.elm keyword.other.elm",
          "keyword.other.period.elm",
          "meta.tag.xml",
          "meta.tag.preprocessor.xml",
          "punctuation.definition.block",
          "punctuation.accessor",
          "constant.name.attribute.tag.pug",
          "string.interpolated.pug",
          "keyword.other.whitespace.liquid",
          "meta.tag.template.block.twig",
          "meta.tag.template.value.twig",
          "begin.bracket",
          "end.bracket",
          "text.html.twig meta.tag.inline.any",
          "text.html.twig meta.tag.block.any",
          "support.function.construct.begin.blade",
          "support.function.construct.end.blade source.php",
          "support.function.construct.end.blade",
          "meta.function.echo.blade source.php",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "text.html.vue-html meta.tag.block.any",
          "keyword.operator.assignment.tsx",
          "meta.definition.method.signature.java",
          "meta.class.body.groovy",
          "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
          "punctuation.definition.list.begin.erlang",
          "meta.expression.parenthesized",
          "meta.definition.function.swift meta.parameter-clause.swift",
          "source.swift meta.function-call.swift",
          "punctuation.section.embedded.end.swift source.swift",
          "source.lua",
          "meta.function.lua",
          "punctuation.definition.keyword.svelte",
          "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
          "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
          "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
          "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
          "punctuation.output.liquid",
          "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
          "JSXAttrs keyword.operator.assignment.jsx",
          "meta.tag.attributes.js keyword.operator.assignment.js"
        ],
        "settings": {
          "foreground": "#bcbcb466"
        }
      },
      {
        "scope": [
          "entity.name.package.go",
          "variable.language.this",
          "variable.language.special.self",
          "variable.parameter.function.language.special.self",
          "variable.language.this.php punctuation.definition.variable.php",
          "meta.class.body.php storage.type.php",
          "variable.parameter.function.swift entity.name.function.swift",
          "variable.other.jsdoc",
          "support.variable.drive.powershell",
          "entity.other.attribute.lua"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "storage",
          "meta.var.expr storage.type",
          "storage.type.function",
          "keyword.function",
          "storage.type.class",
          "storage.type.property",
          "keyword.other",
          "keyword.local.lua",
          "entity.name.class",
          "meta.function.lua keyword.control.lua",
          "storage.type.enum",
          "storage.type.type",
          "entity.name.type.class.java",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.name.type.class.groovy",
          "storage.type.rust",
          "entity.name.type.class.swift",
          "source.svelte meta.script.svelte source.ts entity.name.label.ts",
          "meta.directive.on.svelte keyword.control.svelte",
          "storage.type.const.gdscript",
          "storage.type.var.gdscript",
          "source.graphql declaration.meta.type keyword",
          "source.graphql meta.type.interface.graphql keyword.type.graphql",
          "source.graphql keyword.schema.graphql",
          "source.graphql keyword.operation.graphql",
          "source.graphql meta.enum.graphql keyword.enum.graphql",
          "source.graphql meta.fragment.graphql keyword.fragment.graphql",
          "storage.type.trait.php",
          "keyword.type.go",
          "keyword.var.go",
          "storage.type.powershell",
          "keyword.const.go",
          "keyword.storage.modifier"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "storage.type.interface",
          "keyword.control.export.tsx"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "string",
          "string.template",
          "string.quoted.single",
          "punctuation.quasi.element",
          "string.other.link",
          "constant.character.escape.regexp",
          "variable.parameter.url",
          "constant.other.symbol.quoted.single.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
          "meta.import.ts punctuation.definition.variable.svelte",
          "punctuation.definition.string.end.html source.css-ignored-vscode",
          "text.html.edge punctuation.definition.variable.js",
          "string.unquoted.plain.out.yaml",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "punctuation.definition.string.end.html source.css",
          "string.quoted.double.html source.css",
          "punctuation.definition.subshell.single.shell",
          "punctuation.section.parenthese.shell"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "string.quoted.docstring.multi.python",
          "string.quoted.double.block.python punctuation.definition.string.end.python",
          "string.quoted.double.block.python punctuation.definition.string.begin.python",
          "string.quoted.double.block.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python"
        ],
        "settings": {
          "foreground": "#8cb797cc"
        }
      },
      {
        "scope": [
          "entity.name.type.interface",
          "storage.type",
          "entity.other.inherited-class",
          "keyword.type",
          "storage.type.java",
          "storage.type.primitive.java",
          "storage.type.generic.java",
          "keyword.other.type",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php source.php",
          "punctuation.section.embedded.end.php",
          "storage.type.object.array.java",
          "storage.type.primitive.groovy",
          "storage.type.groovy",
          "meta.definition.type.body.swift meta.function-call.swift",
          "meta.definition.type.class.swift meta.inheritance-clause.swift",
          "variable.other.constant.elixir",
          "source.graphql declaration.meta.type support",
          "source.graphql meta.selections",
          "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
          "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
          "entity.name.type.class.php",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.other.alias.php",
          "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "punctuation.terminator",
          "support.variable",
          "meta.definition.variable",
          "variable",
          "variable.language",
          "entity.name.type.class.js",
          "entity.name.variable",
          "support.variable.magic",
          "meta.method.body",
          "entity.name.variable",
          "punctuation.definition.variable",
          "meta.class variable.object.property",
          "variable.other.constant entity.name.function",
          "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
          "meta.definition.variable.name.groovy",
          "meta.body.struct.cpp",
          "parameter.variable.function.elixir",
          "meta.directive.edge source.js",
          "meta.function.echo.edge source.js",
          "text.html.edge meta.function.echo.edge meta.function-call.js",
          "source.css variable.parameter.keyframe-list.css",
          "source.css meta.property-value.css",
          "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
          "source.css.scss meta.property-value.scss",
          "entity.name.variable.tuple-element",
          "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
          "support.variable.automatic.powershell",
          "storage.source.cmake",
          "entity.source.cmake"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "source.elm constant.type-constructor",
          "support.class"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "source.elm storage.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.other.html",
          "support.class.component.tsx",
          "support.class.component.html"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.to-file",
          "source.diff markup.inserted.diff",
          "source.diff punctuation.definition.to-file.diff",
          "source.diff punctuation.definition.inserted.diff"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.from-file.diff",
          "source.diff meta.diff.header.from-file",
          "source.diff markup.deleted.diff",
          "source.diff punctuation.definition.deleted.diff"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.command"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.range.diff",
          "source.diff meta.diff.range.unified"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "support.variable.liquid",
          "support.class.liquid"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "text.html.basic entity.name",
          "source.js-ignored-vscode",
          "meta.embedded.block.blade constant.other.php",
          "meta.embedded.block.blade keyword.operator.comparison.php",
          "meta.embedded.block.blade keyword.operator.arithmetic.php",
          "meta.tag.start.svelte keyword.control.svelte",
          "meta.tag.end.svelte keyword.control.svelte"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "meta.tag.sgml.doctype.html",
          "punctuation.definition.tag",
          "meta.tag.block.any",
          "meta.tag.block.any.html",
          "meta.tag.inline.any",
          "source.css-ignored-vscode",
          "meta.tag.metadata.style.end.html",
          "text.html.vue invalid.illegal.character-not-allowed-here.html",
          "meta.tag.inline.i.start.html",
          "meta.tag.structure.div.start.html",
          "punctuation.definition.tag.end.html.vue",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": "#85ab86b3"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "entity.name.tag.liquid",
          "invalid.deprecated.entity.other.attribute-name",
          "meta.embedded.block.blade storage.type.php"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.raw.markdown",
          "markup.fenced_code.block.markdown",
          "markup.fenced_code.block.markdown punctuation",
          "markup.raw.block.markdown"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "entity.name.section",
          "markup.heading.setext"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "markup.underline.link",
          "markup.underline.link.image"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "markup.bold",
          "punctuation.definition.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "markup.strikethrough",
          "punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "markup.italic",
          "punctuation.definition.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "markup.quote",
          "markup.quote.markdown punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
          "meta.embedded.block.frontmatter punctuation.definition.tag.end",
          "meta.embedded.block.frontmatter string.unquoted.plain.out"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#e2e2db"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.class punctuation.definition.entity",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "support.type.vendored.property-name",
          "meta.property-list entity.name.tag.css",
          "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
          "meta.property-list meta.property-name",
          "source.css.scss meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#c7c7a9"
        }
      },
      {
        "scope": [
          "source.css.scss entity.other.attribute-name.id ",
          "source.css entity.other.attribute-name.id ",
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag.reference",
          "meta.property-list"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "keyword.other.unit"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "meta.property-value.css",
          "meta.attribute.style.html",
          "constant.language.null",
          "constant.language.boolean",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "entity.name.tag.css",
          "meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      }
    ],
    "semanticTokenColors": {
      "class.declaration": {
        "foreground": "#83c092"
      },
      "class.decorator": {
        "foreground": "#d3c6aa"
      },
      "enumMember": {
        "foreground": "#83c092"
      },
      "meta.decorator": {
        "foreground": "#d3c6aa"
      },
      "namespace": {
        "foreground": "#7fbbb3"
      },
      "parameter": {
        "foreground": "#bcbcb4"
      },
      "property": {
        "foreground": "#cfbc93"
      },
      "property.declaration": {
        "foreground": "#bcbcb4"
      },
      "variable": {
        "foreground": "#d3c6aa"
      },
      "variable.defaultLibrary": {
        "foreground": "#e7a98c"
      }
    }
  },
  {
    "id": "delirium-pumpkin-lotus-leaf",
    "label": "Delirium Pumpkin Lotus Leaf",
    "name": "DeliriumTheme Pumpkin-lotus-leaf",
    "type": "dark",
    "colors": {
      "contrastActiveBorder": "#00000000",
      "contrastBorder": "#00000000",
      "descriptionForeground": "#d2c6ab80",
      "disabledForeground": "#d2c6ab4d",
      "errorForeground": "#e67e80",
      "focusBorder": "#5a5a5d",
      "foreground": "#d2c6ab",
      "icon.foreground": "#d2c6ab4d",
      "selection.background": "#a7c08061",
      "activityBar.activeBackground": "#a7c08026",
      "activityBar.activeBorder": "#a7c080",
      "activityBar.background": "#222223",
      "activityBar.border": "#303031",
      "activityBar.dropBorder": "#fefefe33",
      "activityBar.foreground": "#a7c080",
      "activityBar.inactiveForeground": "#635c4f",
      "activityBarBadge.background": "#a7c080",
      "activityBarBadge.foreground": "#222223",
      "activityBarTop.activeBorder": "#a7c080",
      "activityBarTop.dropBorder": "#fefefe33",
      "activityBarTop.foreground": "#a7c080",
      "activityBarTop.inactiveForeground": "#56534d",
      "badge.background": "#a7c080",
      "badge.foreground": "#222223",
      "breadcrumb.background": "#282829",
      "breadcrumb.foreground": "#d3c6aacc",
      "breadcrumbPicker.background": "#353536",
      "button.background": "#a7c080cc",
      "button.border": "#ffffff26",
      "button.foreground": "#ffffffcc",
      "button.hoverBackground": "#a7c08099",
      "button.secondaryBackground": "#3a3a3b",
      "button.secondaryForeground": "#d2c6abcc",
      "button.secondaryHoverBackground": "#414143",
      "button.separator": "#ffffff4d",
      "charts.blue": "#85ab86",
      "charts.foreground": "#d2c6ab",
      "charts.green": "#7fbbb3",
      "charts.lines": "#d2c6ab",
      "charts.orange": "#cfbc93",
      "charts.purple": "#d3c6aa",
      "charts.red": "#e67e80",
      "charts.yellow": "#f88d6f",
      "checkbox.foreground": "#d2c6ab",
      "commandCenter.activeBackground": "#35353661",
      "commandCenter.activeForeground": "#d2c6ab8f",
      "commandCenter.background": "#282829",
      "commandCenter.border": "#303031",
      "commandCenter.foreground": "#fefefe",
      "debugConsole.errorForeground": "#e67e80",
      "debugConsole.infoForeground": "#7fbbb3",
      "debugConsole.warningForeground": "#d3c6aa",
      "debugExceptionWidget.background": "#353536",
      "debugExceptionWidget.border": "#303031",
      "debugIcon.breakpointCurrentStackframeForeground": "#e67e80",
      "debugIcon.breakpointDisabledForeground": "#e67e8080",
      "debugIcon.breakpointForeground": "#e67e80",
      "debugIcon.continueForeground": "#7fbbb3",
      "debugIcon.disconnectForeground": "#e67e80",
      "debugIcon.pauseForeground": "#e67e80",
      "debugIcon.restartForeground": "#83c092",
      "debugIcon.startForeground": "#83c092",
      "debugIcon.stepBackForeground": "#7fbbb3",
      "debugIcon.stepIntoForeground": "#7fbbb3",
      "debugIcon.stepOutForeground": "#7fbbb3",
      "debugIcon.stepOverForeground": "#7fbbb3",
      "debugIcon.stopForeground": "#e67e80",
      "debugToolBar.background": "#333531",
      "diffEditor.border": "#303031",
      "diffEditor.diagonalFill": "#353536",
      "diffEditor.insertedLineBackground": "#75ce8b1a",
      "diffEditor.insertedTextBackground": "#75ce8b1a",
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.move.border": "#f88d6f4d",
      "diffEditor.moveActive.border": "#f88d6fb3",
      "diffEditor.removedLineBackground": "#f272751a",
      "diffEditor.removedTextBackground": "#f272751a",
      "diffEditor.removedTextBorder": "#00000000",
      "diffEditor.unchangedCodeBackground": "#1f1f20",
      "diffEditor.unchangedRegionBackground": "#1f1f20",
      "diffEditor.unchangedRegionShadow": "#00000066",
      "diffEditorGutter.insertedLineBackground": "#00000000",
      "diffEditorGutter.removedLineBackground": "#00000000",
      "diffEditorOverview.insertedForeground": "#83c09226",
      "diffEditorOverview.removedForeground": "#e67e8030",
      "dropdown.background": "#2e2e2f",
      "dropdown.border": "#4f4f4f",
      "dropdown.foreground": "#d2c6ab",
      "dropdown.listBackground": "#2e2e2f",
      "editor.background": "#282829",
      "editor.findMatchBackground": "#a7c08030",
      "editor.findMatchBorder": "#a7c08061",
      "editor.findMatchHighlightBackground": "#a7c0803d",
      "editor.findMatchHighlightBorder": "#a7c0805c",
      "editor.foldBackground": "#00000033",
      "editor.foldPlaceholderForeground": "#fefefe",
      "editor.foreground": "#d2c6ab",
      "editor.hoverHighlightBackground": "#a7c0804d",
      "editor.inactiveSelectionBackground": "#a7c0804d",
      "editor.lineHighlightBackground": "#a7c0800f",
      "editor.lineHighlightBorder": "#a7c08008",
      "editor.linkedEditingBackground": "#70c07233",
      "editor.rangeHighlightBackground": "#a7c0803d",
      "editor.selectionBackground": "#a7c0804d",
      "editor.selectionForeground": "#d2c6ab",
      "editor.selectionHighlightBackground": "#a7c08014",
      "editor.selectionHighlightBorder": "#a7c0804d",
      "editor.wordHighlightBackground": "#a7c08073",
      "editor.wordHighlightBorder": "#a7c0808a",
      "editor.wordHighlightStrongBackground": "#a7c0804d",
      "editorBracketHighlight.foreground1": "#f88d6f",
      "editorBracketHighlight.foreground2": "#d3c6aa",
      "editorBracketHighlight.foreground3": "#85ab86",
      "editorBracketHighlight.foreground4": "#83c092",
      "editorBracketHighlight.foreground5": "#e7a98c",
      "editorBracketHighlight.foreground6": "#d3c6aa",
      "editorBracketHighlight.unexpectedBracket.foreground": "#e67e80",
      "editorBracketMatch.background": "#a7c0804d",
      "editorBracketMatch.border": "#a7c08073",
      "editorCodeLens.foreground": "#d2c6ab80",
      "editorCursor.background": "#232b16",
      "editorCursor.foreground": "#a7c080",
      "editorError.border": "#00000000",
      "editorError.foreground": "#e67e80",
      "editorGhostText.border": "#00000000",
      "editorGhostText.foreground": "#d2c6ab70",
      "editorGroup.border": "#303031",
      "editorGroup.dropBackground": "#a7c08014",
      "editorGroupHeader.border": "#00000000",
      "editorGroupHeader.noTabsBackground": "#282829",
      "editorGroupHeader.tabsBackground": "#222223",
      "editorGroupHeader.tabsBorder": "#303031",
      "editorGutter.addedBackground": "#83c092cc",
      "editorGutter.background": "#282829",
      "editorGutter.commentRangeForeground": "#353536",
      "editorGutter.deletedBackground": "#e67e80cc",
      "editorGutter.modifiedBackground": "#7fbbb3cc",
      "editorHoverWidget.background": "#353536",
      "editorHoverWidget.border": "#303031",
      "editorIndentGuide.activeBackground1": "#d3c6aa33",
      "editorIndentGuide.background1": "#d3c6aa0d",
      "editorInfo.border": "#00000000",
      "editorInlayHint.background": "#d2c6ab1a",
      "editorInlayHint.foreground": "#d2c6abb3",
      "editorInlayHint.parameterBackground": "#d2c6ab1a",
      "editorInlayHint.parameterForeground": "#d3c6aab3",
      "editorInlayHint.typeBackground": "#d3c6aa1a",
      "editorInlayHint.typeForeground": "#d3c6aab3",
      "editorLineNumber.activeForeground": "#d3c6aa",
      "editorLineNumber.foreground": "#524c43",
      "editorLink.activeForeground": "#d2c6ab",
      "editorMarkerNavigation.background": "#222223",
      "editorMarkerNavigationError.background": "#e67e808f",
      "editorMarkerNavigationInfo.background": "#7fbbb38f",
      "editorMarkerNavigationWarning.background": "#d3c6aa8f",
      "editorOverviewRuler.addedForeground": "#83c09280",
      "editorOverviewRuler.border": "#303031",
      "editorOverviewRuler.deletedForeground": "#e67e8080",
      "editorOverviewRuler.errorForeground": "#e67e80",
      "editorOverviewRuler.incomingContentForeground": "#83c09280",
      "editorOverviewRuler.infoForeground": "#7fbbb380",
      "editorOverviewRuler.modifiedForeground": "#7fbbb380",
      "editorOverviewRuler.selectionHighlightForeground": "#a7c08080",
      "editorOverviewRuler.warningForeground": "#d3c6aa",
      "editorRuler.foreground": "#d3c6aa0d",
      "editorStickyScroll.shadow": "#00000066",
      "editorStickyScrollHover.background": "#303031",
      "editorSuggestWidget.background": "#2d2d2e",
      "editorSuggestWidget.border": "#303031",
      "editorSuggestWidget.foreground": "#d3c6aa",
      "editorSuggestWidget.highlightForeground": "#a7c080",
      "editorSuggestWidget.selectedBackground": "#414143",
      "editorSuggestWidget.selectedIconForeground": "#d2c6ab",
      "editorUnnecessaryCode.border": "#00000000",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.border": "#00000000",
      "editorWarning.foreground": "#d3c6aa",
      "editorWhitespace.foreground": "#fefefe60",
      "editorWidget.background": "#353536",
      "editorWidget.border": "#414143",
      "editorWidget.resizeBorder": "#a7c08050",
      "errorLens.errorForeground": "#e67e80fc",
      "errorLens.hintForeground": "#7fbbb3fc",
      "errorLens.infoForeground": "#7fbbb3fc",
      "errorLens.warningForeground": "#d3c6aafc",
      "extensionButton.background": "#a7c08080",
      "extensionButton.foreground": "#dbe5cb",
      "extensionButton.hoverBackground": "#a7c08099",
      "extensionButton.prominentBackground": "#a7c0809d",
      "extensionButton.prominentHoverBackground": "#a7c080",
      "gitDecoration.conflictingResourceForeground": "#a7c080",
      "gitDecoration.deletedResourceForeground": "#e67e80",
      "gitDecoration.ignoredResourceForeground": "#fefefe4d",
      "gitDecoration.modifiedResourceForeground": "#7fbbb3",
      "gitDecoration.untrackedResourceForeground": "#83c092",
      "multiDiffEditor.border": "#303031",
      "multiDiffEditor.headerBackground": "#353536",
      "scmGraph.foreground1": "#85ab86",
      "scmGraph.foreground2": "#d3c6aa",
      "scmGraph.foreground3": "#83c092",
      "scmGraph.foreground4": "#e7a98c",
      "scmGraph.foreground5": "#d3c6aa",
      "scmGraph.historyItemBaseRefColor": "#83c092",
      "scmGraph.historyItemHoverAdditionsForeground": "#83c092",
      "scmGraph.historyItemHoverDefaultLabelBackground": "#d2c6ab",
      "scmGraph.historyItemHoverDefaultLabelForeground": "#989898",
      "scmGraph.historyItemHoverDeletionsForeground": "#e67e80",
      "scmGraph.historyItemHoverLabelForeground": "#989898",
      "scmGraph.historyItemRefColor": "#f88d6f",
      "scmGraph.historyItemRemoteRefColor": "#85ab86",
      "inlineChat.background": "#353536",
      "inlineChat.border": "#414143",
      "inlineChatInput.background": "#2d2d2e",
      "inlineChatInput.border": "#414143",
      "inlineChatInput.focusBorder": "#5a5a5d",
      "inlineEdit.gutterIndicator.background": "#d2c6ab80",
      "inlineEdit.gutterIndicator.primaryBackground": "#f3400eb3",
      "inlineEdit.gutterIndicator.primaryBorder": "#f3400e",
      "inlineEdit.gutterIndicator.primaryForeground": "#000000",
      "inlineEdit.gutterIndicator.secondaryBackground": "#759248b3",
      "inlineEdit.gutterIndicator.secondaryBorder": "#759248",
      "inlineEdit.gutterIndicator.secondaryForeground": "#000000",
      "inlineEdit.gutterIndicator.successfulBackground": "#4a935cb3",
      "inlineEdit.gutterIndicator.successfulBorder": "#4a935c",
      "inlineEdit.gutterIndicator.successfulForeground": "#000000",
      "inlineEdit.modifiedBackground": "#83c09226",
      "inlineEdit.modifiedBorder": "#83c092cc",
      "inlineEdit.modifiedChangedLineBackground": "#83c09214",
      "inlineEdit.modifiedChangedTextBackground": "#00000000",
      "inlineEdit.originalBackground": "#e67e8026",
      "inlineEdit.originalBorder": "#e67e80cc",
      "inlineEdit.originalChangedLineBackground": "#e67e80cc",
      "inlineEdit.originalChangedTextBackground": "#00000000",
      "inlineEdit.tabWillAcceptModifiedBorder": "#83c092",
      "inlineEdit.tabWillAcceptOriginalBorder": "#e67e80",
      "input.background": "#2e2e2f",
      "input.border": "#4f4f4f",
      "input.foreground": "#d2c6ab",
      "input.placeholderForeground": "#757575",
      "inputOption.activeBackground": "#747476",
      "inputOption.activeBorder": "#00000000",
      "inputOption.activeForeground": "#d2c6ab",
      "inputOption.hoverBackground": "#414143",
      "inputValidation.errorBackground": "#353536",
      "inputValidation.errorBorder": "#e67e80",
      "inputValidation.infoBackground": "#353536",
      "inputValidation.infoBorder": "#7fbbb3",
      "inputValidation.warningBackground": "#353536",
      "inputValidation.warningBorder": "#d3c6aa",
      "keybindingLabel.background": "#353536",
      "keybindingLabel.border": "#696969",
      "keybindingLabel.bottomBorder": "#696969",
      "keybindingLabel.foreground": "#9b9b9b",
      "list.activeSelectionBackground": "#a7c08033",
      "list.activeSelectionForeground": "#d2c6ab",
      "list.dropBackground": "#a7c08015",
      "list.errorForeground": "#e67e80",
      "list.focusBackground": "#a7c08040",
      "list.focusForeground": "#d2c6ab",
      "list.focusAndSelectionOutline": "#a7c080e6",
      "list.focusOutline": "#a7c080e6",
      "list.highlightForeground": "#a7c080",
      "list.hoverBackground": "#4e4e504d",
      "list.hoverForeground": "#ffffff",
      "list.inactiveSelectionBackground": "#bfd1a20d",
      "list.inactiveSelectionForeground": "#d2c6ab",
      "list.warningForeground": "#d3c6aa",
      "menu.background": "#353536",
      "menu.border": "#303031",
      "menu.foreground": "#d3c6aa",
      "menu.selectionBackground": "#3a3a3b",
      "menu.selectionForeground": "#e4ddcc",
      "menu.separatorBackground": "#30303180",
      "menubar.selectionBackground": "#3a3a3b",
      "menubar.selectionForeground": "#d3c6aa",
      "merge.border": "#303031",
      "merge.commonContentBackground": "#f88d6f30",
      "merge.commonHeaderBackground": "#f88d6f80",
      "merge.currentContentBackground": "#83c09230",
      "merge.currentHeaderBackground": "#83c09280",
      "merge.incomingContentBackground": "#7fbbb330",
      "merge.incomingHeaderBackground": "#7fbbb380",
      "minimap.background": "#282829",
      "minimap.errorHighlight": "#e67e80",
      "minimap.findMatchHighlight": "#a7c080",
      "minimap.selectionHighlight": "#a7c080",
      "minimap.selectionOccurrenceHighlight": "#a7c080",
      "minimap.warningHighlight": "#d3c6aa",
      "minimapGutter.addedBackground": "#83c092",
      "minimapGutter.deletedBackground": "#e67e80",
      "minimapGutter.modifiedBackground": "#7fbbb3",
      "notificationCenterHeader.background": "#353536",
      "notificationCenterHeader.foreground": "#d2c6ab",
      "notificationLink.foreground": "#a7c080",
      "notifications.background": "#353536",
      "notifications.border": "#303031",
      "notifications.foreground": "#d2c6ab",
      "notificationsErrorIcon.foreground": "#e67e80",
      "notificationsInfoIcon.foreground": "#85ab86",
      "notificationsWarningIcon.foreground": "#cfbc93",
      "panel.background": "#252526",
      "panel.border": "#303031",
      "panel.dropBorder": "#fefefe80",
      "panelInput.border": "#414143",
      "panelSection.border": "#303031",
      "panelSectionHeader.background": "#2d2d2e",
      "panelSectionHeader.border": "#303031",
      "panelSectionHeader.foreground": "#d2c6ab",
      "panelTitle.activeBorder": "#a7c080",
      "panelTitle.activeForeground": "#d3c6aa",
      "panelTitle.inactiveForeground": "#9a917f",
      "peekView.border": "#303031",
      "peekViewEditor.background": "#323233",
      "peekViewEditor.matchHighlightBackground": "#35353640",
      "peekViewEditor.matchHighlightBorder": "#00000000",
      "peekViewEditorGutter.background": "#323233",
      "peekViewEditorStickyScroll.background": "#303031",
      "peekViewResult.background": "#2e2e2f",
      "peekViewResult.fileForeground": "#d2c6ab",
      "peekViewResult.lineForeground": "#d2c6ab",
      "peekViewResult.matchHighlightBackground": "#a7c08080",
      "peekViewResult.selectionBackground": "#a7c08033",
      "peekViewResult.selectionForeground": "#d2c6ab",
      "peekViewTitle.background": "#353536",
      "peekViewTitleDescription.foreground": "#d2c6ab",
      "peekViewTitleLabel.foreground": "#d2c6ab",
      "pickerGroup.border": "#303031",
      "pickerGroup.foreground": "#d2c6ab",
      "profileBadge.background": "#a7c080",
      "profileBadge.foreground": "#282829",
      "progressBar.background": "#a7c080",
      "quickInput.background": "#303031",
      "quickInput.foreground": "#d2c6abb3",
      "quickInputList.focusBackground": "#a7c0801a",
      "quickInputList.focusForeground": "#ffffff",
      "quickInputList.focusIconForeground": "#d2c6ab",
      "quickInputTitle.background": "#222223",
      "sash.hoverBorder": "#a7c08050",
      "scrollbar.shadow": "#00000066",
      "scrollbarSlider.activeBackground": "#d2c6ab4d",
      "scrollbarSlider.background": "#d2c6ab26",
      "scrollbarSlider.hoverBackground": "#d2c6ab33",
      "settings.headerForeground": "#d2c6ab",
      "settings.modifiedItemIndicator": "#a7c080",
      "settings.settingsHeaderHoverForeground": "#d2c6ab",
      "sideBar.background": "#222223",
      "sideBar.border": "#303031",
      "sideBar.foreground": "#d3c6aacc",
      "sideBarSectionHeader.background": "#222223",
      "sideBarSectionHeader.border": "#303031",
      "sideBarSectionHeader.foreground": "#d2c6ab",
      "sideBarStickyScroll.background": "#1d1d1e",
      "sideBarStickyScroll.shadow": "#00000066",
      "sideBarTitle.foreground": "#fefefe",
      "statusBar.background": "#282829",
      "statusBar.border": "#303031",
      "statusBar.debuggingBackground": "#3f4339",
      "statusBar.debuggingForeground": "#adb183",
      "statusBar.foreground": "#d2c6ab80",
      "statusBar.noFolderBackground": "#222223",
      "statusBar.noFolderBorder": "#303031",
      "statusBar.noFolderForeground": "#d2c6abcc",
      "statusBarItem.activeBackground": "#353536",
      "statusBarItem.compactHoverBackground": "#a7c080cc",
      "statusBarItem.hoverBackground": "#4b5142",
      "statusBarItem.hoverForeground": "#d2c6ab",
      "statusBarItem.prominentBackground": "#282829",
      "statusBarItem.prominentForeground": "#000000",
      "statusBarItem.prominentHoverBackground": "#414143",
      "statusBarItem.prominentHoverForeground": "#282829",
      "statusBarItem.errorBackground": "#e67e80",
      "statusBarItem.errorForeground": "#551012",
      "statusBarItem.errorHoverBackground": "#eea9aa",
      "statusBarItem.errorHoverForeground": "#282829",
      "statusBarItem.offlineBackground": "#d3c6aa",
      "statusBarItem.offlineForeground": "#53462b",
      "statusBarItem.offlineHoverBackground": "#e4ddcc",
      "statusBarItem.offlineHoverForeground": "#282829",
      "statusBarItem.remoteBackground": "#e7a98c",
      "statusBarItem.remoteForeground": "#602c14",
      "statusBarItem.remoteHoverBackground": "#f0c9b6",
      "statusBarItem.remoteHoverForeground": "#282829",
      "statusBarItem.warningBackground": "#d3c6aa",
      "statusBarItem.warningForeground": "#53462b",
      "statusBarItem.warningHoverBackground": "#e4ddcc",
      "statusBarItem.warningHoverForeground": "#282829",
      "tab.activeBackground": "#282829",
      "tab.activeBorder": "#282829",
      "tab.hoverForeground": "#d3c6aa",
      "tab.activeBorderTop": "#a7c080",
      "tab.activeForeground": "#d2c6ab",
      "tab.border": "#303031",
      "tab.hoverBackground": "#373738",
      "tab.inactiveBackground": "#222223",
      "tab.inactiveForeground": "#9b9380",
      "tab.lastPinnedBorder": "#303031",
      "terminal.ansiBlack": "#282829",
      "terminal.ansiBlue": "#7fbbb3",
      "terminal.ansiBrightBlack": "#57575a",
      "terminal.ansiBrightBlue": "#62d8c9",
      "terminal.ansiBrightCyan": "#fca177",
      "terminal.ansiBrightGreen": "#67dc84",
      "terminal.ansiBrightMagenta": "#e6cd97",
      "terminal.ansiBrightRed": "#fd676a",
      "terminal.ansiBrightWhite": "#f6f3ed",
      "terminal.ansiBrightYellow": "#ff8968",
      "terminal.ansiCyan": "#e7a98c",
      "terminal.ansiGreen": "#83c092",
      "terminal.ansiMagenta": "#d3c6aa",
      "terminal.ansiRed": "#e67e80",
      "terminal.ansiWhite": "#d2c6ab",
      "terminal.ansiYellow": "#f88d6f",
      "terminal.background": "#252526",
      "terminal.foreground": "#d2c6ab",
      "terminal.selectionForeground": "#d2c6ab",
      "terminalCursor.background": "#282829",
      "terminalCursor.foreground": "#a7c080",
      "terminalStickyScrollHover.background": "#303031",
      "textBlockQuote.background": "#7fbbb333",
      "textBlockQuote.border": "#7fbbb3b9",
      "textCodeBlock.background": "#7fbbb333",
      "textLink.activeForeground": "#a7c080",
      "textLink.foreground": "#a7c080",
      "textPreformat.background": "#3f4339",
      "textPreformat.foreground": "#a7c080",
      "textSeparator.foreground": "#a7c080",
      "titleBar.activeBackground": "#222223",
      "titleBar.activeForeground": "#d2c6ab66",
      "titleBar.border": "#303031",
      "titleBar.inactiveBackground": "#222223",
      "titleBar.inactiveForeground": "#d2c6ab66",
      "toolbar.activeBackground": "#fefefe80",
      "toolbar.hoverBackground": "#323233",
      "tree.indentGuidesStroke": "#d3c6aa33",
      "walkThrough.embeddedEditorBackground": "#282829",
      "welcomePage.progress.background": "#353536",
      "welcomePage.progress.foreground": "#a7c080",
      "welcomePage.tileBackground": "#d2c6ab1a",
      "welcomePage.tileBorder": "#d2c6ab33",
      "welcomePage.tileHoverBackground": "#d2c6ab33",
      "widget.shadow": "#00000033",
      "widget.border": "#4f4f4f"
    },
    "tokenColors": [
      {
        "scope": [
          "support.module.elm",
          "entity.other.inherited-class.python",
          "variable.other.object",
          "support.other.namespace.php",
          "entity.other.attribute-name.namespace.xml",
          "record.accessor",
          "entity.name.record.field.accessor",
          "storage.modifier.import.java",
          "storage.modifier.import.groovy",
          "meta.import.swift entity.name.type.swift",
          "meta.member.access.python",
          "variable.other.property.ts",
          "variable.other.property.js",
          "constant.language.symbol.elixir",
          "punctuation.tag.liquid support.class.liquid",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
          "source.cpp meta.block.class.cpp meta.body.class.cpp",
          "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.quoted.docstring.multi",
          "comment.block.documentation source"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#d3c6aa66"
        }
      },
      {
        "scope": [
          "meta.section.struct.go variable.other.field.go",
          "meta.section.struct.go variable.other.declaration.go",
          "source",
          "support",
          "constant.character.entity.named",
          "meta.jsx.children",
          "source.lua",
          "text.html.derivative",
          "source.graphql meta.selections variable.other.alias.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
          "source.graphql variable.arguments.graphql",
          "JSXNested"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "constant",
          "support.constant.core.php"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "entity.name.function.decorator",
          "meta.decorator entity.name.function",
          "meta.decorator punctuation.decorator",
          "punctuation.definition.decorator",
          "meta.decorator variable.other.readwrite.ts",
          "variable.parameter.gdscript",
          "entity.name.variable.parameter",
          "variable.parameter"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "keyword.control.export",
          "support.type.object.module",
          "support.module",
          "support.node",
          "support.other.module",
          "entity.name.type.module",
          "entity.name.type.class.module",
          "keyword.control.module"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "meta.definition.method",
          "meta.function-call",
          "meta.function",
          "meta.method.declaration",
          "meta.function-call support",
          "variable.language.super.ts",
          "source.directive",
          "meta.function-call.generic",
          "meta.method-call.static.php",
          "meta.method-call.php",
          "meta.class storage.type",
          "meta.method.groovy",
          "meta.bracket.square.access",
          "entity.name.function-call.elixir",
          "punctuation.output.liquid support.variable.liquid",
          "meta.function.echo.edge source.js keyword.operator.error-control.js",
          "entity.name.type.variant.gdscript",
          "entity.name.function.powershell",
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "keyword.control.import",
          "meta.module.name.elm support",
          "meta.import.elm support",
          "keyword.control.at-rule",
          "punctuation.definition.keyword",
          "variable.control.import.include",
          "keyword.other.import.java"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.operator.pointer.go",
          "keyword.control",
          "keyword.control.conditional",
          "storage.modifier",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.begin.blade",
          "keyword.end.blade",
          "keyword.blade",
          "keyword.type-alias",
          "keyword.type",
          "support.class.console",
          "keyword.other.await",
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
          "keyword.other.new",
          "keyword.other.phpdoc",
          "keyword.other.use.php",
          "keyword.operator.logical.python",
          "keyword.other.import.static.groovy",
          "keyword.other.import.groovy",
          "punctuation.definition.attribute.swift",
          "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
          "meta.directive.on.svelte entity.name.type.svelte",
          "keyword.other.special-method.elixir",
          "keyword.edge",
          "entity.name.function.edge",
          "support.constant.edge",
          "keyword.other.gdscript",
          "keyword.other.onready.gdscript",
          "source.graphql meta.fragment.graphql keyword.on.graphql",
          "source.graphql meta.type.interface.graphql keyword.implements.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
          "keyword.operator.class.php",
          "keyword.operator.spread.php",
          "keyword.operator.type.php",
          "keyword.operator.increment-decrement.php",
          "keyword.operator.increment-increment.php",
          "keyword.operator.string.php",
          "keyword.operator.ternary.php",
          "keyword.operator.variadic.php",
          "keyword.operator.nullable-type.php",
          "keyword.other.use-as.php",
          "keyword.import.go",
          "keyword.operator.address.go",
          "keyword.operator.null-coalescing",
          "keyword.operator.arrow",
          "keyword.struct.go",
          "keyword.operator.liquid",
          "keyword.operator.optional.ts",
          "keyword.cmake",
          "keyword.codetag.notation",
          "keyword.operator.pipe.shell"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "meta.object-literal.key",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "keyword.other.definition.ini",
          "support.type.property-name",
          "entity.name.tag.yaml",
          "storage.type.function.arrow.tsx"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "keyword.operator",
          "keyword.operator.comparison",
          "keyword.operator.lua",
          "keyword.operator.assignment",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.math"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "keyword.operator.type.annotation.tsx",
          "punctuation",
          "attribute_value",
          "meta.brace",
          "punctuation.definition.parameters",
          "punctuation.definition.template-expression",
          "keyword.other",
          "punctuation.separator",
          "punctuation.definition.generic.begin",
          "punctuation.definition.generic.end",
          "meta.function.type-declaration",
          "keyword.other.colon.elm",
          "meta.record.field.elm keyword.other.elm",
          "keyword.other.period.elm",
          "meta.tag.xml",
          "meta.tag.preprocessor.xml",
          "punctuation.definition.block",
          "punctuation.accessor",
          "constant.name.attribute.tag.pug",
          "string.interpolated.pug",
          "keyword.other.whitespace.liquid",
          "meta.tag.template.block.twig",
          "meta.tag.template.value.twig",
          "begin.bracket",
          "end.bracket",
          "text.html.twig meta.tag.inline.any",
          "text.html.twig meta.tag.block.any",
          "support.function.construct.begin.blade",
          "support.function.construct.end.blade source.php",
          "support.function.construct.end.blade",
          "meta.function.echo.blade source.php",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "text.html.vue-html meta.tag.block.any",
          "keyword.operator.assignment.tsx",
          "meta.definition.method.signature.java",
          "meta.class.body.groovy",
          "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
          "punctuation.definition.list.begin.erlang",
          "meta.expression.parenthesized",
          "meta.definition.function.swift meta.parameter-clause.swift",
          "source.swift meta.function-call.swift",
          "punctuation.section.embedded.end.swift source.swift",
          "source.lua",
          "meta.function.lua",
          "punctuation.definition.keyword.svelte",
          "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
          "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
          "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
          "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
          "punctuation.output.liquid",
          "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
          "JSXAttrs keyword.operator.assignment.jsx",
          "meta.tag.attributes.js keyword.operator.assignment.js"
        ],
        "settings": {
          "foreground": "#d3c6aa66"
        }
      },
      {
        "scope": [
          "entity.name.package.go",
          "variable.language.this",
          "variable.language.special.self",
          "variable.parameter.function.language.special.self",
          "variable.language.this.php punctuation.definition.variable.php",
          "meta.class.body.php storage.type.php",
          "variable.parameter.function.swift entity.name.function.swift",
          "variable.other.jsdoc",
          "support.variable.drive.powershell",
          "entity.other.attribute.lua"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "storage",
          "meta.var.expr storage.type",
          "storage.type.function",
          "keyword.function",
          "storage.type.class",
          "storage.type.property",
          "keyword.other",
          "keyword.local.lua",
          "entity.name.class",
          "meta.function.lua keyword.control.lua",
          "storage.type.enum",
          "storage.type.type",
          "entity.name.type.class.java",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.name.type.class.groovy",
          "storage.type.rust",
          "entity.name.type.class.swift",
          "source.svelte meta.script.svelte source.ts entity.name.label.ts",
          "meta.directive.on.svelte keyword.control.svelte",
          "storage.type.const.gdscript",
          "storage.type.var.gdscript",
          "source.graphql declaration.meta.type keyword",
          "source.graphql meta.type.interface.graphql keyword.type.graphql",
          "source.graphql keyword.schema.graphql",
          "source.graphql keyword.operation.graphql",
          "source.graphql meta.enum.graphql keyword.enum.graphql",
          "source.graphql meta.fragment.graphql keyword.fragment.graphql",
          "storage.type.trait.php",
          "keyword.type.go",
          "keyword.var.go",
          "storage.type.powershell",
          "keyword.const.go",
          "keyword.storage.modifier"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "storage.type.interface",
          "keyword.control.export.tsx"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "string",
          "string.template",
          "string.quoted.single",
          "punctuation.quasi.element",
          "string.other.link",
          "constant.character.escape.regexp",
          "variable.parameter.url",
          "constant.other.symbol.quoted.single.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
          "meta.import.ts punctuation.definition.variable.svelte",
          "punctuation.definition.string.end.html source.css-ignored-vscode",
          "text.html.edge punctuation.definition.variable.js",
          "string.unquoted.plain.out.yaml",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "punctuation.definition.string.end.html source.css",
          "string.quoted.double.html source.css",
          "punctuation.definition.subshell.single.shell",
          "punctuation.section.parenthese.shell"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "string.quoted.docstring.multi.python",
          "string.quoted.double.block.python punctuation.definition.string.end.python",
          "string.quoted.double.block.python punctuation.definition.string.begin.python",
          "string.quoted.double.block.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python"
        ],
        "settings": {
          "foreground": "#8cb797cc"
        }
      },
      {
        "scope": [
          "entity.name.type.interface",
          "storage.type",
          "entity.other.inherited-class",
          "keyword.type",
          "storage.type.java",
          "storage.type.primitive.java",
          "storage.type.generic.java",
          "keyword.other.type",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php source.php",
          "punctuation.section.embedded.end.php",
          "storage.type.object.array.java",
          "storage.type.primitive.groovy",
          "storage.type.groovy",
          "meta.definition.type.body.swift meta.function-call.swift",
          "meta.definition.type.class.swift meta.inheritance-clause.swift",
          "variable.other.constant.elixir",
          "source.graphql declaration.meta.type support",
          "source.graphql meta.selections",
          "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
          "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
          "entity.name.type.class.php",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.other.alias.php",
          "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "punctuation.terminator",
          "support.variable",
          "meta.definition.variable",
          "variable",
          "variable.language",
          "entity.name.type.class.js",
          "entity.name.variable",
          "support.variable.magic",
          "meta.method.body",
          "entity.name.variable",
          "punctuation.definition.variable",
          "meta.class variable.object.property",
          "variable.other.constant entity.name.function",
          "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
          "meta.definition.variable.name.groovy",
          "meta.body.struct.cpp",
          "parameter.variable.function.elixir",
          "meta.directive.edge source.js",
          "meta.function.echo.edge source.js",
          "text.html.edge meta.function.echo.edge meta.function-call.js",
          "source.css variable.parameter.keyframe-list.css",
          "source.css meta.property-value.css",
          "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
          "source.css.scss meta.property-value.scss",
          "entity.name.variable.tuple-element",
          "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
          "support.variable.automatic.powershell",
          "storage.source.cmake",
          "entity.source.cmake"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "source.elm constant.type-constructor",
          "support.class"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "source.elm storage.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.other.html",
          "support.class.component.tsx",
          "support.class.component.html"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.to-file",
          "source.diff markup.inserted.diff",
          "source.diff punctuation.definition.to-file.diff",
          "source.diff punctuation.definition.inserted.diff"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.from-file.diff",
          "source.diff meta.diff.header.from-file",
          "source.diff markup.deleted.diff",
          "source.diff punctuation.definition.deleted.diff"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.command"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.range.diff",
          "source.diff meta.diff.range.unified"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "support.variable.liquid",
          "support.class.liquid"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "text.html.basic entity.name",
          "source.js-ignored-vscode",
          "meta.embedded.block.blade constant.other.php",
          "meta.embedded.block.blade keyword.operator.comparison.php",
          "meta.embedded.block.blade keyword.operator.arithmetic.php",
          "meta.tag.start.svelte keyword.control.svelte",
          "meta.tag.end.svelte keyword.control.svelte"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "meta.tag.sgml.doctype.html",
          "punctuation.definition.tag",
          "meta.tag.block.any",
          "meta.tag.block.any.html",
          "meta.tag.inline.any",
          "source.css-ignored-vscode",
          "meta.tag.metadata.style.end.html",
          "text.html.vue invalid.illegal.character-not-allowed-here.html",
          "meta.tag.inline.i.start.html",
          "meta.tag.structure.div.start.html",
          "punctuation.definition.tag.end.html.vue",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": "#85ab86b3"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "entity.name.tag.liquid",
          "invalid.deprecated.entity.other.attribute-name",
          "meta.embedded.block.blade storage.type.php"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.raw.markdown",
          "markup.fenced_code.block.markdown",
          "markup.fenced_code.block.markdown punctuation",
          "markup.raw.block.markdown"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "entity.name.section",
          "markup.heading.setext"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "markup.underline.link",
          "markup.underline.link.image"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "markup.bold",
          "punctuation.definition.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "markup.strikethrough",
          "punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "markup.italic",
          "punctuation.definition.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "markup.quote",
          "markup.quote.markdown punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
          "meta.embedded.block.frontmatter punctuation.definition.tag.end",
          "meta.embedded.block.frontmatter string.unquoted.plain.out"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#fefefe"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.class punctuation.definition.entity",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "support.type.vendored.property-name",
          "meta.property-list entity.name.tag.css",
          "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
          "meta.property-list meta.property-name",
          "source.css.scss meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#d2c6ab"
        }
      },
      {
        "scope": [
          "source.css.scss entity.other.attribute-name.id ",
          "source.css entity.other.attribute-name.id ",
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag.reference",
          "meta.property-list"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "keyword.other.unit"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "meta.property-value.css",
          "meta.attribute.style.html",
          "constant.language.null",
          "constant.language.boolean",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "entity.name.tag.css",
          "meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      }
    ],
    "semanticTokenColors": {
      "class.declaration": {
        "foreground": "#83c092"
      },
      "class.decorator": {
        "foreground": "#d3c6aa"
      },
      "enumMember": {
        "foreground": "#83c092"
      },
      "meta.decorator": {
        "foreground": "#d3c6aa"
      },
      "namespace": {
        "foreground": "#7fbbb3"
      },
      "parameter": {
        "foreground": "#d3c6aa"
      },
      "property": {
        "foreground": "#cfbc93"
      },
      "property.declaration": {
        "foreground": "#d3c6aa"
      },
      "variable": {
        "foreground": "#d3c6aa"
      },
      "variable.defaultLibrary": {
        "foreground": "#e7a98c"
      }
    }
  },
  {
    "id": "delirium-pumpkin",
    "label": "Delirium Pumpkin",
    "name": "DeliriumTheme Pumpkin",
    "type": "dark",
    "colors": {
      "contrastActiveBorder": "#00000000",
      "contrastBorder": "#00000000",
      "descriptionForeground": "#bbbbb580",
      "disabledForeground": "#bbbbb54d",
      "errorForeground": "#e67e80",
      "focusBorder": "#5b5f66",
      "foreground": "#bbbbb5",
      "icon.foreground": "#bbbbb54d",
      "selection.background": "#f88d6f61",
      "activityBar.activeBackground": "#f88d6f26",
      "activityBar.activeBorder": "#f88d6f",
      "activityBar.background": "#26272a",
      "activityBar.border": "#323538",
      "activityBar.dropBorder": "#f8f8f733",
      "activityBar.foreground": "#f88d6f",
      "activityBar.inactiveForeground": "#555d60",
      "activityBarBadge.background": "#f88d6f",
      "activityBarBadge.foreground": "#26272a",
      "activityBarTop.activeBorder": "#f88d6f",
      "activityBarTop.dropBorder": "#f8f8f733",
      "activityBarTop.foreground": "#f88d6f",
      "activityBarTop.inactiveForeground": "#525455",
      "badge.background": "#f88d6f",
      "badge.foreground": "#26272a",
      "breadcrumb.background": "#2b2d30",
      "breadcrumb.foreground": "#bcbcb4cc",
      "breadcrumbPicker.background": "#373a3d",
      "button.background": "#f88d6fcc",
      "button.border": "#ffffff26",
      "button.foreground": "#ffffffcc",
      "button.hoverBackground": "#f88d6f99",
      "button.secondaryBackground": "#3c3f43",
      "button.secondaryForeground": "#bbbbb5cc",
      "button.secondaryHoverBackground": "#43464b",
      "button.separator": "#ffffff4d",
      "charts.blue": "#85ab86",
      "charts.foreground": "#bbbbb5",
      "charts.green": "#7fbbb3",
      "charts.lines": "#bbbbb5",
      "charts.orange": "#cfbc93",
      "charts.purple": "#d3c6aa",
      "charts.red": "#e67e80",
      "charts.yellow": "#f88d6f",
      "checkbox.foreground": "#bbbbb5",
      "commandCenter.activeBackground": "#373a3d61",
      "commandCenter.activeForeground": "#bbbbb58f",
      "commandCenter.background": "#2b2d30",
      "commandCenter.border": "#323538",
      "commandCenter.foreground": "#f8f8f7",
      "debugConsole.errorForeground": "#e67e80",
      "debugConsole.infoForeground": "#7fbbb3",
      "debugConsole.warningForeground": "#d3c6aa",
      "debugExceptionWidget.background": "#373a3d",
      "debugExceptionWidget.border": "#323538",
      "debugIcon.breakpointCurrentStackframeForeground": "#e67e80",
      "debugIcon.breakpointDisabledForeground": "#e67e8080",
      "debugIcon.breakpointForeground": "#e67e80",
      "debugIcon.continueForeground": "#7fbbb3",
      "debugIcon.disconnectForeground": "#e67e80",
      "debugIcon.pauseForeground": "#e67e80",
      "debugIcon.restartForeground": "#83c092",
      "debugIcon.startForeground": "#83c092",
      "debugIcon.stepBackForeground": "#7fbbb3",
      "debugIcon.stepIntoForeground": "#7fbbb3",
      "debugIcon.stepOutForeground": "#7fbbb3",
      "debugIcon.stepOverForeground": "#7fbbb3",
      "debugIcon.stopForeground": "#e67e80",
      "debugToolBar.background": "#3e3636",
      "diffEditor.border": "#323538",
      "diffEditor.diagonalFill": "#373a3d",
      "diffEditor.insertedLineBackground": "#75ce8b1a",
      "diffEditor.insertedTextBackground": "#75ce8b1a",
      "diffEditor.insertedTextBorder": "#00000000",
      "diffEditor.move.border": "#f88d6f4d",
      "diffEditor.moveActive.border": "#f88d6fb3",
      "diffEditor.removedLineBackground": "#f272751a",
      "diffEditor.removedTextBackground": "#f272751a",
      "diffEditor.removedTextBorder": "#00000000",
      "diffEditor.unchangedCodeBackground": "#242527",
      "diffEditor.unchangedRegionBackground": "#242527",
      "diffEditor.unchangedRegionShadow": "#00000066",
      "diffEditorGutter.insertedLineBackground": "#00000000",
      "diffEditorGutter.removedLineBackground": "#00000000",
      "diffEditorOverview.insertedForeground": "#83c09226",
      "diffEditorOverview.removedForeground": "#e67e8030",
      "dropdown.background": "#313337",
      "dropdown.border": "#535454",
      "dropdown.foreground": "#bbbbb5",
      "dropdown.listBackground": "#313337",
      "editor.background": "#2b2d30",
      "editor.findMatchBackground": "#f88d6f30",
      "editor.findMatchBorder": "#f88d6f61",
      "editor.findMatchHighlightBackground": "#f88d6f3d",
      "editor.findMatchHighlightBorder": "#f88d6f5c",
      "editor.foldBackground": "#00000033",
      "editor.foldPlaceholderForeground": "#f8f8f7",
      "editor.foreground": "#bbbbb5",
      "editor.hoverHighlightBackground": "#f88d6f4d",
      "editor.inactiveSelectionBackground": "#f88d6f4d",
      "editor.lineHighlightBackground": "#f88d6f0f",
      "editor.lineHighlightBorder": "#f88d6f08",
      "editor.linkedEditingBackground": "#70c07233",
      "editor.rangeHighlightBackground": "#f88d6f3d",
      "editor.selectionBackground": "#f88d6f4d",
      "editor.selectionForeground": "#bbbbb5",
      "editor.selectionHighlightBackground": "#f88d6f14",
      "editor.selectionHighlightBorder": "#f88d6f4d",
      "editor.wordHighlightBackground": "#f88d6f73",
      "editor.wordHighlightBorder": "#f88d6f8a",
      "editor.wordHighlightStrongBackground": "#f88d6f4d",
      "editorBracketHighlight.foreground1": "#f88d6f",
      "editorBracketHighlight.foreground2": "#d3c6aa",
      "editorBracketHighlight.foreground3": "#85ab86",
      "editorBracketHighlight.foreground4": "#83c092",
      "editorBracketHighlight.foreground5": "#e7a98c",
      "editorBracketHighlight.foreground6": "#d3c6aa",
      "editorBracketHighlight.unexpectedBracket.foreground": "#e67e80",
      "editorBracketMatch.background": "#f88d6f4d",
      "editorBracketMatch.border": "#f88d6f73",
      "editorCodeLens.foreground": "#bbbbb580",
      "editorCursor.background": "#631905",
      "editorCursor.foreground": "#f88d6f",
      "editorError.border": "#00000000",
      "editorError.foreground": "#e67e80",
      "editorGhostText.border": "#00000000",
      "editorGhostText.foreground": "#bbbbb570",
      "editorGroup.border": "#323538",
      "editorGroup.dropBackground": "#f88d6f14",
      "editorGroupHeader.border": "#00000000",
      "editorGroupHeader.noTabsBackground": "#2b2d30",
      "editorGroupHeader.tabsBackground": "#26272a",
      "editorGroupHeader.tabsBorder": "#323538",
      "editorGutter.addedBackground": "#83c092cc",
      "editorGutter.background": "#2b2d30",
      "editorGutter.commentRangeForeground": "#373a3d",
      "editorGutter.deletedBackground": "#e67e80cc",
      "editorGutter.modifiedBackground": "#7fbbb3cc",
      "editorHoverWidget.background": "#373a3d",
      "editorHoverWidget.border": "#323538",
      "editorIndentGuide.activeBackground1": "#bcbcb433",
      "editorIndentGuide.background1": "#bcbcb40d",
      "editorInfo.border": "#00000000",
      "editorInlayHint.background": "#bbbbb51a",
      "editorInlayHint.foreground": "#bbbbb5b3",
      "editorInlayHint.parameterBackground": "#bbbbb51a",
      "editorInlayHint.parameterForeground": "#bcbcb4b3",
      "editorInlayHint.typeBackground": "#bcbcb41a",
      "editorInlayHint.typeForeground": "#bcbcb4b3",
      "editorLineNumber.activeForeground": "#bcbcb4",
      "editorLineNumber.foreground": "#484f52",
      "editorLink.activeForeground": "#bbbbb5",
      "editorMarkerNavigation.background": "#26272a",
      "editorMarkerNavigationError.background": "#e67e808f",
      "editorMarkerNavigationInfo.background": "#7fbbb38f",
      "editorMarkerNavigationWarning.background": "#d3c6aa8f",
      "editorOverviewRuler.addedForeground": "#83c09280",
      "editorOverviewRuler.border": "#323538",
      "editorOverviewRuler.deletedForeground": "#e67e8080",
      "editorOverviewRuler.errorForeground": "#e67e80",
      "editorOverviewRuler.incomingContentForeground": "#83c09280",
      "editorOverviewRuler.infoForeground": "#7fbbb380",
      "editorOverviewRuler.modifiedForeground": "#7fbbb380",
      "editorOverviewRuler.selectionHighlightForeground": "#f88d6f80",
      "editorOverviewRuler.warningForeground": "#d3c6aa",
      "editorRuler.foreground": "#bcbcb40d",
      "editorStickyScroll.shadow": "#00000066",
      "editorStickyScrollHover.background": "#323538",
      "editorSuggestWidget.background": "#303235",
      "editorSuggestWidget.border": "#323538",
      "editorSuggestWidget.foreground": "#bcbcb4",
      "editorSuggestWidget.highlightForeground": "#f88d6f",
      "editorSuggestWidget.selectedBackground": "#43464b",
      "editorSuggestWidget.selectedIconForeground": "#bbbbb5",
      "editorUnnecessaryCode.border": "#00000000",
      "editorUnnecessaryCode.opacity": "#000000aa",
      "editorWarning.border": "#00000000",
      "editorWarning.foreground": "#d3c6aa",
      "editorWhitespace.foreground": "#f8f8f760",
      "editorWidget.background": "#373a3d",
      "editorWidget.border": "#43464b",
      "editorWidget.resizeBorder": "#f88d6f50",
      "errorLens.errorForeground": "#e67e80fc",
      "errorLens.hintForeground": "#7fbbb3fc",
      "errorLens.infoForeground": "#7fbbb3fc",
      "errorLens.warningForeground": "#d3c6aafc",
      "extensionButton.background": "#f88d6f80",
      "extensionButton.foreground": "#fde2da",
      "extensionButton.hoverBackground": "#f88d6f99",
      "extensionButton.prominentBackground": "#f88d6f9d",
      "extensionButton.prominentHoverBackground": "#f88d6f",
      "gitDecoration.conflictingResourceForeground": "#f88d6f",
      "gitDecoration.deletedResourceForeground": "#e67e80",
      "gitDecoration.ignoredResourceForeground": "#f8f8f74d",
      "gitDecoration.modifiedResourceForeground": "#7fbbb3",
      "gitDecoration.untrackedResourceForeground": "#83c092",
      "multiDiffEditor.border": "#323538",
      "multiDiffEditor.headerBackground": "#373a3d",
      "scmGraph.foreground1": "#85ab86",
      "scmGraph.foreground2": "#d3c6aa",
      "scmGraph.foreground3": "#83c092",
      "scmGraph.foreground4": "#e7a98c",
      "scmGraph.foreground5": "#d3c6aa",
      "scmGraph.historyItemBaseRefColor": "#83c092",
      "scmGraph.historyItemHoverAdditionsForeground": "#83c092",
      "scmGraph.historyItemHoverDefaultLabelBackground": "#bbbbb5",
      "scmGraph.historyItemHoverDefaultLabelForeground": "#99998a",
      "scmGraph.historyItemHoverDeletionsForeground": "#e67e80",
      "scmGraph.historyItemHoverLabelForeground": "#99998a",
      "scmGraph.historyItemRefColor": "#f88d6f",
      "scmGraph.historyItemRemoteRefColor": "#85ab86",
      "inlineChat.background": "#373a3d",
      "inlineChat.border": "#43464b",
      "inlineChatInput.background": "#303235",
      "inlineChatInput.border": "#43464b",
      "inlineChatInput.focusBorder": "#5b5f66",
      "inlineEdit.gutterIndicator.background": "#bbbbb580",
      "inlineEdit.gutterIndicator.primaryBackground": "#f3400eb3",
      "inlineEdit.gutterIndicator.primaryBorder": "#f3400e",
      "inlineEdit.gutterIndicator.primaryForeground": "#000000",
      "inlineEdit.gutterIndicator.secondaryBackground": "#f3400eb3",
      "inlineEdit.gutterIndicator.secondaryBorder": "#f3400e",
      "inlineEdit.gutterIndicator.secondaryForeground": "#000000",
      "inlineEdit.gutterIndicator.successfulBackground": "#4a935cb3",
      "inlineEdit.gutterIndicator.successfulBorder": "#4a935c",
      "inlineEdit.gutterIndicator.successfulForeground": "#000000",
      "inlineEdit.modifiedBackground": "#83c09226",
      "inlineEdit.modifiedBorder": "#83c092cc",
      "inlineEdit.modifiedChangedLineBackground": "#83c09214",
      "inlineEdit.modifiedChangedTextBackground": "#00000000",
      "inlineEdit.originalBackground": "#e67e8026",
      "inlineEdit.originalBorder": "#e67e80cc",
      "inlineEdit.originalChangedLineBackground": "#e67e80cc",
      "inlineEdit.originalChangedTextBackground": "#00000000",
      "inlineEdit.tabWillAcceptModifiedBorder": "#83c092",
      "inlineEdit.tabWillAcceptOriginalBorder": "#e67e80",
      "input.background": "#313337",
      "input.border": "#535454",
      "input.foreground": "#bbbbb5",
      "input.placeholderForeground": "#797a7b",
      "inputOption.activeBackground": "#737981",
      "inputOption.activeBorder": "#00000000",
      "inputOption.activeForeground": "#bbbbb5",
      "inputOption.hoverBackground": "#43464b",
      "inputValidation.errorBackground": "#373a3d",
      "inputValidation.errorBorder": "#e67e80",
      "inputValidation.infoBackground": "#373a3d",
      "inputValidation.infoBorder": "#7fbbb3",
      "inputValidation.warningBackground": "#373a3d",
      "inputValidation.warningBorder": "#d3c6aa",
      "keybindingLabel.background": "#373a3d",
      "keybindingLabel.border": "#6d6d6d",
      "keybindingLabel.bottomBorder": "#6d6d6d",
      "keybindingLabel.foreground": "#a0a0a0",
      "list.activeSelectionBackground": "#f88d6f33",
      "list.activeSelectionForeground": "#bbbbb5",
      "list.dropBackground": "#f88d6f15",
      "list.errorForeground": "#e67e80",
      "list.focusBackground": "#f88d6f40",
      "list.focusForeground": "#bbbbb5",
      "list.focusAndSelectionOutline": "#f88d6fe6",
      "list.focusOutline": "#f88d6fe6",
      "list.highlightForeground": "#f88d6f",
      "list.hoverBackground": "#4f54584d",
      "list.hoverForeground": "#ffffff",
      "list.inactiveSelectionBackground": "#fab4a00d",
      "list.inactiveSelectionForeground": "#bbbbb5",
      "list.warningForeground": "#d3c6aa",
      "menu.background": "#373a3d",
      "menu.border": "#323538",
      "menu.foreground": "#bcbcb4",
      "menu.selectionBackground": "#3c3f43",
      "menu.selectionForeground": "#d4d4cf",
      "menu.separatorBackground": "#32353880",
      "menubar.selectionBackground": "#3c3f43",
      "menubar.selectionForeground": "#bcbcb4",
      "merge.border": "#323538",
      "merge.commonContentBackground": "#f88d6f30",
      "merge.commonHeaderBackground": "#f88d6f80",
      "merge.currentContentBackground": "#83c09230",
      "merge.currentHeaderBackground": "#83c09280",
      "merge.incomingContentBackground": "#7fbbb330",
      "merge.incomingHeaderBackground": "#7fbbb380",
      "minimap.background": "#2b2d30",
      "minimap.errorHighlight": "#e67e80",
      "minimap.findMatchHighlight": "#f88d6f",
      "minimap.selectionHighlight": "#f88d6f",
      "minimap.selectionOccurrenceHighlight": "#f88d6f",
      "minimap.warningHighlight": "#d3c6aa",
      "minimapGutter.addedBackground": "#83c092",
      "minimapGutter.deletedBackground": "#e67e80",
      "minimapGutter.modifiedBackground": "#7fbbb3",
      "notificationCenterHeader.background": "#373a3d",
      "notificationCenterHeader.foreground": "#bbbbb5",
      "notificationLink.foreground": "#f88d6f",
      "notifications.background": "#373a3d",
      "notifications.border": "#323538",
      "notifications.foreground": "#bbbbb5",
      "notificationsErrorIcon.foreground": "#e67e80",
      "notificationsInfoIcon.foreground": "#85ab86",
      "notificationsWarningIcon.foreground": "#cfbc93",
      "panel.background": "#282a2d",
      "panel.border": "#323538",
      "panel.dropBorder": "#f8f8f780",
      "panelInput.border": "#43464b",
      "panelSection.border": "#323538",
      "panelSectionHeader.background": "#2f3235",
      "panelSectionHeader.border": "#323538",
      "panelSectionHeader.foreground": "#bbbbb5",
      "panelTitle.activeBorder": "#f88d6f",
      "panelTitle.activeForeground": "#bcbcb4",
      "panelTitle.inactiveForeground": "#8c8d88",
      "peekView.border": "#323538",
      "peekViewEditor.background": "#35373b",
      "peekViewEditor.matchHighlightBackground": "#373a3d40",
      "peekViewEditor.matchHighlightBorder": "#00000000",
      "peekViewEditorGutter.background": "#35373b",
      "peekViewEditorStickyScroll.background": "#323538",
      "peekViewResult.background": "#313337",
      "peekViewResult.fileForeground": "#bbbbb5",
      "peekViewResult.lineForeground": "#bbbbb5",
      "peekViewResult.matchHighlightBackground": "#f88d6f80",
      "peekViewResult.selectionBackground": "#f88d6f33",
      "peekViewResult.selectionForeground": "#bbbbb5",
      "peekViewTitle.background": "#373a3d",
      "peekViewTitleDescription.foreground": "#bbbbb5",
      "peekViewTitleLabel.foreground": "#bbbbb5",
      "pickerGroup.border": "#323538",
      "pickerGroup.foreground": "#bbbbb5",
      "profileBadge.background": "#f88d6f",
      "profileBadge.foreground": "#2b2d30",
      "progressBar.background": "#f88d6f",
      "quickInput.background": "#323538",
      "quickInput.foreground": "#bbbbb5b3",
      "quickInputList.focusBackground": "#f88d6f1a",
      "quickInputList.focusForeground": "#ffffff",
      "quickInputList.focusIconForeground": "#bbbbb5",
      "quickInputTitle.background": "#26272a",
      "sash.hoverBorder": "#f88d6f50",
      "scrollbar.shadow": "#00000066",
      "scrollbarSlider.activeBackground": "#bbbbb54d",
      "scrollbarSlider.background": "#bbbbb526",
      "scrollbarSlider.hoverBackground": "#bbbbb533",
      "settings.headerForeground": "#bbbbb5",
      "settings.modifiedItemIndicator": "#f88d6f",
      "settings.settingsHeaderHoverForeground": "#bbbbb5",
      "sideBar.background": "#26272a",
      "sideBar.border": "#323538",
      "sideBar.foreground": "#bcbcb4cc",
      "sideBarSectionHeader.background": "#26272a",
      "sideBarSectionHeader.border": "#323538",
      "sideBarSectionHeader.foreground": "#bbbbb5",
      "sideBarStickyScroll.background": "#212225",
      "sideBarStickyScroll.shadow": "#00000066",
      "sideBarTitle.foreground": "#f8f8f7",
      "statusBar.background": "#2b2d30",
      "statusBar.border": "#323538",
      "statusBar.debuggingBackground": "#513f3c",
      "statusBar.debuggingForeground": "#dc9274",
      "statusBar.foreground": "#bbbbb580",
      "statusBar.noFolderBackground": "#26272a",
      "statusBar.noFolderBorder": "#323538",
      "statusBar.noFolderForeground": "#bbbbb5cc",
      "statusBarItem.activeBackground": "#373a3d",
      "statusBarItem.compactHoverBackground": "#f88d6fcc",
      "statusBarItem.hoverBackground": "#654942",
      "statusBarItem.hoverForeground": "#bbbbb5",
      "statusBarItem.prominentBackground": "#2b2d30",
      "statusBarItem.prominentForeground": "#000000",
      "statusBarItem.prominentHoverBackground": "#43464b",
      "statusBarItem.prominentHoverForeground": "#2b2d30",
      "statusBarItem.errorBackground": "#e67e80",
      "statusBarItem.errorForeground": "#551012",
      "statusBarItem.errorHoverBackground": "#eea9aa",
      "statusBarItem.errorHoverForeground": "#2b2d30",
      "statusBarItem.offlineBackground": "#d3c6aa",
      "statusBarItem.offlineForeground": "#53462b",
      "statusBarItem.offlineHoverBackground": "#e4ddcc",
      "statusBarItem.offlineHoverForeground": "#2b2d30",
      "statusBarItem.remoteBackground": "#e7a98c",
      "statusBarItem.remoteForeground": "#602c14",
      "statusBarItem.remoteHoverBackground": "#f0c9b6",
      "statusBarItem.remoteHoverForeground": "#2b2d30",
      "statusBarItem.warningBackground": "#d3c6aa",
      "statusBarItem.warningForeground": "#53462b",
      "statusBarItem.warningHoverBackground": "#e4ddcc",
      "statusBarItem.warningHoverForeground": "#2b2d30",
      "tab.activeBackground": "#2b2d30",
      "tab.activeBorder": "#2b2d30",
      "tab.hoverForeground": "#bcbcb4",
      "tab.activeBorderTop": "#f88d6f",
      "tab.activeForeground": "#bbbbb5",
      "tab.border": "#323538",
      "tab.hoverBackground": "#393c40",
      "tab.inactiveBackground": "#26272a",
      "tab.inactiveForeground": "#8d8e8a",
      "tab.lastPinnedBorder": "#323538",
      "terminal.ansiBlack": "#2b2d30",
      "terminal.ansiBlue": "#7fbbb3",
      "terminal.ansiBrightBlack": "#585c63",
      "terminal.ansiBrightBlue": "#62d8c9",
      "terminal.ansiBrightCyan": "#fca177",
      "terminal.ansiBrightGreen": "#67dc84",
      "terminal.ansiBrightMagenta": "#e6cd97",
      "terminal.ansiBrightRed": "#fd676a",
      "terminal.ansiBrightWhite": "#ececea",
      "terminal.ansiBrightYellow": "#ff8968",
      "terminal.ansiCyan": "#e7a98c",
      "terminal.ansiGreen": "#83c092",
      "terminal.ansiMagenta": "#d3c6aa",
      "terminal.ansiRed": "#e67e80",
      "terminal.ansiWhite": "#bbbbb5",
      "terminal.ansiYellow": "#f88d6f",
      "terminal.background": "#282a2d",
      "terminal.foreground": "#bbbbb5",
      "terminal.selectionForeground": "#bbbbb5",
      "terminalCursor.background": "#2b2d30",
      "terminalCursor.foreground": "#f88d6f",
      "terminalStickyScrollHover.background": "#323538",
      "textBlockQuote.background": "#7fbbb333",
      "textBlockQuote.border": "#7fbbb3b9",
      "textCodeBlock.background": "#7fbbb333",
      "textLink.activeForeground": "#f88d6f",
      "textLink.foreground": "#f88d6f",
      "textPreformat.background": "#513f3c",
      "textPreformat.foreground": "#f88d6f",
      "textSeparator.foreground": "#f88d6f",
      "titleBar.activeBackground": "#26272a",
      "titleBar.activeForeground": "#bbbbb566",
      "titleBar.border": "#323538",
      "titleBar.inactiveBackground": "#26272a",
      "titleBar.inactiveForeground": "#bbbbb566",
      "toolbar.activeBackground": "#f8f8f780",
      "toolbar.hoverBackground": "#34373b",
      "tree.indentGuidesStroke": "#bcbcb433",
      "walkThrough.embeddedEditorBackground": "#2b2d30",
      "welcomePage.progress.background": "#373a3d",
      "welcomePage.progress.foreground": "#f88d6f",
      "welcomePage.tileBackground": "#bbbbb51a",
      "welcomePage.tileBorder": "#bbbbb533",
      "welcomePage.tileHoverBackground": "#bbbbb533",
      "widget.shadow": "#00000033",
      "widget.border": "#535454"
    },
    "tokenColors": [
      {
        "scope": [
          "support.module.elm",
          "entity.other.inherited-class.python",
          "variable.other.object",
          "support.other.namespace.php",
          "entity.other.attribute-name.namespace.xml",
          "record.accessor",
          "entity.name.record.field.accessor",
          "storage.modifier.import.java",
          "storage.modifier.import.groovy",
          "meta.import.swift entity.name.type.swift",
          "meta.member.access.python",
          "variable.other.property.ts",
          "variable.other.property.js",
          "constant.language.symbol.elixir",
          "punctuation.tag.liquid support.class.liquid",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell punctuation.definition.variable.powershell",
          "meta.scriptblock.powershell meta.group.simple.subexpression.powershell meta.group.simple.subexpression.powershell meta.scriptblock.powershell meta.scriptblock.powershell support.variable.automatic.powershell",
          "source.cpp meta.block.class.cpp meta.body.class.cpp",
          "source.cpp meta.block.class.cpp meta.body.class.cpp meta.function.definition.special.constructor.cpp meta.body.function.definition.special.constructor.cpp"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "entity.name.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "comment",
          "punctuation.definition.comment",
          "string.quoted.docstring.multi",
          "comment.block.documentation source"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#bcbcb466"
        }
      },
      {
        "scope": [
          "meta.section.struct.go variable.other.field.go",
          "meta.section.struct.go variable.other.declaration.go",
          "source",
          "support",
          "constant.character.entity.named",
          "meta.jsx.children",
          "source.lua",
          "text.html.derivative",
          "source.graphql meta.selections variable.other.alias.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql variable.graphql",
          "source.graphql variable.arguments.graphql",
          "JSXNested"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "constant",
          "support.constant.core.php"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "entity.name.function.decorator",
          "meta.decorator entity.name.function",
          "meta.decorator punctuation.decorator",
          "punctuation.definition.decorator",
          "meta.decorator variable.other.readwrite.ts",
          "variable.parameter.gdscript",
          "entity.name.variable.parameter",
          "variable.parameter"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "keyword.control.export",
          "support.type.object.module",
          "support.module",
          "support.node",
          "support.other.module",
          "entity.name.type.module",
          "entity.name.type.class.module",
          "keyword.control.module"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "entity.name.function",
          "support.function",
          "meta.definition.method",
          "meta.function-call",
          "meta.function",
          "meta.method.declaration",
          "meta.function-call support",
          "variable.language.super.ts",
          "source.directive",
          "meta.function-call.generic",
          "meta.method-call.static.php",
          "meta.method-call.php",
          "meta.class storage.type",
          "meta.method.groovy",
          "meta.bracket.square.access",
          "entity.name.function-call.elixir",
          "punctuation.output.liquid support.variable.liquid",
          "meta.function.echo.edge source.js keyword.operator.error-control.js",
          "entity.name.type.variant.gdscript",
          "entity.name.function.powershell",
          "string.quoted.double.json"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "keyword.control.import",
          "meta.module.name.elm support",
          "meta.import.elm support",
          "keyword.control.at-rule",
          "punctuation.definition.keyword",
          "variable.control.import.include",
          "keyword.other.import.java"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "keyword.package.go",
          "keyword.operator.pointer.go",
          "keyword.control",
          "keyword.control.conditional",
          "storage.modifier",
          "keyword.operator.new",
          "keyword.operator.expression",
          "keyword.begin.blade",
          "keyword.end.blade",
          "keyword.blade",
          "keyword.type-alias",
          "keyword.type",
          "support.class.console",
          "keyword.other.await",
          "storage.type.class.jsdoc",
          "punctuation.definition.block.tag.jsdoc",
          "keyword.other.new",
          "keyword.other.phpdoc",
          "keyword.other.use.php",
          "keyword.operator.logical.python",
          "keyword.other.import.static.groovy",
          "keyword.other.import.groovy",
          "punctuation.definition.attribute.swift",
          "source.svelte meta.scope.tag.main.svelte meta.tag.start.svelte variable.function.svelte",
          "meta.directive.on.svelte entity.name.type.svelte",
          "keyword.other.special-method.elixir",
          "keyword.edge",
          "entity.name.function.edge",
          "support.constant.edge",
          "keyword.other.gdscript",
          "keyword.other.onready.gdscript",
          "source.graphql meta.fragment.graphql keyword.on.graphql",
          "source.graphql meta.type.interface.graphql keyword.implements.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.variables.graphql keyword.operator.nulltype.graphql",
          "source.graphql meta.type.interface.graphql meta.type.object.graphql keyword.operator.nulltype.graphql",
          "keyword.operator.class.php",
          "keyword.operator.spread.php",
          "keyword.operator.type.php",
          "keyword.operator.increment-decrement.php",
          "keyword.operator.increment-increment.php",
          "keyword.operator.string.php",
          "keyword.operator.ternary.php",
          "keyword.operator.variadic.php",
          "keyword.operator.nullable-type.php",
          "keyword.other.use-as.php",
          "keyword.import.go",
          "keyword.operator.address.go",
          "keyword.operator.null-coalescing",
          "keyword.operator.arrow",
          "keyword.struct.go",
          "keyword.operator.liquid",
          "keyword.operator.optional.ts",
          "keyword.cmake",
          "keyword.codetag.notation",
          "keyword.operator.pipe.shell"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "meta.object-literal.key",
          "variable.object.property"
        ],
        "settings": {
          "foreground": "#bcbcb4"
        }
      },
      {
        "scope": [
          "keyword.other.definition.ini",
          "support.type.property-name",
          "entity.name.tag.yaml",
          "storage.type.function.arrow.tsx"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "keyword.operator",
          "keyword.operator.comparison",
          "keyword.operator.lua",
          "keyword.operator.assignment",
          "keyword.operator.relational",
          "keyword.operator.increment",
          "keyword.operator.decrement",
          "keyword.operator.logical",
          "keyword.operator.arithmetic",
          "keyword.operator.math"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "keyword.operator.type.annotation.tsx",
          "punctuation",
          "attribute_value",
          "meta.brace",
          "punctuation.definition.parameters",
          "punctuation.definition.template-expression",
          "keyword.other",
          "punctuation.separator",
          "punctuation.definition.generic.begin",
          "punctuation.definition.generic.end",
          "meta.function.type-declaration",
          "keyword.other.colon.elm",
          "meta.record.field.elm keyword.other.elm",
          "keyword.other.period.elm",
          "meta.tag.xml",
          "meta.tag.preprocessor.xml",
          "punctuation.definition.block",
          "punctuation.accessor",
          "constant.name.attribute.tag.pug",
          "string.interpolated.pug",
          "keyword.other.whitespace.liquid",
          "meta.tag.template.block.twig",
          "meta.tag.template.value.twig",
          "begin.bracket",
          "end.bracket",
          "text.html.twig meta.tag.inline.any",
          "text.html.twig meta.tag.block.any",
          "support.function.construct.begin.blade",
          "support.function.construct.end.blade source.php",
          "support.function.construct.end.blade",
          "meta.function.echo.blade source.php",
          "punctuation.definition.list.begin.python",
          "punctuation.definition.list.end.python",
          "text.html.vue-html meta.tag.block.any",
          "keyword.operator.assignment.tsx",
          "meta.definition.method.signature.java",
          "meta.class.body.groovy",
          "meta.definition.method.groovy meta.method.body.java meta.declaration.assertion.groovy",
          "punctuation.definition.list.begin.erlang",
          "meta.expression.parenthesized",
          "meta.definition.function.swift meta.parameter-clause.swift",
          "source.swift meta.function-call.swift",
          "punctuation.section.embedded.end.swift source.swift",
          "source.lua",
          "meta.function.lua",
          "punctuation.definition.keyword.svelte",
          "source.svelte meta.scope.tag.SpeakerPicture.svelte meta.tag.start.svelte entity.other.attribute-name.svelte",
          "expression.embbeded.vue punctuation.definition.tag.begin.html.vue",
          "expression.embbeded.vue punctuation.definition.tag.end.html.vue",
          "source.graphql\tmeta.type.interface.graphql meta.type.object.graphql meta.type.list.graphql meta.brace.square.graphql",
          "punctuation.output.liquid",
          "text.html.liquid meta.tag.liquid punctuation.definition.tag.end.liquid",
          "JSXAttrs keyword.operator.assignment.jsx",
          "meta.tag.attributes.js keyword.operator.assignment.js"
        ],
        "settings": {
          "foreground": "#bcbcb466"
        }
      },
      {
        "scope": [
          "entity.name.package.go",
          "variable.language.this",
          "variable.language.special.self",
          "variable.parameter.function.language.special.self",
          "variable.language.this.php punctuation.definition.variable.php",
          "meta.class.body.php storage.type.php",
          "variable.parameter.function.swift entity.name.function.swift",
          "variable.other.jsdoc",
          "support.variable.drive.powershell",
          "entity.other.attribute.lua"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "storage",
          "meta.var.expr storage.type",
          "storage.type.function",
          "keyword.function",
          "storage.type.class",
          "storage.type.property",
          "keyword.other",
          "keyword.local.lua",
          "entity.name.class",
          "meta.function.lua keyword.control.lua",
          "storage.type.enum",
          "storage.type.type",
          "entity.name.type.class.java",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.name.type.class.groovy",
          "storage.type.rust",
          "entity.name.type.class.swift",
          "source.svelte meta.script.svelte source.ts entity.name.label.ts",
          "meta.directive.on.svelte keyword.control.svelte",
          "storage.type.const.gdscript",
          "storage.type.var.gdscript",
          "source.graphql declaration.meta.type keyword",
          "source.graphql meta.type.interface.graphql keyword.type.graphql",
          "source.graphql keyword.schema.graphql",
          "source.graphql keyword.operation.graphql",
          "source.graphql meta.enum.graphql keyword.enum.graphql",
          "source.graphql meta.fragment.graphql keyword.fragment.graphql",
          "storage.type.trait.php",
          "keyword.type.go",
          "keyword.var.go",
          "storage.type.powershell",
          "keyword.const.go",
          "keyword.storage.modifier"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "storage.type.interface",
          "keyword.control.export.tsx"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "string",
          "string.template",
          "string.quoted.single",
          "punctuation.quasi.element",
          "string.other.link",
          "constant.character.escape.regexp",
          "variable.parameter.url",
          "constant.other.symbol.quoted.single.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.begin.erlang",
          "constant.other.symbol.quoted.single.erlang punctuation.definition.symbol.end.erlang",
          "meta.import.ts punctuation.definition.variable.svelte",
          "punctuation.definition.string.end.html source.css-ignored-vscode",
          "text.html.edge punctuation.definition.variable.js",
          "string.unquoted.plain.out.yaml",
          "string.quoted.single.python punctuation.definition.string.begin.python",
          "string.quoted.single.python punctuation.definition.string.end.python",
          "punctuation.definition.string.end.html source.css",
          "string.quoted.double.html source.css",
          "punctuation.definition.subshell.single.shell",
          "punctuation.section.parenthese.shell"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "string.quoted.docstring.multi.python",
          "string.quoted.double.block.python punctuation.definition.string.end.python",
          "string.quoted.double.block.python punctuation.definition.string.begin.python",
          "string.quoted.double.block.python",
          "punctuation.definition.string.begin.python",
          "punctuation.definition.string.end.python"
        ],
        "settings": {
          "foreground": "#8cb797cc"
        }
      },
      {
        "scope": [
          "entity.name.type.interface",
          "storage.type",
          "entity.other.inherited-class",
          "keyword.type",
          "storage.type.java",
          "storage.type.primitive.java",
          "storage.type.generic.java",
          "keyword.other.type",
          "punctuation.section.embedded.begin.php",
          "punctuation.section.embedded.end.php source.php",
          "punctuation.section.embedded.end.php",
          "storage.type.object.array.java",
          "storage.type.primitive.groovy",
          "storage.type.groovy",
          "meta.definition.type.body.swift meta.function-call.swift",
          "meta.definition.type.class.swift meta.inheritance-clause.swift",
          "variable.other.constant.elixir",
          "source.graphql declaration.meta.type support",
          "source.graphql meta.selections",
          "source.graphql meta.enum.graphql meta.type.object.graphql constant.character.enum.graphql",
          "source.graphql meta.fragment.graphql entity.name.fragment.graphql",
          "entity.name.type.class.php",
          "support.class.php",
          "entity.other.inherited-class.php",
          "entity.other.alias.php",
          "meta.group.simple.subexpression.powershell meta.scriptblock.powershell storage.type.powershell"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "support.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "punctuation.terminator",
          "support.variable",
          "meta.definition.variable",
          "variable",
          "variable.language",
          "entity.name.type.class.js",
          "entity.name.variable",
          "support.variable.magic",
          "meta.method.body",
          "entity.name.variable",
          "punctuation.definition.variable",
          "meta.class variable.object.property",
          "variable.other.constant entity.name.function",
          "entity.name.variable.tuple-element.cs punctuation.separator.colon.cs",
          "meta.definition.variable.name.groovy",
          "meta.body.struct.cpp",
          "parameter.variable.function.elixir",
          "meta.directive.edge source.js",
          "meta.function.echo.edge source.js",
          "text.html.edge meta.function.echo.edge meta.function-call.js",
          "source.css variable.parameter.keyframe-list.css",
          "source.css meta.property-value.css",
          "source.css.scss meta.at-rule.keyframes.scss entity.name.function.scss",
          "source.css.scss meta.property-value.scss",
          "entity.name.variable.tuple-element",
          "meta.group.simple.subexpression.powershell support.variable.automatic.powershell",
          "support.variable.automatic.powershell",
          "storage.source.cmake",
          "entity.source.cmake"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "source.elm constant.type-constructor",
          "support.class"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "source.elm storage.type"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag",
          "entity.name.tag.other.html",
          "support.class.component.tsx",
          "support.class.component.html"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.to-file",
          "source.diff markup.inserted.diff",
          "source.diff punctuation.definition.to-file.diff",
          "source.diff punctuation.definition.inserted.diff"
        ],
        "settings": {
          "foreground": "#7fbbb3"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.from-file.diff",
          "source.diff meta.diff.header.from-file",
          "source.diff markup.deleted.diff",
          "source.diff punctuation.definition.deleted.diff"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "source.diff meta.diff.header.command"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "source.diff punctuation.definition.range.diff",
          "source.diff meta.diff.range.unified"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "support.variable.liquid",
          "support.class.liquid"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "text.html.basic entity.name",
          "source.js-ignored-vscode",
          "meta.embedded.block.blade constant.other.php",
          "meta.embedded.block.blade keyword.operator.comparison.php",
          "meta.embedded.block.blade keyword.operator.arithmetic.php",
          "meta.tag.start.svelte keyword.control.svelte",
          "meta.tag.end.svelte keyword.control.svelte"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "meta.tag.sgml.doctype.html",
          "punctuation.definition.tag",
          "meta.tag.block.any",
          "meta.tag.block.any.html",
          "meta.tag.inline.any",
          "source.css-ignored-vscode",
          "meta.tag.metadata.style.end.html",
          "text.html.vue invalid.illegal.character-not-allowed-here.html",
          "meta.tag.inline.i.start.html",
          "meta.tag.structure.div.start.html",
          "punctuation.definition.tag.end.html.vue",
          "invalid.illegal.character-not-allowed-here.html"
        ],
        "settings": {
          "foreground": "#85ab86b3"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name",
          "entity.name.tag.liquid",
          "invalid.deprecated.entity.other.attribute-name",
          "meta.embedded.block.blade storage.type.php"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "markup.inline.raw.string.markdown",
          "punctuation.definition.raw.markdown",
          "markup.fenced_code.block.markdown",
          "markup.fenced_code.block.markdown punctuation",
          "markup.raw.block.markdown"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "fenced_code.block.language"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "punctuation.definition.list.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "entity.name.section",
          "markup.heading.setext"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "punctuation.definition.heading"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "markup.underline.link",
          "markup.underline.link.image"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "markup.bold",
          "punctuation.definition.bold"
        ],
        "settings": {
          "fontStyle": "bold",
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "markup.strikethrough",
          "punctuation.definition.strikethrough"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "markup.italic",
          "punctuation.definition.italic"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "markup.quote",
          "markup.quote.markdown punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "punctuation.definition.quote.begin"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      },
      {
        "scope": [
          "meta.embedded.block.frontmatter punctuation.definition.tag.begin",
          "meta.embedded.block.frontmatter punctuation.definition.tag.end",
          "meta.embedded.block.frontmatter string.unquoted.plain.out"
        ],
        "settings": {
          "fontStyle": "italic",
          "foreground": "#f8f8f7"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-class"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.pseudo-element"
        ],
        "settings": {
          "foreground": "#d3c6aa"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.class",
          "entity.other.attribute-name.class punctuation.definition.entity",
          "support.type.property-name.json"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "entity.other.attribute-name.parent-selector-suffix punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#e7a98c"
        }
      },
      {
        "scope": [
          "support.type.property-name.css",
          "support.type.vendored.property-name",
          "meta.property-list entity.name.tag.css",
          "meta.property-list.scss meta.property-list.scss entity.name.tag.css",
          "meta.property-list meta.property-name",
          "source.css.scss meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#bbbbb5"
        }
      },
      {
        "scope": [
          "source.css.scss entity.other.attribute-name.id ",
          "source.css entity.other.attribute-name.id ",
          "entity.other.attribute-name.id punctuation.definition.entity"
        ],
        "settings": {
          "foreground": "#83c092"
        }
      },
      {
        "scope": [
          "entity.name.tag.reference",
          "meta.property-list"
        ],
        "settings": {
          "foreground": "#cfbc93"
        }
      },
      {
        "scope": [
          "keyword.other.unit"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "support.constant.property-value",
          "support.constant.font-name",
          "meta.property-value.css",
          "meta.attribute.style.html",
          "constant.language.null",
          "constant.language.boolean",
          "constant.language.undefined"
        ],
        "settings": {
          "foreground": "#f88d6f"
        }
      },
      {
        "scope": [
          "constant.numeric"
        ],
        "settings": {
          "foreground": "#e67e80"
        }
      },
      {
        "scope": [
          "entity.name.tag.css",
          "meta.property-list.scss entity.name.tag.css"
        ],
        "settings": {
          "foreground": "#85ab86"
        }
      }
    ],
    "semanticTokenColors": {
      "class.declaration": {
        "foreground": "#83c092"
      },
      "class.decorator": {
        "foreground": "#d3c6aa"
      },
      "enumMember": {
        "foreground": "#83c092"
      },
      "meta.decorator": {
        "foreground": "#d3c6aa"
      },
      "namespace": {
        "foreground": "#7fbbb3"
      },
      "parameter": {
        "foreground": "#bcbcb4"
      },
      "property": {
        "foreground": "#cfbc93"
      },
      "property.declaration": {
        "foreground": "#bcbcb4"
      },
      "variable": {
        "foreground": "#d3c6aa"
      },
      "variable.defaultLibrary": {
        "foreground": "#e7a98c"
      }
    }
  }
];

module.exports = { STARTER_TEMPLATES };
