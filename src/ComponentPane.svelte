<script>
  import { getContext } from 'svelte';
  import DefaultComponent from './DefaultComponent.svelte';

  export let data;

  const makeComponent = getContext('super__makeComponent');

  function mountComponent(node, data) {
    function update(data) {
      while (node.firstChild)
        node.removeChild(node.firstChild);

      try {
        makeComponent(node, data);
      } catch (error) {
        new DefaultComponent({
          target: node,
          props: { error, data },
        });
      }
    }

    update(data);

    return { update };
  }
</script>

<style>
  div {
    background: var(--super--primary-bg);
    border-radius: var(--super--border-radius);
    color: var(--super--primary-fg);
    padding: var(--super--padding);

    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;

    overflow: hidden;
  }
</style>

<div use:mountComponent={data}>
  <div class="super-debug">
    <p>Use this field to see if the internal state is maintained: <input value={Math.round(Math.random() * 1000)}></p>
    <p>Here's the JSON representation of the <code>data</code> field:</p>
    <pre>{JSON.stringify(data, null, 4)}</pre>
    <p>Here's what the component building function created:</p>
  </div>
</div>
