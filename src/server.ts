import autoLoad from '@fastify/autoload'
import { join } from 'path'
import fastify from 'fastify'
import cors from '@fastify/cors'

const app = fastify()
app.register(cors, { 
  origin: '*',
})

app.register(autoLoad, {
  dir: join(__dirname, 'infrastructure', 'routes'),
})

app.listen({ port: 3001 })

export default app;
