import { dispatch } from '../action/gameStore'
import { sendMessage } from './server'
import { Message } from './type'

const ID: string = generateId()

const HASH_SIZE = 3

function generateId(): string {
  const characters = '0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ'
  let randomString = ''
  for (let i = 0; i <= HASH_SIZE; i++) {
    randomString += characters[Math.floor(Math.random() * characters.length)]
  }
  const id = randomString
  console.log('id is', id)
  return id
}

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
