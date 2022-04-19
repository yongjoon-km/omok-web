<script>
  import { giveup } from '../service/omok'
  import { state } from '../action/gameStore'

  const handleClick = () => giveup()
</script>

<button
  on:click={handleClick}
  disabled={$state.turn !== $state.userStone}
  class="btn btn-outline btn-wide">Give Up</button
>
