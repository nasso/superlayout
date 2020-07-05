<script>
  import { setContext } from 'svelte';
  import { writable } from 'svelte/store';
  import Pane from './Pane.svelte';
  import DefaultTab from './DefaultTab.svelte';

  export let layout;
  export let makeComponent;
  export let tabs = DefaultTab;

  let tab_component_store = writable();

  $: tab_component_store.set(tabs);

  setContext('super__makeComponent', (target, data) => makeComponent(target, data));
  setContext('super__tabComponent', tab_component_store);
</script>

<style>
  div.outer {
    --super--primary-bg: var(--super-primary-bg, #ffffff);
    --super--primary-fg: var(--super-primary-fg, #333333);
    --super--primary-fgb: var(--super-primary-fgb, #888888);
    --super--secondary-bg: var(--super-secondary-bg, #E5E5E5);
    --super--secondary-fg: var(--super-secondary-fg, #222222);
    --super--secondary-fgb: var(--super-secondary-fgb, #666666);
    --super--splitter-width: var(--super-splitter-width, 8px);
    --super--splitter-border-radius: var(--super-splitter-border-radius, calc(var(--super--splitter-width) / 2));
    --super--gaps: var(--super-gaps, 4px);
    --super--padding: var(--super-padding, 16px);
    --super--border-radius: var(--super-border-radius, 8px);
    --super--tab-height: var(--super-tab-height, 28px);
    --super--tab-padding: var(--super-tab-padding, 24px);
    --super--tab-font-size: var(--super-tab-font-size, 12px);
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
    <Pane bind:layout />
  </div>
</div>
