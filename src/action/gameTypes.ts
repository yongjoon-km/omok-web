export enum Turn {
  Black,
  White,
}

export enum Stone {
  Empty,
  Black,
  White,
}

export type Board = Array<Array<Stone>>

export type State = {
  turn: Turn
  isGameOver: boolean
  board: Board
}
