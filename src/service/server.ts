type Message = {
  type: string
  args: Object
}

const ws = new WebSocket('ws://localhost:8080/ws')

ws.onopen = () => {
  console.log('server is connected')
}

ws.onmessage = (event) => {
  const wsMessage: Message = JSON.parse(event.data)

  console.log(wsMessage)
  switch (wsMessage.type) {
    case 'place':
      console.log('place message is given')
    default:
      break
  }
}

export function sendMessage(message: Message) {
  console.log('try sending message')
  if (ws.readyState === WebSocket.OPEN) {
    ws.send(JSON.stringify(message))
  } else {
    console.error(`The websocket is closed ${message} is failed`)
  }
}
