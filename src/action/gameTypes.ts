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
  isGameOver: boolean
  board: Board
}

export type Position = {
  x: number
  y: number
}
