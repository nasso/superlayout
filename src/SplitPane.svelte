<script>
  import SplitBar from './SplitBar.svelte';

  export let vertical = false;
  export let split_pos = 0.5;

  let root_el;
</script>

<style>
  div {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    display: inline-grid;
    gap: calc(var(--super--gaps) / 2);
  }

  div.horizontal {
    grid-template-areas:
      'first splitter second'
      'first splitter second'
      'first splitter second';
  }

  div.vertical {
    grid-template-areas:
      'first first first'
      'splitter splitter splitter'
      'second second second';
  }

  div > :global(*:nth-child(1)) {
    grid-area: first;
  }

  div > :global(*:nth-child(2)) {
    grid-area: second;
  }

  div.splitter {
    grid-area: splitter;
  }
</style>

<div
  bind:this={root_el}
  class:vertical
  class:horizontal={!vertical}
  style={`
    grid-template-rows: calc(${split_pos * 100}% - var(--super--gaps) / 2) 0px auto;
    grid-template-columns: calc(${split_pos * 100}% - var(--super--gaps) / 2) 0px auto;
  `}
>
  <slot />
  <div class='splitter'>
    <SplitBar bind:split_pos {vertical} container={root_el} />
  </div>
</div>
