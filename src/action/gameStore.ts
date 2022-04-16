import { Board, Position, State, Stone, Turn, Winner } from './gameTypes'
import { Writable, writable } from 'svelte/store'
import { place } from './gameAction'

const BOARD_WIDTH = 15
const BOARD_HEIGHT = 15

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
}

export const state: Writable<State> = writable(initialState)

export const dispatch = (type: string, args: Object) => {
  switch (type) {
    case 'place':
      state.update((s) => place(s, args as Position))
      break
    default:
      break
  }
}
