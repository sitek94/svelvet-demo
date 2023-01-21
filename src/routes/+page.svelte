<script>
  import Graph from './Graph.svelte'

  let innerWidth = 0
  let innerHeight = 0
</script>

<svelte:window bind:innerHeight bind:innerWidth />

<p>
  {innerWidth} x {innerHeight}
</p>

{#if innerWidth > 0 && innerHeight > 0}
  <Graph width={innerWidth} height={innerHeight} />
{/if}
