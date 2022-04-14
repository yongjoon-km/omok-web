import { State, Turn } from './gameTypes'

function place(state: State, x: number, y: number, turn: Turn): State {
  return state
}

function giveup(state: State, turn: Turn): State {}

export { place, giveup }
