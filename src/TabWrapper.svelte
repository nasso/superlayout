<script>
  import { getContext } from 'svelte';

  export let title = "Tab";
  export let current = false;

  let tab_component = getContext('super__tabComponent');
</script>

<style>
  div {
    display: flex;
  }
</style>

<div>
  <svelte:component this={$tab_component} on:makeCurrent {title} {current} />
</div>
