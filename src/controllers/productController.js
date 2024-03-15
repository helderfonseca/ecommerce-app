import { v4 as uuidv4 } from 'uuid'
import { products } from '../data.js'

export const getProducts = async (request, reply) => {
  reply.send(products)
}

export const getProduct = async (request, reply) => {
  const id = request.params.id
  const product = products.find(item => item.id === id)

  if (!product) {
    reply.status(404).send({
      message: 'Product not Found!'
    })
  }

  reply.send(product);
}

export const postProduct = async (request, reply) => {
  const { name } = request.body
  const id = uuidv4()

  const newData = {
    id,
    name
  }

  products.push(newData)

  reply.status(201).send(newData)
}

export const updateProduct = async (request, reply) => {
  const { id }  = request.params
  const { name } = request.body

  const product = products.find(item => item.id === id)

  if (!product) {
    reply.status(404).send('No product found!')
  }

  product.name = name

  reply.send(product)
}

export const deleteProduct = async (request, reply) => {
  const { id } = request.params

  if (!id) {
    reply.status(500).send({
      message: 'No parameter provided!'
    })
  }

  const productDeleted = products.find(item => item.id === id)

  products.filter(product => product.id !== id)

  reply.send({
    message: `Product ${productDeleted.name} was deleted!`
  })
}