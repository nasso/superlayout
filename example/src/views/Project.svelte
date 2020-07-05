<script>
  import { getContext } from 'svelte';

  let current_theme = getContext('current_theme');
  let available_themes = getContext('available_themes');
</script>

<div>
  <p>
    This is the project tree! The perfect place for a theme switcher!
  </p>

  {#each available_themes as theme}
    <label>
      <input type="radio" bind:group={$current_theme} value={theme}>
      {theme}
    </label>
    <br />
  {/each}
</div>
