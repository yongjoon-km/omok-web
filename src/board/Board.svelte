<script lang="ts">
  import BoardButton from './BoardButton.svelte'
  import BoardWhiteStone from './BoardWhiteStone.svelte'
  import BoardBlackStone from './BoardBlackStone.svelte'
  import { state } from '../action/gameStore'
  import { Board, Stone } from '../action/gameTypes'

  let boardGrid: Board

  state.subscribe(({ board }) => {
    boardGrid = board
  })
</script>

<div class="w-96 h-96 rounded-lg">
  <img
    class="absolute p-3 w-96 h-96 -z-40"
    src="./assets/omokboard.png"
    alt="omokboard"
  />
  <div class="flex flex-col w-full h-full z-40">
    {#each boardGrid as row, x}
      <div class="flex flex-row justify-between w-full h-full">
        {#each row as col, y}
          {#if col === Stone.Black}
            <BoardBlackStone />
          {:else if col === Stone.White}
            <BoardWhiteStone />
          {:else}
            <BoardButton {x} {y} />
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
