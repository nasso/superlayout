<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import SuperLayout from 'svelte-superlayout';
  import { DefaultTab } from 'svelte-superlayout';
  import {
    Editor as EditorView,
    Project as ProjectView,
    Terminal as TerminalView,
  } from './views';
  import CustomTab from './CustomTab.svelte';

  setContext('available_themes', ['system', 'light', 'dark', 'slim', 'light_slim', 'dark_slim', 'custom_tabs']);

  let theme = writable('system');
  setContext('current_theme', theme);

  let layout = {
    type: 'hsplit',
    split_pos: 0.2,
    contents: [
      {
        type: 'tabs',
        contents: [
          { title: 'Project', data: 'project' },
          { title: 'Plugins', data: 'plugins' },
        ],
      },
      {
        type: 'vsplit',
        split_pos: 0.7,
        contents: [
          {
            type: 'tabs',
            current: 1,
            contents: [
              { title: 'rollup.config.js', data: 'editor' },
              { title: 'README.md', data: 'editor' },
              { title: 'SuperLayout.svelte', data: 'editor' },
            ],
          },
          {
            type: 'tabs',
            contents: [
              { title: 'Terminal', data: 'terminal' },
              { title: 'Documentation', data: 'docs' },
              { title: 'Debugger', data: 'debug' },
            ],
          },
        ],
      },
    ]
  };

  function makeComponent(target, data) {
    switch (data) {
      case 'project':
        new ProjectView({ target });
        break;
      case 'editor':
        new EditorView({ target });
        break;
      case 'terminal':
        new TerminalView({ target });
        break;
      default:
        throw new Error("i didn't implement this view so you can look at this error screen");
    }
  }
</script>

<style>
  main {
    display: inline-block;

    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
  }

  @media (prefers-color-scheme: dark) {
    main.theme-system, main.theme-slim {
      --super-primary-bg: #282A2E;
      --super-primary-fg: #ECEBEC;
      --super-primary-fgb: #929593;
      --super-secondary-bg: #1D1F21;
      --super-secondary-fg: #C5C8C6;
      --super-secondary-fgb: #969896;
    }
  }

  main.theme-dark, main.theme-dark_slim {
    --super-primary-bg: #282A2E;
    --super-primary-fg: #ECEBEC;
    --super-primary-fgb: #929593;
    --super-secondary-bg: #1D1F21;
    --super-secondary-fg: #C5C8C6;
    --super-secondary-fgb: #969896;
  }

  main.theme-slim, main.theme-dark_slim, main.theme-light_slim {
    --super-gaps: 1px;
    --super-border-radius: 0px;
    --super-tab-height: 24px;
    --super-tab-padding: 16px;
    --super-splitter-width: 6px;
    --super-splitter-border-radius: 0px;
  }
</style>

<main class={`theme-${$theme}`}>
  <SuperLayout {layout} {makeComponent} tabs={$theme === 'custom_tabs' ? CustomTab : DefaultTab} />
</main>
