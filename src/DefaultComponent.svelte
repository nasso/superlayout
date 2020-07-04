<script>
  export let error;
  export let data;

  let oopses = [
    "Oops..",
    "Uh-oh...",
    "Whoops!",
    "Yikes...",
    "oh no",
    "Too bad!",
    "It works! ...nevermind.",
    "Successfully caught the error",
    "It's just a rapid unscheduled disassembly",
    "Entropy... is such a lonely word",
    "You've got to be kidding me!",
  ];

  let oops;

  function pickAnOops() {
    if (oops) {
      oops = oopses.filter(x => x !== oops)[Math.floor(Math.random() * (oopses.length - 1))];
    } else {
      oops = oopses[Math.floor(Math.random() * oopses.length)];
    }
  }

  pickAnOops();
</script>

<style>
  h2 {
    cursor: pointer;
    user-select: none;
    margin-top: 0px;
  }

  pre {
    background: var(--super--secondary-bg);
    color: var(--super--secondary-fg);
    padding: var(--super--padding);
  }
</style>

<div>
  <h2 on:click={pickAnOops}>{oops}</h2>
  <p>
    Looks like this component failed to load!
  </p>
  {#if error}
    <pre>{error}</pre>
  {/if}
  <p>
    Here's the associated data formatted as JSON:
  </p>
  <pre>{JSON.stringify(data, null, 4)}</pre>
</div>
