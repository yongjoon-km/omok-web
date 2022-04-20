<script>
  import Board from './board/Board.svelte'
  import GameState from './component/GameState.svelte'
  import GameControll from './component/GameControll.svelte'
  import GameUserStoneDebugSelect from './component/GameUserStoneDebugSelect.svelte'
  import InfoAlert from './component/InfoAlert.svelte'
</script>

<main>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <GameUserStoneDebugSelect />
    <GameState />
    <Board />
    <GameControll />
    <div class="w-96 py-10">
      <InfoAlert />
    </div>
  </div>
</main>
