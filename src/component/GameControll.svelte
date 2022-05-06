<script lang="ts">
  import GiveUpButton from '../button/GiveUpButton.svelte'
  import RestartButton from '../button/RestartButton.svelte'

  import { state } from '../action/gameStore'
  import { GameState } from '../action/gameTypes'
  import InviteButton from '../button/InviteButton.svelte'
</script>

{#if $state.gameState === GameState.GameOver}
  <RestartButton />
{:else if $state.gameState === GameState.Playing}
  <GiveUpButton />
{:else}
  <InviteButton />
{/if}
