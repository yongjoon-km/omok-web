import { dispatch } from '../action/gameStore'
import { Position } from '../action/gameTypes'
import { updateGameStateFromServerMessage } from './omok'
import { Message } from './type'

const ws = new WebSocket('ws://localhost:8080/ws')

ws.onopen = () => {
  console.log('server is connected')
}

ws.onmessage = (event) => {
  const wsMessage: Message = JSON.parse(event.data)

  updateGameStateFromServerMessage(wsMessage)
}

export function sendMessage(message: Message) {
  console.log('try sending message')
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message))
  } else {
    console.error(`The websocket is closed ${message} is failed`)
  }
}
