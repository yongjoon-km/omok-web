<script lang="ts">
  export let x: number, y: number
  import { place } from '../action/gameAction.ts'
  import { state } from '../action/gameStore.ts'

  const handleClick = () => {
    state.update((s) => place(s, x, y))
  }
</script>

<button
  class="rounded-full w-full h-full block box-border"
  on:click={handleClick}
/>
