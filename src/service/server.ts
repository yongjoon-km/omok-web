import { dispatch } from '../action/gameStore'
import { Position } from '../action/gameTypes'
import { join, updateGameStateFromServerMessage } from './omok'
import { Message } from './type'
import { location } from 'svelte-spa-router'

let roomHash: string = ''
location.subscribe((l) => {
  roomHash = l.split('/')[1]
})
const ws = new WebSocket(`ws://localhost:8080/ws/${roomHash}`)

ws.onopen = () => {
  console.log('server is connected')
  join()
}

ws.onmessage = (event) => {
  const wsMessage: Message = JSON.parse(event.data)

  console.log('got message', wsMessage)

  updateGameStateFromServerMessage(wsMessage)
}

export function sendMessage(message: Message) {
  console.log('try sending message')
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message))
  } else {
    // if websocket is not connected, just update local state
    updateGameStateFromServerMessage(message)
  }
}
