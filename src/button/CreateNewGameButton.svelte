<script lang="ts">
  import { replace, push } from 'svelte-spa-router'
  import { generateId } from '../util/stateUtil'

  const handleClick = () => {
    // move to location
    const roomHash = generateId()
    push(`/${roomHash}`)
  }
</script>

<button on:click={handleClick} class="btn btn-outline btn-wide">
  Create new game
</button>
