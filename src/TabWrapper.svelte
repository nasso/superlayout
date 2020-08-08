<script>
  import { getContext, createEventDispatcher } from 'svelte';

  export let title = "Tab";
  export let current = false;

  const dispatch = createEventDispatcher();
  const tab_component = getContext('super__tabComponent');

  let dragstarted = false;

  function on_mousemove(e) {
    dispatch(dragstarted ? 'tabdragmove' : 'tabdragstart', e);
    dragstarted = true;
  }

  function on_mouseup(e) {
    if (e.button === 0) {
      window.removeEventListener('mouseup', on_mouseup);
      window.removeEventListener('mousemove', on_mousemove);
      if (dragstarted)
        dispatch('tabdragend', e);
    }
  }

  function on_mousedown(e) {
    if (e.button === 0) {
      dragstarted = false;
      window.addEventListener('mouseup', on_mouseup);
      window.addEventListener('mousemove', on_mousemove);
    }
  }
</script>

<style>
  div {
    display: flex;
  }
</style>

<div on:mousedown={on_mousedown}>
  <svelte:component this={$tab_component} on:makeCurrent on:close {title} {current} />
</div>
