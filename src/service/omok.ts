import { Turn } from '../action/gameTypes'
import { sendMessage } from './server'

export function place(x: number, y: number, turn: Turn) {
  const message = {
    type: 'place',
    args: { x, y, turn },
  }

  sendMessage(message)
}
