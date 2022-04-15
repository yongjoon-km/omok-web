<script lang="ts">
  import GiveUpButton from '../button/GiveUpButton.svelte'
  import RestartButton from '../button/RestartButton.svelte'

  import { state } from '../action/gameStore'
</script>

{#if $state.isGameOver === true}
  <RestartButton />
{:else}
  <GiveUpButton />
{/if}
