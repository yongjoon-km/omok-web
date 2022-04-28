<script lang="ts">
  export let x: number, y: number
  import CurrentStonePointer from './CurrentStonePointer.svelte'
  import { state } from '../action/gameStore'

  let isLatest: boolean = false

  state.subscribe(({ latestStone }) => {
    if (latestStone === null) {
      return
    }
    isLatest = latestStone.x === x && latestStone.y === y
  })
</script>

<div
  class={`bg-black rounded-full w-full h-full block border border-black box-border`}
>
  {#if isLatest}
    <CurrentStonePointer />
  {/if}
</div>
