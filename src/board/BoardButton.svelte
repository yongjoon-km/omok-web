<script lang="ts">
  export let x: number, y: number

  const handleClick = () => {
    console.log(x, y)
  }
</script>

<button class="rounded-full w-full h-full block" on:click={handleClick} />
