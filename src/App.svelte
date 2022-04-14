<script>
  import Board from './board/Board.svelte'
  import GiveUpButton from './button/GiveUpButton.svelte'
  import GameOverDisplay from './gameover-view/GameOverDisplay.svelte'
</script>

<main>
  <div class="flex flex-col justify-center items-center w-screen h-screen">
    <GameOverDisplay />
    <Board />
    <GiveUpButton />
  </div>
</main>
