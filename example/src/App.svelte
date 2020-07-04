<script>
  import SuperLayout from 'svelte-superlayout';

  let use_dark_theme = false;

  let layout = {
    type: 'hsplit',
    contents: [
      {
        type: 'tabs',
        contents: [
          { title: 'Project' },
          { title: 'Plugins' },
        ],
      },
      {
        type: 'vsplit',
        contents: [
          {
            type: 'tabs',
            current: 1,
            contents: [
              { title: 'rollup.config.js' },
              { title: 'README.md' },
              { title: 'SuperLayout.svelte' },
            ],
          },
          {
            type: 'tabs',
            contents: [
              { title: 'Terminal' },
              { title: 'Documentation' },
              { title: 'Debugger' },
            ],
          },
        ],
      },
    ]
  };
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
  <SuperLayout {layout} />
</main>
