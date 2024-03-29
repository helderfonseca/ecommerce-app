// Import the framework and instantiate it
import Fastify from 'fastify'
import { productRoutes } from './routes/v1/products.js'

const fastify = Fastify({
  logger: true
})

// Declare a route
fastify
    .register(productRoutes, { prefix: '/v1' })
    .after(err => {
      if (err) throw err
    })

// Run the server!
const start = async() => {
  try {
    await fastify.listen({ port: 3000 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}

start()