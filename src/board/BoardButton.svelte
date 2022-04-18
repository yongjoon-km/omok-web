<script lang="ts">
  export let x: number, y: number
  import { place } from '../service/omok'
  import { state } from '../action/gameStore'
  import { GameState, Turn } from '../action/gameTypes'

  const handleClick = () => place(x, y)
</script>

<button
  class="opacity-0 hover:opacity-100 rounded-full w-full h-full block "
  on:click={handleClick}
  disabled={$state.gameState !== GameState.Playing ||
    $state.userStone !== $state.turn}
/>
