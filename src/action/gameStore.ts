import {
  Board,
  GameState,
  Position,
  State,
  Stone,
  Turn,
  Winner,
} from './gameTypes'
import { Writable, writable } from 'svelte/store'
import { giveup, place, restart, start } from './gameAction'
import { generateId } from '../util/stateUtil'
import { generateIntialBoard } from './util'

export const ID: string = generateId()

const initialState: State = {
  winner: null,
  turn: Turn.Black,
  gameState: GameState.Initializaing,
  board: generateIntialBoard(),
  userStone: null,
}

export const state: Writable<State> = writable(initialState)

function getMyUserStone(id: string, userStone: Turn): Turn {
  if (id === ID) {
    return userStone
  }

  switch (userStone) {
    case Turn.Black:
      return Turn.White
    case Turn.White:
      return Turn.Black
  }
}

export const dispatch = (type: string, args: Object) => {
  switch (type) {
    case 'place':
      state.update((s) => place(s, args as Position))
      break
    case 'giveup':
      state.update(giveup)
      break
    case 'restart':
      state.update(restart)
      break
    case 'init':
      const startArgs = args as { id: string; userStone: Turn }
      state.update((s) =>
        start(s, getMyUserStone(startArgs.id, startArgs.userStone))
      )
      break
    default:
      break
  }
}
