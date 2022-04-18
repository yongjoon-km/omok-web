import { Board, GameState, Stone } from '../action/gameTypes'

const directions = [
  [1, 0],
  [0, 1],
  [1, 0],
  [0, 1],
  [-1, 1],
  [1, -1],
  [-1, -1],
  [1, 1],
]

export function checkGameState(board: Board): GameState {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] !== Stone.Empty) {
        for (let direction of directions) {
          const visited = generateVisited()
          if (dfs(board, visited, i, j, direction, 1)) {
            return GameState.GameOver
          }
        }
      }
    }
  }
  return GameState.Playing
}

function generateVisited(): Array<Array<boolean>> {
  let visited = []
  for (let i = 0; i < 15; i++) {
    visited.push([])
    for (let j = 0; j < 15; j++) {
      visited[i][j] = false
    }
  }
  return visited
}

function dfs(
  board: Board,
  visited: Array<Array<boolean>>,
  x: number,
  y: number,
  direction: number[],
  cnt: number
): boolean {
  if (cnt === 5) return true
  visited[x][y] = true
  const [nx, ny] = [x + direction[0], y + direction[1]]
  let res = false
  if (
    validRange(board.length, board[0].length, nx, ny) &&
    board[nx][ny] === board[x][y] &&
    !visited[nx][ny]
  ) {
    res = dfs(board, visited, nx, ny, direction, cnt + 1)
  }
  return res
}

function validRange(
  rowMax: number,
  colMax: number,
  x: number,
  y: number
): boolean {
  if (x < 0 || x > rowMax) return false
  if (y < 0 || y > colMax) return false

  return true
}
