import { Board, Position, State, Stone, Turn, Winner } from './gameTypes'
import { Writable, writable } from 'svelte/store'
import { giveup, place, restart, start } from './gameAction'
import { generateId } from '../util/stateUtil'

const BOARD_WIDTH = 15
const BOARD_HEIGHT = 15

export const ID: string = generateId()

export function generateIntialBoard(): Board {
  let board: Board = []
  for (let i = 0; i < BOARD_WIDTH; i++) {
    board.push([])
    for (let j = 0; j < BOARD_HEIGHT; j++) {
      board[i].push(Stone.Empty)
    }
  }
  return board
}

const initialState: State = {
  winner: null,
  turn: Turn.Black,
  isGameOver: false,
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
    case 'start':
      const startArgs = args as { id: string; userStone: Turn }
      state.update((s) =>
        start(s, getMyUserStone(startArgs.id, startArgs.userStone))
      )
      break
    default:
      break
  }
}
