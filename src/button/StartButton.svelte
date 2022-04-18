<script lang="ts">
  import { Turn } from '../action/gameTypes.ts'
  import { start } from '../service/omok'

  const handleClick = () => start(Turn.Black)
</script>

<button on:click={handleClick} class="btn btn-outline btn-wide">Start</button>
