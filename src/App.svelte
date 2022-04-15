<script>
  import Board from './board/Board.svelte'
  import GameState from './gameover-view/GameState.svelte'
  import GameControll from './component/GameControll.svelte'
</script>

<main>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <GameState />
    <Board />
    <GameControll />
  </div>
</main>
