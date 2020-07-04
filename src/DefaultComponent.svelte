<script>
  export let error;
  export let data;
</script>

<style>
  pre {
    background: var(--super--secondary-bg);
    color: var(--super--secondary-fg);
    padding: var(--super--padding);
  }
</style>

<div>
  <h2>Oops!</h2>
  <p>
    Looks like this component failed to render!
  </p>
  {#if error}
    <pre>{error}</pre>
  {/if}
  <p>
    Here's the associated data formatted as JSON:
  </p>
  <pre>{JSON.stringify(data, null, 4)}</pre>
</div>
