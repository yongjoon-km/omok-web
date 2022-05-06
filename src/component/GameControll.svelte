<script lang="ts">
  import RestartButton from '../button/RestartButton.svelte'
  import GiveUpButton from '../button/GiveUpButton.svelte'
  import InviteButton from '../button/InviteButton.svelte'

  import { state } from '../action/gameStore'
  import { GameState } from '../action/gameTypes'
</script>

{#if $state.gameState === GameState.GameOver}
  <RestartButton />
{:else if $state.gameState === GameState.Playing}
  <GiveUpButton />
{:else}
  <InviteButton />
{/if}
