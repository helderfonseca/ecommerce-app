import { getProducts } from "../../controllers/productController.js"
import { postProduct } from "../../controllers/productController.js"
import { updateProduct } from "../../controllers/productController.js"
import { deleteProduct } from "../../controllers/productController.js"
import { getProduct } from "../../controllers/productController.js"

const getProductsOptions = {
  schema: {
    response: {
      200: {
        type: 'array',
        items: {
          type: 'object',
            properties : {
              id: { type: 'string' },
              name: { type: 'string' },
          }
        }
      }
    }
  }, 
  preHandler: async (request, reply) => {},
  handler: getProducts
}

const getProductOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          name: { type: 'string' }
        }
      }
    }
  },
  preHandler: async(request, reply) => {},
  handler: getProduct
}

const postProductOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      201: {
        type: 'object',
          properties : {
            id: { type: 'string' },
            name: { type: 'string' },
          }
        }
      }
  },
  preHandler: async(request, reply) => {},
  handler: postProduct
}

const updateProductOptions = {
  schema: {
    body: {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' }
      }
    },
    response: {
      200: {
        type: 'object',
          properties : {
            id: { type: 'string' },
            name: { type: 'string' },
          }
        }
    }
  },
  preHandler: async(request, reply) => {},
  handler: updateProduct
}

const deleteProductOptions = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          message: { type: 'string' }
        }
      }
    }
  },
  preHandler: async(request, reply) => {},
  handler: deleteProduct
}

export async function productRoutes(fastify, options) {
  fastify.get('/products', getProductsOptions)
  fastify.get('/products/:id', getProductOptions)
  fastify.post('/products', postProductOptions)
  fastify.put('/products/:id', updateProductOptions)
  fastify.delete('/products/:id', deleteProductOptions)
}
