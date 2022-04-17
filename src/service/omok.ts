import { dispatch } from '../action/gameStore'
import { Turn, Position } from '../action/gameTypes'
import { sendMessage } from './server'
import { Message } from './type'

export function place(x: number, y: number) {
  const message = {
    type: 'place',
    args: { x, y },
  }

  sendMessage(message)
}

export function giveup() {
  const message = { type: 'giveup', args: {} }
  sendMessage(message)
}

export function restart() {
  const message = { type: 'restart', args: {} }
  sendMessage(message)
}

export function updateGameStateFromServerMessage(message: Message) {
  const { type, args } = message
  switch (type) {
    case 'place':
      const { x, y } = args as Position
      dispatch('place', { x, y })
      console.log('place message is given')
      break
    case 'giveup':
      dispatch('giveup', {})
      break
    case 'restart':
      dispatch('restart', {})
      break
    default:
      break
  }
}
