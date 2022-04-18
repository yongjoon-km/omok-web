<script lang="ts">
  import { state } from '../action/gameStore'
  import { GameState, Turn, Winner } from '../action/gameTypes'

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

{#if $state.gameState === GameState.GameOver}
  <div><p class="text-white">{getWinnerText($state.winner)} is won!!!</p></div>
{:else if $state.gameState === GameState.Playing}
  <div><p class="text-white">game is playing</p></div>
{:else}
  <div><p class="text-white">Waiting another player!</p></div>
{/if}
