<script lang="ts">
  import Svelvet from 'svelvet'
  import type { Node, Edge } from 'svelvet'

  export let width: number
  export let height: number

  const initialNodes: Node[] = [
    {
      id: 1,
      position: { x: -300, y: -300 },
      data: { label: 'Input Node' },
      width: 175,
      height: 40,
      bgColor: 'white',
    },
    {
      id: 2,
      position: { x: -100, y: -100 },
      data: { label: 'Default Node' },
      width: 175,
      height: 40,
      bgColor: 'white',
    },
    {
      id: 3,
      position: { x: 150, y: 150 },
      data: { label: 'Output Node' },
      width: 175,
      height: 40,
      bgColor: 'white',
    },
  ]

  const initialEdges: Edge[] = [
    { id: 'e1-2', source: 1, target: 2, label: 'edge label' },
    { id: 'e2-3', source: 2, target: 3 },
  ]
</script>

<Svelvet {height} {width} nodes={initialNodes} edges={initialEdges} background />
