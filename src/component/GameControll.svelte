<script lang="ts">
  import GiveUpButton from '../button/GiveUpButton.svelte'
  import RestartButton from '../button/RestartButton.svelte'
  import StartButton from '../button/StartButton.svelte'

  import { state } from '../action/gameStore'
  import { GameState } from '../action/gameTypes'
</script>

{#if $state.gameState === GameState.GameOver}
  <RestartButton />
{:else if $state.gameState === GameState.Playing}
  <GiveUpButton />
{:else}
  <StartButton />
{/if}
