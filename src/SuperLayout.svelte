<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Pane from './Pane.svelte';
  import DefaultTab from './DefaultTab.svelte';
  import DefaultPaneDocks from './DefaultPaneDocks.svelte';

  export let layout;
  export let makeComponent;
  export let tabs = DefaultTab;
  export let docks = DefaultPaneDocks;

  const tab_component_store = writable();
  const pane_docks_component = writable();
  const tab_drag_state = writable({
    dragging: false,
  });

  $: tab_component_store.set(tabs);
  $: pane_docks_component.set(docks);

  setContext('super__makeComponent', (target, data) => makeComponent(target, data));
  setContext('super__tabComponent', tab_component_store);
  setContext('super__paneDocksComponent', pane_docks_component);
  setContext('super__tabDragState', tab_drag_state);

  function on_tabdragstart(e) {
    $tab_drag_state.dragging = true;
  }

  function on_tabdragend(e) {
    $tab_drag_state.dragging = false;
  }
</script>

<style>
  div.outer {
    /* Colors */
    --super--primary-bg: var(--super-primary-bg, #ffffff);
    --super--primary-fg: var(--super-primary-fg, #333333);
    --super--primary-fgb: var(--super-primary-fgb, #888888);
    --super--secondary-bg: var(--super-secondary-bg, #E5E5E5);
    --super--secondary-fg: var(--super-secondary-fg, #222222);
    --super--secondary-fgb: var(--super-secondary-fgb, #666666);

    /* Shapes */
    --super--splitter-width: var(--super-splitter-width, 8px);
    --super--splitter-border-radius: var(--super-splitter-border-radius, calc(var(--super--splitter-width) / 2));
    --super--gaps: var(--super-gaps, 4px);
    --super--padding: var(--super-padding, 16px);
    --super--border-radius: var(--super-border-radius, 8px);
    --super--dropzone-coverage: var(--super-dropzone-coverage, 25%);

    /* Tabs */
    --super--tab-height: var(--super-tab-height, 28px);
    --super--tab-padding: var(--super-tab-padding, 24px);
    --super--tab-font-size: var(--super-tab-font-size, 12px);

    /* Transitions */
    --super--transitions-duration: var(--super--transitions--duration, 100ms);

    background: var(--super--secondary-bg);

    display: inline-block;

    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    box-sizing: border-box;
  }

  div.outer :global(*), div.outer :global(*:after), div.outer :global(*:before) {
    box-sizing: inherit;
  }

  div.inner {
    display: inline-flex;

    position: absolute;
    top: var(--super--gaps);
    right: var(--super--gaps);
    bottom: var(--super--gaps);
    left: var(--super--gaps);
  }
</style>

<div class='outer'>
  <div class='inner'>
    <Pane bind:layout on:tabdragstart={on_tabdragstart} on:tabdragend={on_tabdragend} />
  </div>
</div>
