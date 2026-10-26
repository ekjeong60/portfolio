import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { pages, groups, URLS } from './content.js';
import './styles.css';
import './enhancements.css';

type Page = {
  file: string;
  folder?: string;
  language: string;
  render: () => string;
};

const portfolioPages = pages as Record<string, Page>;

const folders = groups as {
  title: string;
  files: string[];
}[];

const getInitial = () => {
  const key = decodeURIComponent(location.hash.slice(1));
  return portfolioPages[key] ? key : 'welcome';
};

function App() {
  const [active, setActive] = useState(getInitial);
  const [tabs, setTabs] = useState<string[]>(() => [getInitial()]);
  const [expanded, setExpanded] = useState<string[]>(
    folders.map((f) => f.title)
  );

  const [palette, setPalette] = useState(false);
  const [search, setSearch] = useState('');
  const [terminal, setTerminal] = useState(false);
  const [command, setCommand] = useState('');

  const [lines, setLines] = useState<string[]>([
    'Ethan Jeong Portfolio Terminal v2.0',
    'Type "help" to see available commands.',
  ]);

  const [mobileExplorer, setMobileExplorer] = useState(false);

  const editorRef = useRef<HTMLElement>(null);
  const commandRef = useRef<HTMLInputElement>(null);
  const paletteRef = useRef<HTMLInputElement>(null);

  // Navigation
  function navigate(id: string) {
    if (!portfolioPages[id]) return;

    setActive(id);
    setTabs((old) => (old.includes(id) ? old : [...old, id]));

    if (portfolioPages[id].folder) {
      setExpanded((old) =>
        Array.from(new Set([...old, portfolioPages[id].folder!]))
      );
    }

    location.hash = id;
    setPalette(false);
    setMobileExplorer(false);
  }

  function closeTab(id: string) {
    const remaining = tabs.filter((x) => x !== id);
    const next = remaining.length ? remaining : ['welcome'];

    setTabs(next);

    if (active === id) {
      setActive(next[next.length - 1]);
      location.hash = next[next.length - 1];
    }
  }

  // Effects
  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.scrollTop = 0;
    }
  }, [active]);

  useEffect(() => {
    const onHash = () => {
      const key = getInitial();

      setActive(key);
      setTabs((old) => (old.includes(key) ? old : [...old, key]));
    };

    const onKey = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.shiftKey &&
        e.key.toLowerCase() === 'p'
      ) {
        e.preventDefault();
        setPalette((v) => !v);
      }

      if ((e.ctrlKey || e.metaKey) && e.key === '`') {
        e.preventDefault();
        setTerminal((v) => !v);
      }

      if (e.key === 'Escape') {
        setPalette(false);
      }
    };

    window.addEventListener('hashchange', onHash);
    window.addEventListener('keydown', onKey);

    return () => {
      window.removeEventListener('hashchange', onHash);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (palette) {
      paletteRef.current?.focus();
    }
  }, [palette]);

  useEffect(() => {
    if (terminal) {
      commandRef.current?.focus();
    }
  }, [terminal]);

  // Terminal commands
  function execute(raw: string) {
    const cmd = raw.trim().toLowerCase();
    setCommand('');

    if (!cmd) return;

    if (cmd === 'clear') {
      setLines([]);
      return;
    }

    let output = '';

    if (cmd === 'help') {
      output =
        'Commands: help, about, projects, skills, experience, certifications, resume, github, clear';
    } else if (cmd === 'about') {
      navigate('story');
      output = 'Opened story.md';
    } else if (
      ['projects', 'skills', 'experience', 'certifications'].includes(cmd)
    ) {
      navigate(cmd);
      output = `Opened ${portfolioPages[cmd].file}`;
    } else if (cmd === 'resume') {
      window.open(URLS.resume, '_blank', 'noopener,noreferrer');
      output = 'Opening resume PDF...';
    } else if (cmd === 'github') {
      window.open(URLS.github, '_blank', 'noopener,noreferrer');
      output = 'Opening GitHub...';
    } else {
      output = `Command not found: ${raw}. Type help for commands.`;
    }

    setLines((old) => [
      ...old,
      `ethan@portfolio ~ % ${raw}`,
      output,
    ]);
  }

  // Derived state
  const filtered = Object.entries(portfolioPages).filter(([id, page]) =>
    `${id} ${page.file}`.toLowerCase().includes(search.toLowerCase())
  );

  const selected = portfolioPages[active];

  return (
    <div className="app-shell">
      {/* Title Bar */}
      <header className="titlebar">
        <span className="brand-symbol">⌁</span>

        <span className="menutext">
          File&nbsp;&nbsp; Edit&nbsp;&nbsp; View&nbsp;&nbsp; Go&nbsp;&nbsp;
          Run&nbsp;&nbsp; Terminal
        </span>

        <button
          className="window-name title-command"
          onClick={() => setPalette(true)}
          aria-label="Open command palette"
        >
          ⌕ &nbsp; ethan-jeong — portfolio — Visual Studio Code

          <span className="shortcut-hint">
            Ctrl Shift P
          </span>
        </button>

        <div className="window-buttons" aria-hidden="true">
          <span>-</span>
          <span>□</span>
          <span>×</span>
        </div>
      </header>

      {/* Workspace */}
      <div className="workspace">
        {/* Activity Bar */}
        <aside className="activity-bar" aria-label="Sections">
          {(
            [
              ['welcome', '▤', 'Explorer'],
              ['projects', '⌘', 'Projects'],
              ['certifications', '♧', 'Certifications'],
              ['experience', '▣', 'Experience'],
            ] as const
          ).map(([id, sym, label]) => (
            <button
              key={id}
              className={`activity ${active === id ? 'active' : ''}`}
              title={label}
              aria-label={label}
              onClick={() =>
                id === 'welcome' && window.innerWidth <= 620
                  ? setMobileExplorer((v) => !v)
                  : navigate(id)
              }
            >
              <span className="activity-glyph">{sym}</span>
            </button>
          ))}

          <button
            className="activity"
            title="Terminal"
            aria-label="Toggle terminal"
            onClick={() => setTerminal((v) => !v)}
          >
            <span className="activity-glyph">⌁</span>
          </button>

          <a
            className="activity bottom"
            href={URLS.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            aria-label="GitHub"
          >
            <span className="activity-glyph">⑂</span>
          </a>
        </aside>

        {/* File Explorer */}
        <aside
          className={`explorer ${mobileExplorer ? 'open' : ''}`}
          id="explorer"
        >
          <div className="explorer-header">
            EXPLORER

            <button
              id="collapse-all"
              title="Toggle folders"
              onClick={() =>
                setExpanded((old) =>
                  old.length ? [] : folders.map((f) => f.title)
                )
              }
            >
              ⋯
            </button>
          </div>

          <div className="root-label">
            ⌄ &nbsp;ETHAN-JEONG
          </div>

          <nav id="tree" aria-label="Portfolio file explorer">
            {folders.map((folder) => (
              <div className="tree-folder" key={folder.title}>
                <button
                  className="folder-button"
                  aria-expanded={expanded.includes(folder.title)}
                  onClick={() =>
                    setExpanded((old) =>
                      old.includes(folder.title)
                        ? old.filter((f) => f !== folder.title)
                        : [...old, folder.title]
                    )
                  }
                >
                  <span className="folder-chevron">
                    {expanded.includes(folder.title) ? '⌄' : '›'}
                  </span>

                  <span className="folder-icon">▰</span>
                  {folder.title}
                </button>

                {expanded.includes(folder.title) && (
                  <div className="folder-children">
                    {folder.files.map((id) => {
                      const file = portfolioPages[id].file;
                      const ext = file.split('.').pop() || '';

                      return (
                        <button
                          key={id}
                          className={`file-button ${
                            active === id ? 'current' : ''
                          }`}
                          onClick={() => navigate(id)}
                        >
                          <span className={`file-icon ${ext}`}>
                            {ext === 'md'
                              ? 'M↓'
                              : ext === 'py'
                                ? 'Py'
                                : ext === 'json'
                                  ? '{}'
                                  : ext === 'java'
                                    ? 'J'
                                    : 'JS'}
                          </span>

                          <span>{file}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="explorer-footer">
            <span className="online-dot" />
            Open to opportunities
          </div>
        </aside>

        {/* Editor Region */}
        <section
          className="editor-region"
          aria-label="Portfolio content"
        >
          {/* Editor Tabs */}
          <div
            className="tabbar"
            role="tablist"
            aria-label="Open pages"
          >
            {tabs.map((id) => (
              <div
                key={id}
                className={`tab ${active === id ? 'selected' : ''}`}
                role="tab"
                aria-selected={active === id}
              >
                <button
                  className="tab-open"
                  onClick={() => navigate(id)}
                >
                  <span
                    className={`file-icon ${
                      portfolioPages[id].file.split('.').pop()
                    }`}
                  >
                    ◈
                  </span>

                  <span className="tab-name">
                    {portfolioPages[id].file}
                  </span>
                </button>

                <button
                  className="tab-close-button"
                  onClick={() => closeTab(id)}
                  aria-label={`Close ${portfolioPages[id].file}`}
                >
                  ×
                </button>
              </div>
            ))}
          </div>

          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            ethan-jeong &nbsp; › &nbsp;

            {selected.folder
              ? `${selected.folder}  ›  `
              : ''}

            {selected.file}
          </div>

          {/* Main Content */}
          <main
            className="editor-content"
            id="content"
            ref={editorRef}
            tabIndex={-1}
            onClick={(e) => {
              const node = (
                e.target as HTMLElement
              ).closest<HTMLElement>('[data-open]');

              if (node?.dataset.open) {
                navigate(node.dataset.open);
              }
            }}
          >
            <div
              className="inner"
              dangerouslySetInnerHTML={{
                __html: selected.render(),
              }}
            />
          </main>

          {/* Terminal Panel */}
          {terminal && (
            <div className="terminal-panel">
              <div className="terminal-header">
                <span>TERMINAL</span>

                <button
                  onClick={() => setTerminal(false)}
                  aria-label="Close terminal"
                >
                  ×
                </button>
              </div>

              <div className="terminal-output">
                {lines.map((line, i) => (
                  <div key={i}>{line}</div>
                ))}
              </div>

              <form
                className="terminal-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  execute(command);
                }}
              >
                <span>ethan@portfolio ~ %</span>

                <input
                  ref={commandRef}
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  aria-label="Terminal command"
                  autoComplete="off"
                  spellCheck={false}
                />
              </form>
            </div>
          )}
        </section>
      </div>

      {/* Status Bar */}
      <footer className="statusbar">
        <div className="status-left">
          <span className="remote">❯❮</span>
          <span>⑂ &nbsp;main*</span>

          <span className="hide-mobile">
            ⊙ 0 &nbsp; ⚠ 0
          </span>
        </div>

        <div className="status-right">
          <button onClick={() => setTerminal((v) => !v)}>
            ⌁ Terminal
          </button>

          <span className="hide-mobile">
            Portfolio • 2026
          </span>

          <span>UTF-8</span>
          <span>{selected.language}</span>

          <span className="hide-mobile">
            {'{ }'} &nbsp;Ethan
          </span>
        </div>
      </footer>

      {/* Command Palette */}
      {palette && (
        <div
          className="palette-backdrop"
          onMouseDown={() => setPalette(false)}
        >
          <div
            className="palette"
            role="dialog"
            aria-label="Command palette"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <input
              ref={paletteRef}
              placeholder="Search files or type a command..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && filtered[0]) {
                  navigate(filtered[0][0]);
                  setSearch('');
                }
              }}
            />

            <div className="palette-results">
              {filtered.slice(0, 12).map(([id, page]) => (
                <button
                  key={id}
                  onClick={() => {
                    navigate(id);
                    setSearch('');
                  }}
                >
                  <span>◈</span> {page.file}

                  <small>
                    {page.folder || 'root'}
                  </small>
                </button>
              ))}

              {filtered.length === 0 && (
                <div className="palette-empty">
                  No matching files
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Mount React application
createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);