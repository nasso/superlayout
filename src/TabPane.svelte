<script>
  import Tab from './Tab.svelte';
  import ComponentPane from './ComponentPane.svelte';

  export let tabs = [{ title: "Tab" }];
  export let current = 0;

</script>

<style>
  div.root {
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

  nav > :global(*) {
    margin-right: var(--super--gaps);
  }

  div.content {
    display: none;
    grid-area: content;
    position: relative;
  }

  div.content.current {
    display: inline-block;
  }
</style>

<div class="root">
  <nav>
    {#each tabs as tab, i}
      <Tab
        on:click={() => current = i}
        title={tab.title}
        current={current === i}
      />
    {/each}
  </nav>
  {#each tabs as tab, i}
    <div
      class="content"
      class:current={current === i}
    >
      <ComponentPane data={tab.data} />
    </div>
  {/each}
</div>
