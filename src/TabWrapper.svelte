<script>
  import { getContext } from 'svelte';

  export let title = "Tab";
  export let current = false;

  const tab_component = getContext('super__tabComponent');
</script>

<style>
  div {
    display: flex;
  }
</style>

<div>
  <svelte:component this={$tab_component} on:makeCurrent on:close {title} {current} />
</div>
