import { dispatch, ID } from '../action/gameStore'
import { Message } from './type'
import { location } from 'svelte-spa-router'
import { Turn } from '../action/gameTypes'

let ws: WebSocket | null = null
const DOMAIN = 'relay.omokgame.com'

export function connectToGameServer() {
  let roomHash: string = ''
  location.subscribe((l) => {
    roomHash = l.split('/')[1]
  })
  ws = new WebSocket(`wss://${DOMAIN}/ws/${roomHash}`)

  ws.onopen = () => {
    console.log('server is connected')
    const message = { type: 'join', args: { id: ID } }
    sendMessage(message)
  }

  ws.onmessage = (event) => {
    const wsMessage: Message = JSON.parse(event.data)

    updateGameStateWith(wsMessage)
  }

  ws.onclose = () => {
    console.log('close ws connection')
    ws = null
  }
}

export function sendMessage(message: Message) {
  if (ws && ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message))
  } else {
    // if websocket is not connected, just update local state
    updateGameStateWith(message)
  }
}

function updateGameStateWith(message: Message) {
  const { type, args } = message
  if (type === 'join') {
    const joinArgs = args as { id: string }
    if (joinArgs.id !== ID) {
      const message = { type: 'init', args: { id: ID, userStone: Turn.Black } }
      sendMessage(message)
    }
  }
  dispatch(type, args)
}
