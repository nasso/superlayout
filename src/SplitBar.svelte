<style>
  div {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    opacity: 0.0;

    background: var(--super--primary-fgb);
    border-radius: var(--super--splitter-border-radius);
    transition: opacity var(--super--transitions-duration);
  }

  div:hover {
    opacity: 1.0;
  }

  div.horizontal {
    cursor: ew-resize;
    width: var(--super--splitter-width);
    transform: translateX(-50%);
  }

  div.vertical {
    cursor: ns-resize;
    height: var(--super--splitter-width);
    transform: translateY(-50%);
  }
</style>

<script>
  export let split_pos;
  export let container;
  export let vertical = false;

  let mouse_is_down = false;

  function handleMouseDown(e) {
    if (!mouse_is_down && e.button === 0) {
      e.preventDefault();
      mouse_is_down = true;
    }
  }

  function handleMouseUp(e) {
    if (mouse_is_down && e.button === 0) {
      e.preventDefault();
      mouse_is_down = false;
    }
  }

  function handleMouseMove(e) {
    if (!mouse_is_down)
      return;

    e.preventDefault();
    let rect = container.getBoundingClientRect();

    if (vertical) {
      split_pos += e.movementY / rect.height;
    } else {
      split_pos += e.movementX / rect.width;
    }

    split_pos = Math.min(Math.max(split_pos, 0.0), 1.0);
  }
</script>

<svelte:window
  on:mouseup={handleMouseUp}
  on:mousemove={handleMouseMove}
/>

<div
  class:horizontal={!vertical}
  class:vertical
  on:mousedown={handleMouseDown}
></div>
