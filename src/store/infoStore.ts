import { writable, Writable } from 'svelte/store'

export type InfoAlert = {
  open: boolean
  message: string
}

const initialInfoAlert: InfoAlert = {
  open: false,
  message: '',
}
export const info: Writable<InfoAlert> = writable(initialInfoAlert)

let alertTimeout

export const showAlert = (message: string, timeSec: number = 2) => {
  clearTimeout(alertTimeout)
  info.update((i) => ({ open: true, message }))

  alertTimeout = setTimeout(() => {
    info.set(initialInfoAlert)
  }, timeSec * 1000)
}
