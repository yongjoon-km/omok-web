<script lang="ts">
  import { restart } from '../service/omok'

  const handleClick = () => restart()
</script>

<button on:click={handleClick} class="btn btn-outline btn-wide">Restart</button>
