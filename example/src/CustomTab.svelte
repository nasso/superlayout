<script>
  import { createEventDispatcher } from 'svelte';

  export let title = "Tab";
  export let current = false;

  const dispatch = createEventDispatcher();
</script>

<style>
  button {
    padding: 0px var(--super--tab-padding);
    font-size: var(--super--tab-font-size);

    position: relative;
  }

  button.current {
    font-weight: bold;
  }
</style>

<button on:click={() => dispatch('makeCurrent')} class:current>{title}</button>
