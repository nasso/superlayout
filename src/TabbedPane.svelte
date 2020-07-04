<script>
  import Tab from './Tab.svelte';

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
    background: var(--super--primary-bg);
    border-radius: var(--super--border-radius);
    padding: var(--super--padding);
    color: var(--super--primary-fg);

    display: inline-block;

    grid-area: content;
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
  <div class="content">
  </div>
</div>
