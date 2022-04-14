import { State, Turn, Board, Stone } from './gameTypes'
import produce from 'immer'
import { checkGameState } from '../util/boardUtil'

function place(state: State, x: number, y: number): State {
  const { turn, board, isGameOver } = state

  const newTurn = turn === Turn.White ? Turn.Black : Turn.White

  const newBoardValue = turn === Turn.White ? Stone.White : Stone.Black
  const newBoard: Board = produce(board, (draft) => {
    draft[x][y] = newBoardValue
  })

  const newGameOver = checkGameState(newBoard)

  return { turn: newTurn, board: newBoard, isGameOver: newGameOver }
}

function giveup(state: State): State {}

export { place, giveup }
