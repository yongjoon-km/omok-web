import { State, Turn, Board, Stone } from './gameTypes'
import produce from 'immer'

function place(state: State, x: number, y: number): State {
  const { turn, board, isGameOver } = state

  const newBoardValue = turn === Turn.White ? Stone.White : Stone.Black
  const newTurn = turn === Turn.White ? Turn.Black : Turn.White

  const newBoard: Board = produce(board, (draft) => {
    draft[x][y] = newBoardValue
  })

  return { turn: newTurn, board: newBoard, isGameOver }
}

function giveup(state: State): State {}

export { place, giveup }
