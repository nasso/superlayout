<script>
  export let vertical = false;
  export let split_pos = 0.25;
</script>

<style>
  div {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    display: inline-grid;
    gap: var(--super--gaps);
  }

  div.horizontal {
    grid-template-areas:
      'first second'
      'first second';
  }

  div.vertical {
    grid-template-areas:
      'first first'
      'second second';
  }

  div > :global(*:nth-child(1)) {
    grid-area: first;
  }

  div > :global(*:nth-child(2)) {
    grid-area: second;
  }
</style>

<div
  class:vertical
  class:horizontal={!vertical}
  style={`
    grid-template-rows: ${split_pos * 100}% auto;
    grid-template-columns: ${split_pos * 100}% auto;
  `}
>
  <slot />
</div>
