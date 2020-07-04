<script>
  export let tabs = [{ title: "Tab" }];
</script>

<style>
  div {
    background: var(--super--primary-bg);
    border-radius: var(--super--border-radius);
    padding: var(--super--padding);
    color: var(--super--primary-fg);

    display: inline-block;

    overflow: auto;
  }
</style>

<div>
  <h1>Tabs!!</h1>
  <h2>They are</h2>
  <ul>
    {#each tabs as tab}
      <li>{tab.title}</li>
    {/each}
  </ul>
  <h2>Change them!</h2>
  <ul>
    {#each tabs as tab}
      <li><input bind:value={tab.title}></li>
    {/each}
  </ul>
</div>
