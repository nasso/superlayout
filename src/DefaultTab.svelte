<script>
  import { createEventDispatcher } from 'svelte';

  export let title = "Tab";
  export let current = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  button {
    all: unset;
    border: none;
    user-select: none;

    background: var(--super--secondary-bg);
    color: var(--super--secondary-fgb);
    padding: 0px var(--super--tab-padding);
    border-radius: var(--super--border-radius);
    font-size: var(--super--tab-font-size);

    position: relative;

    transition:
      color var(--super--transitions-duration),
      background var(--super--transitions-duration);
  }

  button.current {
    background: var(--super--primary-bg);
    color: var(--super--primary-fg);
  }

  button:focus {
    outline: none;
  }

  button:focus:after {
    content: '';

    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    border-radius: var(--super--border-radius);
    border: 1px dashed var(--super--primary-fgb);
  }
</style>

<button on:click={() => dispatch('makeCurrent')} class:current>{title}</button>
