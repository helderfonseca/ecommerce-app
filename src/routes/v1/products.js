import { 
  getProducts, 
  getProduct, 
  postProduct, 
  updateProduct, 
  deleteProduct } from "../../controllers/productController.js"

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
  handler: deleteProduct
}

export async function productRoutes(fastify, options) {
  fastify.get('/products', getProductsOptions)
  fastify.get('/products/:id', getProductOptions)
  fastify.post('/products', postProductOptions)
  fastify.put('/products/:id', updateProductOptions)
  fastify.delete('/products/:id', deleteProductOptions)
}
