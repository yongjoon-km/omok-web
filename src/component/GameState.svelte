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

<div>
  <p class="">
    {#if $state.gameState === GameState.GameOver}
      {getWinnerText($state.winner)} is won!!!
    {:else if $state.gameState === GameState.Playing}
      game is playing
    {:else}
      Waiting another player!
    {/if}
  </p>
</div>
