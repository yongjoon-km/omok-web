<script lang="ts">
  export let x: number, y: number
  import { state } from '../action/gameStore'
  import { place as socketPlace } from '../service/omok'

  const handleClick = () => {
    socketPlace(x, y, $state.turn)
  }
</script>

<button
  class="opacity-0 hover:opacity-100 rounded-full w-full h-full block "
  on:click={handleClick}
  disabled={$state.isGameOver}
/>
