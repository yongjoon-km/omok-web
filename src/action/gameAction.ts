import {
  State,
  Turn,
  Board,
  Stone,
  Winner,
  Position,
  GameState,
} from './gameTypes'
import produce from 'immer'
import { checkGameState } from '../util/boardUtil'
import { generateIntialBoard } from './gameStore'

function place(state: State, position: Position): State {
  const { turn, board, gameState } = state

  const { x, y } = position
  const newBoardValue = turn === Turn.White ? Stone.White : Stone.Black
  const newBoard: Board = produce(board, (draft) => {
    draft[x][y] = newBoardValue
  })

  const newGameState = checkGameState(newBoard)

  const newWinner = newGameState ? turn : null

  const newTurn = turn === Turn.White ? Turn.Black : Turn.White

  return {
    ...state,
    turn: newTurn,
    board: newBoard,
    gameState: newGameState,
    winner: newWinner,
  }
}

function giveup(state: State): State {
  if (state.gameState === GameState.GameOver) {
    return state
  }

  const winner: Winner = state.turn === Turn.Black ? Turn.White : Turn.Black
  return { ...state, gameState: GameState.GameOver, winner }
}

function restart(state: State): State {
  return {
    ...state,
    gameState: GameState.Playing,
    winner: null,
    turn: Turn.Black,
    board: generateIntialBoard(),
    userStone: state.userStone === Turn.Black ? Turn.White : Turn.Black,
  }
}

function start(state: State, userStone: Turn): State {
  return {
    ...state,
    gameState: GameState.Playing,
    winner: null,
    turn: Turn.Black,
    userStone,
  }
}

export { place, giveup, restart, start }
