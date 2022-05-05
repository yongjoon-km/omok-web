import { writable, Writable } from 'svelte/store'

export const store: Writable<boolean> = writable(false)

export function playPlacingButtonSound() {
  store.update((s) => !s)
}
