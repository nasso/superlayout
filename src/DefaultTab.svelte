<script>
  import { createEventDispatcher } from 'svelte';

  export let title = "Tab";
  export let current = false;
  export let ghost = false;

  const dispatch = createEventDispatcher();

  function makeCurrent() {
    dispatch('makeCurrent');
  }

  function on_mousedown(e) {
    if (e.button === 0)
      makeCurrent();
  }

  function on_touchstart(e) {
    makeCurrent();
  }
</script>

<style>
  .tab {
    all: unset;
    border: none;
    user-select: none;

    background: var(--super--secondary-bg);
    color: var(--super--secondary-fgb);
    padding: 0px var(--super--tab-padding);
    border-radius: var(--super--border-radius);
    font-size: var(--super--tab-font-size);
    line-height: var(--super--tab-height);
    vertical-align: middle;

    position: relative;

    transition:
      color var(--super--transitions-duration),
      background var(--super--transitions-duration);
  }

  .tab.current {
    background: var(--super--primary-bg);
    color: var(--super--primary-fg);
  }

  .tab.ghost {
    box-shadow:
      0 4px 5px 0 rgba(0, 0, 0, 0.14),
      0 1px 10px 0 rgba(0, 0, 0, 0.12),
      0 2px 4px -1px rgba(0, 0,0, 0.20);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus::after {
    content: '';

    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    pointer-events: none;

    border-radius: var(--super--border-radius);
    border: 1px dashed var(--super--primary-fgb);
  }
</style>

<div
  tabindex="0"
  role="button"
  aria-pressed={current}
  on:mousedown={on_mousedown}
  on:touchstart={on_touchstart}
  class='tab'
  class:current
  class:ghost
>
  {title}
</div>
