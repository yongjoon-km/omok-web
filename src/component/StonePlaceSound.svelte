<script lang="ts">
  import { onMount } from 'svelte'
  import { store } from '../store/soundStore'
  let audioRef1: HTMLAudioElement | null = null
  let audioRef2: HTMLAudioElement | null = null
  let audioRef3: HTMLAudioElement | null = null
  let audioRefs: Array<HTMLAudioElement> | null = null
  let playSoundIndex = 0

  // when sound switch is triggered
  store.subscribe(() => {
    if (audioRefs === null) {
      return
    }
    audioRefs[playSoundIndex].play()
    playSoundIndex = ++playSoundIndex % 3
  })

  onMount(() => {
    audioRefs = [audioRef1, audioRef2, audioRef3]
  })
</script>

<audio
  bind:this={audioRef1}
  preload="metadata"
  src="./assets/omok-sound-001.wav"
/>
<audio
  bind:this={audioRef2}
  preload="metadata"
  src="./assets/omok-sound-002.wav"
/>
<audio
  bind:this={audioRef3}
  preload="metadata"
  src="./assets/omok-sound-003.wav"
/>
