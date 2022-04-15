import { Board, State, Stone, Turn, Winner } from './gameTypes'
import { Writable, writable } from 'svelte/store'

const BOARD_WIDTH = 15
const BOARD_HEIGHT = 15

function generateIntialBoard(): Board {
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
