<script lang="ts">
  import BoardButton from './BoardButton.svelte'
  import BoardWhiteStone from './BoardWhiteStone.svelte'
  import BoardBlackStone from './BoardBlackStone.svelte'
  import { state } from '../action/gameStore.ts'
  import { Board, Stone } from '../action/gameTypes.ts'
  import BoardBlackStone from './BoardBlackStone.svelte'

  let boardGrid: Board

  state.subscribe(({ board }) => {
    boardGrid = board
  })
</script>

<div class="bg-amber-800 w-96 h-96 rounded-lg">
  <div class="flex flex-col w-full h-full">
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
