<script>
  import { getContext } from 'svelte';

  let theme = getContext('demo_theme');
</script>

<div>
  <p>
    This is the project tree! The perfect place for a theme switcher!
  </p>

  <label>
    <input type="radio" bind:group={$theme} value="system">
    System
  </label>
  <br />
  <label>
    <input type="radio" bind:group={$theme} value="light">
    Light
  </label>
  <br />
  <label>
    <input type="radio" bind:group={$theme} value="dark">
    Dark
  </label>
</div>
