<script>
  import { tick } from 'svelte';
  import SplitPane from './SplitPane.svelte';
  import TabPane from './TabPane.svelte';

  export let layout = {
    type: 'tabs',
    contents: [{ title: '/!\\ EMPTY /!\\' }]
  };

  function on_dock(e) {
    const { data, side } = e.detail;

    let new_pane = {
      type: 'tabs',
      contents: [data],
    };

    layout = {
      type: side === 'right' || side === 'left' ? 'hsplit' : 'vsplit',
      split_pos: 0.5,
      contents: [
        side === 'left' || side === 'top' ? new_pane : layout,
        side === 'left' || side === 'top' ? layout : new_pane,
      ]
    };
  }

  function unsplit(keep_index) {
    const contents = layout.contents[keep_index];

    layout.type = 'empty';

    tick().then(() => {
      layout = contents;
    });
  }
</script>

{#if layout.type === 'hsplit' || layout.type === 'vsplit'}
  <SplitPane vertical={layout.type === 'vsplit'} bind:split_pos={layout.split_pos}>
    <svelte:self bind:layout={layout.contents[0]} on:tabdragstart on:tabdragend on:empty={() => unsplit(1)} />
    <svelte:self bind:layout={layout.contents[1]} on:tabdragstart on:tabdragend on:empty={() => unsplit(0)} />
  </SplitPane>
{:else if layout.type === 'tabs'}
  <TabPane
    bind:tabs={layout.contents}
    bind:current={layout.current}
    on:tabdragstart
    on:tabdragend
    on:empty
    on:dock={on_dock} />
{:else if layout.type !== 'empty'}
  <span>Error! Unknown layout type: <code>{layout.type}</code></span>
{/if}
