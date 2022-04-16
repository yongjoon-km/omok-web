import { dispatch } from '../action/gameStore'
import { Turn, Position } from '../action/gameTypes'
import { sendMessage } from './server'
import { Message } from './type'

export function place(x: number, y: number, turn: Turn) {
  const message = {
    type: 'place',
    args: { x, y, turn },
  }

  sendMessage(message)
}

export function updateGameStateFromServerMessage(message: Message) {
  const { type, args } = message
  switch (type) {
    case 'place':
      const { x, y } = args as Position
      dispatch('place', { x, y })
      console.log('place message is given')
    default:
      break
  }
}
