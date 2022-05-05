<script lang="ts">
  import Board from './board/Board.svelte'
  import GameState from './component/GameState.svelte'
  import GameControll from './component/GameControll.svelte'
  import InfoAlert from './component/InfoAlert.svelte'
  import StonePlaceSound from './component/StonePlaceSound.svelte'
  import { onMount, onDestroy } from 'svelte'
  import { connectToGameServer, clearGameConnection } from './service/server'

  onMount(() => {
    connectToGameServer()
  })

  onDestroy(() => {
    clearGameConnection()
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
      <StonePlaceSound />
    </div>
  </div>
</main>
