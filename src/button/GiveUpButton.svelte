<script>
  import { giveup } from '../service/omok'

  const handleClick = () => giveup()
</script>

<button on:click={handleClick} class="btn btn-outline btn-wide">Give Up</button>
