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

export const showAlert = (message: string, timeSec: number = 2) => {
  info.update((i) => ({ open: true, message }))

  setTimeout(() => {
    info.set(initialInfoAlert)
  }, timeSec * 1000)
}
