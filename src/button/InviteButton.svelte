<script lang="ts">
  import { showAlert } from '../store/infoStore'
  let buttonText = 'invite'

  const handleClick = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        showAlert('copied to clipboard!!!')
      })
      .catch(() => {
        console.log('copy failed')
      })
  }

  const handleMouseOver = () => {
    buttonText = window.location.href
  }
  const handleMouseLeave = () => {
    buttonText = 'invite'
  }
</script>

<button
  on:click={handleClick}
  on:mouseover={handleMouseOver}
  on:mouseleave={handleMouseLeave}
  class="btn btn-outline btn-wide"
>
  {buttonText}
</button>
