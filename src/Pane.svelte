<script>
  import SplitPane from './SplitPane.svelte';
  import TabbedPane from './TabbedPane.svelte';

  export let layout = {
    type: 'tabs',
    contents: [{ title: '/!\\ EMPTY /!\\' }]
  };
</script>

{#if layout.type === 'hsplit' || layout.type === 'vsplit'}
  <SplitPane vertical={layout.type === 'vsplit'}>
    <svelte:self bind:layout={layout.contents[0]} />
    <svelte:self bind:layout={layout.contents[1]} />
  </SplitPane>
{:else if layout.type === 'tabs'}
  <TabbedPane bind:tabs={layout.contents} />
{:else}
  <span>Error! Unknown layout type: <code>{layout.type}</code></span>
{/if}
