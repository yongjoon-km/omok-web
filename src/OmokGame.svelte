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
    <GameState />
    <Board />
    <GameControll />
    <div class="w-96 py-10">
      <InfoAlert />
    </div>
  </div>
</main>
