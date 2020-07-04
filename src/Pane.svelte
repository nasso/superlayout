<script>
  import SplitPane from './SplitPane.svelte';
  import TabPane from './TabPane.svelte';

  export let layout = {
    type: 'tabs',
    contents: [{ title: '/!\\ EMPTY /!\\' }]
  };
</script>

{#if layout.type === 'hsplit' || layout.type === 'vsplit'}
  <SplitPane vertical={layout.type === 'vsplit'} bind:split_pos={layout.split_pos}>
    <svelte:self bind:layout={layout.contents[0]} />
    <svelte:self bind:layout={layout.contents[1]} />
  </SplitPane>
{:else if layout.type === 'tabs'}
  <TabPane bind:tabs={layout.contents} bind:current={layout.current} />
{:else}
  <span>Error! Unknown layout type: <code>{layout.type}</code></span>
{/if}
