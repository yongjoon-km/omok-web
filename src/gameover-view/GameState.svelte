<script lang="ts">
  import { state } from '../action/gameStore'
  import { Turn, Winner } from '../action/gameTypes'
  let isGameOver: boolean
  let winner: Winner = null
  state.subscribe(({ isGameOver: isGameOverState, winner: newWinner }) => {
    isGameOver = isGameOverState
    winner = newWinner
  })

  const getWinnerText = (winner: Winner) => {
    if (winner === null) {
      return 'No winner'
    }
    if (winner === Turn.Black) return 'Black'
    return 'White'
  }
</script>

{#if isGameOver === true}
  <div><p class="text-white">{getWinnerText(winner)} is won!!!</p></div>
{:else}
  <div><p class="text-white">game is playing</p></div>
{/if}
