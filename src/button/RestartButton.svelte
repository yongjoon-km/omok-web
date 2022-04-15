<script lang="ts">
  import { state } from '../action/gameStore'
  import { restart } from '../action/gameAction'

  const handleClick = () => {
    state.update(restart)
  }
</script>

<button on:click={handleClick} class="btn btn-outline btn-wide">Restart</button>
