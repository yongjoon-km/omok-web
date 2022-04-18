import { State, Turn, Board, Stone, Winner, Position } from './gameTypes'
import produce from 'immer'
import { checkGameState } from '../util/boardUtil'
import { generateIntialBoard } from './gameStore'

function place(state: State, position: Position): State {
  const { turn, board, isGameOver } = state

  const { x, y } = position
  const newBoardValue = turn === Turn.White ? Stone.White : Stone.Black
  const newBoard: Board = produce(board, (draft) => {
    draft[x][y] = newBoardValue
  })

  const newGameOver = checkGameState(newBoard)

  const newWinner = newGameOver ? turn : null

  const newTurn = turn === Turn.White ? Turn.Black : Turn.White

  return {
    ...state,
    turn: newTurn,
    board: newBoard,
    isGameOver: newGameOver,
    winner: newWinner,
  }
}

function giveup(state: State): State {
  if (state.isGameOver) {
    return state
  }

  const winner: Winner = state.turn === Turn.Black ? Turn.White : Turn.Black
  return { ...state, isGameOver: true, winner }
}

function restart(state: State): State {
  return {
    ...state,
    isGameOver: false,
    winner: null,
    turn: Turn.Black,
    board: generateIntialBoard(),
  }
}

function start(state: State, userStone: Turn): State {
  return {
    ...state,
    isGameOver: false,
    winner: null,
    turn: Turn.Black,
    userStone,
  }
}

export { place, giveup, restart, start }
