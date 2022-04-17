import { dispatch } from '../action/gameStore'
import { generateId } from '../util/stateUtil'
import { sendMessage } from './server'
import { Message } from './type'

const ID: string = generateId()

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
  dispatch(type, args)
}
