<script>
  import Board from './board/Board.svelte'
  import GiveUpButton from './button/GiveUpButton.svelte'
  import GameState from './gameover-view/GameState.svelte'
</script>

<main>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <GameState />
    <Board />
    <GiveUpButton />
  </div>
</main>
