<script lang="ts">
  const handleClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        console.log('copy successfully')
      })
      .catch(() => {
        console.log('copy failed')
      })
  }
</script>

<button on:click={handleClick} class="btn btn-outline btn-wide">Invite</button>
