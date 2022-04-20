<script lang="ts">
  import { info } from '../store/infoStore'
  let opacity = 0
  $: opacity = info.open ? 100 : 0
</script>

<div
  class={`ease-linear duration-300 alert alert-info shadow-lg opacity-${
    $info.open ? 100 : 0
  }`}
>
  <div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      class="stroke-current flex-shrink-0 w-6 h-6"
      ><path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      /></svg
    >
    <span>{$info.message}</span>
  </div>
</div>
