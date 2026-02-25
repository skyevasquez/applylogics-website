import { serve } from 'srvx/node'
import handler from './dist/server/server.js'

const port = Number(process.env.PORT || 3000)

serve({
  fetch: handler.fetch,
  port,
})

console.log(`Server listening on http://localhost:${port}`)
