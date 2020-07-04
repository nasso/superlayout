<script>
  import {
    Editor as EditorView,
    Project as ProjectView,
    Terminal as TerminalView,
  } from './views';
  import SuperLayout from 'svelte-superlayout';

  let use_dark_theme = false;
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
        throw new Error("Failed!");
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

  main.dark-theme {
    --super-primary-bg: #1D1F21;
    --super-primary-fg: #C5C8C6;
    --super-primary-fgb: #969896;
    --super-secondary-bg: #282A2E;
    --super-secondary-fg: #ECEBEC;
    --super-secondary-fgb: #929593;
  }
</style>

<main
  class:light-theme={!use_dark_theme}
  class:dark-theme={use_dark_theme}
>
  <SuperLayout {layout} {makeComponent} />
</main>
