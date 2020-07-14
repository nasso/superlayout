<script>
  import { flip } from 'svelte/animate';
  import { createEventDispatcher, getContext } from 'svelte';
  import TabWrapper from './TabWrapper.svelte';
  import ComponentPane from './ComponentPane.svelte';

  export let tabs = [{ title: "Tab" }];
  export let current = 0;

  const dispatch = createEventDispatcher();
  const tab_drag_state = getContext('super__tabDragState');
  const dock_component = getContext('super__paneDocksComponent');

  $: if (!tabs[current]) {
    if (tabs.length > 0) {
      current = tabs.length - 1;
    } else {
      dispatch('empty');
    }
  }

  function closeTab(i) {
    tabs = [...tabs.slice(0, i), ...tabs.slice(i + 1)];

    if (i < current)
      current--;
  }

  function on_tabdragstart(index, drag) {
    const data = tabs[index];

    drag.dataTransfer.setData('application/x-superlayout', JSON.stringify(data));
    drag.dataTransfer.setData('text/plain', JSON.stringify(data, null, 4));

    dispatch('tabdragstart', { data });

    // for some reason this is needed (at least on ff)
    setTimeout(() => {
      closeTab(index);
    }, 0);
  }
</script>

<style>
  .root {
    overflow: hidden;

    display: inline-grid;
    grid-template-areas:
      "tabs"
      "content";
    grid-template-rows: var(--super--tab-height) auto;
    gap: var(--super--gaps);
  }

  nav {
    grid-area: tabs;

    display: flex;
  }

  .tab {
    margin-right: var(--super--gaps);
  }

  .content {
    display: none;
    grid-area: content;
    position: relative;
  }

  .content.current {
    display: inline-block;
  }

  .docks_wrapper {
    grid-area: content;
    display: grid;
  }
</style>

<div class="root">
  <nav>
    {#each tabs as tab, i (tab)}
      <div
        class="tab"
        draggable="true"
        on:dragstart={e => on_tabdragstart(i, e)}
        animate:flip
      >
        <TabWrapper
          title={tab.title}
          current={current === i}
          on:makeCurrent={() => current = i}
          on:close={() => closeTab(i)}
        />
      </div>
    {/each}
  </nav>
  {#each tabs as tab, i (tab)}
    <div class="content" class:current={current === i}>
      <ComponentPane data={tab.data} />
    </div>
  {/each}
  {#if $tab_drag_state.dragging}
    <div class="docks_wrapper">
      <svelte:component this={$dock_component} on:dock />
    </div>
  {/if}
</div>
