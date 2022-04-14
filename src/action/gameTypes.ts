export enum Turn {
  Black,
  White,
}

export enum Stone {
  Empty,
  Black,
  White,
}

export type State = {
  turn: Turn
  isGameOver: boolean
  board: Array<Array<Stone>>
}
