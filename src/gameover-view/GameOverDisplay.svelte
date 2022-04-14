<script lang="ts">
  import { state } from '../action/gameStore.ts'
  let isGameOver
  state.subscribe(({ isGameOver: isGameOverState }) => {
    isGameOver = isGameOverState
  })
</script>

{#if isGameOver === true}
  <div><p class="text-white">game is over</p></div>
{:else}
  <div><p class="text-white">game is playing</p></div>
{/if}
