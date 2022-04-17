<script lang="ts">
  import { state } from '../action/gameStore'
  import { Turn, Winner } from '../action/gameTypes'

  const getWinnerText = (winner: Winner) => {
    switch (winner) {
      case Turn.Black:
        return 'Black'
      case Turn.White:
        return 'White'
      default:
        return 'No winner'
    }
  }
</script>

{#if $state.isGameOver === true}
  <div><p class="text-white">{getWinnerText($state.winner)} is won!!!</p></div>
{:else}
  <div><p class="text-white">game is playing</p></div>
{/if}
