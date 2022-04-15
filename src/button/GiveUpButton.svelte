<script>
  import { giveup } from '../action/gameAction'
  import { state } from '../action/gameStore'

  const handleClick = () => {
    state.update(giveup)
  }
</script>

<button on:click={handleClick} class="btn btn-outline btn-wide">Give Up</button>
