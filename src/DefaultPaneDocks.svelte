<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();
  const sides = [ "top", "right", "bottom", "left" ];

  let dropping_on = null;

  function on_dragover(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";

    let x = e.clientX;
    let y = e.clientY;
    let { top, left, width, height } = this.getBoundingClientRect();

    x -= left;
    y -= top;
    x /= width;
    y /= height;

    if (x < y) { // bottom left corner
      dropping_on = y < 1.0 - x ? "left" : "bottom";
    } else { // top right corner
      dropping_on = y < 1.0 - x ? "top" : "right";
    }
  }

  function on_dragleave(e) {
    dropping_on = null;
  }

  function on_drop(e) {
    const data = JSON.parse(e.dataTransfer.getData('application/x-superlayout'));

    e.preventDefault();
    dispatch('dock', { data, side: dropping_on });
  }
</script>

<style>
  .dropzones {
    position: relative;
  }

  .dropzones > * {
    display: grid;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    opacity: 0.0;
    background: var(--super--secondary-bg);
    border: 1px dashed var(--super--secondary-fg);
    border-radius: var(--super--border-radius);

    pointer-events: none;

    transition: opacity var(--super--transitions-duration);
  }

  .dropzones > .dropping {
    opacity: 0.5;
  }

  .dropzones > .top, .dropzones > .bottom {
    height: 50%;
  }

  .dropzones > .right, .dropzones > .left {
    width: 50%;
  }

  .dropzones > .top {
    bottom: initial;
  }

  .dropzones > .right {
    left: initial;
  }

  .dropzones > .bottom {
    top: initial;
  }

  .dropzones > .left {
    right: initial;
  }
</style>

<div class="dropzones"
  on:drop={on_drop}
  on:dragover={on_dragover}
  on:dragleave={on_dragleave}
>
  {#each sides as side}
    <div
      class={side}
      class:dropping={dropping_on === side}
    ></div>
  {/each}
</div>
