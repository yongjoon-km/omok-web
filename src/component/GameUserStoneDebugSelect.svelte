<script lang="ts">
  import { Turn, State } from '../action/gameTypes'
  import { state } from '../action/gameStore'

  function change(state: State, stone: Turn): State {
    console.log('change user stone to ', state, stone)
    return { ...state, userStone: stone }
  }

  const handleChange = (e) => {
    state.update((s) => change(s, +e.target.value as Turn))
  }
</script>

<select class="select w-full max-w-xs bg-white" on:change={handleChange}>
  <option value={Turn.Black}>Black</option>
  <option value={Turn.White}>White</option>
</select>
