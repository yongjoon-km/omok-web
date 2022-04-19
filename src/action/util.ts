import { BOARD_HEIGHT, BOARD_WIDTH } from './const'
import { Board, Stone } from './gameTypes'

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
