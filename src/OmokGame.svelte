<script lang="ts">
  import Board from './board/Board.svelte'
  import GameState from './component/GameState.svelte'
  import GameControll from './component/GameControll.svelte'
  import InfoAlert from './component/InfoAlert.svelte'
  import { onMount, onDestroy } from 'svelte'
  import { connectToGameServer } from './service/server'
  import { dispatch } from './action/gameStore'

  onMount(() => {
    connectToGameServer()
  })

  onDestroy(() => {
    dispatch('reset')
  })
</script>

<main>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <div class="w-96 max-w-full flex flex-col justify-center items-center">
      <GameState />
      <Board />
      <GameControll />
      <div class="py-10 w-full">
        <InfoAlert />
      </div>
    </div>
  </div>
</main>
