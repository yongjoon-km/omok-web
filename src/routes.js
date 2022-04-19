import OmokGame from './OmokGame.svelte'
import Entry from './Entry.svelte'

const routes = {
  '/': Entry,
  '/:room': OmokGame,
}

export default routes
