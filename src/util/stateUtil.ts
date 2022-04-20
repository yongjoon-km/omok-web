const HASH_SIZE = 4

export function generateId(keySize: number = HASH_SIZE): string {
  const characters = '0123456789ABCDEFGHIJKLMNPQRSTUVWXYZ'
  let randomString = ''
  for (let i = 0; i < HASH_SIZE; i++) {
    randomString += characters[Math.floor(Math.random() * characters.length)]
  }
  const id = randomString
  console.log('id is', id)
  return id
}
