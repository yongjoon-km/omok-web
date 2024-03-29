export enum Turn {
  Black,
  White,
}

export type Winner = Turn | null

export enum Stone {
  Empty,
  Black,
  White,
}

export type Board = Array<Array<Stone>>

export type State = {
  winner: Winner
  turn: Turn
  gameState: GameState
  board: Board
  userStone: Turn | null
  latestStone: Position | null
}

export type Position = {
  x: number
  y: number
}

export enum GameState {
  Initializaing,
  Playing,
  GameOver,
}
