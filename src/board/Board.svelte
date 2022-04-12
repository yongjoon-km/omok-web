<script>
  import BoardButton from './BoardButton.svelte'
  let boardGrid = []
  for (let i = 0; i < 15; i++) {
    boardGrid.push([])
    for (let j = 0; j < 15; j++) {
      boardGrid[i].push(false)
    }
  }
  let boardWidth
  let boardHeight
  $: console.log(boardWidth)
</script>

<div bind:offsetWidth={boardWidth} class="w-96 h-96 bg-white rounded-lg">
  <div class="flex flex-col w-full h-full">
    {#each boardGrid as row}
      <div class="flex flex-row justify-between w-full h-full">
        {#each row as col}
          {#if col === true}
            <BoardButton />
          {:else}
            <BoardButton />
          {/if}
        {/each}
      </div>
    {/each}
  </div>
</div>
