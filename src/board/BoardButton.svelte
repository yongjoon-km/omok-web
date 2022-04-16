<script lang="ts">
  export let x: number, y: number
  import { place } from '../action/gameAction'
  import { state } from '../action/gameStore'
  import { place as socketPlace } from '../service/omok'

  const handleClick = () => {
    state.update((s) => place(s, x, y))
    socketPlace(x, y, $state.turn)
  }
</script>

<button
  class="opacity-0 hover:opacity-100 rounded-full w-full h-full block "
  on:click={handleClick}
  disabled={$state.isGameOver}
/>
